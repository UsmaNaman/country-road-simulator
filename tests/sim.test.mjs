import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Sim, autopilot } from '../src/sim.js';
import { Score, summarise } from '../src/scoring.js';
import { Road } from '../src/road.js';
import { REGIONS, VEHICLES } from '../src/config.js';

const idle = { steer: 0, throttle: 0, brake: 0, handbrake: false, horn: false, wave: false };
const DT = 1 / 60;

function run(sim, seconds, inputFn = () => idle) {
  const end = sim.time + seconds;
  while (!sim.over && sim.time < end) sim.step(DT, inputFn(sim));
}

// keep to the left of the lane at a gentle throttle
function laneKeep(sim, throttle) {
  const p = sim.player;
  const k = sim.road.curvature(p.s + 3);
  const want = Math.atan(k * p.def.wheelbase) + (Math.atan2(0.3 - p.d, 6) - p.ang) * 1.8;
  return { ...idle, throttle, steer: Math.max(-1, Math.min(1, want / (p.def.maxSteer / (1 + Math.abs(p.v) / 11)))) };
}

function labels(sim) {
  const out = [];
  sim.on((t, p) => t === 'points' && out.push(p.label));
  return out;
}

test('score: multiplier, courtesy streak and trickle', () => {
  const s = new Score(1.5);
  assert.equal(s.add(100, 'A'), 150); // 100 × 1.5, no streak yet
  assert.equal(s.streak, 1);
  assert.equal(s.add(100, 'B'), 158); // 100 × 1.5 × 1.05
  assert.equal(s.streak, 2);
  assert.equal(s.add(-50, 'Bad'), -50); // penalties aren't multiplied
  assert.equal(s.streak, 0);
  for (let i = 0; i < 100; i++) s.accrue(0.1, 'Steady');
  assert.equal(s.tally.get('Steady').points, 15);
  assert.equal(s.tally.get('Steady').count, 1);
});

test('summary: stars and bonuses', () => {
  const road = new Road(REGIONS.england);
  const score = new Score(1);
  const fin = summarise({ score, road, vehicle: VEHICLES.hatch, health: 100, time: 100, finished: true });
  assert.ok(fin.bonuses.length === 3);
  const fail = summarise({ score, road, vehicle: VEHICLES.hatch, health: 0, time: 100, finished: false, failReason: 'x' });
  assert.equal(fail.stars, 0);
  assert.equal(fail.bonuses.length, 0);
  score.total = 100000;
  assert.equal(summarise({ score, road, vehicle: VEHICLES.hatch, health: 100, time: 999, finished: true }).stars, 3);
});

for (const regionId of Object.keys(REGIONS)) {
  test(`${regionId}: the autopilot can drive the whole route politely`, () => {
    const sim = new Sim({ regionId, vehicleId: 'hatch' });
    run(sim, 1500, autopilot);
    assert.ok(sim.finished, `finished (stopped at ${sim.player.s.toFixed(0)} of ${sim.road.length}: ${sim.failReason})`);
    assert.ok(sim.health > 30, `health ${sim.health}`);
    assert.ok(sim.summary.final > 1000, `score ${sim.summary.final}`);
    assert.ok(sim.summary.stars >= 1);
  });
}

test('random routes: the AI rarely deadlocks', () => {
  let finished = 0;
  const vehicles = Object.keys(VEHICLES);
  const runs = 12;
  for (let k = 0; k < runs; k++) {
    const sim = new Sim({ regionId: Object.keys(REGIONS)[k % 3], vehicleId: vehicles[k % 4], seed: 7000 + k * 131 });
    run(sim, 2000, autopilot);
    if (sim.finished) finished++;
  }
  assert.ok(finished >= runs - 1, `${finished}/${runs} finished`);
});

