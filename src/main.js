// Entry point: menu, game lifecycle, pause and results screens, main loop.
import * as THREE from 'three';
import { Game } from './game.js';
import { HUD } from './hud.js';
import { Input } from './input.js';
import { AudioSys } from './audio.js';
import { REGIONS, REGION_ORDER, VEHICLES, VEHICLE_ORDER } from './config.js';
import { updateFeedbackLinks } from './feedback.js';

const $ = (id) => document.getElementById(id);
const params = new URLSearchParams(location.search);

// ---------- errors are shown on screen rather than failing silently ----------
function showError(msg) {
  const el = $('error');
  el.hidden = false;
  el.textContent = String(msg).slice(0, 800);
}
window.addEventListener('error', (e) => showError(e.error?.stack || e.message));
window.addEventListener('unhandledrejection', (e) => showError(e.reason?.stack || e.reason));

// ---------- persistence (best-effort: storage can be unavailable) ----------
const store = {
  get(k, def) {
    try {
      const v = localStorage.getItem('crs.' + k);
      return v === null ? def : JSON.parse(v);
    } catch {
      return def;
    }
  },
  set(k, v) {
    try {
      localStorage.setItem('crs.' + k, JSON.stringify(v));
    } catch {
      /* private mode etc. */
    }
  },
};

// ---------- renderer ----------
const canvas = $('game');
let renderer;
try {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance', preserveDrawingBuffer: params.has('shot') });
} catch (e) {
  showError('This browser could not start 3D graphics (WebGL), so the game cannot run here. Try an up-to-date Chrome, Edge, Firefox or Safari, and check that hardware acceleration is switched on.');
  throw e;
}
// phones and tablets get a lighter setup: fewer pixels and no shadow pass
const lowPower = window.matchMedia?.('(pointer: coarse)').matches || params.get('quality') === 'low';
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, lowPower ? 1.25 : 1.5));
renderer.setSize(window.innerWidth, window.innerHeight, false);
renderer.shadowMap.enabled = !lowPower;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;

const hud = new HUD();
const input = new Input();
input.bindTouch($('touch'));
const audio = new AudioSys();

const state = {
  mode: 'menu',
  region: REGIONS[store.get('region', 'england')] ? store.get('region', 'england') : 'england',
  vehicle: VEHICLES[store.get('vehicle', 'hatch')] ? store.get('vehicle', 'hatch') : 'hatch',
  colour: store.get('colour', 0),
  random: store.get('random', false),
  seed: null,
  game: null,
  paused: false,
  hints: store.get('hints', true),
  mirror: store.get('mirror', true),
  sound: store.get('sound', true),
};
audio.setMuted(!state.sound);
hud.hintsOn = state.hints;

// ---------- menu ----------
const DIFFICULTY = { england: 3, wales: 2, scotland: 2 };
const VEHICLE_SVG = {
  hatch: '<path d="M8 33 L12 22 L24 15 L42 15 L52 23 L60 25 L60 33 Z"/><path d="M26 18 L40 18 L47 23 L22 23 Z" fill="#cfe3ef"/><circle cx="19" cy="34" r="5.5" fill="#222"/><circle cx="50" cy="34" r="5.5" fill="#222"/>',
  estate: '<path d="M4 33 L8 22 L20 15 L58 15 L60 24 L62 25 L62 33 Z"/><path d="M22 18 L56 18 L57 23 L18 23 Z" fill="#cfe3ef"/><circle cx="16" cy="34" r="5.5" fill="#222"/><circle cx="51" cy="34" r="5.5" fill="#222"/>',
  suv: '<path d="M4 33 L6 18 L18 11 L54 11 L59 19 L62 21 L62 33 Z"/><path d="M20 14 L52 14 L56 19 L16 19 Z" fill="#cfe3ef"/><circle cx="16" cy="34" r="6.5" fill="#222"/><circle cx="51" cy="34" r="6.5" fill="#222"/>',
  tractor: '<rect x="10" y="6" width="18" height="20" rx="2" fill="#cfe3ef" stroke="currentColor" stroke-width="3"/><path d="M26 17 L56 17 L58 28 L26 28 Z"/><rect x="47" y="8" width="3" height="10" fill="#555"/><circle cx="19" cy="31" r="10" fill="#222"/><circle cx="19" cy="31" r="4" fill="#bbb"/><circle cx="52" cy="34" r="5.5" fill="#222"/>',
};

function bestFor(region, vehicle) {
  return store.get(`best.${region}.${vehicle}`, 0);
}

