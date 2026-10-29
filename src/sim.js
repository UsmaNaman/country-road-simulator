// The game simulation: road, player, traffic, livestock, scoring, damage. No rendering here,
// so a whole run can be simulated headless (see tests/). The Game class renders a Sim.

import { REGIONS, VEHICLES } from './config.js';
import { Road, BOUNDARY, HEDGE } from './road.js';
import { PlayerCar, overlap, dInterval, lateralGap } from './physics.js';
import { makeEncounter } from './encounters.js';
import { Score, summarise } from './scoring.js';
import { seedEntities } from './entities.js';
import { clamp } from './rng.js';

export class Sim {
  constructor({ regionId = 'england', vehicleId = 'hatch', seed, forceEncounter = null } = {}) {
    this.region = REGIONS[regionId];
    this.vehicle = VEHICLES[vehicleId];
    this.road = new Road(this.region, seed ?? this.region.seed);
    // test hook: stage a particular encounter just up the road
    if (forceEncounter) {
      this.road.encounters.sort((a, b) => a.s - b.s);
      this.road.encounters[0] = { ...this.road.encounters[0], type: forceEncounter, s: 230 };
    }
    seedEntities((seed ?? this.region.seed) * 7 + 1);
    this.player = new PlayerCar(this.vehicle, 12, Math.min(0.35, this.road.baseHalf(12) - this.vehicle.width / 2 - 0.1));
    this.entities = [];
    this.listeners = [];
    this.score = new Score(this.vehicle.mult);
    this.score.listeners.push((pts, label, opts) => this.emit('points', { pts, label, detail: opts.detail }));
    this.encounters = this.road.encounters.map((def) => makeEncounter(def, this)).filter(Boolean);
    this.health = 100;
    this.time = 0;
    this.over = false;
    this.finished = false;
    this.failReason = null;
    this.waveWindow = null;
    this.contact = { left: false, right: false };
    this.lastScrape = { left: -10, right: -10 };
    this.scrapeLevel = 0;
    this.scrapeType = HEDGE;
    this.lastHorn = -10;
    this.lastBendToot = -100;
    this.lastAnimalWave = -100;
    this.speedingT = 0;
    this.advisory = 10;
    this.potholeHit = new Map();
    this.inFord = false;
    this.gridsCrossed = new Set();
    this.lastDamageT = -10;
    this.stats = { collisions: 0, scrapes: 0, maxSpeed: 0 };
    this.sightDistance = { england: 75, wales: 110, scotland: 150 }[this.region.id] ?? 90;
  }

  get obstacles() {
    return [this.player, ...this.entities];
  }

  on(fn) {
    this.listeners.push(fn);
  }

  emit(type, payload = {}) {
    if (type === 'startle' && payload.enc?.onStartle) payload.enc.onStartle();
    for (const l of this.listeners) l(type, payload);
  }

  addEntity(e) {
    this.entities.push(e);
    this.emit('spawn', e);
  }

  toast(text, kind = 'info') {
    this.emit('toast', { text, kind });
  }

  requestWave(entity, opts) {
    this.waveWindow = { entity, ...opts, until: this.time + 4.5 };
    this.emit('waveRequest', this.waveWindow);
  }

  npcThanks(entity, text) {
    entity.waveT = 2.5;
    this.toast(text, 'info');
    this.requestWave(entity, { points: 20, label: 'Waved back', miss: 0, prompt: 'Wave back?' });
  }

  damage(amount) {
    if (amount <= 0) return;
    this.health = Math.max(0, this.health - amount);
    this.lastDamageT = this.time;
    if (amount > 0.4) this.emit('damage', { amount });
  }

  // ------------------------------------------------------------------

