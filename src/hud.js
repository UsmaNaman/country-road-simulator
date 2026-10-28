// DOM heads-up display: score, speed, condition, progress, toasts, hints, wave prompt and minimap.
import { MPH } from './config.js';

const $ = (id) => document.getElementById(id);
const fmtTime = (t) => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;

export class HUD {
  constructor() {
    this.root = $('hud');
    this.el = {
      score: $('hud-score'),
      streak: $('hud-streak'),
      speed: $('hud-speed'),
      gear: $('hud-gear'),
      advisory: $('hud-advisory'),
      health: $('hud-health'),
      healthPct: $('hud-health-pct'),
      dest: $('hud-dest'),
      bar: $('hud-progress-fill'),
      car: $('hud-progress-car'),
      dist: $('hud-dist'),
      time: $('hud-time'),
      toasts: $('toasts'),
      hint: $('hint'),
      hintIcon: $('hint-icon'),
      hintText: $('hint-text'),
      prompt: $('prompt'),
      promptText: $('prompt-text'),
      promptBar: $('prompt-bar'),
      hand: $('wave-hand'),
      banner: $('banner'),
      map: $('minimap'),
      cam: $('hud-cam'),
    };
    this.ctx = this.el.map.getContext('2d');
    this.hintsOn = true;
    this.last = {};
    this.frame = 0;
  }

  show(on) {
    this.root.hidden = !on;
  }

  reset(sim) {
    this.el.toasts.innerHTML = '';
    this.prompt(null);
    this.el.dest.textContent = sim.region.destination;
    this.last = {};
    this.banner(sim.region.title, sim.region.goal);
  }

  set(key, el, value) {
    if (this.last[key] !== value) {
      this.last[key] = value;
      el.textContent = value;
    }
  }

  banner(title, sub) {
    const b = this.el.banner;
    b.innerHTML = `<div class="banner-title"></div><div class="banner-sub"></div>`;
    b.firstChild.textContent = title;
    b.lastChild.textContent = sub;
    b.classList.remove('show');
    void b.offsetWidth;
    b.classList.add('show');
  }

  update(sim, game) {
    this.frame++;
    const p = sim.player;
    const mph = Math.round(Math.abs(p.v) * MPH);
    this.set('score', this.el.score, sim.score.total.toLocaleString('en-GB'));
    this.set('streak', this.el.streak, `Courtesy ×${(sim.score.mult * sim.score.streakMult).toFixed(2)}`);
    this.set('speed', this.el.speed, String(mph));
    this.set('gear', this.el.gear, p.v < -0.2 ? 'R' : Math.abs(p.v) < 0.2 ? 'N' : 'D');
    const adv = Math.round((sim.advisory * MPH) / 5) * 5;
    this.set('adv', this.el.advisory, `Sensible: ${adv} mph`);
    const over = Math.abs(p.v) > sim.advisory * 1.12 + 1.5;
    if (this.last.over !== over) {
      this.last.over = over;
      this.el.speed.parentElement.classList.toggle('over', over);
    }
    const hp = Math.round(sim.health);
    if (this.last.hp !== hp) {
      this.last.hp = hp;
      this.el.health.style.width = `${hp}%`;
      this.el.health.style.background = hp > 60 ? 'var(--good)' : hp > 30 ? 'var(--warn)' : 'var(--bad)';
      this.el.healthPct.textContent = `${hp}%`;
    }
    const frac = Math.min(1, p.s / sim.road.finishS);
    this.el.bar.style.width = `${frac * 100}%`;
    this.el.car.style.left = `${frac * 100}%`;
    const left = Math.max(0, sim.road.finishS - p.s);
    this.set('dist', this.el.dist, left > 400 ? `${(left / 1609).toFixed(1)} mi to go` : `${Math.round(left / 0.9144)} yds to go`);
    this.set('time', this.el.time, `${fmtTime(sim.time)} / ${fmtTime(sim.region.targetTime)}`);
    if (this.last.late !== sim.time > sim.region.targetTime) {
      this.last.late = sim.time > sim.region.targetTime;
      this.el.time.classList.toggle('late', this.last.late);
    }
    // hint
    const h = this.hintsOn ? sim.currentHint() : null;
    const key = h ? h.text : '';
    if (this.last.hint !== key) {
      this.last.hint = key;
      this.el.hint.classList.toggle('show', !!h);
      this.el.hint.classList.toggle('urgent', !!h?.urgent);
      if (h) {
        this.el.hintIcon.textContent = h.icon || 'ℹ️';
        this.el.hintText.textContent = h.text;
      }
    }
    // wave countdown
    if (sim.waveWindow) {
      const left = Math.max(0, sim.waveWindow.until - sim.time) / 4.5;
      this.el.promptBar.style.transform = `scaleX(${left})`;
    }
    this.drawMap(sim, game);
  }

  points(pts, label, detail) {
    this.toast(`${label}${detail ? ' ' + detail : ''}`, pts >= 0 ? 'good' : 'bad', pts);
  }