function renderMenu() {
  const rbox = $('regions');
  rbox.innerHTML = '';
  for (const id of REGION_ORDER) {
    const r = REGIONS[id];
    const best = Math.max(...VEHICLE_ORDER.map((v) => bestFor(id, v)));
    const b = document.createElement('button');
    b.className = 'card' + (state.region === id ? ' sel' : '');
    b.innerHTML = `
      <div class="stripe" style="background:linear-gradient(90deg, ${r.stripe[0]} 50%, ${r.stripe[1]} 50%)"></div>
      <div class="kicker">${r.name}</div>
      <div class="name"></div>
      <p class="blurb"></p>
      <div class="stat"><span>Tightness</span><span class="dots">${dots(DIFFICULTY[id], 3)}</span></div>
      <div class="best">${best ? 'Best: ' + best.toLocaleString('en-GB') : '&nbsp;'}</div>`;
    b.querySelector('.name').textContent = r.title;
    b.querySelector('.blurb').textContent = r.blurb;
    b.onclick = () => {
      state.region = id;
      store.set('region', id);
      renderMenu();
      startAttract();
    };
    rbox.appendChild(b);
  }
  const vbox = $('vehicles');
  vbox.innerHTML = '';
  for (const id of VEHICLE_ORDER) {
    const v = VEHICLES[id];
    const col = v.colors[Math.min(state.colour, v.colors.length - 1)];
    const best = bestFor(state.region, id);
    const b = document.createElement('button');
    b.className = 'card' + (state.vehicle === id ? ' sel' : '');
    b.innerHTML = `
      <svg viewBox="0 0 66 42" style="color:${state.vehicle === id ? col : v.colors[0]}" fill="currentColor" aria-hidden="true">${VEHICLE_SVG[id]}</svg>
      <div class="name"></div>
      <div class="stat"><span>Width</span><span class="dots">${dots(v.stats.width, 5)}</span></div>
      <div class="stat"><span>Top speed</span><span class="dots">${dots(v.stats.speed, 5)}</span></div>
      <div class="stat"><span>Toughness</span><span class="dots">${dots(v.stats.toughness, 5)}</span></div>
      <span class="mult">Score ×${v.mult.toFixed(2)}</span>
      ${best ? `<div class="best">Best here: ${best.toLocaleString('en-GB')}</div>` : ''}`;
    b.querySelector('.name').textContent = v.name;
    b.title = v.blurb;
    b.onclick = () => {
      state.vehicle = id;
      state.colour = Math.min(state.colour, v.colors.length - 1);
      store.set('vehicle', id);
      renderMenu();
    };
    vbox.appendChild(b);
  }
  const cbox = $('colours');
  cbox.innerHTML = '<span class="lbl">Paint:</span>';
  VEHICLES[state.vehicle].colors.forEach((c, i) => {
    const s = document.createElement('button');
    s.className = 'swatch' + (state.colour === i ? ' sel' : '');
    s.style.background = c;
    s.setAttribute('aria-label', `Colour ${i + 1}`);
    s.onclick = () => {
      state.colour = i;
      store.set('colour', i);
      renderMenu();
    };
    cbox.appendChild(s);
  });
  $('random-route').checked = state.random;
}

function dots(n, of) {
  let s = '';
  for (let i = 0; i < of; i++) s += `<i class="${i < n ? 'on' : ''}"></i>`;
  return s;
}

$('random-route').onchange = (e) => {
  state.random = e.target.checked;
  store.set('random', state.random);
};

// ---------- game lifecycle ----------
function disposeGame() {
  if (state.game) {
    state.game.dispose();
    state.game = null;
  }
}

let attractTimer = 0;
function startAttract() {
  clearTimeout(attractTimer);
  attractTimer = setTimeout(() => {
    if (state.mode !== 'menu') return;
    disposeGame();
    state.game = new Game({ renderer, regionId: state.region, vehicleId: 'estate', colour: '#5b6770', attract: true });
    // skip the first few seconds so the backdrop opens mid-drive
    for (let i = 0; i < 40; i++) state.game.update(0.1, null);
  }, 60);
}

function showScreen(id) {
  for (const s of ['menu', 'pause', 'results', 'loading']) $(s).hidden = s !== id;
}

