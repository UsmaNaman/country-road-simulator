// Scripted encounters along the route. Each one spawns its cast as the player approaches,
// watches how the player handles it, awards points and offers hints. Pure JS.

import { NPCVehicle, Sheep, Cow, Person, Dog } from './entities.js';
import { NPC_SPECS, CAR_COLOURS } from './config.js';
import { RNG, clamp } from './rng.js';
import { sExtent, lateralGap, alongside } from './physics.js';

// Watches one entity and reports how the player passed it: min lateral gap and max speed.
export class PassTracker {
  constructor(e) {
    this.e = e;
    this.active = false;
    this.minGap = Infinity;
    this.maxSpeed = 0;
    this.done = false;
    this.startSide = 0;
    this.result = null;
  }
  update(p) {
    if (this.done || this.e.removed) return null;
    const A = p.box();
    const B = this.e.box();
    const side = Math.sign(p.s - this.e.s) || 1;
    if (!this.startSide) this.startSide = side;
    if (alongside(A, B, 1.2)) {
      this.active = true;
      this.minGap = Math.min(this.minGap, lateralGap(A, B));
      this.maxSpeed = Math.max(this.maxSpeed, Math.abs(p.v));
    } else if (this.active) {
      this.active = false;
      if (side !== this.startSide) {
        this.done = true;
        this.result = { gap: this.minGap, speed: this.maxSpeed };
        return this.result;
      }
      this.minGap = Infinity;
      this.maxSpeed = 0;
    } else if (side !== this.startSide && Math.abs(p.s - this.e.s) > 6) {
      // slipped past without ever being alongside (e.g. it moved off the lane)
      this.done = true;
      this.result = { gap: 9, speed: Math.abs(p.v) };
      return this.result;
    }
    return null;
  }
}

// Nothing unresolved between the player and s1 that a new oncoming road user would have to meet first
function laneClearAhead(g, s1) {
  return !g.entities.some((e) => e.kind === 'npc' && !e.resolved && e.role !== 'quad' && e.s > g.player.s - 5 && e.s < s1);
}

class Encounter {
  constructor(def, game) {
    this.def = def;
    this.type = def.type;
    this.s = def.s;
    this.game = game;
    this.rng = new RNG(def.id * 977 + game.road.seed);
    this.spawned = false;
    this.done = false;
    this.crashed = false;
    this.entities = [];
  }
  get spawnAt() {
    return this.s - 200;
  }
  canSpawn() {
    return true;
  }
  add(e) {
    e.enc = this;
    this.entities.push(e);
    this.game.addEntity(e);
    return e;
  }
  // where the action is, for hints and horn checks
  focusS() {
    const alive = this.entities.filter((e) => !e.removed);
    return alive.length ? alive[0].s : this.s;
  }
  distTo(p) {
    return Math.abs(this.focusS() - p.s);
  }
  update() {}
  hint() {
    return null;
  }
  onHorn() {
    return false;
  }
}

// What to tell the player while an oncoming road user works out who gives way
function oncomingHint(npc, game, done) {
  if (!npc || npc.resolved || done || !npc.engaged) return null;
  const p = game.player;
  const road = game.road;
  const name = npc.name;
  switch (npc.state) {
    case 'toPP':
      return { text: `Oncoming ${name} is heading for a passing place. Hang back and let them tuck in.`, icon: '🚗' };
    case 'waitPP':
      return { text: `The ${name} has pulled in for you. Pass slowly, then wave (T).`, icon: '👋' };
    case 'holdOpp':
      return { text: `The ${name} is waiting for you. Pull into the passing place on your LEFT.`, icon: '⬅️' };
    case 'passing':
      return { text: `Hold still and let the ${name} squeeze by.`, icon: '✋' };
    case 'reverse':
      return { text: `The ${name} is reversing to a passing place for you. Follow slowly.`, icon: '↩️' };
    case 'standoff': {
      const behind = road.passingPlaces.filter((q) => q.s1 < p.s + 2);
      const pp = behind[behind.length - 1];
      let txt = 'Stand-off! ';
      if (pp && p.s - pp.mid < 170) {
        const dist = Math.round(p.s - pp.mid);
        txt += pp.side > 0 ? `Passing place ${dist} m behind you on your left. Reverse into it.` : `Passing place ${dist} m behind on the right. Reverse past it so they can pull in.`;
      } else txt += 'No passing place close behind you.';
      txt += npc.canReverse && !npc.noBayBehind ? ' Or sit tight and they may back up.' : ` The ${name} can't back up. It's down to you.`;
      return { text: txt, icon: '⚠️', urgent: true };
    }
  }
  return null;
}

// ---------------------------------------------------------------------------

