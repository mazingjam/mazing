const STORAGE_KEY = "eternal-heroes-prototype";

const heroClasses = [
  {
    id: "warrior",
    name: "Warrior",
    mark: "W",
    sprite: 0,
    mechanic: "Rage",
    hook: "Armor, retaliation, ally protection",
    skill: "Shield Slam",
    attackType: "melee",
    ultimate: "shield_wall",
    tags: ["Frontline", "Armor", "Retaliation"],
    stats: { hp: 128, power: 12, armor: 10, speed: 0.9 },
  },
  {
    id: "necromancer",
    name: "Necromancer",
    mark: "N",
    sprite: 1,
    mechanic: "Graves",
    hook: "Summons, sacrifice, curses",
    skill: "Raise Skeleton",
    attackType: "projectile",
    ultimate: "mass_raise",
    tags: ["Summons", "Curses", "Death"],
    stats: { hp: 88, power: 15, armor: 4, speed: 1.0 },
  },
  {
    id: "alchemist",
    name: "Alchemist",
    mark: "A",
    sprite: 2,
    mechanic: "Mixtures",
    hook: "Poison, bombs, healing volatility",
    skill: "Volatile Flask",
    attackType: "projectile",
    ultimate: "grand_mixture",
    tags: ["Poison", "Bombs", "Healing"],
    stats: { hp: 102, power: 13, armor: 6, speed: 1.12 },
  },
  {
    id: "druid",
    name: "Druid",
    mark: "D",
    sprite: 13,
    portraitIcon: 13,
    mechanic: "Wildshape",
    hook: "Regrowth, thorns, beast allies",
    skill: "Root Lash",
    attackType: "melee",
    ultimate: "wild_bloom",
    tags: ["Regrowth", "Thorns", "Nature"],
    stats: { hp: 112, power: 11, armor: 7, speed: 1.05, evade: 0.06 },
  },
  {
    id: "hunter",
    name: "Hunter",
    mark: "H",
    sprite: 14,
    portraitIcon: 15,
    mechanic: "Marks",
    hook: "Crits, traps, backline pressure",
    skill: "Marked Shot",
    attackType: "projectile",
    ultimate: "perfect_shot",
    tags: ["Crit", "Traps", "Precision"],
    stats: { hp: 96, power: 14, armor: 5, speed: 1.22, critChance: 0.12, critDamage: 0.5 },
  },
  {
    id: "chronomancer",
    name: "Chronomancer",
    mark: "C",
    sprite: 15,
    portraitIcon: 17,
    mechanic: "Time Debt",
    hook: "Slow, haste, delayed burst",
    skill: "Time Shard",
    attackType: "projectile",
    ultimate: "time_lock",
    tags: ["Slow", "Haste", "Control"],
    stats: { hp: 92, power: 12, armor: 4, speed: 1.18, slowChance: 0.15 },
  },
];

const enemies = [
  { id: "hollow-raider", name: "Hollow Raider", role: "striker", sprite: 3, attackType: "melee", hp: 58, power: 8, speed: 1.05 },
  { id: "ash-wolf", name: "Ash Wolf", role: "assassin", sprite: 4, attackType: "melee", hp: 66, power: 9, speed: 1.25 },
  { id: "bridge-knight", name: "Bridge Knight", role: "tank", sprite: 5, attackType: "melee", hp: 105, power: 13, speed: 0.82 },
  { id: "glass-cultist", name: "Glass Cultist", role: "caster", sprite: 6, attackType: "projectile", hp: 74, power: 11, speed: 1.0 },
  { id: "oath-eater", name: "The Oath-Eater", role: "boss", sprite: 7, attackType: "melee", ultimate: "oath_slam", hp: 145, power: 16, speed: 0.9 },
  { id: "ember-imp", name: "Ember Imp", role: "skirmisher", sprite: 8, attackType: "projectile", hp: 52, power: 10, speed: 1.35 },
  { id: "thorn-witch", name: "Thorn Witch", role: "healer", sprite: 9, attackType: "projectile", hp: 78, power: 12, speed: 0.95 },
  { id: "bone-archer", name: "Bone Archer", role: "archer", sprite: 10, attackType: "projectile", hp: 62, power: 11, speed: 1.15 },
  { id: "plague-brute", name: "Plague Brute", role: "brute", sprite: 11, attackType: "melee", hp: 122, power: 14, speed: 0.72 },
  { id: "mirror-wraith", name: "Mirror Wraith", role: "summoner", sprite: 12, attackType: "projectile", hp: 86, power: 13, speed: 1.18 },
];

const itemDefinitions = {
  rusty_sword: {
    id: "rusty_sword",
    name: "Rusty Sword",
    rarity: "basic",
    type: "weapon",
    slotType: "weapon",
    attackType: "melee",
    damage: 2,
    icon: 0,
  },
  bone_wand: {
    id: "bone_wand",
    name: "Bone Wand",
    rarity: "basic",
    type: "weapon",
    slotType: "weapon",
    attackType: "projectile",
    damage: 2,
    icon: 1,
    inherent: "Bone damage",
  },
  chipped_flask: {
    id: "chipped_flask",
    name: "Chipped Flask",
    rarity: "basic",
    type: "weapon",
    slotType: "weapon",
    attackType: "projectile",
    damage: 2,
    icon: 2,
    inherent: "Poison splash",
  },
  hunter_bow: {
    id: "hunter_bow",
    name: "Hunter Bow",
    rarity: "basic",
    type: "weapon",
    slotType: "weapon",
    attackType: "projectile",
    damage: 3,
    icon: 3,
  },
  iron_axe: {
    id: "iron_axe",
    name: "Iron Axe",
    rarity: "basic",
    type: "weapon",
    slotType: "weapon",
    attackType: "melee",
    damage: 4,
    icon: 4,
  },
  spark_orb: {
    id: "spark_orb",
    name: "Spark Orb",
    rarity: "basic",
    type: "weapon",
    slotType: "weapon",
    attackType: "projectile",
    damage: 4,
    icon: 5,
    inherent: "Arcane projectile",
  },
  leather_armor: {
    id: "leather_armor",
    name: "Leather Armor",
    rarity: "basic",
    type: "armor",
    slotType: "armor",
    armor: 3,
    icon: 6,
  },
  iron_helm: {
    id: "iron_helm",
    name: "Iron Helm",
    rarity: "basic",
    type: "armor",
    slotType: "armor",
    armor: 2,
    icon: 7,
  },
  plated_gloves: {
    id: "plated_gloves",
    name: "Plated Gloves",
    rarity: "basic",
    type: "armor",
    slotType: "armor",
    armor: 1,
    icon: 8,
    inherent: "+1 weapon damage",
  },
  silver_ring: {
    id: "silver_ring",
    name: "Silver Ring",
    rarity: "basic",
    type: "jewelry",
    slotType: "jewelry",
    icon: 9,
    statBoosts: [{ stat: "speed", value: 0.08 }],
  },
  amber_amulet: {
    id: "amber_amulet",
    name: "Amber Amulet",
    rarity: "basic",
    type: "jewelry",
    slotType: "jewelry",
    icon: 10,
    statBoosts: [{ stat: "hp", value: 10 }],
  },
  skull_blade: {
    id: "skull_blade",
    name: "Skull Blade",
    rarity: "unique",
    type: "weapon",
    slotType: "weapon",
    attackType: "melee",
    damage: 5,
    icon: 11,
    statBoosts: [{ stat: "damage", value: 2 }],
    uniqueEffect: "Heal on kill",
  },
  summoner_charm: {
    id: "summoner_charm",
    name: "Summoner Charm",
    rarity: "unique",
    type: "jewelry",
    slotType: "jewelry",
    icon: 12,
    uniqueEffect: "Summon a skeleton when killing an enemy",
  },
  frost_dagger: {
    id: "frost_dagger",
    name: "Frost Dagger",
    rarity: "basic",
    type: "weapon",
    slotType: "weapon",
    attackType: "melee",
    damage: 3,
    icon: 13,
    statBoosts: [{ stat: "freezeChance", value: 0.08 }],
  },
  oak_buckler: {
    id: "oak_buckler",
    name: "Oak Buckler",
    rarity: "basic",
    type: "armor",
    slotType: "armor",
    armor: 2,
    icon: 14,
    statBoosts: [{ stat: "block", value: 0.08 }],
  },
  shadow_boots: {
    id: "shadow_boots",
    name: "Shadow Boots",
    rarity: "basic",
    type: "armor",
    slotType: "armor",
    armor: 1,
    icon: 15,
    statBoosts: [{ stat: "evade", value: 0.08 }],
  },
  falcon_bow: {
    id: "falcon_bow",
    name: "Falcon Bow",
    rarity: "basic",
    type: "weapon",
    slotType: "weapon",
    attackType: "projectile",
    damage: 3,
    icon: 100,
    statBoosts: [{ stat: "critChance", value: 0.08 }],
  },
  thorn_staff: {
    id: "thorn_staff",
    name: "Thorn Staff",
    rarity: "basic",
    type: "weapon",
    slotType: "weapon",
    attackType: "projectile",
    damage: 2,
    icon: 101,
    statBoosts: [{ stat: "slowChance", value: 0.12 }],
  },
  wolf_pelt: {
    id: "wolf_pelt",
    name: "Wolf Pelt",
    rarity: "basic",
    type: "armor",
    slotType: "armor",
    armor: 2,
    icon: 102,
    statBoosts: [{ stat: "hp", value: 8 }, { stat: "evade", value: 0.04 }],
  },
  clockwork_ring: {
    id: "clockwork_ring",
    name: "Clockwork Ring",
    rarity: "basic",
    type: "jewelry",
    slotType: "jewelry",
    icon: 103,
    statBoosts: [{ stat: "speed", value: 0.08 }, { stat: "slowChance", value: 0.06 }],
  },
  glass_amulet: {
    id: "glass_amulet",
    name: "Glass Amulet",
    rarity: "basic",
    type: "jewelry",
    slotType: "jewelry",
    icon: 104,
    statBoosts: [{ stat: "critDamage", value: 0.25 }],
  },
  glacier_mail: {
    id: "glacier_mail",
    name: "Glacier Mail",
    rarity: "basic",
    type: "armor",
    slotType: "armor",
    armor: 4,
    icon: 105,
    statBoosts: [{ stat: "freezeChance", value: 0.05 }],
  },
  viper_charm: {
    id: "viper_charm",
    name: "Viper Charm",
    rarity: "unique",
    type: "jewelry",
    slotType: "jewelry",
    icon: 106,
    statBoosts: [{ stat: "critChance", value: 0.1 }],
    uniqueEffect: "Critical hits slow enemies",
  },
  bone_crown: {
    id: "bone_crown",
    name: "Bone Crown",
    rarity: "unique",
    type: "armor",
    slotType: "armor",
    armor: 1,
    icon: 107,
    tags: ["Skeleton", "Death"],
    uniqueEffect: "Skeletons gain +8 HP and +2 power",
  },
  thornmail: {
    id: "thornmail",
    name: "Thornmail",
    rarity: "unique",
    type: "armor",
    slotType: "armor",
    armor: 4,
    icon: 108,
    tags: ["Thorns", "Armor"],
    uniqueEffect: "Gain +5 thorns",
  },
  executioner_ring: {
    id: "executioner_ring",
    name: "Executioner Ring",
    rarity: "unique",
    type: "jewelry",
    slotType: "jewelry",
    icon: 109,
    tags: ["Execute", "Crit"],
    statBoosts: [{ stat: "critChance", value: 0.08 }],
    uniqueEffect: "Execute damage increased",
  },
  viper_flask: {
    id: "viper_flask",
    name: "Viper Flask",
    rarity: "unique",
    type: "weapon",
    slotType: "weapon",
    attackType: "projectile",
    damage: 3,
    icon: 110,
    tags: ["Poison", "Splash"],
    uniqueEffect: "Attacks gain poison chance",
  },
  hourglass_charm: {
    id: "hourglass_charm",
    name: "Hourglass Charm",
    rarity: "unique",
    type: "jewelry",
    slotType: "jewelry",
    icon: 111,
    tags: ["Slow", "Energy", "Haste"],
    statBoosts: [{ stat: "slowChance", value: 0.08 }],
    uniqueEffect: "Energy gain increased",
  },
  sentinel_shield: {
    id: "sentinel_shield",
    name: "Sentinel Shield",
    rarity: "unique",
    type: "armor",
    slotType: "armor",
    armor: 3,
    icon: 112,
    tags: ["Block", "Counter", "Guard"],
    statBoosts: [{ stat: "block", value: 0.08 }],
    uniqueEffect: "Blocks retaliate",
  },
  marrow_lantern: {
    id: "marrow_lantern",
    name: "Marrow Lantern",
    rarity: "unique",
    type: "jewelry",
    slotType: "jewelry",
    icon: 113,
    tags: ["Skeleton", "Energy"],
    statBoosts: [{ stat: "slowChance", value: 0.06 }],
    uniqueEffect: "Skeletons attack faster",
  },
  executioner_hood: {
    id: "executioner_hood",
    name: "Executioner Hood",
    rarity: "rare",
    type: "armor",
    slotType: "armor",
    armor: 2,
    icon: 114,
    tags: ["Execute", "Crit"],
    statBoosts: [{ stat: "critChance", value: 0.08 }, { stat: "critDamage", value: 0.2 }],
  },
  venom_needle: {
    id: "venom_needle",
    name: "Venom Needle",
    rarity: "magic",
    type: "weapon",
    slotType: "weapon",
    attackType: "melee",
    damage: 3,
    icon: 115,
    tags: ["Poison", "Crit"],
    statBoosts: [{ stat: "critChance", value: 0.04 }],
    uniqueEffect: "Attacks gain poison chance",
  },
  bastion_plate: {
    id: "bastion_plate",
    name: "Bastion Plate",
    rarity: "rare",
    type: "armor",
    slotType: "armor",
    armor: 5,
    icon: 116,
    tags: ["Armor", "Guard", "Block"],
    statBoosts: [{ stat: "block", value: 0.06 }, { stat: "hp", value: 10 }],
  },
  echo_orb: {
    id: "echo_orb",
    name: "Echo Orb",
    rarity: "unique",
    type: "jewelry",
    slotType: "jewelry",
    icon: 117,
    tags: ["Echo", "Energy"],
    statBoosts: [{ stat: "speed", value: 0.08 }],
    uniqueEffect: "Delayed echo improved",
  },
  frostbrand: {
    id: "frostbrand",
    name: "Frostbrand",
    rarity: "rare",
    type: "weapon",
    slotType: "weapon",
    attackType: "melee",
    damage: 4,
    icon: 118,
    tags: ["Freeze", "Slow"],
    statBoosts: [{ stat: "freezeChance", value: 0.08 }, { stat: "slowChance", value: 0.06 }],
  },
  beast_totem: {
    id: "beast_totem",
    name: "Beast Totem",
    rarity: "unique",
    type: "jewelry",
    slotType: "jewelry",
    icon: 119,
    tags: ["Regrowth", "Thorns"],
    uniqueEffect: "Regrowth also grants thorns",
  },
  quicksilver_ring: {
    id: "quicksilver_ring",
    name: "Quicksilver Ring",
    rarity: "magic",
    type: "jewelry",
    slotType: "jewelry",
    icon: 120,
    tags: ["Speed", "Haste"],
    statBoosts: [{ stat: "speed", value: 0.16 }],
  },
  grave_gauntlets: {
    id: "grave_gauntlets",
    name: "Grave Gauntlets",
    rarity: "rare",
    type: "armor",
    slotType: "armor",
    armor: 2,
    icon: 121,
    tags: ["Death", "Damage"],
    statBoosts: [{ stat: "damage", value: 2 }, { stat: "armor", value: 1 }],
    uniqueEffect: "Gain power on kill",
  },
  glass_arrowhead: {
    id: "glass_arrowhead",
    name: "Glass Arrowhead",
    rarity: "rare",
    type: "weapon",
    slotType: "weapon",
    attackType: "projectile",
    damage: 4,
    icon: 122,
    tags: ["Crit", "Precision"],
    statBoosts: [{ stat: "critChance", value: 0.08 }, { stat: "critDamage", value: 0.25 }],
  },
  witch_salve: {
    id: "witch_salve",
    name: "Witch Salve",
    rarity: "magic",
    type: "jewelry",
    slotType: "jewelry",
    icon: 123,
    tags: ["Healing", "Survive"],
    statBoosts: [{ stat: "hp", value: 14 }],
    uniqueEffect: "Healing improved",
  },
  time_splinter: {
    id: "time_splinter",
    name: "Time Splinter",
    rarity: "unique",
    type: "weapon",
    slotType: "weapon",
    attackType: "projectile",
    damage: 3,
    icon: 124,
    tags: ["Slow", "Rewind", "Energy"],
    statBoosts: [{ stat: "slowChance", value: 0.1 }],
    uniqueEffect: "Once per combat, survive a lethal hit with 20 HP",
  },
};

const defaultItemTags = {
  rusty_sword: ["Damage"],
  bone_wand: ["Skeleton", "Death"],
  chipped_flask: ["Poison", "Splash"],
  hunter_bow: ["Precision"],
  iron_axe: ["Damage"],
  spark_orb: ["Energy"],
  leather_armor: ["Survive"],
  iron_helm: ["Armor"],
  plated_gloves: ["Damage"],
  silver_ring: ["Speed"],
  amber_amulet: ["Survive"],
  skull_blade: ["Death", "Damage"],
  summoner_charm: ["Skeleton", "Death"],
  frost_dagger: ["Freeze"],
  oak_buckler: ["Block", "Guard"],
  shadow_boots: ["Evade"],
  falcon_bow: ["Crit", "Precision"],
  thorn_staff: ["Thorns", "Slow"],
  wolf_pelt: ["Evade", "Survive"],
  clockwork_ring: ["Slow", "Energy", "Haste"],
  glass_amulet: ["Crit"],
  glacier_mail: ["Freeze", "Armor"],
  viper_charm: ["Crit", "Slow"],
};

Object.entries(defaultItemTags).forEach(([id, tags]) => {
  if (itemDefinitions[id] && !itemDefinitions[id].tags) itemDefinitions[id].tags = tags;
});

const startingWeapons = {
  warrior: "rusty_sword",
  necromancer: "bone_wand",
  alchemist: "chipped_flask",
  druid: "thorn_staff",
  hunter: "falcon_bow",
  chronomancer: "spark_orb",
};

const levels = [
  {
    name: "Level 1",
    waves: [
      { type: "combat", name: "Grave Road Ambush", modifier: "ambush", enemyIds: ["hollow-raider", "ember-imp"] },
      { type: "combat", name: "Candlewood Skirmish", enemyIds: ["ash-wolf", "bone-archer"] },
      { type: "elite", name: "The Iron Toll", enemyIds: ["bridge-knight", "thorn-witch"] },
      { type: "boss", name: "Level Boss", enemyIds: ["oath-eater", "ember-imp"] },
    ],
  },
  {
    name: "Level 2",
    waves: [
      { type: "combat", name: "Market Ruins", modifier: "dust", enemyIds: ["glass-cultist", "bone-archer"] },
      { type: "combat", name: "Plague Gate", modifier: "blood-fog", enemyIds: ["plague-brute", "ember-imp"] },
      { type: "event", name: "Old Shrine", text: "A cracked altar remembers names no living mouth has spoken." },
      { type: "elite", name: "Mirror Chapel", enemyIds: ["mirror-wraith", "thorn-witch"] },
      { type: "combat", name: "Ashen Crossing", enemyIds: ["ash-wolf", "glass-cultist", "ember-imp"] },
      { type: "boss", name: "Oath-Eater's Return", enemyIds: ["oath-eater", "plague-brute", "mirror-wraith"] },
    ],
  },
  {
    name: "Level 3",
    waves: [
      { type: "combat", name: "Hollow Causeway", modifier: "ambush", enemyIds: ["hollow-raider", "bone-archer", "ember-imp"] },
      { type: "combat", name: "Thornmarket Riot", enemyIds: ["thorn-witch", "ash-wolf"] },
      { type: "elite", name: "Bridge of Knives", enemyIds: ["bridge-knight", "bone-archer", "glass-cultist"] },
      { type: "combat", name: "Wraith Lanterns", enemyIds: ["mirror-wraith", "ember-imp"] },
      { type: "event", name: "Ancestor's Door", text: "A door of bone opens only for names remembered by the bloodline." },
      { type: "combat", name: "Plague Procession", enemyIds: ["plague-brute", "hollow-raider", "thorn-witch"] },
      { type: "elite", name: "Glass Choir", enemyIds: ["glass-cultist", "mirror-wraith", "bone-archer"] },
      { type: "combat", name: "Ash Wolf Pack", modifier: "marked-prey", enemyIds: ["ash-wolf", "ash-wolf", "ember-imp"] },
      { type: "combat", name: "Last Mile", enemyIds: ["bridge-knight", "plague-brute"] },
      { type: "boss", name: "The Grave Regent", enemyIds: ["oath-eater", "mirror-wraith", "thorn-witch"] },
    ],
  },
  {
    name: "Level 4",
    waves: [
      { type: "combat", name: "Red Chapel Steps", enemyIds: ["glass-cultist", "glass-cultist", "bone-archer"] },
      { type: "combat", name: "Fever Alley", enemyIds: ["plague-brute", "ember-imp", "hollow-raider"] },
      { type: "elite", name: "The Toll Repaid", enemyIds: ["bridge-knight", "bridge-knight"] },
      { type: "combat", name: "Mirror Rain", modifier: "frozen-ground", enemyIds: ["mirror-wraith", "bone-archer", "ash-wolf"] },
      { type: "event", name: "Nameless Shrine", text: "The shrine offers a bargain to any hero willing to be remembered incorrectly." },
      { type: "combat", name: "Burnt Orchard", enemyIds: ["ember-imp", "thorn-witch", "ash-wolf"] },
      { type: "elite", name: "Plague Standard", enemyIds: ["plague-brute", "glass-cultist", "thorn-witch"] },
      { type: "combat", name: "Hollow Company", enemyIds: ["hollow-raider", "hollow-raider", "bone-archer"] },
      { type: "combat", name: "Black Gate", modifier: "blood-fog", enemyIds: ["mirror-wraith", "plague-brute", "bridge-knight"] },
      { type: "boss", name: "The Bloodline Judge", enemyIds: ["oath-eater", "bridge-knight", "glass-cultist", "mirror-wraith"] },
    ],
  },
  {
    name: "Level 5",
    waves: [
      { type: "combat", name: "Pantheon Breach", modifier: "ambush", enemyIds: ["mirror-wraith", "mirror-wraith", "ember-imp"] },
      { type: "combat", name: "Ashen Legion", enemyIds: ["ash-wolf", "hollow-raider", "bone-archer", "ember-imp"] },
      { type: "elite", name: "Cathedral Oath", enemyIds: ["bridge-knight", "glass-cultist", "thorn-witch"] },
      { type: "combat", name: "Witchfire Court", enemyIds: ["thorn-witch", "thorn-witch", "plague-brute"] },
      { type: "event", name: "The Last Memory", text: "Every Eternal Soul watches. One choice echoes through all future runs." },
      { type: "combat", name: "Bone Rain", enemyIds: ["bone-archer", "bone-archer", "mirror-wraith"] },
      { type: "elite", name: "The Crownless", enemyIds: ["oath-eater", "hollow-raider", "glass-cultist"] },
      { type: "combat", name: "Plague Star", modifier: "blood-fog", enemyIds: ["plague-brute", "plague-brute", "ember-imp"] },
      { type: "combat", name: "Godroad", enemyIds: ["bridge-knight", "mirror-wraith", "thorn-witch", "ash-wolf"] },
      { type: "boss", name: "The Eternal Maw", enemyIds: ["oath-eater", "plague-brute", "mirror-wraith", "bridge-knight"] },
    ],
  },
  ...createExtendedLevels(),
];

