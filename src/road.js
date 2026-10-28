// Procedural lane generation. Everything along the road lives in Frenet coordinates:
//   s = distance along the centreline (m), d = lateral offset (m, positive = LEFT when facing +s).
// The player drives towards +s and, this being Britain, keeps to the left (d > 0).
// Pure JS (no Three.js) so it can be unit tested under node.

import { RNG, makeNoise1D, clamp, lerp, smoothstep } from './rng.js';

export const HEDGE = 0;
export const WALL = 1;
export const OPEN = 2;
export const FENCE = 3;

export const BOUNDARY = {
  [HEDGE]: { name: 'hedge', damage: 0.45, label: 'Scraped the hedge' },
  [WALL]: { name: 'wall', damage: 1.3, label: 'Scraped a stone wall' },
  [OPEN]: { name: 'ditch', damage: 0.6, label: 'Dropped a wheel in the ditch' },
  [FENCE]: { name: 'fence', damage: 0.8, label: 'Clipped the fence' },
};

const TYPE_IDS = { hedge: HEDGE, wall: WALL, open: OPEN, fence: FENCE };
const STEP = 1;

// sign boards: rectangular ones carry text; the rest are round or triangular warnings
export function signSize(kind) {
  const rect = !['pp', 'sheep', 'cattle', 'horse', 'ford', 'grid'].includes(kind);
  const w = rect ? 1.6 : kind === 'pp' ? 1.0 : 0.95;
  return { rect, w, h: rect ? w / 2 : w };
}
// a sign stands this far from the tarmac edge (to the near edge of its board)
export const SIGN_GAP = 0.2;

export class Road {
  constructor(region, seed = region.seed) {
    this.region = region;
    this.seed = seed;
    this.rng = new RNG(seed);
    this.step = STEP;
    this.length = region.length;
    this.n = Math.floor(this.length / STEP) + 1;
    const n = this.n;
    const F = () => new Float32Array(n);
    const U = () => new Uint8Array(n);
    Object.assign(this, {
      x: F(), z: F(), y: F(), th: F(), k: F(),
      hw: F(), wL: F(), wR: F(), vL: F(), vR: F(), bL: F(), bR: F(), hL: F(), hR: F(),
      tL: U(), tR: U(), gapL: U(), gapR: U(), grass: U(), zone: U(),
    });
    this.passingPlaces = [];
    this.gates = [];
    this.fords = [];
    this.grids = [];
    this.potholes = [];
    this.markings = [];
    this.signs = [];
    this.encounters = [];
    this.village = { s0: this.length - 190, s1: this.length };
    this.finishS = this.length - 32;

    this._genPlan();
    this._genElevation();
    this._genWidths();
    this._genZones();
    this._genPassingPlaces();
    this._genBoundaryTypes();
    this._genEncounters();
    this._genFeatures();
    this._genGates();
    this._finalizeBoundaries();
    this._genSigns();
    this._buildIndex();
  }

  // ---------- generation ----------

  _genPlan() {
    const { rng, n } = this;
    const R = this.region.road;
    const kRaw = new Float32Array(n);
    let i = 0;
    let heading = 0;
    const maxHeading = 1.3; // keeps the route always progressing in +z, so it can never cross itself
    while (i < n) {
      let len;
      let kv;
      if (i < 60 || i > n - 200 || rng.chance(R.straightProb)) {
        len = rng.range(R.straight[0], R.straight[1]);
        kv = rng.range(-0.002, 0.002);
      } else {
        const radius = rng.range(R.minR, R.maxR);
        const bias = clamp(heading / R.maxDev, -1, 1);
        let sgn = rng.next() < 0.5 - 0.42 * bias ? 1 : -1;
        const ang = rng.range(0.3, 1.35);
        len = clamp(ang * radius, 14, 120);
        if (Math.abs(heading + (sgn * len) / radius) > maxHeading) sgn = -sgn;
        kv = sgn / radius;
      }
      len = Math.max(4, Math.round(len));
      for (let j = 0; j < len && i < n; j++) {
        kRaw[i++] = kv;
        heading += kv * STEP;
      }
    }
    // Smooth curvature twice so bends ease in and out like real lanes
    const k = this.k;
    smoothArray(kRaw, k, 9);
    smoothArray(k, kRaw, 9);
    k.set(kRaw);

    // Clamp integrated heading so the road always heads broadly "north"
    let th = 0;
    for (let j = 0; j < n; j++) {
      if ((th > maxHeading && k[j] > 0) || (th < -maxHeading && k[j] < 0)) k[j] *= 0.2;
      this.th[j] = th;
      th += k[j] * STEP;
    }
    this.x[0] = 0;
    this.z[0] = 0;
    for (let j = 1; j < n; j++) {
      const mid = (this.th[j - 1] + this.th[j]) * 0.5;
      this.x[j] = this.x[j - 1] + Math.sin(mid) * STEP;
      this.z[j] = this.z[j - 1] + Math.cos(mid) * STEP;
    }
  }