export class OncomingEnc extends Encounter {
  constructor(def, game) {
    super(def, game);
    const R = this.rng;
    const t = def.type;
    this.vtype =
      t === 'tractorOncoming' ? (R.chance(0.5) ? 'tractorTrailer' : 'tractor') : t === 'motorhome' ? 'motorhome' : t === 'landroverOncoming' ? 'landrover' : R.pick(game.region.npcCars);
  }
  spawnS() {
    return Math.min(Math.max(this.s + 40, this.game.player.s + 190), this.game.road.village.s0 + 60);
  }
  canSpawn() {
    return laneClearAhead(this.game, this.spawnS() + 10);
  }
  spawn() {
    const R = this.rng;
    const spec = NPC_SPECS[this.vtype];
    const tractor = this.vtype.startsWith('tractor');
    const color = tractor
      ? R.pick(['#3d7a3a', '#c23b22', '#2c5aa0'])
      : this.vtype === 'postvan'
        ? '#d4202a'
        : this.vtype === 'motorhome'
          ? '#f1efe8'
          : this.vtype === 'landrover'
            ? R.pick(['#3f5a3a', '#7d8a6a', '#2b3a4a'])
            : this.vtype === 'van'
              ? R.pick(['#f2f2f2', '#2b4a7a', '#d8d8d0'])
              : R.pick(CAR_COLOURS);
    this.npc = this.add(
      new NPCVehicle({
        type: this.vtype,
        role: 'oncoming',
        name: spec.name,
        s: this.spawnS(),
        d: -0.2,
        dir: -1,
        len: spec.len,
        wid: spec.wid,
        cruise: tractor ? 7.5 : this.vtype === 'motorhome' ? 9.5 : R.range(10.5, 13),
        canReverse: !tractor && this.vtype !== 'motorhome',
        color,
      }),
    );
    this.startS = null;
    this.minPS = Infinity;
    this.maxPassSpeed = 0;
  }
  update() {
    const npc = this.npc;
    const p = this.game.player;
    if (!npc || this.done) return;
    if (npc.engaged && !npc.resolved) {
      if (this.startS === null) this.startS = p.s;
      this.minPS = Math.min(this.minPS, p.s);
      if (alongside(p.box(), npc.box(), 0.5)) this.maxPassSpeed = Math.max(this.maxPassSpeed, Math.abs(p.v));
    }
    if (npc.resolved) this.finish();
    else if (npc.removed) this.done = true;
  }
  finish() {
    this.done = true;
    const g = this.game;
    const npc = this.npc;
    if (this.crashed) return;
    const name = npc.name;
    const reversed = (this.startS ?? 0) - this.minPS;
    const ms = this.maxPassSpeed;
    if (ms < 1.0) {
      const inPP = !!g.road.ppAt(g.player.s);
      g.score.add(inPP ? 130 : 110, inPP ? 'Pulled into a passing place' : 'Waited to let them by');
      if (reversed > 6) g.score.add(100, 'Reversed to a passing place');
      g.npcThanks(npc, `The ${name} driver waves thanks 👋`);
    } else if (npc.yielded) {
      if (ms < 6.7) g.score.add(60, 'Passed with care');
      else if (ms < 9.5) g.score.add(20, 'Passed oncoming traffic');
      else g.score.add(-60, 'Barged past too fast');
      g.requestWave(npc, { points: 50, label: 'Raised a hand to say thanks', miss: -20, missLabel: 'No wave? Tut tut.', prompt: `The ${name} let you through` });
    } else if (ms < 9) {
      g.score.add(40, 'Passed oncoming traffic safely');
    } else {
      g.score.add(-50, 'Too fast past oncoming traffic');
    }
  }
  hint() {
    return oncomingHint(this.npc, this.game, this.done);
  }
  onHorn() {
    const npc = this.npc;
    if (!npc || npc.resolved || this.done || !npc.engaged) return false;
    if (Math.abs(npc.s - this.game.player.s) > 70) return false;
    this.game.score.add(-30, 'Impatient toot');
    npc.flashT = 1;
    return true;
  }
}

// ---------------------------------------------------------------------------

const AHEAD = {
  tractorAhead: { type: 'tractor', who: 'tractor', thanks: 'tractor driver', cruise: 6.5, patience: 6, tailgate: 4.5, patient: 7 },
  horseAhead: { type: 'horse', who: 'horse rider', thanks: 'rider', cruise: 1.7, patience: 4, tailgate: 8, patient: 10, cat: 'horse' },
  cyclistAhead: { type: 'bike', who: 'cyclist', thanks: 'cyclist', cruise: 5.2, patience: 3, tailgate: 5, patient: 7, cat: 'cyclist' },
};

