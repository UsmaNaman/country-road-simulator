// World leaderboard: each route's top runs, shared by every player.
// Everything here fails quietly. No network, a paused database or a refused score just means
// no leaderboard on screen, never a broken game.
import { LEADERBOARD, GAME_VERSION } from './config.js';

async function rpc(fn, body, timeoutMs = 10000) {
  if (!LEADERBOARD.url) return null;
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), timeoutMs);
  try {
    const res = await fetch(`${LEADERBOARD.url}/rest/v1/rpc/${fn}`, {
      method: 'POST',
      headers: { apikey: LEADERBOARD.key, 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: ctl.signal,
    });
    return res.ok ? await res.json() : null;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

// [{ name, vehicle, score, time_s, created_at }], best per name, or null when unreachable
export async function topScores(route, limit = 10) {
  const rows = await rpc('top_scores', { p_route: route, p_limit: limit });
  return Array.isArray(rows) ? rows : null;
}

// { ok: true, rank } | { ok: false, reason: 'name' | 'invalid' | 'busy' | 'offline' }
export async function submitScore({ name, route, vehicle, score, time, condition }) {
  const r = await rpc('submit_score', {
    p_name: name,
    p_route: route,
    p_vehicle: vehicle,
    p_score: Math.round(score),
    p_time_s: Math.round(time),
    p_condition: Math.round(condition),
    p_version: GAME_VERSION,
  });
  return r && typeof r.ok === 'boolean' ? r : { ok: false, reason: 'offline' };
}

// The same rules the database applies (supabase/migrations), checked first so players get a
// helpful message without a round trip. Returns a problem to show, or null if the name is fine.
const RUDE = /(fuck|shit|cunt|bitch|wank|twat|pussy|nigg|fagg|slut|whore|rapist|nazi|hitler|retard|spastic|kike|bellend|tosser|bollock|asshole|dildo|porn)/;
export function nameProblem(raw) {
  const name = raw.trim().replace(/\s+/g, ' ');
  if (name.length < 2) return 'At least 2 characters, please.';
  if (name.length > 16) return '16 characters at most.';
  if (!/^[A-Za-z0-9][A-Za-z0-9 _.'-]{0,14}[A-Za-z0-9.]$/.test(name)) return 'Letters, numbers, spaces and . _ \' - only.';
  const flat = name.toLowerCase().replace(/[013457@$]/g, (c) => ({ 0: 'o', 1: 'i', 3: 'e', 4: 'a', 5: 's', 7: 't', '@': 'a', $: 's' })[c]).replace(/[^a-z]/g, '');
  if (RUDE.test(flat)) return 'Let’s keep it family-friendly.';
  return null;
}
