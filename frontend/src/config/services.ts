// ─────────────────────────────────────────────────────────────────────────────
// Service Catalog & Master Configuration
// ─────────────────────────────────────────────────────────────────────────────

export interface ServiceProblem {
  id: string;
  label: string;
  description?: string;
  price?: number;
}

export interface ServiceConfig {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  icon: string; // Lucide icon name
  emoji: string;
  image: string; // HD professional photography URL
  badge?: string;
  description: string;
  shortDescription: string;
  category: "plumbing" | "electrical" | "hvac" | "appliance" | "electronics" | "general";
  color: string;
  gradient: string;
  startingPrice: number; // INR
  problems: ServiceProblem[];
  highlights: string[];
  process: string[];
  availableServices: { name: string; price: number; duration: string }[];
}

export const SERVICES: ServiceConfig[] = [
  {
    id: "plumbing",
    slug: "plumbing",
    name: "Plumbing Services",
    shortName: "Plumbing",
    icon: "Wrench",
    emoji: "🚰",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=85",
    badge: "28-Min Fast Response",
    description:
      "Expert plumbing solutions for all your water supply, drainage, fixture fittings, and pipe leakages. Delivered by background-checked master plumbers.",
    shortDescription: "Leak repairs, pipe fitting, bathroom installations & emergency drain clearing.",
    category: "plumbing",
    color: "text-blue-600",
    gradient: "from-blue-600 to-cyan-500",
    startingPrice: 199,
    problems: [
      { id: "pipe-leak", label: "Pipe Leakage & Seepage", price: 299 },
      { id: "leaky-tap", label: "Tap & Faucet Repair / Replacement", price: 199 },
      { id: "bathroom-plumbing", label: "Complete Bathroom Plumbing", price: 499 },
      { id: "kitchen-plumbing", label: "Kitchen Sink & RO Pipeline", price: 349 },
      { id: "drain-cleaning", label: "Blocked Drain & Sewer Line Cleaning", price: 399 },
      { id: "water-tank", label: "Water Tank Cleaning & Overflow Repair", price: 599 },
      { id: "water-pressure", label: "Low Water Pressure / Air Lock", price: 299 },
      { id: "toilet-flush", label: "Toilet Flush Tank / Jet Spray Repair", price: 249 },
      { id: "emergency-plumbing", label: "Emergency Burst Pipe Assistance", price: 449 },
    ],
    highlights: ["Same-day 28-min dispatch", "Zero hidden charges", "30-day unconditional warranty", "All genuine spare parts"],
    process: ["Rapid On-site Inspection", "Transparent Quote Approval", "Precision Tool Execution", "Pressure & Flow Testing", "Site Clean-up & Digital Invoice"],
    availableServices: [
      { name: "Faucet / Tap Repair & Replacement", price: 199, duration: "30 mins" },
      { name: "Concealed Pipe Leak Detection & Fix", price: 399, duration: "60 mins" },
      { name: "Toilet Flush Valve / Cistern Repair", price: 299, duration: "45 mins" },
      { name: "Bathroom Fitting (Shower, Diverter)", price: 499, duration: "60 mins" },
      { name: "Complete Drain Jet Clearance", price: 549, duration: "90 mins" },
    ],
  },
  {
    id: "ac-service",
    slug: "ac-service",
    name: "AC Repair & Installation",
    shortName: "AC Service",
    icon: "Wind",
    emoji: "❄️",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=85",
    badge: "High Pressure Jet Wash",
    description:
      "Complete AC care — deep foam jet wash, refrigerant gas refilling, PCB circuit repairs, cooling optimization, and precision installation for all brands.",
    shortDescription: "Split & window AC repair, deep jet servicing, gas refill & rapid installation.",
    category: "hvac",
    color: "text-cyan-600",
    gradient: "from-cyan-500 to-sky-600",
    startingPrice: 299,
    problems: [
      { id: "not-cooling", label: "AC Not Cooling / Low Airflow", price: 399 },
      { id: "water-leakage", label: "Indoor Unit Water Dripping", price: 299 },
      { id: "strange-noise", label: "Vibration or Abnormal Compressor Noise", price: 349 },
      { id: "gas-refill", label: "Refrigerant Gas Leakage & Refill", price: 1499 },
      { id: "installation", label: "New Split / Window AC Installation", price: 999 },
      { id: "uninstallation", label: "AC Uninstallation & Dismantling", price: 499 },
      { id: "annual-service", label: "Deep Foam Jet Servicing", price: 499 },
      { id: "pcb-issue", label: "PCB Board / Inverter Error Code", price: 599 },
    ],
    highlights: ["All top brands covered (Daikin, Voltas, LG)", "100% pure certified gas", "90-day service warranty", "Drop-cloth protective setup"],
    process: ["Temperature & Amp Diagnosis", "Protective Shield Installation", "High-Pressure Jet Clean", "Refrigerant Pressure Check", "9-Point Health Report"],
    availableServices: [
      { name: "Split AC Deep Foam Jet Service", price: 499, duration: "45 mins" },
      { name: "Window AC Complete Overhaul", price: 399, duration: "45 mins" },
      { name: "Full Refrigerant (R32 / R410A) Top-Up", price: 1499, duration: "60 mins" },
      { name: "Indoor Unit Water Leak Fix", price: 299, duration: "30 mins" },
      { name: "Split AC Installation with Bracket", price: 999, duration: "90 mins" },
    ],
  },
  {
    id: "electrical",
    slug: "electrical",
    name: "Electrical Work",
    shortName: "Electrical",
    icon: "Zap",
    emoji: "⚡",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=85",
    badge: "Certified Electricians",
    description:
      "Licensed and insured electrical technicians for short circuits, circuit breaker trips, modern switchboard upgrades, chandelier hanging, and rewiring.",
    shortDescription: "Short circuits, MCB trip fixes, modern lighting, switchboards & safety audits.",
    category: "electrical",
    color: "text-amber-600",
    gradient: "from-amber-500 to-orange-600",
    startingPrice: 149,
    problems: [
      { id: "power-trip", label: "MCB Tripping & Short Circuits", price: 299 },
      { id: "switchboard", label: "Modular Switchboard Repair / Install", price: 199 },
      { id: "fan-install", label: "Ceiling & Exhaust Fan Installation", price: 179 },
      { id: "light-install", label: "Chandelier, Spotlight & LED Fitting", price: 249 },
      { id: "inverter-battery", label: "Home Inverter & Battery Setup", price: 499 },
      { id: "earthing-check", label: "Grounding / Earthing Safety Audit", price: 399 },
      { id: "rewiring", label: "Internal Conduit Rewiring", price: 699 },
      { id: "geyser-wiring", label: "High-Amp Water Heater Line Installation", price: 349 },
    ],
    highlights: ["Government licensed technicians", "ISI-certified wires & parts", "Fire safety protocol", "Zero spark guarantee"],
    process: ["Digital Multimeter Safety Check", "Circuit Load Analysis", "Safe Precision Repair", "Polarity & Earthing Verification", "Final Voltage Inspection"],
    availableServices: [
      { name: "MCB / Distribution Board Repair", price: 299, duration: "45 mins" },
      { name: "Ceiling Fan Repair / Installation", price: 179, duration: "30 mins" },
      { name: "Modular Switch Socket Replacement", price: 149, duration: "25 mins" },
      { name: "Complete Home Electrical Health Audit", price: 499, duration: "60 mins" },
      { name: "Inverter / UPS Installation & Wiring", price: 499, duration: "45 mins" },
    ],
  },
  {
    id: "washing-machine",
    slug: "washing-machine",
    name: "Washing Machine Repair",
    shortName: "Washing Machine",
    icon: "Settings",
    emoji: "🔧",
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1200&q=85",
    badge: "OEM Spare Parts",
    description:
      "Precision repair for front-load, top-load, and semi-automatic machines across LG, Samsung, Bosch, IFB, Whirlpool, and all premium brands.",
    shortDescription: "Front-load, top-load & semi-auto drum repairs, drain issues & error code fixes.",
    category: "appliance",
    color: "text-indigo-600",
    gradient: "from-indigo-500 to-purple-600",
    startingPrice: 299,
    problems: [
      { id: "not-spinning", label: "Drum Not Spinning / Stuck", price: 399 },
      { id: "not-draining", label: "Water Not Draining / Pump Jam", price: 349 },
      { id: "noisy-vibration", label: "Excessive Vibration & Bearing Noise", price: 499 },
      { id: "water-leak", label: "Water Leakage from Door or Bottom", price: 349 },
      { id: "error-code", label: "Error Display (dE, OE, UE, LE)", price: 299 },
      { id: "door-latch", label: "Door Lock / Rubber Gasket Damage", price: 299 },
      { id: "motor-repair", label: "Drive Motor & Belt Replacement", price: 599 },
    ],
    highlights: ["Front-load & top-load specialists", "Original OEM company parts", "6-month spare parts warranty", "On-site turnaround"],
    process: ["Diagnostic Error Analysis", "Mechanical & Drum Inspection", "Genuine Replacement", "Full High-Speed Cycle Test", "Vibration Balancing"],
    availableServices: [
      { name: "Drain Pump Cleaning & Unclogging", price: 299, duration: "40 mins" },
      { name: "Drum Bearing & Suspension Repair", price: 599, duration: "75 mins" },
      { name: "Inlet Solenoid Valve Replacement", price: 399, duration: "45 mins" },
      { name: "Electronic Control Board Diagnosis", price: 449, duration: "50 mins" },
    ],
  },
  {
    id: "refrigerator",
    slug: "refrigerator",
    name: "Refrigerator Repair",
    shortName: "Refrigerator",
    icon: "Thermometer",
    emoji: "🧊",
    image: "/images/services/refrigerator.jpg",
    badge: "1-Year Warranty",
    description:
      "Expert troubleshooting for single-door, double-door, side-by-side, and French-door refrigerators. Compressor replacement and cooling restorations.",
    shortDescription: "Cooling problems, compressor diagnosis, door gaskets & gas refilling.",
    category: "appliance",
    color: "text-teal-600",
    gradient: "from-teal-500 to-emerald-600",
    startingPrice: 349,
    problems: [
      { id: "no-cooling", label: "Freezer Working but Fridge Warm", price: 399 },
      { id: "excessive-ice", label: "Frost Buildup / Defrost Timer Issue", price: 349 },
      { id: "compressor-click", label: "Compressor Clicking but Not Starting", price: 499 },
      { id: "water-leakage", label: "Water Pooling Inside Crisper Trays", price: 299 },
      { id: "gas-recharge", label: "Gas Leakage & Refrigerant Refill", price: 1699 },
      { id: "door-gasket", label: "Loose Door Seal / Gasket Replacement", price: 349 },
      { id: "abnormal-sound", label: "Fan Motor Grinding Sound", price: 399 },
    ],
    highlights: ["Inverter compressor experts", "Double door & side-by-side support", "Genuine Danfoss/Embraco parts", "Same-day on-site repair"],
    process: ["Thermal Gun Temperature Reading", "Compressor Resistance Check", "Leak Detection with Nitrogen", "Vacuuming & Gas Charging", "Defrost Cycle Validation"],
    availableServices: [
      { name: "Thermostat & Sensor Replacement", price: 349, duration: "45 mins" },
      { name: "Defrost Heater & Bimetal Repair", price: 449, duration: "60 mins" },
      { name: "Complete Gas Charging (R600a/R134a)", price: 1699, duration: "90 mins" },
      { name: "Inverter PCB Board Repair", price: 699, duration: "60 mins" },
    ],
  },
  {
    id: "tv-repair",
    slug: "tv-repair",
    name: "TV & Electronics Repair",
    shortName: "TV Repair",
    icon: "Monitor",
    emoji: "📺",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1200&q=85",
    badge: "Clean Room Tested",
    description:
      "Smart TV, OLED, QLED, and LED television panel repairs, backlight LED replacement, motherboard micro-soldering, and wall-mounting services.",
    shortDescription: "Smart TV, 4K LED/OLED panel repair, backlight fix & HDMI/sound repairs.",
    category: "electronics",
    color: "text-purple-600",
    gradient: "from-purple-600 to-pink-600",
    startingPrice: 249,
    problems: [
      { id: "sound-no-picture", label: "Sound Present but Black Screen", price: 399 },
      { id: "backlight-fail", label: "Flickering Display / Dim Picture", price: 499 },
      { id: "no-power", label: "Standby Light Blinking / Won't Power On", price: 349 },
      { id: "hdmi-sound", label: "HDMI Ports or Optical Sound Failing", price: 299 },
      { id: "wall-mounting", label: "Heavy Duty Swivel / Flush Wall Mount", price: 399 },
      { id: "smart-os", label: "Wi-Fi Disconnecting / Boot Loop", price: 299 },
    ],
    highlights: ["Microchip motherboard repair", "Original LED backlight strips", "Safe antistatic handling", "90-day warranty on panels"],
    process: ["Power Supply Board Analysis", "T-Con & Backlight Testing", "Clean Room Level Soldering", "Color & Refresh Rate Calibration", "Wall Mount Stability Check"],
    availableServices: [
      { name: "LED Backlight Strip Replacement", price: 699, duration: "60 mins" },
      { name: "Power Supply Board Repair", price: 499, duration: "50 mins" },
      { name: "Universal / Smart TV Wall Mounting", price: 399, duration: "30 mins" },
      { name: "Motherboard Firmware Flashing", price: 349, duration: "45 mins" },
    ],
  },
  {
    id: "appliance-repair",
    slug: "appliance-repair",
    name: "General Appliance Repair",
    shortName: "Appliances",
    icon: "Tool",
    emoji: "🛠️",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85",
    badge: "All Brands Covered",
    description:
      "All-in-one residential repair for kitchen chimneys, microwaves, RO water purifiers, water geysers, and induction cooktops.",
    shortDescription: "Microwave, water purifier (RO), kitchen chimney, geysers & food processors.",
    category: "appliance",
    color: "text-orange-600",
    gradient: "from-orange-500 to-red-500",
    startingPrice: 199,
    problems: [
      { id: "microwave-heat", label: "Microwave Not Heating (Magnetron)", price: 349 },
      { id: "ro-filter", label: "RO Water Purifier Membrane & Filter", price: 399 },
      { id: "chimney-suction", label: "Kitchen Chimney Motor & Deep Degreasing", price: 499 },
      { id: "water-geyser", label: "Water Geyser Element / Thermostat", price: 349 },
      { id: "air-fryer", label: "Air Fryer / OTG Oven Heating Issue", price: 299 },
    ],
    highlights: ["Multi-brand kitchen appliance pros", "Genuine food-grade RO filters", "Same-day technician arrival", "Comprehensive testing"],
    process: ["Voltage & Component Diagnostic", "Part Integrity Validation", "Original Replacement", "Operational Heat/Flow Test", "Safety Sign-off"],
    availableServices: [
      { name: "RO Full Filter & Membrane Service", price: 499, duration: "50 mins" },
      { name: "Kitchen Chimney Baffle Deep Clean", price: 549, duration: "60 mins" },
      { name: "Microwave High-Voltage Magnetron Fix", price: 499, duration: "45 mins" },
      { name: "Water Heater Geyser Element Change", price: 399, duration: "45 mins" },
    ],
  },
  {
    id: "home-maintenance",
    slug: "home-maintenance",
    name: "Home Maintenance Services",
    shortName: "Home Maintenance",
    icon: "Home",
    emoji: "🏠",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=85",
    badge: "Skilled Handymen",
    description:
      "Precision carpentry, furniture assembly, curtain rod and mirror wall-mounting, door alignment, weatherproofing, and general home upkeep.",
    shortDescription: "Carpentry, wall drilling, curtain rods, door hinges, touch-ups & general handyman.",
    category: "general",
    color: "text-emerald-600",
    gradient: "from-emerald-500 to-teal-600",
    startingPrice: 199,
    problems: [
      { id: "carpentry-furniture", label: "Furniture Assembly & Hinge Fix", price: 299 },
      { id: "wall-drilling", label: "Precision Wall Drilling (Mirrors, TV, Art)", price: 199 },
      { id: "door-lock", label: "Door Lock & Handle Replacement", price: 249 },
      { id: "curtain-rod", label: "Curtain Rod & Blind Installation", price: 199 },
      { id: "tile-grout", label: "Tile Grouting & Silicone Sealing", price: 349 },
      { id: "sliding-door", label: "Balcony Sliding Door Roller Repair", price: 299 },
    ],
    highlights: ["Laser-level precision mounting", "Industrial heavy-duty drills", "All hardware fasteners provided", "Clean dust extraction"],
    process: ["Measurement & Level Marking", "Surface Structure Evaluation", "Precision Execution", "Load-Bearing Stress Test", "Immaculate Cleanup"],
    availableServices: [
      { name: "Curtain Rod / Blinds Installation", price: 199, duration: "30 mins" },
      { name: "Door Lock & Handle Fitting", price: 249, duration: "35 mins" },
      { name: "Mirror & Wall Art Mounting (Up to 3)", price: 299, duration: "40 mins" },
      { name: "IKEA / Modular Furniture Assembly", price: 499, duration: "75 mins" },
    ],
  },
];

