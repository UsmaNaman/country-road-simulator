// Procedural canvas textures: tarmac, grass, hedges, dry-stone walls, road signs, decals.
import * as THREE from 'three';
import { RNG } from './rng.js';

const cache = new Map();
const FONT = '"Overpass", "Helvetica Neue", Arial, sans-serif';

function makeCanvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return [c, c.getContext('2d')];
}

function toTexture(c, { repeat = true, srgb = true } = {}) {
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = 8;
  t.needsUpdate = true;
  return t;
}

function cached(key, fn) {
  if (!cache.has(key)) cache.set(key, fn());
  return cache.get(key);
}

const hsl = (h, s, l, a = 1) => `hsla(${h}, ${s}%, ${l}%, ${a})`;

export function tarmacTexture(tone = 0) {
  return cached('tarmac' + tone, () => {
    const S = 512;
    const [c, g] = makeCanvas(S, S);
    const rng = new RNG(77 + tone);
    const base = 88 + tone;
    g.fillStyle = `rgb(${base},${base},${base + 2})`;
    g.fillRect(0, 0, S, S);
    // patch repairs
    for (let i = 0; i < 7; i++) {
      const l = base + rng.range(-16, 10);
      g.fillStyle = `rgba(${l},${l},${l},0.55)`;
      const w = rng.range(60, 200);
      const h = rng.range(40, 140);
      g.fillRect(rng.range(0, S), rng.range(0, S), w, h);
    }
    // aggregate speckle
    for (let i = 0; i < 26000; i++) {
      const l = base + rng.range(-40, 45);
      g.fillStyle = `rgba(${l},${l},${l - 2},${rng.range(0.4, 0.9)})`;
      const r = rng.range(0.6, 2.2);
      g.fillRect(rng.range(0, S), rng.range(0, S), r, r);
    }
    // cracks
    g.strokeStyle = 'rgba(30,30,30,0.55)';
    for (let i = 0; i < 9; i++) {
      g.lineWidth = rng.range(0.8, 1.8);
      g.beginPath();
      let x = rng.range(0, S);
      let y = rng.range(0, S);
      g.moveTo(x, y);
      for (let j = 0; j < 12; j++) {
        x += rng.range(-18, 18);
        y += rng.range(-18, 18);
        g.lineTo(x, y);
      }
      g.stroke();
    }
    return toTexture(c);
  });
}

export function grassTexture(hue = 95, sat = 38, light = 34) {
  return cached(`grass${hue}${sat}${light}`, () => {
    const S = 256;
    const [c, g] = makeCanvas(S, S);
    const rng = new RNG(hue * 7 + light);
    g.fillStyle = hsl(hue, sat, light);
    g.fillRect(0, 0, S, S);
    for (let i = 0; i < 4500; i++) {
      g.strokeStyle = hsl(hue + rng.range(-14, 14), sat + rng.range(-10, 12), light + rng.range(-12, 16), 0.8);
      g.lineWidth = rng.range(0.6, 1.6);
      const x = rng.range(0, S);
      const y = rng.range(0, S);
      g.beginPath();
      g.moveTo(x, y);
      g.lineTo(x + rng.range(-3, 3), y - rng.range(3, 9));
      g.stroke();
    }
    return toTexture(c);
  });
}

// Mostly-white detail texture multiplied over vertex-coloured terrain.
export function detailTexture() {
  return cached('detail', () => {
    const S = 256;
    const [c, g] = makeCanvas(S, S);
    const rng = new RNG(5);
    g.fillStyle = '#d8d8d8';
    g.fillRect(0, 0, S, S);
    for (let i = 0; i < 7000; i++) {
      const l = rng.range(170, 255);
      g.fillStyle = `rgba(${l},${l},${l},0.7)`;
      g.fillRect(rng.range(0, S), rng.range(0, S), rng.range(1, 3), rng.range(1, 4));
    }
    return toTexture(c);
  });
}

