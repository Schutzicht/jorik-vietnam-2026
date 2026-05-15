export type Coord = [number, number];

export interface Block {
  title: string;
  items: string[];
}

export interface SideTrip {
  name: string;
  distance: string;
  duration: string;
  description: string;
  coords?: Coord;
  image?: string;
}

export interface DocumentSlot {
  type: string;
  label: string;
  file?: string;
  note?: string;
}

export interface Stop {
  id: string;
  city: string;
  region: string;
  arrival: string;
  departure: string;
  nights: number;
  coords: Coord;
  tagline: string;
  vibe: string;
  highlights: string[];
  image: string;
  imageCredit?: string;
  stay: Block;
  cowork: Block;
  surf?: Block;
  food: Block;
  people: Block;
  todo: Block;
  sideTrips?: SideTrip[];
  documents?: DocumentSlot[];
  photos?: string[];
}

const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

export const trip = {
  title: "Vietnam",
  duration: "~25 dagen",
  window: "Oktober 2026",
  heroImage: unsplash("1652540755628-47f6c1480f0b", 2000),
  intent: "Als ik full-time in NL werk mis ik het avontuur. Drie weken Vietnam: surf op niveau, andere lucht, één plek echt landen. Canggu-vibe maar minder druk.",
  flights: [
    {
      from: "AMS",
      to: "HAN",
      fromCity: "Amsterdam Schiphol",
      toCity: "Hanoi Noi Bai",
      kind: "Heenvlucht",
      date: "",
      time: "",
      airline: "",
      flightNo: "",
      duration: "~14u (via Doha of Singapore)",
      bookingRef: "",
      note: "Indicatie ~700-900 EUR retour. Boeken via Skyscanner / Google Flights, 4-6 weken vooraf.",
      file: ""
    },
    {
      from: "HAN",
      to: "DAD",
      fromCity: "Hanoi",
      toCity: "Da Nang",
      kind: "Intern",
      date: "4 okt",
      time: "",
      airline: "",
      flightNo: "",
      duration: "1u 20m",
      bookingRef: "",
      note: "VietJet of Vietnam Airlines. ~40-70 EUR. Boeken 1-2 weken vooraf is meestal goed.",
      file: ""
    },
    {
      from: "DAD",
      to: "SGN",
      fromCity: "Da Nang",
      toCity: "Ho Chi Minh City",
      kind: "Intern",
      date: "22 okt",
      time: "",
      airline: "",
      flightNo: "",
      duration: "1u 25m",
      bookingRef: "",
      note: "Zelfde providers. ~40-70 EUR.",
      file: ""
    },
    {
      from: "SGN",
      to: "AMS",
      fromCity: "Ho Chi Minh City",
      toCity: "Amsterdam Schiphol",
      kind: "Terugvlucht",
      date: "25 okt",
      time: "",
      airline: "",
      flightNo: "",
      duration: "~14u",
      bookingRef: "",
      note: "Vaak in dezelfde retour-ticket met de heenvlucht.",
      file: ""
    }
  ]
};

export const profile = {
  name: "Jorik",
  surfLevel: "Intermediate",
  workHours: "10-20u / week",
  socialMode: "Balans",
  eatStyle: "Lokaal, niet extreem",
  rhythm: "Late starter",
  stayStyle: "Hostel met privé kamer",
  vibeReference: "Canggu / Uluwatu",
  seaExperience: ["Bali", "Lombok", "Thailand", "Sri Lanka"]
};

