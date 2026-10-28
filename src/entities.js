// Everything that moves on the lane apart from the player: other drivers, tractors, horses,
// cyclists, walkers, dogs, sheep and cattle. Positions are Frenet (s, d); `ang` is heading in
// the (s, d) plane (0 = towards +s, positive = turning left). Pure JS — meshes are attached by game.js.

import { clamp, approach, RNG } from './rng.js';
import { boxOf, dInterval, sExtent } from './physics.js';

let NEXT_ID = 1;
let R = new RNG(4242);
export function seedEntities(seed) {
  R = new RNG(seed);
}

const wrapAngle = (a) => Math.atan2(Math.sin(a), Math.cos(a));

export class Entity {
  constructor(o) {
    this.id = NEXT_ID++;
    this.kind = o.kind;
    this.category = o.category;
    this.name = o.name || o.kind;
    this.s = o.s;
    this.d = o.d ?? 0;
    this.dir = o.dir ?? 1;
    this.ang = o.ang ?? (this.dir > 0 ? 0 : Math.PI);
    this.v = o.v ?? 0;
    this.len = o.len;
    this.wid = o.wid;
    this.solid = true;
    this.removed = false;
    this.vulnerable = !!o.vulnerable;
    this.anim = R.range(0, 10);
    this.seed = R.next();
    this.waveT = 0;
    this.flashT = 0;
    this.shout = 0;
    this.spookT = 0;
    this.vmag = 0;
    this.prevS = this.s;
    this.prevD = this.d;
  }
  box() {
    return boxOf(this);
  }
  tickTimers(dt) {
    this.waveT = Math.max(0, this.waveT - dt);
    this.flashT = Math.max(0, this.flashT - dt);
    this.shout = Math.max(0, this.shout - dt);
    this.spookT = Math.max(0, this.spookT - dt);
  }
  update() {}
}

// ---------------------------------------------------------------------------
// Things on foot (or hoof) that move freely in (s, d)
// ---------------------------------------------------------------------------

export class Mover extends Entity {
  constructor(o) {
    super(o);
    this.vs = 0;
    this.vd = 0;
    this.accel = o.accel ?? 3;
    this.turnRate = o.turnRate ?? 4;
    this.free = false; // when true, may leave the lane (cows heading through a gate)
  }

  move(dt, wantVs, wantVd, ctx) {
    [wantVs, wantVd] = this.avoidPlayer(ctx.player, wantVs, wantVd);
    this.vs = approach(this.vs, wantVs, this.accel * dt);
    this.vd = approach(this.vd, wantVd, this.accel * dt);
    this.s += this.vs * dt;
    this.d += this.vd * dt;
    const sp = Math.hypot(this.vs, this.vd);
    this.vmag = sp;
    this.v = sp;
    if (sp > 0.06) {
      const target = Math.atan2(this.vd, this.vs);
      const diff = wrapAngle(target - this.ang);
      this.ang = wrapAngle(this.ang + clamp(diff, -this.turnRate * dt, this.turnRate * dt));
    }
    if (!this.free) this.clampToLane(ctx.road);
  }

  clampToLane(road) {
    // people can press right back into the hedge when a car is squeezing by
    const m = this.wid / 2 + 0.05 - (this.squeeze ? 0.35 : 0);
    const hi = road.leftBound(this.s) - m;
    const lo = -road.rightBound(this.s) + m;
    if (this.d > hi) {
      this.d = hi;
      this.vd = Math.min(0, this.vd);
    }
    if (this.d < lo) {
      this.d = lo;
      this.vd = Math.max(0, this.vd);
    }
  }

