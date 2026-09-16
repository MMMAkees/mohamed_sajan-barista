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

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  year: string;
  description: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  institution: string;
  studentNo?: string;
  duration?: string;
  year: string;
  badge: string;
  description: string;
  skillsCovered: string[];
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
  instagramHandle: "mohamed_sajan_07",
  instagramUrl: "https://www.instagram.com/mohamed_sajan_07/",
  imagePath: "/sajan.png",
  summary: `Dedicated and detail-oriented Barista with extensive progressive experience in specialty coffee preparation and customer focused cafe operations across Sri Lanka and Qatar. Skilled in espresso extraction, milk texturing, latte art, and manual brewing methods, with a strong record of maintaining consistent quality, speed, and hygiene standards in fast-paced, high volume environments. Recognized by customers and management for warm hospitality, product knowledge, and reliability. Adaptable multicultural professional with hands-on POS, cash handling, and inventory experience, seeking to bring precision and passion for coffee craft to a growing specialty coffee brand.`,
  stats: [
    { value: "2+", label: "Years Experience" },
    { value: "10,000+", label: "Espresso Shots Calibrated" },
    { value: "2", label: "Countries (Qatar & Sri Lanka)" },
    { value: "100%", label: "HACCP & Hygiene Rating" },
  ],
  languages: [
    { name: "Tamil", level: "Native", percent: 100 },
    { name: "English", level: "Fluent", percent: 95 },
    { name: "Sinhala", level: "Conversational", percent: 75 },
  ],
};

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: "gce-ol",
    degree: "GCE Ordinary Level (O/L)",
    institution: "Al-Misbah Maha Vidyalaya",
    location: "Kalmunai, Sri Lanka",
    year: "2020",
    description: "Completed secondary school education with foundational studies in language, science, and mathematics."
  }
];

export const CERTIFICATIONS_LIST: CertificationItem[] = [
  {
    id: "barista-cert",
    title: "Basic Certificate for Barista",
    institution: "Colombo Bartender & Barista School (Pvt.)",
    year: "2024",
    badge: "Barista Skills",
    description: "Comprehensive professional training in barista skills, covering espresso extraction, milk texturing, coffee grinder calibration, manual brewing techniques, and customer service excellence.",
    skillsCovered: ["Espresso Calibration", "Milk Texturing", "Coffee Science", "Manual Brews", "Counter Management"]
  },
  {
    id: "haccp-cert",
    title: "HACCP / ISO 22000 Based Food Safety Certificate",
    institution: "Colombo Bartender & Barista School (Pvt.) Ltd.",
    year: "2024",
    badge: "Food Safety & Hygiene",
    description: "Intensive HACCP & ISO 22000 food safety training programme and assessment. Certified in food hygiene standards, cross-contamination prevention, equipment sanitization, and food safety risk management.",
    skillsCovered: ["HACCP Compliance", "ISO 22000 Standards", "Hygiene & Sanitation", "Cross-Contamination Prevention", "Equipment Descaling"]
  }
];

