// All sounds are synthesised with WebAudio: engine, horn, sheep, cows, scraping, splashes, birdsong.

export class AudioSys {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.volume = 0.7;
    this.birdT = 2;
    this.callT = 6;
  }

  init() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = (this.ctx = new AC());
    this.master = ctx.createGain();
    this.master.gain.value = this.muted ? 0 : this.volume;
    const comp = ctx.createDynamicsCompressor();
    this.master.connect(comp).connect(ctx.destination);

    // noise buffer shared by everything noisy
    const len = ctx.sampleRate * 2;
    this.noiseBuf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = this.noiseBuf.getChannelData(0);
    let b = 0;
    for (let i = 0; i < len; i++) {
      const w = Math.random() * 2 - 1;
      b = 0.98 * b + 0.02 * w; // a touch of brown for body
      d[i] = w * 0.6 + b * 3;
    }

    // engine: two detuned oscillators through a low-pass, with a "chug" LFO for the tractor
    this.engOsc1 = ctx.createOscillator();
    this.engOsc2 = ctx.createOscillator();
    this.engOsc1.type = 'sawtooth';
    this.engOsc2.type = 'square';
    this.engFilter = ctx.createBiquadFilter();
    this.engFilter.type = 'lowpass';
    this.engFilter.frequency.value = 400;
    this.engGain = ctx.createGain();
    this.engGain.gain.value = 0;
    this.chug = ctx.createGain();
    this.chug.gain.value = 1;
    this.chugLfo = ctx.createOscillator();
    this.chugDepth = ctx.createGain();
    this.chugDepth.gain.value = 0;
    this.chugLfo.connect(this.chugDepth).connect(this.chug.gain);
    this.engOsc1.connect(this.engFilter);
    this.engOsc2.connect(this.engFilter);
    this.engFilter.connect(this.chug).connect(this.engGain).connect(this.master);
    this.engOsc1.start();
    this.engOsc2.start();
    this.chugLfo.start();

    // continuous scrape (leaves) and grind (stone) loops
    this.scrapeLeaves = this.loopNoise('highpass', 2400, 0.7);
    this.scrapeStone = this.loopNoise('bandpass', 700, 1.5);
    this.windLoop = this.loopNoise('lowpass', 380, 0.5);
    this.rainLoop = this.loopNoise('highpass', 5000, 0.4);
  }

  loopNoise(type, freq, q) {
    const ctx = this.ctx;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuf;
    src.loop = true;
    const f = ctx.createBiquadFilter();
    f.type = type;
    f.frequency.value = freq;
    f.Q.value = q;
    const g = ctx.createGain();
    g.gain.value = 0;
    src.connect(f).connect(g).connect(this.master);
    src.start();
    return { g, f };
  }

  setMuted(m) {
    this.muted = m;
    if (this.master) this.master.gain.setTargetAtTime(m ? 0 : this.volume, this.ctx.currentTime, 0.05);
  }

  get t() {
    return this.ctx.currentTime;
  }

  // ratio: speed / max speed; load: throttle 0..1
  engine(ratio, load, vehicle, stopped) {
    if (!this.ctx) return;
    const t = this.t;
    let f;
    if (vehicle === 'tractor') {
      f = 32 + ratio * 38 + load * 6;
      this.chugLfo.frequency.setTargetAtTime(f / 2, t, 0.1);
      this.chugDepth.gain.setTargetAtTime(0.55, t, 0.1);
    } else {
      // fake gearbox: revs rise through each gear then drop
      const gears = vehicle === 'suv' ? 5 : 5;
      const g = Math.min(gears - 1, Math.floor(ratio * gears * 1.15));
      const within = ratio * gears * 1.15 - g;
      f = 46 + within * 62 + g * 7 + load * 8;
      this.chugDepth.gain.setTargetAtTime(0.08, t, 0.1);
      this.chugLfo.frequency.setTargetAtTime(f / 2, t, 0.1);
    }
    this.engOsc1.frequency.setTargetAtTime(f, t, 0.06);
    this.engOsc2.frequency.setTargetAtTime(f * 0.501, t, 0.06);
    this.engFilter.frequency.setTargetAtTime(260 + load * 900 + ratio * 500, t, 0.08);
    const vol = stopped ? 0 : (vehicle === 'tractor' ? 0.09 : 0.05) + load * 0.03 + ratio * 0.03;
    this.engGain.gain.setTargetAtTime(vol, t, 0.1);
  }

  // silence every continuous sound (paused, or back at the menu)
  quiet() {
    if (!this.ctx) return;
    const t = this.t;
    for (const g of [this.engGain, this.scrapeLeaves.g, this.scrapeStone.g, this.windLoop.g, this.rainLoop.g]) g.gain.setTargetAtTime(0, t, 0.05);
  }

  scrape(level, type) {
    if (!this.ctx) return;
    const t = this.t;
    const stone = type === 1 || type === 3;
    this.scrapeLeaves.g.gain.setTargetAtTime(!stone ? level * 0.35 : 0, t, 0.05);
    this.scrapeStone.g.gain.setTargetAtTime(stone ? level * 0.5 : 0, t, 0.05);
  }

  ambience(dt, region, sheepNear) {
    if (!this.ctx) return;
    const t = this.t;
    this.windLoop.g.gain.setTargetAtTime(region === 'scotland' ? 0.12 : region === 'wales' ? 0.08 : 0.04, t, 0.5);
    this.rainLoop.g.gain.setTargetAtTime(region === 'wales' ? 0.05 : 0, t, 0.5);
    this.birdT -= dt;
    if (this.birdT < 0) {
      this.birdT = region === 'england' ? 0.6 + Math.random() * 2.5 : 3 + Math.random() * 6;
      if (region === 'scotland') this.curlew();
      else this.chirp();
    }
    if (sheepNear) {
      this.callT -= dt;
      if (this.callT < 0) {
        this.callT = 2 + Math.random() * 4;
        this.baa(0.4);
      }
    }
  }

  env(g, t, attack, peak, decay) {
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + attack + decay);
  }

  tone(type, freq, dur, peak, { attack = 0.01, filter = null, glideTo = null, vibrato = 0, vibRate = 6, delay = 0 } = {}) {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const t = this.t + delay;
    const o = ctx.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (glideTo) o.frequency.exponentialRampToValueAtTime(glideTo, t + dur);
    const g = ctx.createGain();
    let node = o;
    if (filter) {
      const f = ctx.createBiquadFilter();
      f.type = filter[0];
      f.frequency.value = filter[1];
      f.Q.value = filter[2] || 1;
      node.connect(f);
      node = f;
    }
    if (vibrato) {
      const l = ctx.createOscillator();
      const lg = ctx.createGain();
      l.frequency.value = vibRate;
      lg.gain.value = vibrato;
      l.connect(lg).connect(o.frequency);
      l.start(t);
      l.stop(t + dur + 0.1);
    }
    node.connect(g).connect(this.master);
    this.env(g, t, attack, peak, dur);
    o.start(t);
    o.stop(t + attack + dur + 0.05);
  }

  noise(dur, peak, filterType, freq, q = 1, delay = 0) {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const t = this.t + delay;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuf;
    const f = ctx.createBiquadFilter();
    f.type = filterType;
    f.frequency.value = freq;
    f.Q.value = q;
    const g = ctx.createGain();
    src.connect(f).connect(g).connect(this.master);
    this.env(g, t, 0.005, peak, dur);
    src.start(t, Math.random());
    src.stop(t + dur + 0.05);
  }

  horn(vehicle) {
    const base = vehicle === 'tractor' ? 260 : vehicle === 'suv' ? 340 : 400;
    this.tone('square', base, 0.35, 0.09, { filter: ['lowpass', 1800] });
    this.tone('square', base * 1.25, 0.35, 0.07, { filter: ['lowpass', 1800] });
  }

  baa(vol = 1) {
    if (vol <= 0.02) return;
    const f = 330 + Math.random() * 120;
    this.tone('sawtooth', f, 0.55, 0.06 * vol, { attack: 0.04, filter: ['bandpass', 1100, 2], vibrato: 28, vibRate: 9, glideTo: f * 0.85 });
  }

  moo(vol = 1) {
    if (vol <= 0.02) return;
    this.tone('sawtooth', 125, 1.3, 0.08 * vol, { attack: 0.25, filter: ['lowpass', 520, 3], glideTo: 92, vibrato: 3, vibRate: 5 });
  }

  neigh(vol = 1) {
    if (vol <= 0.02) return;
    this.tone('sawtooth', 700, 0.9, 0.05 * vol, { attack: 0.03, filter: ['bandpass', 1400, 3], vibrato: 90, vibRate: 14, glideTo: 380 });
  }

  chirp() {
    const f = 2600 + Math.random() * 1800;
    const n = 2 + Math.floor(Math.random() * 4);
    for (let i = 0; i < n; i++) this.tone('sine', f * (1 + (i % 2) * 0.12), 0.07, 0.025, { attack: 0.005, glideTo: f * 1.3, delay: i * 0.11 });
  }

  curlew() {
    this.tone('sine', 1700, 0.9, 0.03, { attack: 0.2, glideTo: 2300 });
    this.tone('sine', 2100, 0.6, 0.025, { attack: 0.1, glideTo: 2500, delay: 0.95 });
  }

  crash(strength) {
    this.noise(0.5 + strength * 0.4, 0.25 + strength * 0.35, 'lowpass', 1800);
    this.tone('sine', 70, 0.4, 0.3 * strength + 0.1, { glideTo: 40 });
    this.noise(0.25, 0.15 * strength, 'highpass', 4000, 1, 0.05);
  }

  thud(strength) {
    this.tone('sine', 85, 0.3, 0.2 + strength * 0.2, { glideTo: 45 });
    this.noise(0.2, 0.1 + strength * 0.1, 'lowpass', 900);
  }

  bump(strength) {
    this.tone('sine', 60, 0.15, 0.08 + strength * 0.12, { glideTo: 40 });
  }

  splash(strength) {
    this.noise(0.7 + strength * 0.6, 0.15 + strength * 0.25, 'bandpass', 1300, 0.8);
    this.noise(0.4, 0.1 + strength * 0.1, 'highpass', 3500, 1, 0.1);
  }

  rattle(speed) {
    const n = 6 + Math.floor(speed);
    for (let i = 0; i < n; i++) this.noise(0.03, 0.12, 'bandpass', 2200, 4, i * 0.045);
  }

  chime(good) {
    if (good) {
      this.tone('sine', 880, 0.18, 0.05);
      this.tone('sine', 1320, 0.25, 0.04, { delay: 0.08 });
    } else {
      this.tone('triangle', 330, 0.22, 0.05);
      this.tone('triangle', 247, 0.3, 0.05, { delay: 0.12 });
    }
  }

  whoosh() {
    this.noise(0.25, 0.04, 'bandpass', 1800, 1.5);
  }
}