  // Steer around the car rather than walking through it.
  avoidPlayer(p, vs, vd) {
    const c = Math.cos(p.ang);
    const sn = Math.sin(p.ang);
    const rs = this.s - p.s;
    const rd = this.d - p.d;
    const lx = rs * c + rd * sn; // along car
    const ly = -rs * sn + rd * c; // across car
    const hl = p.len / 2 + this.len / 2;
    const hw = p.wid / 2 + this.wid / 2;
    const ox = Math.max(0, Math.abs(lx) - hl);
    const oy = Math.max(0, Math.abs(ly) - hw);
    const dist = Math.hypot(ox, oy);
    const R0 = 1.0;
    if (dist > R0) return [vs, vd];
    // Outward normal in car-local space. Alongside the car (even near a corner) push sideways
    // only, so people and animals can still slip past along its flank.
    let nx = 0;
    let ny = 0;
    if (oy > 0) ny = Math.sign(ly);
    else if (ox > 0) nx = Math.sign(lx);
    else if (hl - Math.abs(lx) < hw - Math.abs(ly)) nx = Math.sign(lx) || 1;
    else ny = Math.sign(ly) || 1;
    const ns = nx * c - ny * sn;
    const nd = nx * sn + ny * c;
    const inward = vs * ns + vd * nd;
    if (inward < 0) {
      vs -= inward * ns;
      vd -= inward * nd;
    }
    const push = (R0 - dist) * 1.6;
    // directly in front of / behind the car: step aside rather than being shoved along
    const aside = nx !== 0 ? Math.sign(this.d - p.d || 1) * push * 0.8 : 0;
    return [vs + ns * push * 0.4, vd + nd * push + aside];
  }

  // how the player relates to me
  playerInfo(p) {
    const rs = this.s - p.s;
    const dist = Math.hypot(rs, this.d - p.d);
    const approaching = (p.v > 0.3 && rs > -2) || (p.v < -0.3 && rs < 2);
    // a car that has stopped close by counts as "wanting to get past" too
    const waiting = Math.abs(p.v) < 0.5 && Math.abs(rs) < 12;
    return { rs, dist, approaching, near: approaching || waiting, pSpeed: Math.abs(p.v) };
  }
}

export class Sheep extends Mover {
  constructor(o) {
    const sc = o.lamb ? 0.62 : 1;
    super({ kind: 'sheep', category: 'animal', name: 'sheep', len: 1.15 * sc, wid: 0.55 * sc, vulnerable: true, accel: 4, turnRate: 5, ...o });
    this.lamb = !!o.lamb;
    this.state = o.state || 'graze';
    this.timer = R.range(0.5, 4);
    this.stubborn = !!o.stubborn;
    this.stubbornT = 0;
    this.grazing = true;
    this.target = null;
    this.fleeVs = 0;
    this.fleeVd = 0;
    this.startled = false;
    this.flockVs = 0;
    this.flockVd = 0;
    this.ang = R.range(-Math.PI, Math.PI);
  }

  update(dt, ctx) {
    this.tickTimers(dt);
    const p = ctx.player;
    const road = ctx.road;
    const info = this.playerInfo(p);
    this.timer -= dt;
    let vs = 0;
    let vd = 0;

    // a fast car bearing down sends sheep bolting — often along the lane in front of it
    if (this.state !== 'flee' && this.state !== 'flock' && info.approaching && info.dist < 22 && info.pSpeed > 9.5) {
      this.state = 'flee';
      this.timer = R.range(2.5, 4);
      const away = Math.sign(this.d - p.d) || R.sign();
      this.fleeVd = away * R.range(1.2, 2.6);
      this.fleeVs = Math.sign(info.rs || 1) * R.range(1.5, 3.2);
      if (!this.startled) {
        this.startled = true;
        ctx.emit('startle', this);
      }
    }

    const onRoad = this.d < road.leftEdge(this.s) + 0.1 && this.d > -road.rightEdge(this.s) - 0.1;
    switch (this.state) {
      case 'graze':
        this.grazing = true;
        if (this.timer < 0) {
          this.state = 'wander';
          this.timer = R.range(1.2, 3);
          this.target = { s: this.s + R.range(-2, 2), d: this.d + R.range(-1.2, 1.2) };
        }
        if (onRoad && info.near && info.dist < 18) {
          if (!this.stubborn || (this.stubbornT += info.dist < 9 && info.pSpeed < 2.5 ? dt : 0) > 2.5) this.startYield(p, road);
        }
        break;
      case 'wander': {
        this.grazing = false;
        const ts = this.target.s - this.s;
        const td = this.target.d - this.d;
        const l = Math.hypot(ts, td);
        if (l < 0.2 || this.timer < 0) {
          this.state = 'graze';
          this.timer = R.range(2, 6);
        } else {
          vs = (ts / l) * 0.35;
          vd = (td / l) * 0.35;
        }
        if (onRoad && info.near && info.dist < 18 && !this.stubborn) this.startYield(p, road);
        break;
      }
      case 'yield': {
        this.grazing = false;
        const td = this.target.d - this.d;
        if (Math.abs(td) < 0.15) {
          this.state = 'graze';
          this.timer = R.range(3, 7);
          this.ang = R.chance(0.5) ? 0 : Math.PI;
        } else {
          vd = Math.sign(td) * 1.0;
          vs = 0.15 * Math.sign(info.rs || 1);
        }
        break;
      }
      case 'flee':
        this.grazing = false;
        vs = this.fleeVs;
        vd = this.fleeVd;
        if (this.timer < 0) {
          this.state = 'graze';
          this.timer = R.range(2, 5);
        }
        break;
      case 'flock':
        this.grazing = false;
        vs = this.flockVs;
        vd = this.flockVd;
        break;
    }
    this.move(dt, vs, vd, ctx);
    if (info.dist < 25 && R.chance(dt * 0.12)) ctx.emit('baa', this);
  }