  step(dt, input) {
    if (this.over) return;
    this.time += dt;
    const p = this.player;
    if (input.horn) this.horn();
    if (input.wave) this.wave();

    const report = p.step(dt, input, this.road);
    this.stats.maxSpeed = Math.max(this.stats.maxSpeed, Math.abs(p.v));
    this.handleBoundary(report, dt);
    this.handleSurface(dt);

    for (const enc of this.encounters) {
      if (!enc.spawned && p.s > enc.spawnAt && enc.canSpawn()) {
        enc.spawned = true;
        enc.spawn();
      }
    }
    for (const e of this.entities) {
      e.prevS = e.s;
      e.prevD = e.d;
      e.update(dt, this);
    }
    this.collide(dt);
    for (const enc of this.encounters) if (enc.spawned && !enc.done) enc.update(dt);

    for (const e of this.entities) {
      if (!e.removed && (p.s - e.s > 160 || e.s - p.s > 480)) e.removed = true;
    }
    if (this.entities.some((e) => e.removed)) {
      for (const e of this.entities) if (e.removed) this.emit('despawn', e);
      this.entities = this.entities.filter((e) => !e.removed);
    }

    this.drivingScore(dt);
    if (this.waveWindow && this.time > this.waveWindow.until) {
      const w = this.waveWindow;
      this.waveWindow = null;
      if (w.miss) this.score.add(w.miss, w.missLabel);
      this.emit('waveExpired', w);
    }
    if (!this.over && p.s >= this.road.finishS) this.finish();
    if (!this.over && this.health <= 0) this.fail('Written off! Your car has had enough of the countryside.');
  }

  handleBoundary(report, dt) {
    const dur = this.vehicle.durability;
    let level = 0;
    for (const side of ['left', 'right']) {
      const c = report[side];
      if (!c) {
        this.contact[side] = false;
        continue;
      }
      const info = BOUNDARY[c.type];
      this.damage(info.damage * (0.25 + c.slide * 0.18) * dt * dur);
      level = Math.max(level, 0.3 + Math.min(1, c.slide / 8));
      this.scrapeType = c.type;
      if (!this.contact[side]) {
        this.stats.scrapes++;
        if (this.time - this.lastScrape[side] > 2.5) {
          this.score.add(Math.round((c.type === HEDGE ? -15 : -30) * Math.max(0.4, dur)), info.label);
          this.lastScrape[side] = this.time;
        }
        this.emit('scrape', { type: c.type, side });
      }
      if (c.impact > 1.2) {
        this.damage(info.damage * c.impact * c.impact * 1.0 * dur);
        this.score.add(-40, `Thumped into the ${info.name}`);
        this.emit('impact', { strength: c.impact });
      }
      this.contact[side] = true;
    }
    this.scrapeLevel = level;
    if (report.end && report.end > 1) {
      this.damage(report.end * report.end * 1.0 * dur);
      this.score.add(-40, 'Hit the gate');
      this.emit('impact', { strength: report.end });
    }
  }

  handleSurface(dt) {
    const p = this.player;
    const road = this.road;
    const speed = Math.abs(p.v);
    const dur = this.vehicle.durability;
    // potholes
    const wheels = p.wheels();
    for (const ph of road.potholes) {
      if (Math.abs(ph.s - p.s) > 4) continue;
      const last = this.potholeHit.get(ph) ?? -10;
      if (this.time - last < 1) continue;
      for (const w of wheels) {
        if (Math.hypot(w.s - ph.s, w.d - ph.d) < ph.r + 0.08) {
          this.potholeHit.set(ph, this.time);
          if (speed > 6 && this.vehicle.id !== 'tractor') {
            this.damage((speed - 6) * 0.8 * dur);
            this.score.add(-15, 'Pothole!', { streak: false });
          }
          this.emit('bump', { strength: Math.min(1, speed / 12) });
          break;
        }
      }
    }
    // fords
    const inFord = p.inWater;
    if (inFord && !this.inFord) {
      if (speed < 4.5) this.score.add(50, 'Took the ford gently');
      else if (speed > 8.5) {
        this.damage(8 * dur);
        this.score.add(-60, 'Hit the ford like a speedboat');
      }
      this.emit('splash', { speed });
    }
    this.inFord = inFord;
    // cattle grids
    for (const g of road.grids) {
      if (Math.abs(p.s - g.s) < 1.6 && !this.gridsCrossed.has(g)) {
        this.gridsCrossed.add(g);
        this.emit('rattle', { speed });
        if (speed > 13) this.damage(2 * dur);
      }
      if (Math.abs(p.s - g.s) > 6) this.gridsCrossed.delete(g);
    }
  }