  toast(text, kind = 'info', pts = null) {
    const box = this.el.toasts;
    const t = document.createElement('div');
    t.className = `toast ${kind}`;
    if (pts !== null) {
      const b = document.createElement('b');
      b.textContent = (pts > 0 ? '+' : '') + pts;
      t.appendChild(b);
    }
    const s = document.createElement('span');
    s.textContent = text;
    t.appendChild(s);
    box.prepend(t);
    while (box.children.length > 5) box.lastChild.remove();
    setTimeout(() => t.classList.add('out'), kind === 'info' ? 3600 : 2600);
    setTimeout(() => t.remove(), kind === 'info' ? 4200 : 3200);
  }

  prompt(text) {
    const el = this.el.prompt;
    if (!text) {
      el.classList.remove('show');
      return;
    }
    this.el.promptText.textContent = text;
    this.el.promptBar.style.transform = 'scaleX(1)';
    el.classList.add('show');
  }

  wave() {
    const h = this.el.hand;
    h.classList.remove('go');
    void h.offsetWidth;
    h.classList.add('go');
  }

  camLabel(name) {
    const el = this.el.cam;
    el.textContent = { chase: 'Chase cam', cab: 'Driver’s seat', high: 'High cam' }[name] || name;
    el.classList.remove('show');
    void el.offsetWidth;
    el.classList.add('show');
  }

  drawMap(sim, game) {
    if (this.frame % 2) return;
    const cv = this.el.map;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const W = cv.clientWidth;
    const H = cv.clientHeight;
    if (!W) return;
    if (cv.width !== Math.round(W * dpr)) {
      cv.width = Math.round(W * dpr);
      cv.height = Math.round(H * dpr);
    }
    const g = this.ctx;
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    g.clearRect(0, 0, W, H);
    const road = sim.road;
    const p = sim.player;
    const pw = road.toWorld(p.s, p.d);
    const th = pw.theta + p.ang;
    const sn = Math.sin(th);
    const cs = Math.cos(th);
    const range = 75;
    const scale = (H * 0.5) / range;
    const cx = W / 2;
    const cy = H * 0.68;
    const proj = (x, z) => {
      const dx = x - pw.x;
      const dz = z - pw.z;
      const a = dx * sn + dz * cs;
      const b = -dx * cs + dz * sn;
      return [cx + b * scale, cy - a * scale];
    };
    const tmp = {};
    const edge = (side) => {
      const pts = [];
      for (let s = p.s - range * 0.6; s <= p.s + range * 1.3; s += 2) {
        if (s < 0 || s > road.length) continue;
        const d = side > 0 ? road.leftEdge(s) : -road.rightEdge(s);
        road.toWorld(s, d, tmp);
        pts.push(proj(tmp.x, tmp.z));
      }
      return pts;
    };
    const L = edge(1);
    const Rr = edge(-1);
    g.beginPath();
    L.forEach(([x, y], i) => (i ? g.lineTo(x, y) : g.moveTo(x, y)));
    for (let i = Rr.length - 1; i >= 0; i--) g.lineTo(Rr[i][0], Rr[i][1]);
    g.closePath();
    g.fillStyle = 'rgba(70,70,74,0.95)';
    g.strokeStyle = 'rgba(255,255,255,0.35)';
    g.lineWidth = 3;
    g.stroke();
    g.fill();
    // passing places
    g.font = '700 9px Overpass, sans-serif';
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    for (const pp of road.passingPlaces) {
      if (pp.mid < p.s - range * 0.6 || pp.mid > p.s + range * 1.3) continue;
      road.toWorld(pp.mid, pp.side * (road.baseHalf(pp.mid) + pp.extra * 1.6), tmp);
      const [x, y] = proj(tmp.x, tmp.z);
      g.fillStyle = '#ffffff';
      g.beginPath();
      g.moveTo(x, y - 6);
      g.lineTo(x + 6, y);
      g.lineTo(x, y + 6);
      g.lineTo(x - 6, y);
      g.closePath();
      g.fill();
      g.fillStyle = '#111';
      g.fillText('P', x, y + 0.5);
    }
    // everyone else
    for (const e of sim.entities) {
      if (Math.abs(e.s - p.s) > range * 1.3) continue;
      road.toWorld(e.s, e.d, tmp);
      const [x, y] = proj(tmp.x, tmp.z);
      const c =
        e.kind === 'npc'
          ? e.category === 'vehicle'
            ? '#ff6b4a'
            : '#ffd23f'
          : e.kind === 'sheep'
            ? '#f4f1e8'
            : e.kind === 'cow'
              ? '#c98b5a'
              : e.kind === 'person'
                ? '#ffd23f'
                : '#bbbbbb';
      const r = e.kind === 'npc' && e.category === 'vehicle' ? 3.6 : 2.4;
      g.fillStyle = c;
      g.beginPath();
      g.arc(x, y, r, 0, Math.PI * 2);
      g.fill();
    }
    // the player
    g.save();
    g.translate(cx, cy);
    g.fillStyle = '#4ad66d';
    g.strokeStyle = '#0b2a14';
    g.lineWidth = 1.5;
    g.beginPath();
    g.moveTo(0, -7);
    g.lineTo(5, 6);
    g.lineTo(0, 3);
    g.lineTo(-5, 6);
    g.closePath();
    g.fill();
    g.stroke();
    g.restore();
  }
}
