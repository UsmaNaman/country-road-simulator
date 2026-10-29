// Keyboard, on-screen touch buttons and gamepad, merged into one input state per frame.

const KEYMAP = {
  ArrowUp: 'up',
  KeyW: 'up',
  ArrowDown: 'down',
  KeyS: 'down',
  ArrowLeft: 'left',
  KeyA: 'left',
  ArrowRight: 'right',
  KeyD: 'right',
  Space: 'handbrake',
  KeyH: 'horn',
  KeyT: 'wave',
  KeyC: 'camera',
  KeyV: 'mirror',
  KeyM: 'mute',
  KeyP: 'pause',
  Escape: 'pause',
  KeyJ: 'hints',
};

const EDGE = ['horn', 'wave', 'camera', 'mirror', 'mute', 'pause', 'hints'];

export class Input {
  constructor() {
    this.held = new Set();
    this.edges = new Set();
    this.touch = new Set();
    this.steerAxis = 0;
    this.enabled = true;
    window.addEventListener('keydown', (e) => {
      const a = KEYMAP[e.code];
      if (!a) return;
      if (e.target && /input|textarea|select/i.test(e.target.tagName)) return;
      e.preventDefault();
      if (!this.held.has(a) && EDGE.includes(a)) this.edges.add(a);
      this.held.add(a);
    });
    window.addEventListener('keyup', (e) => {
      const a = KEYMAP[e.code];
      if (a) this.held.delete(a);
    });
    window.addEventListener('blur', () => this.held.clear());
  }

  // wire up on-screen buttons: elements with data-act="up|down|left|right|horn|wave|camera".
  // Each finger is tracked on its own and can slide between the held buttons (brake to gas,
  // left to right) like a foot between pedals; slipping off a button doesn't let go of it.
  bindTouch(root) {
    const fingers = new Map(); // pointerId → action
    const sync = () => {
      this.touch = new Set(fingers.values());
      for (const el of root.querySelectorAll('[data-act]')) el.classList.toggle('down', this.touch.has(el.dataset.act));
    };
    root.addEventListener('pointerdown', (e) => {
      const el = e.target.closest?.('[data-act]');
      if (!el) return;
      e.preventDefault();
      el.setPointerCapture?.(e.pointerId); // keep this finger's moves even once it leaves the button
      const a = el.dataset.act;
      if (EDGE.includes(a)) this.edges.add(a);
      fingers.set(e.pointerId, a);
      sync();
    });
    root.addEventListener('pointermove', (e) => {
      const cur = fingers.get(e.pointerId);
      if (!cur || EDGE.includes(cur)) return;
      const a = document.elementFromPoint(e.clientX, e.clientY)?.closest?.('[data-act]')?.dataset.act;
      if (a && a !== cur && !EDGE.includes(a)) {
        fingers.set(e.pointerId, a);
        sync();
      }
    });
    const end = (e) => fingers.delete(e.pointerId) && sync();
    for (const ev of ['pointerup', 'pointercancel', 'lostpointercapture']) root.addEventListener(ev, end);
    // a long press must never turn into text selection, the copy menu or a zoom
    root.addEventListener('touchstart', (e) => e.target.closest?.('[data-act]') && e.preventDefault(), { passive: false });
    for (const ev of ['contextmenu', 'selectstart']) root.addEventListener(ev, (e) => e.preventDefault());
    window.addEventListener('blur', () => {
      fingers.clear();
      sync();
    });
  }

  is(a) {
    return this.held.has(a) || this.touch.has(a);
  }

  // consume this frame's state
  read() {
    let steer = (this.is('left') ? 1 : 0) - (this.is('right') ? 1 : 0);
    let throttle = this.is('up') ? 1 : 0;
    let brake = this.is('down') ? 1 : 0;
    let handbrake = this.is('handbrake');
    let pads = [];
    try {
      // embedded pages may be refused gamepad access; that must never stop the game
      pads = navigator.getGamepads ? navigator.getGamepads() : [];
    } catch {
      pads = [];
    }
    for (const gp of pads) {
      if (!gp) continue;
      const ax = gp.axes[0] || 0;
      if (Math.abs(ax) > 0.15) steer = -ax;
      const rt = gp.buttons[7]?.value || 0;
      const lt = gp.buttons[6]?.value || 0;
      if (rt > 0.05) throttle = rt;
      if (lt > 0.05) brake = lt;
      if (gp.buttons[0]?.pressed) handbrake = true;
      const map = { 2: 'horn', 3: 'wave', 4: 'camera', 9: 'pause' };
      for (const [i, a] of Object.entries(map)) {
        const pressed = gp.buttons[i]?.pressed;
        const key = 'gp' + i;
        if (pressed && !this.held.has(key)) this.edges.add(a);
        if (pressed) this.held.add(key);
        else this.held.delete(key);
      }
    }
    const out = {
      steer,
      throttle,
      brake,
      handbrake,
      horn: this.edges.has('horn'),
      wave: this.edges.has('wave'),
      camera: this.edges.has('camera'),
      mirror: this.edges.has('mirror'),
      mute: this.edges.has('mute'),
      pause: this.edges.has('pause'),
      hints: this.edges.has('hints'),
    };
    this.edges.clear();
    return out;
  }
}