  collide(dt) {
    const p = this.player;
    for (const e of this.entities) {
      if (e.removed || !e.solid) continue;
      if (Math.abs(e.s - p.s) > 14) continue;
      const A = p.box();
      const o = overlap(A, e.box());
      if (!o) continue;
      const pvs = p.v * Math.cos(p.ang);
      const pvd = p.v * Math.sin(p.ang);
      const evs = (e.s - e.prevS) / dt;
      const evd = (e.d - e.prevD) / dt;
      const closing = -((pvs - evs) * o.ns + (pvd - evd) * o.nd);
      const myFault = -(pvs * o.ns + pvd * o.nd); // how hard *we* drove into it
      const heavy = e.category === 'vehicle' || e.kind === 'cow' || e.category === 'horse';
      if (heavy) {
        p.s += o.ns * o.depth;
        p.d += o.nd * o.depth;
      } else {
        p.s += o.ns * o.depth * 0.25;
        p.d += o.nd * o.depth * 0.25;
        e.s -= o.ns * o.depth * 0.75;
        e.d -= o.nd * o.depth * 0.75;
        if (e.vs !== undefined) {
          e.vs -= o.ns * 1.5;
          e.vd -= o.nd * 1.5;
        }
      }
      if (pvs * o.ns + pvd * o.nd < 0) p.v *= heavy ? 0.1 : 0.6;
      if (closing > 0.3 && myFault > 0.3 && this.time > (e.hitUntil || 0)) {
        e.hitUntil = this.time + 1.5;
        this.onHit(e, closing, myFault);
      }
    }
  }

  onHit(e, closing, myFault = closing) {
    const dur = this.vehicle.durability;
    this.stats.collisions++;
    this.emit('crash', { entity: e, closing });
    const vulnerablePerson = e.category === 'person' || e.category === 'horse' || e.category === 'cyclist';
    if (vulnerablePerson) {
      if (e.enc) e.enc.crashed = true;
      if (myFault > 1.3) {
        const who = e.category === 'horse' ? 'a horse and rider' : e.category === 'cyclist' ? 'a cyclist' : `a ${e.name}`;
        this.fail(`You hit ${who}. On a real lane that changes lives. Slow down around people.`);
        return;
      }
      e.shout = 2.5;
      this.score.add(-200, `Nudged a ${e.name}. Never OK!`);
      return;
    }
    if (e.kind === 'cow') {
      if (e.enc) e.enc.crashed = true;
      this.damage((8 + closing * 3) * dur);
      this.score.add(-200, 'Hit a cow!');
      this.emit('moo', e);
      return;
    }
    if (e.category === 'animal') {
      this.damage((2 + closing * 1.5) * dur);
      this.score.add(-120, `Hit a ${e.name}!`);
      if (e.kind === 'sheep') {
        e.state = 'flee';
        e.timer = 3;
        e.fleeVs = Math.sign(e.s - this.player.s || 1) * 3;
        e.fleeVd = Math.sign(e.d - this.player.d || 1) * 2;
        this.emit('baa', e);
      }
      return;
    }
    // another vehicle
    if (e.enc) e.enc.crashed = true;
    if (closing < 1.5) {
      this.damage((2 + closing * closing) * dur);
      this.score.add(-80, `Bumped the ${e.name}`);
    } else {
      this.damage((5 + closing * closing * 0.9) * dur); // ~30% off a hatchback at 13 mph; head-on at speed still writes you off
      this.score.add(-150, `Collided with the ${e.name}!`);
    }
    e.flashT = 1.5;
    e.v = 0;
  }

  drivingScore(dt) {
    const p = this.player;
    const v = p.v;
    const adv = this.road.advisorySpeed(p.s);
    this.advisory = adv;
    const clean = !p.contactL && !p.contactR && this.time - this.lastDamageT > 3;
    if (v > 1 && v <= adv + 1.5 && clean) this.score.accrue((v * dt) / 5, 'Steady, considerate driving');
    if (v > adv * 1.12 + 1.5) {
      this.speedingT += dt;
      if (this.speedingT > 1.5) {
        const tight = this.road.maxCurvatureAhead(p.s, 40) > 1 / 45;
        this.score.add(-25, tight ? 'Too fast for this bend' : 'Too fast for the lane');
        this.speedingT = -2.5;
      }
    } else this.speedingT = Math.max(0, this.speedingT - dt);
  }

  horn() {
    if (this.time - this.lastHorn < 0.5) return;
    this.lastHorn = this.time;
    this.emit('horn');
    let reacted = false;
    for (const enc of this.encounters) if (enc.spawned && !enc.done && enc.onHorn()) reacted = true;
    if (!reacted && this.region.id === 'england' && this.road.maxCurvatureAhead(this.player.s, 30) > 1 / 40 && this.time - this.lastBendToot > 20) {
      this.lastBendToot = this.time;
      this.score.add(10, 'Warning toot on a blind bend');
    }
  }

