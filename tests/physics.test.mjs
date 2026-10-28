import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PlayerCar, overlap, lateralGap, dInterval } from '../src/physics.js';
import { Road } from '../src/road.js';
import { REGIONS, VEHICLES } from '../src/config.js';

const road = new Road(REGIONS.scotland);
const idle = { steer: 0, throttle: 0, brake: 0, handbrake: false };

test('separating-axis overlap', () => {
  const A = { s: 0, d: 0, a: 0, hl: 2, hw: 1 };
  assert.ok(overlap(A, { s: 3.5, d: 0, a: 0, hl: 2, hw: 1 }));
  assert.equal(overlap(A, { s: 4.5, d: 0, a: 0, hl: 2, hw: 1 }), null);
  assert.equal(overlap(A, { s: 0, d: 2.5, a: 0, hl: 2, hw: 1 }), null);
  // a rotated box poking in at the corner
  assert.ok(overlap(A, { s: 2.6, d: 1.6, a: Math.PI / 4, hl: 1, hw: 0.5 }));
  const o = overlap(A, { s: 3.8, d: 0, a: 0, hl: 2, hw: 1 });
  assert.ok(o.ns < 0, 'pushes A back, away from B');
  assert.ok(Math.abs(o.depth - 0.2) < 1e-9);
});

test('lateral gap and d-interval', () => {
  const A = { s: 0, d: 0, a: 0, hl: 2, hw: 1 };
  const B = { s: 0, d: 3, a: 0, hl: 0.3, hw: 0.3 };
  assert.ok(Math.abs(lateralGap(A, B) - 1.7) < 1e-9);
  const [lo, hi] = dInterval({ s: 0, d: 0, a: Math.PI / 2, hl: 2, hw: 1 });
  assert.ok(Math.abs(lo + 2) < 1e-9 && Math.abs(hi - 2) < 1e-9);
});

test('accelerates, tops out, brakes, then reverses', () => {
  const car = new PlayerCar(VEHICLES.hatch, 100, 0.3);
  for (let i = 0; i < 60 * 3; i++) car.step(1 / 60, { ...idle, throttle: 1, steer: follow(car) }, road);
  assert.ok(car.v > 6, `speed after 3s: ${car.v}`);
  for (let i = 0; i < 60 * 30; i++) car.step(1 / 60, { ...idle, throttle: 1, steer: follow(car) }, road);
  assert.ok(car.v <= VEHICLES.hatch.maxSpeed + 1e-6);
  let stopped = false;
  for (let i = 0; i < 60 * 8; i++) {
    car.step(1 / 60, { ...idle, brake: 1 }, road);
    if (Math.abs(car.v) < 0.05) stopped = true;
  }
  assert.ok(stopped, 'came to a stop');
  assert.ok(car.v < -1, 'holding the brake then reverses');
  assert.ok(car.v >= -VEHICLES.hatch.reverseMax - 1e-6);
});

// steering that holds the car on the lane at offset d
function follow(car, d = 0.3) {
  const k = road.curvature(car.s + 3);
  const want = Math.atan(k * car.def.wheelbase) + (Math.atan2(d - car.d, 6) - car.ang) * 1.8;
  return Math.max(-1, Math.min(1, want / (car.def.maxSteer / (1 + Math.abs(car.v) / 11))));
}

test('the tractor is slow', () => {
  const t = new PlayerCar(VEHICLES.tractor, 100, 0.3);
  for (let i = 0; i < 60 * 30; i++) t.step(1 / 60, { ...idle, throttle: 1, steer: follow(t) }, road);
  assert.ok(t.v <= VEHICLES.tractor.maxSpeed + 1e-6 && t.v > 8.5, `tractor speed ${t.v}`);
});

test('the boundary holds and contact is reported', () => {
  const car = new PlayerCar(VEHICLES.suv, 300, 0);
  let hit = null;
  for (let i = 0; i < 60 * 4; i++) {
    const r = car.step(1 / 60, { ...idle, throttle: 0.6, steer: 1 }, road);
    if (r.left) hit = r.left;
    for (const w of [car.local(car.len / 2, car.wid / 2), car.local(-car.len / 2, car.wid / 2)]) {
      assert.ok(w.d <= road.leftBound(w.s) + 0.05, 'never through the wall');
    }
  }
  assert.ok(hit, 'reported a scrape on the left');
});

test('following the lane with no steering error keeps the same lateral offset', () => {
  const car = new PlayerCar(VEHICLES.estate, 200, 0.4);
  car.v = 8;
  for (let i = 0; i < 60 * 6; i++) {
    const k = road.curvature(car.s);
    // the steering that exactly matches the road's curvature
    const steer = Math.atan(k * car.def.wheelbase) / (car.def.maxSteer / (1 + Math.abs(car.v) / 11));
    car.steer = Math.atan(k * car.def.wheelbase);
    car.step(1 / 60, { ...idle, throttle: 0.3, steer }, road);
  }
  assert.ok(Math.abs(car.d - 0.4) < 0.35, `drifted to ${car.d}`);
});
