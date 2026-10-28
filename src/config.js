// Game data: drivable vehicles and the three routes.
// Units: metres, seconds, m/s internally. Speeds shown to the player are in mph.

export const MPH = 2.23694;
export const mph = (v) => v / MPH; // mph → m/s

export const VEHICLES = {
  hatch: {
    id: 'hatch',
    name: 'Hatchback',
    blurb: 'Nippy and narrow. Slips past almost anything, but crumples if it so much as looks at a stone wall.',
    width: 1.74,
    length: 4.0,
    height: 1.45,
    wheelbase: 2.5,
    maxSpeed: 26,
    accel: 3.7,
    brake: 8.5,
    reverseMax: 4.8,
    engineBrake: 0.9,
    maxSteer: 0.62,
    durability: 1.3,
    mult: 1.0,
    model: 'hatch',
    colors: ['#c8352b', '#2f6fb5', '#f2f0ea', '#2f8a4c', '#e5b83a'],
    stats: { width: 1, speed: 4, toughness: 1 },
  },
  estate: {
    id: 'estate',
    name: 'Family Estate',
    blurb: 'Dog in the boot, kids in the back. Long, so reversing into passing places takes a steady hand.',
    width: 1.84,
    length: 4.75,
    height: 1.5,
    wheelbase: 2.8,
    maxSpeed: 27,
    accel: 3.3,
    brake: 8,
    reverseMax: 4.5,
    engineBrake: 0.9,
    maxSteer: 0.58,
    durability: 1.0,
    mult: 1.15,
    model: 'estate',
    colors: ['#5b6770', '#1f3b5c', '#7a1f2b', '#d9d6cf', '#3b5b3a'],
    stats: { width: 2, speed: 4, toughness: 2 },
  },
  suv: {
    id: 'suv',
    name: 'Chelsea Tractor',
    blurb: 'A big shiny SUV. Tough, but nearly as wide as the lane. Every wing mirror is a liability.',
    width: 2.02,
    length: 4.9,
    height: 1.8,
    wheelbase: 2.95,
    maxSpeed: 28,
    accel: 3.5,
    brake: 8,
    reverseMax: 4.5,
    engineBrake: 1.0,
    maxSteer: 0.56,
    durability: 0.75,
    mult: 1.35,
    model: 'suv',
    colors: ['#1c1c1e', '#e8e8e6', '#2b4a6b', '#6b6f73', '#7b2d26'],
    stats: { width: 3, speed: 5, toughness: 3 },
  },
  tractor: {
    id: 'tractor',
    name: 'Tractor',
    blurb: 'Wider than everything and slower than everyone. Hedges barely bother you, but everyone ends up behind you.',
    width: 2.45,
    length: 4.3,
    height: 2.9,
    wheelbase: 2.6,
    maxSpeed: 12,
    accel: 2.7,
    brake: 6,
    reverseMax: 3.5,
    engineBrake: 1.4,
    maxSteer: 0.72,
    durability: 0.3,
    mult: 1.5,
    model: 'tractor',
    colors: ['#3d7a3a', '#c23b22', '#2c5aa0', '#e0b42a'],
    stats: { width: 5, speed: 1, toughness: 5 },
  },
};

const ENGLAND = {
  id: 'england',
  name: 'England',
  title: 'Devon Lanes',
  stripe: ['#ffffff', '#ce1124'],
  blurb: 'Sunken lanes between towering hedgebanks. Blind bends, tractors, ramblers and a herd of Friesians heading for milking.',
  destination: 'The Plough Inn',
  goal: 'Get to The Plough before last orders',
  targetTime: 470,
  length: 2600,
  seed: 1847,
  road: { halfWidth: [1.55, 1.85], minR: 24, maxR: 110, straightProb: 0.28, straight: [20, 70], maxDev: 1.2, hills: 14, maxGrade: 0.1 },
  pp: { spacing: [150, 250], len: [20, 26], extra: 2.6, signed: false, gateways: true },
  zones: [{ to: 1.0, weights: { hedge: 0.93, wall: 0.07 } }],
  boundary: { hedgeHeight: [2.4, 3.7], wallHeight: [1.0, 1.4], verge: { hedge: [0.15, 0.45], wall: [0.3, 0.7], open: [1.2, 2], fence: [0.9, 1.5] } },
  grassStrip: 0.6,
  encounters: {
    weights: { oncoming: 6, tractorAhead: 2, tractorOncoming: 1.5, walkers: 2.5, horseAhead: 1.5, horseOncoming: 1, cyclistAhead: 1, cyclistOncoming: 1 },
    mandatory: ['cattleCrossing', 'tractorAhead', 'walkers'],
    spacing: [150, 220],
  },
  features: { fords: 1, potholes: 18, telegraph: true },
  terrain: { amp: 26, scale: 380, style: 'patchwork', waterLevel: null, mountains: null, hedgerowTrees: 0.04, fieldTrees: 520, conifers: 0, bales: 40, fieldAnimals: { cow: 40, sheep: 30 } },
  sky: { top: '#4f9be0', bottom: '#cfe5f4', fog: '#c6dbe9', fogNear: 70, fogFar: 460, sun: '#fff1d0', sunI: 2.6, hemiSky: '#d6ecff', hemiGround: '#5f7a3c', hemiI: 1.25, sunDir: [-0.45, 0.8, 0.35] },
  weather: 'sunny',
  advisoryMph: 40,
  npcCars: ['hatch', 'estate', 'suv', 'landrover', 'van', 'postvan'],
  sheepFace: 'white',
  cowBreed: 'friesian',
  lang: 'en',
  village: { name: 'Little Wendlecombe', pub: 'The Plough Inn', walls: '#efe9dc', roof: '#6b4e2e', thatch: true },
};

