const text = {
  en: {
    chooseLanguage: "Choose Language",
    createHero: "Create Hero",
    gender: "Gender",
    style: "Style",
    race: "Race",
    class: "Class",
    name: "Name",
    party: "Party",
    back: "Back",
    next: "Next",
    add: "Add",
    start: "Start",
    reset: "Reset",
    continue: "Continue",
    result: "Result",
    map: "Map",
    location: "Location",
    gold: "Gold",
    items: "Items",
    heart: "Heart",
    action: "Action",
    luck: "Luck",
    locked: "Later",
    current: "Here",
    travel: "Travel",
    firstMarker: "First Marker",
    firstMarkerSummary: "Your party begins at the First Marker. Two roads are open.",
    chooseRoad: "Choose one of the two open roads.",
    ready: "ready at the First Marker.",
    noEncounter: "This place is quiet for now.",
    rewardGold: "Gold",
    rewardItem: "Item",
    rewardStat: "Training",
    noItems: "No items",
    inventory: "Inventory",
    tapInfo: "Tap for info",
    fight: "Fight",
    trade: "Trade",
    help: "Help",
    autobattle: "Autobattle",
    combatItems: "Combat items",
    noUsableItems: "No usable items",
    victory: "Victory",
    defeat: "Defeat",
    use: "Use",
    searchFor: "Find",
    findThis: "Find this",
    found: "Found",
    bargain: "Bargain",
    searching: "Tap the scene to search.",
    notThere: "Not there. Try another busy detail.",
  },
  sv: {
    chooseLanguage: "Välj språk",
    createHero: "Skapa hjälte",
    gender: "Kön",
    style: "Stil",
    race: "Folk",
    class: "Klass",
    name: "Namn",
    party: "Grupp",
    back: "Tillbaka",
    next: "Nästa",
    add: "Lägg till",
    start: "Starta",
    reset: "Reset",
    continue: "Fortsätt",
    result: "Resultat",
    map: "Karta",
    location: "Plats",
    gold: "Guld",
    items: "Saker",
    heart: "Hjärta",
    action: "Handling",
    luck: "Tur",
    locked: "Senare",
    current: "Här",
    travel: "Res",
    firstMarker: "Första märket",
    firstMarkerSummary: "Gruppen börjar vid Första märket. Två vägar är öppna.",
    chooseRoad: "Välj en av de två öppna vägarna.",
    ready: "redo vid Första märket.",
    noEncounter: "Den här platsen är lugn just nu.",
    rewardGold: "Guld",
    rewardItem: "Sak",
    rewardStat: "Träning",
    noItems: "Inga saker",
    inventory: "Packning",
    tapInfo: "Tryck för info",
    fight: "Strid",
    trade: "Handel",
    help: "Hjälp",
    autobattle: "Autostrid",
    combatItems: "Stridssaker",
    noUsableItems: "Inga användbara saker",
    victory: "Seger",
    defeat: "Förlust",
    use: "Använd",
    searchFor: "Hitta",
    findThis: "Hitta detta",
    found: "Hittad",
    bargain: "Förhandla",
    searching: "Tryck i scenen för att leta.",
    notThere: "Inte där. Prova en annan detalj.",
  },
};

const options = {
  race: [
    { id: "human", label: { en: "Human", sv: "Människa" }, stats: { heart: 1, action: 0, luck: 1 } },
    { id: "elf", label: { en: "Elf", sv: "Alv" }, stats: { heart: 0, action: 1, luck: 1 } },
    { id: "dwarf", label: { en: "Dwarf", sv: "Dvärg" }, stats: { heart: 2, action: 0, luck: 0 } },
    { id: "goblin", label: { en: "Goblin", sv: "Goblin" }, stats: { heart: 0, action: 0, luck: 2 } },
  ],
  gender: [
    { id: "female", label: { en: "Female", sv: "Kvinna" } },
    { id: "male", label: { en: "Male", sv: "Man" } },
  ],
  class: [
    {
      id: "fighter",
      label: { en: "Fighter", sv: "Kämpe" },
      name: { en: "The Ready Blade", sv: "Det redo bladet" },
      stats: { heart: 2, action: 1, luck: 0 },
    },
    {
      id: "mage",
      label: { en: "Mage", sv: "Magiker" },
      name: { en: "The Lantern Mind", sv: "Lyktans sinne" },
      stats: { heart: 0, action: 2, luck: 1 },
    },
    {
      id: "ranger",
      label: { en: "Ranger", sv: "Vägvisare" },
      name: { en: "The Green Trail", sv: "Den gröna stigen" },
      stats: { heart: 1, action: 1, luck: 1 },
    },
    {
      id: "rogue",
      label: { en: "Rogue", sv: "Skugga" },
      name: { en: "The Locksmile", sv: "Låsets leende" },
      stats: { heart: 0, action: 1, luck: 2 },
    },
  ],
  style: [
    { id: "ember", label: { en: "Ember", sv: "Glöd" }, aura: "#e85f4f" },
    { id: "moss", label: { en: "Moss", sv: "Mossa" }, aura: "#75c778" },
    { id: "moon", label: { en: "Moon", sv: "Måne" }, aura: "#6eb5ff" },
    { id: "sun", label: { en: "Sun", sv: "Sol" }, aura: "#e9d68b" },
  ],
};

const locations = [
  {
    id: "first-marker",
    name: { en: "First Marker", sv: "Första märket" },
    type: { en: "Start", sv: "Start" },
    image: "assets/images/adventure/party-road.png",
    x: 50,
    y: 91,
    description: {
      en: "A painted roadstone points toward two possible first journeys.",
      sv: "En målad vägsten pekar mot två möjliga första färder.",
    },
  },
  {
    id: "mistmarket",
    name: { en: "Mistmarket", sv: "Dimmhamn" },
    type: { en: "Town", sv: "Stad" },
    image: "assets/images/adventure/mistmarket-town.png",
    x: 26,
    y: 64,
    description: {
      en: "A lantern market of fog, bridges, missing parcels, and rumors.",
      sv: "En lykttänd marknad av dimma, broar, saknade paket och rykten.",
    },
  },
  {
    id: "emberwild",
    name: { en: "Emberwild", sv: "Glödskogen" },
    type: { en: "Forest", sv: "Skog" },
    image: "assets/images/adventure/emberwild-forest.png",
    x: 65,
    y: 56,
    description: {
      en: "A warm forest where glowing roots move when nobody watches.",
      sv: "En varm skog där lysande rötter rör sig när ingen tittar.",
    },
  },
  {
    id: "sunspire",
    name: { en: "Sunspire", sv: "Solspira" },
    type: { en: "Town", sv: "Stad" },
    image: "assets/images/adventure/sunspire-town.png",
    x: 30,
    y: 29,
    description: {
      en: "A bright hill town of banners, warm stone, and roadward towers.",
      sv: "En ljus kullstad med fanor, varm sten och torn mot vägarna.",
    },
  },
  {
    id: "mirrorwake",
    name: { en: "Mirrorwake Lake", sv: "Spegelvaksjön" },
    type: { en: "Lake", sv: "Sjö" },
    image: "assets/images/adventure/mirrorwake-lake.png",
    x: 47,
    y: 39,
    description: {
      en: "A clear magical lake reflecting lights that are not in the sky.",
      sv: "En klar magisk sjö som speglar ljus som inte finns på himlen.",
    },
  },
  {
    id: "stormcrown",
    name: { en: "Stormcrown Peak", sv: "Stormkronan" },
    type: { en: "Mountain", sv: "Berg" },
    image: "assets/images/adventure/stormcrown-mountain.png",
    x: 51,
    y: 14,
    description: {
      en: "A crystal mountain pass under rolling thunder and clean snow.",
      sv: "Ett kristallpass under mullrande åska och ren snö.",
    },
  },
  {
    id: "harborbell",
    name: { en: "Harborbell", sv: "Hamarklocka" },
    type: { en: "Town", sv: "Stad" },
    image: "assets/images/adventure/harborbell-town.png",
    x: 73,
    y: 74,
    description: {
      en: "A cliffside harbor town where bright sails ring the bay.",
      sv: "En hamnstad vid klippor där ljusa segel fyller viken.",
    },
  },
  {
    id: "starfall",
    name: { en: "Starfall Ruins", sv: "Stjärnfallsruinen" },
    type: { en: "Ruins", sv: "Ruin" },
    image: "assets/images/adventure/starfall-ruins.png",
    x: 50,
    y: 71,
    description: {
      en: "An overgrown observatory built around a fallen crystal star.",
      sv: "Ett övervuxet observatorium byggt kring en fallen kristallstjärna.",
    },
  },
];