test('oncoming car: tucking into a passing place earns points and a wave', () => {
  const sim = new Sim({ regionId: 'scotland', vehicleId: 'hatch', forceEncounter: 'oncoming' });
  const got = labels(sim);
  // drive to the first left-hand passing place beyond the start, tuck in and wait
  const pp = sim.road.passingPlaces.find((q) => q.side > 0 && q.s0 > 40);
  const p = sim.player;
  p.s = pp.mid;
  p.d = sim.road.leftEdge(pp.mid) - p.wid / 2 - 0.3;
  sim.encounters[0].s = pp.mid + 40;
  sim.encounters.sort((a, b) => a.s - b.s);
  run(sim, 60, (s) => ({ ...idle, handbrake: true, wave: !!s.waveWindow }));
  assert.ok(got.includes('Pulled into a passing place'), got.join(', '));
  assert.ok(got.includes('Waved back'), got.join(', '));
});

test('stand-off: if you sit tight, a car that can reverse backs up for you', () => {
  const sim = new Sim({ regionId: 'scotland', vehicleId: 'hatch', forceEncounter: 'oncoming' });
  const events = [];
  sim.on((t) => events.push(t));
  // put the player in the middle of a long gap between passing places
  const pps = sim.road.passingPlaces;
  let best = null;
  for (let k = 1; k < pps.length; k++) {
    const gap = pps[k].s0 - pps[k - 1].s1;
    if (!best || gap > best.gap) best = { gap, at: pps[k - 1].s1 + gap / 2 };
  }
  sim.player.s = best.at - 30;
  const enc = sim.encounters.find((e) => e.type === 'oncoming');
  enc.s = best.at;
  sim.step(DT, idle);
  assert.ok(enc.spawned);
  enc.npc.s = best.at + 35; // same gap: no passing place between us
  // creep up until we meet them, then stop and wait
  run(sim, 60, (s) => {
    const close = enc.npc.s - s.player.s < 25;
    return close ? { ...idle, handbrake: true, wave: !!s.waveWindow } : laneKeep(s, 0.3);
  });
  assert.ok(events.includes('standoff'));
  assert.ok(events.includes('npcReverse'), 'the other driver reversed');
});

test('horse: sounding the horn spooks it and costs points', () => {
  const sim = new Sim({ regionId: 'england', vehicleId: 'hatch', forceEncounter: 'horseAhead' });
  const got = labels(sim);
  run(sim, 200, (s) => {
    const horse = s.entities.find((e) => e.type === 'horse');
    if (horse && horse.s - s.player.s < 30) return { ...idle, brake: 1, horn: true };
    return autopilot(s);
  });
  assert.ok(got.includes('Sounded your horn at a horse!'), got.join(', '));
});

test('walkers: driving into one at speed ends the run', () => {
  const sim = new Sim({ regionId: 'england', vehicleId: 'suv', forceEncounter: 'walkers' });
  // flat out down the middle of the lane: a disaster
  run(sim, 120, (s) => ({ ...idle, throttle: 1, steer: (0 - s.player.d) * 2 - s.player.ang * 3 }));
  assert.ok(sim.over && !sim.finished, 'run ended');
  assert.match(sim.failReason || '', /hit|Written off/);
});

test('cattle: waiting for the herd earns the big bonus', () => {
  const sim = new Sim({ regionId: 'england', vehicleId: 'hatch', forceEncounter: 'cattleCrossing' });
  const got = labels(sim);
  run(sim, 400, autopilot);
  assert.ok(got.includes('Waited for the herd to cross'), got.join(', '));
});

test('wave window: thanking in time scores, ignoring costs', () => {
  const sim = new Sim({ regionId: 'wales', vehicleId: 'hatch' });
  const got = labels(sim);
  const who = { waveT: 0 };
  sim.requestWave(who, { points: 50, label: 'Thanks', miss: -20, missLabel: 'Rude' });
  sim.step(DT, { ...idle, wave: true });
  sim.requestWave(who, { points: 50, label: 'Thanks', miss: -20, missLabel: 'Rude' });
  run(sim, 6);
  assert.deepEqual(got.filter((l) => l === 'Thanks' || l === 'Rude'), ['Thanks', 'Rude']);
});
