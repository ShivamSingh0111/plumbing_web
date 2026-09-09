# 🛠️ All Noida Services — Flagship Home Services Web Platform

> A modern, high-conversion flagship web platform for premium home services — specializing in **Plumbing, AC Repair, Electrical, Washing Machine, Refrigerator, TV, and Home Maintenance** across Noida & Greater Noida.

Built with **Next.js 16 (App Router & Turbopack)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 🌟 Key Features

### 1. Minimalist Floating Pill Navigation
- Centered, frosted-glass acrylic island (`backdrop-blur-xl`) with smooth scroll transitions.
- Streamlined essential navigation: **Services**, **How It Works**, **Reviews**, and **Contact**.
- Micro-dropdown with quick links, starting prices, and icons for all 8 disciplines.
- High-visibility **"Book Service"** primary CTA and direct emergency helpline integration.

### 2. High-Impact Conversion Hero Section
- Direct value proposition: *"Reliable Home Services, Right When You Need Them."*
- **Instant Sector Dispatch Selector**: 1-click booking based on selected service and Noida sector/pincode.
- Core confidence indicators: *Verified Professionals*, *Transparent Pricing*, *Same-Day Service*, and *100% Satisfaction Guarantee*.

### 3. Complete 8-Service Catalog
Each service includes transparent pricing, common problem diagnostics, multi-point checklists, and direct booking:
1. 🚰 **Plumbing Services** (Tap fixes, pipe leakages, drain jetting, sanitary fittings) — *from ₹199*
2. ❄️ **AC Repair & Installation** (Jet foam servicing, gas recharging, PCB fix, split/window install) — *from ₹299*
3. ⚡ **Electrical Work** (Short-circuits, MCB tripping, switchboards, wiring, fan/light installs) — *from ₹149*
4. 🔧 **Washing Machine Repair** (Front/top load drum issues, drain pumps, motor bearings) — *from ₹299*
5. 🧊 **Refrigerator Repair** (Cooling restoration, compressor check, gas refilling, gasket fix) — *from ₹349*
6. 📺 **TV & Electronics Repair** (Smart LED/OLED panels, backlights, power boards, wall-mounting) — *from ₹249*
7. 🛠️ **General Appliance Repair** (Microwave ovens, RO water purifiers, kitchen chimneys, geysers) — *from ₹199*
8. 🏠 **Home Maintenance Services** (Carpentry, curtain rods, door locks, tile grouting, handymen) — *from ₹199*

### 4. Interactive 5-Step Booking Wizard (`/booking`)
- **Step 1**: Discipline selection with visual icons.
- **Step 2**: Common problem identification or custom symptom input.
- **Step 3**: Date picker and 2-hour doorstep arrival slots.
- **Step 4**: Customer contact details, sector selection, and service address.
- **Step 5**: Instant confirmation with booking ID (`#ANP-XXXXXX`) and 1-tap WhatsApp sync.

### 5. Trust & Social Proof System
- **Interactive Before / After Split Slider**: Visual proof of workmanship across Plumbing, AC, Electrical, and Appliances.
- **Customer Reviews**: Filterable testimonials from popular Noida societies (*ATS Greens, Mahagun Moderne, Jaypee Greens, Prateek Edifice, Supertech Cape Town*).
- **Service Area Coverage Radar**: Interactive sector & pincode checker with real-time same-day dispatch verification.
- **Accordion FAQs**: Clear answers regarding pricing, warranties, parts authenticity, and cancellation policies.

### 6. Conversion Utilities
- **Floating WhatsApp Launcher**: Pre-populates contextual booking requests.
- **Mobile Bottom Bar**: Sticky 1-tap booking, emergency calling, and WhatsApp for mobile users.
- **Multi-State Toast Notifications**: 8 built-in toast states with demo control bar.

---

## 🚀 Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js 16 (App Router)** | High-performance React framework with Turbopack & SSG |
| **TypeScript** | Strict type safety and maintainability |
| **Tailwind CSS** | Custom styling, responsive layouts & color systems |
| **Framer Motion** | Smooth animations, interactive split sliders & dropdowns |
| **Lucide React** | Clean, modern iconography |

---

## 📁 Project Structure

```text
frontend/
├── public/
│   └── images/
│       └── services/          # High-resolution local service photography
│           └── refrigerator.jpg
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with SEO metadata & global fonts
│   │   ├── page.tsx           # Flagship homepage
│   │   ├── booking/           # 5-Step interactive booking wizard
│   │   ├── services/[slug]/   # Dynamic SSG service landing pages (8 routes)
│   │   ├── about/             # Company background & technician standards
│   │   └── contact/           # Contact form, direct phone & WhatsApp helpline
│   ├── components/
│   │   ├── navbar/
│   │   │   └── Navbar.tsx     # Minimalist floating acrylic pill header
│   │   ├── hero/
│   │   │   └── HeroSection.tsx # Conversion hero with sector dispatch form
│   │   ├── sections/          # Modular homepage sections (Services, Reviews, etc.)
│   │   ├── booking/           # Step-by-step booking components
│   │   ├── ui/                # BrandLogo, ToastSystem, WhatsAppButton, MobileBottomBar
│   │   └── footer/            # Comprehensive multi-column footer
│   └── config/
│       └── services.ts        # Central service configs, rate cards, FAQs & contacts
├── next.config.ts             # Remote image patterns & Next.js settings
├── package.json
├── tsconfig.json
└── tailwind.config.ts
```

---

## 🛠️ Getting Started

### Prerequisites
- Node.js 18.17 or higher
- npm, pnpm, or yarn

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the live site.

### 3. Build for Production
```bash
npm run build
```
Validates TypeScript compilation and generates static pre-rendered pages across all 15 routes.

### 4. Start Production Server
```bash
npm run start
```

---

## ⚙️ Configuration & Customization

All primary content, pricing, phone numbers, and services are centrally managed in:
`src/config/services.ts`

- **Contact Info & WhatsApp**: Modify `APP_CONFIG.phone`, `APP_CONFIG.whatsapp`, and `APP_CONFIG.email`.
- **Services & Rates**: Edit the `SERVICES` array to add/update services, starting prices, or checklists.
- **Coverage Areas**: Update `PINCODE_AREAS` to add new sectors or coverage zones.

---

## 📄 License
Private commercial project for **All Noida Plumbing AC Electrical Service**. All rights reserved.