export const WORK_EXPERIENCES: ExperienceItem[] = [
  {
    id: "f-mart",
    role: "Barista",
    company: "Fahrenheit Cafe (F-Mart Boutique Supermarket)",
    location: "Pearl-Qatar, Porto Arabia, Doha, Qatar",
    period: "Jan 2026 – Present",
    current: true,
    tagline: "Upscale specialty coffee counter at Pearl-Qatar catering to high-end international clientele.",
    responsibilities: [
      "Prepare and serve a full range of hot and cold espresso-based beverages to a diverse, upscale clientele at a busy in-store coffee counter.",
      "Maintain consistent drink quality and presentation while managing high customer footfall during peak retail hours.",
      "Operate and clean espresso machines, grinders, and brewing equipment daily in line with food safety standards.",
      "Handle point-of-sale transactions accurately, including cash, card, and mobile payments.",
      "Monitor stock levels of coffee beans, milk, and consumables, coordinating timely reordering with supervisors.",
      "Build rapport with regular customers, contributing to strong repeat business and positive customer feedback.",
      "Trusted to independently handle closing shifts end-of-day cash reconciliation, equipment shutdown/cleaning, and securing the store."
    ],
    skillsUsed: ["Espresso Calibration", "Vectored Latte Art", "High Footfall Counter", "HACCP Compliance", "POS Cash Reconciliation", "Inventory Control"]
  },
  {
    id: "grind",
    role: "Barista",
    company: "Grind Cafe",
    location: "Colombo, Sri Lanka",
    period: "Feb 2024 – Nov 2025",
    current: false,
    tagline: "Renowned neighbourhood specialty coffee shop praised for serving 'the best coffee in the city'.",
    responsibilities: [
      "Prepared a wide variety of espresso-based and filter coffee beverages, consistently earning praise from customers, including reviews citing it as \"the best coffee\" in the city.",
      "Delivered friendly, efficient table and counter service in a fast-paced neighbourhood coffee shop.",
      "Maintained cleanliness and organisation of the coffee bar, seating area, and equipment throughout each shift.",
      "Managed daily cash handling and point-of-sale operations with a strong record of accuracy.",
      "Regularly entrusted with closing shift duties, including register close-out, deep-cleaning equipment, and locking up the premises.",
      "Built foundational barista skills in espresso extraction, milk texturing, and customer engagement over nearly two years, laying the groundwork for further specialty coffee roles abroad."
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

export const ACTION_PHOTOS = [
  {
    id: "fmart-apron-selfie",
    title: "Barista Duty at F-Mart Boutique",
    category: "Barista Action",
    location: "F-Mart Boutique, Pearl-Qatar",
    description: "Sajan in his official F-Mart Boutique apron enjoying a freshly extracted specialty black coffee behind the bar counter.",
    imagePath: "/images/gallery/sajan-fmart-apron.jpg",
    accentColor: "from-amber-800 to-amber-950"
  },
  {
    id: "tulip-latte-art-main",
    title: "Precision Tulip Microfoam Pour",
    category: "Latte Art",
    location: "F-Mart Boutique, Pearl-Qatar",
    description: "Multi-tiered layered tulip latte art featuring glossy 62°C microfoam poured into a rustic ceramic cup on black marble.",
    imagePath: "/images/gallery/sajan-tulip-latte-art.jpg",
    accentColor: "from-amber-700 to-amber-900"
  },
  {
    id: "v60-counter-view",
    title: "Specialty Black Coffee Bar Service",
    category: "Manual Brew",
    location: "F-Mart Boutique, Pearl-Qatar",
    description: "Single-origin filter brew served at the marble counter with the ambient Pearl-Qatar night cafe backdrop.",
    imagePath: "/images/gallery/sajan-v60-counter.jpg",
    accentColor: "from-amber-900 to-stone-900"
  },
  {
    id: "hot-chocolate-marshmallow",
    title: "Gourmet Hot Chocolate & Marshmallows",
    category: "Signature Beverage",
    location: "F-Mart Boutique, Pearl-Qatar",
    description: "Artisanal hot chocolate topped with fluffy marshmallows, chocolate drizzle, and cocoa nibs served on a wooden board.",
    imagePath: "/images/gallery/sajan-hot-chocolate-marshmallow.jpg",
    accentColor: "from-amber-800 to-amber-950"
  },
  {
    id: "tulip-latte-art-closeup",
    title: "Glossy Microfoam Symmetry",
    category: "Latte Art Detail",
    location: "F-Mart Boutique, Pearl-Qatar",
    description: "High contrast close-up view highlighting delicate contrast, base definition, and velvety crema sheen.",
    imagePath: "/images/gallery/sajan-tulip-latte-art-closeup.jpg",
    accentColor: "from-orange-800 to-amber-700"
  },
  {
    id: "wa-0143",
    title: "Specialty Espresso Dial-in",
    category: "Barista Action",
    location: "F-Mart Boutique, Pearl-Qatar",
    description: "Live espresso extraction and grind calibration behind the counter at Pearl-Qatar.",
    imagePath: "/images/gallery/IMG-20260916-WA0143.jpg",
    accentColor: "from-amber-800 to-amber-950"
  },
  {
    id: "wa-0204",
    title: "Microfoam Latte Art Creation",
    category: "Latte Art",
    location: "F-Mart Boutique, Pearl-Qatar",
    description: "Free-pour latte art presentation in a specialty coffee cup.",
    imagePath: "/images/gallery/IMG-20260916-WA0204.jpg",
    accentColor: "from-amber-700 to-amber-900"
  },
  {
    id: "wa-0205",
    title: "Filter Pour-Over Precision",
    category: "Manual Brew",
    location: "F-Mart Boutique, Pearl-Qatar",
    description: "Single-origin pour-over brewing technique showcasing bloom timing.",
    imagePath: "/images/gallery/IMG-20260916-WA0205.jpg",
    accentColor: "from-amber-900 to-stone-900"
  },
  {
    id: "wa-0206",
    title: "Cold Specialty Coffee Brew",
    category: "Signature Beverage",
    location: "F-Mart Boutique, Pearl-Qatar",
    description: "Chilled specialty espresso beverage served over slow-melt ice.",
    imagePath: "/images/gallery/IMG-20260916-WA0206.jpg",
    accentColor: "from-amber-800 to-amber-950"
  },
  {
    id: "wa-0207",
    title: "Espresso Bar Workstation",
    category: "Cafe Operations",
    location: "F-Mart Boutique, Pearl-Qatar",
    description: "Commercial espresso machine calibration and clean workstation setup.",
    imagePath: "/images/gallery/IMG-20260916-WA0207.jpg",
    accentColor: "from-stone-700 to-amber-900"
  },
  {
    id: "wa-0208",
    title: "Velvety Cappuccino Pour",
    category: "Latte Art",
    location: "F-Mart Boutique, Pearl-Qatar",
    description: "Silky 62°C milk texturing with crisp heart motif pour.",
    imagePath: "/images/gallery/IMG-20260916-WA0208.jpg",
    accentColor: "from-orange-800 to-amber-700"
  },
  {
    id: "wa-0210",
    title: "Layered Iced Specialty Drink",
    category: "Signature Beverage",
    location: "F-Mart Boutique, Pearl-Qatar",
    description: "Multi-layered cold brew specialty drink with distinct visual gradient.",
    imagePath: "/images/gallery/IMG-20260916-WA0210.jpg",
    accentColor: "from-amber-800 to-amber-950"
  },
  {
    id: "wa-0211",
    title: "Commercial Steam Wand Microfoam",
    category: "Barista Action",
    location: "F-Mart Boutique, Pearl-Qatar",
    description: "Steam wand microfoam texturing technique for optimal velvety mouthfeel.",
    imagePath: "/images/gallery/IMG-20260916-WA0211.jpg",
    accentColor: "from-amber-600 to-amber-900"
  },
  {
    id: "wa-0212",
    title: "Multi-Stack Tulip Pour",
    category: "Latte Art",
    location: "F-Mart Boutique, Pearl-Qatar",
    description: "High-contrast multi-layer tulip motif poured in ceramic cup.",
    imagePath: "/images/gallery/IMG-20260916-WA0212.jpg",
    accentColor: "from-amber-700 to-amber-900"
  },
  {
    id: "wa-0213",
    title: "Artisanal Hot Chocolate",
    category: "Signature Beverage",
    location: "F-Mart Boutique, Pearl-Qatar",
    description: "Specialty hot chocolate with chocolate drizzle and microfoam top.",
    imagePath: "/images/gallery/IMG-20260916-WA0213.jpg",
    accentColor: "from-amber-800 to-amber-950"
  },
  {
    id: "wa-0214",
    title: "V60 Drip Extraction",
    category: "Manual Brew",
    location: "F-Mart Boutique, Pearl-Qatar",
    description: "V60 manual drip brewing accentuating single-origin flavor notes.",
    imagePath: "/images/gallery/IMG-20260916-WA0214.jpg",
    accentColor: "from-amber-900 to-stone-900"
  },
  {
    id: "wa-0216",
    title: "Barista Hospitality Service",
    category: "Hospitality",
    location: "F-Mart Boutique, Pearl-Qatar",
    description: "Counter service and guest engagement at F-Mart Boutique Supermarket.",
    imagePath: "/images/gallery/IMG-20260916-WA0216.jpg",
    accentColor: "from-amber-600 to-amber-900"
  },
  {
    id: "wa-0217",
    title: "Signature Mocktail Craft",
    category: "Mixology",
    location: "F-Mart Boutique, Pearl-Qatar",
    description: "Artisanal espresso & fruit cold brew mocktail preparation.",
    imagePath: "/images/gallery/IMG-20260916-WA0217.jpg",
    accentColor: "from-orange-700 to-red-900"
  },
  {
    id: "wa-0218",
    title: "Rosetta Pattern Free-Pour",
    category: "Latte Art",
    location: "F-Mart Boutique, Pearl-Qatar",
    description: "Flowing 5-tier rosetta leaf latte art with high glossy sheen.",
    imagePath: "/images/gallery/IMG-20260916-WA0218.jpg",
    accentColor: "from-amber-700 to-amber-900"
  },
  {
    id: "wa-0219",
    title: "Peak Footfall Counter Speed",
    category: "Cafe Operations",
    location: "F-Mart Boutique, Pearl-Qatar",
    description: "Rapid beverage turnaround during peak retail hours at Pearl-Qatar.",
    imagePath: "/images/gallery/IMG-20260916-WA0219.jpg",
    accentColor: "from-stone-700 to-amber-900"
  },
  {
    id: "wa-0220",
    title: "Swan Motif Free-Pour",
    category: "Latte Art",
    location: "F-Mart Boutique, Pearl-Qatar",
    description: "Advanced free-pour swan silhouette with delicate neck and wing detail.",
    imagePath: "/images/gallery/IMG-20260916-WA0220.jpg",
    accentColor: "from-yellow-700 to-amber-800"
  },
  {
    id: "wa-0221",
    title: "Double Shot Espresso Extraction",
    category: "Espresso",
    location: "F-Mart Boutique, Pearl-Qatar",
    description: "Rich golden crema extraction from specialty single-origin roast.",
    imagePath: "/images/gallery/IMG-20260916-WA0221.jpg",
    accentColor: "from-amber-800 to-amber-950"
  },
  {
    id: "wa-0222",
    title: "Chilled Caramel Espresso",
    category: "Signature Beverage",
    location: "F-Mart Boutique, Pearl-Qatar",
    description: "Handcrafted chilled caramel espresso beverage with velvety foam layer.",
    imagePath: "/images/gallery/IMG-20260916-WA0222.jpg",
    accentColor: "from-amber-700 to-amber-900"
  },
  {
    id: "wa-0223",
    title: "Equipment Descaling & Hygiene",
    category: "HACCP Hygiene",
    location: "F-Mart Boutique, Pearl-Qatar",
    description: "Daily machine sanitization, portafilter cleaning, and HACCP compliance.",
    imagePath: "/images/gallery/IMG-20260916-WA0223.jpg",
    accentColor: "from-stone-700 to-amber-900"
  },
  {
    id: "wa-0224",
    title: "Artisanal Coffee Presentation",
    category: "Hospitality",
    location: "F-Mart Boutique, Pearl-Qatar",
    description: "Final drink presentation served on wooden tray for upscale patrons.",
    imagePath: "/images/gallery/IMG-20260916-WA0224.jpg",
    accentColor: "from-amber-600 to-amber-900"
  }
];

export const LATTE_ART_GALLERY = [
  {
    title: "Precision Tulip Pour",
    category: "Latte Art",
    description: "Multi-layered tulip pour with crisp contrast and silky microfoam in a ceramic cup at Pearl-Qatar.",
    imagePath: "/images/gallery/sajan-tulip-latte-art.jpg",
    accentColor: "from-amber-700 to-amber-900"
  },
  {
    title: "Gourmet Marshmallow Hot Chocolate",
    category: "Signature Drink",
    description: "Rich chocolate base topped with marshmallows & dark chocolate drizzle on a wooden serving board.",
    imagePath: "/images/gallery/sajan-hot-chocolate-marshmallow.jpg",
    accentColor: "from-amber-800 to-amber-950"
  },
  {
    title: "Counter Filter Coffee Experience",
    category: "Manual Brew",
    description: "Freshly brewed specialty filter coffee enjoying ambient night views at F-Mart Boutique Supermarket.",
    imagePath: "/images/gallery/sajan-v60-counter.jpg",
    accentColor: "from-amber-900 to-stone-900"
  },
  {
    title: "Barista Duty Selfie",
    category: "Barista at Work",
    description: "Sajan in his official F-Mart apron savoring freshly extracted specialty coffee.",
    imagePath: "/images/gallery/sajan-fmart-apron.jpg",
    accentColor: "from-amber-800 to-amber-950"
  },
  {
    title: "Layered Microfoam Sheen",
    category: "Latte Art Detail",
    description: "Close-up perspective of smooth symmetrical tulip layers and crema texture.",
    imagePath: "/images/gallery/sajan-tulip-latte-art-closeup.jpg",
    accentColor: "from-orange-800 to-amber-700"
  },
  {
    title: "Multi-Tiered Tulip Pattern",
    category: "Latte Art",
    description: "Free-pour multi-layered tulip motif in ceramic cup.",
    imagePath: "/images/gallery/IMG-20260916-WA0204.jpg",
    accentColor: "from-amber-700 to-amber-900"
  },
  {
    title: "V60 Bloom & Drip",
    category: "Manual Brew",
    description: "Precision V60 manual pour-over filter coffee extraction.",
    imagePath: "/images/gallery/IMG-20260916-WA0205.jpg",
    accentColor: "from-amber-900 to-stone-900"
  },
  {
    title: "Iced Cold Brew Creation",
    category: "Signature Drink",
    description: "Chilled cold brew served over clear ice spheres.",
    imagePath: "/images/gallery/IMG-20260916-WA0206.jpg",
    accentColor: "from-amber-800 to-amber-950"
  },
  {
    title: "Velvety Cappuccino Pour",
    category: "Latte Art",
    description: "Silky 62°C microfoam with defined crema edge.",
    imagePath: "/images/gallery/IMG-20260916-WA0208.jpg",
    accentColor: "from-orange-800 to-amber-700"
  },
  {
    title: "Layered Chilled Mocktail",
    category: "Mixology",
    description: "Multi-layered cold espresso mocktail with citrus notes.",
    imagePath: "/images/gallery/IMG-20260916-WA0210.jpg",
    accentColor: "from-orange-700 to-red-900"
  },
  {
    title: "4-Stack High-Contrast Tulip",
    category: "Latte Art",
    description: "Bold push pours forming clean layered hearts.",
    imagePath: "/images/gallery/IMG-20260916-WA0212.jpg",
    accentColor: "from-amber-700 to-amber-900"
  },
  {
    title: "Decadent Hot Cocoa",
    category: "Signature Drink",
    description: "Specialty hot cocoa topped with whipped foam & drizzle.",
    imagePath: "/images/gallery/IMG-20260916-WA0213.jpg",
    accentColor: "from-amber-800 to-amber-950"
  },
  {
    title: "Filter Pour-Over Bloom",
    category: "Manual Brew",
    description: "45-second bloom timing for maximum fruit note extraction.",
    imagePath: "/images/gallery/IMG-20260916-WA0214.jpg",
    accentColor: "from-amber-900 to-stone-900"
  },
  {
    title: "Flowing Rosetta Motif",
    category: "Latte Art",
    description: "Symmetrical leaf rosetta pour with glossy sheen.",
    imagePath: "/images/gallery/IMG-20260916-WA0218.jpg",
    accentColor: "from-amber-700 to-amber-900"
  },
  {
    title: "Swan Motif Free-Pour",
    category: "Latte Art",
    description: "Advanced free-pour swan silhouette with delicate neck and wing detail.",
    imagePath: "/images/gallery/IMG-20260916-WA0220.jpg",
    accentColor: "from-yellow-700 to-amber-800"
  },
  {
    title: "Single-Origin Double Shot",
    category: "Espresso",
    description: "Calibrated 18.5g extraction with thick hazelnut crema.",
    imagePath: "/images/gallery/IMG-20260916-WA0221.jpg",
    accentColor: "from-amber-800 to-amber-950"
  },
  {
    title: "Chilled Iced Latte",
    category: "Signature Drink",
    description: "Refreshing cold specialty latte served over ice.",
    imagePath: "/images/gallery/IMG-20260916-WA0222.jpg",
    accentColor: "from-amber-700 to-amber-900"
  }
];


export interface BaristaVideoItem {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  videoPath: string;
  poster: string;
}

export const BARISTA_VIDEOS: BaristaVideoItem[] = [
  {
    id: "bar-craft-action-1",
    title: "Live Specialty Beverage Craft & Shaker Aeration",
    category: "Barista Technique",
    location: "F-Mart Boutique, Pearl-Qatar",
    description: "Sajan live in action executing precision shaker aeration, beverage layering, and artisanal bar service behind the counter.",
    videoPath: "/video/VID-20260916-WA0172.mp4",
    poster: "/images/gallery/sajan-shaking-beverage.png"
  },
  {
    id: "bar-craft-action-2",
    title: "Espresso Bar Operations & Microfoam Texturing",
    category: "Live Bar Operations",
    location: "F-Mart Boutique, Pearl-Qatar",
    description: "Live demonstration of espresso extraction, steam wand microfoam texturing, and free-hand pouring technique.",
    videoPath: "/video/VID-20260916-WA0186.mp4",
    poster: "/images/gallery/sajan-tulip-latte-art.jpg"
  }
];