function startGame({ sameSeed = false } = {}) {
  audio.init();
  document.activeElement?.blur(); // so Space (handbrake) can't re-press a menu button
  window.focus(); // when embedded in a frame, make sure key presses come to us
  showScreen('loading');
  state.mode = 'loading';
  setTimeout(() => {
    disposeGame();
    if (!sameSeed) state.seed = state.random ? Math.floor(Math.random() * 1e6) + 1 : undefined;
    const v = VEHICLES[state.vehicle];
    state.game = new Game({
      renderer,
      regionId: state.region,
      vehicleId: state.vehicle,
      colour: v.colors[Math.min(state.colour, v.colors.length - 1)],
      audio,
      hud,
      seed: state.seed,
      autopilot: params.get('auto') === '1',
      forceEncounter: params.get('enc'),
      onOver: (type, summary, sim) => setTimeout(() => showResults(type, summary, sim), type === 'fail' ? 1800 : 1200),
    });
    state.game.mirrorOn = state.mirror;
    hud.reset(state.game.sim);
    hud.show(true);
    showScreen(null);
    state.mode = 'playing';
    state.paused = false;
    // test hook: start partway along the route (scenery checks), skipping encounters already behind
    if (params.get('at')) {
      const sim = state.game.sim;
      sim.player.s = Number(params.get('at'));
      sim.player.d = Number(params.get('d') || sim.player.d);
      sim.encounters = sim.encounters.filter((e) => e.s > sim.player.s + 240);
      state.game.snapCamera();
    }
    const ff = Number(params.get('ff') || 0);
    for (let t = 0; t < ff; t += 0.1) state.game.update(0.1, idleInput());
    if (params.get('cam')) while (['chase', 'cab', 'high'][state.game.camIndex] !== params.get('cam')) state.game.cycleCamera();
  }, 40);
}

function showResults(type, summary, sim) {
  if (state.mode !== 'playing') return;
  state.mode = 'results';
  const key = `best.${state.region}.${state.vehicle}`;
  const prev = store.get(key, 0);
  const isBest = type === 'finish' && summary.final > prev;
  if (isBest && !state.random) store.set(key, summary.final);
  $('res-stars').innerHTML = [0, 1, 2].map((i) => `<span class="${i < summary.stars ? '' : 'off'}">★</span>`).join('');
  $('res-title').textContent = summary.title;
  $('res-sub').textContent =
    type === 'finish'
      ? `${sim.region.title} in the ${sim.vehicle.name.toLowerCase()} · ${fmt(sim.time)} · ${Math.round(sim.health)}% condition`
      : `${sim.failReason} Have another go?`;
  $('res-score').textContent = summary.final.toLocaleString('en-GB');
  $('res-best').textContent = state.random ? 'Random route: best scores not recorded' : isBest ? '🏆 New personal best!' : prev ? `Your best: ${prev.toLocaleString('en-GB')}` : '';
  const good = $('res-good');
  const bad = $('res-bad');
  good.innerHTML = '';
  bad.innerHTML = '';
  for (const t of sim.score.entries()) {
    const li = document.createElement('li');
    const s = document.createElement('span');
    s.textContent = t.label + (t.count > 1 ? ` ×${t.count}` : '');
    const b = document.createElement('b');
    b.className = t.points >= 0 ? 'pos' : 'neg';
    b.textContent = (t.points > 0 ? '+' : '') + t.points.toLocaleString('en-GB');
    li.append(s, b);
    (t.points >= 0 ? good : bad).appendChild(li);
  }
  if (!good.children.length) good.innerHTML = '<li><span>Nothing yet. Patience pays!</span></li>';
  if (!bad.children.length) bad.innerHTML = '<li><span>Not a scratch. Impeccable.</span></li>';
  const bonus = $('res-bonus');
  bonus.innerHTML = '';
  for (const bo of summary.bonuses) {
    const li = document.createElement('li');
    const s = document.createElement('span');
    s.textContent = bo.label;
    const b = document.createElement('b');
    b.textContent = '+' + bo.points.toLocaleString('en-GB');
    li.append(s, b);
    bonus.appendChild(li);
  }
  hud.prompt(null);
  updateFeedbackLinks(state, sim, type === 'finish' ? 'finished' : 'run ended');
  showScreen('results');
}

const fmt = (t) => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;

function toMenu() {
  state.mode = 'menu';
  state.paused = false;
  hud.show(false);
  showScreen('menu');
  renderMenu();
  updateFeedbackLinks(state, null, 'menu');
  startAttract();
  audio.quiet();
}

function setPaused(p) {
  if (state.mode !== 'playing') return;
  state.paused = p;
  $('pause').hidden = !p;
  if (p) {
    audio.quiet();
    updateFeedbackLinks(state, state.game.sim, 'paused');
  }
}