// v=0 is the base of the hedge bank, v=1 the top
export function hedgeTexture(flowers = 'hawthorn') {
  return cached('hedge' + flowers, () => {
    const W = 256;
    const H = 256;
    const [c, g] = makeCanvas(W, H);
    const rng = new RNG(41);
    g.fillStyle = '#28461f';
    g.fillRect(0, 0, W, H);
    const bankTop = H; // the tile is all leaf; the darker base comes from vertex shading
    for (let i = 0; i < 2600; i++) {
      const y = rng.range(-6, bankTop + 6);
      const shade = rng.range(0, 1);
      g.fillStyle = hsl(rng.range(85, 120), rng.range(30, 55), 16 + shade * 24, 0.9);
      g.beginPath();
      g.ellipse(rng.range(0, W), y, rng.range(2, 6), rng.range(1.5, 4), rng.range(0, Math.PI), 0, Math.PI * 2);
      g.fill();
    }
    const fl = { hawthorn: ['#fbfaf2', '#f6d6e0'], gorse: ['#f2cf2a', '#e8b51c'], heather: ['#b07ab8', '#9a62a6'] }[flowers];
    if (fl) {
      for (let i = 0; i < 160; i++) {
        g.fillStyle = rng.pick(fl);
        g.beginPath();
        g.arc(rng.range(0, W), rng.range(0, H), rng.range(1, 2.4), 0, Math.PI * 2);
        g.fill();
      }
    }
    return toTexture(c);
  });
}

export function stoneTexture(tone = 'grey') {
  return cached('stone' + tone, () => {
    const W = 256;
    const H = 128;
    const [c, g] = makeCanvas(W, H);
    const rng = new RNG(tone.length * 31);
    g.fillStyle = '#2f2c27';
    g.fillRect(0, 0, W, H);
    const baseL = tone === 'slate' ? 38 : 52;
    let y = 0;
    while (y < H) {
      const rowH = rng.range(10, 20);
      let x = -rng.range(0, 20);
      while (x < W) {
        const w = rng.range(16, 40);
        const l = baseL + rng.range(-12, 14);
        g.fillStyle = hsl(rng.range(30, 50), rng.range(4, 12), l);
        g.beginPath();
        roundRect(g, x + 1, y + 1, w - 2, rowH - 2, 5);
        g.fill();
        g.fillStyle = 'rgba(255,255,255,0.08)';
        g.fillRect(x + 3, y + 2, w - 8, 2);
        if (rng.chance(0.18)) {
          g.fillStyle = 'rgba(110,140,60,0.45)';
          g.beginPath();
          g.ellipse(x + w * 0.4, y + rowH * 0.3, w * 0.3, rowH * 0.3, 0, 0, Math.PI * 2);
          g.fill();
        }
        x += w;
      }
      y += rowH;
    }
    return toTexture(c);
  });
}

function roundRect(g, x, y, w, h, r) {
  g.moveTo(x + r, y);
  g.arcTo(x + w, y, x + w, y + h, r);
  g.arcTo(x + w, y + h, x, y + h, r);
  g.arcTo(x, y + h, x, y, r);
  g.arcTo(x, y, x + w, y, r);
  g.closePath();
}

export function cowHideTexture(seed = 1) {
  return cached('cow' + seed, () => {
    const S = 128;
    const [c, g] = makeCanvas(S, S);
    const rng = new RNG(seed * 13);
    g.fillStyle = '#f4f2ec';
    g.fillRect(0, 0, S, S);
    g.fillStyle = '#151515';
    for (let i = 0; i < 9; i++) {
      g.beginPath();
      const cx = rng.range(0, S);
      const cy = rng.range(0, S);
      for (let a = 0; a < Math.PI * 2; a += 0.5) {
        const r = rng.range(10, 26);
        g.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
      }
      g.fill();
    }
    return toTexture(c, { repeat: false });
  });
}

export function cloudTexture() {
  return cached('cloud', () => {
    const S = 256;
    const [c, g] = makeCanvas(S, S / 2);
    const rng = new RNG(9);
    for (let i = 0; i < 26; i++) {
      const x = rng.range(50, S - 50);
      const y = rng.range(40, S / 2 - 30);
      const r = rng.range(18, 42);
      const grd = g.createRadialGradient(x, y, 0, x, y, r);
      grd.addColorStop(0, 'rgba(255,255,255,0.85)');
      grd.addColorStop(1, 'rgba(255,255,255,0)');
      g.fillStyle = grd;
      g.fillRect(x - r, y - r, r * 2, r * 2);
    }
    return toTexture(c, { repeat: false });
  });
}

export function emojiTexture(emoji) {
  return cached('emoji' + emoji, () => {
    const [c, g] = makeCanvas(128, 128);
    g.font = '96px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif';
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.fillText(emoji, 64, 70);
    return toTexture(c, { repeat: false });
  });
}

// Painted road markings, e.g. SLOW / ARAF
export function markingTexture(text) {
  return cached('mark' + text, () => {
    const [c, g] = makeCanvas(256, 512);
    g.clearRect(0, 0, 256, 512);
    g.fillStyle = 'rgba(245,245,240,0.92)';
    g.font = `800 140px ${FONT}`;
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.save();
    g.translate(128, 256);
    g.scale(0.62, 2.6); // road lettering is stretched so it reads at a shallow angle
    g.fillText(text, 0, 0);
    g.restore();
    return toTexture(c, { repeat: false });
  });
}

