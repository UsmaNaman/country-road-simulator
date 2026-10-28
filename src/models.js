// Low-poly models built from primitives. Every model faces +z with its origin on the ground,
// and exposes userData.animate(entity, dt, time) for wheels, legs, waving arms and lights.
import * as THREE from 'three';
import { cowHideTexture } from './textures.js';

const mats = new Map();
export function mat(color, extra = {}) {
  const key = color + JSON.stringify(extra);
  if (!mats.has(key)) mats.set(key, new THREE.MeshLambertMaterial({ color, ...extra }));
  return mats.get(key);
}
const GLASS = new THREE.MeshPhongMaterial({ color: '#33475a', shininess: 100, specular: '#c8d4de' });
const CLEAR_GLASS = new THREE.MeshPhongMaterial({ color: '#9fb6c8', shininess: 90, specular: '#ffffff', transparent: true, opacity: 0.32 });
const TYRE = mat('#1b1b1b');
const HUB = mat('#b9bcbf');
const DARK = mat('#262626');

const geos = new Map();
function geo(key, make) {
  if (!geos.has(key)) geos.set(key, make());
  return geos.get(key);
}
const boxGeo = (w, h, d) => geo(`b${w},${h},${d}`, () => new THREE.BoxGeometry(w, h, d));

function part(g, m, x = 0, y = 0, z = 0, parent) {
  const mesh = new THREE.Mesh(g, m);
  mesh.position.set(x, y, z);
  mesh.castShadow = true;
  if (parent) parent.add(mesh);
  return mesh;
}
const box = (parent, w, h, d, m, x, y, z) => part(boxGeo(w, h, d), m, x, y, z, parent);

// box whose top face is narrowed/shortened — windscreens and bonnets
function taperGeo(w, h, l, topW, topL, shiftZ) {
  return geo(`t${w},${h},${l},${topW},${topL},${shiftZ}`, () => {
    const g = new THREE.BoxGeometry(w, h, l);
    const p = g.attributes.position;
    for (let i = 0; i < p.count; i++) {
      if (p.getY(i) > 0) {
        p.setX(i, p.getX(i) * topW);
        p.setZ(i, p.getZ(i) * topL + shiftZ);
      }
    }
    g.computeVertexNormals();
    return g;
  });
}

function wheel(parent, r, w, x, y, z, list) {
  const pivot = new THREE.Group();
  pivot.position.set(x, y, z);
  const t = part(geo(`w${r},${w}`, () => new THREE.CylinderGeometry(r, r, w, 16).rotateZ(Math.PI / 2)), TYRE);
  const h = part(geo(`h${r},${w}`, () => new THREE.CylinderGeometry(r * 0.55, r * 0.55, w + 0.02, 10).rotateZ(Math.PI / 2)), HUB);
  pivot.add(t, h);
  parent.add(pivot);
  list.push(pivot);
  return pivot;
}

function spinWheels(g, e, dt) {
  const r = g.userData.wheelR || 0.32;
  for (const w of g.userData.wheels) w.rotation.x += (e.v * dt) / r;
}

// ---------------- cars ----------------

const CAR_SHAPES = {
  hatch: { L: 4.0, W: 1.74, bodyH: 0.62, clear: 0.27, cabH: 0.58, cabL: 2.25, cabZ: -0.3, topL: 0.62, topW: 0.8, shift: -0.15, r: 0.31 },
  estate: { L: 4.75, W: 1.84, bodyH: 0.6, clear: 0.27, cabH: 0.6, cabL: 3.05, cabZ: -0.55, topL: 0.84, topW: 0.82, shift: -0.12, r: 0.32 },
  suv: { L: 4.9, W: 2.02, bodyH: 0.82, clear: 0.42, cabH: 0.68, cabL: 3.0, cabZ: -0.45, topL: 0.85, topW: 0.85, shift: -0.1, r: 0.4, rails: true },
  landrover: { L: 4.6, W: 1.95, bodyH: 0.88, clear: 0.45, cabH: 0.78, cabL: 3.0, cabZ: -0.55, topL: 0.97, topW: 0.95, shift: -0.02, r: 0.42, spare: true },
  van: { L: 5.2, W: 2.0, bodyH: 1.0, clear: 0.34, r: 0.36, van: true },
  postvan: { L: 5.2, W: 2.0, bodyH: 1.0, clear: 0.34, r: 0.36, van: true },
  motorhome: { L: 6.6, W: 2.3, bodyH: 1.15, clear: 0.4, r: 0.4, motorhome: true },
};