const rewards = [
  { id: "chain", name: "Chain", category: "skill", type: "Modifier", icon: 0, text: "Your main skill splashes into another enemy. +2 power." },
  { id: "giant", name: "Giant", category: "skill", type: "Modifier", icon: 1, text: "Your main skill hits harder but slower. +5 power, -1 speed." },
  { id: "lifebloom", name: "Lifebloom", category: "skill", type: "Skill", icon: 2, text: "Heal after each battle. +14 max health." },
  { id: "iron-vow", name: "Iron Vow", category: "skill", type: "Relic", icon: 3, text: "Start battles with extra armor. +5 armor." },
  { id: "ember-mark", name: "Ember Mark", category: "skill", type: "Modifier", icon: 4, text: "Burning enemies collapse faster. +3 power." },
  { id: "quickened", name: "Quickened", category: "skill", type: "Modifier", icon: 5, text: "Act more often in auto-combat. +2 speed." },
  { id: "split", name: "Split", category: "skill", type: "Modifier", icon: 6, text: "Your main skill tags a second target. +1 power, +1 speed." },
  { id: "pierce", name: "Pierce", category: "skill", type: "Modifier", icon: 7, text: "Your attacks punish the backline. +4 power." },
  { id: "echo", name: "Echo", category: "skill", type: "Modifier", icon: 8, text: "Every third hero attack repeats for half damage. +2 power." },
  { id: "bone-engine", name: "Bone Engine", category: "skill", type: "Modifier", icon: 100, text: "Skeletons gain +4 HP, +1 power, and faster attacks." },
  { id: "poison-cloud", name: "Poison Cloud", category: "skill", type: "Modifier", icon: 101, text: "Gain poison chance and occasional splash damage." },
  { id: "shield-riposte", name: "Shield Riposte", category: "skill", type: "Modifier", icon: 102, text: "Gain block chance. Blocks retaliate for damage." },
  { id: "frost-chain", name: "Frost Chain", category: "skill", type: "Modifier", icon: 103, text: "Gain freeze and slow chance." },
  { id: "execution-mark", name: "Execution Mark", category: "skill", type: "Modifier", icon: 104, text: "Deal more damage to wounded enemies. +6% crit." },
  { id: "regrowth-thorns", name: "Regrowth Thorns", category: "skill", type: "Modifier", icon: 105, text: "Gain light regeneration and thorn damage." },
  { id: "time-loop", name: "Time Loop", category: "skill", type: "Modifier", icon: 106, text: "Gain one rewind charge and improved energy gain." },
  { id: "glass-cannon", name: "Glass Cannon", category: "skill", type: "Modifier", icon: 107, text: "+6 power and +20% crit damage, but lose armor." },
  { id: "hunter_bow", name: "Hunter Bow", category: "item", type: "Weapon", icon: 7, text: "Add a projectile weapon to an open item slot. +3 weapon power." },
  { id: "iron_axe", name: "Iron Axe", category: "item", type: "Weapon", icon: 1, text: "Add a melee weapon to an open item slot. +4 weapon power." },
  { id: "spark_orb", name: "Spark Orb", category: "item", type: "Weapon", icon: 4, text: "Add a magic projectile weapon to an open item slot. +4 weapon power." },
  { id: "energy-flow", name: "Energy Flow", category: "ultimate", type: "Ultimate Mod", icon: 5, text: "Active hero gains +20 max energy charge speed this run." },
  { id: "double-cast", name: "Double Cast", category: "ultimate", type: "Ultimate Mod", icon: 8, text: "Active hero starts each combat with 35 energy." },
  { id: "wide-ultimate", name: "Wide Ultimate", category: "ultimate", type: "Ultimate Mod", icon: 6, text: "Active hero gains +2 power and +20 max HP." },
  { id: "gold-cache", name: "Gold Cache", category: "resource", type: "Resource", icon: 3, text: "Gain 45 gold." },
  { id: "magic-orb-cache", name: "Magic Orb", category: "resource", type: "Resource", icon: 4, text: "Gain 1 Magic Orb." },
  { id: "rare-orb-cache", name: "Rare Orb", category: "resource", type: "Resource", icon: 7, text: "Gain 1 Rare Orb." },
];

const inheritanceRewards = [
  { id: "bloodline-power", name: "Martial Lineage", stat: "power", value: 1, icon: 1, text: "New heroes +1 power.", summary: "+1 Power" },
  { id: "bloodline-hp", name: "Iron Birthright", stat: "hp", value: 6, icon: 2, text: "New heroes +6 HP.", summary: "+6 HP" },
  { id: "bloodline-speed", name: "Fleet Instinct", stat: "speed", value: 0.03, icon: 5, text: "New heroes +0.03 speed.", summary: "+0.03 Speed" },
  { id: "bloodline-gold", name: "Old Coin Rite", stat: "gold", value: 12, icon: 3, text: "Future runs +12 gold.", summary: "+12 Gold" },
  { id: "bloodline-energy", name: "First Spark", stat: "energy", value: 8, icon: 8, text: "New heroes +8 starting energy.", summary: "+8 Energy" },
  { id: "bloodline-crit", name: "Sharp Blood", stat: "critChance", value: 0.02, icon: 100, text: "New heroes +2% crit.", summary: "+2% Crit" },
  { id: "bloodline-block", name: "Shield Rite", stat: "block", value: 0.03, icon: 101, text: "New heroes +3% block.", summary: "+3% Block" },
  { id: "bloodline-evade", name: "Silent Step", stat: "evade", value: 0.03, icon: 102, text: "New heroes +3% evade.", summary: "+3% Evade" },
  { id: "bloodline-freeze", name: "Winter Vein", stat: "freezeChance", value: 0.03, icon: 108, text: "New heroes +3% freeze.", summary: "+3% Freeze" },
];

const levelUpPools = {
  stats: [
    { id: "power", type: "Stat", name: "+3 Damage", text: "Increase attacks and item scaling.", icon: 1, tags: ["Damage"] },
    { id: "hp", type: "Stat", name: "+18 HP", text: "Increase max health and heal for the same amount.", icon: 2, tags: ["Survive"] },
    { id: "speed", type: "Stat", name: "+0.15 Speed", text: "Attack timers fill faster.", icon: 5, tags: ["Speed"] },
  ],
  warrior: [
    { id: "warrior-block", type: "Warrior", name: "Shield Rhythm", text: "+8% block chance.", icon: 3, tags: ["Block"] },
    { id: "warrior-retaliate", type: "Warrior", name: "Retaliate", text: "Blocked hits strike back for 35% power.", icon: 100, tags: ["Block", "Counter"] },
    { id: "warrior-guard", type: "Warrior", name: "Guardian Oath", text: "+5 armor. Enemies prefer targeting this hero.", icon: 101, tags: ["Guard", "Armor"] },
    { id: "warrior-bastion", type: "Warrior", name: "Living Bastion", text: "+14 HP and +3 armor.", icon: 112, tags: ["Armor"] },
  ],
  necromancer: [
    { id: "necro-skeletons", type: "Necro", name: "Bone Reinforcement", text: "Future skeletons gain +6 HP and +1 power.", icon: 115, tags: ["Skeleton"] },
    { id: "necro-haste", type: "Necro", name: "Rattling March", text: "Future skeletons attack faster.", icon: 116, tags: ["Skeleton", "Speed"] },
    { id: "necro-death-energy", type: "Necro", name: "Grave Battery", text: "Gain more energy when enemies die.", icon: 122, tags: ["Death", "Energy"] },
    { id: "necro-bone-curse", type: "Necro", name: "Bone Curse", text: "+2 power and +8% slow chance.", icon: 106, tags: ["Curse", "Slow"] },
  ],
  alchemist: [
    { id: "alchemist-freeze", type: "Alchemist", name: "Chilled Mixture", text: "+8% freeze chance.", icon: 105, tags: ["Freeze"] },
    { id: "alchemist-poison", type: "Alchemist", name: "Lingering Toxin", text: "Attacks can add a poison burst.", icon: 123, tags: ["Poison"] },
    { id: "alchemist-splash", type: "Alchemist", name: "Splash Flask", text: "Attacks sometimes splash a second enemy.", icon: 102, tags: ["Splash"] },
    { id: "alchemist-field-kit", type: "Alchemist", name: "Field Kit", text: "+12 HP and healing effects improve.", icon: 4, tags: ["Healing"] },
  ],
  druid: [
    { id: "druid-evade", type: "Druid", name: "Wild Step", text: "+8% evade and +10 HP.", icon: 109, tags: ["Evade"] },
    { id: "druid-thorns", type: "Druid", name: "Briar Skin", text: "Attackers take thorn damage.", icon: 119, tags: ["Thorns"] },
    { id: "druid-regrowth", type: "Druid", name: "Regrowth Aura", text: "Living allies slowly heal in combat.", icon: 114, tags: ["Regen"] },
    { id: "druid-root", type: "Druid", name: "Root Lash", text: "+10% slow chance and +1 armor.", icon: 118, tags: ["Slow"] },
  ],
  hunter: [
    { id: "hunter-crit", type: "Hunter", name: "Killing Angle", text: "+10% crit chance.", icon: 7, tags: ["Crit"] },
    { id: "hunter-execute", type: "Hunter", name: "Mercy Shot", text: "Deal more damage to enemies below 35% HP.", icon: 110, tags: ["Execute"] },
    { id: "hunter-mark", type: "Hunter", name: "Marked Shot", text: "Crits slow and expose enemies.", icon: 104, tags: ["Mark"] },
    { id: "hunter-backline", type: "Hunter", name: "Backline Pressure", text: "+2 power. Attacks prefer the last enemy.", icon: 121, tags: ["Precision"] },
  ],
  chronomancer: [
    { id: "chrono-slow", type: "Chrono", name: "Time Drag", text: "+12% slow chance.", icon: 113, tags: ["Slow"] },
    { id: "chrono-haste", type: "Chrono", name: "Borrowed Seconds", text: "+0.12 speed and +15% energy gain.", icon: 8, tags: ["Haste"] },
    { id: "chrono-rewind", type: "Chrono", name: "Rewind Spark", text: "Once per combat, survive a lethal hit with 20 HP.", icon: 103, tags: ["Rewind"] },
    { id: "chrono-echo", type: "Chrono", name: "Delayed Echo", text: "Every fourth attack repeats for light damage.", icon: 124, tags: ["Echo"] },
  ],
};

function createExtendedLevels() {
  const templates = [
    ["Sable Aqueduct", ["hollow-raider", "glass-cultist", "bone-archer"], ["oath-eater", "glass-cultist", "mirror-wraith"]],
    ["Frost Reliquary", ["thorn-witch", "mirror-wraith", "ash-wolf"], ["oath-eater", "thorn-witch", "plague-brute"]],
    ["Sunken Parade", ["plague-brute", "ember-imp", "hollow-raider"], ["oath-eater", "plague-brute", "bridge-knight"]],
    ["Ivory Bastion", ["bridge-knight", "bone-archer", "glass-cultist"], ["oath-eater", "bridge-knight", "mirror-wraith"]],
    ["Blackroot Wilds", ["ash-wolf", "thorn-witch", "hollow-raider"], ["oath-eater", "ash-wolf", "thorn-witch"]],
  ];
  return Array.from({ length: 10 }, (_, index) => {
    const levelNumber = index + 6;
    const template = templates[index % templates.length];
    const rotations = [
      template[1],
      ["ember-imp", "bone-archer", "ash-wolf"],
      ["mirror-wraith", "glass-cultist", "thorn-witch"],
      ["plague-brute", "hollow-raider", "ember-imp"],
      ["bridge-knight", "bone-archer", "mirror-wraith"],
    ];
    return {
      name: `Level ${levelNumber}`,
      waves: [
        { type: "combat", name: `${template[0]} I`, enemyIds: rotations[0] },
        { type: "combat", name: "Broken Mile", enemyIds: rotations[1] },
        { type: "elite", name: "Marked Champion", enemyIds: rotations[2] },
        { type: "combat", name: "Lantern Kill", enemyIds: rotations[3] },
        { type: "event", name: "Worn Reliquary", text: "An old relic hums with borrowed victories." },
        { type: "combat", name: "Red Weather", enemyIds: rotations[4] },
        { type: "elite", name: "Twin Oaths", enemyIds: ["oath-eater", "bridge-knight"] },
        { type: "combat", name: "Last Bell", enemyIds: rotations[index % rotations.length] },
        { type: "combat", name: "Gate Pressure", enemyIds: ["plague-brute", "mirror-wraith", "thorn-witch"] },
        { type: "boss", name: `Level ${levelNumber} Boss`, enemyIds: template[2] },
      ],
    };
  });
}

const legacyTraits = [
  {
    id: "unyielding",
    title: "the Stubborn",
    line: "held the line after the shield broke",
    effect: "Legacy snapshot. May join future runs as a fixed Eternal ally.",
    apply(hero) {
      hero.armor += 6;
    },
  },
  {
    id: "merciful",
    title: "the Merciful",
    line: "saved more lives than they took",
    effect: "Legacy snapshot. Preserves its final build, gear, and stats.",
    apply(hero) {
      hero.maxHp += 18;
      hero.hp += 18;
    },
  },
  {
    id: "ashbound",
    title: "Ash-Tongue",
    line: "left every battlefield smoking",
    effect: "Legacy snapshot. Returns unchanged in future parties.",
    apply(hero) {
      hero.power += 4;
    },
  },
];

const names = ["Ragnar", "Selene", "Orin", "Veyra", "Maela", "Korr", "Ilya", "Dain"];
const ATTACK_INTERVAL_MULTIPLIER = 2;
const PASSIVE_ENERGY_PER_SECOND = 3.8;
const MAX_SUMMONS = 5;
const APP_VERSION = "v0.45";

const state = loadState();
let activeRun = null;
let combatTicker = null;
let combatWatchdog = null;
let transitionTimer = null;
let selectedUnitId = null;
let selectedInventoryIndex = null;
let selectedInspectorSlot = null;
let isPantheonOpen = false;
let isBestiaryOpen = false;

const screen = document.querySelector("#screen");
const logEl = document.querySelector("#log");
const soulsList = document.querySelector("#soulsList");
const bestiaryList = document.querySelector("#bestiaryList");
const togglePantheonBtn = document.querySelector("#togglePantheonBtn");
const toggleBestiaryBtn = document.querySelector("#toggleBestiaryBtn");
const resourcesList = document.querySelector("#resourcesList");
const inventoryList = document.querySelector("#inventoryList");
const heroInspector = document.querySelector("#heroInspector");
const runCount = document.querySelector("#runCount");
const soulCount = document.querySelector("#soulCount");
const versionLabel = document.querySelector("#versionLabel");
if (versionLabel) versionLabel.textContent = APP_VERSION;
document.querySelector("#resetBtn").addEventListener("click", resetSave);
document.querySelector("#resetTopBtn").addEventListener("click", resetSave);
togglePantheonBtn?.addEventListener("click", () => {
  isPantheonOpen = !isPantheonOpen;
  renderSouls();
});
toggleBestiaryBtn?.addEventListener("click", () => {
  isBestiaryOpen = !isBestiaryOpen;
  renderBestiary();
});

render();

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    const parsed = JSON.parse(saved);
    return {
      runCount: parsed.runCount || 1,
      souls: parsed.souls || [],
      partyHeroes: parsed.partyHeroes || [],
      inventory: parsed.inventory || [],
      resources: normalizeResources(parsed.resources),
      inheritance: normalizeInheritance(parsed.inheritance),
      log: parsed.log || ["The chronicle begins."],
    };
  }
  return {
    runCount: 1,
    souls: [],
    partyHeroes: [],
    inventory: [],
    resources: normalizeResources(),
    inheritance: normalizeInheritance(),
    log: ["The chronicle begins."],
  };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function resetSave() {
  localStorage.removeItem(STORAGE_KEY);
  location.reload();
}

function render() {
  clearCombatTicker();
  runCount.textContent = `Run ${state.runCount}`;
  soulCount.textContent = `${state.souls.length} Souls`;
  renderSouls();
  renderBestiary();
  renderInventory();
  renderHeroInspector();
  renderLog();

  if (!activeRun) {
    renderHeroSelect();
    return;
  }

  if (activeRun.phase === "combat") renderCombat();
  if (activeRun.phase === "prep") renderPrep();
  if (activeRun.phase === "shop") renderShop();
  if (activeRun.phase === "reward") renderReward();
  if (activeRun.phase === "level-up") renderLevelUp();
  if (activeRun.phase === "loot") renderLoot();
  if (activeRun.phase === "combat-recap") renderCombatRecap();
  if (activeRun.phase === "event") renderEvent();
  if (activeRun.phase === "level-complete") renderLevelComplete();
  if (activeRun.phase === "complete") renderComplete();
  ensureCombatTickerHealthy();
}

function ensureCombatTickerHealthy() {
  if (!activeRun || activeRun.phase !== "combat" || activeRun.outcome) return;
  resolveCombatTerminalState();
  if (activeRun.phase === "combat" && !activeRun.outcome && !combatTicker) {
    startCombatTicker();
  }
}

function renderHeroSelect() {
  const mentorOptions = state.souls.slice(-3);
  screen.innerHTML = `
    <div class="screen-pad">
      <div class="screen-title">
        <div>
          <h2>Choose a Hero</h2>
          <p>Pick one of three founders. If they fall, they will enter the pantheon and shape future runs.</p>
        </section>
      </div>
      ${bloodlinePreviewMarkup()}
      ${partyPreviewMarkup()}
      <div class="hero-grid">
        ${heroClasses.map((hero, index) => heroCard(hero, mentorOptions[index])).join("")}
      </div>
    </div>
  `;

  document.querySelectorAll("[data-hero]").forEach((button) => {
    button.addEventListener("click", () => startRun(button.dataset.hero, button.dataset.mentor || null));
  });
}

function heroCard(hero, mentor) {
  return `
    <button class="choice-card" data-hero="${hero.id}" data-mentor="${mentor?.id || ""}">
      <div class="choice-card-head">
        ${heroPortraitMarkup(hero, `hero-portrait ${hero.id}`)}
        <div>
          <h3>${hero.name}</h3>
          <p>${hero.hook}</p>
        </div>
      </div>
      <div class="tags">${hero.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      <p><strong>Start:</strong> ${hero.skill}</p>
      <p><strong>Mechanic:</strong> ${hero.mechanic}</p>
      ${mentor ? `<p><strong>Mentor:</strong> ${mentor.name} ${mentor.title}</p>` : `<p><strong>Mentor:</strong> None yet</p>`}
      <div class="stat-row">
        <div class="stat"><strong>${hero.stats.hp}</strong><span class="muted">Health</span></div>
        <div class="stat"><strong>${hero.stats.power}</strong><span class="muted">Power</span></div>
        <div class="stat"><strong>${hero.stats.armor}</strong><span class="muted">Armor</span></div>
      </div>
    </button>
  `;
}

function bloodlinePreviewMarkup() {
  const inheritance = normalizeInheritance(state.inheritance);
  const entries = [
    ["HP", inheritance.hp ? `+${inheritance.hp}` : "0"],
    ["Power", inheritance.power ? `+${inheritance.power}` : "0"],
    ["Speed", inheritance.speed ? `+${inheritance.speed.toFixed(2)}` : "0"],
    ["Gold", inheritance.gold ? `+${inheritance.gold}` : "0"],
    ["Energy", inheritance.energy ? `+${inheritance.energy}` : "0"],
  ];
  return `
    <section class="run-preview bloodline-preview">
      <div>
        <strong>Bloodline</strong>
        <span>Starting bonuses for the next non-legacy hero.</span>
      </div>
      <div class="preview-stats">
        ${entries.map(([label, value]) => `<span>${label} <strong>${value}</strong></span>`).join("")}
      </div>
    </section>
  `;
}

