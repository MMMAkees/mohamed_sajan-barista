export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  tagline: string;
  responsibilities: string[];
  skillsUsed: string[];
}

export interface SkillCategory {
  name: string;
  iconName: string;
  percentage: number;
  description: string;
}

export interface SignatureBrew {
  id: string;
  name: string;
  category: 'Espresso' | 'Milk Coffee' | 'Manual Brew' | 'Cold Brew';
  grindSize: string;
  ratio: string;
  temp: string;
  tastingNotes: string[];
  description: string;
  latteArtPattern?: string;
}

export const BARISTA_PROFILE = {
  name: "Abdul Rahman Mohammed Sajan",
  shortName: "Sajan",
  title: "Specialty Coffee Barista",
  tagline: "Precision Extraction • Velvety Microfoam • Artisanal Hospitality",
  location: "Doha, Qatar",
  relocation: "Willing to relocate globally & work flexible shifts (weekends/holidays)",
  phone: "+974 6647 6221",
  email: "sajanmohammed777@gmail.com",
  instagramHandle: "sajanBarista",
  instagramUrl: "https://instagram.com/sajanBarista",
  imagePath: "/sajan.png",
  summary: `Dedicated and detail-oriented Specialty Coffee Barista with extensive progressive experience across premier specialty cafes in Sri Lanka and Qatar. Highly skilled in espresso extraction & calibration, microfoam milk texturing, latte art, and manual brew precision (V60, French Press). Recognized by upscale clientele and management for warm hospitality, product knowledge, speed, and flawless hygiene (HACCP) standards in high-footfall environments.`,
  stats: [
    { value: "2+", label: "Years Experience" },
    { value: "10,000+", label: "Espresso Shots Calibrated" },
    { value: "2", label: "Countries (Qatar & Sri Lanka)" },
    { value: "100%", label: "HACCP & Hygiene Rating" },
  ],
  languages: [
    { name: "Tamil", level: "Native Speaker", percent: 100 },
    { name: "English", level: "Fluent Professional", percent: 95 },
    { name: "Sinhala", level: "Conversational", percent: 75 },
  ],
};

export const WORK_EXPERIENCES: ExperienceItem[] = [
  {
    id: "f-mart",
    role: "Barista",
    company: "F-Mart Boutique Supermarket",
    location: "Pearl-Qatar, Porto Arabia, Doha, Qatar",
    period: "Jan 2026 – Present",
    current: true,
    tagline: "Upscale specialty coffee counter at Pearl-Qatar catering to high-end international clientele.",
    responsibilities: [
      "Prepare and serve a full range of hot and cold espresso-based beverages to a diverse, upscale clientele at a busy in-store coffee counter.",
      "Maintain consistent drink quality and presentation while managing high customer footfall during peak retail hours.",
      "Operate, calibrate, and daily deep-clean commercial espresso machines, grinders, and brewing equipment in line with food safety standards.",
      "Handle point-of-sale (POS) transactions accurately, including cash, card, and mobile payments.",
      "Monitor stock levels of specialty coffee beans, milk varieties, and consumables, coordinating timely reordering.",
      "Build strong rapport with regular customers, resulting in high repeat business and glowing customer feedback.",
      "Trusted to independently manage closing shifts — end-of-day cash reconciliation, equipment shutdown, sanitation, and securing premises."
    ],
    skillsUsed: ["Espresso Calibration", "Vectored Latte Art", "High Footfall Counter", "HACCP Compliance", "POS Cash Reconciliation", "Inventory Control"]
  },
  {
    id: "grind",
    role: "Barista",
    company: "Grind",
    location: "Colombo, Sri Lanka",
    period: "Feb 2024 – Nov 2025",
    current: false,
    tagline: "Renowned neighbourhood specialty coffee shop praised for serving 'the best coffee in the city'.",
    responsibilities: [
      "Prepared a wide variety of espresso-based and filter coffee beverages, consistently receiving customer reviews citing it as 'the best coffee' in Colombo.",
      "Delivered warm, efficient table and counter hospitality in a high-energy neighbourhood coffee bar.",
      "Maintained immaculate cleanliness and organization of the bar counter, guest seating area, and brewing apparatus throughout shifts.",
      "Managed daily cash handling and point-of-sale operations with an exemplary record of accuracy.",
      "Regularly entrusted with closing shift duties, including register close-out, deep-cleaning equipment, and locking up premises.",
      "Built foundational specialty barista skills in espresso dial-in, milk texturing, and customer engagement over nearly two years."
    ],
    skillsUsed: ["Espresso Dial-In", "Microfoam Texturing", "Filter Coffee", "Register Close-out", "Customer Engagement", "Equipment Sanitization"]
  }
];