export function makeCar(type, color) {
  const S = CAR_SHAPES[type] || CAR_SHAPES.hatch;
  const g = new THREE.Group();
  const body = mat(color);
  const wheels = [];
  g.userData.wheels = wheels;
  g.userData.wheelR = S.r;
  const y0 = S.clear;

  if (S.van || S.motorhome) {
    const H = S.motorhome ? 2.55 : 1.95;
    const cabLen = S.motorhome ? 1.4 : 1.25;
    // cargo / living box
    box(g, S.W, H - 0.1, S.L - cabLen, body, 0, y0 + (H - 0.1) / 2, -cabLen / 2);
    // cab with sloped windscreen
    const cab = part(taperGeo(S.W, 1.25, cabLen, 0.94, 0.55, -0.25), body, 0, y0 + 0.62, S.L / 2 - cabLen / 2);
    g.add(cab);
    part(taperGeo(S.W * 0.9, 0.62, cabLen * 0.52, 0.96, 0.6, -0.12), GLASS, 0, y0 + 1.36, S.L / 2 - cabLen * 0.62, g);
    if (S.motorhome) {
      box(g, S.W, 0.6, 1.0, body, 0, y0 + 2.2, S.L / 2 - cabLen - 0.1); // over-cab luton
      box(g, S.W + 0.02, 0.14, S.L - cabLen - 0.2, mat('#2e6fa8'), 0, y0 + 0.9, -cabLen / 2);
      box(g, S.W + 0.02, 0.06, S.L - cabLen - 0.2, mat('#d8a43a'), 0, y0 + 1.05, -cabLen / 2);
      for (const z of [-2.2, -0.6]) {
        box(g, S.W + 0.03, 0.55, 0.9, GLASS, 0, y0 + 1.55, z);
      }
      box(g, 1.0, 0.25, 0.8, mat('#e6e6e6'), 0.2, y0 + H, -1.2); // roof vent / solar
    } else if (type === 'postvan') {
      box(g, S.W + 0.02, 0.12, S.L - cabLen - 0.4, mat('#f2c230'), 0, y0 + 0.75, -cabLen / 2);
    }
  } else {
    box(g, S.W, S.bodyH, S.L, body, 0, y0 + S.bodyH / 2, 0);
    // bonnet slope at the front
    part(taperGeo(S.W * 0.98, 0.12, S.L * 0.3, 0.96, 0.9, -0.05), body, 0, y0 + S.bodyH + 0.04, S.L / 2 - S.L * 0.15, g);
    part(taperGeo(S.W * 0.96, S.cabH, S.cabL, S.topW, S.topL, S.shift), GLASS, 0, y0 + S.bodyH + S.cabH / 2, S.cabZ, g);
    const roofL = S.cabL * S.topL * 0.98;
    box(g, S.W * 0.96 * S.topW, 0.07, roofL, body, 0, y0 + S.bodyH + S.cabH, S.cabZ + S.shift);
    if (S.rails) {
      for (const x of [-1, 1]) box(g, 0.05, 0.06, roofL * 0.9, mat('#999999'), x * S.W * 0.36, y0 + S.bodyH + S.cabH + 0.07, S.cabZ + S.shift);
    }
    if (S.spare) {
      const sp = part(geo('spare', () => new THREE.CylinderGeometry(0.38, 0.38, 0.24, 14).rotateX(Math.PI / 2)), TYRE, 0, y0 + 0.7, -S.L / 2 - 0.12, g);
      sp.castShadow = true;
    }
    // bumpers
    box(g, S.W * 1.01, 0.16, 0.14, DARK, 0, y0 + 0.12, S.L / 2);
    box(g, S.W * 1.01, 0.16, 0.14, DARK, 0, y0 + 0.12, -S.L / 2);
    // wing mirrors
    for (const x of [-1, 1]) box(g, 0.16, 0.1, 0.12, body, x * (S.W / 2 + 0.08), y0 + S.bodyH + 0.1, S.cabZ + S.cabL * 0.38);
  }

  // lights and UK plates (white at the front, yellow at the back)
  const head = new THREE.MeshLambertMaterial({ color: '#fff7dc', emissive: '#000000' });
  g.userData.headMat = head;
  for (const x of [-1, 1]) {
    box(g, 0.32, 0.12, 0.05, head, x * (S.W / 2 - 0.28), y0 + 0.42, S.L / 2 + 0.01);
    box(g, 0.24, 0.14, 0.05, mat('#a3121b', { emissive: '#3a0003' }), x * (S.W / 2 - 0.22), y0 + 0.5, -S.L / 2 - 0.01);
  }
  box(g, 0.52, 0.11, 0.03, mat('#f4f4f0'), 0, y0 + 0.24, S.L / 2 + 0.08);
  box(g, 0.52, 0.11, 0.03, mat('#f2c81e'), 0, y0 + 0.3, -S.L / 2 - 0.08);

  const wb = S.L * 0.31;
  for (const z of [wb, -wb]) for (const x of [-1, 1]) wheel(g, S.r, 0.24, x * (S.W / 2 - 0.13), S.r, z, wheels);

  g.userData.animate = (e, dt) => {
    spinWheels(g, e, dt);
    head.emissive.setRGB(0, 0, 0);
    if (e.flashT > 0 && Math.floor(e.flashT * 6) % 2 === 0) head.emissive.setRGB(1, 0.95, 0.75);
  };
  return g;
}

// ---------------- tractor ----------------