  _genElevation() {
    const { n } = this;
    const R = this.region.road;
    const n1 = makeNoise1D(this.seed + 11);
    const n2 = makeNoise1D(this.seed + 23);
    const raw = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      const s = i * STEP;
      raw[i] = R.hills * (0.75 * n1(s / 260) + 0.25 * n2(s / 85 + 40));
    }
    // flatten the start and the village
    for (let i = 0; i < n; i++) {
      const s = i * STEP;
      const fStart = smoothstep(0, 60, s);
      const fEnd = 1 - smoothstep(this.length - 200, this.length - 120, s);
      const base = raw[0];
      raw[i] = lerp(base, raw[i], fStart);
      if (fEnd < 1) raw[i] = lerp(raw[Math.max(0, i - 1)], raw[i], fEnd);
    }
    // grade limiting
    for (let i = 1; i < n; i++) {
      const dy = raw[i] - raw[i - 1];
      raw[i] = raw[i - 1] + clamp(dy, -R.maxGrade * STEP, R.maxGrade * STEP);
    }
    smoothArray(raw, this.y, 12);
    smoothArray(this.y, raw, 12);
    this.y.set(raw);
  }

  _genWidths() {
    const R = this.region.road;
    const nw = makeNoise1D(this.seed + 37);
    for (let i = 0; i < this.n; i++) {
      const s = i * STEP;
      const t = 0.5 + 0.5 * nw(s / 140);
      let hw = lerp(R.halfWidth[0], R.halfWidth[1], t);
      // the village street is wide enough for two cars
      hw = lerp(hw, 2.7, smoothstep(this.village.s0 - 30, this.village.s0 + 10, s));
      // the pub car park at the end
      const park = smoothstep(this.length - 45, this.length - 25, s) * 2.8;
      this.hw[i] = hw;
      this.wL[i] = hw + park;
      this.wR[i] = hw + park;
    }
  }

  _genZones() {
    const zones = this.region.zones;
    let zi = 0;
    for (let i = 0; i < this.n; i++) {
      const f = (i * STEP) / this.length;
      while (zi < zones.length - 1 && f > zones[zi].to) zi++;
      this.zone[i] = zi;
    }
  }

  _genPassingPlaces() {
    const { rng } = this;
    const P = this.region.pp;
    let s = 80 + rng.range(0, 60);
    let id = 0;
    while (s < this.village.s0 - 40) {
      const len = rng.range(P.len[0], P.len[1]);
      const side = rng.sign();
      const pp = { id: id++, s0: s, s1: s + len, mid: s + len / 2, side, extra: P.extra, gate: P.gateways && rng.chance(0.6) };
      this.passingPlaces.push(pp);
      this._widen(pp);
      s += rng.range(P.spacing[0], P.spacing[1]);
    }
  }

  _widen(pp) {
    const taper = 7;
    const i0 = Math.max(0, Math.floor(pp.s0));
    const i1 = Math.min(this.n - 1, Math.ceil(pp.s1));
    for (let i = i0; i <= i1; i++) {
      const s = i * STEP;
      const f = smoothstep(pp.s0, pp.s0 + taper, s) * (1 - smoothstep(pp.s1 - taper, pp.s1, s));
      const w = pp.extra * f;
      if (pp.side > 0) this.wL[i] = Math.max(this.wL[i], this.hw[i] + w);
      else this.wR[i] = Math.max(this.wR[i], this.hw[i] + w);
    }
  }

  _genBoundaryTypes() {
    const { rng } = this;
    const reg = this.region;
    const hn = makeNoise1D(this.seed + 51);
    let i = 0;
    while (i < this.n) {
      const zone = reg.zones[this.zone[i]];
      const len = Math.round(rng.range(60, 220));
      const left = TYPE_IDS[rng.weighted(zone.weights)];
      const right = rng.chance(0.65) ? left : TYPE_IDS[rng.weighted(zone.weights)];
      const vL = rng.range(...reg.boundary.verge[typeName(left)]);
      const vR = rng.range(...reg.boundary.verge[typeName(right)]);
      for (let j = 0; j < len && i < this.n; j++, i++) {
        if (this.zone[i] !== this.zone[Math.max(0, i - 1)] && j > 0) break; // new zone → new section
        this.tL[i] = left;
        this.tR[i] = right;
        this.vL[i] = vL;
        this.vR[i] = vR;
      }
    }
    // the village: low garden walls
    for (let i = 0; i < this.n; i++) {
      const s = i * STEP;
      if (s > this.village.s0) {
        this.tL[i] = WALL;
        this.tR[i] = WALL;
        this.vL[i] = 1.2;
        this.vR[i] = 1.2;
      }
    }
    smoothArray(this.vL, this.bL, 6); // use bL/bR as scratch for smoothed verges
    this.vL.set(this.bL);
    smoothArray(this.vR, this.bR, 6);
    this.vR.set(this.bR);
    // boundary heights
    const H = reg.boundary;
    for (let i = 0; i < this.n; i++) {
      const s = i * STEP;
      const t1 = 0.5 + 0.5 * hn(s / 35);
      const t2 = 0.5 + 0.5 * hn(s / 35 + 300);
      this.hL[i] = this.tL[i] === HEDGE ? lerp(H.hedgeHeight[0], H.hedgeHeight[1], t1) : this.tL[i] === WALL ? lerp(H.wallHeight[0], H.wallHeight[1], t1) : 1.1;
      this.hR[i] = this.tR[i] === HEDGE ? lerp(H.hedgeHeight[0], H.hedgeHeight[1], t2) : this.tR[i] === WALL ? lerp(H.wallHeight[0], H.wallHeight[1], t2) : 1.1;
      if (s > this.village.s0) {
        this.hL[i] = 0.95;
        this.hR[i] = 0.95;
      }
      const z = reg.zones[this.zone[i]];
      this.grass[i] = 0;
      if (!z.sheepy && reg.grassStrip > 0) {
        const g = 0.5 + 0.5 * hn(s / 60 + 900);
        this.grass[i] = g < reg.grassStrip ? 1 : 0;
      }
    }
  }

  _genEncounters() {
    const { rng } = this;
    const E = this.region.encounters;
    const positions = [];
    let s = 230 + rng.range(0, 40);
    while (s < this.village.s0 - 110) {
      positions.push(s);
      s += rng.range(E.spacing[0], E.spacing[1]);
    }
    const types = [...E.mandatory];
    while (types.length < positions.length) types.push(rng.weighted(E.weights));
    types.length = positions.length;
    rng.shuffle(types);
    // put woolly encounters on open hill sections where they belong
    const zones = this.region.zones;
    const sheepish = (t) => t === 'sheep' || t === 'flock' || t === 'highlandCow';
    const isSheepy = (pos) => !!zones[this.zone[Math.floor(pos)]].sheepy;
    const anySheepy = zones.some((z) => z.sheepy);
    if (anySheepy) {
      for (let a = 0; a < types.length; a++) {
        if (!sheepish(types[a]) || isSheepy(positions[a])) continue;
        for (let b = 0; b < types.length; b++) {
          if (!sheepish(types[b]) && isSheepy(positions[b])) {
            [types[a], types[b]] = [types[b], types[a]];
            break;
          }
        }
      }
    }
    // avoid two oncoming vehicles back to back with nothing in between
    for (let a = 0; a < types.length; a++) {
      let pos = positions[a];
      if (types[a] === 'cattleCrossing') {
        // keep the crossing clear of passing places so the gates have hedge either side
        for (const pp of this.passingPlaces) {
          if (pos > pp.s0 - 14 && pos < pp.s1 + 14) pos = pp.s1 + 16;
        }
      }
      this.encounters.push({ type: types[a], s: pos, id: a });
    }
  }

  _genFeatures() {
    const { rng } = this;
    const F = this.region.features;
    const clearOf = (pos, margin) =>
      this.encounters.every((e) => Math.abs(e.s - pos) > margin) &&
      this.passingPlaces.every((pp) => pos < pp.s0 - margin * 0.5 || pos > pp.s1 + margin * 0.5) &&
      pos > 150 && pos < this.village.s0 - 40;

    // cattle grids at the edge of open-hill zones
    const zones = this.region.zones;
    for (let zi = 1; zi < zones.length; zi++) {
      if (!zones[zi].grid) continue;
      let pos = zones[zi - 1].to * this.length;
      let guard = 0;
      while (!clearOf(pos, 25) && guard++ < 40) pos += 6;
      if (guard < 40) this.grids.push({ s: pos });
    }

    // fords: a dip in the road with a stream running across it
    for (let f = 0; f < F.fords; f++) {
      for (let tries = 0; tries < 80; tries++) {
        const pos = rng.range(400, this.village.s0 - 150);
        if (!clearOf(pos, 45) || this.grids.some((g) => Math.abs(g.s - pos) < 60)) continue;
        const ford = { s: pos, s0: pos - 7, s1: pos + 7 };
        const depth = 0.42;
        for (let i = Math.floor(pos - 22); i <= Math.ceil(pos + 22); i++) {
          const ds = Math.abs(i * STEP - pos);
          this.y[i] -= depth * (1 - smoothstep(4, 22, ds));
        }
        ford.waterY = this.y[Math.round(pos)] + 0.24;
        this.fords.push(ford);
        break;
      }
    }

    // potholes
    for (let p = 0; p < F.potholes; p++) {
      const pos = rng.range(120, this.village.s0 - 20);
      if (this.fords.some((f) => Math.abs(f.s - pos) < 25) || this.grids.some((g) => Math.abs(g.s - pos) < 10)) continue;
      const hw = this.hw[Math.floor(pos)];
      this.potholes.push({ s: pos, d: rng.range(-hw + 0.4, hw - 0.4), r: rng.range(0.22, 0.42) });
    }

    // SLOW / ARAF markings before tight blind bends
    let last = -1e9;
    for (let i = 80; i < this.village.s0; i += 2) {
      if (Math.abs(this.k[i]) > 1 / 38 && i - last > 160) {
        const ms = i - 28;
        if (this.fords.some((f) => Math.abs(f.s - ms) < 20) || this.grids.some((g) => Math.abs(g.s - ms) < 12)) continue;
        this.markings.push({ s: ms, text: this.region.lang === 'cy' ? 'ARAF' : 'SLOW' });
        last = i;
      }
    }
  }

  _genGates() {
    const { rng } = this;
    // cattle crossing: a pair of open gates facing each other
    for (const e of this.encounters) {
      if (e.type === 'cattleCrossing') {
        this.gates.push({ s: e.s, side: 1, open: true }, { s: e.s, side: -1, open: true });
      }
    }
    // England's passing places are often just field gateways
    for (const pp of this.passingPlaces) {
      if (pp.gate) this.gates.push({ s: pp.mid, side: pp.side, open: false, bay: true });
    }
    // decorative field gates
    let s = 60 + rng.range(0, 80);
    while (s < this.village.s0 - 20) {
      const side = rng.sign();
      const type = side > 0 ? this.tL[Math.floor(s)] : this.tR[Math.floor(s)];
      const free =
        this.passingPlaces.every((pp) => s < pp.s0 - 6 || s > pp.s1 + 6) &&
        this.gates.every((g) => Math.abs(g.s - s) > 15) &&
        this.fords.every((f) => Math.abs(f.s - s) > 25) &&
        this.grids.every((g) => Math.abs(g.s - s) > 12);
      if ((type === HEDGE || type === WALL) && free) this.gates.push({ s, side, open: false });
      s += rng.range(90, 210);
    }
  }

  _finalizeBoundaries() {
    for (let i = 0; i < this.n; i++) {
      this.bL[i] = this.wL[i] + this.vL[i];
      this.bR[i] = this.wR[i] + this.vR[i];
    }
    for (const g of this.gates) {
      const i0 = Math.max(0, Math.floor(g.s - 2));
      const i1 = Math.min(this.n - 1, Math.ceil(g.s + 2));
      for (let i = i0; i <= i1; i++) {
        if (g.side > 0) {
          this.gapL[i] = 1;
          this.bL[i] += 0.9;
        } else {
          this.gapR[i] = 1;
          this.bR[i] += 0.9;
        }
      }
    }
    // stone walls flank cattle grids, so nothing (sheep included) gets round the side
    for (const g of this.grids) {
      for (let i = Math.floor(g.s - 4); i <= Math.ceil(g.s + 4); i++) {
        this.tL[i] = FENCE;
        this.tR[i] = FENCE;
      }
    }
  }

  _genSigns() {
    const reg = this.region;
    if (reg.pp.signed) this.signs.push({ s: 22, side: 1, kind: 'singletrack' });
    if (reg.pp.signed) {
      for (const pp of this.passingPlaces) this.signs.push({ s: pp.mid, side: pp.side, kind: 'pp', pp });
    }
    for (const g of this.grids) this.signs.push({ s: g.s - 45, side: 1, kind: 'grid' });
    for (const f of this.fords) this.signs.push({ s: f.s - 50, side: 1, kind: 'ford' });
    for (const e of this.encounters) {
      if (e.type === 'cattleCrossing') this.signs.push({ s: e.s - 70, side: 1, kind: 'cattle' });
      if (e.type === 'horseAhead' || e.type === 'horseOncoming') this.signs.push({ s: e.s - 90, side: 1, kind: 'horse' });
    }
    // a sheep warning sign as you enter open hill
    reg.zones.forEach((z, zi) => {
      if (z.sheepy && zi > 0) this.signs.push({ s: reg.zones[zi - 1].to * this.length + 25, side: 1, kind: 'sheep' });
    });
    this.signs.push({ s: this.village.s0 - 20, side: 1, kind: 'village' });
    this.signs = this.signs.filter((sg) => sg.s > 5 && sg.s < this.length - 5);
    // clear a patch of verge at each sign, pushing the hedge (or wall, or fence) back so the whole board stands in the open
    for (const sg of this.signs) {
      const need = SIGN_GAP + signSize(sg.kind).w + 0.45;
      const span = signSize(sg.kind).w / 2 + 1.2;
      const taper = 4;
      const i0 = Math.max(0, Math.floor(sg.s - span - taper));
      const i1 = Math.min(this.n - 1, Math.ceil(sg.s + span + taper));
      for (let i = i0; i <= i1; i++) {
        const s = i * STEP;
        const f = smoothstep(sg.s - span - taper, sg.s - span, s) * (1 - smoothstep(sg.s + span, sg.s + span + taper, s));
        const w = sg.side > 0 ? this.wL : this.wR;
        const b = sg.side > 0 ? this.bL : this.bR;
        b[i] += Math.max(0, w[i] + need - b[i]) * f;
      }
    }
  }

  _buildIndex() {
    this.cell = 25;
    this.buckets = new Map();
    for (let i = 0; i < this.n; i += 2) {
      const key = this._key(Math.floor(this.x[i] / this.cell), Math.floor(this.z[i] / this.cell));
      let b = this.buckets.get(key);
      if (!b) this.buckets.set(key, (b = []));
      b.push(i);
    }
    let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity, minY = Infinity, maxY = -Infinity;
    for (let i = 0; i < this.n; i++) {
      minX = Math.min(minX, this.x[i]);
      maxX = Math.max(maxX, this.x[i]);
      minZ = Math.min(minZ, this.z[i]);
      maxZ = Math.max(maxZ, this.z[i]);
      minY = Math.min(minY, this.y[i]);
      maxY = Math.max(maxY, this.y[i]);
    }
    this.bounds = { minX, maxX, minZ, maxZ, minY, maxY };
  }

  _key(cx, cz) {
    return (cx + 5000) * 10000 + (cz + 5000);
  }

  // ---------- queries ----------

  _lerp(arr, s) {
    const f = clamp(s / STEP, 0, this.n - 1.0001);
    const i = Math.floor(f);
    const t = f - i;
    return arr[i] + (arr[i + 1] - arr[i]) * t;
  }

  _near(arr, s) {
    return arr[clamp(Math.round(s / STEP), 0, this.n - 1)];
  }

  theta(s) { return this._lerp(this.th, s); }
  curvature(s) { return this._lerp(this.k, s); }
  height(s) { return this._lerp(this.y, s); }
  leftEdge(s) { return this._lerp(this.wL, s); }
  rightEdge(s) { return this._lerp(this.wR, s); }
  leftBound(s) { return this._lerp(this.bL, s); }
  rightBound(s) { return this._lerp(this.bR, s); }
  baseHalf(s) { return this._lerp(this.hw, s); }
  typeLeft(s) { return this._near(this.tL, s); }
  typeRight(s) { return this._near(this.tR, s); }
  grade(s) { return (this.height(s + 1.5) - this.height(s - 1.5)) / 3; }

  // world position of a Frenet point. out = {x, y, z, theta}
  toWorld(s, d, out = {}) {
    const f = clamp(s / STEP, 0, this.n - 1.0001);
    const i = Math.floor(f);
    const t = f - i;
    const th = this.th[i] + (this.th[i + 1] - this.th[i]) * t;
    const cx = this.x[i] + (this.x[i + 1] - this.x[i]) * t;
    const cz = this.z[i] + (this.z[i + 1] - this.z[i]) * t;
    // beyond either end, extrapolate along the end heading
    let ext = 0;
    if (s < 0) ext = s;
    else if (s > (this.n - 1) * STEP) ext = s - (this.n - 1) * STEP;
    const sin = Math.sin(th);
    const cos = Math.cos(th);
    out.x = cx + sin * ext + cos * d;
    out.z = cz + cos * ext - sin * d;
    out.y = this.y[i] + (this.y[i + 1] - this.y[i]) * t;
    out.theta = th;
    return out;
  }

  // nearest centreline sample to a world point → {i, s, d (signed lateral), dist}
  nearest(x, z, maxCells = 3) {
    const cx = Math.floor(x / this.cell);
    const cz = Math.floor(z / this.cell);
    let best = -1;
    let bestD2 = Infinity;
    for (let r = 0; r <= maxCells; r++) {
      for (let a = -r; a <= r; a++) {
        for (let b = -r; b <= r; b++) {
          if (Math.max(Math.abs(a), Math.abs(b)) !== r) continue;
          const bucket = this.buckets.get(this._key(cx + a, cz + b));
          if (!bucket) continue;
          for (const i of bucket) {
            const dx = this.x[i] - x;
            const dz = this.z[i] - z;
            const d2 = dx * dx + dz * dz;
            if (d2 < bestD2) {
              bestD2 = d2;
              best = i;
            }
          }
        }
      }
      // any sample in a farther ring is at least (r * cell) away
      if (best >= 0 && Math.sqrt(bestD2) < r * this.cell) break;
    }
    if (best < 0) return null;
    // refine between neighbours
    for (let it = 0; it < 3; it++) {
      for (const j of [best - 1, best + 1]) {
        if (j < 0 || j >= this.n) continue;
        const dx = this.x[j] - x;
        const dz = this.z[j] - z;
        const d2 = dx * dx + dz * dz;
        if (d2 < bestD2) {
          bestD2 = d2;
          best = j;
        }
      }
    }
    const th = this.th[best];
    const dx = x - this.x[best];
    const dz = z - this.z[best];
    const d = dx * Math.cos(th) - dz * Math.sin(th);
    return { i: best, s: best * STEP, d, dist: Math.sqrt(bestD2) };
  }

  maxCurvatureAhead(s, dist) {
    let m = 0;
    const i0 = clamp(Math.floor(s / STEP), 0, this.n - 1);
    const i1 = clamp(Math.floor((s + dist) / STEP), 0, this.n - 1);
    for (let i = i0; i <= i1; i += 2) m = Math.max(m, Math.abs(this.k[i]));
    return m;
  }

  // A considerate speed for this bit of lane (m/s), based on how tight the bends ahead are.
  advisorySpeed(s, latAcc = 2.4) {
    const kmax = this.maxCurvatureAhead(s, 40);
    const vmax = this.region.advisoryMph / 2.23694;
    return clamp(Math.sqrt(latAcc / Math.max(kmax, 1e-4)), 6.5, vmax);
  }

  ppAt(s) {
    for (const pp of this.passingPlaces) if (s >= pp.s0 && s <= pp.s1) return pp;
    return null;
  }

  // passing places that lie entirely between two s values
  ppsBetween(a, b) {
    const lo = Math.min(a, b);
    const hi = Math.max(a, b);
    return this.passingPlaces.filter((pp) => pp.s0 >= lo && pp.s1 <= hi);
  }

  fordAt(s) {
    for (const f of this.fords) if (s >= f.s0 && s <= f.s1) return f;
    return null;
  }
}

function typeName(t) {
  return t === HEDGE ? 'hedge' : t === WALL ? 'wall' : t === OPEN ? 'open' : 'fence';
}

// centred moving average with radius r
function smoothArray(src, dst, r) {
  const n = src.length;
  let acc = 0;
  let count = 0;
  for (let i = -r; i <= r; i++) {
    const j = clamp(i, 0, n - 1);
    acc += src[j];
    count++;
  }
  for (let i = 0; i < n; i++) {
    dst[i] = acc / count;
    const out = clamp(i - r, 0, n - 1);
    const inn = clamp(i + r + 1, 0, n - 1);
    acc += src[inn] - src[out];
  }
}