const WALES = {
  id: 'wales',
  name: 'Wales',
  title: 'Welsh Hills',
  stripe: ['#ffffff', '#00b140'],
  blurb: 'Over the cattle grid onto open mountain. Sheep everywhere, a farmer moving the whole flock, and drizzle. Araf!',
  destination: 'Tafarn y Llew Coch',
  goal: 'Reach the chapel for choir practice',
  targetTime: 520,
  length: 2800,
  seed: 2026,
  road: { halfWidth: [1.65, 1.95], minR: 26, maxR: 130, straightProb: 0.32, straight: [25, 90], maxDev: 1.15, hills: 34, maxGrade: 0.13 },
  pp: { spacing: [160, 260], len: [22, 28], extra: 2.6, signed: true, gateways: false },
  zones: [
    { to: 0.3, weights: { hedge: 0.55, wall: 0.45 } },
    { to: 0.74, weights: { open: 0.6, wall: 0.4 }, grid: true, sheepy: true },
    { to: 1.0, weights: { wall: 0.55, hedge: 0.45 }, grid: true },
  ],
  boundary: { hedgeHeight: [1.9, 2.8], wallHeight: [1.0, 1.35], verge: { hedge: [0.25, 0.6], wall: [0.4, 0.9], open: [1.4, 2.4], fence: [1.0, 1.6] } },
  grassStrip: 0.35,
  encounters: {
    weights: { sheep: 4, oncoming: 4.5, landroverOncoming: 1.5, walkers: 1.5, tractorAhead: 1, cyclistOncoming: 1, tractorOncoming: 0.8 },
    mandatory: ['flock', 'sheep', 'sheep'],
    spacing: [150, 220],
  },
  features: { fords: 1, potholes: 14, telegraph: true },
  terrain: { amp: 70, scale: 520, style: 'hills', waterLevel: -30, mountains: { count: 14, h: [180, 420], color: '#5d6f4c' }, hedgerowTrees: 0.015, fieldTrees: 260, conifers: 220, bales: 0, fieldAnimals: { cow: 0, sheep: 160 } },
  sky: { top: '#8c9caa', bottom: '#cdd3d6', fog: '#b9c2c6', fogNear: 45, fogFar: 330, sun: '#e9eef0', sunI: 1.6, hemiSky: '#dfe7ea', hemiGround: '#4d6038', hemiI: 1.5, sunDir: [0.3, 0.9, 0.25] },
  weather: 'drizzle',
  advisoryMph: 40,
  npcCars: ['hatch', 'estate', 'landrover', 'landrover', 'van', 'suv'],
  sheepFace: 'white',
  cowBreed: 'welshblack',
  lang: 'cy',
  village: { name: 'Cwm Mawr', pub: 'Tafarn y Llew Coch', walls: '#d9d4c7', roof: '#3c4249', thatch: false },
};

