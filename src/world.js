// Builds all static scenery for a route: road, verges, hedges and walls, terrain, sky, props.
import * as THREE from 'three';
import { HEDGE, WALL, OPEN, FENCE } from './road.js';
import * as TX from './textures.js';
import { makeGate, mat, mergedBoxes } from './models.js';
import { RNG, makeNoise1D, makeNoise2D, fbm2, smoothstep, lerp, clamp, hash2 } from './rng.js';

const CHUNK = 120; // samples per mesh chunk, so off-screen lane gets frustum culled

// Generic strip along the road. profile(i) returns [{d, h, u, v, c?}] with a fixed length.
// include(i) decides whether the quad between rows i and i+1 is emitted.
function buildStrip(road, i0, i1, profile, { flip = false, include = null, colors = false, caps = false } = {}) {
  const pos = [];
  const uv = [];
  const col = [];
  const idx = [];
  const tmp = {};
  let m = 0;
  const rows = [];
  for (let i = i0; i <= i1; i++) {
    const pts = profile(i);
    m = pts.length;
    rows.push(i);
    const s = i * road.step;
    for (const p of pts) {
      road.toWorld(s, p.d, tmp);
      pos.push(tmp.x, tmp.y + p.h, tmp.z);
      uv.push(p.u, p.v);
      if (colors) col.push(p.c[0], p.c[1], p.c[2]);
    }
  }
  for (let r = 0; r < rows.length - 1; r++) {
    if (include && !(include(rows[r]) && include(rows[r + 1]))) continue;
    for (let c = 0; c < m - 1; c++) {
      const a = r * m + c;
      const b = (r + 1) * m + c;
      const c1 = r * m + c + 1;
      const d1 = (r + 1) * m + c + 1;
      if (flip) idx.push(a, c1, b, c1, d1, b);
      else idx.push(a, b, c1, c1, b, d1);
    }
  }
  // close off the ends of a run (a hedge stopping at a gateway would otherwise look hollow)
  if (caps && include) {
    const emitted = (r) => r >= 0 && r < rows.length - 1 && include(rows[r]) && include(rows[r + 1]);
    for (let r = 0; r < rows.length; r++) {
      const startCap = emitted(r) && !emitted(r - 1);
      const endCap = emitted(r - 1) && !emitted(r);
      if (!startCap && !endCap) continue;
      // two copies of the ring, one wound each way, so the cap reads from either side with sane normals
      for (const reverse of [false, true]) {
        const base = pos.length / 3;
        for (let c = 0; c < m; c++) {
          const k = r * m + c;
          pos.push(pos[k * 3], pos[k * 3 + 1], pos[k * 3 + 2]);
          // map the cap from its own position, not the strip's along-the-road coordinate
          uv.push((pos[k * 3] + pos[k * 3 + 2]) * 0.6, pos[k * 3 + 1] * 0.6);
          if (colors) col.push(col[k * 3] * 0.8, col[k * 3 + 1] * 0.8, col[k * 3 + 2] * 0.8);
        }
        for (let c = 1; c < m - 1; c++) {
          if (reverse) idx.push(base, base + c + 1, base + c);
          else idx.push(base, base + c, base + c + 1);
        }
      }
    }
  }
  if (!idx.length) return null;
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  if (colors) g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

function chunked(road, fn) {
  for (let c0 = 0; c0 < road.n - 1; c0 += CHUNK) fn(c0, Math.min(road.n - 1, c0 + CHUNK));
}

const C = (hex) => {
  const c = new THREE.Color(hex);
  return [c.r, c.g, c.b];
};
const scaleC = (c, k) => [c[0] * k, c[1] * k, c[2] * k];
const mixC = (a, b, t) => [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];

export function buildWorld(road, region, scene) {
  const root = new THREE.Group();
  scene.add(root);
  const rng = new RNG(road.seed + 5);
  const nz = makeNoise1D(road.seed + 3);
  const T = region.terrain;
  const updaters = [];
  const add = (geomOrMesh, material, { cast = false, receive = true } = {}) => {
    if (!geomOrMesh) return null;
    const mesh = geomOrMesh.isObject3D ? geomOrMesh : new THREE.Mesh(geomOrMesh, material);
    mesh.castShadow = cast;
    mesh.receiveShadow = receive;
    root.add(mesh);
    return mesh;
  };

  // ---------------- road surface ----------------
  const tarmacM = new THREE.MeshLambertMaterial({ map: TX.tarmacTexture(region.id === 'scotland' ? -6 : 0), vertexColors: true });
  const edgeC = C(region.id === 'england' ? '#8a8270' : '#7f8073');
  const midC = C('#ffffff');
  const roadProfile = (i) => {
    const s = i * road.step;
    const wL = road.wL[i];
    const wR = road.wR[i];
    const hw = road.hw[i];
    const g = road.grass[i] ? 0.86 : 1;
    const ds = [-wR, -wR + 0.35, -hw * 0.45, 0, hw * 0.45, wL - 0.35, wL];
    const hs = [-0.03, 0, 0.012, 0.018, 0.012, 0, -0.03];
    const cs = [edgeC, mixC(edgeC, midC, 0.7), midC, scaleC(midC, g), midC, mixC(edgeC, midC, 0.7), edgeC];
    return ds.map((d, k) => ({ d, h: hs[k], u: d / 3.2, v: s / 3.2, c: cs[k] }));
  };
  chunked(road, (a, b) => add(buildStrip(road, a, b, roadProfile, { colors: true }), tarmacM));

  // grass growing down the middle of the lane
  const grassStripM = new THREE.MeshLambertMaterial({ map: TX.grassTexture(88, 34, 32) });
  chunked(road, (a, b) =>
    add(
      buildStrip(
        road,
        a,
        b,
        (i) => {
          const s = i * road.step;
          const w = 0.22 + 0.06 * nz(s / 7);
          return [
            { d: -w - 0.08, h: 0.019, u: 0, v: s / 2 },
            { d: -w * 0.4, h: 0.05, u: 0.4, v: s / 2 },
            { d: w * 0.4, h: 0.05, u: 0.6, v: s / 2 },
            { d: w + 0.08, h: 0.019, u: 1, v: s / 2 },
          ];
        },
        { include: (i) => road.grass[i] === 1 },
      ),
      grassStripM,
    ),
  );

  // ---------------- verges ----------------
  const vergeTex = region.id === 'scotland' ? TX.grassTexture(70, 30, 30) : region.id === 'wales' ? TX.grassTexture(95, 34, 30) : TX.grassTexture(92, 40, 33);
  const vergeM = new THREE.MeshLambertMaterial({ map: vergeTex, vertexColors: true });
  const vergeProfile = (side) => (i) => {
    const s = i * road.step;
    const w = side > 0 ? road.wL[i] : road.wR[i];
    const b = side > 0 ? road.bL[i] : road.bR[i];
    const type = side > 0 ? road.tL[i] : road.tR[i];
    let pts;
    if (type === OPEN) {
      pts = [[w, -0.03], [w + 0.2, 0.0], [b - 0.3, -0.06], [b + 0.5, -0.6], [b + 1.3, -0.55], [b + 3.5, -0.42]];
    } else {
      const bank = type === HEDGE ? 0.18 : 0.06;
      pts = [[w, -0.03], [w + 0.15, 0.02], [(w + b) / 2 + 0.05, 0.05], [b - 0.08, bank], [b + 0.5, bank], [b + 2.6, -0.42]];
    }
    const moor = region.id === 'scotland' || (region.id === 'wales' && type === OPEN);
    const green = moor ? C(region.id === 'scotland' ? '#c2b98a' : '#d6dcb0') : C('#ffffff');
    const shade = moor ? C(region.id === 'scotland' ? '#9e8c64' : '#b3b48a') : type === HEDGE ? C('#9a9a8a') : C('#d8d8d0');
    return pts.map(([d, h], k) => ({ d: d * side, h, u: (d * side) / 2, v: s / 2, c: k >= 3 ? shade : green }));
  };
  for (const side of [1, -1]) {
    chunked(road, (a, b) => add(buildStrip(road, a, b, vergeProfile(side), { flip: side < 0, colors: true }), vergeM));
  }

  // ---------------- hedges ----------------
  const hedgeM = new THREE.MeshLambertMaterial({
    map: TX.hedgeTexture(region.id === 'england' ? 'hawthorn' : region.id === 'wales' ? 'gorse' : 'heather'),
    vertexColors: true,
  });
  const hn = makeNoise1D(road.seed + 71);
  const hedgeProfile = (side) => (i) => {
    const s = i * road.step;
    const b = side > 0 ? road.bL[i] : road.bR[i];
    const h0 = side > 0 ? road.hL[i] : road.hR[i];
    const o = side * 1000;
    const h = h0 * (0.92 + 0.16 * hn(s / 3 + o));
    const n1 = hn(s / 2.1 + o + 50);
    const n2 = hn(s / 1.7 + o + 90);
    const tint = 0.85 + 0.25 * (0.5 + 0.5 * hn(s / 23 + o + 7));
    const c = [tint, tint * (1 + 0.06 * n1), tint * 0.95];
    const cb = scaleC(c, 0.75);
    // texture repeats about every 1.7 m along and twice up the face, so leaves read at the right size
    const u = s / 1.7;
    const pts = [
      { d: b - 0.12, h: -0.12, u, v: 0, c: cb },
      { d: b + 0.04 + n1 * 0.1, h: h * 0.3, u, v: 0.5, c: cb },
      { d: b + 0.08 + n2 * 0.16, h: h * 0.72, u, v: 1.2, c },
      { d: b + 0.32 + n1 * 0.1, h: h * 0.97, u, v: 1.65, c },
      { d: b + 0.95, h: h * (1.03 + n2 * 0.06), u, v: 1.95, c: scaleC(c, 1.08) },
      { d: b + 1.7, h: h * 0.92, u, v: 1.7, c },
      { d: b + 2.3, h: -0.45, u, v: 0.4, c: cb },
    ];
    return pts.map((p) => ({ ...p, d: p.d * side }));
  };
  const stoneM = new THREE.MeshLambertMaterial({ map: TX.stoneTexture(region.id === 'england' ? 'grey' : 'slate'), vertexColors: true });
  const wallProfile = (side) => (i) => {
    const s = i * road.step;
    const b = side > 0 ? road.bL[i] : road.bR[i];
    const h = (side > 0 ? road.hL[i] : road.hR[i]) * (0.97 + 0.06 * hn(s / 1.3 + side * 300));
    const u = s / 2.2;
    const c = [1, 1, 1];
    const pts = [
      { d: b - 0.02, h: -0.15, u, v: 0 },
      { d: b + 0.03, h: h * 0.5, u, v: 0.45 },
      { d: b + 0.07, h, u, v: 0.9 },
      { d: b + 0.1, h: h + 0.13, u, v: 1 },
      { d: b + 0.5, h: h + 0.13, u, v: 1 },
      { d: b + 0.53, h, u, v: 0.9 },
      { d: b + 0.62, h: -0.15, u, v: 0 },
    ];
    return pts.map((p) => ({ ...p, d: p.d * side, c }));
  };
  for (const side of [1, -1]) {
    const types = side > 0 ? road.tL : road.tR;
    const gaps = side > 0 ? road.gapL : road.gapR;
    chunked(road, (a, b) => {
      add(
        buildStrip(road, a, b, hedgeProfile(side), { flip: side < 0, colors: true, caps: true, include: (i) => types[i] === HEDGE && !gaps[i] }),
        hedgeM,
        { cast: true },
      );
      add(
        buildStrip(road, a, b, wallProfile(side), { flip: side < 0, colors: true, caps: true, include: (i) => types[i] === WALL && !gaps[i] }),
        stoneM,
        { cast: true },
      );
    });
  }

  // ---------------- fences (post and wire) ----------------
  {
    const posts = [];
    const wires = [];
    const tmp = {};
    for (const side of [1, -1]) {
      const types = side > 0 ? road.tL : road.tR;
      let prev = null;
      for (let i = 0; i < road.n; i += 3) {
        if (types[i] !== FENCE) {
          prev = null;
          continue;
        }
        const b = side > 0 ? road.bL[i] : road.bR[i];
        road.toWorld(i, side * (b + 0.05), tmp);
        const p = new THREE.Vector3(tmp.x, tmp.y, tmp.z);
        posts.push(p);
        if (prev) for (const h of [0.45, 0.8, 1.1]) wires.push(prev.x, prev.y + h, prev.z, p.x, p.y + h, p.z);
        prev = p;
      }
    }
    if (posts.length) {
      const im = new THREE.InstancedMesh(new THREE.BoxGeometry(0.1, 1.25, 0.1), mat('#7a6a52'), posts.length);
      const m4 = new THREE.Matrix4();
      posts.forEach((p, k) => {
        m4.makeTranslation(p.x, p.y + 0.55, p.z);
        im.setMatrixAt(k, m4);
      });
      root.add(im);
      const lg = new THREE.BufferGeometry();
      lg.setAttribute('position', new THREE.Float32BufferAttribute(wires, 3));
      root.add(new THREE.LineSegments(lg, new THREE.LineBasicMaterial({ color: '#5d5d58' })));
    }
  }

  // ---------------- terrain ----------------
  const n2 = makeNoise2D(road.seed + 99);
  const B = road.bounds;
  const avgY = (B.minY + B.maxY) / 2;
  const farHeight = (x, z) => {
    let h = fbm2(n2, x / T.scale, z / T.scale, 4) * T.amp;
    if (T.style !== 'patchwork') h += Math.abs(fbm2(n2, x / (T.scale * 0.45) + 40, z / (T.scale * 0.45) - 20, 3)) * T.amp * 0.55;
    return avgY + h;
  };
  const terrainHeight = (x, z) => {
    const far = farHeight(x, z);
    const nr = road.nearest(x, z, 3);
    if (!nr) return far;
    const i = nr.i;
    // a wider level band through the village so the cottages stand on flat ground
    const edge = (nr.d > 0 ? road.bL[i] : road.bR[i]) + 2.5 + 20 * smoothstep(road.village.s0 - 60, road.village.s0, i * road.step);
    const t = smoothstep(edge, edge + 55, nr.dist);
    return lerp(road.y[i] - 0.45, far, t);
  };
  const waterY = T.waterLevel != null ? B.minY - 2.5 : null;

  const fieldColor = makeFieldColorer(region, n2, avgY, waterY);
  {
    const margin = 520;
    const step = 10;
    const x0 = Math.floor((B.minX - margin) / step) * step;
    const x1 = B.maxX + margin;
    const z0 = Math.floor((B.minZ - margin) / step) * step;
    const z1 = B.maxZ + margin;
    const nx = Math.ceil((x1 - x0) / step) + 1;
    const nzc = Math.ceil((z1 - z0) / step) + 1;
    const pos = new Float32Array(nx * nzc * 3);
    const col = new Float32Array(nx * nzc * 3);
    const uv = new Float32Array(nx * nzc * 2);
    let k = 0;
    for (let j = 0; j < nzc; j++) {
      for (let i = 0; i < nx; i++) {
        const x = x0 + i * step;
        const z = z0 + j * step;
        const h = terrainHeight(x, z);
        pos[k * 3] = x;
        pos[k * 3 + 1] = h;
        pos[k * 3 + 2] = z;
        const c = fieldColor(x, z, h);
        col[k * 3] = c[0];
        col[k * 3 + 1] = c[1];
        col[k * 3 + 2] = c[2];
        uv[k * 2] = x / 9;
        uv[k * 2 + 1] = z / 9;
        k++;
      }
    }
    const idx = new Uint32Array((nx - 1) * (nzc - 1) * 6);
    let q = 0;
    for (let j = 0; j < nzc - 1; j++) {
      for (let i = 0; i < nx - 1; i++) {
        const a = j * nx + i;
        const b = a + 1;
        const c = a + nx;
        const d = c + 1;
        idx[q++] = a;
        idx[q++] = c;
        idx[q++] = b;
        idx[q++] = b;
        idx[q++] = c;
        idx[q++] = d;
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    g.setIndex(new THREE.BufferAttribute(idx, 1));
    g.computeVertexNormals();
    add(g, new THREE.MeshLambertMaterial({ vertexColors: true, map: TX.detailTexture() }));

    if (waterY != null) {
      const wg = new THREE.PlaneGeometry(x1 - x0, z1 - z0).rotateX(-Math.PI / 2);
      const water = add(
        wg,
        new THREE.MeshPhongMaterial({ color: region.id === 'scotland' ? '#3d5f78' : '#4d6b72', shininess: 120, specular: '#b8c8d8', transparent: true, opacity: 0.93 }),
        { receive: false },
      );
      water.position.set((x0 + x1) / 2, waterY, (z0 + z1) / 2);
    }
  }

  // ---------------- trees, bales, rocks, field animals ----------------
  const trees = [];
  const conifers = [];
  // hedgerow trees
  if (T.hedgerowTrees > 0) {
    const tmp = {};
    for (let i = 30; i < road.n - 30; i++) {
      if (!rng.chance(T.hedgerowTrees)) continue;
      const side = rng.sign();
      const type = side > 0 ? road.tL[i] : road.tR[i];
      if (type !== HEDGE) continue;
      const b = side > 0 ? road.bL[i] : road.bR[i];
      // rooted in the hedge line and tall, so the crown arches high over the lane rather than into it
      road.toWorld(i, side * (b + 2.2 + rng.range(0, 1.2)), tmp);
      trees.push({ x: tmp.x, y: tmp.y, z: tmp.z, h: rng.range(8.5, 11.5), r: rng.range(2.4, 3.4), near: true });
    }
  }
  const inField = (x, z, minDist) => {
    const nr = road.nearest(x, z, 2);
    return !nr || nr.dist > minDist;
  };
  const scatter = (count, minDist, cb, clusterSize = 1, spread = 0) => {
    const x0 = B.minX - 420;
    const x1 = B.maxX + 420;
    const z0 = B.minZ - 300;
    const z1 = B.maxZ + 300;
    let placed = 0;
    for (let tries = 0; tries < count * 6 && placed < count; tries++) {
      const cx = rng.range(x0, x1);
      const cz = rng.range(z0, z1);
      for (let c = 0; c < clusterSize && placed < count; c++) {
        const x = cx + rng.range(-spread, spread);
        const z = cz + rng.range(-spread, spread);
        if (!inField(x, z, minDist)) continue;
        const y = terrainHeight(x, z);
        if (waterY != null && y < waterY + 0.6) continue;
        cb(x, y, z);
        placed++;
      }
    }
  };
  scatter(T.fieldTrees * 0.6, 16, (x, y, z) => trees.push({ x, y, z, h: rng.range(5, 9), r: rng.range(2.4, 4.4) }));
  scatter(T.fieldTrees * 0.4, 16, (x, y, z) => trees.push({ x, y, z, h: rng.range(6, 10), r: rng.range(2.5, 4) }), 12, 30);
  scatter(T.conifers, 18, (x, y, z) => conifers.push({ x, y, z, h: rng.range(9, 15), r: rng.range(1.6, 2.4) }), 30, 45);

  // Instanced meshes are culled as one lump, so only the trees by the lane cast shadows.
  const trunkG = new THREE.CylinderGeometry(0.22, 0.34, 1, 6).translate(0, 0.5, 0);
  const canopyG = new THREE.IcosahedronGeometry(1, 1);
  const canopyM = new THREE.MeshLambertMaterial({ color: '#ffffff', flatShading: true });
  for (const group of [trees.filter((t) => t.near), trees.filter((t) => !t.near)]) {
    if (!group.length) continue;
    const near = group[0].near;
    const trunks = new THREE.InstancedMesh(trunkG, mat('#5a4632'), group.length);
    const canopies = new THREE.InstancedMesh(canopyG, canopyM, group.length * 3);
    const m4 = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const col = new THREE.Color();
    const leafBase = region.id === 'scotland' ? ['#56703a', '#6d7f3b', '#4a6233'] : ['#3f6a2a', '#4f7a30', '#36592a', '#5d8236'];
    group.forEach((t, k) => {
      m4.compose(new THREE.Vector3(t.x, t.y - 0.3, t.z), q, new THREE.Vector3(1, t.h * 0.75, 1));
      trunks.setMatrixAt(k, m4);
      for (let c = 0; c < 3; c++) {
        const ox = (c - 1) * t.r * 0.45 + rng.range(-0.4, 0.4);
        const oz = rng.range(-0.8, 0.8);
        const s = t.r * (c === 1 ? 1 : 0.78);
        m4.compose(new THREE.Vector3(t.x + ox, t.y + t.h * 0.72 + (c === 1 ? t.r * 0.35 : 0), t.z + oz), q, new THREE.Vector3(s, s * 0.85, s));
        canopies.setMatrixAt(k * 3 + c, m4);
        col.set(rng.pick(leafBase)).multiplyScalar(rng.range(0.85, 1.15));
        canopies.setColorAt(k * 3 + c, col);
      }
    });
    trunks.castShadow = near;
    canopies.castShadow = near;
    root.add(trunks, canopies);
  }
  if (conifers.length) {
    const coneG = new THREE.ConeGeometry(1, 1, 7).translate(0, 0.5, 0);
    const im = new THREE.InstancedMesh(coneG, new THREE.MeshLambertMaterial({ color: '#ffffff', flatShading: true }), conifers.length);
    const m4 = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const col = new THREE.Color();
    conifers.forEach((t, k) => {
      m4.compose(new THREE.Vector3(t.x, t.y - 0.5, t.z), q, new THREE.Vector3(t.r, t.h, t.r));
      im.setMatrixAt(k, m4);
      col.set(rng.pick(['#24402a', '#2c4a30', '#1f3a26'])).multiplyScalar(rng.range(0.85, 1.15));
      im.setColorAt(k, col);
    });
    root.add(im);
  }
  // round bales
  if (T.bales) {
    const bales = [];
    scatter(T.bales, 25, (x, y, z) => bales.push([x, y, z]), 8, 40);
    const im = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.75, 0.75, 1.2, 14).rotateZ(Math.PI / 2), new THREE.MeshLambertMaterial({ color: '#ffffff' }), bales.length);
    const m4 = new THREE.Matrix4();
    const col = new THREE.Color();
    bales.forEach(([x, y, z], k) => {
      m4.makeRotationY(rng.range(0, Math.PI));
      m4.setPosition(x, y + 0.7, z);
      im.setMatrixAt(k, m4);
      col.set(rng.chance(0.3) ? '#202020' : '#d4b866');
      im.setColorAt(k, col);
    });
    root.add(im);
  }
  // rocks and gorse on the open hill
  if (region.id !== 'england') {
    const rocks = [];
    scatter(region.id === 'scotland' ? 260 : 160, 6, (x, y, z) => rocks.push([x, y, z, rng.range(0.4, 1.8)]), 5, 20);
    const im = new THREE.InstancedMesh(new THREE.DodecahedronGeometry(1, 0), new THREE.MeshLambertMaterial({ color: '#8a877d', flatShading: true }), rocks.length);
    const m4 = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    rocks.forEach(([x, y, z, s], k) => {
      q.setFromEuler(new THREE.Euler(rng.range(0, 3), rng.range(0, 3), 0));
      m4.compose(new THREE.Vector3(x, y, z), q, new THREE.Vector3(s, s * 0.6, s * 0.9));
      im.setMatrixAt(k, m4);
    });
    root.add(im);

    const bushes = [];
    scatter(region.id === 'scotland' ? 380 : 300, 5, (x, y, z) => bushes.push([x, y, z]), 10, 18);
    const bm = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.8, 0), new THREE.MeshLambertMaterial({ color: '#ffffff', flatShading: true }), bushes.length);
    const col = new THREE.Color();
    const palette = region.id === 'scotland' ? ['#6b4e6e', '#7a5b3c', '#5e6b33'] : ['#6f7d2c', '#c9a227', '#8a6a35'];
    bushes.forEach(([x, y, z], k) => {
      const s = rng.range(0.6, 1.3);
      m4.compose(new THREE.Vector3(x, y + 0.2, z), q.identity(), new THREE.Vector3(s, s * 0.6, s));
      bm.setMatrixAt(k, m4);
      bm.setColorAt(k, col.set(rng.pick(palette)));
    });
    root.add(bm);
  }
  // distant livestock dotted on the fields
  {
    const fa = T.fieldAnimals;
    const sheep = [];
    const cows = [];
    scatter(fa.sheep, 30, (x, y, z) => sheep.push([x, y, z]), 12, 26);
    scatter(fa.cow, 30, (x, y, z) => cows.push([x, y, z]), 8, 20);
    // simple beasts: body, head and four legs merged into one shape, standing on the ground
    const T4 = (x, y, z) => new THREE.Matrix4().makeTranslation(x, y, z);
    const beast = (bw, bh, bl, legH, legW, headS, dark) => {
      const y = legH + bh / 2;
      const parts = [[bw, bh, bl, T4(0, y, 0)], [headS, headS * 1.1, headS * 1.4, T4(0, y + bh * 0.2, bl / 2 + headS * 0.5), dark]];
      for (const lx of [-bw * 0.32, bw * 0.32]) for (const lz of [-bl * 0.36, bl * 0.36]) parts.push([legW, legH, legW, T4(lx, legH / 2, lz), dark]);
      return mergedBoxes(parts);
    };
    const place = (list, geometry, colours) => {
      if (!list.length) return;
      const im = new THREE.InstancedMesh(geometry, new THREE.MeshLambertMaterial({ color: '#ffffff', vertexColors: true }), list.length);
      const m4 = new THREE.Matrix4();
      const c = new THREE.Color();
      list.forEach(([x, y, z], k) => {
        m4.makeRotationY(rng.range(0, Math.PI * 2));
        m4.setPosition(x, y - 0.05, z);
        im.setMatrixAt(k, m4);
        im.setColorAt(k, c.set(rng.pick(colours)));
      });
      root.add(im);
    };
    place(sheep, beast(0.55, 0.48, 0.95, 0.38, 0.08, 0.22, region.sheepFace === 'black' ? 0.15 : 0.45), ['#e9e4d6', '#efeadf', '#dcd5c4']);
    const herd = region.cowBreed === 'highland' ? ['#9c5228', '#b0652f', '#8a4a24'] : region.cowBreed === 'welshblack' ? ['#1e1b1a'] : ['#1f1f1f', '#f0eee8', '#2a2a2a', '#e6e2d8'];
    place(cows, beast(0.8, 0.8, 1.8, 0.62, 0.15, 0.38, 0.6), herd);
  }

  // ---------------- telegraph poles ----------------
  if (region.features.telegraph) {
    const tmp = {};
    const tops = [];
    let side = 1;
    for (let s = 20; s < road.length - 30; s += 48) {
      if (rng.chance(0.08)) side = -side;
      const i = Math.round(s);
      const b = side > 0 ? road.bL[i] : road.bR[i];
      if ((side > 0 ? road.gapL[i] : road.gapR[i]) || road.ppAt(s)) continue;
      road.toWorld(s, side * (b + 2.2), tmp);
      tops.push([tmp.x, tmp.y, tmp.z, tmp.theta]);
    }
    const poleG = new THREE.CylinderGeometry(0.12, 0.16, 8.5, 6).translate(0, 4.25, 0);
    const poles = new THREE.InstancedMesh(poleG, mat('#5c4a36'), tops.length);
    const arms = new THREE.InstancedMesh(new THREE.BoxGeometry(1.4, 0.1, 0.1), mat('#5c4a36'), tops.length);
    const m4 = new THREE.Matrix4();
    const wire = [];
    tops.forEach(([x, y, z, th], k) => {
      m4.makeTranslation(x, y, z);
      poles.setMatrixAt(k, m4);
      m4.makeRotationY(th);
      m4.setPosition(x, y + 8.1, z);
      arms.setMatrixAt(k, m4);
      if (k > 0) {
        const [px, py, pz, pth] = tops[k - 1];
        for (const o of [-0.6, 0, 0.6]) {
          const ax = px + Math.cos(pth) * o;
          const az = pz - Math.sin(pth) * o;
          const bx = x + Math.cos(th) * o;
          const bz = z - Math.sin(th) * o;
          // sagging wire in 4 segments
          let lx = ax;
          let ly = py + 8.15;
          let lz = az;
          for (let t = 1; t <= 4; t++) {
            const f = t / 4;
            const nxw = lerp(ax, bx, f);
            const nyw = lerp(py, y, f) + 8.15 - Math.sin(f * Math.PI) * 0.6;
            const nzw = lerp(az, bz, f);
            wire.push(lx, ly, lz, nxw, nyw, nzw);
            lx = nxw;
            ly = nyw;
            lz = nzw;
          }
        }
      }
    });
    root.add(poles, arms);
    const lg = new THREE.BufferGeometry();
    lg.setAttribute('position', new THREE.Float32BufferAttribute(wire, 3));
    root.add(new THREE.LineSegments(lg, new THREE.LineBasicMaterial({ color: '#2a2a2a' })));
  }

  // ---------------- gates ----------------
  {
    const tmp = {};
    for (const g of road.gates) {
      const i = Math.round(g.s);
      const b = g.side > 0 ? road.bL[i] : road.bR[i];
      road.toWorld(g.s, g.side * (b + 0.15), tmp);
      const gate = makeGate(g.open);
      gate.position.set(tmp.x, tmp.y, tmp.z);
      // gate runs along the road direction (local x = along s)
      gate.rotation.y = tmp.theta + Math.PI / 2 + (g.side > 0 ? 0 : Math.PI);
      root.add(gate);
    }
    // the closed gate behind the start
    road.toWorld(1.2, 0, tmp);
    const start = makeGate(false);
    start.position.set(tmp.x, tmp.y, tmp.z);
    start.rotation.y = tmp.theta;
    root.add(start);
  }

  // ---------------- fords, cattle grids, potholes, markings ----------------
  {
    const tmp = {};
    for (const f of road.fords) {
      const wm = new THREE.MeshPhongMaterial({ color: '#5b6f5e', shininess: 140, specular: '#d8e4e8', transparent: true, opacity: 0.78 });
      // water lies only where the lane dips below it, and only between the boundaries
      let a = Math.round(f.s);
      let b = a;
      while (a > 0 && road.y[a - 1] < f.waterY) a--;
      while (b < road.n - 1 && road.y[b + 1] < f.waterY) b++;
      const g = buildStrip(road, a - 1, b + 1, (i) => [-(road.bR[i] - 0.05), 0, road.bL[i] - 0.05].map((d) => ({ d, h: 0, u: d / 4, v: i / 4 })));
      const p = g.attributes.position;
      for (let k = 0; k < p.count; k++) p.setY(k, f.waterY);
      g.computeVertexNormals();
      const m = add(g, wm, { receive: false });
      m.renderOrder = 2;
      // depth gauge
      const gs = f.s0 - 1;
      road.toWorld(gs, road.leftBound(gs) - 0.2, tmp);
      const gauge = new THREE.Group();
      gauge.position.set(tmp.x, tmp.y - 0.4, tmp.z);
      for (let k = 0; k < 8; k++) {
        const seg = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.25, 0.05), mat(k % 2 ? '#111111' : '#f2f2f2'));
        seg.position.y = 0.125 + k * 0.25;
        gauge.add(seg);
      }
      gauge.rotation.y = tmp.theta + Math.PI;
      root.add(gauge);
    }
    for (const gr of road.grids) {
      const pit = buildStrip(road, Math.floor(gr.s - 1.6), Math.ceil(gr.s + 1.6), (i) => {
        const w = road.hw[i] + 0.1;
        return [-w, w].map((d) => ({ d, h: 0.025, u: 0, v: 0 }));
      });
      add(pit, mat('#141414'));
      const bars = [];
      for (let s = gr.s - 1.5; s <= gr.s + 1.5; s += 0.2) {
        road.toWorld(s, 0, tmp);
        bars.push([tmp.x, tmp.y + 0.05, tmp.z, tmp.theta]);
      }
      const hw = road.hw[Math.round(gr.s)] + 0.1;
      const im = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.035, 0.035, hw * 2, 6).rotateZ(Math.PI / 2), mat('#8a8f93'), bars.length);
      const m4 = new THREE.Matrix4();
      bars.forEach(([x, y, z, th], k) => {
        m4.makeRotationY(th);
        m4.setPosition(x, y, z);
        im.setMatrixAt(k, m4);
      });
      root.add(im);
    }
    const potM = new THREE.MeshLambertMaterial({ color: '#2e2d2b', polygonOffset: true, polygonOffsetFactor: -2 });
    const potG = new THREE.CircleGeometry(1, 10).rotateX(-Math.PI / 2);
    for (const p of road.potholes) {
      road.toWorld(p.s, p.d, tmp);
      const m = new THREE.Mesh(potG, potM);
      m.position.set(tmp.x, tmp.y + 0.03, tmp.z);
      m.scale.set(p.r * 1.3, 1, p.r);
      m.rotation.y = tmp.theta + rng.range(-0.5, 0.5);
      m.receiveShadow = true;
      root.add(m);
    }
    for (const mk of road.markings) {
      const i = Math.round(mk.s);
      road.toWorld(mk.s, road.hw[i] * 0.48, tmp);
      const m = new THREE.Mesh(
        new THREE.PlaneGeometry(1.15, 2.6).rotateX(-Math.PI / 2),
        new THREE.MeshLambertMaterial({ map: TX.markingTexture(mk.text), transparent: true, polygonOffset: true, polygonOffsetFactor: -3 }),
      );
      m.position.set(tmp.x, tmp.y + 0.035, tmp.z);
      m.rotation.y = tmp.theta + Math.PI;
      m.receiveShadow = true;
      root.add(m);
    }
  }

  // ---------------- signs ----------------
  {
    const tmp = {};
    const postM = mat('#9a9a9a');
    for (const sg of road.signs) {
      const i = clamp(Math.round(sg.s), 0, road.n - 1);
      const b = sg.side > 0 ? road.bL[i] : road.bR[i];
      road.toWorld(sg.s, sg.side * (b - 0.25), tmp);
      const g = new THREE.Group();
      g.position.set(tmp.x, tmp.y, tmp.z);
      g.rotation.y = tmp.theta + Math.PI;
      const tex = TX.signTexture(sg.kind, region);
      const rect = !['pp', 'sheep', 'cattle', 'horse', 'ford', 'grid'].includes(sg.kind);
      const w = rect ? 1.9 : sg.kind === 'pp' ? 1.0 : 0.95;
      const h = rect ? 0.95 : w;
      const top = rect ? 2.3 : 2.4;
      const panelM = new THREE.MeshLambertMaterial({ map: tex, transparent: !rect, alphaTest: 0.3 });
      const front = new THREE.Mesh(new THREE.PlaneGeometry(w, h), panelM);
      front.position.y = top - h / 2;
      front.castShadow = true;
      g.add(front);
      if (sg.kind === 'pp') {
        // passing place signs face both ways
        const back = front.clone();
        back.rotation.y = Math.PI;
        back.position.z = -0.03;
        g.add(back);
      } else {
        const back = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat('#7c7f82'));
        back.rotation.y = Math.PI;
        back.position.set(0, top - h / 2, -0.02);
        if (rect) g.add(back);
      }
      const nPosts = rect ? [-w * 0.35, w * 0.35] : [0];
      for (const x of nPosts) {
        const p = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, top - 0.1, 6), postM);
        p.position.set(x, (top - 0.1) / 2, -0.05);
        p.castShadow = true;
        g.add(p);
      }
      root.add(g);
    }
  }

  // ---------------- the village and the pub ----------------
  buildVillage(road, region, root, rng);

  // ---------------- distant mountains ----------------
  if (T.mountains) {
    const M = T.mountains;
    const cx = (B.minX + B.maxX) / 2;
    const cz = (B.minZ + B.maxZ) / 2;
    // keep every mountain's footprint well clear of the terrain we actually drive through
    const R = Math.hypot(B.maxX - B.minX, B.maxZ - B.minZ) / 2 + 700;
    const fog = new THREE.Color(region.sky.fog);
    for (let k = 0; k < M.count; k++) {
      const a = (k / M.count) * Math.PI * 2 + rng.range(-0.15, 0.15);
      const h = rng.range(M.h[0], M.h[1]);
      const r = h * rng.range(1.3, 1.9);
      const g = new THREE.ConeGeometry(r, h, 11, 6);
      const p = g.attributes.position;
      for (let v = 0; v < p.count; v++) {
        const x = p.getX(v);
        const y = p.getY(v);
        const z = p.getZ(v);
        const n = n2(x / 120 + k * 10, z / 120) * 0.22 + n2(x / 40, z / 40 + k) * 0.08;
        const top = (y + h / 2) / h;
        p.setXYZ(v, x * (1 + n), y + n * h * 0.25 * (1 - top), z * (1 + n));
      }
      g.computeVertexNormals();
      const col = new THREE.Color(M.color).lerp(fog, 0.45 + rng.range(0, 0.2));
      const m = new THREE.Mesh(g, new THREE.MeshLambertMaterial({ color: col, flatShading: true, fog: false }));
      const dist = R + r * 1.25 + rng.range(0, 500);
      m.position.set(cx + Math.cos(a) * dist, avgY + h / 2 - 60, cz + Math.sin(a) * dist);
      root.add(m);
    }
  }

  // ---------------- sky ----------------
  const sky = buildSky(region);
  scene.add(sky);
  updaters.push((dt, cam) => sky.position.copy(cam.position));
  const clouds = new THREE.Group();
  {
    const ct = TX.cloudTexture();
    const n = region.weather === 'drizzle' ? 26 : 16;
    for (let k = 0; k < n; k++) {
      const sm = new THREE.SpriteMaterial({ map: ct, fog: false, transparent: true, opacity: region.weather === 'drizzle' ? 0.9 : 0.75, depthWrite: false, color: region.weather === 'mist' ? '#ffe9d0' : '#ffffff' });
      const sp = new THREE.Sprite(sm);
      const a = rng.range(0, Math.PI * 2);
      const r = rng.range(700, 1700);
      sp.position.set(Math.cos(a) * r, rng.range(220, 420), Math.sin(a) * r);
      sp.scale.set(rng.range(380, 650), rng.range(140, 220), 1);
      clouds.add(sp);
    }
    scene.add(clouds);
    updaters.push((dt, cam) => {
      clouds.position.set(cam.position.x, 0, cam.position.z);
      clouds.rotation.y += dt * 0.002;
    });
  }

  // ---------------- weather ----------------
  if (region.weather === 'drizzle') {
    const N = 1400;
    const pos = new Float32Array(N * 6);
    const drops = [];
    for (let k = 0; k < N; k++) drops.push([rng.range(-25, 25), rng.range(-8, 18), rng.range(-25, 25)]);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const rain = new THREE.LineSegments(g, new THREE.LineBasicMaterial({ color: '#c8d2d8', transparent: true, opacity: 0.45 }));
    rain.frustumCulled = false;
    scene.add(rain);
    updaters.push((dt, cam) => {
      rain.position.copy(cam.position);
      for (let k = 0; k < N; k++) {
        const d = drops[k];
        d[1] -= dt * 9;
        d[0] -= dt * 1.2;
        if (d[1] < -8) {
          d[1] = 18;
          d[0] = rng.range(-25, 25);
          d[2] = rng.range(-25, 25);
        }
        pos.set([d[0], d[1], d[2], d[0] - 0.08, d[1] - 0.5, d[2]], k * 6);
      }
      g.attributes.position.needsUpdate = true;
    });
  }

  return {
    root,
    terrainHeight,
    waterY,
    update(dt, cam) {
      for (const u of updaters) u(dt, cam);
    },
  };
}