  startYield(p, road) {
    let side = Math.sign(this.d - p.d) || R.sign();
    const room = (sd) => (sd > 0 ? road.leftBound(this.s) : road.rightBound(this.s)) - (sd > 0 ? road.leftEdge(this.s) : road.rightEdge(this.s));
    if (room(side) < 0.3 && room(-side) > room(side) + 0.4) side = -side;
    const b = side > 0 ? road.leftBound(this.s) : road.rightBound(this.s);
    this.target = { s: this.s, d: side * (b - this.wid / 2 - 0.1) };
    this.state = 'yield';
  }
}

export class Cow extends Mover {
  constructor(o) {
    super({ kind: 'cow', category: 'animal', name: 'cow', len: 2.3, wid: 0.9, vulnerable: false, accel: 1.5, turnRate: 1.8, ...o });
    this.breed = o.breed;
    this.path = o.path || null;
    this.pi = 0;
    this.speed = o.speed ?? R.range(0.85, 1.1);
    this.state = this.path ? 'path' : o.state || 'block';
    this.grazing = this.state !== 'path';
    this.waitNeeded = R.range(4, 7);
    this.waitT = 0;
    this.pauseT = 0;
    this.free = !!this.path;
    if (this.path) this.ang = Math.atan2(this.path[1].d - this.path[0].d, this.path[1].s - this.path[0].s);
    else this.ang = R.range(-Math.PI, Math.PI);
  }

  update(dt, ctx) {
    this.tickTimers(dt);
    const p = ctx.player;
    const info = this.playerInfo(p);
    let vs = 0;
    let vd = 0;
    this.pauseT = Math.max(0, this.pauseT - dt);
    if (this.state === 'path') {
      const t = this.path[this.pi];
      const ts = t.s - this.s;
      const td = t.d - this.d;
      const l = Math.hypot(ts, td);
      if (l < 0.4) {
        this.pi++;
        if (this.pi >= this.path.length) {
          this.state = 'gone';
          this.removed = true;
        }
      } else if (this.pauseT <= 0) {
        // cows won't walk into a car — they stop and stare
        const blocked = info.dist < this.len + p.len * 0.6 && this.headingAt(p);
        const sp = blocked ? 0 : this.speed;
        vs = (ts / l) * sp;
        vd = (td / l) * sp;
      }
      this.grazing = false;
    } else if (this.state === 'block') {
      // Highland coo: in no hurry whatsoever
      if (R.chance(dt * 0.25)) this.grazing = !this.grazing;
      const patient = info.dist < 30 && info.pSpeed < 2.2;
      if (patient) this.waitT += dt;
      if (this.waitT > this.waitNeeded) {
        this.state = 'moving';
        const side = R.sign();
        const b = side > 0 ? ctx.road.leftBound(this.s) : ctx.road.rightBound(this.s);
        this.target = { s: this.s + R.range(-2, 3), d: side * (b - this.wid / 2 - 0.15) };
      }
    } else if (this.state === 'moving') {
      const ts = this.target.s - this.s;
      const td = this.target.d - this.d;
      const l = Math.hypot(ts, td);
      if (l < 0.3) {
        // settle parallel to the lane so it isn't blocking with its backside
        this.state = 'graze';
        this.grazing = true;
        this.ang = R.chance(0.5) ? 0 : Math.PI;
      } else {
        vs = (ts / l) * 0.6;
        vd = (td / l) * 0.6;
      }
    }
    this.move(dt, vs, vd, ctx);
  }

  headingAt(p) {
    const fs = Math.cos(this.ang);
    const fd = Math.sin(this.ang);
    return (p.s - this.s) * fs + (p.d - this.d) * fd > 0;
  }
}