export class SlowAheadEnc extends Encounter {
  constructor(def, game) {
    super(def, game);
    this.cfg = AHEAD[def.type];
  }
  get spawnAt() {
    return this.s - 210;
  }
  canSpawn() {
    const g = this.game;
    return !g.entities.some((e) => e.kind === 'npc' && e.dir < 0 && !e.resolved && e.s > g.player.s && e.s < this.s + 20);
  }
  spawn() {
    const R = this.rng;
    const C = this.cfg;
    let type = C.type;
    if (type === 'tractor' && R.chance(0.45)) type = 'tractorTrailer';
    const spec = NPC_SPECS[type];
    this.npc = this.add(
      new NPCVehicle({
        type,
        role: 'ahead',
        name: spec.name,
        category: C.cat || 'vehicle',
        vulnerable: !!C.cat,
        edgeHugger: !!C.cat,
        touring: this.game.region.id === 'scotland',
        s: Math.max(this.s, this.game.player.s + 120),
        d: 0.3,
        dir: 1,
        len: spec.len,
        wid: spec.wid,
        cruise: C.cruise,
        patience: C.patience,
        color: R.pick(['#3d7a3a', '#c23b22', '#2c5aa0', '#3d7a3a']),
      }),
    );
    this.tracker = new PassTracker(this.npc);
    this.tailT = 0;
    this.patientT = 0;
    this.spooked = false;
  }
  update(dt) {
    const g = this.game;
    const npc = this.npc;
    const p = g.player;
    if (!npc || this.done) return;
    const gap = npc.followGap ?? 99;
    if (!npc.resolved && gap > -0.5 && gap < 40) {
      if (gap < this.cfg.tailgate && Math.abs(p.v) > 1.5) {
        this.tailT += dt;
        if (this.tailT > 1.5) {
          g.score.add(-15, `Tailgating the ${this.cfg.who}`);
          this.tailT = 0;
        }
      } else if (gap >= this.cfg.patient) {
        this.patientT += dt;
        this.tailT = Math.max(0, this.tailT - dt);
      }
    }
    if (this.cfg.cat === 'horse' && !this.spooked && gap > -1 && gap < 20 && Math.abs(p.v) > 7) this.spook('Rushed up behind the horse');
    const r = this.tracker.update(p);
    if (r) this.passResult = r;
    if (npc.resolved && !this.done) this.finish();
    else if (npc.removed) this.done = true;
  }
  spook(label) {
    this.spooked = true;
    this.npc.spookT = 2.5;
    this.npc.shout = 2;
    this.game.score.add(-120, label);
    this.game.emit('neigh', this.npc);
  }
  finish() {
    this.done = true;
    const g = this.game;
    if (this.crashed) return;
    const C = this.cfg;
    const r = this.passResult || { gap: 2, speed: Math.abs(g.player.v) };
    if (this.patientT > 3) g.score.add(Math.min(150, Math.round(this.patientT * 4)), `Patient behind the ${C.who}`);
    let good = true;
    if (C.cat === 'horse') {
      if (r.speed < 4.5 && r.gap >= 1.4) g.score.add(150, 'Passed the horse dead slow and wide');
      else if (r.speed < 6.7 && r.gap >= 0.9) g.score.add(50, 'Passed the horse');
      else {
        good = false;
        if (!this.spooked) this.spook('Too close and fast past a horse!');
      }
    } else if (C.cat === 'cyclist') {
      if (r.gap >= 1.5) g.score.add(100, 'Gave the cyclist 1.5 m');
      else if (r.gap >= 1.0 && r.speed < 9) g.score.add(40, 'Passed the cyclist');
      else {
        good = false;
        g.score.add(-100, 'Close pass on a cyclist!');
        this.npc.shout = 2;
      }
    } else if (this.npc.yielded) {
      g.score.add(40, `Overtook the ${C.who} safely`);
    } else if (r.speed > 9) {
      good = false;
      g.score.add(-40, 'Risky overtake');
    }
    if (good && this.npc.yielded) {
      g.requestWave(this.npc, { points: 40, label: `Thanked the ${C.thanks}`, miss: -15, missLabel: 'They pulled over and got no wave', prompt: `The ${C.who} pulled over for you` });
    }
  }
  hint() {
    const npc = this.npc;
    if (!npc || this.done || npc.resolved) return null;
    const gap = npc.followGap ?? 99;
    if (gap > 70) return null;
    const C = this.cfg;
    // on their way to a gateway or bay: not out of the way yet, so don't invite an overtake
    if (npc.state === 'toPP') {
      if (C.cat === 'horse') return { text: 'The rider is heading for a gateway to let you by. Stay well back until they’re in.', icon: '🐎' };
      if (C.cat === 'cyclist') return { text: 'The cyclist is making for a wider spot to let you by. Hang back a moment.', icon: '🚲' };
      return { text: 'The tractor is heading for a passing place to let you by. Hang back until it’s in.', icon: '🚜' };
    }
    if (npc.state === 'waitPP') {
      if (C.cat === 'horse') return { text: 'The rider has pulled in. Pass dead slow (under 10 mph) and wide.', icon: '🐎' };
      if (C.cat === 'cyclist') return { text: 'The cyclist has pulled in. Pass slowly with room to spare.', icon: '🚲' };
      return { text: 'The tractor has pulled over. Pass carefully, then wave (T).', icon: '🚜' };
    }
    if (C.cat === 'horse') return { text: 'Horse rider ahead. Hang well back and keep it quiet. They’ll find a gateway.', icon: '🐎' };
    if (C.cat === 'cyclist') return { text: 'Cyclist ahead. No room to give 1.5 m here, so wait for a wider bit.', icon: '🚲' };
    return { text: 'Slow tractor ahead. Hang back. The driver will pull in when they can.', icon: '🚜' };
  }
  onHorn() {
    const npc = this.npc;
    if (!npc || this.done || npc.resolved) return false;
    const dist = Math.abs(npc.s - this.game.player.s);
    if (dist > 50) return false;
    if (this.cfg.cat === 'horse') {
      if (!this.spooked) this.spook('Sounded your horn at a horse!');
    } else {
      this.game.score.add(-30, 'Impatient toot');
    }
    return true;
  }
}

