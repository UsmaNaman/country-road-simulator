import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Road } from '../src/road.js';
import { REGIONS } from '../src/config.js';

for (const id of Object.keys(REGIONS)) {
  const region = REGIONS[id];

  test(`${id}: route geometry is sane`, () => {
    const road = new Road(region);
    assert.equal(road.n, Math.floor(region.length) + 1);
    for (let i = 0; i < road.n; i++) {
      for (const arr of [road.x, road.z, road.y, road.th, road.wL, road.wR, road.bL, road.bR]) assert.ok(Number.isFinite(arr[i]));
      // heading never turns back on itself, so the lane can't cross itself
      assert.ok(Math.abs(road.th[i]) < Math.PI / 2, `heading ${road.th[i]} at ${i}`);
      // boundaries sit outside the tarmac
      assert.ok(road.bL[i] >= road.wL[i] && road.bR[i] >= road.wR[i]);
      assert.ok(road.wL[i] >= road.hw[i] - 1e-6 && road.wR[i] >= road.hw[i] - 1e-6);
    }
    // gentle enough to drive
    for (let i = 1; i < road.n; i++) assert.ok(Math.abs(road.y[i] - road.y[i - 1]) < 0.2);
  });

  test(`${id}: passing places, encounters and features`, () => {
    const road = new Road(region);
    assert.ok(road.passingPlaces.length >= 8, 'plenty of passing places');
    for (let k = 1; k < road.passingPlaces.length; k++) {
      assert.ok(road.passingPlaces[k].s0 > road.passingPlaces[k - 1].s1, 'passing places do not overlap');
    }
    for (const pp of road.passingPlaces) {
      const w = pp.side > 0 ? road.leftEdge(pp.mid) : road.rightEdge(pp.mid);
      assert.ok(w > road.baseHalf(pp.mid) + pp.extra * 0.9, 'bay is actually wider');
    }
    const types = road.encounters.map((e) => e.type);
    for (const m of region.encounters.mandatory) assert.ok(types.includes(m), `mandatory ${m}`);
    for (const e of road.encounters) assert.ok(e.s > 150 && e.s < road.village.s0, `encounter at ${e.s}`);
    assert.equal(road.fords.length, region.features.fords);
  });

  test(`${id}: world/frenet round trip`, () => {
    const road = new Road(region);
    for (const s of [50, 400, 1234.5, road.length - 100]) {
      for (const d of [-1.5, 0, 2]) {
        const w = road.toWorld(s, d);
        const nr = road.nearest(w.x, w.z);
        assert.ok(Math.abs(nr.s - s) < 1.01, `s ${nr.s} vs ${s}`);
        assert.ok(Math.abs(nr.d - d) < 0.15, `d ${nr.d} vs ${d}`);
      }
    }
  });
}

test('routes are deterministic per seed and differ between seeds', () => {
  const a = new Road(REGIONS.england, 99);
  const b = new Road(REGIONS.england, 99);
  const c = new Road(REGIONS.england, 100);
  assert.deepEqual(Array.from(a.x.slice(0, 500)), Array.from(b.x.slice(0, 500)));
  assert.deepEqual(a.encounters, b.encounters);
  assert.notDeepEqual(Array.from(a.x.slice(0, 2000)), Array.from(c.x.slice(0, 2000)));
});

test('advisory speed is lower on tight bends', () => {
  const road = new Road(REGIONS.england);
  let tight = 0;
  let straight = 0;
  for (let s = 100; s < road.length - 100; s += 5) {
    const k = Math.abs(road.curvature(s + 10));
    if (k > 1 / 30) tight = road.advisorySpeed(s);
    if (road.maxCurvatureAhead(s, 40) < 1 / 400) straight = road.advisorySpeed(s);
  }
  assert.ok(tight > 0 && straight > 0);
  assert.ok(tight < straight);
});
