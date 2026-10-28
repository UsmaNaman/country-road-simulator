// Renders a Sim with Three.js: scenery, models, cameras, rear-view mirror, particles,
// and routes simulation events to the HUD and audio.
import * as THREE from 'three';
import { Sim, autopilot } from './sim.js';
import { buildWorld } from './world.js';
import { makeModel, makeCar, makeTractor } from './models.js';
import { emojiTexture } from './textures.js';
import { clamp, lerp } from './rng.js';

const STEP = 1 / 60;
const CAMS = ['chase', 'cab', 'high'];

const lerpAngle = (a, b, t) => a + Math.atan2(Math.sin(b - a), Math.cos(b - a)) * t;

class Particles {
  constructor(scene, max = 500) {
    this.max = max;
    this.pos = new Float32Array(max * 3);
    this.col = new Float32Array(max * 3);
    this.vel = new Float32Array(max * 3);
    this.life = new Float32Array(max);
    this.grav = new Float32Array(max);
    this.next = 0;
    for (let i = 0; i < max; i++) this.pos[i * 3 + 1] = -1e5;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    g.setAttribute('color', new THREE.BufferAttribute(this.col, 3));
    this.geo = g;
    this.points = new THREE.Points(g, new THREE.PointsMaterial({ size: 0.22, vertexColors: true, transparent: true, opacity: 0.9, depthWrite: false }));
    this.points.frustumCulled = false;
    scene.add(this.points);
    this.c = new THREE.Color();
  }
  emit(p, n, color, { spread = 1, up = 2, life = 1, gravity = 9.8, size = 1 } = {}) {
    this.c.set(color);
    for (let k = 0; k < n; k++) {
      const i = this.next;
      this.next = (this.next + 1) % this.max;
      this.pos[i * 3] = p.x + (Math.random() - 0.5) * size;
      this.pos[i * 3 + 1] = p.y + Math.random() * 0.4;
      this.pos[i * 3 + 2] = p.z + (Math.random() - 0.5) * size;
      this.vel[i * 3] = (Math.random() - 0.5) * spread * 2;
      this.vel[i * 3 + 1] = up * (0.5 + Math.random());
      this.vel[i * 3 + 2] = (Math.random() - 0.5) * spread * 2;
      const shade = 0.8 + Math.random() * 0.4;
      this.col[i * 3] = this.c.r * shade;
      this.col[i * 3 + 1] = this.c.g * shade;
      this.col[i * 3 + 2] = this.c.b * shade;
      this.life[i] = life * (0.6 + Math.random() * 0.6);
      this.grav[i] = gravity;
    }
  }
  update(dt) {
    for (let i = 0; i < this.max; i++) {
      if (this.life[i] <= 0) continue;
      this.life[i] -= dt;
      if (this.life[i] <= 0) {
        this.pos[i * 3 + 1] = -1e5;
        continue;
      }
      this.vel[i * 3 + 1] -= this.grav[i] * dt;
      this.pos[i * 3] += this.vel[i * 3] * dt;
      this.pos[i * 3 + 1] += this.vel[i * 3 + 1] * dt;
      this.pos[i * 3 + 2] += this.vel[i * 3 + 2] * dt;
    }
    this.geo.attributes.position.needsUpdate = true;
    this.geo.attributes.color.needsUpdate = true;
  }
}