export class Person extends Mover {
  constructor(o) {
    super({ kind: 'person', category: 'person', name: o.name || 'walker', len: 0.5, wid: 0.6, vulnerable: true, accel: 2.5, turnRate: 6, ...o });
    this.style = o.style || 'rambler';
    this.targetD = this.d;
    this.targetSpeed = 0;
    this.armUp = false;
    this.lookAt = null;
    this.ang = this.dir > 0 ? 0 : Math.PI;
  }

  update(dt, ctx) {
    this.tickTimers(dt);
    const vs = this.dir * this.targetSpeed;
    const vd = clamp((this.targetD - this.d) * 1.6, -1.1, 1.1);
    this.move(dt, vs, vd, ctx);
    if (this.vmag < 0.05 && this.lookAt) {
      const a = Math.atan2(this.lookAt.d - this.d, this.lookAt.s - this.s);
      this.ang = wrapAngle(this.ang + clamp(wrapAngle(a - this.ang), -3 * dt, 3 * dt));
    }
  }
}

export class Dog extends Mover {
  constructor(o) {
    super({ kind: 'dog', category: 'animal', name: 'dog', len: 0.75, wid: 0.3, vulnerable: true, accel: 8, turnRate: 8, ...o });
    this.owner = o.owner || null;
    this.mode = o.mode || 'heel';
    this.offS = o.offS ?? 0.6;
    this.offD = o.offD ?? 0.5;
    this.phase = R.range(0, 6);
  }

  update(dt, ctx) {
    this.tickTimers(dt);
    if (!this.owner || this.owner.removed) {
      this.move(dt, 0, 0, ctx);
      return;
    }
    let ts;
    let td;
    if (this.mode === 'herd') {
      // a working collie sweeping side to side behind the flock
      this.phase += dt * 0.9;
      ts = this.owner.s + this.offS;
      td = Math.sin(this.phase) * (ctx.road.baseHalf(this.s) + 0.4);
    } else {
      ts = this.owner.s + this.owner.dir * this.offS;
      td = this.owner.d + this.offD;
    }
    const es = ts - this.s;
    const ed = td - this.d;
    const k = this.mode === 'herd' ? 1.2 : 2.2;
    this.move(dt, clamp(es * k, -4, 4), clamp(ed * k, -3, 3), ctx);
  }
}

// ---------------------------------------------------------------------------
// Drivers, riders and cyclists: travel along the lane with a direction
// ---------------------------------------------------------------------------

export class NPCVehicle extends Entity {
  constructor(o) {
    super({ kind: 'npc', category: o.category || 'vehicle', ...o });
    this.type = o.type;
    this.role = o.role || 'free';
    this.color = o.color;
    this.cruise = o.cruise ?? 9;
    this.canReverse = o.canReverse ?? true;
    this.edgeHugger = !!o.edgeHugger;
    this.patience = o.patience ?? 5;
    this.touring = !!o.touring;
    this.state = 'cruise';
    this.stateT = 0;
    this.holdAt = null;
    this.prefD = null;
    this.speedCap = Infinity;
    this.targetPP = null;
    this.holdPoint = null;
    this.yielded = false;
    this.reversed = false;
    this.resolved = false;
    this.engaged = false;
    this.followT = 0;
    this.waitT = 0;
    this.blockT = 0;
    this.ghostT = 0;
    this.planT = 0;
    this.playerStillT = 0;
    this.revTarget = null;
    this.afterReverse = null;
    this.blockedBy = null;
    this.yaw = 0;
    this.history = [];
    this.v = o.v ?? this.cruise;
    this.d = o.d ?? 0;
  }

  setState(st) {
    if (this.state !== st) {
      this.history.push(st);
      this.state = st;
      this.stateT = 0;
    }
  }

  // tarmac available on my own left / right (passing places included)
  ownLeftEdge(road, s = this.s) {
    return this.dir > 0 ? road.leftEdge(s) : road.rightEdge(s);
  }

  // allowed range for my centre line at s: tarmac (plus a scrap of verge), or the whole verge for riders
  laneLimits(road, s, slack = 0.2) {
    const half = this.wid / 2;
    if (this.edgeHugger) return [-(road.rightBound(s) - 0.2) + half, road.leftBound(s) - 0.2 - half];
    return [-(road.rightEdge(s) + slack) + half, road.leftEdge(s) + slack - half];
  }