const itemDefs = {
  compass: {
    icon: "CP",
    name: { en: "Compass Favor", sv: "Kompasshjälp" },
    desc: { en: "A promise from a road guide. Useful when bargaining for directions.", sv: "Ett löfte från en vägvisare. Bra när ni förhandlar om vägval." },
    tags: ["trade"],
  },
  runeKey: {
    icon: "KY",
    name: { en: "Blue Rune Key", sv: "Blå runnyckel" },
    desc: { en: "Opens small magical locks and improves puzzle trades.", sv: "Öppnar små magiska lås och hjälper vid byteshandel kring mysterier." },
    tags: ["trade", "help"],
  },
  bladeToken: {
    icon: "BT",
    name: { en: "Blade Token", sv: "Klingmarkör" },
    desc: { en: "Spend during battle to add a heavy strike.", sv: "Använd under strid för ett tungt hugg." },
    tags: ["combat"],
    damage: 4,
  },
  banditMap: {
    icon: "MP",
    name: { en: "Bandit Map", sv: "Banditkarta" },
    desc: { en: "A marked route that makes shady negotiations easier.", sv: "En markerad rutt som gör skumma förhandlingar enklare." },
    tags: ["trade"],
  },
  warmScale: {
    icon: "SC",
    name: { en: "Warm Scale", sv: "Varm fjällbit" },
    desc: { en: "Spend during battle to shield the party from the next hit.", sv: "Använd under strid för att skydda gruppen från nästa slag." },
    tags: ["combat"],
    shield: 3,
  },
  dragonClue: {
    icon: "DC",
    name: { en: "Dragon Clue", sv: "Drakledtråd" },
    desc: { en: "A proud hint that can impress difficult traders.", sv: "En stolt ledtråd som kan imponera på svåra handlare." },
    tags: ["trade"],
  },
  sealedLetter: {
    icon: "LT",
    name: { en: "Sealed Letter", sv: "Förseglat brev" },
    desc: { en: "Proof that someone important is waiting for news.", sv: "Bevis på att någon viktig väntar på nyheter." },
    tags: ["trade"],
  },
  courierToken: {
    icon: "CT",
    name: { en: "Courier Token", sv: "Kurirmärke" },
    desc: { en: "A small token that reveals hidden routes and quiet doors.", sv: "Ett litet märke som avslöjar gömda vägar och tysta dörrar." },
    tags: ["help", "trade"],
  },
  crownCharm: {
    icon: "CH",
    name: { en: "Crown Charm", sv: "Kronamulett" },
    desc: { en: "Spend during battle to heal the party.", sv: "Använd under strid för att hela gruppen." },
    tags: ["combat", "trade"],
    heal: 4,
  },
  rootKey: {
    icon: "RK",
    name: { en: "Root Key", sv: "Rotnyckel" },
    desc: { en: "A living key that helps when searching tangled places.", sv: "En levande nyckel som hjälper när ni söker i snåriga platser." },
    tags: ["help"],
  },
  brightPotion: {
    icon: "PT",
    name: { en: "Bright Potion", sv: "Ljusdryck" },
    desc: { en: "Spend during battle to heal and keep the line standing.", sv: "Använd under strid för att hela och hålla linjen." },
    tags: ["combat"],
    heal: 3,
  },
  traderSeal: {
    icon: "TS",
    name: { en: "Trader Seal", sv: "Handlarsigill" },
    desc: { en: "A reusable-looking seal. Right now it buys one better outcome.", sv: "Ett sigill som ser återanvändbart ut. Just nu köper det ett bättre utfall." },
    tags: ["trade"],
  },
};

const oldItemMap = {
  "Compass Favor": "compass",
  "Route Note": "compass",
  "Blue Rune Key": "runeKey",
  "Hummed Password": "runeKey",
  "Blade Token": "bladeToken",
  "Bandit Map": "banditMap",
  "Warm Scale": "warmScale",
  "Dragon Clue": "dragonClue",
  "Sealed Letter": "sealedLetter",
  "Courier Token": "courierToken",
  "Crown Charm": "crownCharm",
  "Root Key": "rootKey",
};

