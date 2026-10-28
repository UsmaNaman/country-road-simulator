// "Send feedback" links: open the Google Form with a "Game details" answer filled in for the player.
import { FEEDBACK, GAME_VERSION, REGIONS, VEHICLES } from './config.js';

function device() {
  const ua = navigator.userAgent;
  const touch = window.matchMedia?.('(pointer: coarse)').matches;
  const kind = !touch ? 'Computer' : Math.min(screen.width, screen.height) >= 600 ? 'Tablet' : 'Phone';
  const os = /iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && touch) ? 'iOS' : /Android/.test(ua) ? 'Android' : /Mac OS X/.test(ua) ? 'macOS' : /Windows/.test(ua) ? 'Windows' : /CrOS/.test(ua) ? 'ChromeOS' : /Linux/.test(ua) ? 'Linux' : 'other';
  // unrecognised browsers report the end of their user agent, which usually names them
  const browser = /Edg\//.test(ua) ? 'Edge' : /Firefox\//.test(ua) ? 'Firefox' : /CriOS|Chrome\//.test(ua) ? 'Chrome' : /Safari\//.test(ua) ? 'Safari' : `other (${ua.slice(-60)})`;
  return `${kind}, ${os}, ${browser}, ${innerWidth}×${innerHeight}`;
}

// sim is optional: from the menu there is no run to describe
export function feedbackUrl(state, sim, where) {
  const fmt = (t) => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;
  const bits = [`v${GAME_VERSION}`, where];
  if (sim) {
    const pct = Math.round(Math.min(1, Math.max(0, sim.player.s / sim.road.length)) * 100);
    bits.push(`${sim.region.title}${state.random ? ` (random #${state.seed})` : ''}`, sim.vehicle.name, `${pct}% along`, fmt(sim.time), `score ${Math.round(sim.summary?.final ?? sim.score.total)}`, `condition ${Math.round(sim.health)}%`);
    if (sim.failReason) bits.push(`ended: ${sim.failReason}`);
  } else {
    bits.push(REGIONS[state.region]?.title, VEHICLES[state.vehicle]?.name);
  }
  bits.push(device());
  const u = new URL(FEEDBACK.url);
  if (FEEDBACK.detailsEntry) {
    u.searchParams.set('usp', 'pp_url');
    u.searchParams.set(FEEDBACK.detailsEntry, bits.filter(Boolean).join(' · '));
  }
  return u.toString();
}

// point every [data-feedback] link at the form, or hide them all while no form is set
export function updateFeedbackLinks(state, sim, where) {
  for (const a of document.querySelectorAll('[data-feedback]')) {
    a.hidden = !FEEDBACK.url;
    if (FEEDBACK.url) a.href = feedbackUrl(state, sim, where);
  }
}