  wave() {
    this.emit('playerWave');
    if (this.waveWindow) {
      const w = this.waveWindow;
      this.waveWindow = null;
      this.score.add(w.points, w.label);
      if (w.entity) w.entity.waveT = Math.max(w.entity.waveT, 1.2);
      this.emit('waveDone', w);
      return;
    }
    const animal = this.entities.find((e) => e.category === 'animal' && Math.abs(e.s - this.player.s) < 20);
    if (animal && this.time - this.lastAnimalWave > 8) {
      this.lastAnimalWave = this.time;
      this.toast(
        animal.kind === 'sheep' ? 'You wave at a sheep. It does not wave back.' : animal.kind === 'cow' ? 'The cow regards your wave with total indifference.' : 'The dog wags. Close enough.',
        'info',
      );
    }
  }

  // The most relevant hint for the HUD right now
  currentHint() {
    let best = null;
    let bd = Infinity;
    for (const enc of this.encounters) {
      if (!enc.spawned || enc.done) continue;
      const h = enc.hint();
      if (!h) continue;
      let d = enc.distTo(this.player);
      if (h.urgent) d -= 1000;
      if (d < bd) {
        bd = d;
        best = h;
      }
    }
    return best;
  }

  finish() {
    this.over = true;
    this.finished = true;
    this.summary = summarise({ score: this.score, road: this.road, vehicle: this.vehicle, health: this.health, time: this.time, finished: true });
    this.emit('finish', this.summary);
  }

  fail(reason) {
    this.over = true;
    this.failReason = reason;
    this.summary = summarise({ score: this.score, road: this.road, vehicle: this.vehicle, health: this.health, time: this.time, finished: false, failReason: reason });
    this.emit('fail', this.summary);
  }
}