  defaultD(road) {
    const hw = road.baseHalf(this.s);
    if (this.edgeHugger) return this.dir * Math.max(0, hw - this.wid / 2 - 0.35);
    if (2 * hw > 2 * this.wid + 1.6) return this.dir * Math.max(0, hw - this.wid / 2 - 0.5);
    return this.dir * Math.min(0.25, Math.max(0, hw - this.wid / 2 - 0.3));
  }

  // fully past the player?
  playerPassed(p) {
    const pe = sExtent(p.box());
    if (this.dir < 0) return this.s + this.len / 2 < p.s - pe - 0.5;
    return p.s - pe > this.s + this.len / 2 + 1.5;
  }

  // Could I squeeze past the player where they are right now? → {side, room, roomy} | null
  passFit(p, road) {
    const b = p.box();
    const [lo0, hi0] = dInterval(b);
    const half = this.wid / 2;
    const ext = sExtent(b);
    const clr = this.edgeHugger ? 0.15 : 0.3;
    const lo = lo0 - clr;
    const hi = hi0 + clr;
    let roomA = Infinity;
    let roomB = Infinity;
    for (const s of [p.s - ext, p.s, p.s + ext]) {
      const [cmin, cmax] = this.laneLimits(road, s, 0.25);
      roomA = Math.min(roomA, lo - half - cmin);
      roomB = Math.min(roomB, cmax - (hi + half));
    }
    if (roomA < 0 && roomB < 0) return null;
    return roomA >= roomB ? { side: -1, room: roomA, roomy: roomA > 0.7 } : { side: 1, room: roomB, roomy: roomB > 0.7 };
  }

  update(dt, ctx) {
    this.tickTimers(dt);
    this.stateT += dt;
    if (this.ghostT > 0) this.ghostT -= dt;
    const p = ctx.player;
    this.playerStillT = Math.abs(p.v) < 0.4 ? this.playerStillT + dt : 0;

    if (this.role === 'oncoming') this.thinkOncoming(dt, ctx);
    else if (this.role === 'ahead') this.thinkAhead(dt, ctx);
    else if (this.role === 'oncomingSimple' || this.role === 'quad') this.thinkSimple(dt, ctx);

    if (this.spookT > 0) {
      this.v = approach(this.v, 0, 6 * dt);
      this.s += this.dir * this.v * dt;
    } else if (this.state === 'reverse') {
      if (this.reverseDrive(dt, ctx)) {
        this.setState(this.afterReverse);
        this.v = 0;
      }
    } else this.drive(dt, ctx);

    // never sit forever behind a sheep that won't budge — real drivers inch through
    const holding = ['waitPP', 'holdOpp', 'standoff'].includes(this.state);
    if (this.v < 0.05 && this.blockedBy && this.blockedBy !== p && !holding) {
      this.blockT += dt;
      if (this.blockT > 6) {
        this.ghostT = 8;
        this.blockT = 0;
      }
    } else this.blockT = 0;
    this.vmag = Math.abs(this.v);
  }

  resolve() {
    this.resolved = true;
    this.holdAt = null;
    this.prefD = null;
    this.speedCap = Infinity;
    this.setState('cruise');
  }

