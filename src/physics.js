// Player vehicle dynamics and collision helpers, all in the road's Frenet frame (s, d).
// Angles in the (s, d) plane are measured from +s towards +d (left). Pure JS.

import { clamp } from './rng.js';

// ---- oriented boxes in the (s, d) plane ----
// box = { s, d, a, hl, hw }  (centre, heading angle, half length, half width)

export function boxOf(e) {
  return { s: e.s, d: e.d, a: e.ang, hl: e.len / 2, hw: e.wid / 2 };
}

export function dExtent(b) {
  return b.hl * Math.abs(Math.sin(b.a)) + b.hw * Math.abs(Math.cos(b.a));
}

export function sExtent(b) {
  return b.hl * Math.abs(Math.cos(b.a)) + b.hw * Math.abs(Math.sin(b.a));
}

export function dInterval(b) {
  const e = dExtent(b);
  return [b.d - e, b.d + e];
}

// Separating axis test. Returns null or { ns, nd, depth } where (ns, nd) is the unit
// direction that pushes A out of B.
export function overlap(A, B) {
  const axes = [
    [Math.cos(A.a), Math.sin(A.a)],
    [-Math.sin(A.a), Math.cos(A.a)],
    [Math.cos(B.a), Math.sin(B.a)],
    [-Math.sin(B.a), Math.cos(B.a)],
  ];
  const ds = A.s - B.s;
  const dd = A.d - B.d;
  let best = null;
  for (const [ns, nd] of axes) {
    const rA = A.hl * Math.abs(Math.cos(A.a) * ns + Math.sin(A.a) * nd) + A.hw * Math.abs(-Math.sin(A.a) * ns + Math.cos(A.a) * nd);
    const rB = B.hl * Math.abs(Math.cos(B.a) * ns + Math.sin(B.a) * nd) + B.hw * Math.abs(-Math.sin(B.a) * ns + Math.cos(B.a) * nd);
    const proj = ds * ns + dd * nd;
    const o = rA + rB - Math.abs(proj);
    if (o <= 0) return null;
    if (!best || o < best.depth) {
      const sg = proj >= 0 ? 1 : -1;
      best = { ns: ns * sg, nd: nd * sg, depth: o };
    }
  }
  return best;
}

// Lateral gap between two boxes that sit side by side (negative = overlapping in d)
export function lateralGap(A, B) {
  const [a0, a1] = dInterval(A);
  const [b0, b1] = dInterval(B);
  return Math.max(b0 - a1, a0 - b1);
}

// Do the boxes overlap along s (are they alongside each other)?
export function alongside(A, B, margin = 0) {
  return Math.abs(A.s - B.s) < sExtent(A) + sExtent(B) + margin;
}

// ---- player car ----

export class PlayerCar {
  constructor(def, s = 12, d = 0.4) {
    this.def = def;
    this.kind = 'player';
    this.category = 'player';
    this.len = def.length;
    this.wid = def.width;
    this.s = s;
    this.d = d;
    this.ang = 0; // psi: heading relative to the road
    this.v = 0; // signed speed along the car's own axis
    this.steer = 0;
    this.solid = true;
    this.odometer = 0;
    this.reverseDist = 0;
    this.contactL = false;
    this.contactR = false;
    this.onVerge = false;
    this.inWater = false;
    this.latAcc = 0;
    this.longAcc = 0;
  }

  get speed() {
    return Math.abs(this.v);
  }

  box() {
    return { s: this.s, d: this.d, a: this.ang, hl: this.len / 2, hw: this.wid / 2 };
  }

  // a point in car-local coordinates (f forward, l left) → (s, d)
  local(f, l) {
    const c = Math.cos(this.ang);
    const sn = Math.sin(this.ang);
    return { s: this.s + f * c - l * sn, d: this.d + f * sn + l * c };
  }

  wheels() {
    const wb = this.def.wheelbase / 2;
    const tw = this.wid / 2 - 0.22;
    return [this.local(wb, tw), this.local(wb, -tw), this.local(-wb, tw), this.local(-wb, -tw)];
  }