const locationScenarios = {
  mistmarket: {
    title: { en: "Fog over the bridge market", sv: "Dimma över bromarknaden" },
    text: {
      en: "A bell rings under the fog. A lost trader, a pickpocket crew, and a missing parcel all pull at the party at once.",
      sv: "En klocka ringer under dimman. En vilse handelsman, ficktjuvar och ett saknat paket drar i gruppen samtidigt.",
    },
    fight: { action: { en: "Drive off the coin-shield bandits", sv: "Driv bort myntsköldsbanditerna" }, enemy: { en: "Coin-Shield Bandits", sv: "Myntsköldsbanditer" }, hp: 14, power: 4, rewardGold: 3, rewardItem: "bladeToken" },
    trade: { action: { en: "Trade for a fog pass", sv: "Byt till er ett dimpass" }, title: { en: "Trade for a fog pass", sv: "Byt till er ett dimpass" }, wants: ["compass", "sealedLetter", "traderSeal"], rewardGold: 2, rewardItem: "courierToken" },
    help: { action: { en: "Find the matching person in the crowd", sv: "Hitta samma person i vimlet" }, target: { en: "the matching person", sv: "samma person" }, image: "assets/images/adventure/search/mistmarket-search.png", targetImage: "assets/images/adventure/search/targets/mistmarket-target.png", x: 52, y: 24, rewardItem: "sealedLetter" },
  },
  emberwild: {
    title: { en: "Roots glow under ash leaves", sv: "Rötter glöder under asklöv" },
    text: {
      en: "The forest path splits around a smoldering shrine. Something hungry circles while a woodcarver begs for help.",
      sv: "Skogsstigen delar sig runt ett pyrande altare. Något hungrigt cirklar medan en träsnidare ber om hjälp.",
    },
    fight: { action: { en: "Hold the ash prowler at the shrine", sv: "Håll askstrykaren borta från altaret" }, enemy: { en: "Ash Prowler", sv: "Askstrykare" }, hp: 16, power: 5, rewardGold: 1, rewardItem: "warmScale" },
    trade: { action: { en: "Offer proof to the root shrine", sv: "Ge rotaltaret ett bevis" }, title: { en: "Offer proof to the shrine", sv: "Ge altaret ett bevis" }, wants: ["rootKey", "warmScale", "runeKey"], rewardGold: 2, rewardItem: "brightPotion" },
    help: { action: { en: "Find the matching axe among the roots", sv: "Hitta samma yxa bland rötterna" }, target: { en: "the matching axe", sv: "samma yxa" }, image: "assets/images/adventure/search/emberwild-search.png", targetImage: "assets/images/adventure/search/targets/emberwild-target.png", x: 27, y: 80, rewardItem: "rootKey" },
  },
  sunspire: {
    title: { en: "Banners snap in the high wind", sv: "Fanor slår i högvinden" },
    text: {
      en: "A captain needs volunteers. A noble wants a quiet deal. A messenger vanished in the festival crowd.",
      sv: "En kapten behöver frivilliga. En adlig vill göra en tyst affär. En budbärare har försvunnit i festivalen.",
    },
    fight: { action: { en: "Challenge the training-yard champion", sv: "Utmana övningsgårdens mästare" }, enemy: { en: "Training Yard Champion", sv: "Övningsgårdens mästare" }, hp: 18, power: 5, rewardGold: 3, rewardItem: "crownCharm" },
    trade: { action: { en: "Negotiate with the banner noble", sv: "Förhandla med fanadeln" }, title: { en: "Negotiate with the noble", sv: "Förhandla med den adliga" }, wants: ["crownCharm", "sealedLetter", "dragonClue"], rewardGold: 4, rewardItem: "traderSeal" },
    help: { action: { en: "Find the matching sign in the square", sv: "Hitta samma skylt på torget" }, target: { en: "the matching sign", sv: "samma skylt" }, image: "assets/images/adventure/search/sunspire-search.png", targetImage: "assets/images/adventure/search/targets/sunspire-target.png", x: 82, y: 55, rewardItem: "crownCharm" },
  },
  mirrorwake: {
    title: { en: "The lake reflects the wrong sky", sv: "Sjön speglar fel himmel" },
    text: {
      en: "A silver ripple shows three futures: a fight at the pier, a bargain with a boatman, or a search beneath mirrored reeds.",
      sv: "En silvervåg visar tre framtider: strid vid bryggan, handel med en färjkarl eller sökande bland spegelvass.",
    },
    fight: { action: { en: "Fight the glassfin eel at the pier", sv: "Strid mot glasfensålen vid bryggan" }, enemy: { en: "Glassfin Eel", sv: "Glasfensål" }, hp: 15, power: 6, rewardGold: 2, rewardItem: "runeKey" },
    trade: { action: { en: "Pay the mirror boatman for a crossing", sv: "Betala spegelfärjkarlen för överfart" }, title: { en: "Pay the mirror boatman", sv: "Betala spegelfärjkarlen" }, wants: ["runeKey", "courierToken", "compass"], rewardGold: 1, rewardItem: "dragonClue" },
    help: { action: { en: "Find the matching picnic cloth by the lake", sv: "Hitta samma picknickduk vid sjön" }, target: { en: "the matching picnic cloth", sv: "samma picknickduk" }, image: "assets/images/adventure/search/mirrorwake-search.png", targetImage: "assets/images/adventure/search/targets/mirrorwake-target.png", x: 31, y: 20, rewardItem: "runeKey" },
  },
  stormcrown: {
    title: { en: "Thunder walks the pass", sv: "Åskan vandrar passet" },
    text: {
      en: "The climb turns dangerous. A frost brute blocks the ridge, a miner trades maps, and a rescue signal flickers in the snow.",
      sv: "Klättringen blir farlig. Ett frostvidunder spärrar kammen, en gruvarbetare byter kartor och en nödsignal blinkar i snön.",
    },
    fight: { action: { en: "Push past the frost brute", sv: "Pressa er förbi frostbesten" }, enemy: { en: "Frost Brute", sv: "Frostbest" }, hp: 20, power: 6, rewardGold: 4, rewardItem: "warmScale" },
    trade: { action: { en: "Trade for a safer ledge route", sv: "Byt till er en säkrare avsatsväg" }, title: { en: "Trade for a safer ledge", sv: "Byt till er en säkrare avsats" }, wants: ["banditMap", "warmScale", "traderSeal"], rewardGold: 3, rewardItem: "brightPotion" },
    help: { action: { en: "Find the matching pack in the snow", sv: "Hitta samma packning i snön" }, target: { en: "the matching pack", sv: "samma packning" }, image: "assets/images/adventure/search/stormcrown-search.png", targetImage: "assets/images/adventure/search/targets/stormcrown-target.png", x: 36, y: 22, rewardItem: "compass" },
  },
  harborbell: {
    title: { en: "Ships ring the bright bay", sv: "Skeppsklockor fyller viken" },
    text: {
      en: "Dock guards argue with smugglers while a tide chest vanishes under coils of rope.",
      sv: "Hamnvakter grälar med smugglare medan en tidvattenkista försvinner bland repen.",
    },
    fight: { action: { en: "Break up the dock smugglers", sv: "Stoppa hamnsmugglarna" }, enemy: { en: "Dock Smugglers", sv: "Hamnsugglare" }, hp: 17, power: 5, rewardGold: 3, rewardItem: "banditMap" },
    trade: { action: { en: "Trade quietly at the rope stall", sv: "Handla diskret vid repståndet" }, title: { en: "Trade at the rope stall", sv: "Handla vid repståndet" }, wants: ["sealedLetter", "banditMap", "traderSeal"], rewardGold: 3, rewardItem: "brightPotion" },
    help: { action: { en: "Find the matching sailor between the boats", sv: "Hitta samma sjöman mellan båtarna" }, target: { en: "the matching sailor", sv: "samma sjöman" }, image: "assets/images/adventure/search/harborbell-search.png", targetImage: "assets/images/adventure/search/targets/harborbell-target.png", x: 22, y: 69, rewardItem: "traderSeal" },
  },
  starfall: {
    title: { en: "A crystal star hums in the ruin", sv: "En kristallstjärna nynnar i ruinen" },
    text: {
      en: "The observatory doors open to a restless guardian, a strange collector, and a hidden shard nobody else can see.",
      sv: "Observatoriets dörrar öppnar mot en rastlös väktare, en märklig samlare och en dold skärva som ingen annan ser.",
    },
    fight: { action: { en: "Face the restless star guardian", sv: "Möt den rastlösa stjärnväktaren" }, enemy: { en: "Star Guardian", sv: "Stjärnväktare" }, hp: 22, power: 7, rewardGold: 5, rewardItem: "dragonClue" },
    trade: { action: { en: "Trade with the shard collector", sv: "Handla med skärvsamlaren" }, title: { en: "Trade with the shard collector", sv: "Handla med skärvsamlaren" }, wants: ["dragonClue", "runeKey", "crownCharm"], rewardGold: 4, rewardItem: "rootKey" },
    help: { action: { en: "Find the matching map in the ruins", sv: "Hitta samma karta i ruinen" }, target: { en: "the matching map", sv: "samma karta" }, image: "assets/images/adventure/search/starfall-search.png", targetImage: "assets/images/adventure/search/targets/starfall-target.png", x: 49, y: 44, rewardItem: "dragonClue" },
  },
};