export class Game {
  constructor({ renderer, regionId, vehicleId, colour, audio = null, hud = null, attract = false, autopilot: auto = false, seed, onOver, forceEncounter = null }) {
    this.renderer = renderer;
    this.audio = audio;
    this.hud = hud;
    this.attract = attract;
    this.auto = auto || attract;
    this.onOver = onOver;
    this.sim = new Sim({ regionId, vehicleId, seed, forceEncounter });
    this.region = this.sim.region;
    this.road = this.sim.road;
    this.time = 0;
    this.acc = 0;
    this.shake = 0;
    this.camIndex = 0;
    this.mirrorOn = !attract;
    this.labels = new Map();

    const S = this.region.sky;
    const scene = (this.scene = new THREE.Scene());
    scene.fog = new THREE.Fog(S.fog, S.fogNear, S.fogFar);
    scene.background = new THREE.Color(S.fog);
    this.hemi = new THREE.HemisphereLight(S.hemiSky, S.hemiGround, S.hemiI);
    scene.add(this.hemi);
    this.sun = new THREE.DirectionalLight(S.sun, S.sunI);
    this.sunDir = new THREE.Vector3(...S.sunDir).normalize();
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(2048, 2048);
    const sc = this.sun.shadow.camera;
    sc.left = -42;
    sc.right = 42;
    sc.top = 42;
    sc.bottom = -42;
    sc.near = 1;
    sc.far = 320;
    this.sun.shadow.bias = -0.0004;
    this.sun.shadow.normalBias = 0.04;
    scene.add(this.sun, this.sun.target);

    this.world = buildWorld(this.road, this.region, scene);

    const v = this.sim.vehicle;
    this.playerMesh = v.model === 'tractor' ? makeTractor(colour || v.colors[0]) : makeCar(v.model, colour || v.colors[0]);
    this.playerMesh.rotation.order = 'YXZ';
    scene.add(this.playerMesh);
    this.meshes = new Map();
    this.particles = new Particles(scene);

    this.camera = new THREE.PerspectiveCamera(60, 1, 0.1, 9000);
    this.cam = { s: this.sim.player.s - 8, d: this.sim.player.d, look: new THREE.Vector3(), pos: new THREE.Vector3() };
    this.attractT = 0;

    // rear-view mirror: rendered to a texture and drawn in a HUD overlay, flipped like a real mirror
    this.mirrorRT = new THREE.WebGLRenderTarget(640, 160);
    this.mirrorRT.texture.colorSpace = THREE.SRGBColorSpace;
    this.mirrorCam = new THREE.PerspectiveCamera(42, 4, 0.3, 600);
    this.hudScene = new THREE.Scene();
    this.hudCam = new THREE.OrthographicCamera(0, 1, 1, 0, -1, 1);
    const mtex = this.mirrorRT.texture;
    mtex.wrapS = THREE.RepeatWrapping;
    mtex.repeat.x = -1;
    this.mirrorFrame = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ color: '#141414' }));
    this.mirrorGlass = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: mtex }));
    this.mirrorGlass.position.z = 0.1;
    this.hudScene.add(this.mirrorFrame, this.mirrorGlass);

    this.sim.on((t, p) => this.onEvent(t, p));
    this.resize();
    this.syncAll(0);
    this.snapCamera();
  }

  get player() {
    return this.sim.player;
  }

  resize() {
    const r = this.renderer;
    const w = r.domElement.clientWidth || window.innerWidth;
    const h = r.domElement.clientHeight || window.innerHeight;
    this.camera.aspect = w / h;
    this.camera.fov = w < h ? 75 : 60;
    this.camera.updateProjectionMatrix();
    this.hudCam.left = 0;
    this.hudCam.right = w;
    this.hudCam.top = h;
    this.hudCam.bottom = 0;
    this.hudCam.updateProjectionMatrix();
    // phones on their side: a smaller mirror, kept clear of the panels in the top corners (see style.css)
    const shortLandscape = h < 500 && w > h;
    const mw = shortLandscape ? w * 0.28 : Math.min(380, w * 0.42);
    const mh = mw / 4;
    const top = !shortLandscape && w < 700 ? 82 : 10;
    this.mirrorFrame.scale.set(mw + 10, mh + 10, 1);
    this.mirrorFrame.position.set(w / 2, h - top - mh / 2, 0);
    this.mirrorGlass.scale.set(mw, mh, 1);
    this.mirrorGlass.position.set(w / 2, h - top - mh / 2, 0.1);
    this.mirrorRect = { w: mw, h: mh, top };
  }

  // ------------------------------------------------------------------

  onEvent(type, p) {
    const hud = this.hud;
    const au = this.audio;
    const near = (e) => Math.max(0, 1 - Math.abs(e.s - this.player.s) / 40);
    switch (type) {
      case 'spawn':
        this.addMesh(p);
        break;
      case 'despawn':
        this.removeMesh(p);
        break;
      case 'points':
        hud?.points(p.pts, p.label, p.detail);
        au?.chime(p.pts > 0);
        break;
      case 'toast':
        hud?.toast(p.text, p.kind);
        break;
      case 'horn':
        au?.horn(this.sim.vehicle.id);
        break;
      case 'baa':
        au?.baa(near(p));
        break;
      case 'moo':
        au?.moo(near(p));
        break;
      case 'neigh':
        au?.neigh(near(p));
        break;
      case 'crash':
        au?.crash(Math.min(1, p.closing / 6));
        this.shake = Math.max(this.shake, Math.min(1, p.closing / 4));
        break;
      case 'impact':
        au?.thud(Math.min(1, p.strength / 5));
        this.shake = Math.max(this.shake, Math.min(0.8, p.strength / 5));
        break;
      case 'scrape': {
        const side = p.side === 'left' ? 1 : -1;
        const w = this.road.toWorld(this.player.s, this.player.d + side * this.player.wid * 0.5);
        this.particles.emit(w, 10, p.type === 0 ? '#3f6b2a' : '#8a8478', { spread: 1.2, up: 1.5, life: 0.9 });
        break;
      }
      case 'bump':
        au?.bump(p.strength);
        this.shake = Math.max(this.shake, p.strength * 0.5);
        break;
      case 'splash': {
        au?.splash(Math.min(1, p.speed / 8));
        const w = this.road.toWorld(this.player.s, this.player.d);
        this.particles.emit(w, 40 + p.speed * 12, '#cfe3ea', { spread: 1 + p.speed * 0.4, up: 2 + p.speed * 0.5, life: 1.2, size: 2 });
        break;
      }
      case 'rattle':
        au?.rattle(p.speed);
        this.shake = Math.max(this.shake, 0.25);
        break;
      case 'waveRequest':
        hud?.prompt(p.prompt);
        break;
      case 'waveDone':
      case 'waveExpired':
        hud?.prompt(null);
        break;
      case 'playerWave':
        hud?.wave();
        au?.whoosh();
        break;
      case 'npcYield':
        hud?.toast(`The ${p.name} pulls into a passing place for you`, 'info');
        break;
      case 'npcHold':
        hud?.toast(`The ${p.name} stops and waits for you`, 'info');
        break;
      case 'npcPullOver':
        hud?.toast(`The ${p.name} pulls over to let you by`, 'info');
        break;
      case 'npcReverse':
        hud?.toast(`The ${p.name} backs up to a passing place for you`, 'info');
        break;
      case 'standoff':
        hud?.toast('Stand-off! Someone has to give way…', 'warn');
        au?.chime(false);
        break;
      case 'finish':
      case 'fail':
        this.onOver?.(type, p, this.sim);
        break;
    }
  }

  addMesh(e) {
    const m = makeModel(e, this.region);
    m.rotation.order = 'YXZ';
    this.scene.add(m);
    this.meshes.set(e, m);
    this.syncEntity(e, m, 0);
  }

  removeMesh(e) {
    const m = this.meshes.get(e);
    if (m) this.scene.remove(m);
    this.meshes.delete(e);
  }

  // a floating emoji above someone's head: 👋 for a wave, 💢 when cross
  badge(e, m) {
    let sp = m.userData.badge;
    const want = e.waveT > 0 ? '👋' : e.shout > 0 ? '💢' : null;
    if (!want) {
      if (sp) sp.visible = false;
      return;
    }
    if (!sp) {
      sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: emojiTexture(want), fog: false }));
      sp.scale.setScalar(0.9);
      sp.renderOrder = 10;
      m.add(sp);
      m.userData.badge = sp;
    }
    if (sp.userData.emoji !== want) {
      sp.material.map = emojiTexture(want);
      sp.userData.emoji = want;
    }
    const h = e.kind === 'npc' ? (e.type === 'tractor' || e.type === 'tractorTrailer' || e.type === 'motorhome' ? 3.8 : e.type === 'horse' ? 3.2 : 2.6) : e.kind === 'cow' ? 2.3 : 2.4;
    sp.position.set(0, h + Math.sin(this.time * 6) * 0.08, 0);
    sp.visible = true;
  }

  syncEntity(e, m, dt) {
    const road = this.road;
    const w = road.toWorld(e.s, e.d);
    let y = w.y;
    const offL = e.d - road.leftEdge(e.s);
    const offR = -road.rightEdge(e.s) - e.d;
    if (offL > 0.1 || offR > 0.1) {
      const beyond = Math.max(e.d - road.leftBound(e.s), -road.rightBound(e.s) - e.d);
      y = beyond > 0.6 ? Math.max(this.world.terrainHeight(w.x, w.z), y - 0.6) : y + 0.05;
    }
    m.position.set(w.x, y, w.z);
    m.rotation.y = w.theta + e.ang;
    if (e.kind === 'npc') m.rotation.x = -Math.atan(road.grade(e.s) * Math.cos(e.ang));
    m.userData.animate?.(e, dt, this.time);
    this.badge(e, m);
  }

  syncPlayer(dt) {
    const p = this.player;
    const w = this.road.toWorld(p.s, p.d);
    const m = this.playerMesh;
    let bump = 0;
    if (p.onVerge) bump += Math.sin(this.time * 31) * 0.012 * Math.min(1, Math.abs(p.v) / 4);
    m.position.set(w.x, w.y + bump, w.z);
    m.rotation.y = w.theta + p.ang;
    const pitch = -Math.atan(this.road.grade(p.s) * Math.cos(p.ang)) + clamp(p.longAcc * 0.006, -0.04, 0.04);
    m.rotation.x += (pitch - m.rotation.x) * Math.min(1, dt * 8);
    const roll = clamp(-p.latAcc * 0.01, -0.06, 0.06);
    m.rotation.z += (roll - m.rotation.z) * Math.min(1, dt * 6);
    m.userData.animate?.({ v: p.v, flashT: 0, anim: 0 }, dt, this.time);
    this.playerWorld = w;
  }

  syncAll(dt) {
    this.syncPlayer(dt);
    for (const [e, m] of this.meshes) this.syncEntity(e, m, dt);
  }

  // ------------------------------------------------------------------

  cycleCamera() {
    this.camIndex = (this.camIndex + 1) % CAMS.length;
    this.snapCamera();
    return CAMS[this.camIndex];
  }

  snapCamera() {
    this.cam.s = this.player.s - 8;
    this.cam.d = this.player.d;
    this.updateCamera(1, true);
  }

  updateCamera(dt, snap = false) {
    const p = this.player;
    const road = this.road;
    const v = this.sim.vehicle;
    const pw = road.toWorld(p.s, p.d);
    const heading = pw.theta + p.ang;
    const fx = Math.sin(heading);
    const fz = Math.cos(heading);
    const mode = this.attract ? this.attractMode() : CAMS[this.camIndex];
    const k = snap ? 1 : 1 - Math.exp(-dt * 5);
    const pos = new THREE.Vector3();
    const look = new THREE.Vector3();
    if (mode === 'cab') {
      // right-hand drive: the driver sits on the right
      const rx = -fz;
      const rz = fx;
      const seatY = v.id === 'tractor' ? 2.55 : v.height * 0.82;
      pos.set(pw.x + rx * v.width * 0.22 + fx * (v.id === 'tractor' ? -0.6 : 0.05), pw.y + seatY, pw.z + rz * v.width * 0.22 + fz * (v.id === 'tractor' ? -0.6 : 0.05));
      look.set(pos.x + fx * 20, pos.y - 1.2, pos.z + fz * 20);
      this.cam.pos.copy(pos);
      this.cam.look.copy(look);
    } else {
      // chase cams live in road coordinates so they follow the lane and never sink into a hedge
      const dist = mode === 'high' ? 13 : 5 + v.length * 0.5;
      const height = mode === 'high' ? 11 : v.height + 1.55 + (v.id === 'tractor' ? 0.6 : 0);
      const targetS = p.s - dist * Math.cos(p.ang);
      this.cam.s = snap ? targetS : lerp(this.cam.s, targetS, 1 - Math.exp(-dt * 6));
      const lim = 0.4;
      const targetD = clamp(p.d - Math.sin(p.ang) * dist * 0.6, -road.rightBound(this.cam.s) + lim, road.leftBound(this.cam.s) - lim);
      this.cam.d = snap ? targetD : lerp(this.cam.d, targetD, 1 - Math.exp(-dt * 4));
      const cw = road.toWorld(this.cam.s, this.cam.d);
      pos.set(cw.x, Math.max(cw.y, pw.y) + height, cw.z);
      const ahead = mode === 'high' ? 6 : 7;
      look.set(pw.x + fx * ahead, pw.y + (mode === 'high' ? 0 : v.height * 0.55), pw.z + fz * ahead);
      if (mode === 'orbit') {
        const a = this.time * 0.12;
        pos.set(pw.x + Math.cos(a) * 11, pw.y + 4.5, pw.z + Math.sin(a) * 11);
        look.set(pw.x, pw.y + 1, pw.z);
      }
      this.cam.pos.lerp(pos, snap ? 1 : k);
      this.cam.look.lerp(look, snap ? 1 : 1 - Math.exp(-dt * 8));
    }
    this.camera.position.copy(this.cam.pos);
    if (this.shake > 0.01) {
      const s = this.shake * 0.08;
      this.camera.position.x += (Math.random() - 0.5) * s;
      this.camera.position.y += (Math.random() - 0.5) * s;
      this.camera.position.z += (Math.random() - 0.5) * s;
    }
    this.camera.lookAt(this.cam.look);

    // the sun's shadow box follows the player
    this.sun.position.set(pw.x + this.sunDir.x * 150, pw.y + this.sunDir.y * 150, pw.z + this.sunDir.z * 150);
    this.sun.target.position.set(pw.x + fx * 12, pw.y, pw.z + fz * 12);

    // mirror camera: from the roof, looking back
    const mh = v.height + 0.25;
    this.mirrorCam.position.set(pw.x - fx * (v.length * 0.2), pw.y + mh, pw.z - fz * (v.length * 0.2));
    this.mirrorCam.lookAt(pw.x - fx * 30, pw.y + mh - 1.2, pw.z - fz * 30);
  }

  attractMode() {
    // slow cinematic: alternate chase and orbit shots
    return Math.floor(this.time / 14) % 3 === 2 ? 'orbit' : 'chase';
  }

  // ------------------------------------------------------------------

  update(dt, input) {
    dt = Math.min(dt, 0.1);
    this.time += dt;
    const sim = this.sim;
    if (!sim.over) {
      this.acc += dt;
      let first = true;
      while (this.acc >= STEP) {
        const inp = this.auto ? autopilot(sim) : { ...input };
        if (!first) {
          inp.horn = false;
          inp.wave = false;
        }
        sim.step(STEP, inp);
        first = false;
        this.acc -= STEP;
        if (sim.over) break;
      }
    }
    this.syncAll(dt);
    this.shake = Math.max(0, this.shake - dt * 2.5);
    this.updateCamera(dt);
    this.world.update(dt, this.camera);
    // a poorly car starts to smoke
    if (sim.health < 35 && Math.random() < dt * (40 - sim.health) * 0.15) {
      const w = this.road.toWorld(this.player.s + this.player.len * 0.35, this.player.d);
      w.y += 1;
      this.particles.emit(w, 1, sim.health < 15 ? '#333333' : '#9a9a9a', { spread: 0.3, up: 0.8, life: 2.2, gravity: -0.6, size: 0.4 });
    }
    this.particles.update(dt);
    if (this.audio && !this.attract) {
      const p = this.player;
      this.audio.engine(Math.abs(p.v) / sim.vehicle.maxSpeed, (input?.throttle || 0) + (input?.brake && p.v < 0.2 ? input.brake : 0), sim.vehicle.id, sim.over);
      this.audio.scrape(sim.over ? 0 : sim.scrapeLevel, sim.scrapeType);
      this.audio.ambience(dt, this.region.id, this.sim.entities.some((e) => e.kind === 'sheep' && Math.abs(e.s - p.s) < 40));
    }
    if (this.hud && !this.attract) this.hud.update(sim, this);
  }

  render() {
    const r = this.renderer;
    this.frame = (this.frame || 0) + 1;
    // the mirror refreshes at half rate: plenty for a glance behind, half the cost
    if (this.mirrorOn && !this.attract && CAMS[this.camIndex] !== 'high' && this.frame % 2 === 0) {
      this.playerMesh.visible = false;
      r.setRenderTarget(this.mirrorRT);
      r.render(this.scene, this.mirrorCam);
      r.setRenderTarget(null);
      this.playerMesh.visible = true;
    }
    this.playerMesh.visible = CAMS[this.camIndex] !== 'cab' || this.attract;
    r.autoClear = true;
    r.render(this.scene, this.camera);
    if (this.mirrorOn && !this.attract && CAMS[this.camIndex] !== 'high') {
      r.autoClear = false;
      r.clearDepth();
      r.render(this.hudScene, this.hudCam);
      r.autoClear = true;
    }
    this.playerMesh.visible = true;
  }

  dispose() {
    this.scene.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
    });
    this.mirrorRT.dispose();
    this.renderer.renderLists.dispose();
  }
}