export function makeTractor(color = '#3d7a3a', { trailer = false } = {}) {
  const g = new THREE.Group();
  const body = mat(color);
  const wheels = [];
  g.userData.wheels = wheels;
  g.userData.wheelR = 0.6;
  const t = new THREE.Group(); // the tractor itself
  g.add(t);
  // chassis and bonnet
  box(t, 0.8, 0.45, 3.0, DARK, 0, 0.75, 0.2);
  part(taperGeo(0.95, 0.85, 1.9, 0.92, 0.96, 0), body, 0, 1.25, 1.05, t);
  box(t, 0.98, 0.18, 0.12, mat('#cfcfcf'), 0, 1.3, 2.02); // grille
  box(t, 0.7, 0.35, 0.3, DARK, 0, 0.55, 2.15); // front weights
  // cab
  const cabY = 1.65;
  for (const x of [-0.68, 0.68]) for (const z of [-0.2, -1.45]) box(t, 0.07, 1.35, 0.07, DARK, x, cabY + 0.65, z);
  box(t, 1.45, 0.08, 1.35, mat('#efefef'), 0, cabY + 1.36, -0.82); // roof
  box(t, 1.3, 1.2, 1.2, CLEAR_GLASS, 0, cabY + 0.6, -0.82);
  box(t, 1.5, 0.3, 1.4, body, 0, cabY - 0.12, -0.82);
  // seat and driver silhouette
  box(t, 0.45, 0.5, 0.45, DARK, 0.1, cabY + 0.4, -1.0);
  part(geo('headS', () => new THREE.SphereGeometry(0.13, 10, 8)), mat('#e0b48f'), 0.1, cabY + 0.85, -0.95, t);
  // exhaust
  part(geo('exh', () => new THREE.CylinderGeometry(0.05, 0.05, 1.3, 8)), mat('#555555'), 0.36, 2.05, 1.6, t);
  // amber beacon
  const beacon = new THREE.MeshLambertMaterial({ color: '#ffae00', emissive: '#000000' });
  part(geo('beacon', () => new THREE.CylinderGeometry(0.09, 0.11, 0.16, 10)), beacon, -0.5, cabY + 1.48, -0.3, t);
  g.userData.beacon = beacon;
  // wheels: big at the back, small at the front, with mudguards
  wheel(t, 0.85, 0.55, -0.98, 0.85, -0.85, wheels);
  wheel(t, 0.85, 0.55, 0.98, 0.85, -0.85, wheels);
  wheel(t, 0.5, 0.34, -0.85, 0.5, 1.3, wheels);
  wheel(t, 0.5, 0.34, 0.85, 0.5, 1.3, wheels);
  for (const x of [-0.98, 0.98]) box(t, 0.6, 0.06, 1.4, body, x, 1.75, -0.85);
  box(t, 0.4, 0.12, 0.05, mat('#f2c81e'), 0, 1.2, -1.55);

  if (trailer) {
    // tractor at the front of a 9.4 m combined length, centred on the origin
    t.position.z = 9.4 / 2 - 2.35;
    const tr = new THREE.Group();
    tr.position.z = t.position.z - 2.4 - 2.6;
    g.add(tr);
    box(tr, 2.3, 0.25, 4.6, mat('#7a5b3a'), 0, 1.05, 0);
    box(tr, 0.12, 0.12, 1.4, DARK, 0, 0.95, 2.9);
    for (const x of [-1.15, 1.15]) box(tr, 0.06, 0.55, 4.6, mat('#6b4e30'), x, 1.42, 0);
    wheel(tr, 0.5, 0.35, -1.05, 0.5, -0.4, wheels);
    wheel(tr, 0.5, 0.35, 1.05, 0.5, -0.4, wheels);
    const bale = geo('bale', () => new THREE.CylinderGeometry(0.6, 0.6, 1.1, 14).rotateZ(Math.PI / 2));
    for (const z of [-1.5, 0, 1.5]) part(bale, mat('#d8b860'), 0, 1.78, z, tr);
    part(bale, mat('#d8b860'), 0, 2.95, -0.75, tr);
  }

  g.userData.animate = (e, dt, time) => {
    spinWheels(g, e, dt);
    const on = Math.sin(time * 9) > 0.3;
    beacon.emissive.setRGB(on ? 1 : 0.15, on ? 0.6 : 0.08, 0);
  };
  return g;
}

// ---------------- quad bike ----------------

export function makeQuad() {
  const g = new THREE.Group();
  const wheels = [];
  g.userData.wheels = wheels;
  g.userData.wheelR = 0.3;
  box(g, 0.85, 0.35, 1.5, mat('#b5281f'), 0, 0.62, 0);
  box(g, 0.9, 0.06, 0.5, mat('#333333'), 0, 0.85, -0.6);
  box(g, 0.8, 0.06, 0.4, mat('#333333'), 0, 0.85, 0.65);
  for (const z of [0.55, -0.55]) for (const x of [-0.5, 0.5]) wheel(g, 0.3, 0.26, x, 0.3, z, wheels);
  const farmer = makePerson({ style: 'farmer', seated: true });
  farmer.position.set(0, -0.02, -0.1);
  g.add(farmer);
  const dog = makeDog();
  dog.scale.setScalar(0.8);
  dog.position.set(0, 0.88, -0.65);
  g.add(dog);
  g.userData.animate = (e, dt, time) => {
    spinWheels(g, e, dt);
    farmer.userData.animate({ v: 0, waveT: e.waveT, sitting: true }, dt, time);
  };
  return g;
}