$('go').onclick = () => startGame();
$('again').onclick = () => startGame({ sameSeed: true });
$('menu-btn').onclick = toMenu;
$('resume').onclick = () => setPaused(false);
$('restart').onclick = () => startGame({ sameSeed: true });
$('quit').onclick = toMenu;
$('pause-btn').onclick = () => setPaused(!state.paused);
$('opt-hints').checked = state.hints;
$('opt-mirror').checked = state.mirror;
$('opt-sound').checked = state.sound;
$('opt-hints').onchange = (e) => {
  state.hints = hud.hintsOn = e.target.checked;
  store.set('hints', state.hints);
};
$('opt-mirror').onchange = (e) => {
  state.mirror = e.target.checked;
  if (state.game) state.game.mirrorOn = state.mirror;
  store.set('mirror', state.mirror);
};
$('opt-sound').onchange = (e) => {
  state.sound = e.target.checked;
  audio.setMuted(!state.sound);
  store.set('sound', state.sound);
};
document.addEventListener('visibilitychange', () => {
  if (document.hidden) setPaused(true);
});
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  state.game?.resize();
});

// browsers only allow sound after a user gesture
for (const ev of ['pointerdown', 'keydown']) window.addEventListener(ev, () => audio.init(), { passive: true });

const idleInput = () => ({ steer: 0, throttle: 0, brake: 0, handbrake: false, horn: false, wave: false });

// ---------- main loop ----------
let last = performance.now();
let frames = 0;
let loopErrors = 0;
function loop(now) {
  // schedule the next frame first, so one bad frame can never freeze the game
  requestAnimationFrame(loop);
  try {
    frame(now);
  } catch (e) {
    if (loopErrors++ < 3) showError(e.stack || e.message);
  }
}

function frame(now) {
  const dt = Math.min(0.1, (now - last) / 1000);
  last = now;
  const inp = input.read();
  if (state.mode === 'playing') {
    if (inp.pause) setPaused(!state.paused);
    if (inp.mute) {
      state.sound = !state.sound;
      audio.setMuted(!state.sound);
      $('opt-sound').checked = state.sound;
      hud.toast(state.sound ? 'Sound on' : 'Sound off', 'info');
    }
    if (inp.hints) {
      state.hints = hud.hintsOn = !state.hints;
      $('opt-hints').checked = state.hints;
      hud.toast(state.hints ? 'Hints on' : 'Hints off', 'info');
    }
    if (inp.camera && state.game && !state.paused) hud.camLabel(state.game.cycleCamera());
    if (inp.mirror && state.game) {
      state.mirror = state.game.mirrorOn = !state.game.mirrorOn;
      $('opt-mirror').checked = state.mirror;
    }
  }
  const g = state.game;
  if (g) {
    if (state.mode === 'menu' || (state.mode === 'playing' && !state.paused) || state.mode === 'results') {
      g.update(dt, state.mode === 'playing' ? inp : idleInput());
    }
    if (params.has('stats')) {
      renderer.info.autoReset = false;
      renderer.info.reset();
    }
    g.render();
  }
  frames++;
  if (frames === 30) window.__ready = true;
  if (params.has('stats') && frames % 5 === 0 && frames < 60) console.log('render stats', frames, JSON.stringify(renderer.info.render), JSON.stringify(renderer.info.memory));
}

// ---------- boot ----------
async function boot() {
  window.__crsBooted = true;
  renderMenu();
  updateFeedbackLinks(state, null, 'menu');
  // the menu's link describes whatever route and vehicle are picked at the moment it's pressed
  for (const ev of ['pointerdown', 'focus']) $('menu').querySelector('[data-feedback]').addEventListener(ev, () => updateFeedbackLinks(state, null, 'menu'));
  requestAnimationFrame(loop);
  // fonts are used in sign textures; give them a moment, but never wait long
  await Promise.race([document.fonts?.ready, new Promise((r) => setTimeout(r, 1500))]);
  if (params.get('play')) {
    const r = params.get('play');
    if (REGIONS[r]) state.region = r;
    const c = params.get('car');
    if (VEHICLES[c]) state.vehicle = c;
    if (params.get('seed')) {
      state.seed = Number(params.get('seed'));
      startGame({ sameSeed: true });
    } else startGame();
  } else {
    showScreen('menu');
    startAttract();
  }
}
boot();
window.__crs = state;