export const SERVICE_MAP = Object.fromEntries(SERVICES.map((s) => [s.slug, s]));

export const APP_CONFIG = {
  name: "All Noida Plumbing AC Electrical Service",
  shortName: "ANP Flagship Services",
  tagline: "Reliable Home Services, Right When You Need Them.",
  phone: "+91 98110 00000",
  phoneDisplay: "+91 98110 00000",
  whatsapp: "919811000000",
  email: "care@allnoidaservices.com",
  address: "Sector 62, Noida, Uttar Pradesh 201309",
  serviceArea: "Noida, Greater Noida & Expressway",
  workingHours: "24/7 Rapid Emergency Response (Standard: 7:00 AM – 11:00 PM)",
  workingDays: "All 7 Days Open",
  bookingPrefix: "ANP",
  socialLinks: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    twitter: "https://twitter.com",
  },
};

export const TIME_SLOTS = [
  "08:00 AM – 10:00 AM",
  "10:00 AM – 12:00 PM",
  "12:00 PM – 02:00 PM",
  "02:00 PM – 04:00 PM",
  "04:00 PM – 06:00 PM",
  "06:00 PM – 08:00 PM",
  "08:00 PM – 10:00 PM",
];

export const PINCODE_AREAS: Record<string, string> = {
  "201301": "Noida Sector 1 to 20 (Central)",
  "201304": "Noida Sector 21 to 40 (Golf Course / Botanical)",
  "201306": "Noida Sector 41 to 60 (Logix / Wave City)",
  "201307": "Noida Sector 61 to 80 (Fortis / Sector 62 Hub)",
  "201309": "Noida Sector 81 to 110 (Expressway Gateway)",
  "201310": "Noida Sector 111 to 168 (Jaypee Wish Town / Expressway)",
  "201313": "Noida Extension / Gaur City / Greater Noida West",
  "201318": "Greater Noida (Pari Chowk / Alpha / Beta)",
  "201001": "Ghaziabad & Indirapuram",
  "110096": "Mayur Vihar & Delhi-Noida Border",
};