function partyPreviewMarkup(currentHero = null) {
  const legacyHeroes = (state.partyHeroes || []).slice(-4);
  const slots = [
    currentHero ? partyPreviewMember(currentHero, "Current", "current") : partyPreviewPlaceholder(),
    ...legacyHeroes.map((hero) => partyPreviewMember(hero, "Eternal", "legacy")),
  ];
  return `
    <section class="party-preview">
      <div class="party-preview-head">
        <strong>${currentHero ? "Current Party" : "Next Run Party"}</strong>
        <span>${legacyHeroes.length} Eternal snapshots will join.</span>
      </div>
      <div class="party-preview-row">
        ${slots.join("")}
      </div>
    </section>
  `;
}

function partyPreviewPlaceholder() {
  return `
    <div class="party-chip current">
      <div class="mini-sprite empty-preview"></div>
      <div>
        <strong>New Hero</strong>
        <span>Chosen now</span>
      </div>
    </div>
  `;
}

function partyPreviewMember(hero, label, kind) {
  return `
    <div class="party-chip ${kind}">
      ${heroPortraitMarkup(hero, "mini-sprite")}
      <div>
        <strong>${hero.name}</strong>
        <span>${label} - ${hero.power} PWR / ${hero.maxHp} HP</span>
      </div>
    </div>
  `;
}

function startRun(classId, mentorId) {
  const heroClass = heroClasses.find((item) => item.id === classId);
  const mentor = state.souls.find((soul) => soul.id === mentorId);
  const hero = {
    id: `hero_${Date.now()}`,
    name: names[(state.runCount + state.souls.length) % names.length],
    classId,
    className: heroClass.name,
    mark: heroClass.mark,
    sprite: heroClass.sprite,
    skill: heroClass.skill,
    attackType: heroClass.attackType,
    maxHp: heroClass.stats.hp,
    hp: heroClass.stats.hp,
    power: heroClass.stats.power,
    armor: heroClass.stats.armor,
    speed: heroClass.stats.speed,
    level: 1,
    kills: 0,
    damageDealt: 0,
    traits: [...heroClass.tags],
    build: [heroClass.skill],
    itemSlots: createStartingItemSlots(classId),
  };
  applyInheritance(hero);

  if (mentor) {
    const trait = legacyTraits.find((item) => item.id === mentor.legacyTraitId);
    trait?.apply(hero);
    addLog(`${mentor.name} ${mentor.title} mentors ${hero.name}. ${mentor.effect}`);
  }

  activeRun = {
    hero,
    mentorId,
    levelIndex: 0,
    waveIndex: 0,
    phase: "prep",
    allies: createAllies(hero, mentor),
    enemies: createWave(0, 0),
  };
  addLog(`${hero.name} the ${hero.className} enters run ${state.runCount}.`);
  render();
}

function createWave(levelIndex, waveIndex) {
  const encounter = getCurrentEncounter(levelIndex, waveIndex);
  if (encounter.type === "event") return null;
  const modifier = getActiveEncounterModifier(encounter, levelIndex, waveIndex);
  const scaling = getEnemyScaling(levelIndex, waveIndex, encounter.type);
  return encounter.enemyIds.map((enemyId, index) => {
    const baseEnemy = enemies.find((enemy) => enemy.id === enemyId);
    const primaryBossScale = encounter.type === "boss" && index === 0 ? 1.55 : 1;
    return {
      ...baseEnemy,
      instanceId: `${enemyId}_${levelIndex}_${waveIndex}_${index}`,
      encounterType: encounter.type,
      side: "enemy",
      isBoss: encounter.type === "boss" && index === 0,
      maxHp: Math.round(baseEnemy.hp * scaling.hp * primaryBossScale),
      hp: Math.round(baseEnemy.hp * scaling.hp * primaryBossScale),
      power: Math.max(1, Math.round(baseEnemy.power * scaling.power)),
      attackTimer: getEnemyStartingTimer(modifier, index),
      attackInterval: getEncounterAttackInterval(baseEnemy.speed, "enemy", modifier),
      energy: 0,
      maxEnergy: baseEnemy.ultimate ? 100 : 0,
      ultimate: baseEnemy.ultimate,
      evade: modifier === "dust" ? 0.12 : 0,
      lifesteal: modifier === "blood-fog" ? 0.18 : 0,
      markedPrey: modifier === "marked-prey",
    };
  });
}

function getEnemyScaling(levelIndex, waveIndex, encounterType) {
  const breakdown = getEnemyScalingBreakdown(levelIndex, waveIndex, encounterType);
  const baseHp = 1 + breakdown.levelHp + breakdown.waveHp + breakdown.soulHp;
  const basePower = 1 + breakdown.levelPower + breakdown.wavePower;
  return {
    hp: baseHp * (1 + breakdown.encounterHp),
    power: basePower * (1 + breakdown.encounterPower),
  };
}

function getEnemyScalingBreakdown(levelIndex, waveIndex, encounterType) {
  const soulCount = Math.min(5, state.souls.length);
  const levelHp = levelIndex * 1.0;
  const waveHp = waveIndex * 0.025;
  const soulHp = soulCount * 0.025;
  const levelPower = levelIndex * 0.055;
  const wavePower = waveIndex * 0.016;
  const encounterHp = encounterType === "elite" ? 0.16 : encounterType === "boss" ? 0.08 : 0;
  const encounterPower = encounterType === "elite" ? 0.08 : encounterType === "boss" ? 0.05 : 0;
  return {
    levelHp,
    waveHp,
    soulHp,
    encounterHp,
    levelPower,
    wavePower,
    encounterPower,
  };
}

function createAllies(hero, mentor) {
  const allies = [
    {
      ...hero,
      instanceId: "hero_unit",
      side: "ally",
      isHero: true,
      attackType: hero.attackType,
      ultimate: hero.ultimate,
      energy: hero.startingEnergy || 0,
      maxEnergy: 100,
      energyGainBonus: hero.energyGainBonus || 0,
      attackTimer: 0,
      attackInterval: getAttackInterval(hero.speed, "ally"),
    },
  ];

  state.partyHeroes.slice(-4).forEach((partyHero, index) => {
    allies.push(createLegacyHeroUnit(partyHero, index));
  });

  return addStartingNecroSummons(allies);
}

function createLegacyHeroUnit(partyHero, index) {
  return {
    ...partyHero,
    itemSlots: normalizeItemSlots(partyHero.itemSlots),
    instanceId: `legacy_hero_${index}`,
    side: "ally",
    isLegacyHero: true,
    energy: partyHero.startingEnergy || 0,
    ultimate: partyHero.ultimate || (partyHero.className === "Necromancer" ? "mass_raise" : null),
    maxEnergy: partyHero.ultimate || partyHero.className === "Necromancer" ? 100 : 0,
    energyGainBonus: partyHero.energyGainBonus || 0,
    attackTimer: index * -0.28,
    attackInterval: getAttackInterval(partyHero.speed, "ally"),
  };
}

function renderCombat() {
  const { hero, allies, enemies: wave, levelIndex, waveIndex } = activeRun;
  const encounter = getCurrentEncounter(levelIndex, waveIndex);
  const progress = getLevelProgress(levelIndex, waveIndex);

  if (encounter.type === "event") {
    activeRun.phase = "event";
    render();
    return;
  }

  hero.echoCounter = hero.echoCounter ?? 0;
  if (!activeRun.outcome) activeRun.outcome = null;
  if (!activeRun.combatStats) resetCombatStats();

  screen.innerHTML = `
    <div class="level-progress">
      <div>
        <strong>${progress.levelName}</strong>
        <span>Wave ${progress.waveNumber} / ${progress.totalWaves}</span>
      </div>
      <div>
        <strong>${progress.untilBoss}</strong>
        <span>${progress.untilBoss === 0 ? "Boss wave" : "waves before boss"}</span>
      </div>
    </div>
    <div class="battlefield realtime" style="${combatBackgroundStyle(levelIndex)}">
      <div class="lane lane-enemy wave-row" id="enemyWave">
        ${wave.map((enemy) => combatUnitCard(enemy, encounter)).join("")}
      </div>
      <div class="lane lane-ally ally-lane">
        <div class="wave-row ally-row" id="allyWave">
          ${allies.filter((ally) => !ally.isSummon).map((ally) => combatUnitCard(ally, encounter)).join("")}
        </div>
        <div class="wave-row summon-row" id="summonWave">
          ${allies.filter((ally) => ally.isSummon).map((ally) => summonUnitToken(ally)).join("")}
        </div>
      </div>
      <div class="impact-text" id="impactText"></div>
      <div class="outcome-banner" id="outcomeBanner"></div>
    </div>
    <div class="combat-actions">
      <p><strong>${encounter.type.toUpperCase()}</strong> - ${wave.length} enemies, ${allies.length} allies.</p>
      <div class="tags">
        ${getActiveEncounterModifier(encounter, levelIndex, waveIndex) ? `<span class="stat-pill encounter-modifier">${getEncounterModifierText(getActiveEncounterModifier(encounter, levelIndex, waveIndex))}</span>` : ""}
        <span class="stat-pill">${hero.skill}</span>
        <span class="stat-pill">${hero.build.slice(-2).join(" + ")}</span>
        <span class="stat-pill combat-heartbeat" id="combatHeartbeat">${combatStatusText()}</span>
      </div>
    </div>
  `;

  updateCombatDom();
  attachCombatUnitHandlers();
  startCombatTicker();
}

function renderPrep() {
  const level = getCurrentLevel();
  const progress = getLevelProgress(activeRun.levelIndex, activeRun.waveIndex);
  const encounter = getCurrentEncounter(activeRun.levelIndex, activeRun.waveIndex);
  screen.innerHTML = `
    <div class="screen-pad">
      <div class="screen-title">
        <div>
          <h2>Prepare</h2>
          <p>${level.name}. Equip items in the Hero panel, then start the next encounter.</p>
        </div>
        <div class="prep-actions">
          <button class="secondary" id="shopBtn">Shop</button>
          <button class="primary" id="startEncounterBtn">Start Encounter</button>
        </div>
      </div>
      ${bloodlinePreviewMarkup()}
      ${partyPreviewMarkup(activeRun.hero)}
      ${encounterPreviewMarkup(encounter, progress)}
      <div class="prep-summary">
        <div><strong>${progress.levelName}</strong><span>Wave ${progress.waveNumber} / ${progress.totalWaves}</span></div>
        <div><strong>${state.resources.gold}</strong><span>Gold available</span></div>
      </div>
    </div>
  `;

  document.querySelector("#startEncounterBtn").addEventListener("click", startPreparedEncounter);
  document.querySelector("#shopBtn").addEventListener("click", () => {
    activeRun.phase = "shop";
    render();
  });
}

function encounterPreviewMarkup(encounter, progress) {
  if (!encounter || encounter.type === "event") {
    return `
      <section class="encounter-preview">
        <div class="encounter-preview-head">
          <div>
            <span class="tag">Event</span>
            <h3>${encounter?.name || "Unknown Event"}</h3>
          </div>
        </div>
        <p class="encounter-note">${encounter?.text || "No combat expected."}</p>
      </section>
    `;
  }

  const enemiesPreview = createWave(activeRun.levelIndex, activeRun.waveIndex) || [];
  const modifier = getActiveEncounterModifier(encounter, activeRun.levelIndex, activeRun.waveIndex);
  const scaling = getEnemyScalingBreakdown(activeRun.levelIndex, activeRun.waveIndex, encounter.type);
  const threat = getEncounterThreat(enemiesPreview, activeRun.allies || []);
  const roles = summarizeEnemyRoles(enemiesPreview);

  return `
    <section class="encounter-preview threat-${threat.level}">
      <div class="encounter-preview-head">
        <div>
          <span class="tag">${encounter.type}</span>
          <h3>${encounter.name}</h3>
        </div>
        <div class="threat-pill">
          <strong>${threat.label}</strong>
          <span>${threat.ratio.toFixed(1)}x pressure</span>
        </div>
      </div>
      <div class="encounter-preview-grid">
        <div class="encounter-stat-card">
          <strong>${enemiesPreview.length}</strong>
          <span>${enemiesPreview.length === 1 ? "Enemy" : "Enemies"}</span>
        </div>
        <div class="encounter-stat-card">
          <strong>${enemiesPreview.reduce((sum, enemy) => sum + enemy.maxHp, 0)}</strong>
          <span>Total HP</span>
        </div>
        <div class="encounter-stat-card">
          <strong>${enemiesPreview.reduce((sum, enemy) => sum + enemy.power, 0)}</strong>
          <span>Total Power</span>
        </div>
      </div>
      <div class="encounter-enemy-list">
        ${enemiesPreview.map((enemy) => `
          <div class="encounter-enemy ${enemy.isBoss ? "boss" : ""}">
            <div class="token sprite enemy-token" style="${spriteStyle(enemy.sprite)}"></div>
            <div>
              <strong>${enemy.name}</strong>
              <span>${formatRole(enemy.role)} - ${enemy.maxHp} HP / ${enemy.power} PWR</span>
            </div>
          </div>
        `).join("")}
      </div>
      <div class="tags encounter-tags">
        ${modifier ? `<span class="stat-pill encounter-modifier">${getEncounterModifierText(modifier)}</span>` : `<span class="stat-pill">No modifier</span>`}
        ${roles.map((role) => `<span class="stat-pill">${role}</span>`).join("")}
      </div>
      <div class="scaling-line">
        <span>Level +${Math.round(scaling.levelHp * 100)}% HP / +${Math.round(scaling.levelPower * 100)}% PWR</span>
        <span>Wave +${Math.round(scaling.waveHp * 100)}% HP / +${Math.round(scaling.wavePower * 100)}% PWR</span>
        <span>Souls +${Math.round(scaling.soulHp * 100)}% HP</span>
        ${scaling.encounterHp || scaling.encounterPower ? `<span>${encounter.type} +${Math.round(scaling.encounterHp * 100)}% HP / +${Math.round(scaling.encounterPower * 100)}% PWR</span>` : ""}
      </div>
    </section>
  `;
}

function summarizeEnemyRoles(units) {
  const counts = new Map();
  units.forEach((unit) => counts.set(formatRole(unit.role), (counts.get(formatRole(unit.role)) || 0) + 1));
  return [...counts.entries()].map(([role, count]) => count > 1 ? `${count} ${role}` : role);
}

function getEncounterThreat(enemiesPreview, alliesPreview) {
  const enemyHp = enemiesPreview.reduce((sum, enemy) => sum + enemy.maxHp, 0);
  const enemyPower = enemiesPreview.reduce((sum, enemy) => sum + enemy.power, 0);
  const livingAllies = alliesPreview.filter(isAlive);
  const allyHp = livingAllies.reduce((sum, ally) => sum + ally.maxHp + (ally.armor || 0) * 4, 0);
  const allyPower = livingAllies.reduce((sum, ally) => sum + ally.power + getWeapons(ally).reduce((weaponSum, weapon) => weaponSum + getItemAttackPower(weapon), 0), 0);
  const enemyPressure = enemyHp * 0.35 + enemyPower * 8;
  const partyPressure = Math.max(1, allyHp * 0.28 + allyPower * 8.5);
  const ratio = enemyPressure / partyPressure;
  if (ratio >= 1.28) return { level: "high", label: "High Threat", ratio };
  if (ratio >= 0.9) return { level: "medium", label: "Medium Threat", ratio };
  return { level: "low", label: "Low Threat", ratio };
}

function startPreparedEncounter() {
  activeRun.enemies = createWave(activeRun.levelIndex, activeRun.waveIndex);
  activeRun.allies = refreshAlliesForNextWave(activeRun.allies);
  resetCombatStats();
  resetCombatRuntime();
  activeRun.phase = activeRun.enemies ? "combat" : "event";
  render();
}

function resetCombatRuntime() {
  if (!activeRun) return;
  activeRun.outcome = null;
  activeRun.combatTickCount = 0;
  activeRun.lastTick = 0;
  activeRun.lastTickWall = 0;
  activeRun.lastProgressAt = Date.now();
}

function renderShop() {
  const offers = getShopOffers();
  screen.innerHTML = `
    <div class="screen-pad">
      <div class="screen-title">
        <div>
          <h2>Shop</h2>
          <p>Spend gold before the next encounter.</p>
        </div>
        <button class="primary" id="backToPrepBtn">Done</button>
      </div>
      <div class="shop-grid">
        ${offers.map((offer) => `
          <button class="shop-card" data-shop-offer="${offer.id}" ${state.resources.gold >= offer.cost ? "" : "disabled"}>
            <div class="item-icon" style="${itemIconStyle(offer.icon)}"></div>
            <div>
              <h3>${offer.name}</h3>
              <p>${offer.text}</p>
              <strong>${offer.cost} gold</strong>
            </div>
          </button>
        `).join("")}
      </div>
    </div>
  `;

  document.querySelector("#backToPrepBtn").addEventListener("click", () => {
    activeRun.phase = "prep";
    render();
  });
  document.querySelectorAll("[data-shop-offer]").forEach((button) => {
    button.addEventListener("click", () => buyShopOffer(button.dataset.shopOffer));
  });
}

function getShopOffers() {
  return [
    { id: "healing-potion", name: "Healing Potion", text: "Heal current hero for 30 HP.", icon: 11, cost: 18 },
    { id: "basic-item", name: "Traveling Gear", text: "Add a random basic item.", icon: 9, cost: 28 },
    { id: "battle-potion", name: "Battle Potion", text: "Current hero gains +2 power this run.", icon: 110, cost: 24 },
    { id: "magic-orb", name: "Magic Orb", text: "Upgrade a basic item to magic.", icon: 11, cost: 40 },
    { id: "rare-orb", name: "Rare Orb", text: "Upgrade a magic item to rare.", icon: 12, cost: 80 },
  ];
}

function buyShopOffer(offerId) {
  const offer = getShopOffers().find((item) => item.id === offerId);
  if (!offer || state.resources.gold < offer.cost) return;
  state.resources.gold -= offer.cost;
  if (offer.id === "healing-potion") {
    activeRun.hero.hp = Math.min(activeRun.hero.maxHp, activeRun.hero.hp + 30);
    syncHeroUnitFromHero();
  }
  if (offer.id === "basic-item") {
    const itemPool = getLootItemPool();
    state.inventory.push(createLootItem(randomFrom(itemPool), "basic"));
  }
  if (offer.id === "battle-potion") {
    activeRun.hero.power += 2;
    syncHeroUnitFromHero();
  }
  if (offer.id === "magic-orb") state.resources.magicOrb += 1;
  if (offer.id === "rare-orb") state.resources.rareOrb += 1;
  addLog(`Bought ${offer.name}.`);
  saveState();
  render();
}

function combatUnitCard(unit, encounter) {
  const sideLabel = unit.side === "ally" ? (unit.isSummon ? "Summon" : unit.isLegacyHero ? "Eternal" : "Ally") : "Enemy";
  const typeLine = unit.side === "ally" ? `${unit.className || "Hero"} - ${getWeaponSummary(unit)}` : `${formatRole(unit.role)} - ${encounter.name}`;
  const cardClass = unit.side === "ally" ? `ally-card ${unit.isSummon ? "summon-card" : unit.isLegacyHero ? "legacy-card" : "current-hero-card"}` : `enemy-card ${unit.isBoss ? "boss-card" : ""}`;
  const tokenClass = unit.side === "ally" ? "ally-token" : "enemy-token";
  const tokenMarkup = unit.side === "ally" && !unit.isSummon
    ? heroPortraitMarkup(unit, `token ${tokenClass}`)
    : `<div class="token sprite ${tokenClass}" style="${spriteStyle(unit.sprite)}"></div>`;
  return `
    <div class="fighter ${cardClass} ${selectedUnitId === unit.instanceId ? "selected-unit" : ""}" id="${unit.instanceId}" data-unit-id="${unit.instanceId}" data-side="${unit.side}">
      ${unit.side === "enemy" ? `<span class="role-badge role-${unit.role || "foe"}">${getRoleGlyph(unit.role)}</span>` : ""}
      ${tokenMarkup}
      <span class="side-label">${sideLabel}</span>
      <h3>${unit.name}</h3>
      <p>${typeLine}</p>
      ${unit.side === "ally" && !unit.isSummon ? `<div class="build-summary-mini">${getBuildSummary(unit).slice(0, 3).join(" · ")}</div>` : `<div class="build-summary-mini"></div>`}
      ${unit.side === "ally" && !unit.isSummon ? itemSlotsMarkup(unit) : `<div class="item-slots empty-slots"></div>`}
      <div class="energy ${unit.maxEnergy ? "" : "inactive"}"><span data-unit-energy="${unit.instanceId}"></span></div>
      <div class="hp"><span data-unit-hp="${unit.instanceId}"></span></div>
      <div class="timer"><span data-unit-timer="${unit.instanceId}"></span></div>
      <div class="tags">
        <span class="stat-pill stat-hp" data-unit-hp-text="${unit.instanceId}">${Math.max(0, Math.ceil(unit.hp))}/${unit.maxHp}</span>
        <span class="stat-pill stat-power">${unit.power}P</span>
      </div>
    </div>
  `;
}

function formatRole(role = "") {
  return role ? role.replace("-", " ").replace(/\b\w/g, (letter) => letter.toUpperCase()) : "Foe";
}

function getBuildSummary(unit) {
  if (!unit) return ["Unbuilt"];
  const tags = new Set(unit.buildTags || []);
  if (unit.block) tags.add(`Block ${Math.round(unit.block * 100)}%`);
  if (unit.retaliate) tags.add("Retaliate");
  if (unit.guardPriority) tags.add("Guard");
  if (unit.skeletonHpBonus || unit.skeletonPowerBonus || unit.skeletonSpeedBonus) tags.add("Skeletons");
  if (unit.poisonChance) tags.add(`Poison ${Math.round(unit.poisonChance * 100)}%`);
  if (unit.freezeChance) tags.add(`Freeze ${Math.round(unit.freezeChance * 100)}%`);
  if (unit.thorns) tags.add(`Thorns ${unit.thorns}`);
  if (unit.regenAura) tags.add("Regrowth");
  if (unit.critChance) tags.add(`Crit ${Math.round(unit.critChance * 100)}%`);
  if (unit.executeBonus) tags.add("Execute");
  if (unit.backlinePressure) tags.add("Backline");
  if (unit.slowChance) tags.add(`Slow ${Math.round(unit.slowChance * 100)}%`);
  if (unit.delayedEcho) tags.add("Echo");
  if (unit.rewindCharges) tags.add("Rewind");
  const recent = (unit.build || []).slice(-2);
  recent.forEach((name) => tags.add(name));
  return [...tags].slice(0, 8).length ? [...tags].slice(0, 8) : ["Starter"];
}