// ---------------------------------------------------------------------------

export class OncomingSimpleEnc extends Encounter {
  constructor(def, game) {
    super(def, game);
    this.horse = def.type === 'horseOncoming';
  }
  get spawnAt() {
    return this.s - 180;
  }
  canSpawn() {
    return laneClearAhead(this.game, Math.max(this.s + 30, this.game.player.s + 160) + 10);
  }
  spawn() {
    const g = this.game;
    const type = this.horse ? 'horse' : 'bike';
    const spec = NPC_SPECS[type];
    const s = Math.max(this.s + 30, g.player.s + 160);
    this.npc = this.add(
      new NPCVehicle({
        type,
        role: 'oncoming',
        name: spec.name,
        category: this.horse ? 'horse' : 'cyclist',
        vulnerable: true,
        edgeHugger: true,
        touring: g.region.id === 'scotland',
        s,
        d: -(g.road.baseHalf(s) - spec.wid / 2 - 0.35),
        dir: -1,
        len: spec.len,
        wid: spec.wid,
        cruise: this.horse ? 1.6 : this.rng.range(4.8, 6.2),
        canReverse: false,
      }),
    );
    this.tracker = new PassTracker(this.npc);
    this.spooked = false;
  }
  update() {
    const g = this.game;
    const p = g.player;
    const npc = this.npc;
    if (!npc || this.done) return;
    const dist = npc.s - p.s;
    if (this.horse && !this.spooked && dist > 0 && dist < 25 && p.v > 7) this.spook('Rushed towards a horse!');
    const r = this.tracker.update(p);
    if (r) this.finish(r);
    else if (npc.removed || p.s - npc.s > 60) this.done = true;
  }
  spook(label) {
    this.spooked = true;
    this.npc.spookT = 2.5;
    this.npc.shout = 2;
    this.game.score.add(-120, label);
    this.game.emit('neigh', this.npc);
  }
  finish(r) {
    this.done = true;
    const g = this.game;
    if (this.crashed) return;
    if (this.horse) {
      if (r.speed < 1) {
        g.score.add(150, 'Stopped for the horse');
        g.npcThanks(this.npc, 'The rider smiles and nods 🐎');
      } else if (r.speed < 4.5 && r.gap >= 1.2) g.score.add(100, 'Passed the horse dead slow');
      else if (!this.spooked) this.spook('Too close and fast past a horse!');
    } else if (r.speed < 9 && r.gap >= 1.0) {
      g.score.add(60, 'Gave the cyclist room');
      g.npcThanks(this.npc, 'The cyclist gives a cheery wave 🚲');
    } else if (r.speed > 13 || r.gap < 0.5) {
      g.score.add(-80, 'Close pass on a cyclist!');
      this.npc.shout = 2;
    } else g.score.add(15, 'Passed the cyclist');
  }
  hint() {
    if (!this.npc || this.done || this.npc.s - this.game.player.s > 90) return null;
    if (['standoff', 'holdOpp', 'waitPP', 'toPP'].includes(this.npc.state)) return oncomingHint(this.npc, this.game, this.done);
    return this.horse
      ? { text: 'Horse rider coming towards you. Slow right down, or stop and let them pass.', icon: '🐎' }
      : { text: 'Cyclist coming. Slow down and keep left to give them room.', icon: '🚲' };
  }
  onHorn() {
    if (!this.npc || this.done) return false;
    if (Math.abs(this.npc.s - this.game.player.s) > 50) return false;
    if (this.horse) {
      if (!this.spooked) this.spook('Sounded your horn at a horse!');
    } else this.game.score.add(-20, 'Tooted at a cyclist');
    return true;
  }
}

// ---------------------------------------------------------------------------

