# Country Road Simulator

Narrow lanes, towering hedgerows, tractors, ramblers and sheep with no sense of urgency.
A 3D browser driving game set on the country roads of England, Wales and Scotland, where
points come from **courtesy, patience and keeping your paintwork**, not speed.

## Play

**Play online: https://usmanaman.github.io/country-road-simulator/**

Open `index.html` in a browser. Double-clicking it works; no server or install needed.

Or serve it locally:

```sh
npm start            # rebuilds, then serves at http://localhost:8080
```

The page runs the bundled `dist/country-road.js`. If you change anything in `src/`,
run `npm install` once, then `npm run build` (or just `npm start`) to rebuild the bundle.

## The routes

| Route | Character | Look out for |
| --- | --- | --- |
| **Devon Lanes** (England) | Sunken lanes between 3 m hedgebanks, blind bends, grass down the middle | Tractors, horse riders, ramblers, a ford, the farmer moving his Friesians across the lane |
| **Welsh Hills** (Wales) | Over the cattle grid onto open mountain, drizzle, *ARAF* on the road | Sheep everywhere, and a shepherd driving the whole flock down the lane towards you |
| **Highland Single Track** (Scotland) | Single-track road with signed passing places, moorland, lochs, mountains | Motorhomes that can't reverse, touring cyclists, Highland coos in no hurry at all |

Tick **Random route** for a freshly generated lane each time (best scores aren't recorded for those).

## The vehicles

| Vehicle | Width | Notes | Score × |
| --- | --- | --- | --- |
| Hatchback | 1.74 m | Nimble, but crumples easily | 1.00 |
| Family Estate | 1.84 m | Long: reversing into bays takes care | 1.15 |
| Chelsea Tractor (SUV) | 2.02 m | Tough, but nearly as wide as the lane | 1.35 |
| Tractor | 2.45 m | Barely notices hedges, tops out around 25 mph | 1.50 |

## Controls

| Key | Action |
| --- | --- |
| `W` / `↑` | Accelerate |
| `S` / `↓` | Brake; keep holding to reverse |
| `A` `D` / `←` `→` | Steer |
| `Space` | Handbrake |
| `T` | Wave thanks 👋 |
| `H` | Horn (use sparingly) |
| `C` | Cycle camera: chase, driver's seat (right-hand drive), high |
| `V` / `J` / `M` | Toggle rear-view mirror / hints / sound |
| `Esc` / `P` | Pause |

Gamepads work (stick to steer, triggers for throttle and brake). On phones and tablets,
on-screen buttons appear and graphics drop to a lighter setting.

## How scoring works

You score for the lane etiquette set out in the Highway Code:

- **Passing places.** Pull into one on your left, or wait opposite one on your right.
  When you meet someone with no bay between you, it's a **stand-off**. Reversing to a
  passing place earns a big bonus. Some drivers will back up if you wait, but
  motorhomes and tractors won't.
- **Wave.** When someone gives way, press `T` while the prompt shows. Forgetting costs
  you; waving back when they thank you earns a little more.
- **Vulnerable road users.** Horses under 10 mph with 2 m clearance and no horn.
  Cyclists get 1.5 m. Walkers want you slow and wide. Hitting a person or a horse
  ends the run.
- **Livestock.** Wait for the farmer's herd, let the flock flow around you, and be
  patient with Highland coos. Startling sheep or tooting at cattle costs points.
- **The car itself.** Hedges hide stone. Scrapes, walls, potholes taken fast and fords
  taken like a speedboat all cost points *and* condition. Reach 0% and you're written off.
- **Steady driving.** A trickle of points for moving at a sensible speed. Going too fast
  for the bend, or tailgating a tractor, costs you.

Good encounters build a **courtesy streak** of up to ×1.5 on top of the vehicle
multiplier. At the destination you get a completion bonus, a no-claims bonus for the
car's condition, and a time bonus if you beat the route's target. Then up to three stars.

## Project layout

```
index.html, style.css   page, menu, HUD and dialogs
src/main.js             menu, game lifecycle, main loop
src/game.js             Three.js rendering: cameras, mirror, models, particles, events → HUD/audio
src/sim.js              the simulation (no rendering): player, traffic, scoring, damage, autopilot
src/road.js             procedural lane generation in road (Frenet) coordinates: s along, d across
src/physics.js          player car dynamics and oriented-box collisions
src/entities.js         AI for drivers, tractors, riders, cyclists, walkers, dogs, sheep, cattle
src/encounters.js       scripted encounters: spawning, judging how you handled them, hints
src/world.js            scenery: road, verges, hedges, walls, terrain, trees, villages, sky
src/models.js           low-poly models built from primitives
src/textures.js         canvas-drawn textures and road signs
src/audio.js            synthesised sound (WebAudio): engine, horn, sheep, cows, birdsong
src/hud.js, input.js    heads-up display and keyboard/touch/gamepad input
src/feedback.js         "Send feedback" links to the Google Form (set in FEEDBACK in config.js)
vendor/three.module.js  Three.js r160 (bundled into dist/ by esbuild)
dist/country-road.js    the built game the page loads
```

Everything outside `game.js`, `world.js`, `models.js`, `textures.js`, `hud.js`,
`audio.js` and `main.js` is plain JavaScript with no DOM or WebGL, so whole runs can be
simulated headless.

## Tests

```sh
npm test
```

The suite covers route generation invariants, physics and collisions, scoring, staged
encounters (passing-place etiquette, stand-offs, horses, walkers, cattle, waving), and
full hands-free runs of every route. Those runs use a polite built-in autopilot that
also drives the menu backdrop.

## Developer URL parameters

| Parameter | Effect |
| --- | --- |
| `?play=england\|wales\|scotland&car=hatch\|estate\|suv\|tractor` | Skip the menu |
| `&seed=123` | A specific generated route |
| `&enc=sheep` | Stage an encounter just up the road (`oncoming`, `tractorAhead`, `walkers`, `horseAhead`, `cattleCrossing`, `flock`, `highlandCow`, `motorhome`, …) |
| `&auto=1` | Let the autopilot drive |
| `&ff=30` | Fast-forward 30 seconds before showing |
| `&cam=cab\|high` | Start in another camera |
| `&quality=low` | Phone-style graphics |

## Licence

© Usman Akram. All rights reserved. The source is public so the game can be hosted on GitHub Pages;
it is not open source. Three.js (`vendor/three.module.js`) is © three.js authors, MIT licence.