const SCOTLAND = {
  id: 'scotland',
  name: 'Scotland',
  title: 'Highland Single Track',
  stripe: ['#0065bd', '#ffffff'],
  blurb: 'Single-track road with passing places, lochs and mountains. Motorhomes, touring cyclists and Highland coos that will not be hurried.',
  destination: 'Ardnacraig Ferry',
  goal: 'Catch the last ferry to the isles',
  targetTime: 510,
  length: 3100,
  seed: 1314,
  road: { halfWidth: [1.75, 1.95], minR: 35, maxR: 180, straightProb: 0.4, straight: [30, 120], maxDev: 1.1, hills: 26, maxGrade: 0.1 },
  pp: { spacing: [120, 200], len: [24, 30], extra: 2.7, signed: true, gateways: false },
  zones: [
    { to: 0.16, weights: { fence: 0.5, wall: 0.5 } },
    { to: 0.86, weights: { open: 0.82, fence: 0.18 }, grid: true, sheepy: true },
    { to: 1.0, weights: { wall: 0.6, fence: 0.4 }, grid: true },
  ],
  boundary: { hedgeHeight: [1.8, 2.4], wallHeight: [0.9, 1.25], verge: { hedge: [0.3, 0.6], wall: [0.5, 1.0], open: [1.5, 2.6], fence: [1.2, 1.8] } },
  grassStrip: 0.0,
  encounters: {
    weights: { oncoming: 5, motorhome: 2.5, sheep: 2, cyclistOncoming: 1.5, cyclistAhead: 1.2, walkers: 1 },
    mandatory: ['highlandCow', 'highlandCow', 'motorhome'],
    spacing: [160, 230],
  },
  features: { fords: 0, potholes: 14, telegraph: true },
  terrain: { amp: 60, scale: 600, style: 'moor', waterLevel: -14, mountains: { count: 16, h: [380, 820], color: '#5a5a6b' }, hedgerowTrees: 0.0, fieldTrees: 160, conifers: 260, bales: 0, fieldAnimals: { cow: 14, sheep: 60 } },
  sky: { top: '#6f8fb8', bottom: '#f3d9b4', fog: '#d9d2c6', fogNear: 80, fogFar: 520, sun: '#ffd9a0', sunI: 2.2, hemiSky: '#e8e2f0', hemiGround: '#5a5233', hemiI: 1.3, sunDir: [0.75, 0.38, -0.3] },
  weather: 'mist',
  advisoryMph: 45,
  npcCars: ['hatch', 'estate', 'suv', 'landrover', 'van', 'postvan'],
  sheepFace: 'black',
  cowBreed: 'highland',
  lang: 'en',
  village: { name: 'Ardnacraig', pub: 'Ferry Inn', walls: '#f2f0ea', roof: '#2f3439', thatch: false },
};

// Footprints of everything else that uses the lane
export const NPC_SPECS = {
  hatch: { len: 4.0, wid: 1.74, name: 'hatchback' },
  estate: { len: 4.75, wid: 1.84, name: 'estate car' },
  suv: { len: 4.9, wid: 2.02, name: 'SUV' },
  landrover: { len: 4.6, wid: 1.95, name: 'farm 4x4' },
  van: { len: 5.2, wid: 2.0, name: 'delivery van' },
  postvan: { len: 5.2, wid: 2.0, name: 'post van' },
  motorhome: { len: 6.6, wid: 2.3, name: 'motorhome' },
  tractor: { len: 4.3, wid: 2.4, name: 'tractor' },
  tractorTrailer: { len: 9.4, wid: 2.4, name: 'tractor and trailer' },
  quad: { len: 2.1, wid: 1.2, name: 'quad bike' },
  bike: { len: 1.8, wid: 0.65, name: 'cyclist' },
  horse: { len: 2.5, wid: 0.9, name: 'horse rider' },
};


export const CAR_COLOURS = ['#c8352b', '#2f6fb5', '#e8e6df', '#3a3a3c', '#7d8a90', '#2f6b45', '#b8902f', '#5a2a4a', '#9fb3c8'];

export const REGIONS = { england: ENGLAND, wales: WALES, scotland: SCOTLAND };
export const REGION_ORDER = ['england', 'wales', 'scotland'];
export const VEHICLE_ORDER = ['hatch', 'estate', 'suv', 'tractor'];

// Shown in feedback so reports can be matched to a build. Bump when publishing a new version.
export const GAME_VERSION = '0.9';

// "Send feedback" opens this Google Form. Leave url empty to hide the feedback buttons.
// url: the form's /viewform link. detailsEntry: the "entry.123…" id of its "Game details" question,
// taken from the form's "Get pre-filled link"; the game fills that answer in for the player.
export const FEEDBACK = {
  url: 'https://docs.google.com/forms/d/e/1FAIpQLSfOYL87_qVdiY4cWI9cIi-6SNo2ORyUzIXHuVCVsewzGAaMgA/viewform',
  detailsEntry: 'entry.1854141009',
};
