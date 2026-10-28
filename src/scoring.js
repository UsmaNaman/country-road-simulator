// Points, the courtesy streak multiplier and the end-of-run summary. Pure JS.

export class Score {
  constructor(mult = 1) {
    this.mult = mult;
    this.total = 0;
    this.streak = 0;
    this.best = 0;
    this.tally = new Map();
    this.listeners = [];
    this.frac = new Map();
  }

  get streakMult() {
    return 1 + Math.min(this.streak, 10) * 0.05;
  }

  _tally(label, pts, count = 1) {
    const t = this.tally.get(label) || { label, count: 0, points: 0 };
    t.count += count;
    t.points += pts;
    this.tally.set(label, t);
  }

  // A scoring event: positive points are boosted by the vehicle multiplier and courtesy streak.
  add(points, label, opts = {}) {
    let pts = points;
    if (pts > 0 && !opts.flat) pts = pts * this.mult * this.streakMult;
    pts = Math.round(pts);
    this.total += pts;
    this._tally(label, pts);
    if (opts.streak !== false) {
      if (pts > 0) this.streak = Math.min(this.streak + 1, 10);
      else if (pts < 0) this.streak = 0;
    }
    this.best = Math.max(this.best, this.streak);
    for (const l of this.listeners) l(pts, label, opts);
    return pts;
  }

  // Continuous trickle (steady driving, patient following) — no toast, no streak change.
  accrue(amount, label) {
    const f = (this.frac.get(label) || 0) + amount * (amount > 0 ? this.mult : 1);
    const whole = Math.trunc(f);
    this.frac.set(label, f - whole);
    if (whole !== 0) {
      this.total += whole;
      const had = this.tally.has(label);
      this._tally(label, whole, had ? 0 : 1);
    }
  }

  entries() {
    return [...this.tally.values()].filter((t) => t.points !== 0).sort((a, b) => b.points - a.points);
  }
}

// Nominal points a careful driver could earn from each encounter type (before multipliers).
export const PAR = {
  oncoming: 130,
  tractorOncoming: 130,
  landroverOncoming: 130,
  motorhome: 130,
  tractorAhead: 160,
  horseAhead: 230,
  cyclistAhead: 160,
  horseOncoming: 150,
  cyclistOncoming: 60,
  walkers: 80,
  cattleCrossing: 290,
  sheep: 75,
  flock: 340,
  highlandCow: 150,
};

export function summarise({ score, road, vehicle, health, time, finished, failReason }) {
  const bonuses = [];
  if (finished) {
    bonuses.push({ label: 'Arrived at ' + road.region.destination, points: 300 });
    bonuses.push({ label: `No-claims bonus (${Math.round(health)}% condition)`, points: Math.round(health * 5) });
    const spare = road.region.targetTime - time;
    if (spare > 0) bonuses.push({ label: road.region.goal + ' ✓', points: Math.min(300, Math.round(spare * 2)) });
  }
  const bonusTotal = bonuses.reduce((a, b) => a + b.points, 0);
  const final = Math.max(0, score.total + bonusTotal);
  let par = 300 + 500 + road.length / 5 + 120;
  for (const e of road.encounters) par += (PAR[e.type] || 100) * vehicle.mult * 1.2;
  const ratio = final / par;
  const stars = !finished ? 0 : ratio >= 0.85 ? 3 : ratio >= 0.6 ? 2 : ratio >= 0.35 ? 1 : 0;
  const title = !finished
    ? failReason?.startsWith('Written off')
      ? 'Written Off'
      : 'Run Ended'
    : stars === 3
      ? 'Country Lane Legend'
      : stars === 2
        ? 'Considerate Driver'
        : stars === 1
          ? 'Needs a Few More Lessons'
          : 'Menace of the Lanes';
  return { final, bonuses, stars, title, par: Math.round(par), ratio };
}