  // --- oncoming traffic (dir = -1): the passing-place dance ---
  thinkOncoming(dt, ctx) {
    const p = ctx.player;
    const road = ctx.road;
    if (this.resolved) return;
    const ahead = p.s - this.s; // < 0: player is in front of us (we travel towards -s)
    if (this.engaged && this.playerPassed(p)) {
      this.resolve();
      return;
    }
    // somebody has tucked in or there's room: just go, gently
    if (this.engaged && ['toPP', 'holdOpp', 'standoff'].includes(this.state)) {
      const fit = this.passFit(p, road);
      if (fit && (this.playerStillT > 0.6 || fit.roomy)) {
        this.setState('passing');
      }
    }
    switch (this.state) {
      case 'cruise':
        this.holdAt = null;
        this.prefD = null;
        this.speedCap = Infinity;
        if (ahead < 0 && ahead > -(ctx.sightDistance ?? 85) && !this.engaged) {
          this.engaged = true;
          this.plan(ctx);
        }
        break;
      case 'toPP': {
        const pp = this.targetPP;
        if (p.s - sExtent(p.box()) > pp.s1 - 1) {
          // the player drove past the passing place: rethink
          this.plan(ctx);
          break;
        }
        // stop level with the middle of the bay (or right here if we're already past it)
        this.holdAt = Math.max(pp.s0 + this.len / 2 + 1, Math.min(pp.mid, this.s));
        this.speedCap = 7;
        if (this.s - this.len / 2 < pp.s1 + 3) this.prefD = -(road.rightEdge(pp.mid) - this.wid / 2 - 0.2);
        if (Math.abs(this.s - this.holdAt) < 1.2 && this.v < 0.15 && Math.abs(this.prefD - this.d) < 0.2) {
          this.setState('waitPP');
          this.yielded = true;
          this.flashT = 1.4;
          ctx.emit('npcYield', this);
        }
        break;
      }
      case 'waitPP':
        this.holdAt = this.s;
        if (this.playerStillT > 4 && this.flashT <= 0 && this.stateT > 4) this.flashT = 1.4; // "go on, you go"
        break;
      case 'holdOpp': {
        const pp = this.targetPP;
        // the player drove past it, or we rolled past the near end of it: rethink
        if (p.s - sExtent(p.box()) > pp.s1 + 1 || this.s - this.len / 2 < pp.s1 - 3) {
          this.plan(ctx);
          break;
        }
        this.holdAt = this.holdPoint;
        this.prefD = -(road.rightEdge(this.s) - this.wid / 2 - 0.15);
        this.speedCap = 6;
        if (this.v < 0.1 && Math.abs(this.s - this.holdPoint) < 1.5 && !this.yielded) {
          this.yielded = true;
          this.flashT = 1.4;
          ctx.emit('npcHold', this);
        }
        // they've stopped short and can't get in: back up a few metres to give them room
        if (this.playerStillT > 8 && this.stateT > 8 && this.canReverse && this.v < 0.1) {
          this.revTarget = this.s - this.dir * 8;
          this.holdPoint = this.revTarget;
          this.afterReverse = 'holdOpp';
          this.setState('reverse');
        }
        break;
      }
      case 'standoff': {
        this.holdAt = p.s + sExtent(p.box()) + this.len / 2 + 6;
        this.prefD = null;
        this.speedCap = 4;
        this.planT -= dt;
        if (this.planT <= 0) {
          this.planT = 0.8;
          this.plan(ctx, true);
          if (this.state !== 'standoff') break;
        }
        if (this.playerStillT > 7 && this.canReverse && this.v < 0.1) this.startReverse(ctx);
        break;
      }
      case 'reverse': {
        const pp = this.targetPP;
        if (this.afterReverse === 'waitPP' && this.s + this.len / 2 > pp.s0 + 1) this.prefD = -(road.rightEdge(pp.mid) - this.wid / 2 - 0.2);
        break;
      }
      case 'passing':
        this.holdAt = null;
        this.prefD = null;
        this.speedCap = 4.5;
        if (this.blockedBy === p && this.v < 0.1 && this.stateT > 2) this.plan(ctx);
        break;
    }
  }

  plan(ctx, quiet = false) {
    const p = ctx.player;
    const road = ctx.road;
    const pe = sExtent(p.box());
    const fit = this.passFit(p, road);
    if (fit && (Math.abs(p.v) < 1.2 || fit.roomy)) {
      this.setState('passing');
      return;
    }
    const front = p.s + pe;
    // Bays between us. One on our own left still counts if we're alongside it (we can tuck in),
    // but one on the player's side must be entirely in front of us, or they can't reach it.
    const myFront = this.s - this.len / 2;
    const cands = road.passingPlaces.filter(
      (pp) => pp.s0 > front - 3 && (pp.side < 0 ? pp.s0 < this.s + this.len / 2 - 1 : pp.s1 < myFront + 1),
    );
    if (!cands.length) {
      if (this.state !== 'standoff') {
        this.setState('standoff');
        this.planT = 0.8;
        if (!quiet) ctx.emit('standoff', this);
      }
      return;
    }
    cands.sort((a, b) => b.s0 - a.s0); // nearest to us first
    const pp = cands[0];
    this.targetPP = pp;
    if (pp.side < 0) this.setState('toPP');
    else {
      this.holdPoint = Math.min(this.s, pp.s1 + this.len / 2 + 2);
      this.setState('holdOpp');
    }
  }