// ---------------- animals ----------------

export function makeSheep(face = 'white', lamb = false) {
  const g = new THREE.Group();
  const wool = mat(lamb ? '#f4f1e8' : '#e6e1d3');
  const faceM = mat(face === 'black' ? '#1d1a18' : '#efe4d0');
  const legM = mat(face === 'black' ? '#1d1a18' : '#3a332c');
  const blob = geo('wool', () => new THREE.IcosahedronGeometry(0.27, 1));
  for (const [x, y, z, s] of [[0, 0.62, 0.22, 1], [0, 0.66, -0.12, 1.08], [0.14, 0.6, 0.02, 0.85], [-0.14, 0.6, 0.02, 0.85], [0, 0.6, -0.36, 0.8]]) {
    const m = part(blob, wool, x, y, z, g);
    m.scale.setScalar(s);
  }
  const head = new THREE.Group();
  head.position.set(0, 0.7, 0.5);
  g.add(head);
  box(head, 0.17, 0.2, 0.3, faceM, 0, 0, 0.06);
  box(head, 0.2, 0.05, 0.08, faceM, 0, 0.06, -0.04);
  const legs = [];
  for (const [x, z] of [[0.11, 0.25], [-0.11, 0.25], [0.11, -0.3], [-0.11, -0.3]]) {
    const p = new THREE.Group();
    p.position.set(x, 0.42, z);
    part(geo('sleg', () => new THREE.CylinderGeometry(0.035, 0.03, 0.42, 6)), legM, 0, -0.21, 0, p);
    g.add(p);
    legs.push(p);
  }
  if (lamb) g.scale.setScalar(0.62);
  g.userData.animate = (e, dt) => {
    e.anim += dt * (2 + Math.abs(e.vmag || 0) * 6);
    const sw = Math.min(1, (e.vmag || 0) * 1.5) * 0.6;
    legs.forEach((l, i) => (l.rotation.x = Math.sin(e.anim * 2 + (i % 2 ? Math.PI : 0) + (i > 1 ? Math.PI : 0)) * sw));
    // grazing: head dips when standing still
    const grazing = (e.vmag || 0) < 0.08 && e.grazing;
    head.position.y += ((grazing ? 0.42 : 0.7) - head.position.y) * Math.min(1, dt * 3);
    head.rotation.x += ((grazing ? 0.7 : 0) - head.rotation.x) * Math.min(1, dt * 3);
  };
  return g;
}

export function makeCow(breed = 'friesian') {
  const g = new THREE.Group();
  const legs = [];
  let bodyM;
  if (breed === 'friesian') bodyM = new THREE.MeshLambertMaterial({ map: cowHideTexture(Math.floor(Math.random() * 4) + 1) });
  else if (breed === 'highland') bodyM = mat('#a5582b');
  else bodyM = mat('#1f1b19');
  const dark = breed === 'highland' ? mat('#7e3f1d') : mat('#1b1817');
  if (breed === 'highland') {
    const shag = geo('shag', () => new THREE.IcosahedronGeometry(0.5, 1));
    for (const [z, s] of [[0.55, 1], [0, 1.08], [-0.55, 1]]) {
      const m = part(shag, bodyM, 0, 0.95, z, g);
      m.scale.set(0.95 * s, 0.85 * s, 0.9 * s);
    }
  } else {
    box(g, 0.82, 0.8, 1.85, bodyM, 0, 1.0, 0);
  }
  const head = new THREE.Group();
  head.position.set(0, 1.15, 1.05);
  g.add(head);
  box(head, 0.42, 0.42, 0.55, breed === 'friesian' ? mat('#1a1a1a') : dark, 0, 0, 0.12);
  box(head, 0.36, 0.2, 0.16, mat('#d9a2a0'), 0, -0.12, 0.42);
  if (breed === 'highland') {
    box(head, 0.48, 0.2, 0.3, bodyM, 0, 0.2, 0.25); // fringe over the eyes
    const horn = geo('horn', () => new THREE.CylinderGeometry(0.03, 0.07, 0.75, 6));
    for (const x of [-1, 1]) {
      const h = part(horn, mat('#e9dfc4'), x * 0.42, 0.22, 0.05, head);
      h.rotation.z = x * -1.1;
      h.rotation.x = 0.3;
    }
  } else {
    for (const x of [-1, 1]) box(head, 0.18, 0.06, 0.08, mat('#e9dfc4'), x * 0.26, 0.22, 0.02);
  }
  for (const [x, z] of [[0.28, 0.65], [-0.28, 0.65], [0.28, -0.7], [-0.28, -0.7]]) {
    const p = new THREE.Group();
    p.position.set(x, 0.62, z);
    part(geo('cleg', () => new THREE.BoxGeometry(0.16, 0.64, 0.16)), breed === 'friesian' ? mat('#efece4') : dark, 0, -0.32, 0, p);
    g.add(p);
    legs.push(p);
  }
  if (breed === 'friesian') box(g, 0.3, 0.16, 0.3, mat('#e8aaa8'), 0, 0.55, -0.45);
  const tail = box(g, 0.06, 0.7, 0.06, dark, 0, 0.95, -0.95);
  tail.rotation.x = 0.15;
  if (breed === 'highland') g.scale.set(0.92, 0.88, 0.92);
  g.userData.animate = (e, dt) => {
    e.anim += dt * (1 + (e.vmag || 0) * 4);
    const sw = Math.min(1, (e.vmag || 0) * 1.3) * 0.45;
    legs.forEach((l, i) => (l.rotation.x = Math.sin(e.anim * 2.4 + (i === 0 || i === 3 ? 0 : Math.PI)) * sw));
    tail.rotation.z = Math.sin(e.anim * 1.7) * 0.25;
    const grazing = (e.vmag || 0) < 0.08 && e.grazing;
    head.position.y += ((grazing ? 0.6 : 1.15) - head.position.y) * Math.min(1, dt * 2);
    head.rotation.x += ((grazing ? 0.8 : 0) - head.rotation.x) * Math.min(1, dt * 2);
  };
  return g;
}

