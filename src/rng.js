// Seeded randomness and value noise. Pure JS, no Three.js, so it runs under node tests too.

export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export class RNG {
  constructor(seed) {
    this.f = mulberry32(seed);
  }
  next() {
    return this.f();
  }
  range(a, b) {
    return a + (b - a) * this.f();
  }
  int(a, b) {
    return Math.floor(this.range(a, b + 1));
  }
  chance(p) {
    return this.f() < p;
  }
  sign() {
    return this.f() < 0.5 ? -1 : 1;
  }
  pick(arr) {
    return arr[Math.floor(this.f() * arr.length)];
  }
  // obj: { key: weight }
  weighted(obj) {
    let total = 0;
    for (const k in obj) total += obj[k];
    let r = this.f() * total;
    for (const k in obj) {
      r -= obj[k];
      if (r <= 0) return k;
    }
    return Object.keys(obj)[0];
  }
  shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(this.f() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
}

const smooth = (t) => t * t * (3 - 2 * t);

// 1D value noise in [-1, 1]
export function makeNoise1D(seed) {
  const rng = new RNG(seed);
  const N = 1024;
  const vals = new Float32Array(N);
  for (let i = 0; i < N; i++) vals[i] = rng.next() * 2 - 1;
  return (x) => {
    const i = Math.floor(x);
    const t = smooth(x - i);
    const a = vals[i & (N - 1)];
    const b = vals[(i + 1) & (N - 1)];
    return a + (b - a) * t;
  };
}

// 2D value noise in [-1, 1]
export function makeNoise2D(seed) {
  const rng = new RNG(seed);
  const perm = new Uint16Array(512);
  const p = [];
  for (let i = 0; i < 256; i++) p.push(i);
  rng.shuffle(p);
  for (let i = 0; i < 512; i++) perm[i] = p[i & 255];
  const vals = new Float32Array(256);
  for (let i = 0; i < 256; i++) vals[i] = rng.next() * 2 - 1;
  const v = (ix, iy) => vals[perm[(perm[ix & 255] + iy) & 511] & 255];
  return (x, y) => {
    const ix = Math.floor(x);
    const iy = Math.floor(y);
    const tx = smooth(x - ix);
    const ty = smooth(y - iy);
    const a = v(ix, iy);
    const b = v(ix + 1, iy);
    const c = v(ix, iy + 1);
    const d = v(ix + 1, iy + 1);
    const ab = a + (b - a) * tx;
    const cd = c + (d - c) * tx;
    return ab + (cd - ab) * ty;
  };
}

export function fbm2(noise, x, y, octaves = 4) {
  let sum = 0;
  let amp = 1;
  let norm = 0;
  let f = 1;
  for (let o = 0; o < octaves; o++) {
    sum += noise(x * f, y * f) * amp;
    norm += amp;
    amp *= 0.5;
    f *= 2.03;
  }
  return sum / norm;
}

// Cheap deterministic hash of two ints → [0, 1)
export function hash2(x, y) {
  let h = (Math.imul(x | 0, 374761393) + Math.imul(y | 0, 668265263)) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}

export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const smoothstep = (a, b, x) => {
  const t = clamp((x - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
};
export const approach = (v, target, maxDelta) =>
  v < target ? Math.min(target, v + maxDelta) : Math.max(target, v - maxDelta);