export const BARISTA_SKILLS: SkillCategory[] = [
  {
    name: "Espresso Extraction & Calibration",
    iconName: "Flame",
    percentage: 98,
    description: "Precision dial-in of grind size, dose weight (18g-20g), extraction time (25-30s), and pressure profiling for optimal taste notes."
  },
  {
    name: "Milk Steaming & Latte Art",
    iconName: "Feather",
    percentage: 95,
    description: "Creating silky, velvety microfoam at 60-65°C and pouring crisp Rosetta, Layered Tulip, Swan, and Heart motifs."
  },
  {
    name: "Manual Brew Methods (V60 / French Press)",
    iconName: "Coffee",
    percentage: 92,
    description: "Mastery of water-to-coffee ratios, bloom timing, pour speeds, and temperature control to accentuate single-origin flavor profiles."
  },
  {
    name: "Customer Service & Hospitality",
    iconName: "HeartHandshake",
    percentage: 98,
    description: "Welcoming multicultural guests with genuine warmth, rapid order turnaround, and customized beverage recommendations."
  },
  {
    name: "Food Safety & Hygiene (HACCP)",
    iconName: "ShieldCheck",
    percentage: 96,
    description: "Strict adherence to international food hygiene standards, daily machine descaling, steam wand purging, and clean surface maintenance."
  },
  {
    name: "POS & Inventory Management",
    iconName: "CreditCard",
    percentage: 94,
    description: "Accurate point-of-sale register operation, cash reconciliation, stock auditing of beans, dairy, non-dairy, and cafe consumables."
  },
  {
    name: "Shift Leadership & Closing Operations",
    iconName: "Clock",
    percentage: 95,
    description: "Independent execution of opening prep, peak hour coordination, end-of-day register balancing, and store lockup."
  }
];

export const SIGNATURE_BREWS: SignatureBrew[] = [
  {
    id: "double-espresso",
    name: "Artisanal Double Espresso",
    category: "Espresso",
    grindSize: "Fine Specialty (Dial 1.8)",
    ratio: "1:2 (18.5g in -> 37g out)",
    temp: "93°C",
    tastingNotes: ["Dark Chocolate", "Roasted Hazelnut", "Citrus Zest", "Caramel Crema"],
    description: "A concentrated, balanced double shot featuring rich golden crema with intense sweetness and crisp acidity."
  },
  {
    name: "Velvet Flat White",
    id: "flat-white",
    category: "Milk Coffee",
    grindSize: "Fine Espresso",
    ratio: "1:2 Ristretto + 120ml Milk",
    temp: "62°C (Silky Microfoam)",
    latteArtPattern: "Multi-layered Tulip / Rosetta",
    tastingNotes: ["Toasted Almond", "Sweet Cream", "Cocoa Finish"],
    description: "Double ristretto folded into glossy microfoam milk, creating a seamless blend of strength and sweetness."
  },
  {
    id: "v60-pourover",
    name: "Single-Origin V60 Pour-Over",
    category: "Manual Brew",
    grindSize: "Medium-Fine Sea Salt",
    ratio: "1:15 (15g in -> 225g out)",
    temp: "92°C Filtered",
    tastingNotes: ["Floral Jasmine", "Wild Berries", "Brown Sugar", "Clean Tea-like Body"],
    description: "Precision 3-pour technique with a 45s bloom step, highlighting delicate floral and fruit aromas."
  },
  {
    id: "chilled-latte",
    name: "Iced Caramel Espresso",
    category: "Cold Brew",
    grindSize: "Fine Espresso",
    ratio: "Double Shot + Cold Milk + Ice Spheres",
    temp: "4°C Chilled",
    tastingNotes: ["Smooth Vanilla", "Roasted Caramel", "Creamy Cocoa"],
    description: "Refreshing cold specialty drink served over crystal clear slow-melt ice for an ultra-smooth finish."
  }
];

export const LATTE_ART_GALLERY = [
  {
    title: "Crisp 5-Tier Rosetta",
    category: "Latte Art",
    description: "High contrast microfoam pour showcasing symmetrical leaf patterns and defined base ring.",
    accentColor: "from-amber-700 to-amber-900"
  },
  {
    title: "Layered 4-Stack Tulip",
    category: "Latte Art",
    description: "Bold push pours forming clean layered hearts with high glossy sheen.",
    accentColor: "from-orange-800 to-amber-700"
  },
  {
    title: "Majestic Swan Motif",
    category: "Latte Art",
    description: "Advanced free-pour swan silhouette with flowing wing feathers and delicate head definition.",
    accentColor: "from-yellow-700 to-amber-800"
  },
  {
    title: "Precision V60 Bloom",
    category: "Brew Technique",
    description: "45-second bloom stage releasing trapped CO2 for floral single-origin beans.",
    accentColor: "from-amber-600 to-amber-950"
  }
];