function getRoleGlyph(role = "") {
  const glyphs = {
    archer: "Aim",
    assassin: "Mark",
    boss: "Boss",
    brute: "Stun",
    caster: "AoE",
    healer: "Heal",
    skirmisher: "Fast",
    striker: "Hit",
    summoner: "Call",
    tank: "Guard",
  };
  return glyphs[role] || "Foe";
}

function summonUnitToken(unit) {
  return `
    <div class="summon-token ${selectedUnitId === unit.instanceId ? "selected-unit" : ""}" id="${unit.instanceId}" data-unit-id="${unit.instanceId}" data-side="${unit.side}">
      <div class="token sprite ally-token" style="${spriteStyle(unit.sprite)}"></div>
      <span>SUMMON</span>
      <div class="hp"><span data-unit-hp="${unit.instanceId}"></span></div>
      <div class="timer"><span data-unit-timer="${unit.instanceId}"></span></div>
    </div>
  `;
}

function attachCombatUnitHandlers() {
  document.querySelectorAll('[data-side="ally"]').forEach((card) => {
    card.addEventListener("click", () => {
      if (activeRun?.outcome) return;
      selectedUnitId = card.dataset.unitId;
      selectedInspectorSlot = null;
      render();
    });
  });
}

function resetCombatStats() {
  if (!activeRun) return;
  activeRun.combatStats = {
    startedAt: Date.now(),
    units: {},
    summonsCreated: 0,
    fallen: [],
  };
  [...(activeRun.allies || []), ...(activeRun.enemies || [])].forEach(ensureCombatStat);
}

function ensureCombatStat(unit) {
  if (!activeRun?.combatStats || !unit) return null;
  const id = unit.instanceId || unit.id || unit.name;
  if (!activeRun.combatStats.units[id]) {
    activeRun.combatStats.units[id] = {
      id,
      name: unit.name,
      side: unit.side,
      className: unit.className || formatRole(unit.role),
      isHero: !!unit.isHero,
      isLegacyHero: !!unit.isLegacyHero,
      isSummon: !!unit.isSummon,
      damageDealt: 0,
      damageTaken: 0,
      kills: 0,
      crits: 0,
      blocks: 0,
      dodges: 0,
      summonsCreated: 0,
      deathBy: null,
    };
  }
  return activeRun.combatStats.units[id];
}

function recordDamageDealt(attacker, damage) {
  const stats = ensureCombatStat(attacker);
  if (stats) stats.damageDealt += Math.max(0, Math.round(damage || 0));
}

function recordDamageTaken(target, damage) {
  const stats = ensureCombatStat(target);
  if (stats) stats.damageTaken += Math.max(0, Math.round(damage || 0));
}

function recordKill(attacker) {
  const stats = ensureCombatStat(attacker);
  if (stats) stats.kills += 1;
}

function recordCrit(attacker) {
  const stats = ensureCombatStat(attacker);
  if (stats) stats.crits += 1;
}

function recordBlock(unit) {
  const stats = ensureCombatStat(unit);
  if (stats) stats.blocks += 1;
}

function recordDodge(unit) {
  const stats = ensureCombatStat(unit);
  if (stats) stats.dodges += 1;
}

function recordSummonCreated(unit) {
  const stats = ensureCombatStat(unit);
  if (stats) stats.summonsCreated += 1;
  if (activeRun?.combatStats) activeRun.combatStats.summonsCreated += 1;
}

function recordFallen(unit, attacker) {
  if (!activeRun?.combatStats || !unit || activeRun.combatStats.fallen.some((fallen) => fallen.id === unit.instanceId)) return;
  const stats = ensureCombatStat(unit);
  if (stats) stats.deathBy = attacker?.name || "Unknown";
  activeRun.combatStats.fallen.push({
    id: unit.instanceId,
    name: unit.name,
    side: unit.side,
    isHero: !!unit.isHero,
    isLegacyHero: !!unit.isLegacyHero,
    isSummon: !!unit.isSummon,
    killer: attacker?.name || "Unknown",
  });
}

function startCombatTicker() {
  if (activeRun?.outcome) return;
  clearCombatTicker();
  activeRun.lastTick = performance.now();
  activeRun.lastTickWall = Date.now();
  activeRun.lastProgressAt = activeRun.lastProgressAt || Date.now();
  activeRun.combatTickCount = activeRun.combatTickCount || 0;
  combatTicker = window.setInterval(tickCombat, 80);
  combatWatchdog = window.setInterval(watchCombatStall, 1200);
}

function clearCombatTicker() {
  if (combatTicker) window.clearInterval(combatTicker);
  combatTicker = null;
  if (combatWatchdog) window.clearInterval(combatWatchdog);
  combatWatchdog = null;
}

function clearTransitionTimer() {
  if (transitionTimer) window.clearTimeout(transitionTimer);
  transitionTimer = null;
}

function tickCombat() {
  try {
    tickCombatUnsafe();
  } catch (error) {
    console.error("Combat tick failed", error);
    addLog("Combat recovered from a timing error.");
    recoverCombatTick();
  }
}

function tickCombatUnsafe() {
  if (!activeRun || activeRun.phase !== "combat" || activeRun.outcome) return;
  if (resolveCombatTerminalState()) return;
  const now = performance.now();
  const delta = Math.min(0.18, (now - activeRun.lastTick) / 1000);
  activeRun.lastTick = now;
  activeRun.lastTickWall = Date.now();
  activeRun.combatTickCount = (activeRun.combatTickCount || 0) + 1;

  const { allies, enemies: wave } = activeRun;
  allies.filter(isAlive).forEach((ally) => {
    ensureCombatTiming(ally, "ally");
    ally.attackTimer += delta;
    gainEnergy(ally, delta * PASSIVE_ENERGY_PER_SECOND);
    if (ally.regenAura) {
      const heal = delta * ally.regenAura * (1 + (ally.healingBonus || 0));
      (activeRun.allies || []).filter(isAlive).forEach((target) => {
        target.hp = Math.min(target.maxHp, target.hp + heal);
        syncHeroFromUnit(target);
      });
    }
  });
  wave.filter(isAlive).forEach((enemy) => {
    ensureCombatTiming(enemy, "enemy");
    enemy.attackTimer += delta;
    gainEnergy(enemy, delta * PASSIVE_ENERGY_PER_SECOND * 0.82);
  });

  allies.filter(isAlive).forEach((ally) => {
    if (!activeRun.outcome && ally.attackTimer >= ally.attackInterval) {
      ally.attackTimer = 0;
      safelyPerformCombatAction(() => performAllyAttack(ally), ally);
    }
  });

  wave.filter(isAlive).forEach((enemy) => {
    if (!activeRun.outcome && enemy.attackTimer >= enemy.attackInterval) {
      enemy.attackTimer = 0;
      safelyPerformCombatAction(() => performEnemyAttack(enemy), enemy);
    }
  });

  resolveCombatTerminalState();
  updateCombatDom();
}

function watchCombatStall() {
  if (!activeRun || activeRun.phase !== "combat" || activeRun.outcome) return;
  const now = Date.now();
  if (!activeRun.lastTickWall || now - activeRun.lastTickWall > 1800) {
    addLog("Combat ticker restarted.");
    startCombatTicker();
    return;
  }
  if ((now - (activeRun.lastProgressAt || now)) > 9000) {
    addLog("Combat timers forced after a stall.");
    [...(activeRun.allies || []), ...(activeRun.enemies || [])].filter(isAlive).forEach((unit) => {
      ensureCombatTiming(unit, unit.side);
      unit.attackTimer = Math.max(unit.attackTimer || 0, unit.attackInterval);
    });
    activeRun.lastProgressAt = now;
    updateCombatDom();
  }
}

function combatStatusText() {
  if (!activeRun || activeRun.phase !== "combat") return APP_VERSION;
  const tick = activeRun.combatTickCount || 0;
  const age = activeRun.lastTickWall ? Math.round((Date.now() - activeRun.lastTickWall) / 100) / 10 : 0;
  return `${APP_VERSION} · tick ${tick} · ${age}s`;
}

function recoverCombatTick() {
  if (!activeRun || activeRun.phase !== "combat" || activeRun.outcome) return;
  if (resolveCombatTerminalState()) return;
  const ally = (activeRun.allies || []).find(isAlive);
  const enemy = (activeRun.enemies || []).find(isAlive);
  if (ally && enemy) {
    const unit = ally.isSummon ? (activeRun.allies || []).find((candidate) => !candidate.isSummon && isAlive(candidate)) || ally : ally;
    performFallbackAttack(unit);
    if (!activeRun.outcome && isAlive(enemy)) performFallbackAttack(enemy);
  }
  updateCombatDom();
}

function resolveCombatTerminalState() {
  if (!activeRun || activeRun.phase !== "combat" || activeRun.outcome) return false;
  const enemies = activeRun.enemies || [];
  if (enemies.length && enemies.every((enemy) => !isAlive(enemy))) {
    checkWaveVictory();
    return !!activeRun.outcome;
  }
  if (!hasLivingHeroAllies()) {
    checkPartyDefeat();
    return !!activeRun.outcome;
  }
  return false;
}

function performAllyAttack(ally) {
  const { hero, enemies: wave } = activeRun;
  const target = getPrimaryTarget(ally);
  if (!target) return;

  const weapon = chooseWeapon(ally);
  ally.currentAttackType = weapon?.attackType || ally.attackType || "melee";
  ally.lastWeaponName = weapon?.name || "Unarmed";
  const weaponPower = getItemAttackPower(weapon);
  const crit = Math.random() < (ally.critChance || 0);
  if (crit) recordCrit(ally);
  const critMultiplier = crit ? 1.5 + (ally.critDamage || 0) : 1;
  let damage = Math.round(((ally.power + weaponPower) * 1.45 + ally.speed * 4) * random(0.85, 1.25) * critMultiplier);
  if (ally.executeBonus && target.hp / target.maxHp <= 0.35) {
    damage = Math.round(damage * (1 + ally.executeBonus));
  }
  const damageLanded = damageEnemy(target, damage, ally);
  if (damageLanded) {
    applyOffensiveStatuses(ally, target, crit);
    animateAttack("ally", ally, target, damage, { crit });
  } else {
    addLog(`${target.name} evades ${ally.name}.`);
  }
  gainEnergy(ally, 22);
  handleNecromancerSummons(ally);

  if (ally.isHero) {
    hero.echoCounter += 1;
  }

  if (ally.isHero && hero.build.includes("Chain")) {
    const splashTarget = randomFrom(wave.filter((enemy) => isAlive(enemy) && enemy.instanceId !== target.instanceId));
    if (splashTarget) {
      const splashDamage = Math.max(1, Math.round(damage * 0.45));
      damageEnemy(splashTarget, splashDamage, ally);
      animateAttack("ally", ally, splashTarget, splashDamage);
    }
  }

  if (ally.isHero && hero.build.includes("Split")) {
    const splitTarget = randomFrom(wave.filter((enemy) => isAlive(enemy) && enemy.instanceId !== target.instanceId));
    if (splitTarget) {
      const splitDamage = Math.max(1, Math.round(damage * 0.35));
      damageEnemy(splitTarget, splitDamage, ally);
      animateAttack("ally", ally, splitTarget, splitDamage);
    }
  }

  if (ally.alchemySplash && Math.random() < ally.alchemySplash) {
    const splashTarget = randomFrom(wave.filter((enemy) => isAlive(enemy) && enemy.instanceId !== target.instanceId));
    if (splashTarget) {
      const splashDamage = Math.max(1, Math.round(damage * 0.3));
      damageEnemy(splashTarget, splashDamage, ally);
      animateAttack("ally", ally, splashTarget, splashDamage);
    }
  }

  if (ally.isHero && hero.build.includes("Echo") && hero.echoCounter % 3 === 0 && isAlive(target)) {
    const echoDamage = Math.max(1, Math.round(damage * 0.5));
    damageEnemy(target, echoDamage, ally);
    animateAttack("ally", ally, target, echoDamage);
  }

  if (ally.delayedEcho && ally.echoCounter % 4 === 0 && isAlive(target)) {
    const echoDamage = Math.max(1, Math.round(damage * 0.32));
    damageEnemy(target, echoDamage, ally);
    animateAttack("ally", ally, target, echoDamage);
  }

  if (wave.every((enemy) => !isAlive(enemy))) {
    checkWaveVictory();
  }
}

function ensureCombatTiming(unit, side) {
  if (!Number.isFinite(unit.attackTimer)) unit.attackTimer = 0;
  if (!Number.isFinite(unit.attackInterval) || unit.attackInterval <= 0) {
    unit.attackInterval = getAttackInterval(unit.speed || 1, side);
  }
}

function performEnemyAttack(enemy) {
  if (resolveCombatTerminalState()) return;
  const target = getEnemyIntentTarget(enemy) || getEnemyTarget(enemy);
  enemy.intentTargetId = null;
  if (!target) return;
  if (enemy.frozenTurns && enemy.frozenTurns > 0) {
    enemy.frozenTurns -= 1;
    addLog(`${enemy.name} is frozen.`);
    return;
  }
  enemy.currentAttackType = enemy.attackType || "melee";
  if (Math.random() < getEffectiveEvade(target)) {
    recordDodge(target);
    showCombatCallout(document.querySelector(`#${target.instanceId}`), "DODGE", "dodge");
    addLog(`${target.name} evades ${enemy.name}.`);
    return;
  }
  const blocked = Math.random() < getEffectiveBlock(target);
  if (blocked) recordBlock(target);
  const mitigation = blocked ? 0.45 : 1;
  const roleMultiplier = enemy.role === "assassin" && enemy.markedPrey ? 1.22 : 1;
  const damage = Math.max(1, Math.round((enemy.power * 1.35 - target.armor * 0.28) * random(0.8, 1.3) * mitigation * roleMultiplier));
  const damageLanded = damageAlly(target, damage, enemy);
  if (!damageLanded) {
    gainEnergy(enemy, 18);
    return;
  }
  if (blocked) {
    showCombatCallout(document.querySelector(`#${target.instanceId}`), "BLOCK", "block");
  }
  if (blocked && target.retaliate && isAlive(enemy)) {
    const counterDamage = Math.max(1, Math.round(target.power * target.retaliate));
    damageEnemy(enemy, counterDamage, target);
    animateAttack("ally", target, enemy, counterDamage);
  }
  animateAttack("enemy", enemy, target, damage, { blocked });
  gainEnergy(enemy, 18);
  applyEnemyRoleEffect(enemy, target, damage);

  if (target.hp <= 0 && !target.defeated) {
    target.defeated = true;
    addLog(`${enemy.name} brings down ${target.name}.`);
  }

  if (!hasLivingHeroAllies()) {
    finishCombat(`${enemy.name} destroys the party.`, "Fallen");
  }
}

function safelyPerformCombatAction(action, unit) {
  try {
    action();
  } catch (error) {
    console.error("Combat action failed", error);
    addLog(`${unit?.name || "A unit"} stumbles, but combat continues.`);
    performFallbackAttack(unit);
  }
}

function performFallbackAttack(unit) {
  if (!activeRun || activeRun.outcome || !unit || !isAlive(unit)) return;
  if (unit.side === "enemy") {
    const target = randomFrom((activeRun.allies || []).filter(isAlive));
    if (!target) {
      finishCombat(`${unit.name} destroys the whole party.`, "Fallen");
      return;
    }
    const damage = Math.max(1, Math.round((unit.power || 1) * 0.8));
    target.hp -= damage;
    recordDamageDealt(unit, damage);
    recordDamageTaken(target, damage);
    syncHeroFromUnit(target);
    showDamageNumber(document.querySelector(`#${target.instanceId}`), damage);
    if (target.hp <= 0 && !target.defeated) {
      target.defeated = true;
      recordFallen(target, unit);
    }
    if (!hasLivingHeroAllies()) finishCombat(`${unit.name} destroys the party.`, "Fallen");
    return;
  }
  const target = randomFrom((activeRun.enemies || []).filter(isAlive));
  if (!target) {
    checkWaveVictory();
    return;
  }
  const damage = Math.max(1, Math.round((unit.power || 1) * 0.8));
  damageEnemy(target, damage, unit);
  showDamageNumber(document.querySelector(`#${target.instanceId}`), damage);
}

function checkPartyDefeat() {
  if (!activeRun || activeRun.phase !== "combat" || activeRun.outcome) return false;
  if (hasLivingHeroAllies()) return false;
  const killer = (activeRun.enemies || []).find(isAlive);
  finishCombat(`${killer?.name || "The enemy"} destroys the party.`, "Fallen");
  return true;
}

function applyOffensiveStatuses(attacker, target, crit) {
  if (!target || !isAlive(target)) return;
  if (Math.random() < (attacker.freezeChance || 0)) {
    target.frozenTurns = Math.max(target.frozenTurns || 0, 1);
    addLog(`${target.name} is frozen.`);
  }
  if (Math.random() < (attacker.poisonChance || 0)) {
    const poisonDamage = Math.max(2, Math.round(attacker.power * 0.32));
    damageEnemy(target, poisonDamage, attacker);
    showFloatingText(document.querySelector(`#${target.instanceId}`), "Poison", "summon-number");
  }
  if (crit && attacker.markedShot) {
    target.evade = Math.max(0, (target.evade || 0) - 0.04);
    target.attackTimer = Math.max(-target.attackInterval * 0.65, target.attackTimer - target.attackInterval * 0.45);
    addLog(`${target.name} is marked.`);
  }
  if (Math.random() < (attacker.slowChance || 0) || (crit && hasUniqueEffect(attacker, "Critical hits slow enemies"))) {
    target.attackTimer = Math.max(-target.attackInterval * 0.55, target.attackTimer - target.attackInterval * 0.35);
    addLog(`${target.name} is slowed.`);
  }
}

function damageEnemy(enemy, damage, attacker) {
  const hero = activeRun.hero;
  if (Math.random() < getEffectiveEvade(enemy)) {
    recordDodge(enemy);
    showCombatCallout(document.querySelector(`#${enemy.instanceId}`), "DODGE", "dodge");
    addLog(`${enemy.name} slips the hit.`);
    return false;
  }
  enemy.hp -= damage;
  activeRun.lastProgressAt = Date.now();
  recordDamageDealt(attacker, damage);
  recordDamageTaken(enemy, damage);
  if (attacker?.isHero) hero.damageDealt += damage;
  if (enemy.hp <= 0 && !enemy.defeated) {
    enemy.defeated = true;
    recordKill(attacker);
    if (attacker?.isHero) hero.kills += 1;
    if (attacker?.deathPowerBonus) attacker.power += attacker.deathPowerBonus;
    gainEnergy(attacker, 28 + (attacker?.deathEnergyBonus || 0));
    triggerKillEffects(attacker);
    addLog(`${attacker?.name || hero.name} defeats ${enemy.name}.`);
    checkWaveVictory();
  }
  return true;
}

function getEffectiveEvade(unit) {
  return taperedChance(unit?.evade || 0);
}

function getEffectiveBlock(unit) {
  return taperedChance(unit?.block || 0);
}

function taperedChance(value) {
  const rating = Math.max(0, value * 100);
  return rating / (100 + rating);
}

function damageAlly(target, damage, attacker) {
  if (target.rewindCharges && damage >= target.hp) {
    target.rewindCharges -= 1;
    target.hp = Math.min(target.maxHp, 20);
    syncHeroFromUnit(target);
    showFloatingText(document.querySelector(`#${target.instanceId}`), "Rewind", "summon-number");
    return false;
  }
  target.hp -= damage;
  activeRun.lastProgressAt = Date.now();
  recordDamageDealt(attacker, damage);
  recordDamageTaken(target, damage);
  syncHeroFromUnit(target);
  if (attacker?.lifesteal) {
    const heal = Math.max(1, Math.round(damage * attacker.lifesteal));
    attacker.hp = Math.min(attacker.maxHp, attacker.hp + heal);
  }
  if (target.thorns && attacker && attacker.side === "enemy" && isAlive(attacker)) {
    damageEnemy(attacker, target.thorns, target);
    showDamageNumber(document.querySelector(`#${attacker.instanceId}`), target.thorns);
  }
  if (target.hp <= 0 && !target.defeated) {
    target.defeated = true;
    recordFallen(target, attacker);
    addLog(`${attacker?.name || "An enemy"} brings down ${target.name}.`);
  }
  if (!hasLivingHeroAllies()) {
    checkPartyDefeat();
  }
  return true;
}

function applyEnemyRoleEffect(enemy, target, damage) {
  if (!activeRun || activeRun.outcome) return;
  if (enemy.role === "caster") {
    const splashTarget = randomFrom((activeRun.allies || []).filter((ally) => isAlive(ally) && ally.instanceId !== target.instanceId));
    if (splashTarget) {
      const splashDamage = Math.max(1, Math.round(damage * 0.42));
      damageAlly(splashTarget, splashDamage, enemy);
      animateAttack("enemy", enemy, splashTarget, splashDamage);
    }
  }
  if (enemy.role === "healer") {
    const injured = (activeRun.enemies || [])
      .filter((allyEnemy) => isAlive(allyEnemy) && allyEnemy.hp < allyEnemy.maxHp)
      .sort((a, b) => a.hp / a.maxHp - b.hp / b.maxHp)[0];
    if (injured) {
      const heal = Math.max(6, Math.round(enemy.power * 0.7));
      injured.hp = Math.min(injured.maxHp, injured.hp + heal);
      showFloatingText(document.querySelector(`#${injured.instanceId}`), `+${heal}`, "heal-number");
      addLog(`${enemy.name} mends ${injured.name}.`);
    }
  }
  if (enemy.role === "summoner" && Math.random() < 0.28) {
    summonEnemyShade(enemy);
  }
  if (enemy.role === "brute" && Math.random() < 0.35) {
    target.attackTimer = Math.max(-target.attackInterval * 0.5, target.attackTimer - target.attackInterval * 0.28);
    addLog(`${enemy.name} staggers ${target.name}.`);
  }
}