const encounterTemplates = [
  {
    key: "stranger",
    kind: { en: "Social", sv: "Socialt" },
    title: { en: "A stranger asks for help", sv: "En främling ber om hjälp" },
    text: {
      en: "A hooded traveler holds a cracked compass and points toward trouble.",
      sv: "En huvad vandrare håller en sprucken kompass och pekar mot problem.",
    },
    choices: [
      { label: { en: "Offer help", sv: "Erbjud hjälp" }, result: { en: "The traveler pays in advance.", sv: "Vandraren betalar i förskott." }, gold: 2, item: "Compass Favor" },
      { label: { en: "Ask questions", sv: "Ställ frågor" }, result: { en: "You learn the shortest safe route.", sv: "Ni lär er den kortaste säkra vägen." }, stat: "luck", item: "Route Note" },
      { label: { en: "Set a trap", sv: "Gillra en fälla" }, result: { en: "The stranger was bait for bandits; you turn it around.", sv: "Främlingen var lockbete för banditer; ni vänder det." }, gold: 1, stat: "action" },
    ],
  },
  {
    key: "chest",
    kind: { en: "Puzzle", sv: "Pussel" },
    title: { en: "A singing chest blocks the path", sv: "En sjungande kista spärrar vägen" },
    text: {
      en: "Three rune plates hum. The chest opens only if the party picks the matching rhythm.",
      sv: "Tre runplattor nynnar. Kistan öppnas bara om gruppen väljer rätt rytm.",
    },
    choices: [
      { label: { en: "Tap the blue rune", sv: "Tryck på blå runan" }, result: { en: "The lock clicks open with a bright note.", sv: "Låset klickar upp med en klar ton." }, gold: 3, item: "Blue Rune Key" },
      { label: { en: "Force the lid", sv: "Bänd upp locket" }, result: { en: "It opens, but everyone has to brace the snapback.", sv: "Den öppnas, men alla måste ta emot bakslaget." }, gold: 1, stat: "heart" },
      { label: { en: "Listen first", sv: "Lyssna först" }, result: { en: "The melody teaches a useful pattern.", sv: "Melodin lär ut ett användbart mönster." }, stat: "luck", item: "Hummed Password" },
    ],
  },
  {
    key: "bandits",
    kind: { en: "Fight", sv: "Strid" },
    title: { en: "Bandits demand road tax", sv: "Banditer kräver vägskatt" },
    text: {
      en: "A small crew steps from cover with shields painted like coins.",
      sv: "Ett litet gäng kliver fram med sköldar målade som mynt.",
    },
    choices: [
      { label: { en: "Duel the leader", sv: "Duellera ledaren" }, result: { en: "The leader yields and leaves a blade token.", sv: "Ledaren ger sig och lämnar en klingmarkör." }, stat: "action", item: "Blade Token" },
      { label: { en: "Pay and follow", sv: "Betala och följ efter" }, result: { en: "You lose a coin but find their stash.", sv: "Ni förlorar ett mynt men hittar deras gömma." }, gold: 2, item: "Bandit Map" },
      { label: { en: "Scatter them", sv: "Skingra dem" }, result: { en: "A loud trick sends them running.", sv: "Ett högljutt knep får dem att springa." }, stat: "luck" },
    ],
  },
  {
    key: "dragon",
    kind: { en: "Boss", sv: "Boss" },
    title: { en: "A young dragon blocks the view", sv: "En ung drake skymmer sikten" },
    text: {
      en: "It is not huge yet, but it is already convinced the horizon belongs to it.",
      sv: "Den är inte enorm än, men är redan övertygad om att horisonten tillhör den.",
    },
    choices: [
      { label: { en: "Challenge it", sv: "Utmana den" }, result: { en: "The dragon laughs, then respects the attempt.", sv: "Draken skrattar och respekterar sedan försöket." }, stat: "heart", item: "Warm Scale" },
      { label: { en: "Offer treasure", sv: "Erbjud skatt" }, result: { en: "It trades a clue for a glittering coin.", sv: "Den byter en ledtråd mot ett glänsande mynt." }, gold: -1, item: "Dragon Clue" },
      { label: { en: "Find its rhyme", sv: "Hitta dess rim" }, result: { en: "The dragon cannot resist a good puzzle.", sv: "Draken kan inte motstå ett bra pussel." }, stat: "luck", gold: 2 },
    ],
  },
  {
    key: "waldo",
    kind: { en: "Search", sv: "Leta" },
    title: { en: "Find the hidden courier", sv: "Hitta den gömda kuriren" },
    text: {
      en: "A packed scene of stalls, hats, banners, barrels, and one courier trying not to be seen.",
      sv: "En tät scen av stånd, hattar, fanor, tunnor och en kurir som försöker undgå blickar.",
    },
    choices: [
      { label: { en: "Check red hats", sv: "Kolla röda hattar" }, result: { en: "Wrong hat, right pocket. You find a coin.", sv: "Fel hatt, rätt ficka. Ni hittar ett mynt." }, gold: 1 },
      { label: { en: "Watch the exits", sv: "Bevaka utgångarna" }, result: { en: "The courier walks straight into you.", sv: "Kuriren går rakt in i er." }, item: "Sealed Letter", stat: "action" },
      { label: { en: "Use a bird's-eye clue", sv: "Använd ledtråd ovanifrån" }, result: { en: "The pattern reveals the hidden person.", sv: "Mönstret avslöjar den gömda personen." }, stat: "luck", item: "Courier Token" },
    ],
  },
  {
    key: "key",
    kind: { en: "Logic", sv: "Logik" },
    title: { en: "Three doors share one key", sv: "Tre dörrar delar en nyckel" },
    text: {
      en: "A brass key turns only once. The symbols are crown, wave, and root.",
      sv: "En mässingsnyckel vrids bara en gång. Symbolerna är krona, våg och rot.",
    },
    choices: [
      { label: { en: "Crown door", sv: "Krondörren" }, result: { en: "A formal chamber hides a useful charm.", sv: "En högtidlig kammare gömmer en användbar amulett." }, item: "Crown Charm", stat: "heart" },
      { label: { en: "Wave door", sv: "Vågdörren" }, result: { en: "Cold water carries a pouch to your feet.", sv: "Kallt vatten för en pung till era fötter." }, gold: 2 },
      { label: { en: "Root door", sv: "Rotdörren" }, result: { en: "Roots part and reveal a safe path.", sv: "Rötterna delar sig och visar en säker stig." }, item: "Root Key", stat: "luck" },
    ],
  },
];

const locationEncounters = Object.fromEntries(
  locations
    .filter((location) => location.id !== "first-marker")
    .map((location, index) => [
      location.id,
      [encounterTemplates[index % encounterTemplates.length], encounterTemplates[(index + 1) % encounterTemplates.length], encounterTemplates[(index + 2) % encounterTemplates.length]],
    ]),
);

const panels = ["gender", "style", "race", "class"];
const maxPartySize = 4;
const startUnlocked = ["mistmarket", "emberwild"];
const state = {
  language: localStorage.getItem("dnd-light-language") || "",
  panel: "gender",
  race: "human",
  gender: "female",
  class: "fighter",
  style: "ember",
  party: loadParty(),
  gold: Number(localStorage.getItem("dnd-light-gold") || 0),
  inventory: loadJson("dnd-light-inventory", []),
  unlocked: loadJson("dnd-light-unlocked", startUnlocked),
  adventureView: "party",
  location: "first-marker",
  locationPhase: "intro",
  encounterIndex: 0,
  encounterResult: "",
  minigame: "",
  battle: null,
  outcome: null,
  completedHelp: loadJson("dnd-light-completed-help", []),
};

const els = {
  languageGate: document.querySelector("#languageGate"),
  characterName: document.querySelector("#characterName"),
  choicePanel: document.querySelector("#choicePanel"),
  portraitImage: document.querySelector("#portraitImage"),
  styleAura: document.querySelector("#styleAura"),
  heroKicker: document.querySelector("#heroKicker"),
  heroName: document.querySelector("#heroName"),
  heartStat: document.querySelector("#heartStat"),
  actionStat: document.querySelector("#actionStat"),
  luckStat: document.querySelector("#luckStat"),
  partyCount: document.querySelector("#partyCount"),
  partySlots: document.querySelector("#partySlots"),
  saveHeroButton: document.querySelector("#saveHeroButton"),
  startAdventureButton: document.querySelector("#startAdventureButton"),
  resetButton: document.querySelector("#resetButton"),
  creatorStage: document.querySelector("#creatorStage"),
  creatorControls: document.querySelector("#creatorControls"),
  adventureStage: document.querySelector("#adventureStage"),
  adventureBg: document.querySelector("#adventureBg"),
  adventureTitle: document.querySelector("#adventureTitle"),
  adventureParty: document.querySelector("#adventureParty"),
  adventurePanel: document.querySelector(".adventure-panel"),
  adventureSummary: document.querySelector("#adventureSummary"),
  partyGold: document.querySelector("#partyGold"),
  partyItemCount: document.querySelector("#partyItemCount"),
  inventoryGrid: document.querySelector("#inventoryGrid"),
  inventoryHint: document.querySelector("#inventoryHint"),
  partyView: document.querySelector("#partyView"),
  mapView: document.querySelector("#mapView"),
  locationView: document.querySelector("#locationView"),
  mapPoints: document.querySelector("#mapPoints"),
  locationCard: document.querySelector("#locationCard"),
  locationType: document.querySelector("#locationType"),
  locationName: document.querySelector("#locationName"),
  locationDescription: document.querySelector("#locationDescription"),
  locationBackButton: document.querySelector("#locationBackButton"),
  locationContinueButton: document.querySelector("#locationContinueButton"),
  encounterCard: document.querySelector("#encounterCard"),
  encounterKind: document.querySelector("#encounterKind"),
  encounterTitle: document.querySelector("#encounterTitle"),
  encounterText: document.querySelector("#encounterText"),
  encounterChoices: document.querySelector("#encounterChoices"),
  encounterResult: document.querySelector("#encounterResult"),
  fightPanel: document.querySelector("#fightPanel"),
  battleStats: document.querySelector("#battleStats"),
  battleLog: document.querySelector("#battleLog"),
  combatItems: document.querySelector("#combatItems"),
  tradePanel: document.querySelector("#tradePanel"),
  tradeTitle: document.querySelector("#tradeTitle"),
  tradeText: document.querySelector("#tradeText"),
  tradeItems: document.querySelector("#tradeItems"),
  tradeResult: document.querySelector("#tradeResult"),
  helpPanel: document.querySelector("#helpPanel"),
  searchScene: document.querySelector("#searchScene"),
  searchTarget: document.querySelector("#searchTarget"),
  targetImage: document.querySelector("#targetImage"),
  searchImage: document.querySelector("#searchImage"),
  searchHotspot: document.querySelector("#searchHotspot"),
  helpResult: document.querySelector("#helpResult"),
  outcomePanel: document.querySelector("#outcomePanel"),
  outcomeKind: document.querySelector("#outcomeKind"),
  outcomeTitle: document.querySelector("#outcomeTitle"),
  outcomeText: document.querySelector("#outcomeText"),
  outcomeReward: document.querySelector("#outcomeReward"),
  outcomeContinueButton: document.querySelector("#outcomeContinueButton"),
  itemPopup: document.querySelector("#itemPopup"),
  itemPopupClose: document.querySelector("#itemPopupClose"),
  itemPopupIcon: document.querySelector("#itemPopupIcon"),
  itemPopupTitle: document.querySelector("#itemPopupTitle"),
  itemPopupText: document.querySelector("#itemPopupText"),
};