  startReverse(ctx) {
    const road = ctx.road;
    const behind = road.passingPlaces.filter((pp) => pp.s0 > this.s - 2 && pp.s0 < this.s + 170).sort((a, b) => a.s0 - b.s0);
    if (!behind.length) {
      this.noBayBehind = true;
      return;
    }
    const pp = behind[0];
    this.targetPP = pp;
    this.reversed = true;
    this.yielded = true;
    if (pp.side < 0) {
      this.revTarget = pp.mid;
      this.afterReverse = 'waitPP';
    } else {
      this.revTarget = pp.s1 + this.len / 2 + 2;
      this.holdPoint = this.revTarget;
      this.afterReverse = 'holdOpp';
    }
    this.setState('reverse');
    ctx.emit('npcReverse', this);
  }

  // --- slow traffic ahead (dir = +1): tractors, horses and cyclists that pull over ---
  thinkAhead(dt, ctx) {
    const p = ctx.player;
    const road = ctx.road;
    const gap = this.s - this.len / 2 - (p.s + sExtent(p.box()));
    this.followGap = gap;
    if (this.resolved) {
      // stay tucked in the gateway until the player is well away, then turn off into the field
      if (this.state === 'waitPP') {
        this.holdAt = this.s;
        if (p.s - this.s > 60) this.removed = true;
      } else {
        this.prefD = null;
        this.holdAt = null;
        if (p.s - this.s > 70) this.removed = true;
      }
      return;
    }
    if (this.playerPassed(p)) {
      this.resolved = true;
      return;
    }
    switch (this.state) {
      case 'cruise':
        this.holdAt = null;
        this.prefD = null;
        this.speedCap = Infinity;
        if (gap > -1 && gap < 35) this.followT += dt;
        else this.followT = Math.max(0, this.followT - dt * 0.5);
        if (this.followT > this.patience) {
          // a bay on our left — or, for a horse or bike, any field gateway on the left
          // skipping bays another driver is already heading for
          const taken = (q) => ctx.obstacles.some((o) => o !== this && o.targetPP === q && (o.state === 'toPP' || o.state === 'waitPP'));
          let pp = road.passingPlaces.find((q) => q.side > 0 && q.s0 > this.s + 4 && q.s0 < this.s + 220 && !taken(q));
          if (this.vulnerable) {
            const gate = road.gates.find((g) => g.side > 0 && g.s > this.s + 6 && g.s < this.s + 220 && (!pp || g.s < pp.mid));
            if (gate) pp = { s0: gate.s - 3, s1: gate.s + 3, mid: gate.s, side: 1, gateway: true };
          }
          if (pp) {
            this.targetPP = pp;
            this.setState('toPP');
          }
        }
        if (this.s > road.village.s0 - 25) this.removed = true; // turns off before the village
        break;
      case 'toPP': {
        const pp = this.targetPP;
        this.holdAt = pp.mid;
        if (this.s + this.len / 2 > pp.s0 + 1) this.prefD = (pp.gateway ? road.leftBound(pp.mid) : road.leftEdge(pp.mid)) - this.wid / 2 - 0.2;
        if (Math.abs(this.s - pp.mid) < 1.2 && this.v < 0.15) {
          this.setState('waitPP');
          this.yielded = true;
          this.waitT = 0;
          ctx.emit('npcPullOver', this);
        }
        break;
      }
      case 'waitPP': {
        this.holdAt = this.s;
        this.waitT += dt;
        // stopped short of the bay (something else in it), so not actually out of the way: carry on
        const roomBeside = this.d - this.wid / 2 + road.rightEdge(this.s);
        if ((this.waitT > 20 && gap > 20) || (this.waitT > 5 && roomBeside < p.wid + 0.3)) {
          this.setState('cruise');
          this.followT = -15;
        }
        break;
      }
    }
  }

  thinkSimple(dt, ctx) {
    if (!this.resolved && this.playerPassed(ctx.player) && this.engaged) this.resolve();
    const ahead = this.dir * (ctx.player.s - this.s);
    if (ahead > 0 && ahead < 80) this.engaged = true;
  }