export function makeDog() {
  const g = new THREE.Group();
  const black = mat('#141414');
  const white = mat('#f2f0ea');
  box(g, 0.24, 0.24, 0.62, black, 0, 0.42, 0);
  box(g, 0.2, 0.18, 0.18, white, 0, 0.38, 0.28);
  const head = new THREE.Group();
  head.position.set(0, 0.58, 0.36);
  g.add(head);
  box(head, 0.18, 0.18, 0.2, black, 0, 0, 0);
  box(head, 0.1, 0.09, 0.14, white, 0, -0.04, 0.14);
  for (const x of [-0.06, 0.06]) box(head, 0.05, 0.09, 0.03, black, x, 0.12, -0.03);
  const tail = box(g, 0.06, 0.06, 0.32, black, 0, 0.5, -0.42);
  tail.rotation.x = -0.6;
  const legs = [];
  for (const [x, z] of [[0.08, 0.22], [-0.08, 0.22], [0.08, -0.22], [-0.08, -0.22]]) {
    const p = new THREE.Group();
    p.position.set(x, 0.32, z);
    part(geo('dleg', () => new THREE.BoxGeometry(0.06, 0.32, 0.06)), z > 0 ? white : black, 0, -0.16, 0, p);
    g.add(p);
    legs.push(p);
  }
  g.userData.animate = (e, dt) => {
    e.anim = (e.anim || 0) + dt * (3 + (e.vmag || 0) * 6);
    const sw = Math.min(1, (e.vmag || 0)) * 0.7;
    legs.forEach((l, i) => (l.rotation.x = Math.sin(e.anim * 2 + (i % 2 ? Math.PI : 0)) * sw));
    tail.rotation.y = Math.sin(e.anim * 4) * 0.5;
  };
  return g;
}

// ---------------- people ----------------

const SKIN = ['#f1c9a5', '#e0ac85', '#c68863', '#8d5a3b', '#f6d7bd'];
const JACKETS = ['#d6402f', '#2f6db5', '#f0b323', '#3e8a4a', '#7a3d8f', '#e86b1c', '#1f9aa0'];