export const TRUST_STATS = [
  { value: "10K+", label: "Services Completed", detail: "Over 10,000 residential repairs successfully delivered" },
  { value: "5K+", label: "Happy Customers", detail: "Serving leading societies across Noida & Expressway" },
  { value: "50+", label: "Professional Technicians", detail: "Police-verified, background-checked master specialists" },
  { value: "4.9/5", label: "Customer Rating", detail: "Verified reviews across Google, Justdial and direct feedback" },
];

export const BEFORE_AFTER_ITEMS = [
  {
    id: "plumbing",
    service: "Plumbing",
    title: "High-Rise Concealed Pipe Burst & Corroded Valve",
    beforeTitle: "Severe Wall Seepage & Leaking Joint",
    afterTitle: "Laser-Welded Copper Joint & Dry Finish",
    beforeImage: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
    summary: "Fixed within 45 mins with zero unnecessary tile breaking and pressure-tested up to 8 Bar.",
  },
  {
    id: "ac-service",
    service: "AC Repair",
    title: "Choked Cooling Coil & Sludge Accumulation",
    beforeTitle: "Foul Odor & Heavy Mold Buildup",
    afterTitle: "Deep Foam Jet-Washed Pure Aluminum Coils",
    beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
    summary: "Restored cooling efficiency by 40% and reduced compressor electric draw by 2.2 Amperes.",
  },
  {
    id: "electrical",
    service: "Electrical",
    title: "Burnt Distribution Board & Tangled Wiring",
    beforeTitle: "Overheated Sparking Breaker Box",
    afterTitle: "Flame-Retardant Modular MCB Assembly",
    beforeImage: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
    summary: "Complete rewire using ISI copper lines with dedicated 32A RCCB shock-protection tripping.",
  },
  {
    id: "washing-machine",
    service: "Appliance",
    title: "Washing Machine Drum Lock & Water Drainage",
    beforeTitle: "Jammed Pump with Severe Rust & Vibration",
    afterTitle: "Brand-New OEM Direct-Drive Balance Restored",
    beforeImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80",
    summary: "Original OEM pump replacement with silent high-speed spin cycle and 6-month parts warranty.",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Vikram Malhotra",
    society: "ATS Greens Village, Sector 93A",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5,
    service: "Plumbing",
    serviceSlug: "plumbing",
    review:
      "Had a major pipe leak in my master bathroom late at night. The ANP technician arrived in just 22 minutes with full equipment. Fixed the pipe without damaging surrounding Italian marble tiles. Incredibly polite and professional.",
    date: "2 days ago",
  },
  {
    id: 2,
    name: "Pooja Singhania",
    society: "Mahagun Moderne, Sector 78",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5,
    service: "AC Repair & Installation",
    serviceSlug: "ac-service",
    review:
      "Booked the deep foam jet AC service for 3 split ACs. They used protective tarpaulin sheets and collected all dirty water cleanly. My electricity bill dropped visibly and cooling is back to showroom condition. 10/10!",
    date: "1 week ago",
  },
  {
    id: 3,
    name: "Col. Rajesh Dewan (Retd.)",
    society: "Jaypee Greens Pavilion Court, Sector 128",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5,
    service: "Electrical Work",
    serviceSlug: "electrical",
    review:
      "Top-grade electrical craftsmanship. They diagnosed an intermittent neutral wire fault that two previous electricians failed to find. Transparent pricing upfront with an official GST digital receipt.",
    date: "3 days ago",
  },
  {
    id: 4,
    name: "Ananya Deshmukh",
    society: "Prateek Edifice, Sector 107",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5,
    service: "Washing Machine Repair",
    serviceSlug: "washing-machine",
    review:
      "My Bosch front-load washer displayed an E18 drain error on a Sunday morning. Booked via WhatsApp in 30 seconds. The technician came with original spare parts and had it running within the hour. Super convenient!",
    date: "5 days ago",
  },
  {
    id: 5,
    name: "Amitabh Banerjee",
    society: "Supertech Cape Town, Sector 74",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5,
    service: "Refrigerator Repair",
    serviceSlug: "refrigerator",
    review:
      "Refrigerator stopped cooling in peak summer heat. They refilled R600a refrigerant and tested compressor amps in front of me. Saved all our frozen groceries. Truly dependable team.",
    date: "2 weeks ago",
  },
];

