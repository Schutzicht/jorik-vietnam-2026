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
  intent: "Solo, langzaam, ergens echt landen. Werk, surf, mensen.",
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
    tagline: "Landen. Pho. Koffie. Old Quarter.",
    vibe: "Chaotisch, oud, vol scooters. Zachte landing voor je naar het strand zakt.",
    highlights: ["Old Quarter wandelen", "Egg coffee proberen", "Ninh Binh daytrip"],
    stay: {
      title: "Slapen",
      items: [
        "Old Quarter (centraal, lawaaiig)",
        "Hoan Kiem zuid (rustiger)",
        "~30-45 EUR per nacht"
      ]
    },
    cowork: {
      title: "Werken",
      items: ["Cong Caphe, The Note Coffee (cafes)", "Toong Coworking voor een serieuze dag", "Focus deze dagen op jetlag, niet op werk"]
    },
    food: {
      title: "Eten",
      items: [
        "Pho Gia Truyen (pho bo)",
        "Bun Cha Huong Lien",
        "Banh mi 25",
        "Egg coffee bij Giang Cafe"
      ]
    },
    people: {
      title: "Mensen",
      items: ["Old Quarter hostels (pub crawls)", "Bia Hoi Corner / Ta Hien", "Couchsurfing Hangouts"]
    },
    todo: {
      title: "Doen",
      items: ["Hoan Kiem Lake (ochtend)", "Train Street", "Temple of Literature", "Ninh Binh daytrip (Trang An)"]
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
    tagline: "Homebase. Surf, co-work, ritme.",
    vibe: "Nomad-hoofdstad van Vietnam. Strand, co-working, betaalbare appartementen. Hier ga ik echt landen.",
    highlights: ["My Khe surf-routine", "Co-working bij The Hub", "Hoi An weekendjes", "Hue daytrip"],
    stay: {
      title: "Slapen",
      items: ["An Thuong / My An (nomad-buurt)", "Studio 350-600 EUR/maand", "Eerste 4-5 nachten via Airbnb, daarna lokaal regelen"]
    },
    cowork: {
      title: "Werken",
      items: ["The Hub Da Nang (community)", "Surf Town Co-working", "43 Factory Coffee voor cafe-werk", "Day pass ~3-5 EUR"]
    },
    surf: {
      title: "Surf",
      items: ["My Khe Beach (hoofdspot)", "Bac My An (minder druk)", "Board huren ~7 EUR/dag", "Beste sessies vroege ochtend"]
    },
    food: {
      title: "Eten",
      items: ["Mi Quang 1A (lokale spec)", "Banh Xeo Ba Duong", "Madame Lan", "An Thuong: vegan / smoothie bowls"]
    },
    people: {
      title: "Mensen",
      items: ["The Hub events / Surf Town meetups", "Facebook: 'Da Nang Digital Nomads'", "Bamboo 2, Esco Beach (after-work)"]
    },
    todo: {
      title: "Doen",
      items: ["Surf 2-3x per week", "Marble Mountains", "Son Tra scooter-rit", "Ban Co Peak voor zonsopkomst"]
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
    vibe: "Sneller, moderner, kapitalistischer. Korte afsluiter en dan vlucht naar huis.",
    highlights: ["War Remnants Museum", "Rooftop bars", "Banh mi Huynh Hoa"],
    stay: {
      title: "Slapen",
      items: ["District 1 (centraal)", "District 3 (rustiger, beter eten)", "Thao Dien als je relax wilt"]
    },
    cowork: {
      title: "Werken",
      items: ["Dreamplex (D1)", "The Workshop Coffee", "Hou laatste dagen light"]
    },
    food: {
      title: "Eten",
      items: ["Banh Mi Huynh Hoa", "Pho Hoa Pasteur", "Anan Saigon (high-end)", "Ben Thanh street food"]
    },
    people: {
      title: "Mensen",
      items: ["Saigon Outcast events", "Rooftop bars (Social Club)", "Facebook: 'Saigon Expats'"]
    },
    todo: {
      title: "Doen",
      items: ["War Remnants Museum", "Notre Dame + Post Office", "Bitexco of rooftop voor uitzicht", "Mekong daytrip (optioneel)"]
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