export function makePerson({ style = 'rambler', seed = Math.random(), seated = false } = {}) {
  const g = new THREE.Group();
  const pick = (arr, k) => arr[Math.floor(((seed * 9301 + k * 49297) % 1) * arr.length) % arr.length];
  const skin = mat(pick(SKIN, 1));
  let jacket = mat(pick(JACKETS, 2));
  let trousers = mat(style === 'rambler' ? '#3d3f45' : '#4a4237');
  if (style === 'farmer') jacket = mat('#4b5a33');
  if (style === 'rider') {
    jacket = mat('#d7f22b', { emissive: '#3a4400' });
    trousers = mat('#e9e3d2');
  }
  const hip = 0.9;
  const legs = [];
  for (const x of [-0.1, 0.1]) {
    const p = new THREE.Group();
    p.position.set(x, hip, 0);
    part(geo('leg', () => new THREE.BoxGeometry(0.15, 0.86, 0.17)), trousers, 0, -0.43, 0, p);
    part(geo('boot', () => new THREE.BoxGeometry(0.16, 0.12, 0.26)), mat(style === 'farmer' ? '#25331f' : '#3b2a1e'), 0, -0.84, 0.04, p);
    g.add(p);
    legs.push(p);
  }
  box(g, 0.44, 0.62, 0.26, jacket, 0, hip + 0.31, 0);
  const head = part(geo('head', () => new THREE.SphereGeometry(0.13, 12, 10)), skin, 0, hip + 0.78, 0, g);
  if (style === 'farmer') {
    box(g, 0.3, 0.07, 0.34, mat('#6b5a3e'), 0, hip + 0.9, 0.03);
  } else if (style === 'rider') {
    const helmet = part(geo('helm', () => new THREE.SphereGeometry(0.15, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2)), mat('#1d1d1d'), 0, hip + 0.82, 0, g);
    helmet.castShadow = true;
  } else if (pick([0, 1, 1], 4)) {
    part(geo('beanie', () => new THREE.SphereGeometry(0.14, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2)), mat(pick(JACKETS, 5)), 0, hip + 0.84, 0, g);
  }
  if (style === 'rambler') box(g, 0.34, 0.42, 0.18, mat(pick(['#334455', '#7b2a2a', '#3b5d2e'], 6)), 0, hip + 0.36, -0.22);
  const arms = [];
  for (const x of [-0.28, 0.28]) {
    const p = new THREE.Group();
    p.position.set(x, hip + 0.58, 0);
    part(geo('arm', () => new THREE.BoxGeometry(0.11, 0.6, 0.12)), jacket, 0, -0.28, 0, p);
    part(geo('hand', () => new THREE.SphereGeometry(0.06, 6, 5)), skin, 0, -0.6, 0, p);
    g.add(p);
    arms.push(p);
  }
  if (seated === 'astride') {
    legs.forEach((l, i) => {
      l.rotation.x = -0.35;
      l.rotation.z = (i ? 1 : -1) * 0.5;
    });
  } else if (seated) {
    legs.forEach((l, i) => {
      l.rotation.x = -1.4;
      l.rotation.z = (i ? -1 : 1) * 0.3;
    });
  }
  g.userData.head = head;
  g.userData.animate = (e, dt, time) => {
    const spd = e.vmag || 0;
    if (!e.sitting && !seated) {
      e.anim = (e.anim || 0) + dt * (1.5 + spd * 4.5);
      const sw = Math.min(1, spd) * 0.55;
      legs[0].rotation.x = Math.sin(e.anim) * sw;
      legs[1].rotation.x = -Math.sin(e.anim) * sw;
      arms[0].rotation.x = -Math.sin(e.anim) * sw * 0.8;
      arms[1].rotation.x = Math.sin(e.anim) * sw * 0.8;
    }
    arms[1].rotation.z = 0;
    if (e.armUp) {
      arms[1].rotation.x = -2.7;
    } else if (e.waveT > 0) {
      arms[1].rotation.x = -2.9;
      arms[1].rotation.z = Math.sin(time * 14) * 0.35;
    } else if (e.shout > 0) {
      arms[0].rotation.x = -2.5;
      arms[1].rotation.x = -2.5;
    }
  };
  return g;
}

export function makeHorse(seed = Math.random()) {
  const g = new THREE.Group();
  const coat = mat(['#6b3f23', '#3b2416', '#a07850', '#d9d2c4'][Math.floor(seed * 4)]);
  const dark = mat('#2a1a10');
  const horse = new THREE.Group();
  g.add(horse);
  box(horse, 0.56, 0.68, 1.6, coat, 0, 1.3, 0);
  const neck = box(horse, 0.3, 0.75, 0.38, coat, 0, 1.75, 0.82);
  neck.rotation.x = 0.55;
  const head = box(horse, 0.24, 0.26, 0.6, coat, 0, 2.05, 1.15);
  head.rotation.x = 0.5;
  box(horse, 0.08, 0.5, 0.36, dark, 0, 1.92, 0.7); // mane
  const tail = box(horse, 0.12, 0.7, 0.12, dark, 0, 1.25, -0.88);
  tail.rotation.x = 0.25;
  const legs = [];
  for (const [x, z] of [[0.18, 0.62], [-0.18, 0.62], [0.18, -0.62], [-0.18, -0.62]]) {
    const p = new THREE.Group();
    p.position.set(x, 1.0, z);
    part(geo('hleg', () => new THREE.BoxGeometry(0.13, 1.0, 0.14)), coat, 0, -0.5, 0, p);
    part(geo('hoof', () => new THREE.BoxGeometry(0.15, 0.08, 0.16)), dark, 0, -0.98, 0, p);
    horse.add(p);
    legs.push(p);
  }
  box(horse, 0.62, 0.06, 0.5, mat('#3b2a1c'), 0, 1.66, 0.05); // saddle
  const rider = makePerson({ style: 'rider', seed, seated: 'astride' });
  rider.position.set(0, 0.84, -0.05);
  horse.add(rider);
  g.userData.animate = (e, dt, time) => {
    const spd = Math.abs(e.v);
    e.anim = (e.anim || 0) + dt * (1 + spd * 3.2);
    const sw = Math.min(1, spd * 0.9) * 0.45;
    legs.forEach((l, i) => (l.rotation.x = Math.sin(e.anim * 2 + (i === 0 || i === 3 ? 0 : Math.PI)) * sw));
    tail.rotation.z = Math.sin(e.anim) * 0.2;
    // a spooked horse rears up
    const rear = e.spookT > 0 ? Math.min(1, e.spookT) * 0.55 : 0;
    horse.rotation.x += (-rear - horse.rotation.x) * Math.min(1, dt * 6);
    horse.position.y = rear * 0.5;
    rider.userData.animate({ v: 0, waveT: e.waveT, sitting: true }, dt, time);
  };
  return g;
}