function triggerKillEffects(attacker) {
  if (!attacker || activeRun.outcome) return;
  if (hasUniqueEffect(attacker, "Summon a skeleton when killing an enemy")) summonBoneServant(attacker, "Summoner Charm");
}

function hasUniqueEffect(unit, effect) {
  return normalizeItemSlots(unit.itemSlots).some((item) => item?.uniqueEffect === effect);
}

function handleNecromancerSummons(ally) {
  if (!isNecromancerUnit(ally) || ally.isSummon || activeRun.outcome) return;
  const summonCount = activeRun.allies.filter((unit) => unit.isSummon).length;
  if (summonCount >= MAX_SUMMONS) return;
  ally.raiseCounter = (ally.raiseCounter || 0) + 1;
  if (ally.raiseCounter >= 2) {
    ally.raiseCounter = 0;
    summonBoneServant(ally, "Raise Skeleton");
  }
}

function isNecromancerUnit(unit) {
  return unit?.ultimate === "mass_raise"
    || unit?.className === "Necromancer"
    || unit?.skill === "Raise Skeleton"
    || (unit?.build || []).includes("Raise Skeleton");
}

function checkWaveVictory() {
  if (!activeRun || activeRun.phase !== "combat" || activeRun.outcome) return;
  const wave = activeRun.enemies || [];
  if (!wave.length || wave.some(isAlive)) return;
  const hero = activeRun.hero;
  const encounter = getCurrentEncounter(activeRun.levelIndex, activeRun.waveIndex);
  hero.level += encounter.type === "elite" ? 2 : 1;
  activeRun.pendingLevelUp = true;
  finishCombat(`${hero.name} clears ${encounter.name} with ${hero.skill}.`, "Victory");
}

function animateAttack(source, attackerUnit, targetUnit, damage, options = {}) {
  const attacker = document.querySelector(`#${attackerUnit.instanceId}`);
  const target = document.querySelector(`#${targetUnit.instanceId}`);
  if (!attacker || !target) return;
  attacker?.classList.remove("attack-up", "attack-down");
  target?.classList.remove("hit");
  void attacker?.offsetWidth;
  if ((attackerUnit.currentAttackType || attackerUnit.attackType) === "projectile") {
    attacker.classList.add(source === "ally" ? "recoil-down" : "recoil-up");
    launchProjectile(attacker, target, source, damage, options);
  } else {
    attacker.classList.add(source === "ally" ? "attack-up" : "attack-down");
    target.classList.add("hit");
    showDamageNumber(target, damage, options);
  }
  window.setTimeout(() => {
    attacker?.classList.remove("attack-up", "attack-down");
    attacker?.classList.remove("recoil-up", "recoil-down");
    target?.classList.remove("hit");
  }, 430);
}

function launchProjectile(attacker, target, source, damage, options = {}) {
  const battlefield = document.querySelector(".battlefield");
  if (!battlefield) return;
  const fieldRect = battlefield.getBoundingClientRect();
  const attackerRect = attacker.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();
  const startX = attackerRect.left + attackerRect.width / 2 - fieldRect.left;
  const startY = attackerRect.top + attackerRect.height / 2 - fieldRect.top;
  const endX = targetRect.left + targetRect.width / 2 - fieldRect.left;
  const endY = targetRect.top + targetRect.height / 2 - fieldRect.top;
  const projectile = document.createElement("div");
  projectile.className = `projectile ${source === "ally" ? "ally-projectile" : "enemy-projectile"}`;
  projectile.style.setProperty("--sx", `${startX}px`);
  projectile.style.setProperty("--sy", `${startY}px`);
  projectile.style.setProperty("--tx", `${endX - startX}px`);
  projectile.style.setProperty("--ty", `${endY - startY}px`);
  battlefield.appendChild(projectile);
  window.setTimeout(() => {
    target.classList.add("hit");
    showDamageNumber(target, damage, options);
  }, 240);
  window.setTimeout(() => {
    target.classList.remove("hit");
    projectile.remove();
  }, 520);
}

function showDamageNumber(target, damage, options = {}) {
  if (options.crit) {
    showCombatCallout(target, "CRIT", "crit");
    showFloatingText(target, `-${damage}`, "damage-number crit-number");
    return;
  }
  showFloatingText(target, `-${damage}`, options.blocked ? "damage-number blocked-number" : "damage-number");
}

function showCombatCallout(target, text, type) {
  if (!target) return;
  target.classList.remove("dodge-flash", "block-flash", "crit-flash");
  void target.offsetWidth;
  target.classList.add(`${type}-flash`);
  showFloatingText(target, text, `combat-callout ${type}-callout`);
  window.setTimeout(() => target.classList.remove(`${type}-flash`), 520);
}

function showFloatingText(target, text, className = "damage-number") {
  if (!target) return;
  const number = document.createElement("div");
  number.className = className;
  number.textContent = text;
  target.appendChild(number);
  window.setTimeout(() => number.remove(), 760);
}

function gainEnergy(unit, amount) {
  if (!unit?.maxEnergy || unit.maxEnergy <= 0 || activeRun?.outcome) return;
  const gainMultiplier = 1 + (unit.energyGainBonus || 0);
  unit.energy = Math.min(unit.maxEnergy, (unit.energy || 0) + amount * gainMultiplier);
  if (unit.energy >= unit.maxEnergy) {
    unit.energy = 0;
    triggerUltimate(unit);
  }
}

function triggerUltimate(unit) {
  if (!unit?.ultimate || !isAlive(unit)) return;
  const card = document.querySelector(`#${unit.instanceId}`);
  card?.classList.add("ultimate-cast");
  window.setTimeout(() => card?.classList.remove("ultimate-cast"), 720);

  if (unit.ultimate === "shield_wall") castShieldWall(unit);
  if (unit.ultimate === "mass_raise") castMassRaise(unit);
  if (unit.ultimate === "grand_mixture") castGrandMixture(unit);
  if (unit.ultimate === "oath_slam") castOathSlam(unit);
}

function castShieldWall(unit) {
  (activeRun.allies || []).filter(isAlive).forEach((ally) => {
    ally.armor += 2;
    ally.hp = Math.min(ally.maxHp, ally.hp + 10);
  });
  addLog(`${unit.name} casts Shield Wall.`);
}

function castMassRaise(unit) {
  if (fillSummonSlots(unit, "Mass Raise")) return;
  const target = getLowestHealthAlly();
  if (target) target.hp = Math.min(target.maxHp, target.hp + 18);
  addLog(`${unit.name} channels Mass Raise into healing.`);
}

function summonBoneServant(unit, sourceName) {
  const summonCount = activeRun.allies.filter((ally) => ally.isSummon).length;
  if (summonCount >= MAX_SUMMONS) {
    return false;
  }
  const summon = createSkeletonSummon(summonCount, unit);
  activeRun.allies.push(summon);
  ensureCombatStat(summon);
  recordSummonCreated(unit);
  appendSummonToCombat(summon);
  addLog(`${unit.name} raises a Bone Servant with ${sourceName}.`);
  return true;
}

function fillSummonSlots(unit, sourceName) {
  let created = 0;
  while (activeRun.allies.filter((ally) => ally.isSummon).length < MAX_SUMMONS) {
    if (!summonBoneServant(unit, sourceName)) break;
    created += 1;
  }
  return created > 0;
}

function appendSummonToCombat(summon) {
  if (activeRun.phase !== "combat" || activeRun.outcome) return;
  const allyWave = document.querySelector("#summonWave");
  const encounter = getCurrentEncounter(activeRun.levelIndex, activeRun.waveIndex);
  if (!allyWave || !encounter) return;
  allyWave.insertAdjacentHTML("beforeend", summonUnitToken(summon));
  const card = allyWave.querySelector(`[data-unit-id="${summon.instanceId}"]`);
  card?.addEventListener("click", () => {
    selectedUnitId = summon.instanceId;
    selectedInspectorSlot = null;
    render();
  });
}

function summonEnemyShade(enemy) {
  const wave = activeRun.enemies || [];
  const shadeCount = wave.filter((unit) => unit.isEnemySummon).length;
  if (shadeCount >= 2) return;
  const shade = {
    id: "mirror-shade",
    instanceId: `enemy_shade_${Date.now()}_${shadeCount}`,
    name: "Mirror Shade",
    role: "skirmisher",
    side: "enemy",
    isEnemySummon: true,
    sprite: 12,
    attackType: "projectile",
    hp: 28 + activeRun.levelIndex * 4,
    maxHp: 28 + activeRun.levelIndex * 4,
    power: 5 + activeRun.levelIndex,
    speed: 1.2,
    attackTimer: -0.1,
    attackInterval: getAttackInterval(1.2, "enemy"),
    energy: 0,
    maxEnergy: 0,
  };
  wave.push(shade);
  ensureCombatStat(shade);
  appendEnemyToCombat(shade);
  showFloatingText(document.querySelector(`#${shade.instanceId}`), "Summoned", "summon-number");
  addLog(`${enemy.name} splits off a Mirror Shade.`);
}

function appendEnemyToCombat(enemy) {
  if (activeRun.phase !== "combat" || activeRun.outcome) return;
  const enemyWave = document.querySelector("#enemyWave");
  const encounter = getCurrentEncounter(activeRun.levelIndex, activeRun.waveIndex);
  if (!enemyWave || !encounter) return;
  enemyWave.insertAdjacentHTML("beforeend", combatUnitCard(enemy, encounter));
  const card = enemyWave.querySelector(`[data-unit-id="${enemy.instanceId}"]`);
  card?.classList.add("summon-pop");
  window.setTimeout(() => card?.classList.remove("summon-pop"), 720);
}

function castGrandMixture(unit) {
  const roll = Math.random();
  if (roll < 0.34) {
    (activeRun.allies || []).filter(isAlive).forEach((ally) => {
      ally.hp = Math.min(ally.maxHp, ally.hp + 14);
    });
    addLog(`${unit.name} throws a healing Grand Mixture.`);
    return;
  }
  const target = randomFrom((activeRun.enemies || []).filter(isAlive));
  if (!target) return;
  const damage = roll < 0.67 ? 28 : 42;
  damageEnemy(target, damage, unit);
  showDamageNumber(document.querySelector(`#${target.instanceId}`), damage);
  addLog(`${unit.name} detonates Grand Mixture.`);
}

function castOathSlam(unit) {
  (activeRun.allies || []).filter(isAlive).forEach((ally) => {
    const damage = Math.max(5, Math.round(unit.power * 1.1 - ally.armor * 0.2));
    ally.hp -= damage;
    syncHeroFromUnit(ally);
    showDamageNumber(document.querySelector(`#${ally.instanceId}`), damage);
    if (ally.hp <= 0 && !ally.defeated) {
      ally.defeated = true;
      addLog(`${unit.name}'s Oath Slam brings down ${ally.name}.`);
    }
  });
  addLog(`${unit.name} casts Oath Slam.`);
  if (!hasLivingHeroAllies()) {
    finishCombat(`${unit.name} destroys the party.`, "Fallen");
  }
}

function cleanupCombatSummons() {
  activeRun.allies = (activeRun.allies || []).filter((ally) => !ally.isSummon);
}

function addStartingNecroSummons(allies) {
  const result = allies.filter((ally) => !ally.isSummon);
  const necros = result.filter((ally) => isNecromancerUnit(ally) && isAlive(ally)).slice(0, 2);
  necros.forEach((necro) => {
    if (result.filter((ally) => ally.isSummon).length < MAX_SUMMONS) {
      result.push(createSkeletonSummon(result.filter((ally) => ally.isSummon).length, necro));
    }
  });
  return result;
}

function createSkeletonSummon(index, owner = {}) {
  const hpBonus = owner.skeletonHpBonus || 0;
  const powerBonus = owner.skeletonPowerBonus || 0;
  const speed = 1.1 + (owner.skeletonSpeedBonus || 0);
  return {
    instanceId: `summon_skeleton_${Date.now()}_${index}`,
    name: "Bone Servant",
    className: "Summon",
    side: "ally",
    isSummon: true,
    sprite: 10,
    attackType: "melee",
    maxHp: 18 + hpBonus,
    hp: 18 + hpBonus,
    power: 3 + powerBonus,
    armor: 1,
    speed,
    energy: 0,
    maxEnergy: 0,
    itemSlots: [null, null, null],
    attackTimer: -0.2,
    attackInterval: getAttackInterval(speed, "ally"),
  };
}

function getLowestHealthAlly() {
  return (activeRun.allies || [])
    .filter(isAlive)
    .sort((a, b) => a.hp / a.maxHp - b.hp / b.maxHp)[0];
}

function getPrimaryTarget(ally) {
  const wave = activeRun.enemies || [];
  const alive = wave.filter(isAlive);
  if (!alive.length) return null;
  const tank = alive.find((enemy) => enemy.role === "tank" && Math.random() < 0.55);
  if (tank) return tank;
  if (ally.isHero && activeRun.hero.build.includes("Pierce")) {
    return alive[alive.length - 1];
  }
  if (ally.backlinePressure) {
    return alive[alive.length - 1];
  }
  return randomFrom(alive);
}

function getEnemyTarget(enemy, options = {}) {
  const shouldFinishOnEmpty = options.finishOnEmpty !== false;
  const aliveAllies = (activeRun.allies || []).filter(isAlive);
  if (!aliveAllies.length) {
    if (shouldFinishOnEmpty) finishCombat(`${enemy.name} destroys the whole party.`, "Fallen");
    return null;
  }
  if (enemy.role === "archer") {
    return aliveAllies.slice().sort((a, b) => a.hp / a.maxHp - b.hp / b.maxHp)[0];
  }
  if (enemy.role === "assassin") {
    return aliveAllies.slice().sort((a, b) => a.maxHp - b.maxHp || a.hp - b.hp)[0];
  }
  if (enemy.role === "tank" || enemy.role === "brute" || enemy.isBoss) {
    return randomFrom(aliveAllies.filter((ally) => !ally.isSummon)) || randomFrom(aliveAllies);
  }
  const guard = aliveAllies.find((ally) => !ally.isSummon && ally.guardPriority && Math.random() < 0.55);
  if (guard) return guard;
  return randomFrom(aliveAllies);
}

function getEnemyIntentTarget(enemy) {
  const target = (activeRun.allies || []).find((ally) => ally.instanceId === enemy.intentTargetId && isAlive(ally));
  return target || null;
}

function updateEnemyIntents() {
  if (!activeRun || activeRun.phase !== "combat" || activeRun.outcome) return;
  (activeRun.enemies || []).filter(isAlive).forEach((enemy) => {
    const attackProgress = enemy.attackInterval ? enemy.attackTimer / enemy.attackInterval : 0;
    const target = getEnemyIntentTarget(enemy);
    if (attackProgress >= 0.7 && !target) {
      enemy.intentTargetId = getEnemyTarget(enemy, { finishOnEmpty: false })?.instanceId || null;
    }
    if (attackProgress < 0.25 || !target) {
      if (attackProgress < 0.25) enemy.intentTargetId = null;
    }
  });
}

function hasLivingHeroAllies() {
  return (activeRun.allies || []).some((ally) => !ally.isSummon && isAlive(ally));
}

function syncHeroFromUnit(unit) {
  if (!unit.isHero) return;
  activeRun.hero.hp = unit.hp;
  activeRun.hero.maxHp = unit.maxHp;
  activeRun.hero.power = unit.power;
  activeRun.hero.armor = unit.armor;
  activeRun.hero.speed = unit.speed;
  activeRun.hero.critChance = unit.critChance || 0;
  activeRun.hero.critDamage = unit.critDamage || 0;
  activeRun.hero.block = unit.block || 0;
  activeRun.hero.evade = unit.evade || 0;
  activeRun.hero.freezeChance = unit.freezeChance || 0;
  activeRun.hero.slowChance = unit.slowChance || 0;
  activeRun.hero.retaliate = unit.retaliate || 0;
  activeRun.hero.guardPriority = unit.guardPriority || 0;
  activeRun.hero.skeletonHpBonus = unit.skeletonHpBonus || 0;
  activeRun.hero.skeletonPowerBonus = unit.skeletonPowerBonus || 0;
  activeRun.hero.skeletonSpeedBonus = unit.skeletonSpeedBonus || 0;
  activeRun.hero.deathEnergyBonus = unit.deathEnergyBonus || 0;
  activeRun.hero.deathPowerBonus = unit.deathPowerBonus || 0;
  activeRun.hero.poisonChance = unit.poisonChance || 0;
  activeRun.hero.alchemySplash = unit.alchemySplash || 0;
  activeRun.hero.healingBonus = unit.healingBonus || 0;
  activeRun.hero.thorns = unit.thorns || 0;
  activeRun.hero.regenAura = unit.regenAura || 0;
  activeRun.hero.executeBonus = unit.executeBonus || 0;
  activeRun.hero.markedShot = unit.markedShot || 0;
  activeRun.hero.backlinePressure = unit.backlinePressure || 0;
  activeRun.hero.rewindCharges = unit.rewindCharges || 0;
  activeRun.hero.delayedEcho = unit.delayedEcho || 0;
  activeRun.hero.buildTags = unit.buildTags || [];
  activeRun.hero.itemSlots = normalizeItemSlots(unit.itemSlots);
}

function isAlive(enemy) {
  return enemy.hp > 0;
}

function finishCombat(logLine, outcome) {
  if (!activeRun || activeRun.outcome) return;
  activeRun.outcome = outcome;
  addLog(logLine);
  updateCombatDom();
  const banner = document.querySelector("#outcomeBanner");
  if (banner) {
    banner.textContent = outcome;
    banner.classList.add("show");
  }
  clearCombatTicker();
  clearTransitionTimer();
  transitionTimer = window.setTimeout(() => {
    transitionTimer = null;
    activeRun.combatRecap = createCombatRecap(logLine, outcome);
    activeRun.phase = "combat-recap";
    render();
  }, 1150);
}

function createCombatRecap(logLine, outcome) {
  const encounter = getCurrentEncounter(activeRun.levelIndex, activeRun.waveIndex);
  const stats = activeRun.combatStats || { units: {}, fallen: [], summonsCreated: 0 };
  const units = Object.values(stats.units || {});
  const allies = units.filter((unit) => unit.side === "ally");
  const enemies = units.filter((unit) => unit.side === "enemy");
  const mvp = allies.slice().sort((a, b) => getMvpScore(b) - getMvpScore(a))[0] || null;
  return {
    outcome,
    logLine,
    encounterName: encounter?.name || "Encounter",
    encounterType: encounter?.type || "combat",
    waveLabel: `${getCurrentLevel().name} - Wave ${activeRun.waveIndex + 1}`,
    allies,
    enemies,
    fallen: stats.fallen || [],
    summonsCreated: stats.summonsCreated || 0,
    mvp,
  };
}

function getMvpScore(unit) {
  return (unit.damageDealt || 0) + (unit.kills || 0) * 35 + (unit.blocks || 0) * 12 + (unit.dodges || 0) * 12 + (unit.summonsCreated || 0) * 18;
}

function renderCombatRecap() {
  const recap = activeRun.combatRecap;
  if (!recap) {
    continueAfterCombatRecap();
    return;
  }
  const allyRows = recap.allies.filter((unit) => unit.damageDealt || unit.damageTaken || unit.kills || unit.crits || unit.blocks || unit.dodges || unit.summonsCreated || unit.isHero || unit.isLegacyHero);
  screen.innerHTML = `
    <div class="screen-pad">
      <div class="screen-title">
        <div>
          <h2>${recap.outcome === "Victory" ? "Combat Won" : "Run Lost"}</h2>
          <p>${recap.encounterName}. ${recap.logLine}</p>
        </div>
        <button class="primary" id="continueCombatRecapBtn">${recap.outcome === "Victory" ? "Choose Loot" : "Continue"}</button>
      </div>
      <section class="combat-recap-card ${recap.outcome === "Fallen" ? "fallen" : ""}">
        <div class="combat-recap-head">
          <div>
            <span class="tag">${recap.encounterType}</span>
            <h3>${recap.waveLabel}</h3>
          </div>
          ${recap.mvp ? `<div class="mvp-card"><strong>MVP</strong><span>${recap.mvp.name}</span></div>` : ""}
        </div>
        <div class="recap-items combat-recap-totals">
          <span><strong>${sumStats(recap.allies, "damageDealt")}</strong> damage dealt</span>
          <span><strong>${sumStats(recap.allies, "damageTaken")}</strong> damage taken</span>
          <span><strong>${sumStats(recap.allies, "kills")}</strong> kills</span>
          <span><strong>${sumStats(recap.allies, "crits")}</strong> crits</span>
          <span><strong>${sumStats(recap.allies, "blocks")}</strong> blocks</span>
          <span><strong>${sumStats(recap.allies, "dodges")}</strong> dodges</span>
        </div>
        <h3>Party Performance</h3>
        <div class="combat-recap-list">
          ${allyRows.map(combatRecapUnitRow).join("") || `<p class="empty">No party stats recorded.</p>`}
        </div>
        ${recap.fallen.length ? `
          <h3>Fallen</h3>
          <div class="combat-recap-list fallen-list">
            ${recap.fallen.map((fallen) => `
              <div class="combat-recap-row">
                <strong>${fallen.name}</strong>
                <span>${fallen.isSummon ? "Summon" : fallen.isLegacyHero ? "Eternal" : "Hero"} - fell to ${fallen.killer}</span>
              </div>
            `).join("")}
          </div>
        ` : ""}
      </section>
    </div>
  `;
  document.querySelector("#continueCombatRecapBtn").addEventListener("click", continueAfterCombatRecap);
}