export const FAQS = [
  {
    question: "How quickly can a technician arrive at my doorstep?",
    answer:
      "Our rapid dispatch teams operate across local hubs in Noida and the Expressway. For emergency requests, a certified technician arrives within 28 to 45 minutes. For non-urgent bookings, you can pick any convenient 2-hour window on the same day or a future date.",
  },
  {
    question: "Do you provide emergency plumbing and electrical services?",
    answer:
      "Yes! We offer 24/7 priority emergency response for active water pipe bursts, sewer overflows, sparking circuit breakers, electrical power outages, and sudden cooling breakdowns. Simply tap 'Call Now' or 'Emergency Dispatch' for immediate routing.",
  },
  {
    question: "How much does the service cost and are there hidden charges?",
    answer:
      "We practice 100% transparent pricing. Our standard inspection fee starts at ₹149 to ₹299 (which is adjusted into the final invoice if you proceed with repair). Before starting any work, our technician provides an itemized digital estimate. You only pay what you approve.",
  },
  {
    question: "Do you provide same-day service across Noida?",
    answer:
      "Yes, over 85% of our bookings are completed on the very same day. When you book before 7:00 PM, same-day scheduling is guaranteed across all Noida sectors, Greater Noida, and the Noida-Greater Noida Expressway.",
  },
  {
    question: "Are your technicians verified and background-checked?",
    answer:
      "Every single technician is police-verified, background-checked, and carries government-issued photo ID. They undergo extensive technical screening, behavioral etiquette training, and follow strict safety protocols inside residential homes.",
  },
  {
    question: "Do you provide warranties on repairs and spare parts?",
    answer:
      "Yes! All our services include an unconditional 30-day workmanship warranty. Spare parts installed by our team come with OEM manufacturer warranties ranging from 90 days up to 1 year.",
  },
  {
    question: "Can I book a service directly through WhatsApp?",
    answer:
      "Absolutely. WhatsApp is one of our primary channels. Simply click the floating WhatsApp button anywhere on this website to open a pre-filled service request. Our dispatch team will confirm your slot within 60 seconds.",
  },
  {
    question: "What areas and societies do you serve in Noida?",
    answer:
      "We cover every sector in Noida (Sector 1 through 168), all residential societies along the Noida-Greater Noida Expressway, Greater Noida West (Noida Extension), and Pari Chowk Greater Noida.",
  },
];