export class WalkersEnc extends Encounter {
  get spawnAt() {
    return this.s - 170;
  }
  spawn() {
    const g = this.game;
    const R = this.rng;
    const road = g.road;
    const n = R.int(2, 4);
    // Highway Code: walk facing oncoming traffic. Ramblers don't always.
    this.dir = R.chance(0.6) ? -1 : 1;
    this.side = this.dir < 0 ? 1 : R.sign();
    const s0 = this.dir < 0 ? Math.max(this.s + 25, g.player.s + 120) : Math.max(this.s, g.player.s + 110);
    this.members = [];
    for (let k = 0; k < n; k++) {
      const s = s0 - this.dir * 1.7 * Math.floor(k / 2) - this.dir * 0.4 * (k % 2);
      const edge = road.baseHalf(s);
      const homeD = this.side * (edge - 0.45 - (k % 2) * 0.7);
      const m = this.add(new Person({ s, d: homeD, dir: this.dir, style: 'rambler', name: 'walker' }));
      m.homeD = homeD;
      m.targetD = homeD;
      m.targetSpeed = 1.25;
      this.members.push(m);
    }
    if (R.chance(0.55)) {
      const dog = this.add(new Dog({ s: s0 + this.dir * 0.8, d: this.members[0].d, owner: this.members[0], offS: 0.9, offD: this.side * 0.25 }));
      this.dog = dog;
    }
    this.trackers = this.entities.map((e) => new PassTracker(e));
    this.aware = false;
    this.minGap = Infinity;
    this.maxSpeed = 0;
  }
  update() {
    const g = this.game;
    const p = g.player;
    const road = g.road;
    if (this.done || !this.members) return;
    const lead = this.members[0];
    const rs = lead.s - p.s;
    const dist = Math.abs(rs);
    const approaching = (p.v > 0.3 && rs > -6) || (p.v < -0.3 && rs < 6);
    if (!this.aware && ((this.dir < 0 && dist < 50) || (this.dir > 0 && dist < 14))) this.aware = true;
    const still = Math.abs(p.v) < 0.3;
    const close = this.aware && dist < 45 && (approaching || (still && rs > -8));
    if (this.dog) {
      this.dog.offS = close ? -1.0 : 0.9;
      this.dog.offD = close ? 0 : this.side * 0.25;
    }
    this.members.forEach((m, k) => {
      if (close) {
        // tuck in against the hedge in single file, right into it if the car is alongside
        const md = Math.abs(m.s - p.s);
        m.squeeze = md < 10;
        const inset = m.squeeze ? -0.05 : 0.38;
        m.targetD = this.side > 0 ? road.leftBound(m.s) - inset : -(road.rightBound(m.s) - inset);
        const prev = this.members[k - 1];
        const spacing = prev ? this.dir * (prev.s - m.s) : 99;
        // Car in front of us: stand still while it squeezes by, walk on past one that has stopped.
        // Car behind us: stop and press in so it can creep past.
        const facing = this.dir * (p.s - m.s) > 0;
        m.targetSpeed = (facing ? md < 8 && !still : md < 14) ? 0 : spacing < 1.3 ? 0.15 : 0.75;
        m.lookAt = p;
      } else {
        m.targetD = m.homeD;
        m.targetSpeed = 1.25;
        m.lookAt = null;
        m.squeeze = false;
      }
    });
    // keep a little personal space within the group
    for (let a = 0; a < this.members.length; a++) {
      for (let b = a + 1; b < this.members.length; b++) {
        const A = this.members[a];
        const B = this.members[b];
        const ds = A.s - B.s;
        if (Math.abs(ds) < 0.7 && Math.abs(A.d - B.d) < 0.5) {
          const push = (0.7 - Math.abs(ds)) / 2;
          const sg = ds >= 0 ? 1 : -1;
          A.s += sg * push;
          B.s -= sg * push;
        }
      }
    }
    let all = true;
    for (const t of this.trackers) {
      const r = t.update(p);
      if (r) {
        this.minGap = Math.min(this.minGap, r.gap);
        this.maxSpeed = Math.max(this.maxSpeed, r.speed);
      }
      if (!t.done) all = false;
    }
    if (all || p.s - Math.max(...this.members.map((m) => m.s)) > 40) this.finish();
  }
  finish() {
    this.done = true;
    const g = this.game;
    if (this.crashed || this.minGap === Infinity) return;
    if (this.maxSpeed < 6.7 && this.minGap >= 1.0) {
      g.score.add(80, 'Passed the walkers wide and slow');
      for (const m of this.members) m.waveT = 2.5;
      g.toast('The walkers wave thanks 🥾', 'info');
    } else if (this.maxSpeed < 9 && this.minGap >= 0.6) {
      g.score.add(30, 'Passed the walkers');
    } else if (this.maxSpeed < 2.6 && this.minGap >= 0.35) {
      g.score.add(50, 'Crept past the walkers');
    } else {
      g.score.add(-100, 'Far too close to the walkers!');
      for (const m of this.members) m.shout = 2.5;
      g.toast('"Oi! Slow down!"', 'bad');
    }
  }
  hint() {
    if (this.done || !this.members) return null;
    const d = this.members[0].s - this.game.player.s;
    if (d < -5 || d > 80) return null;
    return { text: 'Walkers on the lane. Slow right down and give them plenty of room.', icon: '🥾' };
  }
  onHorn() {
    if (this.done || !this.members) return false;
    const dist = Math.abs(this.members[0].s - this.game.player.s);
    if (dist > 50) return false;
    this.aware = true;
    if (dist < 12) {
      this.game.score.add(-40, 'Made the walkers jump');
      for (const m of this.members) m.shout = 1.5;
    }
    return true;
  }
}

// ---------------------------------------------------------------------------