export const stops: Stop[] = [
  {
    id: "hanoi",
    city: "Hanoi",
    region: "Noord",
    arrival: "1 okt",
    departure: "4 okt",
    nights: 3,
    coords: [21.0285, 105.8542],
    image: unsplash("1555921015-5532091f6026"),
    imageCredit: "Photo: Florian Wehde / Unsplash",
    tagline: "Landen. Pho. Andere energie dan Da Nang.",
    vibe: "Chaotisch, oud, vol scooters. Compleet andere energie dan het strand zometeen. Drie dagen is genoeg om te landen en het noorden te zien voor je naar je homebase zakt.",
    highlights: ["Egg coffee crawl", "Train Street avond", "Ninh Binh daytrip (Trang An)"],
    stay: {
      title: "Slapen",
      items: [
        "Hostel met privé kamer: Old Quarter View, La Sinfonia del Rey, Bauhinia Boutique",
        "Old Quarter (centraal, lawaaiig) of Hoan Kiem zuidkant (rustiger)",
        "Privé kamer ~25-40 EUR per nacht"
      ]
    },
    cowork: {
      title: "Werken",
      items: [
        "Late starter: middag-sessies in The Note Coffee of Cong Caphe",
        "Toong Coworking als je 1 deep-work dag wilt",
        "Geen membership nodig voor 3 dagen"
      ]
    },
    food: {
      title: "Eten",
      items: [
        "Pho Gia Truyen (49 Bat Dan, ochtend-only)",
        "Bun Cha Huong Lien",
        "Banh mi 25",
        "Egg coffee bij Giang Cafe of Cafe Dinh"
      ]
    },
    people: {
      title: "Mensen",
      items: [
        "Skip de Backpackers pub crawls",
        "Bia Hoi Corner / Ta Hien — krukje, biertje, locals",
        "Beste connecties komen later in Da Nang, hier just chill"
      ]
    },
    todo: {
      title: "Doen",
      items: [
        "Hoan Kiem Lake — namiddag wandeling",
        "Train Street avond (rond 19u, mooier dan dag)",
        "Temple of Literature",
        "Ninh Binh als daytrip (Trang An boottocht)"
      ]
    },
    documents: [
      { type: "flight", label: "Heenvlucht KLM", note: "AMS → HAN" },
      { type: "hotel", label: "Hostel / Hotel boeking" },
      { type: "visa", label: "E-visum" }
    ],
    photos: []
  },
  {
    id: "danang",
    city: "Da Nang",
    region: "Centraal · Homebase",
    arrival: "4 okt",
    departure: "22 okt",
    nights: 18,
    coords: [16.0544, 108.2022],
    image: unsplash("1720777366540-ca547cbddfa1"),
    imageCredit: "Photo: Nik V / Unsplash",
    tagline: "Canggu-vibe van Vietnam. Homebase, surf, ritme.",
    vibe: "An Thuong is de Canggu van Vietnam — nomad cafes, surf 5min lopen, yoga, smoothie bowls als je het wilt. Maar minder druk dan Bali. Hier ga je echt landen: vast apartement, vaste cafes, surf-routine.",
    highlights: ["My Khe intermediate sandbar peaks", "10-day pass bij The Hub", "Hoi An weekendjes", "Hue + Hai Van treinrit"],
    stay: {
      title: "Slapen",
      items: [
        "Hostel met privé kamer eerste 4-5 nachten: Sea'sons, Funtastic Sea Da Nang (An Thuong)",
        "Voor de homebase: studio of 1-bed via FB groep 'Da Nang Apartments For Rent' — 350-500 EUR/maand lokaal regelen",
        "An Thuong / My An (nomad-buurt, alles op loopafstand)"
      ]
    },
    cowork: {
      title: "Werken",
      items: [
        "Light werk-cadence: koop 10-day pass bij The Hub (~30 EUR) ipv maand",
        "Late starter friendly: open vanaf 9u, blijft druk tot 19u",
        "Cafes voor losse uren: 43 Factory Coffee, Nam House"
      ]
    },
    surf: {
      title: "Surf",
      items: [
        "Intermediate-niveau: My Khe sandbar peaks zijn perfect in oktober",
        "Paddle-out makkelijk, kleinere line-ups dan Bali",
        "Voor pittiger swell: vraag locals naar Non Nuoc",
        "Board huren ~7 EUR/dag, neem eigen wax + leash mee"
      ]
    },
    food: {
      title: "Eten",
      items: [
        "Mi Quang 1A (de lokale spec, must)",
        "Banh Xeo Ba Duong (krokante pancake)",
        "Bun Cha Ca Ba Vy (vis-noodle soep)",
        "Skip de smoothie-bowl-cafes tenzij comfort-craving"
      ]
    },
    people: {
      title: "Mensen",
      items: [
        "The Hub events (wo + vr) — niet elke avond, balans",
        "Surf-meetup zondag-ochtend op My Khe",
        "An Thuong is klein genoeg dat je dezelfde gezichten ziet"
      ]
    },
    todo: {
      title: "Doen",
      items: [
        "Surf-routine: 3x per week target",
        "Late-starter friendly: golden hour scooter naar Son Tra",
        "Marble Mountains in de namiddag (koeler)",
        "Skip de 5u zonsopkomst-hikes"
      ]
    },
    sideTrips: [
      {
        name: "Hoi An",
        distance: "30 km",
        duration: "1-3 nachten",
        description: "Oude haven-stad met lampions, tailors, restaurants. Doe 1-2 weekenden hier.",
        coords: [15.8801, 108.338],
        image: unsplash("1563354860-799d15199ac3", 1000)
      },
      {
        name: "Hue",
        distance: "100 km",
        duration: "Daytrip",
        description: "Treinrit door Hai Van Pass is een van de mooiste van Zuidoost-Azië. Citadel + eten.",
        coords: [16.4637, 107.5909]
      },
      {
        name: "Ba Na Hills",
        distance: "35 km",
        duration: "Halve dag",
        description: "Golden Bridge en kabelbaan-uitzicht. Toeristisch maar visueel.",
        coords: [15.9978, 107.9883]
      }
    ],
    documents: [
      { type: "flight", label: "Intern: HAN → DAD" },
      { type: "hotel", label: "Eerste nachten Airbnb" },
      { type: "hotel", label: "Maand appartement (later)" },
      { type: "cowork", label: "Co-working maandpas" }
    ],
    photos: []
  },
  {
    id: "hcmc",
    city: "Ho Chi Minh",
    region: "Zuid",
    arrival: "22 okt",
    departure: "25 okt",
    nights: 3,
    coords: [10.7769, 106.7009],
    image: unsplash("1583417319070-4a69db38a482"),
    imageCredit: "Photo: Tron Le / Unsplash",
    tagline: "Afsluiter. Skyline, banh mi, naar huis.",
    vibe: "Sneller, moderner, kapitalistischer. Andere energie als slot — niet om te landen, om te beleven. 3 dagen, dan vlucht.",
    highlights: ["Banh mi Huynh Hoa (best of trip)", "Rooftop sunset", "War Remnants Museum"],
    stay: {
      title: "Slapen",
      items: [
        "Hostel met privé kamer: The Common Room Project, Hideout, Vy Khanh House (D1)",
        "District 1 voor het centrum, District 3 voor lokaal eten",
        "~25-45 EUR per nacht voor privé kamer"
      ]
    },
    cowork: {
      title: "Werken",
      items: [
        "The Workshop Coffee — koffie + wifi voor losse uurtjes",
        "Hou werk light, je vliegt over 3 dagen",
        "Geen co-working membership zinvol"
      ]
    },
    food: {
      title: "Eten",
      items: [
        "Banh Mi Huynh Hoa (Le Thi Rieng) — vaak de beste van het land",
        "Pho Hoa Pasteur — ochtend-only",
        "Ben Thanh street food (avond, ronde Ton That Thiep)",
        "Anan Saigon als je een laatste-avond diner wilt"
      ]
    },
    people: {
      title: "Mensen",
      items: [
        "Rooftop bars (Social Club, Chill Skybar) — late starter friendly",
        "Skip Bui Vien tenzij je echt het backpacker-cliche wilt",
        "Saigon Outcast events"
      ]
    },
    todo: {
      title: "Doen",
      items: [
        "Late starter: War Remnants in de namiddag (sluit 17u)",
        "Notre Dame + Post Office samen, 30min wandel",
        "Bitexco voor zonsondergang uitzicht",
        "Skip de 6u-Mekong daytrip"
      ]
    },
    documents: [
      { type: "flight", label: "Intern: DAD → SGN" },
      { type: "flight", label: "Terugvlucht SGN → AMS" },
      { type: "hotel", label: "Hotel laatste nachten" }
    ],
    photos: []
  }
];