  // --- low level driving: follow the lane, stop for obstacles, slot past them when there's room ---
  drive(dt, ctx) {
    const road = ctx.road;
    let targetD = this.prefD ?? this.defaultD(road);
    let stopDist = Infinity;
    if (this.holdAt != null) stopDist = this.dir * (this.holdAt - this.s);
    const bendS = this.dir > 0 ? this.s : this.s - 40;
    let vCap = Math.min(this.cruise, this.speedCap, road.advisorySpeed(bendS, 2.2));
    const look = 14 + (this.v * this.v) / 5;
    const half = this.wid / 2;
    const myExt = this.len / 2;
    this.blockedBy = null;

    const obs = [];
    for (const o of ctx.obstacles) {
      if (o === this || o.removed || !o.solid) continue;
      if (this.ghostT > 0 && o !== ctx.player) continue;
      if (o.riderOf === this) continue;
      const ob = o.box();
      const ext = sExtent(ob);
      const rel = this.dir * (o.s - this.s);
      const near = rel - ext - myExt;
      if (near > look) continue;
      if (rel < -(ext + myExt) + 0.3) continue;
      obs.push({ o, ob, near });
    }
    obs.sort((a, b) => a.near - b.near);
    for (const it of obs) {
      const [lo0, hi0] = dInterval(it.ob);
      const cat = it.o.category;
      // bikes, horses and quads will squeeze past a stopped car at walking pace
      const clr = cat === 'player' && this.edgeHugger ? 0.15 : cat === 'vehicle' || cat === 'player' ? 0.3 : cat === 'animal' ? 0.4 : 0.8;
      const lo = lo0 - clr;
      const hi = hi0 + clr;
      const [cmin, cmax] = this.laneLimits(road, it.o.s);
      const r1 = [cmin, Math.min(cmax, lo - half)];
      const r2 = [Math.max(cmin, hi + half), cmax];
      const ok1 = r1[1] >= r1[0];
      const ok2 = r2[1] >= r2[0];
      // something moving our way at a decent lick isn't something to steer around yet
      let ch = null;
      if (ok1 && ok2) {
        const e1 = Math.abs(clamp(targetD, r1[0], r1[1]) - targetD);
        const e2 = Math.abs(clamp(targetD, r2[0], r2[1]) - targetD);
        ch = Math.abs(e1 - e2) < 0.05 ? (this.dir > 0 ? r2 : r1) : e1 < e2 ? r1 : r2;
      } else ch = ok1 ? r1 : ok2 ? r2 : null;
      if (!ch) {
        stopDist = Math.min(stopDist, it.near - (cat === 'player' ? 5 : 2.5));
        this.blockedBy = it.o;
        break;
      }
      targetD = clamp(targetD, ch[0], ch[1]);
      const need = Math.abs(targetD - this.d);
      if (need > 0.12) vCap = Math.min(vCap, 1.2 + Math.max(0, it.near) * 0.35);
      // vulnerable road users get passed slowly
      if (it.o.vulnerable && it.near < 12) vCap = Math.min(vCap, 3.5);
    }

    if (stopDist < Infinity) {
      vCap = Math.min(vCap, Math.sqrt(2 * 2.6 * Math.max(0, stopDist - 0.2)));
      if (stopDist < 0.3) vCap = 0;
    }
    this.v = approach(this.v, Math.max(0, vCap), (vCap > this.v ? 2.2 : 6.5) * dt);
    const easing = this.prefD != null && this.v < 0.5 ? 0.6 : 0.12;
    const maxLat = 0.32 * Math.abs(this.v) + easing;
    const dd = clamp(targetD - this.d, -maxLat * dt, maxLat * dt);
    this.d += dd;
    this.s += this.dir * this.v * dt;
    this.updateYaw(dd / dt, dt);
  }

  reverseDrive(dt, ctx) {
    const remaining = (this.revTarget - this.s) * -this.dir;
    let vT = -Math.min(2.6, Math.sqrt(2 * 1.2 * Math.max(0, remaining)));
    if (remaining < 0.3) vT = 0;
    this.v = approach(this.v, vT, 2.5 * dt);
    const targetD = this.prefD ?? this.defaultD(ctx.road);
    const maxLat = 0.4 * Math.abs(this.v) + 0.1;
    const dd = clamp(targetD - this.d, -maxLat * dt, maxLat * dt);
    this.d += dd;
    this.s += this.dir * this.v * dt;
    this.updateYaw(dd / dt, dt);
    return remaining < 0.3 && Math.abs(this.v) < 0.05 && Math.abs(targetD - this.d) < 0.15;
  }

  updateYaw(vd, dt) {
    const vdOwn = vd * this.dir;
    let yawT = this.yaw;
    if (Math.abs(this.v) > 0.3) yawT = clamp(Math.atan(vdOwn / this.v), -0.5, 0.5);
    else yawT = this.yaw * 0.98;
    this.yaw = approach(this.yaw, yawT, 1.5 * dt);
    this.ang = (this.dir > 0 ? 0 : Math.PI) + this.yaw;
  }
}