export class CattleCrossingEnc extends Encounter {
  get spawnAt() {
    return this.s - 190;
  }
  spawn() {
    const g = this.game;
    const R = this.rng;
    this.farmer = this.add(new Person({ s: this.s - 9, d: 0.2, dir: -1, style: 'farmer', name: 'farmer' }));
    this.farmer.armUp = true;
    this.farmer.lookAt = g.player;
    this.dog = this.add(new Dog({ s: this.s - 8, d: 1, owner: this.farmer, offS: -0.5, offD: 0.9 }));
    this.count = R.int(6, 9);
    this.made = 0;
    this.timer = 0;
    this.cows = [];
    this.waited = false;
    this.pushed = false;
    this.nudged = false;
    this.waved = false;
  }
  crossing() {
    return this.made < this.count || this.cows.some((c) => !c.removed && Math.abs(c.d) < 6);
  }
  update(dt) {
    const g = this.game;
    const p = g.player;
    const road = g.road;
    if (this.done || !this.farmer) return;
    this.timer -= dt;
    if (this.made < this.count && this.timer <= 0) {
      this.timer = this.rng.range(2.2, 3.2);
      this.made++;
      const j = this.rng.range(-0.8, 0.8);
      const bl = road.leftBound(this.s);
      const br = road.rightBound(this.s);
      const path = [
        { s: this.s + j, d: bl + 8 },
        { s: this.s + j * 0.3, d: bl + 0.3 },
        { s: this.s, d: 0 },
        { s: this.s - j * 0.3, d: -(br + 0.3) },
        { s: this.s - j * 2, d: -(br + 12) },
      ];
      this.cows.push(this.add(new Cow({ s: path[0].s, d: path[0].d, path, breed: g.region.cowBreed })));
    }
    const crossing = this.crossing();
    const dFarmer = this.farmer.s - p.s;
    if (crossing) {
      this.farmer.armUp = true;
      this.farmer.targetD = 0.2;
      if (dFarmer > 2 && dFarmer < 45 && Math.abs(p.v) < 0.3) this.waited = true;
      if (!this.nudged && Math.abs(p.v) > 0.8) {
        for (const c of this.cows) {
          if (!c.removed && Math.abs(c.s - p.s) < 6 && lateralGapSafe(p, c) < 1.2) {
            this.nudged = true;
            g.score.add(-80, 'Nudging into the herd');
            break;
          }
        }
      }
      if (!this.pushed && p.s + sExtent(p.box()) > this.s - 1.5) {
        this.pushed = true;
        g.score.add(-150, 'Pushed through the herd');
      }
    } else {
      // the farmer and dog step back into the gateway the cows went through
      this.farmer.armUp = false;
      this.farmer.dir = 1;
      this.farmer.targetSpeed = this.farmer.s < this.s - 0.6 ? 0.9 : 0;
      this.farmer.targetD = this.farmer.s > this.s - 2.5 ? -(road.rightBound(this.s) - 0.35) : -(road.rightEdge(this.farmer.s) - 0.2);
      this.dog.offS = -0.8;
      this.dog.offD = 0;
      if (!this.waved && dFarmer < 30 && dFarmer > -2) {
        this.waved = true;
        this.farmer.waveT = 3;
        g.requestWave(this.farmer, { points: 40, label: 'Thanked the farmer', miss: -10, missLabel: 'Ignored the farmer', prompt: 'The farmer waves you on' });
      }
    }
    if (!crossing && p.s > this.s + 12) this.finish();
  }
  finish() {
    this.done = true;
    if (this.crashed) return;
    if (this.waited && !this.pushed) this.game.score.add(250, 'Waited for the herd to cross');
    else if (!this.pushed) this.game.score.add(60, 'Got past the herd');
  }
  focusS() {
    return this.s;
  }
  hint() {
    if (this.done || !this.farmer) return null;
    const d = this.s - this.game.player.s;
    if (d > 130 || d < -10) return null;
    if (this.crossing()) return { text: 'The farmer is holding the traffic. Stop, and wait for the herd to cross.', icon: '🐄', urgent: d < 40 };
    return { text: 'The farmer waves you on. Wave back (T) and drive on slowly.', icon: '👋' };
  }
  onHorn() {
    if (this.done || !this.farmer || !this.crossing()) return false;
    if (Math.abs(this.s - this.game.player.s) > 70) return false;
    this.game.score.add(-80, 'Tooted at the cows');
    for (const c of this.cows) c.pauseT = 3;
    this.farmer.shout = 2;
    this.game.emit('moo', this.cows[0] || this.farmer);
    return true;
  }
}

function lateralGapSafe(p, e) {
  return lateralGap(p.box(), e.box());
}

// ---------------------------------------------------------------------------

