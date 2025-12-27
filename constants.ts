
import { DayPlan, PackingCategory, TripVibeData } from './types';

export const TRIP_DATA: DayPlan[] = [
  {
    id: 1,
    subtitle: "Spiritual Arrival",
    title: "The Spiritual & Sunset Arrival",
    events: [
      { time: "12:00 PM", title: "Check-in", desc: "Arrive at Azure Coast Beach Resort. Unpack and settle into your sea-view suites.", icon: "🏨" },
      { time: "01:30 PM", title: "Lunch", desc: "Traditional Konkani Pure Veg Thali featuring Solkadhi.", icon: "🍛" },
      { time: "03:30 PM", title: "Parshuram Hill", desc: "Visit the ancient temple at Parshuram Hill. Senior-friendly accessibility.", icon: "⛰️" },
      { time: "05:00 PM", title: "Palande Beach", desc: "Golden hour relaxation right outside the resort gates.", icon: "🌅" }
    ],
    game: "Classical Beach Bingo",
    note: "A peaceful start to reconnect with nature and spirit."
  },
  {
    id: 2,
    subtitle: "Dolphins & Thrills",
    title: "Ocean Wonders & Local Markets",
    events: [
      { time: "07:00 AM", title: "Dolphin Safari", desc: "Early morning boat trip from Palande Beach. Keep your cameras ready!", icon: "🐬" },
      { time: "10:00 AM", title: "Sandcastle Building", desc: "Family competition on the shore with the kids.", icon: "🏖️" },
      { time: "01:00 PM", title: "Lunch @ Shreyas", desc: "Authentic Brahmin-style Konkani meal in town.", icon: "🍽️" },
      { time: "03:00 PM", title: "Bamboo Museum", desc: "Cultural exploration and shopping for local Kokum products.", icon: "🛍️" },
      { time: "04:30 PM", title: "Murud Water Sports", desc: "Parasailing and jet skiing for the thrill-seekers.", icon: "🚤" }
    ],
    game: "Beach Scavenger Hunt",
    note: "High energy day! Remember to carry extra sunscreen and towels."
  },
  {
    id: 3,
    subtitle: "Temples & Views",
    title: "Clifftop Temples & Panoramic Vistas",
    events: [
      { time: "09:30 AM", title: "Keshavraj Mandir", desc: "Walk through lush tropical greenery to reach this hidden gem.", icon: "🚶" },
      { time: "01:00 PM", title: "Village Khanaval", desc: "Authentic rustic lunch prepared by local artisans.", icon: "🍚" },
      { time: "04:00 PM", title: "Anjarle Lighthouse", desc: "Ascend for 360-degree views of the Arabian Sea.", icon: "🚨" },
      { time: "05:00 PM", title: "Kadyawaril Ganapati", desc: "Evening Aarti at the temple on the cliff edge.", icon: "🕉️" }
    ],
    game: "Family Storytelling Circle",
    note: "Wear comfortable walking shoes for the forest trails."
  }
];

export const PACKING_LIST: PackingCategory[] = [
  {
    key: "gear",
    title: "Adventure Gear",
    icon: "🎒",
    items: ["Binoculars", "Foldable Beach Chairs", "Waterproof Phone Pouches", "Portable Speaker", "Sand Toys"]
  },
  {
    key: "pantry",
    title: "Travel Pantry",
    icon: "🍪",
    items: ["Dry Snacks (Chivda/Bhakarwadi)", "Crate of Mineral Water", "Instant Electrolytes", "Reusable Cups", "Napkins"]
  },
  {
    key: "health",
    title: "Health & Care",
    icon: "💊",
    items: ["High-SPF Sunscreen", "Mosquito Repellent", "Basic First-Aid", "Prescription Meds", "Aloe Vera Gel"]
  }
];

export const VIBE_DATA: TripVibeData[] = [
  { name: 'Spiritual', value: 25, color: '#f59e0b' },
  { name: 'Adventure', value: 30, color: '#0ea5e9' },
  { name: 'Relaxation', value: 25, color: '#10b981' },
  { name: 'Culinary', value: 20, color: '#ef4444' }
];

export const FOOD_HIGHLIGHTS = [
  { emoji: "🥥", name: "Solkadhi", desc: "Refreshing Kokum Drink" },
  { emoji: "🥟", name: "Ukadiche Modak", desc: "Steamed Sweet Dumplings" },
  { emoji: "🍛", name: "Kajuchi Bhaji", desc: "Cashew Nut Curry" },
  { emoji: "🥞", name: "Rice Ghavane", desc: "Soft Rice Crepes" }
];