const tabs = [...document.querySelectorAll(".tab")];
const adventureTabs = [...document.querySelectorAll(".adventure-tab")];
let battleTimer = null;

function loadJson(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key) ?? "null");
    return value ?? fallback;
  } catch {
    return fallback;
  }
}

function loadParty() {
  const saved = loadJson("dnd-light-party", []);
  return Array.isArray(saved) ? saved.slice(0, maxPartySize) : [];
}

function saveProgress() {
  localStorage.setItem("dnd-light-party", JSON.stringify(state.party));
  localStorage.setItem("dnd-light-gold", String(state.gold));
  localStorage.setItem("dnd-light-inventory", JSON.stringify(state.inventory));
  localStorage.setItem("dnd-light-unlocked", JSON.stringify(state.unlocked));
  localStorage.setItem("dnd-light-completed-help", JSON.stringify(state.completedHelp));
}

function resetGame() {
  stopBattle();
  Object.keys(localStorage)
    .filter((key) => key.startsWith("dnd-light-"))
    .forEach((key) => localStorage.removeItem(key));
  window.location.reload();
}

function t(key) {
  return text[state.language || "en"][key] ?? text.en[key] ?? key;
}

function local(value) {
  if (typeof value === "string") return value;
  return value[state.language || "en"] ?? value.en;
}

function itemId(value) {
  if (!value) return "";
  if (itemDefs[value]) return value;
  return oldItemMap[value] ?? String(value).replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "").toLowerCase();
}

function itemDef(value) {
  const id = itemId(value);
  return itemDefs[id] ?? {
    icon: "IT",
    name: { en: String(value), sv: String(value) },
    desc: { en: "A useful adventure item.", sv: "En användbar äventyrssak." },
    tags: [],
  };
}

function itemName(value) {
  return local(itemDef(value).name);
}

function partyTotals() {
  return state.party.reduce(
    (totals, member) => {
      totals.heart += Number(member.stats?.heart ?? 0);
      totals.action += Number(member.stats?.action ?? 0);
      totals.luck += Number(member.stats?.luck ?? 0);
      return totals;
    },
    { heart: 0, action: 0, luck: 0 },
  );
}

function addItem(id, memberIndex = 0) {
  state.inventory.push(id);
  const member = state.party[memberIndex % Math.max(state.party.length, 1)];
  if (member) {
    member.items = member.items ?? [];
    member.items.push(id);
  }
}

function removeInventoryItem(id) {
  const normalized = itemId(id);
  const index = state.inventory.findIndex((item) => itemId(item) === normalized);
  if (index < 0) return false;
  state.inventory.splice(index, 1);
  state.party.forEach((member) => {
    const itemIndex = (member.items ?? []).findIndex((item) => itemId(item) === normalized);
    if (itemIndex >= 0) member.items.splice(itemIndex, 1);
  });
  return true;
}

function itemsWithTag(tag) {
  return state.inventory.filter((item) => itemDef(item).tags.includes(tag));
}

function selected(kind) {
  return options[kind].find((item) => item.id === state[kind]);
}

function selectedLocation() {
  return locations.find((location) => location.id === state.location) ?? locations[0];
}

function characterImage(character = state) {
  return `assets/images/characters/${character.race}-${character.class}-${character.gender}-${character.style}.png`;
}

function totalStats() {
  const base = { heart: 5, action: 1, luck: 0 };
  [selected("race"), selected("class")].forEach((item) => {
    Object.entries(item.stats ?? {}).forEach(([key, value]) => {
      base[key] += value;
    });
  });
  return base;
}

function setLanguage(language) {
  state.language = language;
  localStorage.setItem("dnd-light-language", language);
  els.languageGate.hidden = true;
  document.documentElement.lang = language;
  render();
}

function applyLanguage() {
  document.documentElement.lang = state.language || "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelector("#characterName").placeholder = state.language === "sv" ? "Hjältens namn" : "Hero name";
}

function renderChoices() {
  tabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.panel === state.panel));
  els.choicePanel.innerHTML = "";

  options[state.panel].forEach((item) => {
    const button = document.createElement("button");
    button.className = "choice";
    button.type = "button";
    button.classList.toggle("is-selected", item.id === state[state.panel]);
    button.append(choiceThumb(state.panel, item), choiceLabel(local(item.label)));
    button.addEventListener("click", () => {
      state[state.panel] = item.id;
      render();
    });
    els.choicePanel.append(button);
  });
}

function choiceLabel(label) {
  const strong = document.createElement("strong");
  strong.textContent = label;
  return strong;
}

function choiceThumb(kind, item) {
  const thumb = document.createElement("span");
  thumb.className = "choice-thumb";

  if (kind === "style") {
    thumb.classList.add("is-swatch");
    thumb.style.setProperty("--swatch", item.aura);
    return thumb;
  }

  const race = kind === "race" ? item.id : state.race;
  const heroClass = kind === "class" ? item.id : state.class;
  const gender = kind === "gender" ? item.id : state.gender;
  const image = document.createElement("img");
  image.src = characterImage({ race, class: heroClass, gender, style: state.style });
  image.alt = "";
  thumb.append(image);
  return thumb;
}

function renderHero() {
  const race = selected("race");
  const gender = selected("gender");
  const heroClass = selected("class");
  const style = selected("style");
  const stats = totalStats();

  els.portraitImage.src = characterImage();
  els.styleAura.style.setProperty("--aura", style.aura);
  els.heroKicker.textContent = `${local(race.label)} ${local(gender.label)} ${local(style.label)} ${local(heroClass.label)}`;
  els.heroName.textContent = local(heroClass.name);
  els.heartStat.textContent = stats.heart;
  els.actionStat.textContent = stats.action;
  els.luckStat.textContent = stats.luck;
}

function createPartyMember() {
  const race = selected("race");
  const gender = selected("gender");
  const heroClass = selected("class");
  const style = selected("style");
  const fallbackName = `${local(style.label)} ${local(heroClass.label)}`;
  return {
    id: typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    name: els.characterName.value.trim() || fallbackName,
    race: race.id,
    gender: gender.id,
    class: heroClass.id,
    style: style.id,
    title: local(heroClass.name),
    summary: `${local(race.label)} ${local(gender.label)} ${local(style.label)} ${local(heroClass.label)}`,
    stats: totalStats(),
    items: [],
  };
}