export class SheepEnc extends Encounter {
  get spawnAt() {
    return this.s - 170;
  }
  spawn() {
    const g = this.game;
    const R = this.rng;
    const road = g.road;
    const n = R.int(4, 8);
    this.sheep = [];
    const s0 = Math.max(this.s, g.player.s + 110);
    for (let k = 0; k < n; k++) {
      const s = k === 0 ? s0 : s0 + R.range(-28, 28);
      const onRoad = k === 0 || R.chance(0.55);
      const side = R.sign();
      const w = side > 0 ? road.leftEdge(s) : road.rightEdge(s);
      const b = side > 0 ? road.leftBound(s) : road.rightBound(s);
      const d = k === 0 ? R.range(-0.4, 0.4) : onRoad ? R.range(-w + 0.4, w - 0.4) : side * (w + (b - w) * R.range(0.3, 0.8));
      const sh = this.add(new Sheep({ s, d, stubborn: k === 0 && R.chance(0.6) }));
      this.sheep.push(sh);
      if (R.chance(0.35)) this.sheep.push(this.add(new Sheep({ s: s + R.range(-1.5, 1.5), d: d + R.range(-0.8, 0.8), lamb: true })));
    }
    this.trackers = this.sheep.map((s) => new PassTracker(s));
    this.gentle = 0;
    this.fast = 0;
    this.startled = false;
  }
  update() {
    const p = this.game.player;
    if (this.done || !this.sheep) return;
    let all = true;
    for (const t of this.trackers) {
      const r = t.update(p);
      if (r) {
        if (r.speed < 6.7) this.gentle++;
        else if (r.speed > 11) this.fast++;
      }
      if (!t.done) all = false;
    }
    const maxS = Math.max(...this.sheep.map((s) => s.s));
    if (all || p.s > maxS + 30) this.finish();
  }
  onStartle() {
    if (this.startled) return;
    this.startled = true;
    this.game.score.add(-40, 'Startled the sheep');
  }
  finish() {
    this.done = true;
    const g = this.game;
    if (this.gentle > 0 && !this.crashed) g.score.add(15 * this.gentle, 'Gentle past the sheep', { detail: `×${this.gentle}` });
    if (this.fast > 0) g.score.add(-15 * this.fast, 'Too fast past sheep');
  }
  hint() {
    if (this.done || !this.sheep) return null;
    const p = this.game.player;
    const near = this.sheep.filter((s) => !s.removed && s.s - p.s > -3 && s.s - p.s < 70);
    if (!near.length) return null;
    const road = this.game.road;
    const stub = near.find((s) => s.stubborn && s.state === 'graze' && Math.abs(s.d) < road.baseHalf(s.s) - 0.2);
    if (stub && stub.s - p.s < 20) return { text: 'This one is stubborn. Wait a moment, or give a gentle toot (H).', icon: '🐑' };
    return { text: 'Sheep on the road. Take it slowly and they’ll shuffle aside.', icon: '🐑' };
  }
  onHorn() {
    if (this.done || !this.sheep) return false;
    const p = this.game.player;
    let any = false;
    for (const s of this.sheep) {
      if (Math.abs(s.s - p.s) < 40) {
        any = true;
        if (s.stubborn && s.state === 'graze') s.startYield(p, this.game.road);
      }
    }
    return any;
  }
}

// ---------------------------------------------------------------------------

export class FlockEnc extends Encounter {
  get spawnAt() {
    return this.s - 240;
  }
  canSpawn() {
    const g = this.game;
    return !g.entities.some((e) => e.kind === 'npc' && !e.resolved && e.s > g.player.s && e.s < this.s + 100);
  }
  spawn() {
    const g = this.game;
    const R = this.rng;
    const road = g.road;
    const n = R.int(22, 28);
    const sF = Math.max(this.s + 40, g.player.s + 150);
    this.sheep = [];
    for (let k = 0; k < n; k++) {
      const s = sF + R.range(0, 22);
      const hw = road.baseHalf(s);
      const sh = this.add(new Sheep({ s, d: R.range(-hw + 0.3, hw - 0.3), state: 'flock', lamb: R.chance(0.2) }));
      sh.wd = R.range(-0.3, 0.3);
      sh.pace = R.range(0.85, 1.2);
      this.sheep.push(sh);
    }
    const spec = NPC_SPECS.quad;
    this.quad = this.add(
      new NPCVehicle({ type: 'quad', role: 'quad', name: spec.name, s: sF + 30, d: 0, dir: -1, len: spec.len, wid: spec.wid, cruise: 1.3, canReverse: false, edgeHugger: true }),
    );
    this.dog = this.add(new Dog({ s: sF + 25, d: 0, owner: this.quad, mode: 'herd', offS: -5 }));
    this.dog.riderOf = this.quad; // the quad doesn't wait for its own dog
    this.flockV = 1.15;
    this.maxNear = 0;
    this.nearT = 0;
    this.tucked = false;
    this.hornPenalty = false;
  }
  update(dt) {
    const g = this.game;
    const p = g.player;
    const road = g.road;
    if (this.done || !this.sheep) return;
    const R = this.rng;
    let near = false;
    for (const a of this.sheep) {
      if (a.removed) continue;
      a.wd = clamp(a.wd + R.range(-0.6, 0.6) * dt, -0.35, 0.35);
      let vs = -this.flockV * a.pace;
      let vd = a.wd;
      // separation
      for (const b of this.sheep) {
        if (a === b || b.removed) continue;
        const ds = a.s - b.s;
        const dd = a.d - b.d;
        const d2 = ds * ds + dd * dd;
        if (d2 < 0.8 && d2 > 1e-4) {
          const k = (0.8 - d2) * 1.6;
          vs += ds * k;
          vd += dd * k;
        }
      }
      // keep to the lane
      const hw = road.baseHalf(a.s);
      if (Math.abs(a.d) > hw + 0.2) vd -= Math.sign(a.d) * 0.4;
      a.flockVs = vs;
      a.flockVd = vd;
      if (Math.hypot(a.s - p.s, a.d - p.d) < 12) near = true;
      if (a.s < p.s - 70) a.removed = true;
    }
    if (near) {
      this.nearT += dt;
      this.maxNear = Math.max(this.maxNear, Math.abs(p.v));
      const edge = Math.min(road.leftBound(p.s) - (p.d + p.wid / 2), p.d - p.wid / 2 + road.rightBound(p.s));
      if (Math.abs(p.v) < 0.3 && edge < 0.7) this.tucked = true;
    }
    const allPast = this.sheep.every((a) => a.removed || a.s < p.s - p.len / 2 - 1);
    if (allPast && this.dog.mode === 'herd') {
      // job done: the collie trots along behind the quad
      this.dog.mode = 'heel';
      this.dog.offS = -2.5;
      this.dog.offD = 0;
    }
    if (allPast && (this.quad.resolved || this.quad.removed)) this.finish();
  }
  finish() {
    this.done = true;
    const g = this.game;
    if (this.nearT < 1) return;
    if (this.maxNear < 0.8) g.score.add(300, 'Let the flock flow past');
    else if (this.maxNear < 3) g.score.add(120, 'Crept through the flock');
    else g.score.add(-60, 'Ploughed through the flock');
    if (this.tucked) g.score.add(50, 'Tucked in to the side');
    this.quad.waveT = 2.5;
    g.requestWave(this.quad, { points: 40, label: 'Thanked the shepherd', miss: -10, missLabel: 'Ignored the shepherd', prompt: 'The shepherd gives you a nod' });
  }
  focusS() {
    const alive = this.sheep ? this.sheep.filter((s) => !s.removed) : [];
    return alive.length ? Math.min(...alive.map((s) => s.s)) : this.s;
  }
  hint() {
    if (this.done || !this.sheep) return null;
    const d = this.focusS() - this.game.player.s;
    if (d > 140) return null;
    if (d > 15) return { text: 'A whole flock is coming your way! Pull right over to the side and stop.', icon: '🐑' };
    return { text: 'Stay still and let them flow around you.', icon: '🐑' };
  }
  onHorn() {
    if (this.done || !this.sheep) return false;
    if (Math.abs(this.focusS() - this.game.player.s) > 50) return false;
    if (!this.hornPenalty) {
      this.hornPenalty = true;
      this.game.score.add(-50, 'Tooted at the flock');
    }
    return true;
  }
}