export function makeCyclist(seed = Math.random(), touring = false) {
  const g = new THREE.Group();
  const frameM = mat(['#c0392b', '#2c3e50', '#16a085', '#8e44ad'][Math.floor(seed * 4)]);
  const wheels = [];
  const wheelG = geo('bw', () => new THREE.TorusGeometry(0.34, 0.035, 6, 18).rotateY(Math.PI / 2));
  for (const z of [0.52, -0.52]) {
    const p = new THREE.Group();
    p.position.set(0, 0.36, z);
    part(wheelG, TYRE, 0, 0, 0, p);
    g.add(p);
    wheels.push(p);
  }
  const bar = geo('bar', () => new THREE.CylinderGeometry(0.025, 0.025, 1, 6));
  const tube = (x1, y1, z1, x2, y2, z2) => {
    const m = part(bar, frameM, (x1 + x2) / 2, (y1 + y2) / 2, (z1 + z2) / 2, g);
    const len = Math.hypot(x2 - x1, y2 - y1, z2 - z1);
    m.scale.y = len;
    m.lookAt(new THREE.Vector3(x2, y2, z2).add(g.position));
    m.rotateX(Math.PI / 2);
  };
  tube(0, 0.36, -0.52, 0, 0.85, -0.1);
  tube(0, 0.85, -0.1, 0, 0.92, 0.42);
  tube(0, 0.36, 0.52, 0, 0.92, 0.42);
  tube(0, 0.85, -0.1, 0, 0.4, 0.05);
  if (touring) {
    for (const x of [-0.18, 0.18]) box(g, 0.14, 0.32, 0.38, mat('#d4541b'), x, 0.62, -0.5);
  }
  // saddle, stem and handlebars
  tube(0, 0.85, -0.1, 0, 0.93, -0.12);
  box(g, 0.12, 0.05, 0.25, DARK, 0, 0.95, -0.13);
  tube(0, 0.92, 0.42, 0, 0.99, 0.5);
  box(g, 0.48, 0.035, 0.035, DARK, 0, 0.99, 0.5);

  // the rider: sitting on the saddle, leant over the bars with hands on the grips, feet on the pedals
  const pick = (arr, k) => arr[Math.floor(((seed * 9301 + k * 49297) % 1) * arr.length) % arr.length];
  const skin = mat(pick(SKIN, 1));
  const jersey = mat(pick(['#e8452c', '#1c5fd0', '#f6c400', '#0f9e72'], 3));
  const shorts = mat('#151515');
  const lean = touring ? 0.55 : 0.75; // touring riders sit more upright
  const hipY = 0.97;
  const hipZ = -0.14;
  const torso = new THREE.Group();
  torso.position.set(0, hipY, hipZ);
  torso.rotation.x = lean;
  box(torso, 0.36, 0.58, 0.22, jersey, 0, 0.29, 0);
  const head = new THREE.Group();
  head.position.set(0, 0.72, 0.02);
  head.rotation.x = -lean * 0.8; // eyes up the road
  part(geo('head', () => new THREE.SphereGeometry(0.13, 12, 10)), skin, 0, 0, 0, head);
  part(geo('helm', () => new THREE.SphereGeometry(0.15, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2)), mat('#ffffff'), 0, 0.04, 0, head);
  torso.add(head);
  g.add(torso);

  // limbs are unit boxes stretched between two joints each frame
  const limbG = geo('limb', () => new THREE.BoxGeometry(1, 1, 1));
  const limb = (m, w) => {
    const mesh = part(limbG, m, 0, 0, 0, g);
    mesh.userData.w = w;
    return mesh;
  };
  const UP = new THREE.Vector3(0, 1, 0);
  const dir = new THREE.Vector3();
  const place = (mesh, a, b) => {
    dir.subVectors(b, a);
    const len = dir.length() || 1e-3;
    mesh.position.addVectors(a, b).multiplyScalar(0.5);
    mesh.quaternion.setFromUnitVectors(UP, dir.divideScalar(len));
    mesh.scale.set(mesh.userData.w, len, mesh.userData.w);
  };
  // two equal bones from a to c, the joint bending towards the front of the bike
  const nrm = new THREE.Vector3();
  const joint = (a, c, bone, out) => {
    dir.subVectors(c, a);
    const d = Math.min(dir.length(), 2 * bone - 1e-3);
    const h = Math.sqrt(bone * bone - (d * d) / 4);
    nrm.set(0, -dir.z, dir.y).normalize();
    if (nrm.z < 0) nrm.negate();
    return out.copy(a).addScaledVector(dir, 0.5).addScaledVector(nrm, h);
  };

  const sides = [-1, 1].map((sx) => ({
    sx,
    hip: new THREE.Vector3(sx * 0.1, hipY, hipZ),
    knee: new THREE.Vector3(),
    foot: new THREE.Vector3(),
    thigh: limb(shorts, 0.14),
    shin: limb(skin, 0.11),
    shoe: box(g, 0.1, 0.08, 0.24, DARK, 0, 0, 0),
    crank: limb(HUB, 0.03),
    shoulder: new THREE.Vector3(sx * 0.19, hipY + 0.52 * Math.cos(lean), hipZ + 0.52 * Math.sin(lean)),
    hand: new THREE.Vector3(),
    arm: limb(jersey, 0.1),
    palm: part(geo('hand', () => new THREE.SphereGeometry(0.06, 6, 5)), skin, 0, 0, 0, g),
  }));
  const crankC = new THREE.Vector3(0, 0.4, 0.05);
  const pose = (phase, wave, time) => {
    for (const [i, sd] of sides.entries()) {
      const a = phase + i * Math.PI;
      sd.foot.set(sd.sx * 0.13, crankC.y + 0.17 * Math.sin(a), crankC.z + 0.17 * Math.cos(a));
      joint(sd.hip, sd.foot, 0.44, sd.knee);
      place(sd.thigh, sd.hip, sd.knee);
      place(sd.shin, sd.knee, sd.foot);
      sd.shoe.position.set(sd.foot.x, sd.foot.y + 0.02, sd.foot.z + 0.04);
      place(sd.crank, crankC.clone().setX(sd.sx * 0.08), sd.foot);
      // right hand (-x when facing +z) leaves the bars to wave
      if (wave && sd.sx < 0) sd.hand.set(sd.shoulder.x - 0.3, sd.shoulder.y + 0.18 + Math.sin(time * 12) * 0.04, sd.shoulder.z + 0.2);
      else sd.hand.set(sd.sx * 0.21, 0.99, 0.5);
      place(sd.arm, sd.shoulder, sd.hand);
      sd.palm.position.copy(sd.hand);
    }
  };
  pose(seed * 6, false, 0);

  g.userData.wheels = wheels;
  g.userData.wheelR = 0.34;
  g.userData.animate = (e, dt, time) => {
    for (const w of wheels) w.rotation.x += (e.v * dt) / 0.34;
    e.pedal = (e.pedal ?? seed * 6) + dt * e.v * 1.6;
    pose(e.pedal, e.waveT > 0, time);
  };
  return g;
}