function addCurrentHero() {
  if (state.party.length >= maxPartySize) return;
  state.party.push(createPartyMember());
  els.characterName.value = "";
  saveProgress();
  render();
}

function removePartyMember(id) {
  state.party = state.party.filter((member) => member.id !== id);
  saveProgress();
  render();
}

function renderPartyStrip() {
  els.partyCount.textContent = `${state.party.length}/${maxPartySize}`;
  els.saveHeroButton.disabled = state.party.length >= maxPartySize;
  els.startAdventureButton.disabled = state.party.length === 0;
  els.partySlots.innerHTML = "";

  for (let index = 0; index < maxPartySize; index++) {
    const member = state.party[index];
    const slot = document.createElement("article");
    slot.className = "party-slot";
    if (member) {
      const image = document.createElement("img");
      image.src = characterImage(member);
      image.alt = "";
      const label = document.createElement("strong");
      label.textContent = member.name;
      const remove = document.createElement("button");
      remove.type = "button";
      remove.setAttribute("aria-label", `Remove ${member.name}`);
      remove.textContent = "x";
      remove.addEventListener("click", () => removePartyMember(member.id));
      slot.append(image, label, remove);
    } else {
      const empty = document.createElement("span");
      empty.textContent = "+";
      slot.classList.add("is-empty");
      slot.append(empty);
    }
    els.partySlots.append(slot);
  }
}

function startAdventure() {
  if (state.party.length === 0) return;
  els.creatorStage.hidden = true;
  els.creatorControls.hidden = true;
  els.adventureStage.hidden = false;
  state.adventureView = "party";
  state.location = "first-marker";
  renderAdventure();
}

function backToCreator() {
  els.adventureStage.hidden = true;
  els.creatorStage.hidden = false;
  els.creatorControls.hidden = false;
}

function setPanel(panel) {
  state.panel = panel;
  render();
}

function step(offset) {
  const index = panels.indexOf(state.panel);
  setPanel(panels[Math.max(0, Math.min(panels.length - 1, index + offset))]);
}

function randomize() {
  Object.keys(options).forEach((kind) => {
    const list = options[kind];
    state[kind] = list[Math.floor(Math.random() * list.length)].id;
  });
  render();
}

function setAdventureView(view) {
  if (view !== "location") stopBattle();
  state.adventureView = view;
  renderAdventure();
}

function isUnlocked(locationId) {
  return locationId === "first-marker" || state.unlocked.includes(locationId);
}

function travelTo(locationId) {
  if (!isUnlocked(locationId)) return;
  stopBattle();
  state.location = locationId;
  state.adventureView = locationId === "first-marker" ? "map" : "location";
  state.locationPhase = "intro";
  state.encounterIndex = 0;
  state.encounterResult = "";
  state.minigame = "";
  state.battle = null;
  state.outcome = null;
  if (state.unlocked.length <= startUnlocked.length) {
    state.unlocked = [...new Set([...state.unlocked, ...locations.filter((location) => location.id !== "first-marker").map((location) => location.id)])];
    saveProgress();
  }
  renderAdventure();
}

function currentEncounter() {
  return locationScenarios[state.location];
}

function rewardLine({ gold = 0, item = "" } = {}) {
  const reward = [
    gold ? `${t("rewardGold")} +${gold}` : "",
    item ? `${t("rewardItem")}: ${itemName(item)}` : "",
  ].filter(Boolean).join(" | ");
  return reward ? ` (${reward})` : "";
}

function rewardText({ gold = 0, item = "" } = {}) {
  return [
    gold ? `${t("rewardGold")} +${gold}` : "",
    item ? `${t("rewardItem")}: ${itemName(item)}` : "",
  ].filter(Boolean).join(" | ");
}

function grantReward({ gold = 0, item = "" } = {}) {
  if (gold) state.gold = Math.max(0, state.gold + gold);
  if (item) addItem(item, state.encounterIndex);
}

function startMinigame(type) {
  const scenario = currentEncounter();
  if (!scenario) return;
  stopBattle();
  state.minigame = type;
  state.outcome = null;
  state.encounterResult = type === "help" ? t("searching") : "";
  if (type === "fight") startBattle(scenario.fight);
  if (type !== "fight") state.battle = null;
  saveProgress();
  renderAdventure();
}

function resetMinigame() {
  stopBattle();
  state.minigame = "";
  state.battle = null;
  state.outcome = null;
  state.locationPhase = "encounter";
  state.encounterResult = "";
  saveProgress();
  renderAdventure();
}

function makeOutcome(type, success, reward = {}) {
  const scenario = currentEncounter();
  const location = selectedLocation();
  const target = scenario?.help ? local(scenario.help.target) : "";
  const enemy = scenario?.fight ? local(scenario.fight.enemy) : "";
  const titles = {
    fight: success
      ? { en: `${enemy} breaks`, sv: `${enemy} ger vika` }
      : { en: "The party falls back", sv: "Gruppen faller tillbaka" },
    trade: { en: "A deal changes the road", sv: "En affär ändrar vägen" },
    help: { en: "The hidden clue is found", sv: "Den dolda ledtråden hittas" },
  };
  const bodies = {
    fight: success
      ? {
          en: `With the threat handled, ${local(location.name)} becomes safer for a while. Someone grateful presses a reward into the party's hands before the road opens again.`,
          sv: `När hotet är undanröjt blir ${local(location.name)} tryggare för en stund. Någon tacksam trycker en belöning i gruppens händer innan vägen öppnas igen.`,
        }
      : {
          en: `The fight goes badly, but the party escapes with enough breath to rethink the approach.`,
          sv: `Striden går illa, men gruppen kommer undan med nog kraft för att tänka om.`,
        },
    trade: {
      en: `The exchange settles the local problem without blades. The party gains a useful lead and the people here remember the favor.`,
      sv: `Bytet löser platsens problem utan vapen. Gruppen får ett användbart spår och folket här minns tjänsten.`,
    },
    help: {
      en: `The party spots ${target}. That small detail untangles the whole scene and reveals what everyone else missed.`,
      sv: `Gruppen hittar ${target}. Den lilla detaljen löser upp hela scenen och avslöjar det alla andra missade.`,
    },
  };
  return {
    type,
    title: local(titles[type]),
    text: local(bodies[type]),
    reward: rewardText(reward),
  };
}

function continueOutcome() {
  state.outcome = null;
  state.minigame = "";
  state.battle = null;
  state.encounterResult = "";
  state.adventureView = "map";
  state.locationPhase = "intro";
  saveProgress();
  renderAdventure();
}

function showLocationEncounter() {
  state.locationPhase = "encounter";
  state.encounterResult = "";
  saveProgress();
  renderAdventure();
}

function backFromLocationIntro() {
  state.adventureView = "map";
  state.locationPhase = "intro";
  saveProgress();
  renderAdventure();
}

function startBattle(fight) {
  const totals = partyTotals();
  state.battle = {
    enemy: local(fight.enemy),
    enemyHp: fight.hp,
    enemyMax: fight.hp,
    partyHp: Math.max(6, totals.heart + state.party.length * 2),
    partyMax: Math.max(6, totals.heart + state.party.length * 2),
    shield: 0,
    round: 0,
    done: false,
    rewardGold: fight.rewardGold,
    rewardItem: fight.rewardItem,
    log: [state.language === "sv" ? "Striden börjar." : "The battle begins."],
  };
  battleTimer = window.setInterval(tickBattle, 900);
}

function stopBattle() {
  if (battleTimer) window.clearInterval(battleTimer);
  battleTimer = null;
}