function combatRecapUnitRow(unit) {
  return `
    <div class="combat-recap-row ${unit.isSummon ? "summon" : unit.isLegacyHero ? "legacy" : ""}">
      <div>
        <strong>${unit.name}</strong>
        <span>${unit.isSummon ? "Summon" : unit.isLegacyHero ? "Eternal" : unit.className || "Hero"}</span>
      </div>
      <div class="combat-recap-stats">
        <span>${unit.damageDealt || 0} DMG</span>
        <span>${unit.damageTaken || 0} taken</span>
        <span>${unit.kills || 0} K</span>
        <span>${unit.crits || 0} C</span>
        <span>${unit.blocks || 0} B</span>
        <span>${unit.dodges || 0} D</span>
        ${unit.summonsCreated ? `<span>${unit.summonsCreated} summons</span>` : ""}
      </div>
    </div>
  `;
}

function sumStats(units, key) {
  return units.reduce((sum, unit) => sum + (unit[key] || 0), 0);
}

function continueAfterCombatRecap() {
  if (!activeRun?.combatRecap) return;
  const outcome = activeRun.combatRecap.outcome;
  activeRun.combatRecap = null;
  if (outcome === "Fallen") {
    createSoul("fell in battle");
    return;
  }
  cleanupCombatSummons();
  activeRun.pendingLoot = generateLootChoices();
  activeRun.afterLootPhase = isCurrentBossWave() ? "level-complete" : "advance";
  activeRun.phase = "loot";
  render();
}

function updateCombatDom() {
  if (!activeRun || activeRun.phase !== "combat") return;
  if (!activeRun.outcome) updateEnemyIntents();
  setText("#combatHeartbeat", combatStatusText());
  const units = [...(activeRun.allies || []), ...(activeRun.enemies || [])];
  document.querySelectorAll(".intent-target, .intent-source, .charging-attack").forEach((node) => {
    node.classList.remove("intent-target", "intent-source", "charging-attack");
  });
  units.forEach((unit) => {
    setWidth(`[data-unit-energy="${unit.instanceId}"]`, unit.maxEnergy ? Math.min(100, ((unit.energy || 0) / unit.maxEnergy) * 100) : 0);
    setWidth(`[data-unit-hp="${unit.instanceId}"]`, healthPercent(unit.hp, unit.maxHp));
    setWidth(`[data-unit-timer="${unit.instanceId}"]`, Math.min(100, (unit.attackTimer / unit.attackInterval) * 100));
    setText(`[data-unit-hp-text="${unit.instanceId}"]`, `${Math.max(0, Math.ceil(unit.hp))}/${unit.maxHp}`);
    document.querySelector(`#${unit.instanceId}`)?.classList.toggle("defeated", !isAlive(unit));
    document.querySelector(`#${unit.instanceId}`)?.classList.toggle("energy-ready", !!unit.maxEnergy && (unit.energy || 0) >= unit.maxEnergy * 0.8);
  });
  (activeRun.enemies || []).filter(isAlive).forEach((enemy) => {
    const attackProgress = enemy.attackInterval ? enemy.attackTimer / enemy.attackInterval : 0;
    const sourceCard = document.querySelector(`#${enemy.instanceId}`);
    const targetCard = enemy.intentTargetId ? document.querySelector(`#${enemy.intentTargetId}`) : null;
    sourceCard?.classList.toggle("intent-source", !!targetCard);
    sourceCard?.classList.toggle("charging-attack", enemy.isBoss && attackProgress >= 0.82);
    targetCard?.classList.add("intent-target");
  });
}

function renderReward() {
  const options = pickRewards();
  const categoryLabel = getRewardCategoryLabel(options[0]?.category);
  screen.innerHTML = `
    <div class="screen-pad">
      <div class="screen-title">
        <div>
          <h2>Choose ${categoryLabel}</h2>
          <p>Pick one. Reward choices stay within one category so the decision is clean.</p>
        </div>
        <button class="danger" id="retireBtn">Retire Into Legend</button>
      </div>
      <div class="reward-grid">
        ${options.map((reward) => `
          <button class="reward-card" data-reward="${reward.id}">
            ${rewardIconMarkup(reward)}
            <div>
              <span class="tag">${reward.type}</span>
              <h3>${reward.name}</h3>
              <p>${reward.text}</p>
            </div>
          </button>
        `).join("")}
      </div>
    </div>
  `;

  document.querySelector("#retireBtn").addEventListener("click", () => createSoul("retired after victory"));
  document.querySelectorAll("[data-reward]").forEach((button) => {
    button.addEventListener("click", () => takeReward(button.dataset.reward));
  });
}

function rewardIconMarkup(reward) {
  if (reward.category === "item") {
    const item = itemDefinitions[reward.id];
    return `<div class="item-icon" style="${itemIconStyle(item?.icon ?? reward.icon)}"></div>`;
  }
  if (reward.category === "resource") {
    return `<div class="item-icon" style="${itemIconStyle(reward.icon)}"></div>`;
  }
  return `<div class="upgrade-icon upgrade-sprite" style="${upgradeIconStyle(reward.icon)}"></div>`;
}

function renderLoot() {
  const choices = activeRun.pendingLoot || generateLootChoices();
  activeRun.pendingLoot = choices;
  screen.innerHTML = `
    <div class="screen-pad">
      <div class="screen-title">
        <div>
          <h2>Choose Loot</h2>
          <p>Wave cleared. Pick one reward.</p>
        </div>
      </div>
      <div class="loot-grid">
        ${choices.map((choice, index) => lootChoiceCard(choice, index)).join("")}
      </div>
    </div>
  `;
  document.querySelectorAll("[data-loot-choice]").forEach((button) => {
    button.addEventListener("click", () => chooseLoot(Number(button.dataset.lootChoice)));
  });
}

function lootChoiceCard(choice, index) {
  if (choice.kind === "item") return itemLootCard(choice.item, index);
  return `
    <button class="loot-card resource" data-loot-choice="${index}">
      <div class="item-icon" style="${itemIconStyle(choice.icon)}"></div>
      <div class="loot-card-body">
        <strong>${choice.name}</strong>
        <span>${choice.text}</span>
      </div>
    </button>
  `;
}

function itemLootCard(item, index) {
  const matches = getItemBuildMatches(item, activeRun?.hero);
  return `
    <button class="loot-card rarity-${item.rarity} ${matches.length ? "build-match" : ""}" data-loot-choice="${index}">
      <div class="item-icon" style="${itemIconStyle(item.icon)}"></div>
      <div class="loot-card-body">
        <strong>${item.name}</strong>
        <span>${describeItem(item)}</span>
        <div class="item-tags">
          ${getItemTags(item).map((tag) => `<span class="${matches.includes(tag) ? "matches" : ""}">${tag}</span>`).join("")}
        </div>
        ${matches.length ? `<em>Matches: ${matches.join(", ")}</em>` : ""}
      </div>
    </button>
  `;
}

function chooseLoot(index) {
  const choices = activeRun.pendingLoot || [];
  const choice = choices[index];
  if (!choice) return;
  if (choice.kind === "gold") state.resources.gold += choice.amount;
  if (choice.kind === "magicOrb") state.resources.magicOrb += choice.amount;
  if (choice.kind === "rareOrb") state.resources.rareOrb += choice.amount;
  if (choice.kind === "item") state.inventory.push(choice.item);
  addLog(`Chose ${choice.name}.`);
  activeRun.pendingLoot = null;
  if (activeRun.pendingLevelUp) {
    activeRun.phase = "level-up";
    saveState();
    render();
  } else {
    saveState();
    continueAfterLoot();
  }
}

function pickRewards() {
  const categories = ["skill", "item", "ultimate", "resource"];
  const category = randomFrom(categories);
  return rewards
    .filter((reward) => reward.category === category)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
}

function getRewardCategoryLabel(category) {
  if (category === "item") return "an Item";
  if (category === "ultimate") return "an Ultimate Mod";
  if (category === "resource") return "a Resource";
  return "a Skill Modifier";
}

function renderLevelUp() {
  const hero = activeRun.hero;
  const options = getLevelUpOptions(hero);
  screen.innerHTML = `
    <div class="screen-pad">
      <div class="screen-title">
        <div>
          <h2>${hero.name} Reaches Level ${hero.level}</h2>
          <p>Choose one upgrade before the next encounter.</p>
        </div>
      </div>
      <div class="reward-grid">
        ${options.map((option) => `
          <button class="reward-card" data-stat-upgrade="${option.id}">
            <div class="upgrade-icon upgrade-sprite" style="${upgradeIconStyle(option.icon)}"></div>
            <div>
              <span class="tag">${option.type}</span>
              <h3>${option.name}</h3>
              <p>${option.text}</p>
              <div class="reward-tags">${(option.tags || []).map((tag) => `<span>${tag}</span>`).join("")}</div>
            </div>
          </button>
        `).join("")}
      </div>
    </div>
  `;
  document.querySelectorAll("[data-stat-upgrade]").forEach((button) => {
    button.addEventListener("click", () => takeStatUpgrade(button.dataset.statUpgrade));
  });
}

function getLevelUpOptions(hero) {
  const classPool = levelUpPools[hero.classId] || [];
  return [
    randomFrom(levelUpPools.stats),
    ...classPool.slice().sort(() => Math.random() - 0.5).slice(0, 2),
  ];
}

function takeStatUpgrade(stat) {
  const hero = activeRun.hero;
  const upgrade = findLevelUpOption(stat);
  if (stat === "power") hero.power += 3;
  if (stat === "hp") {
    hero.maxHp += 18;
    hero.hp += 18;
  }
  if (stat === "speed") hero.speed += 0.15;
  if (stat === "warrior-block") hero.block = (hero.block || 0) + 0.08;
  if (stat === "warrior-retaliate") hero.retaliate = (hero.retaliate || 0) + 0.35;
  if (stat === "warrior-guard") {
    hero.guardPriority = (hero.guardPriority || 0) + 1;
    hero.armor += 5;
  }
  if (stat === "warrior-bastion") {
    hero.maxHp += 14;
    hero.hp += 14;
    hero.armor += 3;
  }
  if (stat === "necro-skeletons") {
    hero.skeletonHpBonus = (hero.skeletonHpBonus || 0) + 6;
    hero.skeletonPowerBonus = (hero.skeletonPowerBonus || 0) + 1;
  }
  if (stat === "necro-haste") hero.skeletonSpeedBonus = (hero.skeletonSpeedBonus || 0) + 0.14;
  if (stat === "necro-death-energy") hero.deathEnergyBonus = (hero.deathEnergyBonus || 0) + 10;
  if (stat === "necro-bone-curse") {
    hero.power += 2;
    hero.slowChance = (hero.slowChance || 0) + 0.08;
  }
  if (stat === "alchemist-freeze") hero.freezeChance = (hero.freezeChance || 0) + 0.08;
  if (stat === "alchemist-poison") hero.poisonChance = (hero.poisonChance || 0) + 0.16;
  if (stat === "alchemist-splash") hero.alchemySplash = (hero.alchemySplash || 0) + 0.18;
  if (stat === "alchemist-field-kit") {
    hero.maxHp += 12;
    hero.hp += 12;
    hero.healingBonus = (hero.healingBonus || 0) + 0.18;
  }
  if (stat === "druid-evade") {
    hero.evade = (hero.evade || 0) + 0.08;
    hero.maxHp += 10;
    hero.hp += 10;
  }
  if (stat === "druid-thorns") hero.thorns = (hero.thorns || 0) + 4;
  if (stat === "druid-regrowth") hero.regenAura = (hero.regenAura || 0) + 1.2;
  if (stat === "druid-root") {
    hero.slowChance = (hero.slowChance || 0) + 0.1;
    hero.armor += 1;
  }
  if (stat === "hunter-crit") hero.critChance = (hero.critChance || 0) + 0.1;
  if (stat === "hunter-execute") hero.executeBonus = (hero.executeBonus || 0) + 0.35;
  if (stat === "hunter-mark") hero.markedShot = (hero.markedShot || 0) + 1;
  if (stat === "hunter-backline") {
    hero.backlinePressure = (hero.backlinePressure || 0) + 1;
    hero.power += 2;
  }
  if (stat === "chrono-slow") hero.slowChance = (hero.slowChance || 0) + 0.12;
  if (stat === "chrono-haste") {
    hero.speed += 0.12;
    hero.energyGainBonus = (hero.energyGainBonus || 0) + 0.15;
  }
  if (stat === "chrono-rewind") hero.rewindCharges = (hero.rewindCharges || 0) + 1;
  if (stat === "chrono-echo") hero.delayedEcho = (hero.delayedEcho || 0) + 1;
  if (upgrade) {
    hero.build.push(upgrade.name);
    hero.buildTags = [...new Set([...(hero.buildTags || []), ...(upgrade.tags || [])])];
  }
  addLog(`${hero.name} chooses ${upgrade?.name || stat} on level up.`);
  activeRun.pendingLevelUp = false;
  syncHeroUnitFromHero();
  continueAfterLoot();
  render();
}

function findLevelUpOption(id) {
  return Object.values(levelUpPools).flat().find((option) => option.id === id);
}

function continueAfterLoot() {
  const nextPhase = activeRun.afterLootPhase || "advance";
  activeRun.afterLootPhase = null;
  if (nextPhase === "advance") {
    advanceNode();
    return;
  }
  activeRun.phase = nextPhase;
  render();
}

function takeReward(rewardId) {
  const reward = rewards.find((item) => item.id === rewardId);
  const hero = activeRun.hero;
  const isWeaponReward = reward.type === "Weapon";
  const isResourceReward = reward.category === "resource";
  const isUltimateReward = reward.category === "ultimate";
  if (!isWeaponReward && !isResourceReward) hero.build.push(reward.name);

  if (reward.id === "chain") hero.power += 2;
  if (reward.id === "giant") {
    hero.power += 5;
    hero.speed = Math.max(0.6, hero.speed - 0.1);
  }
  if (reward.id === "lifebloom") {
    hero.maxHp += 14;
    hero.hp = Math.min(hero.maxHp, hero.hp + 24);
  }
  if (reward.id === "iron-vow") hero.armor += 5;
  if (reward.id === "ember-mark") hero.power += 3;
  if (reward.id === "quickened") hero.speed += 0.2;
  if (reward.id === "split") {
    hero.power += 1;
    hero.speed += 0.1;
  }
  if (reward.id === "pierce") hero.power += 4;
  if (reward.id === "echo") hero.power += 2;
  if (reward.id === "bone-engine") {
    hero.skeletonHpBonus = (hero.skeletonHpBonus || 0) + 4;
    hero.skeletonPowerBonus = (hero.skeletonPowerBonus || 0) + 1;
    hero.skeletonSpeedBonus = (hero.skeletonSpeedBonus || 0) + 0.08;
    hero.buildTags = [...new Set([...(hero.buildTags || []), "Skeleton", "Speed"])];
  }
  if (reward.id === "poison-cloud") {
    hero.poisonChance = (hero.poisonChance || 0) + 0.14;
    hero.alchemySplash = (hero.alchemySplash || 0) + 0.1;
    hero.buildTags = [...new Set([...(hero.buildTags || []), "Poison", "Splash"])];
  }
  if (reward.id === "shield-riposte") {
    hero.block = (hero.block || 0) + 0.06;
    hero.retaliate = Math.max(hero.retaliate || 0, 0.24);
    hero.buildTags = [...new Set([...(hero.buildTags || []), "Block", "Counter"])];
  }
  if (reward.id === "frost-chain") {
    hero.freezeChance = (hero.freezeChance || 0) + 0.06;
    hero.slowChance = (hero.slowChance || 0) + 0.08;
    hero.buildTags = [...new Set([...(hero.buildTags || []), "Freeze", "Slow"])];
  }
  if (reward.id === "execution-mark") {
    hero.executeBonus = (hero.executeBonus || 0) + 0.24;
    hero.critChance = (hero.critChance || 0) + 0.06;
    hero.buildTags = [...new Set([...(hero.buildTags || []), "Execute", "Crit"])];
  }
  if (reward.id === "regrowth-thorns") {
    hero.regenAura = (hero.regenAura || 0) + 0.45;
    hero.thorns = (hero.thorns || 0) + 2;
    hero.buildTags = [...new Set([...(hero.buildTags || []), "Regrowth", "Thorns"])];
  }
  if (reward.id === "time-loop") {
    hero.rewindCharges = (hero.rewindCharges || 0) + 1;
    hero.energyGainBonus = (hero.energyGainBonus || 0) + 0.12;
    hero.buildTags = [...new Set([...(hero.buildTags || []), "Rewind", "Energy"])];
  }
  if (reward.id === "glass-cannon") {
    hero.power += 6;
    hero.critDamage = (hero.critDamage || 0) + 0.2;
    hero.armor = Math.max(0, hero.armor - 2);
    hero.buildTags = [...new Set([...(hero.buildTags || []), "Damage", "Crit"])];
  }
  if (reward.id === "energy-flow") hero.energyGainBonus = (hero.energyGainBonus || 0) + 0.2;
  if (reward.id === "double-cast") hero.startingEnergy = (hero.startingEnergy || 0) + 35;
  if (reward.id === "wide-ultimate") {
    hero.power += 2;
    hero.maxHp += 20;
    hero.hp += 20;
  }
  if (reward.id === "gold-cache") state.resources.gold += 45;
  if (reward.id === "magic-orb-cache") state.resources.magicOrb += 1;
  if (reward.id === "rare-orb-cache") state.resources.rareOrb += 1;
  if (isWeaponReward) {
    const equipped = equipWeapon(hero, reward.id);
    addLog(equipped ? `${hero.name} equips ${reward.name}.` : `${hero.name} has no open item slot for ${reward.name}.`);
  }

  if (!isWeaponReward) addLog(`${hero.name} claims ${reward.name}.`);
  syncHeroUnitFromHero();
  advanceNode();
}

function advanceNode() {
  activeRun.waveIndex += 1;
  if (activeRun.waveIndex >= getCurrentLevel().waves.length) {
    activeRun.phase = "level-complete";
    render();
    return;
  }
  activeRun.enemies = createWave(activeRun.levelIndex, activeRun.waveIndex);
  activeRun.allies = refreshAlliesForNextWave(activeRun.allies);
  activeRun.combatStats = null;
  resetCombatRuntime();
  activeRun.phase = activeRun.enemies ? "prep" : "event";
  render();
}

function continueToNextLevel() {
  activeRun.levelIndex += 1;
  if (activeRun.levelIndex >= levels.length) {
    createSoul("ascended after defeating the final boss");
    return;
  }
  activeRun.waveIndex = 0;
  activeRun.enemies = createWave(activeRun.levelIndex, activeRun.waveIndex);
  activeRun.allies = refreshAlliesForNextWave(activeRun.allies);
  activeRun.combatStats = null;
  resetCombatRuntime();
  activeRun.phase = "prep";
  render();
}

function syncHeroUnitFromHero() {
  const heroUnit = activeRun.allies?.find((ally) => ally.isHero);
  if (!heroUnit) return;
  heroUnit.maxHp = activeRun.hero.maxHp;
  heroUnit.hp = activeRun.hero.hp;
  heroUnit.power = activeRun.hero.power;
  heroUnit.armor = activeRun.hero.armor;
  heroUnit.speed = activeRun.hero.speed;
  heroUnit.critChance = activeRun.hero.critChance || 0;
  heroUnit.critDamage = activeRun.hero.critDamage || 0;
  heroUnit.block = activeRun.hero.block || 0;
  heroUnit.evade = activeRun.hero.evade || 0;
  heroUnit.freezeChance = activeRun.hero.freezeChance || 0;
  heroUnit.slowChance = activeRun.hero.slowChance || 0;
  heroUnit.retaliate = activeRun.hero.retaliate || 0;
  heroUnit.guardPriority = activeRun.hero.guardPriority || 0;
  heroUnit.skeletonHpBonus = activeRun.hero.skeletonHpBonus || 0;
  heroUnit.skeletonPowerBonus = activeRun.hero.skeletonPowerBonus || 0;
  heroUnit.skeletonSpeedBonus = activeRun.hero.skeletonSpeedBonus || 0;
  heroUnit.deathEnergyBonus = activeRun.hero.deathEnergyBonus || 0;
  heroUnit.deathPowerBonus = activeRun.hero.deathPowerBonus || 0;
  heroUnit.poisonChance = activeRun.hero.poisonChance || 0;
  heroUnit.alchemySplash = activeRun.hero.alchemySplash || 0;
  heroUnit.healingBonus = activeRun.hero.healingBonus || 0;
  heroUnit.thorns = activeRun.hero.thorns || 0;
  heroUnit.regenAura = activeRun.hero.regenAura || 0;
  heroUnit.executeBonus = activeRun.hero.executeBonus || 0;
  heroUnit.markedShot = activeRun.hero.markedShot || 0;
  heroUnit.backlinePressure = activeRun.hero.backlinePressure || 0;
  heroUnit.rewindCharges = activeRun.hero.rewindCharges || 0;
  heroUnit.delayedEcho = activeRun.hero.delayedEcho || 0;
  heroUnit.buildTags = activeRun.hero.buildTags || [];
  heroUnit.itemSlots = normalizeItemSlots(activeRun.hero.itemSlots);
  heroUnit.energyGainBonus = activeRun.hero.energyGainBonus || 0;
  heroUnit.startingEnergy = activeRun.hero.startingEnergy || 0;
  heroUnit.baseStats = {
    maxHp: activeRun.hero.maxHp,
    power: activeRun.hero.power,
    armor: activeRun.hero.armor,
    speed: activeRun.hero.speed,
    critChance: activeRun.hero.critChance || 0,
    critDamage: activeRun.hero.critDamage || 0,
    block: activeRun.hero.block || 0,
    evade: activeRun.hero.evade || 0,
    freezeChance: activeRun.hero.freezeChance || 0,
    slowChance: activeRun.hero.slowChance || 0,
  };
  applyItemStats(heroUnit);
  heroUnit.attackInterval = getAttackInterval(heroUnit.speed, "ally");
}