function makeFieldColorer(region, n2, avgY, waterY) {
  const T = region.terrain;
  const pal = (arr) => arr.map((h) => C(h));
  if (T.style === 'patchwork') {
    const fields = pal(['#5c9140', '#6ea24a', '#4d7e33', '#87ab4b', '#c8b25c', '#5f8f3c', '#679a41', '#d9c95a', '#557f38', '#73a34a']);
    const hedge = C('#2e4a22');
    return (x, z) => {
      const a = 0.35;
      const xr = x * Math.cos(a) - z * Math.sin(a);
      const zr = x * Math.sin(a) + z * Math.cos(a);
      const wx = xr + n2(x / 70, z / 70) * 16;
      const wz = zr + n2(x / 70 + 30, z / 70) * 16;
      const cx = Math.floor(wx / 130);
      const cz = Math.floor(wz / 90);
      let c = fields[Math.floor(hash2(cx, cz) * fields.length)];
      const fx = wx / 130 - cx;
      const fz = wz / 90 - cz;
      const edge = Math.min(Math.min(fx, 1 - fx) * 130, Math.min(fz, 1 - fz) * 90);
      if (edge < 4) c = mixC(hedge, c, edge / 4);
      return scaleC(c, 0.9 + 0.18 * n2(x / 13, z / 13));
    };
  }
  if (T.style === 'hills') {
    const low = pal(['#5c8a3c', '#6b9844', '#55803a', '#76a04a']);
    const bracken = C('#8b7a3c');
    const moor = C('#6f773d');
    const rock = C('#85847a');
    const wall = C('#8f8d84');
    return (x, z, h) => {
      const rel = (h - avgY) / T.amp;
      const cx = Math.floor((x + n2(x / 60, z / 60) * 12) / 110);
      const cz = Math.floor((z + n2(x / 60 + 9, z / 60) * 12) / 80);
      let c = low[Math.floor(hash2(cx, cz) * low.length)];
      const fx = (x + n2(x / 60, z / 60) * 12) / 110 - cx;
      const fz = (z + n2(x / 60 + 9, z / 60) * 12) / 80 - cz;
      if (rel < 0.25 && Math.min(fx, 1 - fx, fz, 1 - fz) < 0.025) c = wall;
      const t = smoothstep(0.15, 0.45, rel + n2(x / 40, z / 40) * 0.12);
      c = mixC(c, n2(x / 90, z / 90) > 0 ? bracken : moor, t);
      c = mixC(c, rock, smoothstep(0.7, 0.95, rel));
      if (waterY != null && h < waterY + 1.2) c = mixC(c, C('#7a7a62'), 0.6);
      return scaleC(c, 0.9 + 0.18 * n2(x / 11, z / 11));
    };
  }
  // Highland moor
  const olive = C('#6f6f3c');
  const brown = C('#7b6040');
  const heather = C('#74506c');
  const green = C('#5f7d3b');
  const rock = C('#8a877c');
  return (x, z, h) => {
    const rel = (h - avgY) / T.amp;
    const a = n2(x / 70, z / 70);
    const b = n2(x / 25 + 50, z / 25);
    let c = a > 0.15 ? heather : a < -0.2 ? brown : olive;
    c = mixC(c, olive, 0.5 + 0.5 * b * 0.5);
    c = mixC(c, green, smoothstep(0.1, -0.3, rel));
    c = mixC(c, rock, smoothstep(0.55, 0.9, rel + b * 0.1));
    if (waterY != null && h < waterY + 1.2) c = mixC(c, C('#8c8466'), 0.7);
    return scaleC(c, 0.92 + 0.16 * n2(x / 9, z / 9));
  };
}