function tickBattle() {
  const battle = state.battle;
  const fight = currentEncounter()?.fight;
  if (!battle || battle.done || !fight) {
    stopBattle();
    return;
  }
  const totals = partyTotals();
  const partyHit = Math.max(1, Math.round(totals.action / 2) + 1 + (battle.round % 2 ? Math.max(0, Math.floor(totals.luck / 3)) : 0));
  battle.enemyHp = Math.max(0, battle.enemyHp - partyHit);
  battle.log.push(state.language === "sv" ? `Gruppen gör ${partyHit} skada.` : `The party deals ${partyHit} damage.`);
  if (battle.enemyHp <= 0) {
    finishBattle(true);
    return;
  }
  const blocked = Math.min(battle.shield, fight.power);
  battle.shield = Math.max(0, battle.shield - blocked);
  const enemyHit = Math.max(0, fight.power - blocked);
  battle.partyHp = Math.max(0, battle.partyHp - enemyHit);
  battle.log.push(state.language === "sv" ? `${battle.enemy} gör ${enemyHit} skada.` : `${battle.enemy} deals ${enemyHit} damage.`);
  if (battle.partyHp <= 0) {
    finishBattle(false);
    return;
  }
  battle.round += 1;
  renderBattle();
  saveProgress();
}

function finishBattle(won) {
  stopBattle();
  const battle = state.battle;
  if (!battle || battle.done) return;
  battle.done = true;
  if (won) {
    const reward = { gold: battle.rewardGold, item: battle.rewardItem };
    grantReward(reward);
    state.outcome = makeOutcome("fight", true, reward);
    battle.log.push(`${t("victory")}${rewardLine(reward)}`);
  } else {
    state.outcome = makeOutcome("fight", false);
    battle.log.push(`${t("defeat")}. ${state.language === "sv" ? "Gruppen flyr tillbaka till vägen." : "The party escapes back to the road."}`);
  }
  saveProgress();
  renderAdventure();
}

function useCombatItem(id) {
  const battle = state.battle;
  const def = itemDef(id);
  if (!battle || battle.done || !def.tags.includes("combat") || !removeInventoryItem(id)) return;
  if (def.damage) {
    battle.enemyHp = Math.max(0, battle.enemyHp - def.damage);
    battle.log.push(`${itemName(id)}: -${def.damage} ${battle.enemy}`);
  }
  if (def.heal) {
    battle.partyHp = Math.min(battle.partyMax, battle.partyHp + def.heal);
    battle.log.push(`${itemName(id)}: +${def.heal} ${t("heart")}`);
  }
  if (def.shield) {
    battle.shield += def.shield;
    battle.log.push(`${itemName(id)}: +${def.shield} block`);
  }
  if (battle.enemyHp <= 0) finishBattle(true);
  saveProgress();
  renderAdventure();
}

function useTradeItem(id) {
  const scenario = currentEncounter();
  if (!scenario || !removeInventoryItem(id)) return;
  const reward = { gold: scenario.trade.rewardGold, item: scenario.trade.rewardItem };
  grantReward(reward);
  state.outcome = makeOutcome("trade", true, reward);
  state.encounterResult = `${state.language === "sv" ? "Affären lyckas." : "The trade works."}${rewardLine(reward)}`;
  saveProgress();
  renderAdventure();
}

function bargainTrade() {
  const scenario = currentEncounter();
  if (!scenario) return;
  const totals = partyTotals();
  const gold = totals.luck >= 4 ? 2 : 1;
  const reward = { gold };
  grantReward(reward);
  state.outcome = makeOutcome("trade", true, reward);
  state.encounterResult = `${state.language === "sv" ? "Ni får igenom en enklare deal." : "You push through a modest deal."}${rewardLine(reward)}`;
  saveProgress();
  renderAdventure();
}

function completeHelp() {
  const scenario = currentEncounter();
  if (!scenario) return;
  const key = `${state.location}:help`;
  const reward = { item: scenario.help.rewardItem };
  if (!state.completedHelp.includes(key)) {
    grantReward(reward);
    state.completedHelp.push(key);
    state.encounterResult = `${t("found")}: ${local(scenario.help.target)}${rewardLine(reward)}`;
  } else {
    state.encounterResult = `${t("found")}: ${local(scenario.help.target)}`;
  }
  state.outcome = makeOutcome("help", true, reward);
  saveProgress();
  renderAdventure();
}

function missHelpTarget() {
  if (state.minigame !== "help") return;
  state.encounterResult = t("notThere");
  renderHelp();
}

function handleSearchClick(event) {
  if (state.minigame !== "help") return;
  const scenario = currentEncounter();
  if (!scenario) return;
  const rect = els.searchImage.getBoundingClientRect();
  if (!rect.width || !rect.height) return;
  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;
  const dx = x - scenario.help.x;
  const dy = y - scenario.help.y;
  const hitRadius = scenario.help.hitRadius ?? 9;
  if (Math.hypot(dx, dy) <= hitRadius) {
    completeHelp();
    return;
  }
  missHelpTarget();
}

function renderAdventure() {
  const location = selectedLocation();
  const locationMode = state.adventureView === "location";
  const mapMode = state.adventureView === "map";
  const partyMode = state.adventureView === "party";

  const title = partyMode ? t("firstMarker") : mapMode ? "Brightreach" : local(location.name);
  const image = partyMode ? "assets/images/adventure/party-road.png" : mapMode ? "assets/images/adventure/fantasyland-map-portrait.png" : location.image;
  const summary = partyMode
    ? `${state.party.length} ${t("ready")}`
    : mapMode
      ? t("chooseRoad")
      : state.locationPhase === "intro"
        ? ""
        : local(currentEncounter()?.title ?? location.description);

  adventureTabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.adventureView === state.adventureView));
  els.partyView.hidden = !partyMode;
  els.mapView.hidden = !mapMode;
  els.locationView.hidden = !locationMode;
  els.adventurePanel.hidden = locationMode;
  els.adventureTitle.textContent = title;
  els.adventureBg.src = image;
  els.adventureSummary.textContent = summary;
  els.partyGold.textContent = state.gold;
  els.partyItemCount.textContent = state.inventory.length;
  els.inventoryHint.textContent = t("tapInfo");

  renderAdventureParty();
  renderInventory();
  renderMap();
  renderLocation(location);
}

function renderInventory() {
  els.inventoryGrid.innerHTML = "";
  if (!state.inventory.length) {
    const empty = document.createElement("p");
    empty.className = "encounter-result";
    empty.textContent = t("noItems");
    els.inventoryGrid.append(empty);
    return;
  }
  state.inventory.forEach((item, index) => {
    const def = itemDef(item);
    const button = document.createElement("button");
    button.className = "inventory-item";
    button.type = "button";
    const icon = document.createElement("span");
    icon.textContent = def.icon;
    const label = document.createElement("small");
    label.textContent = itemName(item);
    button.append(icon, label);
    button.addEventListener("click", () => openItemPopup(item, index));
    els.inventoryGrid.append(button);
  });
}

function openItemPopup(item) {
  const def = itemDef(item);
  els.itemPopupIcon.textContent = def.icon;
  els.itemPopupTitle.textContent = itemName(item);
  els.itemPopupText.textContent = local(def.desc);
  els.itemPopup.hidden = false;
}

function closeItemPopup() {
  els.itemPopup.hidden = true;
}

function renderAdventureParty() {
  els.adventureParty.innerHTML = "";
  state.party.forEach((member) => {
    const card = document.createElement("article");
    card.className = "adventure-member";
    const image = document.createElement("img");
    image.src = characterImage(member);
    image.alt = "";
    const label = document.createElement("strong");
    label.textContent = member.name;
    const meta = document.createElement("span");
    meta.textContent = `${t("heart")} ${member.stats.heart} | ${t("action")} ${member.stats.action} | ${t("luck")} ${member.stats.luck}`;
    const item = document.createElement("small");
    item.textContent = (member.items ?? []).slice(-2).map(itemName).join(", ") || t("noItems");
    card.append(image, label, meta, item);
    els.adventureParty.append(card);
  });
}