// A simple, polite driver used for the menu backdrop and for headless tests.
export function autopilot(sim) {
  const p = sim.player;
  const road = sim.road;
  const half = p.wid / 2;
  let targetD = clamp(road.baseHalf(p.s) - half - 0.35, 0, 0.5);
  let targetV = Math.min(road.advisorySpeed(p.s) * 0.85, p.def.maxSpeed);
  if (road.fordAt(p.s + 18) || road.fordAt(p.s)) targetV = Math.min(targetV, 3.5);
  // Oncoming traffic in sight: ease off so there's time to sort out who gives way.
  for (const e of sim.entities) {
    if (e.kind === 'npc' && e.dir < 0 && !e.resolved && e.s > p.s && e.s - p.s < 90) targetV = Math.min(targetV, 4 + Math.max(0, e.s - p.s - 25) * 0.12);
  }
  // Someone is stopped, waiting for us to make room: tuck in hard left.
  const waitingForMe = sim.entities.find(
    (e) => e.kind === 'npc' && e.dir < 0 && (e.state === 'passing' || e.state === 'cruise') && !e.resolved && e.blockedBy === p && e.v < 0.2 && e.s - p.s < 25,
  );
  if (waitingForMe && (!sim._ap || sim._ap.mode === 'drive')) {
    const tuck = road.leftEdge(p.s + 2) + 0.1 - half - 0.05;
    const room = waitingForMe.s - p.s - p.len / 2 - waitingForMe.len / 2;
    const shift = Math.abs(tuck - p.d) > 0.12;
    // no room to edge forwards? shuffle back a little to get the angle
    return steerTo(sim, tuck, shift ? (room > 2.5 ? 0.8 : -0.6) : 0);
  }
  // Look at everything in the next stretch of lane and find the best gap through it.
  const winLo = p.s - p.len / 2 - 1;
  const winHi = p.s + p.len / 2 + 14;
  const blockers = [];
  for (const e of sim.entities) {
    const dist = e.s - p.s;
    const gapAhead = dist - p.len / 2 - e.len / 2;
    const careful = e.vulnerable || e.category === 'animal';
    const sameWayMoving = e.dir > 0 && e.kind === 'npc' && e.v > 0.5;
    if (gapAhead > -p.len && gapAhead < 45) {
      if (sameWayMoving) {
        // follow slow traffic at its own pace
        targetV = Math.min(targetV, e.v + Math.max(-e.v, (gapAhead - 8) * 0.3));
      } else if (careful) targetV = Math.min(targetV, gapAhead < 14 ? 3 : 4.4);
      if (e.category === 'animal' && gapAhead < 10 && Math.abs(e.d - p.d) < 2) targetV = Math.min(targetV, 1.5);
    }
    if (e.s + e.len / 2 < winLo || e.s - e.len / 2 > winHi) continue;
    const oncomingMoving = e.dir < 0 && e.kind === 'npc' && Math.abs(e.v) > 0.5 && dist > p.len;
    const [lo, hi] = dInterval(e.box());
    blockers.push({ e, lo, hi, gapAhead, careful, wait: oncomingMoving });
  }
  if (blockers.length) {
    const sLook = Math.min(winHi, Math.max(...blockers.map((b) => b.e.s)));
    const cmin = -road.rightEdge(sLook) - 0.1 + half;
    const cmax = road.leftEdge(sLook) + 0.1 - half;
    let best = null;
    let usedWant = 0;
    // last resort (a tractor between sheep on both verges): creep past animals with a little less room
    for (const want of [1.3, 0.9, 0.6, 0.4, 0.25]) {
      // forbidden ranges for the car's centre line
      const room = (b) => (b.careful ? (want < 0.4 && b.e.category !== 'animal' ? 0.4 : want) : Math.min(want, 0.4));
      const bad = blockers.map((b) => [b.lo - room(b) - half, b.hi + room(b) + half]);
      const cands = [targetD, cmin, cmax, ...bad.flatMap(([a, b]) => [a, b])].map((x) => clamp(x, cmin, cmax));
      const free = cands.filter((x) => bad.every(([a, b]) => x <= a || x >= b)).sort((a, b) => Math.abs(a - targetD) - Math.abs(b - targetD));
      if (free.length && cmin <= cmax) {
        best = free[0];
        usedWant = want;
        break;
      }
    }
    const nearest = blockers.filter((b) => b.gapAhead > -0.5).sort((a, b) => a.gapAhead - b.gapAhead)[0];
    if (best === null || blockers.some((b) => b.wait)) {
      if (nearest) targetV = Math.min(targetV, Math.max(0, (nearest.gapAhead - 4) * 0.45));
    } else {
      targetD = best;
      if (Math.abs(best - p.d) > 0.3 && nearest && nearest.gapAhead < 10) targetV = Math.min(targetV, 1.5);
      if (usedWant < 0.9 && blockers.some((b) => b.careful)) targetV = Math.min(targetV, 2.2);
      if (usedWant < 0.4) targetV = Math.min(targetV, 1.0);
    }
  }
  // Stand-off with something that can't reverse: back up to the last passing place.
  const ap = (sim._ap ||= { mode: 'drive' });
  // (or something that could but hasn't after a good wait)
  const stand = sim.entities.find((e) => e.role === 'oncoming' && e.state === 'standoff' && (!e.canReverse || e.noBayBehind || e.stateT > 14) && e.s - p.s < 45);
  if (ap.mode === 'drive' && stand) {
    const pp = road.passingPlaces.filter((q) => q.s1 < p.s - 1).pop();
    if (pp) {
      ap.mode = 'reverse';
      ap.npc = stand;
      ap.pp = pp;
      ap.s = pp.side > 0 ? pp.mid : pp.s0 - p.len / 2 - 3;
      ap.lane = targetD;
    }
  }
  // Oncoming driver waiting for us to use the bay on our left: pull into it and stop.
  const waiting = sim.entities.find((e) => e.role === 'oncoming' && e.state === 'holdOpp' && e.targetPP && e.targetPP.side > 0 && e.targetPP.s1 > p.s);
  // ...or we're already in a bay on our left with someone coming: finish tucking in.
  const onc = sim.entities.find((e) => e.role === 'oncoming' && e.engaged && !e.resolved && e.s > p.s && e.s - p.s < 60);
  const bay = waiting ? waiting.targetPP : onc ? road.ppAt(p.s + 1) : null;
  if (ap.mode === 'drive' && bay && bay.side > 0 && p.s + p.len / 2 > bay.s0 + 2 && p.s < bay.s1) {
    const tuckD = road.leftEdge(bay.mid) - half - 0.3;
    const settled = p.s >= bay.mid - 1 && Math.abs(tuckD - p.d) < 0.3;
    let v = settled ? 0 : 1.8;
    if (onc) v = Math.min(v, Math.max(0, (onc.s - p.s - p.len / 2 - onc.len / 2 - 3) * 0.5));
    return steerTo(sim, tuckD, v);
  }
  if (ap.mode === 'reverse') {
    if (ap.npc.removed || ap.npc.resolved) ap.mode = 'drive';
    else if (Math.abs(p.s - ap.s) < 0.6 && Math.abs(p.v) < 0.1 && (ap.waitT = (ap.waitT || 0) + 1 / 60) > 10) {
      ap.mode = 'drive'; // they still won't move: try the next bay back
      ap.waitT = 0;
    }
    else if (ap.npc.state === 'passing' || ap.npc.state === 'reverse') return { steer: 0, throttle: 0, brake: 0, handbrake: true, horn: false, wave: false };
    else if (ap.npc.state === 'standoff') return reverseTo(sim, ap);
    else ap.mode = 'drive'; // they've pulled in somewhere: carry on
  }
  return steerTo(sim, targetD, targetV);
}