// ---------------------------------------------------------------------------

export class HighlandCowEnc extends Encounter {
  get spawnAt() {
    return this.s - 220;
  }
  spawn() {
    const g = this.game;
    const R = this.rng;
    const n = R.chance(0.4) ? 2 : 1;
    const s0 = Math.max(this.s, g.player.s + 140);
    this.cows = [];
    for (let k = 0; k < n; k++) this.cows.push(this.add(new Cow({ s: s0 + k * 5, d: R.range(-0.7, 0.7), breed: 'highland', state: 'block' })));
    this.trackers = this.cows.map((c) => new PassTracker(c));
    this.good = 0;
    this.speeding = false;
  }
  update() {
    const p = this.game.player;
    if (this.done || !this.cows) return;
    const c0 = this.cows[0];
    const rs = c0.s - p.s;
    if (!this.speeding && rs > 0 && rs < 35 && p.v > 9) {
      this.speeding = true;
      this.game.score.add(-40, 'Too fast for the coos');
    }
    let all = true;
    for (const t of this.trackers) {
      const r = t.update(p);
      if (r && r.speed < 5.5) this.good++;
      if (!t.done) all = false;
    }
    if (all || p.s > Math.max(...this.cows.map((c) => c.s)) + 30) this.finish();
  }
  finish() {
    this.done = true;
    if (this.good > 0 && !this.crashed) this.game.score.add(150 * this.good, 'Respected the Highland coo', { detail: this.good > 1 ? `×${this.good}` : '' });
  }
  hint() {
    if (this.done || !this.cows) return null;
    const c = this.cows[0];
    const d = c.s - this.game.player.s;
    if (d > 90 || d < -5) return null;
    if (c.state === 'block') return { text: 'A Highland coo is standing in the road. Stop and wait. It’ll move in its own sweet time.', icon: '🐂' };
    return { text: 'It’s ambling aside. Pass slowly.', icon: '🐂' };
  }
  onHorn() {
    if (this.done || !this.cows) return false;
    if (Math.abs(this.cows[0].s - this.game.player.s) > 50) return false;
    for (const c of this.cows) c.waitNeeded += 3;
    this.game.score.add(-20, 'Highland coos ignore horns');
    this.game.emit('moo', this.cows[0]);
    return true;
  }
}

export function makeEncounter(def, game) {
  switch (def.type) {
    case 'oncoming':
    case 'tractorOncoming':
    case 'landroverOncoming':
    case 'motorhome':
      return new OncomingEnc(def, game);
    case 'tractorAhead':
    case 'horseAhead':
    case 'cyclistAhead':
      return new SlowAheadEnc(def, game);
    case 'horseOncoming':
    case 'cyclistOncoming':
      return new OncomingSimpleEnc(def, game);
    case 'walkers':
      return new WalkersEnc(def, game);
    case 'cattleCrossing':
      return new CattleCrossingEnc(def, game);
    case 'sheep':
      return new SheepEnc(def, game);
    case 'flock':
      return new FlockEnc(def, game);
    case 'highlandCow':
      return new HighlandCowEnc(def, game);
    default:
      return null;
  }
}