  // input: { throttle 0..1, brake 0..1, steer -1..1 (+ = left), handbrake bool }
  // returns contact report for scoring/damage
  step(dt, input, road) {
    const D = this.def;
    const speed = Math.abs(this.v);

    // --- steering (speed sensitive, so it's twitchy in a car park and calm at speed)
    const lock = D.maxSteer / (1 + speed / 11);
    const target = clamp(input.steer, -1, 1) * lock;
    const rate = 1.4 + 1.6 * (1 - Math.min(1, speed / 15));
    this.steer += clamp(target - this.steer, -rate * dt, rate * dt);

    // --- surface
    const wheels = this.wheels();
    let verge = 0;
    for (const w of wheels) {
      if (w.d > road.leftEdge(w.s) + 0.05 || w.d < -road.rightEdge(w.s) - 0.05) verge++;
    }
    this.onVerge = verge > 0;
    this.inWater = !!road.fordAt(this.s);

    // --- longitudinal
    let a = 0;
    const thr = input.throttle || 0;
    const brk = input.brake || 0;
    if (thr > 0) {
      if (this.v < -0.25) a += D.brake * thr;
      else a += D.accel * thr * Math.max(0, 1 - Math.max(0, this.v) / D.maxSpeed);
    }
    if (brk > 0) {
      if (this.v > 0.25) a -= D.brake * brk;
      else a -= D.accel * 0.75 * brk * Math.max(0, 1 - Math.max(0, -this.v) / D.reverseMax);
    }
    const grade = road.grade(this.s) * Math.cos(this.ang);
    a -= 9.81 * grade * 0.55;
    let resist = 0.3 + 0.0018 * this.v * this.v + verge * 0.35;
    if (this.inWater) resist += 0.35 + 0.14 * this.v * this.v;
    if (thr === 0 && brk === 0) resist += D.engineBrake;
    if (input.handbrake) resist += 9;

    const before = this.v;
    let v = this.v + a * dt;
    const r = resist * dt;
    if (v > 0) v = Math.max(0, v - r);
    else if (v < 0) v = Math.min(0, v + r);
    // braking stops at zero rather than flicking straight into reverse
    if (brk > 0 && before > 0.25 && v < 0) v = 0;
    if (thr > 0 && before < -0.25 && v > 0) v = 0;
    this.v = clamp(v, -D.reverseMax, D.maxSpeed);
    this.longAcc = (this.v - before) / dt;

    // --- kinematics in the Frenet frame
    const k = road.curvature(this.s);
    const denom = Math.max(0.2, 1 - k * this.d);
    const sdot = (this.v * Math.cos(this.ang)) / denom;
    const ddot = this.v * Math.sin(this.ang);
    const yawRate = (this.v * Math.tan(this.steer)) / D.wheelbase;
    this.latAcc = yawRate * this.v;
    this.ang += (yawRate - k * sdot) * dt;
    this.ang = Math.atan2(Math.sin(this.ang), Math.cos(this.ang));
    const ds = sdot * dt;
    this.s += ds;
    this.d += ddot * dt;
    this.odometer += Math.max(0, ds);
    if (ds < 0) this.reverseDist += -ds;

    return this._collideBoundaries(road, dt);
  }

  _collideBoundaries(road, dt) {
    const hl = this.len / 2;
    const hw = this.wid / 2;
    let penL = 0;
    let penR = 0;
    let sL = 0;
    let sR = 0;
    for (const f of [-hl, 0, hl]) {
      for (const l of [-hw, hw]) {
        const p = this.local(f, l);
        const bl = road.leftBound(p.s);
        const br = road.rightBound(p.s);
        if (p.d - bl > penL) {
          penL = p.d - bl;
          sL = p.s;
        }
        if (-br - p.d > penR) {
          penR = -br - p.d;
          sR = p.s;
        }
      }
    }
    const report = { left: null, right: null, end: false };
    const vLat = this.v * Math.sin(this.ang);
    if (penL > 0) {
      this.d -= penL;
      const impact = this.contactL ? 0 : Math.max(0, vLat);
      report.left = { type: road.typeLeft(sL), impact, slide: Math.abs(this.v) };
      if (vLat > 0) this.ang *= Math.max(0, 1 - 7 * dt);
      this.v *= Math.max(0, 1 - (0.5 + 3 * Math.abs(Math.sin(this.ang))) * dt);
    }
    if (penR > 0) {
      this.d += penR;
      const impact = this.contactR ? 0 : Math.max(0, -vLat);
      report.right = { type: road.typeRight(sR), impact, slide: Math.abs(this.v) };
      if (vLat < 0) this.ang *= Math.max(0, 1 - 7 * dt);
      this.v *= Math.max(0, 1 - (0.5 + 3 * Math.abs(Math.sin(this.ang))) * dt);
    }
    this.contactL = penL > 0;
    this.contactR = penR > 0;

    // the gate behind the start, and the pub wall at the very end
    const ext = sExtent(this.box());
    if (this.s - ext < 1.5) {
      this.s = 1.5 + ext;
      if (this.v < 0) {
        report.end = Math.abs(this.v);
        this.v = 0;
      }
    }
    if (this.s + ext > road.length - 1) {
      this.s = road.length - 1 - ext;
      if (this.v > 0) {
        report.end = Math.abs(this.v);
        this.v = 0;
      }
    }
    return report;
  }
}