function refreshAlliesForNextWave(allies) {
  const refreshed = allies.filter((ally) => !ally.isSummon).map((ally) => {
    if (ally.isHero) {
      return {
        ...ally,
        hp: activeRun.hero.hp,
        maxHp: activeRun.hero.maxHp,
        power: activeRun.hero.power,
        armor: activeRun.hero.armor,
        speed: activeRun.hero.speed,
        critChance: activeRun.hero.critChance || 0,
        critDamage: activeRun.hero.critDamage || 0,
        block: activeRun.hero.block || 0,
        evade: activeRun.hero.evade || 0,
        freezeChance: activeRun.hero.freezeChance || 0,
        slowChance: activeRun.hero.slowChance || 0,
        deathPowerBonus: activeRun.hero.deathPowerBonus || 0,
        itemSlots: normalizeItemSlots(activeRun.hero.itemSlots),
        energy: activeRun.hero.startingEnergy || ally.energy || 0,
        energyGainBonus: activeRun.hero.energyGainBonus || 0,
        attackTimer: 0,
        attackInterval: getAttackInterval(activeRun.hero.speed, "ally"),
      };
    }
    return {
      ...ally,
      attackTimer: -0.2,
    };
  });
  return addStartingNecroSummons(refreshed);
}

function renderEvent() {
  const encounter = getCurrentEncounter(activeRun.levelIndex, activeRun.waveIndex);
  const hasSoul = state.souls.length > 0;
  screen.innerHTML = `
    <div class="screen-pad">
      <div class="screen-title">
        <div>
          <h2>${encounter.name}</h2>
          <p>${encounter.text}</p>
        </div>
      </div>
      <div class="reward-grid">
        <button class="reward-card" data-event="blessing">
          <span class="tag">Shrine</span>
          <h3>Take the Blessing</h3>
          <p>Gain +4 power and continue.</p>
        </button>
        <button class="reward-card" data-event="memory" ${hasSoul ? "" : "disabled"}>
          <span class="tag">Memory</span>
          <h3>Speak a Known Name</h3>
          <p>${hasSoul ? "Honor an Eternal Soul and gain +8 armor." : "No souls have joined the pantheon yet."}</p>
        </button>
        <button class="reward-card" data-event="gold">
          <span class="tag">Risk</span>
          <h3>Break the Offering Bowl</h3>
          <p>Gain speed, but lose health.</p>
        </button>
      </div>
    </div>
  `;

  document.querySelectorAll("[data-event]").forEach((button) => {
    button.addEventListener("click", () => takeEvent(button.dataset.event));
  });
}

function renderLevelComplete() {
  const completedLevel = getCurrentLevel();
  const hasNextLevel = activeRun.levelIndex + 1 < levels.length;
  screen.innerHTML = `
    <div class="screen-pad">
      <div class="screen-title">
        <div>
          <h2>${completedLevel.name} Cleared</h2>
          <p>The party regroups before the next level. This pause is where level rewards, healing, and roster decisions will live.</p>
        </div>
        <button class="primary" id="continueLevelBtn">${hasNextLevel ? "Enter Next Level" : "Ascend Hero"}</button>
      </div>
      <div class="combat-card screen-pad">
        <h3>Party</h3>
        <p>${activeRun.allies.filter(isAlive).map((ally) => ally.name).join(" + ")}</p>
        <h3>Progress</h3>
        <p>${completedLevel.name} complete. ${hasNextLevel ? levels[activeRun.levelIndex + 1].name + " awaits." : "No more levels in this prototype."}</p>
      </div>
    </div>
  `;

  document.querySelector("#continueLevelBtn").addEventListener("click", continueToNextLevel);
}

function takeEvent(choice) {
  const hero = activeRun.hero;
  if (choice === "blessing") hero.power += 4;
  if (choice === "memory") {
    hero.armor += 8;
    const soul = state.souls[state.souls.length - 1];
    addLog(`${hero.name} speaks the name of ${soul.name} ${soul.title}.`);
  }
  if (choice === "gold") {
    hero.speed += 0.25;
    hero.hp -= 12;
  }

  if (hero.hp <= 0) {
    createSoul("was consumed by a shrine bargain");
    return;
  }

  advanceNode();
}

function createSoul(cause) {
  const hero = activeRun.hero;
  const recap = createRunRecap(cause);
  const trait = chooseLegacyTrait(hero);
  const soul = {
    id: `soul_${Date.now()}`,
    name: hero.name,
    title: trait.title,
    className: hero.className,
    level: hero.level,
    cause,
    legacyTraitId: trait.id,
    line: `${hero.name} ${trait.line}.`,
    effect: trait.effect,
    build: hero.build.slice(-4),
    kills: hero.kills,
    damageDealt: hero.damageDealt,
  };

  state.souls.push(soul);
  addHeroToLegacyParty(hero, soul);
  state.runCount += 1;
  addLog(`${soul.name} ${soul.title} becomes an Eternal Soul.`);
  activeRun = { phase: "complete", soul, recap, inheritanceOptions: pickInheritanceRewards(), chosenInheritance: null };
  saveState();
  render();
}

function addHeroToLegacyParty(hero, soul) {
  const partyHero = {
    id: soul.id,
    name: `${soul.name} ${soul.title}`,
    classId: hero.classId,
    className: hero.className,
    sprite: hero.sprite,
    attackType: hero.attackType || "melee",
    ultimate: hero.ultimate,
    maxHp: Math.max(42, Math.round(hero.maxHp * 0.5)),
    hp: Math.max(42, Math.round(hero.maxHp * 0.5)),
    power: Math.max(5, Math.round(hero.power * 0.5)),
    armor: Math.max(0, Math.round(hero.armor * 0.55)),
    speed: hero.speed,
    critChance: hero.critChance || 0,
    critDamage: hero.critDamage || 0,
    block: hero.block || 0,
    evade: hero.evade || 0,
    freezeChance: hero.freezeChance || 0,
    slowChance: hero.slowChance || 0,
    skeletonHpBonus: hero.skeletonHpBonus || 0,
    skeletonPowerBonus: hero.skeletonPowerBonus || 0,
    skeletonSpeedBonus: hero.skeletonSpeedBonus || 0,
    deathEnergyBonus: hero.deathEnergyBonus || 0,
    deathPowerBonus: hero.deathPowerBonus || 0,
    retaliate: hero.retaliate || 0,
    guardPriority: hero.guardPriority || 0,
    poisonChance: hero.poisonChance || 0,
    alchemySplash: hero.alchemySplash || 0,
    healingBonus: hero.healingBonus || 0,
    thorns: hero.thorns || 0,
    regenAura: hero.regenAura || 0,
    executeBonus: hero.executeBonus || 0,
    markedShot: hero.markedShot || 0,
    backlinePressure: hero.backlinePressure || 0,
    rewindCharges: hero.rewindCharges || 0,
    delayedEcho: hero.delayedEcho || 0,
    build: hero.build.slice(),
    buildTags: hero.buildTags || [],
    startingEnergy: hero.startingEnergy || 0,
    energyGainBonus: hero.energyGainBonus || 0,
    itemSlots: normalizeItemSlots(hero.itemSlots),
  };
  state.partyHeroes = [...(state.partyHeroes || []), partyHero].slice(-4);
}

function chooseLegacyTrait(hero) {
  if (hero.armor >= 16) return legacyTraits[0];
  if (hero.maxHp >= 120 || hero.build.includes("Lifebloom")) return legacyTraits[1];
  return legacyTraits[2];
}

function createRunRecap(cause) {
  const hero = activeRun.hero;
  const legacyAllies = (activeRun.allies || []).filter((ally) => ally.isLegacyHero);
  return {
    cause,
    hero: {
      name: hero.name,
      classId: hero.classId,
      className: hero.className,
      sprite: hero.sprite,
      maxHp: hero.maxHp,
      power: hero.power,
      armor: hero.armor,
      speed: hero.speed,
      level: hero.level,
      kills: hero.kills,
      damageDealt: hero.damageDealt,
      build: hero.build.slice(),
      items: normalizeItemSlots(hero.itemSlots).map((item) => item ? cloneItem(item) : null),
    },
    legacyAllies: legacyAllies.map((ally) => ({
      name: ally.name,
      classId: ally.classId,
      className: ally.className || "Hero",
      sprite: ally.sprite,
      maxHp: ally.maxHp,
      power: ally.power,
    })),
  };
}

function renderComplete() {
  const { soul, recap, inheritanceOptions = [], chosenInheritance } = activeRun;
  const hasInheritanceChoice = inheritanceOptions.length > 0;
  screen.innerHTML = `
    <div class="screen-pad">
      <div class="screen-title">
        <div>
          <h2>Run Recap</h2>
          <p>${soul.line} ${hasInheritanceChoice ? "Choose what the bloodline carries forward." : "The bloodline has grown."}</p>
        </div>
        ${hasInheritanceChoice ? "" : `<button class="primary" id="newRunBtn">Begin Next Run</button>`}
      </div>
      ${hasInheritanceChoice ? `
        <section class="recap-priority-choice">
          <h3 class="recap-section-title">Choose Inheritance</h3>
          <div class="inheritance-grid">
            ${inheritanceOptions.map((reward) => `
              <button class="inheritance-choice" data-inheritance="${reward.id}">
                <div class="upgrade-icon upgrade-sprite" style="${upgradeIconStyle(reward.icon)}"></div>
                <h3>${reward.name}</h3>
                <strong>${reward.summary}</strong>
                <p>${reward.text}</p>
              </button>
            `).join("")}
          </div>
        </section>
      ` : ""}
      <div class="recap-grid">
        <section class="recap-card eternal-recap">
          <div class="recap-head">
            ${heroPortraitMarkup(recap.hero, "mini-sprite")}
            <div>
              <span class="tag">New Eternal</span>
              <h3>${soul.name} ${soul.title}</h3>
              <p>${soul.className} - Level ${soul.level} - ${soul.cause}</p>
            </div>
          </div>
          <div class="hero-stat-grid">
            <span>HP <strong>${recap.hero.maxHp}</strong></span>
            <span>DMG <strong>${recap.hero.power}</strong></span>
            <span>ARM <strong>${recap.hero.armor}</strong></span>
            <span>SPD <strong>${recap.hero.speed.toFixed(2)}</strong></span>
          </div>
          <h3>Legacy Trait</h3>
          <p>${soul.effect}</p>
          <h3>Final Build</h3>
          <p>${recap.hero.build.join(" + ")}</p>
          <h3>Items</h3>
          <div class="recap-items">
            ${recap.hero.items.map((item) => `<span>${item ? `${item.name} (${item.rarity})` : "Empty"}</span>`).join("")}
          </div>
          <div class="recap-stats-line">
            <span>${recap.hero.kills} kills</span>
            <span>${recap.hero.damageDealt} damage dealt</span>
          </div>
        </section>
        <section class="recap-card">
          <h3>Returning Eternals</h3>
          <p>These snapshots return unchanged to the pantheon.</p>
          <div class="returning-list">
            ${recap.legacyAllies.length ? recap.legacyAllies.map((ally) => `
              <div class="returning-row">
                ${heroPortraitMarkup(ally, "mini-sprite")}
                <div>
                  <strong>${ally.name}</strong>
                  <span>${ally.className} - ${ally.power} PWR / ${ally.maxHp} HP</span>
                </div>
              </div>
            `).join("") : `<p class="empty">No Eternal allies joined this run.</p>`}
          </div>
          ${chosenInheritance ? `
            <div class="inheritance-summary">
              <span class="tag">Chosen Inheritance</span>
              <h3>${chosenInheritance.name}</h3>
              <p>${chosenInheritance.text}</p>
              ${bloodlinePreviewMarkup()}
            </div>
          ` : ""}
        </div>
      </div>
    </div>
  `;

  document.querySelector("#newRunBtn")?.addEventListener("click", () => {
      activeRun = null;
      saveState();
      render();
    });
  document.querySelectorAll("[data-inheritance]").forEach((button) => {
    button.addEventListener("click", () => takeInheritanceReward(button.dataset.inheritance));
  });
}

function renderSouls() {
  if (togglePantheonBtn) {
    togglePantheonBtn.textContent = isPantheonOpen ? "Hide" : "Show";
    togglePantheonBtn.setAttribute("aria-expanded", String(isPantheonOpen));
  }
  soulsList.classList.toggle("is-collapsed", !isPantheonOpen);
  if (!isPantheonOpen) {
    soulsList.innerHTML = "";
    return;
  }
  if (!state.souls.length) {
    soulsList.innerHTML = `<p class="empty">No Eternal Souls yet. The first fallen hero will appear here.</p>`;
    return;
  }

  soulsList.innerHTML = state.souls.slice().reverse().map((soul) => `
    <article class="soul-card">
      <h3>${soul.name} ${soul.title}</h3>
      <p>${soul.className} · Level ${soul.level}</p>
      <p>${soul.effect}</p>
    </article>
  `).join("");
}

function renderBestiary() {
  if (toggleBestiaryBtn) {
    toggleBestiaryBtn.textContent = isBestiaryOpen ? "Hide" : "Show";
    toggleBestiaryBtn.setAttribute("aria-expanded", String(isBestiaryOpen));
  }
  bestiaryList.classList.toggle("is-collapsed", !isBestiaryOpen);
  if (!isBestiaryOpen) {
    bestiaryList.innerHTML = "";
    return;
  }
  bestiaryList.innerHTML = enemies.map((enemy) => `
    <article class="bestiary-card">
      <div class="mini-sprite sprite" style="${spriteStyle(enemy.sprite)}"></div>
      <div>
        <strong>${enemy.name}</strong>
        <span>${enemy.power} PWR</span>
      </div>
    </article>
  `).join("");
}

function renderInventory() {
  const resources = state.resources;
  resourcesList.innerHTML = `
    <div class="resource-row"><span>Gold</span><strong>${resources.gold}</strong></div>
    <div class="resource-row"><span>Magic Orbs</span><strong>${resources.magicOrb}</strong></div>
    <div class="resource-row"><span>Rare Orbs</span><strong>${resources.rareOrb}</strong></div>
  `;

  if (!state.inventory.length) {
    inventoryList.innerHTML = `<p class="empty">No inventory items yet. Clear waves to get loot.</p>`;
    return;
  }

  inventoryList.innerHTML = state.inventory.map((item, index) => `
    <article class="inventory-item rarity-${item.rarity} ${selectedInventoryIndex === index ? "selected" : ""}">
      <div class="item-icon" style="${itemIconStyle(item.icon)}"></div>
      <div>
        <strong>${item.name}</strong>
        <span>${describeItem(item)}</span>
        <div class="inventory-actions">
          <button data-select-item="${index}">${selectedInventoryIndex === index ? "Selected" : "Select"}</button>
          ${item.rarity === "basic" && state.resources.magicOrb > 0 ? `<button data-magic-item="${index}">Magic</button>` : ""}
          ${item.rarity === "magic" && state.resources.rareOrb > 0 ? `<button data-rare-item="${index}">Rare</button>` : ""}
        </div>
      </div>
    </article>
  `).join("");

  document.querySelectorAll("[data-select-item]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedInventoryIndex = Number(button.dataset.selectItem);
      render();
    });
  });
  document.querySelectorAll("[data-magic-item]").forEach((button) => {
    button.addEventListener("click", () => upgradeInventoryItem(Number(button.dataset.magicItem), "magic"));
  });
  document.querySelectorAll("[data-rare-item]").forEach((button) => {
    button.addEventListener("click", () => upgradeInventoryItem(Number(button.dataset.rareItem), "rare"));
  });
}

function renderHeroInspector() {
  if (!activeRun?.allies?.length) {
    heroInspector.innerHTML = `<p class="empty">Start a run, then select a hero card.</p>`;
    return;
  }
  const selected = getSelectedAlly();
  const selectedItem = state.inventory[selectedInventoryIndex];
  const slots = normalizeItemSlots(selected.itemSlots);
  const isLockedSnapshot = selected.isLegacyHero;
  const inspectedItem = slots[selectedInspectorSlot] || null;

  heroInspector.innerHTML = `
    <article class="hero-detail ${isLockedSnapshot ? "legacy-detail" : ""}">
      <div class="hero-detail-head">
        ${selected.isSummon ? `<div class="mini-sprite sprite" style="${spriteStyle(selected.sprite)}"></div>` : heroPortraitMarkup(selected, "mini-sprite")}
        <div>
          <h3>${selected.name}</h3>
          <p>${selected.className || "Hero"} - ${selected.isHero ? "Current Run" : "Eternal Snapshot"}</p>
        </div>
      </div>
      <div class="hero-stat-grid">
        <span>HP <strong>${Math.max(0, Math.ceil(selected.hp))}/${selected.maxHp}</strong></span>
        <span>DMG <strong>${selected.power}</strong></span>
        <span>ARM <strong>${selected.armor}</strong></span>
        <span>SPD <strong>${selected.speed.toFixed(2)}</strong></span>
        <span>CRIT <strong>${Math.round((selected.critChance || 0) * 100)}%</strong></span>
        <span>DEF <strong>${Math.round(getEffectiveBlock(selected) * 100)}%/${Math.round(getEffectiveEvade(selected) * 100)}%</strong></span>
      </div>
      <h3>Ultimate</h3>
      <p>${getUltimateName(selected)} · ${selected.maxEnergy ? Math.round(((selected.energy || 0) / selected.maxEnergy) * 100) : 0}% energy</p>
      <h3>Build</h3>
      <div class="build-summary-tags">
        ${getBuildSummary(selected).map((tag) => `<span>${tag}</span>`).join("")}
      </div>
      <h3>Weapon Pool</h3>
      <p>${getWeapons(selected).map((weapon) => weapon.name).join(" / ") || "Unarmed"}</p>
      <h3>Item Slots</h3>
      <div class="inspect-slots">
        ${slots.map((item, slotIndex) => `
          <button class="inspect-slot rarity-${item?.rarity || "empty"} ${selectedInspectorSlot === slotIndex ? "selected" : ""}" data-inspect-slot="${slotIndex}" ${(!item && !selectedItem) || (!item && isLockedSnapshot) ? "disabled" : ""} title="${item?.name || "Empty slot"}">
            ${item ? `<span class="inspect-slot-icon" style="${itemIconStyle(item.icon)}"></span>` : `<span class="inspect-slot-empty"></span>`}
          </button>
        `).join("")}
      </div>
      ${inspectedItem ? itemPopoverMarkup(inspectedItem, isLockedSnapshot) : ""}
      ${selectedItem ? `<p class="selected-item-note">Selected: ${selectedItem.name}${isLockedSnapshot ? " - Eternal snapshots are locked" : " - tap a slot to equip"}</p>` : ""}
    </article>
  `;

  document.querySelectorAll("[data-inspect-slot]").forEach((button) => {
    button.addEventListener("click", () => handleInspectorSlotClick(Number(button.dataset.inspectSlot)));
  });
}

function itemPopoverMarkup(item, isLockedSnapshot) {
  return `
    <div class="item-popover">
      <div class="item-popover-head">
        <div class="item-icon" style="${itemIconStyle(item.icon)}"></div>
        <div>
          <strong>${item.name}</strong>
          <span>${item.rarity} ${item.type}</span>
        </div>
      </div>
      <p>${describeItem(item)}</p>
      <div class="item-tags">
        ${getItemTags(item).map((tag) => `<span class="${getItemBuildMatches(item, activeRun?.hero).includes(tag) ? "matches" : ""}">${tag}</span>`).join("")}
      </div>
      ${getItemBuildMatches(item, activeRun?.hero).length ? `<small>Matches build: ${getItemBuildMatches(item, activeRun?.hero).join(", ")}</small>` : ""}
      ${isLockedSnapshot ? `<small>Eternal snapshot item. It cannot be changed.</small>` : ""}
    </div>
  `;
}

function getSelectedAlly() {
  const allies = activeRun?.allies || [];
  return allies.find((ally) => ally.instanceId === selectedUnitId) || allies.find((ally) => ally.isHero) || allies[0];
}

function handleInspectorSlotClick(slotIndex) {
  const selectedItem = state.inventory[selectedInventoryIndex];
  const unit = getSelectedAlly();
  if (!unit) return;
  if (selectedItem && !unit.isLegacyHero) {
    equipSelectedItemToUnit(slotIndex);
    return;
  }
  selectedInspectorSlot = selectedInspectorSlot === slotIndex ? null : slotIndex;
  render();
}

function equipSelectedItemToUnit(slotIndex) {
  const item = state.inventory[selectedInventoryIndex];
  const unit = getSelectedAlly();
  if (!item || !unit) return;
  if (unit.isLegacyHero) {
    addLog(`${unit.name} is an Eternal snapshot and cannot be changed.`);
    render();
    return;
  }
  const previous = equipItemAtSlot(unit, item, slotIndex);
  if (unit.isHero) syncHeroFromUnit(unit);
  if (previous) state.inventory.push(previous);
  state.inventory.splice(selectedInventoryIndex, 1);
  selectedInventoryIndex = null;
  selectedInspectorSlot = null;
  addLog(`${unit.name} equips ${item.name}.`);
  saveState();
  render();
}

function equipInventoryItem(index) {
  const item = state.inventory[index];
  if (!item || !activeRun?.hero) return;
  const equipped = equipItem(activeRun.hero, item);
  if (!equipped) {
    addLog(`${activeRun.hero.name} has no open item slot.`);
    render();
    return;
  }
  state.inventory.splice(index, 1);
  syncHeroUnitFromHero();
  addLog(`${activeRun.hero.name} equips ${item.name}.`);
  saveState();
  render();
}