function wrapText(g, text, x, y, maxW, lineH) {
  const words = text.split(' ');
  const lines = [];
  let line = '';
  for (const w of words) {
    const test = line ? line + ' ' + w : w;
    if (g.measureText(test).width > maxW && line) {
      lines.push(line);
      line = w;
    } else line = test;
  }
  lines.push(line);
  const y0 = y - ((lines.length - 1) * lineH) / 2;
  lines.forEach((l, i) => g.fillText(l, x, y0 + i * lineH));
}

function triangleSign(g, S, drawIcon) {
  g.clearRect(0, 0, S, S);
  const pad = 10;
  const tri = () => {
    g.beginPath();
    g.moveTo(S / 2, pad);
    g.lineTo(S - pad, S - pad * 2);
    g.lineTo(pad, S - pad * 2);
    g.closePath();
  };
  g.lineJoin = 'round';
  g.fillStyle = '#ffffff';
  tri();
  g.fill();
  g.lineWidth = 26;
  g.strokeStyle = '#d0202a';
  tri();
  g.stroke();
  g.fillStyle = '#111';
  g.strokeStyle = '#111';
  drawIcon(g, S);
}

const ICONS = {
  sheep(g, S) {
    const cx = S / 2;
    const cy = S * 0.64;
    for (const [dx, dy, r] of [[-22, 0, 20], [0, -8, 22], [22, 0, 20], [-8, 10, 18], [12, 10, 18]]) {
      g.beginPath();
      g.arc(cx + dx, cy + dy, r, 0, Math.PI * 2);
      g.fill();
    }
    g.beginPath();
    g.ellipse(cx + 46, cy - 10, 13, 9, -0.4, 0, Math.PI * 2);
    g.fill();
    g.lineWidth = 6;
    for (const dx of [-26, -12, 14, 28]) {
      g.beginPath();
      g.moveTo(cx + dx, cy + 18);
      g.lineTo(cx + dx, cy + 42);
      g.stroke();
    }
  },
  cattle(g, S) {
    const cx = S / 2;
    const cy = S * 0.64;
    g.fillRect(cx - 44, cy - 20, 76, 36);
    g.fillRect(cx + 28, cy - 30, 24, 22);
    g.lineWidth = 6;
    g.beginPath();
    g.moveTo(cx + 34, cy - 30);
    g.lineTo(cx + 28, cy - 42);
    g.moveTo(cx + 48, cy - 30);
    g.lineTo(cx + 56, cy - 42);
    for (const dx of [-38, -26, 14, 26]) {
      g.moveTo(cx + dx, cy + 14);
      g.lineTo(cx + dx, cy + 44);
    }
    g.moveTo(cx - 44, cy - 16);
    g.lineTo(cx - 54, cy + 14);
    g.stroke();
  },
  horse(g, S) {
    const cx = S / 2;
    const cy = S * 0.66;
    g.fillRect(cx - 38, cy - 12, 62, 26);
    g.beginPath();
    g.moveTo(cx + 20, cy - 10);
    g.lineTo(cx + 40, cy - 44);
    g.lineTo(cx + 54, cy - 38);
    g.lineTo(cx + 34, cy);
    g.fill();
    g.lineWidth = 6;
    g.beginPath();
    for (const dx of [-32, -22, 14, 22]) {
      g.moveTo(cx + dx, cy + 10);
      g.lineTo(cx + dx, cy + 42);
    }
    g.moveTo(cx - 38, cy - 8);
    g.lineTo(cx - 50, cy + 20);
    g.stroke();
    // rider
    g.beginPath();
    g.arc(cx - 4, cy - 48, 8, 0, Math.PI * 2);
    g.fill();
    g.fillRect(cx - 10, cy - 40, 12, 28);
  },
  ford(g, S) {
    const cx = S / 2;
    const cy = S * 0.66;
    g.lineWidth = 7;
    for (let row = 0; row < 3; row++) {
      g.beginPath();
      for (let x = -44; x <= 44; x += 2) {
        const y = cy - 18 + row * 18 + Math.sin(x / 7) * 5;
        if (x === -44) g.moveTo(cx + x, y);
        else g.lineTo(cx + x, y);
      }
      g.stroke();
    }
  },
  grid(g, S) {
    const cx = S / 2;
    const cy = S * 0.66;
    g.lineWidth = 7;
    for (let i = -3; i <= 3; i++) {
      g.beginPath();
      g.moveTo(cx + i * 12, cy - 30);
      g.lineTo(cx + i * 12 - 8, cy + 34);
      g.stroke();
    }
    g.fillRect(cx - 50, cy + 30, 100, 8);
  },
};