function buildSky(region) {
  const S = region.sky;
  const sun = new THREE.Vector3(...S.sunDir).normalize();
  const m = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    uniforms: {
      top: { value: new THREE.Color(S.top) },
      bottom: { value: new THREE.Color(S.fog) },
      sunDir: { value: sun },
      sunColor: { value: new THREE.Color(S.sun) },
    },
    vertexShader: `varying vec3 vDir;
      void main() { vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: `uniform vec3 top; uniform vec3 bottom; uniform vec3 sunDir; uniform vec3 sunColor; varying vec3 vDir;
      void main() {
        vec3 d = normalize(vDir);
        float h = clamp(d.y * 1.4 + 0.02, 0.0, 1.0);
        vec3 col = mix(bottom, top, pow(h, 0.65));
        float sd = max(dot(d, sunDir), 0.0);
        col += sunColor * (pow(sd, 600.0) * 1.5 + pow(sd, 12.0) * 0.18);
        gl_FragColor = vec4(col, 1.0);
        #include <colorspace_fragment>
      }`,
  });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(4000, 24, 12), m);
  sky.renderOrder = -10;
  sky.frustumCulled = false;
  return sky;
}

function buildVillage(road, region, root, rng) {
  const V = region.village;
  const tmp = {};
  const wallM = mat(V.walls);
  const roofM = mat(V.thatch ? '#a07d48' : V.roof, { flatShading: true });
  const winM = mat('#2a3340');
  const doorColours = ['#2d4f7c', '#7c2d2d', '#2d6b3f', '#1e1e1e', '#c9a33a'];
  const house = (s, side, w, depth, h, pub = false) => {
    const i = clamp(Math.round(s), 0, road.n - 1);
    const b = side > 0 ? road.bL[i] : road.bR[i];
    const g = new THREE.Group();
    // side 0: across the end of the lane, facing back down it
    road.toWorld(s, side ? side * (b + 3 + depth / 2) : 0, tmp);
    g.position.set(tmp.x, tmp.y - 0.1, tmp.z);
    g.rotation.y = tmp.theta + (side > 0 ? -Math.PI / 2 : side < 0 ? Math.PI / 2 : Math.PI);
    const plinth = new THREE.Mesh(new THREE.BoxGeometry(w + 0.2, 2.6, depth + 0.2), mat('#6f6a60'));
    plinth.position.y = -1.2;
    g.add(plinth);
    const body = new THREE.Mesh(new THREE.BoxGeometry(w, h, depth), wallM);
    body.position.y = h / 2;
    body.castShadow = true;
    body.receiveShadow = true;
    g.add(body);
    // triangular prism with the ridge running along the house
    const roofH = V.thatch ? 2.6 : 2.2;
    const r = (depth + 0.7) / 1.732;
    const roofG = new THREE.CylinderGeometry(r, r, w + 0.5, 3).rotateZ(Math.PI / 2).rotateX(-Math.PI / 2);
    const roof = new THREE.Mesh(roofG, roofM);
    const sy = roofH / (1.5 * r);
    roof.scale.set(1, sy, 1);
    roof.position.y = h + 0.5 * r * sy;
    roof.castShadow = true;
    g.add(roof);
    const chim = new THREE.Mesh(new THREE.BoxGeometry(0.6, 1.6, 0.6), mat('#8a5a44'));
    chim.position.set(w * 0.35, h + roofH * 0.7, 0);
    chim.castShadow = true;
    g.add(chim);
    const front = depth / 2 + 0.02;
    for (const x of [-w * 0.3, w * 0.3]) {
      for (const y of [h * 0.3, h * 0.72]) {
        const win = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.9, 0.06), winM);
        win.position.set(x, y, front);
        g.add(win);
      }
    }
    const door = new THREE.Mesh(new THREE.BoxGeometry(0.95, 2.0, 0.08), mat(rng.pick(doorColours)));
    door.position.set(0, 1.0, front);
    g.add(door);
    root.add(g);
    return g;
  };
  let s = road.village.s0 + 18;
  let side = 1;
  while (s < road.length - 55) {
    if (rng.chance(0.8)) house(s, side, rng.range(7, 10), rng.range(5, 6), rng.range(4.6, 5.6));
    side = -side;
    if (side > 0) s += rng.range(16, 24);
  }
  // the destination: the pub stands across the head of its car park, facing you as you arrive
  const pubDepth = 8;
  const pub = house(road.length + 0.6 + pubDepth / 2, 0, 15, pubDepth, 6.4, true);
  const board = new THREE.Mesh(new THREE.PlaneGeometry(7.5, 1.1), new THREE.MeshLambertMaterial({ map: TX.nameBoardTexture(V.pub) }));
  board.position.set(0, 4.9, pubDepth / 2 + 0.05);
  pub.add(board);
  for (const x of [-5.2, 5.2]) {
    const bench = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.75, 0.7), mat('#6b4e30'));
    bench.position.set(x, 0.38, pubDepth / 2 + 1.2);
    bench.castShadow = true;
    pub.add(bench);
  }
  // hanging sign at the corner of the car park
  const cs = road.length - 7;
  road.toWorld(cs, road.leftEdge(cs) + 0.4, tmp);
  const post = new THREE.Group();
  post.position.set(tmp.x, tmp.y, tmp.z);
  post.rotation.y = tmp.theta + Math.PI;
  const pole = new THREE.Mesh(new THREE.BoxGeometry(0.16, 3.6, 0.16), mat('#3a2d22'));
  pole.position.y = 1.8;
  const arm = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.12, 0.12), mat('#3a2d22'));
  arm.position.set(0.6, 3.4, 0);
  const sign = new THREE.Mesh(
    new THREE.PlaneGeometry(1.1, 1.38),
    new THREE.MeshLambertMaterial({ map: TX.pubSignTexture(V.pub, region.id === 'wales' ? 'lion' : region.id === 'scotland' ? 'ship' : 'plough'), side: THREE.DoubleSide }),
  );
  sign.position.set(0.8, 2.65, 0);
  sign.rotation.y = Math.PI / 2;
  post.add(pole, arm, sign);
  post.traverse((o) => (o.castShadow = true));
  root.add(post);
}