function upgradeInventoryItem(index, rarity) {
  const item = state.inventory[index];
  if (!item) return;
  if (rarity === "magic" && item.rarity === "basic" && state.resources.magicOrb > 0) {
    state.resources.magicOrb -= 1;
    state.inventory[index] = upgradeItemRarity(item, "magic");
  }
  if (rarity === "rare" && item.rarity === "magic" && state.resources.rareOrb > 0) {
    state.resources.rareOrb -= 1;
    state.inventory[index] = upgradeItemRarity(item, "rare");
  }
  saveState();
  render();
}

function renderLog() {
  logEl.innerHTML = state.log.slice(-10).reverse().map((entry) => `
    <div class="log-entry">${entry}</div>
  `).join("");
}

function addLog(entry) {
  state.log.push(entry);
  saveState();
}

function healthPercent(value, max) {
  return Math.max(0, Math.min(100, Math.round((value / max) * 100)));
}

function random(min, max) {
  return min + Math.random() * (max - min);
}

function randomFrom(items) {
  if (!items.length) return null;
  return items[Math.floor(Math.random() * items.length)];
}

function getAttackInterval(speed, side) {
  const base = side === "enemy" ? 2.15 : 2.1;
  const floor = side === "enemy" ? 0.85 : 0.8;
  return Math.max(floor, base - speed * 0.45) * ATTACK_INTERVAL_MULTIPLIER;
}

function getEncounterAttackInterval(speed, side, modifier = "") {
  const interval = getAttackInterval(speed, side);
  if (modifier === "frozen-ground") return interval * 1.18;
  if (modifier === "ambush" && side === "enemy") return interval * 0.92;
  return interval;
}

function getEnemyStartingTimer(modifier = "", index = 0) {
  if (modifier === "ambush") return 0.45 + index * 0.12;
  return index * -0.32;
}

function getActiveEncounterModifier(encounter = {}, levelIndex = 0, waveIndex = 0) {
  if (encounter.modifier) return encounter.modifier;
  if (encounter.type === "boss" || encounter.type === "event") return "";
  if (levelIndex < 5) return "";
  return ["ambush", "blood-fog", "frozen-ground", "dust", "marked-prey"][(levelIndex + waveIndex) % 5];
}

function getEncounterModifierText(modifier) {
  const labels = {
    "ambush": "Ambush: enemies start ready",
    "blood-fog": "Blood Fog: enemies leech",
    "frozen-ground": "Frozen Ground: slower timers",
    "dust": "Dust: enemies evade",
    "marked-prey": "Marked Prey: assassins hit harder",
  };
  return labels[modifier] || modifier;
}

function createStartingItemSlots(classId) {
  return normalizeItemSlots([itemDefinitions[startingWeapons[classId]], null, null]);
}

function normalizeItemSlots(slots) {
  const normalized = Array.isArray(slots) ? slots.slice(0, 3) : [];
  while (normalized.length < 3) normalized.push(null);
  return normalized.map((item) => {
    if (!item) return null;
    return item.rarity ? item : itemDefinitions[item.id] || item;
  });
}

function getWeapons(unit) {
  return normalizeItemSlots(unit.itemSlots).filter((item) => item?.type === "weapon");
}

function chooseWeapon(unit) {
  return randomFrom(getWeapons(unit));
}

function equipWeapon(hero, itemId) {
  const item = itemDefinitions[itemId];
  if (!item || item.type !== "weapon") return false;
  return equipItem(hero, item);
}

function equipItem(hero, item) {
  hero.itemSlots = normalizeItemSlots(hero.itemSlots);
  const openIndex = hero.itemSlots.findIndex((slot) => !slot);
  if (openIndex === -1) return false;
  equipItemAtSlot(hero, item, openIndex);
  return true;
}

function equipItemAtSlot(unit, item, slotIndex) {
  unit.itemSlots = normalizeItemSlots(unit.itemSlots);
  const previous = unit.itemSlots[slotIndex] || null;
  unit.itemSlots[slotIndex] = item;
  applyItemStats(unit);
  return previous;
}

function applyItemStats(unit) {
  const base = unit.baseStats || {
    maxHp: unit.maxHp,
    power: unit.power,
    armor: unit.armor,
    speed: unit.speed,
    critChance: unit.critChance || 0,
    critDamage: unit.critDamage || 0,
    block: unit.block || 0,
    evade: unit.evade || 0,
    freezeChance: unit.freezeChance || 0,
    slowChance: unit.slowChance || 0,
  };
  unit.baseStats = base;
  unit.maxHp = base.maxHp;
  unit.power = base.power;
  unit.armor = base.armor;
  unit.speed = base.speed;
  unit.critChance = base.critChance || 0;
  unit.critDamage = base.critDamage || 0;
  unit.block = base.block || 0;
  unit.evade = base.evade || 0;
  unit.freezeChance = base.freezeChance || 0;
  unit.slowChance = base.slowChance || 0;

  normalizeItemSlots(unit.itemSlots).filter(Boolean).forEach((item) => {
    if (item.armor) unit.armor += item.armor;
    if (item.inherent === "+1 weapon damage") unit.power += 1;
    if (item.uniqueEffect === "Skeletons gain +8 HP and +2 power") {
      unit.skeletonHpBonus = (unit.skeletonHpBonus || 0) + 8;
      unit.skeletonPowerBonus = (unit.skeletonPowerBonus || 0) + 2;
    }
    if (item.uniqueEffect === "Skeletons attack faster") unit.skeletonSpeedBonus = (unit.skeletonSpeedBonus || 0) + 0.18;
    if (item.uniqueEffect === "Gain +5 thorns") unit.thorns = (unit.thorns || 0) + 5;
    if (item.uniqueEffect === "Execute damage increased") unit.executeBonus = (unit.executeBonus || 0) + 0.3;
    if (item.uniqueEffect === "Attacks gain poison chance") unit.poisonChance = (unit.poisonChance || 0) + 0.18;
    if (item.uniqueEffect === "Energy gain increased") unit.energyGainBonus = (unit.energyGainBonus || 0) + 0.18;
    if (item.uniqueEffect === "Blocks retaliate") unit.retaliate = Math.max(unit.retaliate || 0, 0.28);
    if (item.uniqueEffect === "Delayed echo improved") unit.delayedEcho = (unit.delayedEcho || 0) + 1;
    if (item.uniqueEffect === "Regrowth also grants thorns") {
      unit.regenAura = (unit.regenAura || 0) + 0.5;
      unit.thorns = (unit.thorns || 0) + 2;
    }
    if (item.uniqueEffect === "Gain power on kill") unit.deathPowerBonus = (unit.deathPowerBonus || 0) + 1;
    if (item.uniqueEffect === "Healing improved") unit.healingBonus = (unit.healingBonus || 0) + 0.25;
    if (item.uniqueEffect === "Once per combat, survive a lethal hit with 20 HP") unit.rewindCharges = (unit.rewindCharges || 0) + 1;
    (item.statBoosts || []).forEach((boost) => {
      if (boost.stat === "damage") unit.power += boost.value;
      if (boost.stat === "hp") unit.maxHp += boost.value;
      if (boost.stat === "armor") unit.armor += boost.value;
      if (boost.stat === "speed") unit.speed += boost.value;
      if (boost.stat === "critChance") unit.critChance += boost.value;
      if (boost.stat === "critDamage") unit.critDamage += boost.value;
      if (boost.stat === "block") unit.block += boost.value;
      if (boost.stat === "evade") unit.evade += boost.value;
      if (boost.stat === "freezeChance") unit.freezeChance += boost.value;
      if (boost.stat === "slowChance") unit.slowChance += boost.value;
    });
  });
  unit.hp = Math.min(unit.hp, unit.maxHp);
}

function getWeaponSummary(unit) {
  const weapons = getWeapons(unit);
  if (!weapons.length) return "Unarmed";
  if (weapons.length === 1) return weapons[0].name;
  return `${weapons.length} weapons`;
}

function getItemAttackPower(item) {
  if (!item) return 0;
  return item.damage || item.power || 0;
}

function itemSlotsMarkup(unit) {
  const slots = normalizeItemSlots(unit.itemSlots);
  return `
    <div class="item-slots">
      ${slots.map((item) => `
        <span class="item-slot ${item ? `filled rarity-${item.rarity}` : ""}" title="${item?.name || "Empty slot"}">
          ${item ? `<span class="item-slot-icon" style="${itemIconStyle(item.icon)}"></span>` : ""}
        </span>
      `).join("")}
    </div>
  `;
}

function generateLootChoices() {
  const itemPool = getLootItemPool();
  const weightedItem = pickWeightedLootItem(itemPool);
  const choices = [
    itemLootChoice(createLootItem(weightedItem)),
    goldLootChoice(Math.floor(random(18, 42))),
  ];
  if (Math.random() < 0.18) {
    choices.push(itemLootChoice(createLootItem(pickWeightedLootItem(getUniqueLootItemPool()), "unique")));
  } else if (Math.random() < 0.38) {
    choices.push(rareOrbLootChoice());
  } else if (Math.random() < 0.68) {
    choices.push(magicOrbLootChoice());
  } else {
    choices.push(itemLootChoice(createLootItem(pickWeightedLootItem(itemPool))));
  }
  return choices.sort(() => Math.random() - 0.5).slice(0, 3);
}

function getLootItemPool() {
  return [
    "leather_armor", "iron_helm", "plated_gloves", "silver_ring", "amber_amulet",
    "hunter_bow", "iron_axe", "spark_orb", "frost_dagger", "oak_buckler",
    "shadow_boots", "falcon_bow", "thorn_staff", "wolf_pelt", "clockwork_ring",
    "glass_amulet", "glacier_mail", "bone_crown", "thornmail", "executioner_ring",
    "viper_flask", "hourglass_charm", "sentinel_shield", "marrow_lantern",
    "executioner_hood", "venom_needle", "bastion_plate", "echo_orb", "frostbrand",
    "beast_totem", "quicksilver_ring", "grave_gauntlets", "glass_arrowhead",
    "witch_salve", "time_splinter",
  ];
}

function getUniqueLootItemPool() {
  return [
    "skull_blade", "summoner_charm", "viper_charm", "bone_crown", "thornmail",
    "executioner_ring", "viper_flask", "hourglass_charm", "sentinel_shield",
    "marrow_lantern", "echo_orb", "beast_totem", "time_splinter",
  ];
}

function pickWeightedLootItem(pool) {
  const heroTags = getHeroLootTags(activeRun?.hero);
  if (!heroTags.length || Math.random() > 0.64) return randomFrom(pool);
  const scored = pool.map((itemId) => {
    const item = itemDefinitions[itemId];
    const matches = getItemTags(item).filter((tag) => heroTags.includes(tag)).length;
    return { itemId, weight: 1 + matches * 4 };
  });
  const total = scored.reduce((sum, item) => sum + item.weight, 0);
  let roll = Math.random() * total;
  for (const item of scored) {
    roll -= item.weight;
    if (roll <= 0) return item.itemId;
  }
  return randomFrom(pool);
}

function itemLootChoice(item) {
  return {
    kind: "item",
    name: item.name,
    text: describeItem(item),
    item,
  };
}

function goldLootChoice(amount) {
  return {
    kind: "gold",
    name: "Gold Coins",
    text: `${amount} gold`,
    icon: 13,
    amount,
  };
}

function magicOrbLootChoice() {
  return {
    kind: "magicOrb",
    name: "Magic Orb",
    text: "Upgrade basic item to magic",
    icon: 11,
    amount: 1,
  };
}

function rareOrbLootChoice() {
  return {
    kind: "rareOrb",
    name: "Rare Orb",
    text: "Upgrade magic item to rare",
    icon: 12,
    amount: 1,
  };
}

function createLootItem(itemId, forcedRarity) {
  const base = cloneItem(itemDefinitions[itemId]);
  const roll = forcedRarity || rollRarity();
  if (base.rarity === "unique") return base;
  return upgradeItemRarity(base, roll);
}

function rollRarity() {
  const roll = Math.random();
  if (roll < 0.08) return "rare";
  if (roll < 0.34) return "magic";
  return "basic";
}

function upgradeItemRarity(item, rarity) {
  if (item.rarity === "unique") return item;
  const upgraded = cloneItem(item);
  upgraded.rarity = rarity;
  const count = rarity === "rare" ? 2 : rarity === "magic" ? 1 : 0;
  const implicitBoosts = itemDefinitions[item.id]?.statBoosts || [];
  upgraded.statBoosts = [...implicitBoosts, ...rollStatBoosts(count)];
  return upgraded;
}

function cloneItem(item) {
  return JSON.parse(JSON.stringify(item));
}

function rollStatBoosts(count) {
  const options = [
    { stat: "damage", value: 2 },
    { stat: "hp", value: 12 },
    { stat: "armor", value: 2 },
    { stat: "speed", value: 0.1 },
    { stat: "critChance", value: 0.06 },
    { stat: "critDamage", value: 0.2 },
    { stat: "block", value: 0.06 },
    { stat: "evade", value: 0.06 },
    { stat: "freezeChance", value: 0.06 },
    { stat: "slowChance", value: 0.08 },
  ];
  return Array.from({ length: count }, () => ({ ...randomFrom(options) }));
}

function describeItem(item) {
  const parts = [`${capitalize(item.rarity)} ${item.type}`];
  if (item.damage) parts.push(`${item.damage} dmg`);
  if (item.armor) parts.push(`${item.armor} armor`);
  if (item.statBoosts?.length) {
    parts.push(item.statBoosts.map(describeBoost).join(", "));
  }
  if (item.inherent) parts.push(item.inherent);
  if (item.uniqueEffect) parts.push(item.uniqueEffect);
  return parts.join(" · ");
}

function capitalize(value = "") {
  return value ? `${value[0].toUpperCase()}${value.slice(1)}` : "";
}

function getItemTags(item) {
  return item?.tags || itemDefinitions[item?.id]?.tags || [];
}

function getHeroLootTags(hero) {
  if (!hero) return [];
  const tags = new Set(hero.buildTags || []);
  getBuildSummary(hero).forEach((tag) => {
    const clean = String(tag).split(" ")[0];
    if (["Block", "Retaliate", "Guard", "Skeletons", "Poison", "Freeze", "Thorns", "Regrowth", "Crit", "Execute", "Backline", "Slow", "Echo", "Rewind"].includes(clean)) {
      tags.add(clean === "Skeletons" ? "Skeleton" : clean);
    }
  });
  return [...tags];
}

function getItemBuildMatches(item, hero) {
  const heroTags = getHeroLootTags(hero);
  return getItemTags(item).filter((tag) => heroTags.includes(tag));
}

function describeBoost(boost) {
  const percentStats = ["critChance", "critDamage", "block", "evade", "freezeChance", "slowChance"];
  if (percentStats.includes(boost.stat)) return `+${Math.round(boost.value * 100)}% ${boost.stat.replace("Chance", "")}`;
  return `+${boost.value} ${boost.stat}`;
}

function pickInheritanceRewards() {
  return inheritanceRewards.slice().sort(() => Math.random() - 0.5).slice(0, 3);
}

function takeInheritanceReward(rewardId) {
  const reward = inheritanceRewards.find((item) => item.id === rewardId);
  if (!reward || !activeRun?.soul) return;
  state.inheritance = normalizeInheritance(state.inheritance);

  if (reward.stat === "power") state.inheritance.power = Math.min(8, state.inheritance.power + reward.value);
  if (reward.stat === "hp") state.inheritance.hp = Math.min(48, state.inheritance.hp + reward.value);
  if (reward.stat === "speed") state.inheritance.speed = Math.min(0.24, state.inheritance.speed + reward.value);
  if (reward.stat === "gold") state.inheritance.gold = Math.min(120, state.inheritance.gold + reward.value);
  if (reward.stat === "energy") state.inheritance.energy = Math.min(40, state.inheritance.energy + reward.value);
  if (reward.stat === "critChance") state.inheritance.critChance = Math.min(0.16, state.inheritance.critChance + reward.value);
  if (reward.stat === "block") state.inheritance.block = Math.min(0.18, state.inheritance.block + reward.value);
  if (reward.stat === "evade") state.inheritance.evade = Math.min(0.18, state.inheritance.evade + reward.value);
  if (reward.stat === "freezeChance") state.inheritance.freezeChance = Math.min(0.16, state.inheritance.freezeChance + reward.value);

  addLog(`${activeRun.soul.name}'s bloodline gains ${reward.name}.`);
  activeRun.chosenInheritance = reward;
  activeRun.inheritanceOptions = [];
  saveState();
  render();
}

function applyInheritance(hero) {
  const inheritance = normalizeInheritance(state.inheritance);
  hero.maxHp += inheritance.hp;
  hero.hp += inheritance.hp;
  hero.power += inheritance.power;
  hero.speed += inheritance.speed;
  hero.critChance = (hero.critChance || 0) + inheritance.critChance;
  hero.block = (hero.block || 0) + inheritance.block;
  hero.evade = (hero.evade || 0) + inheritance.evade;
  hero.freezeChance = (hero.freezeChance || 0) + inheritance.freezeChance;
  hero.startingEnergy = inheritance.energy;
  if (inheritance.gold) state.resources.gold += inheritance.gold;
}

function normalizeResources(resources = {}) {
  return {
    gold: resources.gold || 0,
    magicOrb: resources.magicOrb || 0,
    rareOrb: resources.rareOrb || 0,
  };
}

function normalizeInheritance(inheritance = {}) {
  return {
    hp: inheritance.hp || 0,
    power: inheritance.power || 0,
    speed: inheritance.speed || 0,
    gold: inheritance.gold || 0,
    energy: inheritance.energy || 0,
    critChance: inheritance.critChance || 0,
    block: inheritance.block || 0,
    evade: inheritance.evade || 0,
    freezeChance: inheritance.freezeChance || 0,
  };
}

function itemIconStyle(index) {
  const safeIndex = Number.isFinite(index) ? Math.max(0, Math.floor(index)) : 0;
  if (safeIndex >= 100) {
    const expandedIndex = Math.min(24, safeIndex - 100);
    return `background-image: url("assets/expanded-icons.png"); ${expandedIconStyle(expandedIndex)}`;
  }
  const baseIndex = safeIndex % 16;
  const col = baseIndex % 4;
  const row = Math.floor(baseIndex / 4);
  const pos = [0, 33.333, 66.666, 100];
  return `--item-x: ${pos[col]}%; --item-y: ${pos[row]}%;`;
}

function expandedIconStyle(index) {
  const col = index % 5;
  const row = Math.floor(index / 5);
  return `background-size: 500% 500%; background-position: ${col * 25}% ${row * 25}%;`;
}

function getUltimateName(unit) {
  const names = {
    shield_wall: "Shield Wall",
    mass_raise: "Mass Raise",
    grand_mixture: "Grand Mixture",
    oath_slam: "Oath Slam",
  };
  return names[unit.ultimate] || "None";
}

function getCurrentLevel() {
  return levels[activeRun.levelIndex];
}

function getCurrentEncounter(levelIndex = activeRun.levelIndex, waveIndex = activeRun.waveIndex) {
  return levels[levelIndex].waves[waveIndex];
}

function isCurrentBossWave() {
  return getCurrentEncounter().type === "boss";
}

function getLevelProgress(levelIndex, waveIndex) {
  const level = levels[levelIndex];
  const bossIndex = level.waves.findIndex((wave) => wave.type === "boss");
  return {
    levelName: level.name,
    waveNumber: waveIndex + 1,
    totalWaves: level.waves.length,
    untilBoss: Math.max(0, bossIndex - waveIndex),
  };
}

function spriteStyle(index) {
  const col = index % 4;
  const row = Math.floor(index / 4);
  const pos = [0, 33.333, 66.666, 100];
  return `--sprite-x: ${pos[col]}%; --sprite-y: ${pos[row]}%;`;
}

function combatBackgroundStyle(levelIndex = 0) {
  const backgrounds = [
    "level-1-bloodmoor.png",
    "level-2-desert.png",
    "level-3-jungle-beach.png",
    "level-4-winter.png",
    "level-5-volcanic.png",
  ];
  const file = backgrounds[Math.min(levelIndex, backgrounds.length - 1)] || backgrounds[0];
  return `--combat-bg: url("assets/backgrounds/${file}");`;
}

function heroPortraitMarkup(hero, className) {
  return `<span class="${className} hero-sheet-portrait"><img src="${getHeroPortraitUrl(hero)}" alt="" loading="eager" decoding="async"></span>`;
}

function getHeroPortraitUrl(hero) {
  return `./assets/hero-${getHeroPortraitKey(hero)}.png`;
}

function getHeroPortraitKey(hero) {
  const id = String(hero?.classId || hero?.id || hero?.className || hero?.name || "").toLowerCase().replace(/\s+/g, "-");
  const map = {
    warrior: "warrior",
    necromancer: "necromancer",
    alchemist: "alchemist",
    druid: "druid",
    hunter: "hunter",
    chronomancer: "chronomancer",
  };
  return map[id] || "warrior";
}

function upgradeIconStyle(index) {
  if (index >= 100) {
    const expandedIndex = index - 100;
    return `background-image: url("assets/expanded-icons.png"); ${expandedIconStyle(expandedIndex)}`;
  }
  const col = index % 3;
  const row = Math.floor(index / 3);
  const pos = [0, 50, 100];
  return `--upgrade-x: ${pos[col]}%; --upgrade-y: ${pos[row]}%;`;
}

function setWidth(selector, percent) {
  const element = document.querySelector(selector);
  if (element) element.style.width = `${Math.max(0, Math.min(100, percent))}%`;
}

function setText(selector, text) {
  const element = document.querySelector(selector);
  if (element) element.textContent = text;
}