function steerTo(sim, targetD, targetV) {
  const p = sim.player;
  const road = sim.road;
  const look = 6 + Math.abs(p.v) * 0.6;
  const k = road.curvature(p.s + look * 0.5);
  const back = targetV < 0 || p.v < -0.2;
  const desiredAng = (back ? -1 : 1) * Math.atan2(targetD - p.d, look);
  const steerAngle = Math.atan(k * p.def.wheelbase) + (back ? -1.6 : 1.8) * (desiredAng - p.ang);
  const lock = p.def.maxSteer / (1 + Math.abs(p.v) / 11);
  const dv = targetV - p.v;
  return {
    steer: clamp(steerAngle / lock, -1, 1),
    throttle: dv > 0.3 ? Math.min(1, dv * 0.5) : 0,
    brake: dv < -0.3 ? Math.min(1, -dv * 0.4) : 0,
    handbrake: false,
    horn: false,
    wave: !!sim.waveWindow && sim.time > sim.waveWindow.until - 3.5,
  };
}

// Reverse along the lane towards (ap.s, ap.d). Steering works backwards when reversing.
function reverseTo(sim, ap) {
  const p = sim.player;
  const road = sim.road;
  const half = p.wid / 2;
  // only swing into the bay once we're alongside it
  const intoBay = ap.pp.side > 0 && p.s - p.len / 2 < ap.pp.s1 - 2;
  ap.d = intoBay ? road.leftEdge(ap.pp.mid) - half - 0.25 : ap.lane;
  // give anyone behind us a wide berth as we back past them
  if (!intoBay) {
    for (const e of sim.entities) {
      const behind = p.s - e.s;
      if (behind < 0 || behind > 14) continue;
      const [lo, hi] = dInterval(e.box());
      if (e.d > p.d) ap.d = Math.max(-road.rightEdge(p.s) + half + 0.05, Math.min(ap.d, lo - 0.5 - half));
      else ap.d = Math.min(road.leftEdge(p.s) - half - 0.05, Math.max(ap.d, hi + 0.5 + half));
    }
  }
  const remaining = p.s - ap.s;
  const near = Math.abs(ap.d - p.d) < 0.3;
  let vT = remaining > 0.4 ? -Math.min(3, 0.8 + remaining * 0.25) : 0;
  // check the mirrors
  for (const e of sim.entities) {
    const behind = p.s - e.s;
    if (behind > 0 && behind < p.len / 2 + e.len / 2 + 4) {
      const gap = lateralGap(p.box(), e.box());
      if (gap < 0.1) vT = 0;
      else if (gap < 0.5) vT = Math.max(vT, -0.8);
    }
  }
  const look = 5;
  const k = road.curvature(p.s);
  const desiredAng = -Math.atan2(ap.d - p.d, look);
  const steerAngle = Math.atan(k * p.def.wheelbase) - (desiredAng - p.ang) * 1.6;
  const lock = p.def.maxSteer / (1 + Math.abs(p.v) / 11);
  const dv = vT - p.v;
  return {
    steer: clamp(steerAngle / lock, -1, 1),
    throttle: dv > 0.3 ? Math.min(1, dv * 0.5) : 0,
    brake: dv < -0.2 ? Math.min(1, -dv * 0.5) : 0,
    handbrake: remaining <= 0.4 && near,
    horn: false,
    wave: false,
  };
}