export function signTexture(kind, region) {
  return cached('sign' + kind + region.id, () => {
    const S = 256;
    if (ICONS[kind]) {
      const [c, g] = makeCanvas(S, S);
      triangleSign(g, S, ICONS[kind]);
      return toTexture(c, { repeat: false });
    }
    if (kind === 'pp') {
      const [c, g] = makeCanvas(S, S);
      g.clearRect(0, 0, S, S);
      g.save();
      g.translate(S / 2, S / 2);
      g.rotate(Math.PI / 4);
      g.fillStyle = '#ffffff';
      g.fillRect(-82, -82, 164, 164);
      g.lineWidth = 6;
      g.strokeStyle = '#111';
      g.strokeRect(-76, -76, 152, 152);
      g.restore();
      g.fillStyle = '#111';
      g.font = `700 34px ${FONT}`;
      g.textAlign = 'center';
      g.textBaseline = 'middle';
      g.fillText('Passing', S / 2, S / 2 - 18);
      g.fillText('Place', S / 2, S / 2 + 20);
      return toTexture(c, { repeat: false });
    }
    // rectangular information signs
    const [c, g] = makeCanvas(S * 2, S);
    const W = S * 2;
    let text = '';
    let bg = '#ffffff';
    let fg = '#111111';
    if (kind === 'singletrack') text = region.lang === 'cy' ? 'Ffordd sengl gyda mannau pasio · Single track road with passing places' : 'Single track road with passing places';
    if (kind === 'unsuitable') text = 'Unsuitable for heavy goods vehicles';
    if (kind === 'village') {
      text = region.lang === 'cy' ? `${region.village.name} · Gyrrwch yn ofalus · Please drive carefully` : `${region.village.name} · Please drive carefully`;
    }
    if (kind === 'ferry') {
      bg = '#1d5aa8';
      fg = '#ffffff';
      text = 'Ferry ⟶';
    }
    g.fillStyle = bg;
    g.fillRect(0, 0, W, S);
    g.lineWidth = 10;
    g.strokeStyle = fg;
    g.strokeRect(14, 14, W - 28, S - 28);
    g.fillStyle = fg;
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.font = `700 ${text.length > 40 ? 40 : 50}px ${FONT}`;
    wrapText(g, text, W / 2, S / 2, W - 70, text.length > 40 ? 46 : 58);
    return toTexture(c, { repeat: false });
  });
}

export function pubSignTexture(name, emblem = 'plough') {
  return cached('pub' + name, () => {
    const [c, g] = makeCanvas(256, 320);
    g.fillStyle = '#2a3d2a';
    g.fillRect(0, 0, 256, 320);
    g.lineWidth = 10;
    g.strokeStyle = '#c9a646';
    g.strokeRect(8, 8, 240, 304);
    g.fillStyle = '#e9dcb5';
    g.textAlign = 'center';
    g.font = `700 30px Georgia, serif`;
    wrapText(g, name, 128, 60, 210, 34);
    g.font = '96px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif';
    g.textBaseline = 'middle';
    g.fillText({ plough: '🍺', lion: '🦁', ship: '⛴️' }[emblem] || '🍺', 128, 200);
    return toTexture(c, { repeat: false });
  });
}

// the painted name board above a pub door
export function nameBoardTexture(name) {
  return cached('board' + name, () => {
    const [c, g] = makeCanvas(1024, 150);
    g.fillStyle = '#1f3a2a';
    g.fillRect(0, 0, 1024, 150);
    g.strokeStyle = '#c9a646';
    g.lineWidth = 8;
    g.strokeRect(10, 10, 1004, 130);
    g.fillStyle = '#e9d9a6';
    g.font = '700 78px Georgia, serif';
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.fillText(name.toUpperCase(), 512, 80, 960);
    return toTexture(c, { repeat: false });
  });
}

export function windowTexture() {
  return cached('window', () => {
    const [c, g] = makeCanvas(64, 64);
    g.fillStyle = '#efe9dc';
    g.fillRect(0, 0, 64, 64);
    g.fillStyle = '#2b3440';
    g.fillRect(14, 12, 36, 40);
    g.fillStyle = '#f2efe6';
    g.fillRect(30, 12, 4, 40);
    g.fillRect(14, 30, 36, 4);
    return toTexture(c, { repeat: true });
  });
}
