// The database keeps its own copy of the leaderboard rules (supabase/migrations). These checks fail
// when the game changes and the copy doesn't, which would otherwise quietly refuse real top scores.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { Road } from '../src/road.js';
import { Score, summarise } from '../src/scoring.js';
import { REGIONS, REGION_ORDER, VEHICLES, VEHICLE_ORDER } from '../src/config.js';
import { RUDE, NAME_RE, nameProblem } from '../src/leaderboard.js';

const sql = readFileSync(new URL('../supabase/migrations/20261029180000_leaderboard.sql', import.meta.url), 'utf8');

test('score limits match the game: max = 2 × par, min time = 1.4 × length ÷ top speed', () => {
  const limits = {};
  for (const [, route, vehicle, max, min] of sql.matchAll(/\('(\w+)', '(\w+)', (\d+), (\d+)\)/g)) limits[`${route}.${vehicle}`] = { max: +max, min: +min };
  for (const r of REGION_ORDER) {
    const road = new Road(REGIONS[r]);
    for (const v of VEHICLE_ORDER) {
      const lim = limits[`${r}.${v}`];
      assert.ok(lim, `no score_limits row for ${r} ${v}`);
      const { par } = summarise({ score: new Score(), road, vehicle: VEHICLES[v], health: 100, time: 0, finished: true });
      assert.equal(lim.max, 2 * par, `${r} ${v}: par changed, update max_score in score_limits`);
      assert.ok(Math.abs(lim.min - (1.4 * road.length) / VEHICLES[v].maxSpeed) <= 1, `${r} ${v}: route length or top speed changed, update min_time_s`);
    }
  }
});

test('name rules match the database', () => {
  assert.ok(sql.includes(`!~ '${RUDE.source}'`), 'rude-word list differs from name_ok() in the SQL');
  assert.ok(sql.includes(`'${NAME_RE.source.replace(/'/g, "''")}'`), 'name pattern differs from name_ok() in the SQL');
  assert.equal(nameProblem('Brrap'), null);
  assert.ok(nameProblem('5hit'), 'leetspeak rude words are caught');
});