function renderMap() {
  els.mapPoints.innerHTML = "";
  locations.forEach((item) => {
    const unlocked = isUnlocked(item.id);
    const current = item.id === state.location;
    const button = document.createElement("button");
    button.className = "map-point";
    button.type = "button";
    button.disabled = !unlocked;
    button.classList.toggle("is-current", current);
    button.classList.toggle("is-locked", !unlocked);
    button.style.left = `${item.x}%`;
    button.style.top = `${item.y}%`;
    button.setAttribute("aria-label", `${unlocked ? t("travel") : t("locked")}: ${local(item.name)}`);
    const label = document.createElement("span");
    label.textContent = current ? t("current") : unlocked ? local(item.name) : t("locked");
    button.append(label);
    button.addEventListener("click", () => travelTo(item.id));
    els.mapPoints.append(button);
  });
}

function renderLocation(location) {
  els.locationType.textContent = local(location.type);
  els.locationName.textContent = local(location.name);
  els.locationDescription.textContent = local(location.description);

  const encounter = currentEncounter();
  const showingOutcome = Boolean(state.outcome);
  const showingIntro = state.locationPhase === "intro" && !showingOutcome && !state.minigame;
  els.locationCard.hidden = !showingIntro;
  els.locationBackButton.hidden = !showingIntro;
  els.locationContinueButton.hidden = !showingIntro;
  els.encounterCard.hidden = showingIntro || Boolean(state.minigame) || showingOutcome;
  els.fightPanel.hidden = showingOutcome || state.minigame !== "fight";
  els.tradePanel.hidden = showingOutcome || state.minigame !== "trade";
  els.helpPanel.hidden = showingOutcome || state.minigame !== "help";
  els.outcomePanel.hidden = !showingOutcome;
  if (!encounter || location.id === "first-marker") {
    els.encounterCard.hidden = false;
    els.outcomePanel.hidden = true;
    els.encounterKind.textContent = "";
    els.encounterTitle.textContent = t("noEncounter");
    els.encounterText.textContent = "";
    els.encounterChoices.innerHTML = "";
    els.encounterResult.textContent = "";
    return;
  }

  els.encounterKind.textContent = "Encounter";
  els.encounterTitle.textContent = local(encounter.title);
  els.encounterText.textContent = local(encounter.text);
  els.encounterResult.textContent = state.encounterResult;
  els.encounterChoices.innerHTML = "";
  [
    { key: "fight", icon: "SW", label: local(encounter.fight.action) },
    { key: "trade", icon: "CO", label: local(encounter.trade.action) },
    { key: "help", icon: "SE", label: local(encounter.help.action) },
  ].forEach((choice) => {
    const button = document.createElement("button");
    button.className = "encounter-choice";
    button.type = "button";
    const icon = document.createElement("span");
    icon.textContent = choice.icon;
    const label = document.createElement("strong");
    label.textContent = choice.label;
    button.append(icon, label);
    button.addEventListener("click", () => startMinigame(choice.key));
    els.encounterChoices.append(button);
  });

  renderBattle();
  renderTrade();
  renderHelp();
  renderOutcome();
}

function renderOutcome() {
  if (!state.outcome) return;
  els.outcomeKind.textContent = t("result");
  els.outcomeTitle.textContent = state.outcome.title;
  els.outcomeText.textContent = state.outcome.text;
  els.outcomeReward.textContent = state.outcome.reward;
}

function renderBattle() {
  const battle = state.battle;
  if (!battle) {
    els.battleStats.textContent = "";
    els.battleLog.innerHTML = "";
    els.combatItems.innerHTML = "";
    return;
  }
  els.battleStats.textContent = `${Math.ceil(battle.partyHp)}/${battle.partyMax} vs ${Math.ceil(battle.enemyHp)}/${battle.enemyMax} ${battle.enemy}`;
  els.battleLog.innerHTML = "";
  battle.log.slice(-8).forEach((line) => {
    const row = document.createElement("p");
    row.textContent = line;
    els.battleLog.append(row);
  });
  if (battle.done) {
    els.combatItems.innerHTML = "";
    const done = document.createElement("p");
    done.textContent = state.language === "sv" ? "Striden är avslutad." : "The battle is over.";
    els.combatItems.append(done);
  } else {
    renderItemActions(els.combatItems, itemsWithTag("combat"), useCombatItem);
  }
}

function renderTrade() {
  const scenario = currentEncounter();
  if (!scenario) return;
  els.tradeTitle.textContent = local(scenario.trade.title);
  els.tradeText.textContent = state.language === "sv"
    ? "Använd en relevant sak för ett bättre utfall, eller förhandla utan."
    : "Use a relevant item for a better outcome, or bargain without one.";
  const usable = state.inventory.filter((item) => scenario.trade.wants.includes(itemId(item)));
  renderItemActions(els.tradeItems, usable, useTradeItem);
  const bargain = document.createElement("button");
  bargain.className = "item-action";
  bargain.type = "button";
  const icon = document.createElement("span");
  icon.textContent = "BG";
  const label = document.createElement("small");
  label.textContent = t("bargain");
  bargain.append(icon, label);
  bargain.addEventListener("click", bargainTrade);
  els.tradeItems.append(bargain);
  els.tradeResult.textContent = state.minigame === "trade" ? state.encounterResult : "";
}

function renderHelp() {
  const scenario = currentEncounter();
  if (!scenario) return;
  const found = state.completedHelp.includes(`${state.location}:help`);
  els.searchTarget.textContent = t("findThis");
  els.targetImage.src = scenario.help.targetImage;
  els.targetImage.alt = local(scenario.help.target);
  els.searchImage.src = scenario.help.image;
  els.searchImage.alt = local(scenario.help.target);
  els.searchHotspot.style.left = `${scenario.help.x}%`;
  els.searchHotspot.style.top = `${scenario.help.y}%`;
  els.searchScene.classList.toggle("is-found", found);
  els.helpResult.textContent = state.minigame === "help" ? state.encounterResult : "";
}

function renderItemActions(container, items, handler) {
  container.innerHTML = "";
  if (!items.length) {
    const empty = document.createElement("p");
    empty.textContent = t("noUsableItems");
    container.append(empty);
    return;
  }
  items.forEach((item) => {
    const def = itemDef(item);
    const button = document.createElement("button");
    button.className = "item-action";
    button.type = "button";
    const icon = document.createElement("span");
    icon.textContent = def.icon;
    const label = document.createElement("small");
    label.textContent = `${t("use")} ${itemName(item)}`;
    button.append(icon, label);
    button.addEventListener("click", () => handler(item));
    container.append(button);
  });
}

function render() {
  applyLanguage();
  els.languageGate.hidden = Boolean(state.language);
  renderChoices();
  renderHero();
  renderPartyStrip();
  if (!els.adventureStage.hidden) renderAdventure();
}

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});
tabs.forEach((tab) => tab.addEventListener("click", () => setPanel(tab.dataset.panel)));
document.querySelector("#backButton").addEventListener("click", () => step(-1));
document.querySelector("#nextButton").addEventListener("click", () => step(1));
document.querySelector("#randomButton").addEventListener("click", randomize);
els.saveHeroButton.addEventListener("click", addCurrentHero);
els.startAdventureButton.addEventListener("click", startAdventure);
els.resetButton.addEventListener("click", resetGame);
els.locationBackButton.addEventListener("click", backFromLocationIntro);
els.locationContinueButton.addEventListener("click", showLocationEncounter);
document.querySelector("#backToCreatorButton").addEventListener("click", backToCreator);
adventureTabs.forEach((tab) => tab.addEventListener("click", () => setAdventureView(tab.dataset.adventureView)));
els.itemPopupClose.addEventListener("click", closeItemPopup);
els.outcomeContinueButton.addEventListener("click", continueOutcome);
document.querySelectorAll("[data-minigame-back]").forEach((button) => button.addEventListener("click", resetMinigame));
els.searchScene.addEventListener("click", handleSearchClick);

render();