// ---------------- props ----------------

// Merge a list of boxes [w, h, d, Matrix4, shade?] into one geometry (one draw call).
// An optional shade (0..1) per box becomes a vertex colour, multiplied with the material/instance colour.
export function mergedBoxes(parts) {
  const pos = [];
  const nor = [];
  const col = [];
  const idx = [];
  const shaded = parts.some((p) => p[4] !== undefined);
  for (const [w, h, d, m, shade = 1] of parts) {
    const g = new THREE.BoxGeometry(w, h, d).applyMatrix4(m);
    const base = pos.length / 3;
    pos.push(...g.attributes.position.array);
    nor.push(...g.attributes.normal.array);
    if (shaded) for (let k = 0; k < g.attributes.position.count; k++) col.push(shade, shade, shade);
    for (const i of g.index.array) idx.push(i + base);
    g.dispose();
  }
  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  out.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  if (shaded) out.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  out.setIndex(idx);
  return out;
}

// A five-bar field gate, built once per state and shared
export function makeGate(open = false) {
  const geom = geo('gate' + open, () => {
    const M = (x, y, z, rz = 0) => new THREE.Matrix4().makeRotationZ(rz).setPosition(x, y, z);
    const leaf = [];
    for (let i = 0; i < 5; i++) leaf.push([3.4, 0.09, 0.06, M(1.7, 0.3 + i * 0.25, 0)]);
    leaf.push([3.6, 0.09, 0.06, M(1.7, 0.8, 0, Math.atan2(1.0, 3.4))]);
    leaf.push([0.1, 1.2, 0.08, M(0.05, 0.8, 0)]);
    leaf.push([0.1, 1.2, 0.08, M(3.35, 0.8, 0)]);
    // hinge the leaf at its left end, swung open into the field if needed
    const hinge = new THREE.Matrix4().makeRotationY(open ? -1.45 : 0).setPosition(-1.7, 0, 0);
    const parts = leaf.map(([w, h, d, m]) => [w, h, d, hinge.clone().multiply(m)]);
    parts.push([0.2, 1.5, 0.2, M(-1.8, 0.75, 0)], [0.2, 1.5, 0.2, M(1.8, 0.75, 0)]);
    return mergedBoxes(parts);
  });
  const mesh = new THREE.Mesh(geom, mat('#8f7e63'));
  mesh.castShadow = true;
  return mesh;
}

export function makeModel(e, region) {
  switch (e.kind) {
    case 'sheep':
      return makeSheep(region.sheepFace, e.lamb);
    case 'cow':
      return makeCow(e.breed || region.cowBreed);
    case 'dog':
      return makeDog();
    case 'person':
      return makePerson({ style: e.style, seed: e.seed });
    case 'npc':
      if (e.type === 'tractor' || e.type === 'tractorTrailer') return makeTractor(e.color, { trailer: e.type === 'tractorTrailer' });
      if (e.type === 'quad') return makeQuad();
      if (e.type === 'bike') return makeCyclist(e.seed, e.touring);
      if (e.type === 'horse') return makeHorse(e.seed);
      return makeCar(e.type, e.color);
    default:
      return new THREE.Group();
  }
}