export const practical = [
  {
    title: "Visum",
    body: "E-visum via evisa.gov.vn, ~25 USD, 90 dagen. NL-paspoort: vrijstelling tot 45 dagen."
  },
  {
    title: "Geld",
    body: "Vietnamese Dong (1 EUR ~ 27.000 VND). Wise/Revolut. Cash voor street food, kaart voor cafes."
  },
  {
    title: "SIM",
    body: "Viettel SIM bij aankomst Hanoi airport. 30 dagen, unlimited data, ~10-15 EUR. Of Airalo eSIM vooraf."
  },
  {
    title: "Budget",
    body: "~40-70 EUR per dag all-in. Vlucht NL-VN retour ~700-900 EUR in oktober."
  },
  {
    title: "Surf gear",
    body: "Geen board nodig, hire-scene is goed. Wel: shorts, reef-safe zonnebrand, rashguard."
  },
  {
    title: "Packing",
    body: "1 backpack (40-50L) is genoeg. Quick-dry, 1 lange broek (tempels), regenjas, powerbank."
  },
  {
    title: "Weer okt",
    body: "Hanoi 22-28°C droog. Da Nang 24-30°C surf-condities top. HCMC 25-32°C, einde regenseizoen."
  },
  {
    title: "Apps",
    body: "Grab, Maps offline, XE Currency, Windy/Surfline, Google Translate (camera-mode)."
  }
];
