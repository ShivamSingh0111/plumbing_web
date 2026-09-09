"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Bolt,
  Radio,
  MessageSquare,
  Star,
} from "lucide-react";
import { APP_CONFIG, SERVICES, PINCODE_AREAS } from "@/config/services";

const TRUST_INDICATORS = [
  { label: "Verified Professionals", detail: "Police & skill verified" },
  { label: "Transparent Pricing", detail: "Fixed rate card, no surprises" },
  { label: "Same-Day Service", detail: "Guaranteed 28-min dispatch" },
  { label: "100% Satisfaction", detail: "30-day rework warranty" },
];

export default function HeroSection() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const [selectedService, setSelectedService] = useState("plumbing");
  const [selectedSector, setSelectedSector] = useState("201301");

  function handleRapidDispatch(e: React.FormEvent) {
    e.preventDefault();
    router.push(`/booking?service=${selectedService}&pincode=${selectedSector}`);
  }

  const selectedServiceObj = SERVICES.find((s) => s.slug === selectedService) || SERVICES[0];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-slate-950 text-white pt-28 pb-16 lg:pt-36 lg:pb-24"
      aria-label="Hero — All Noida Plumbing AC Electrical Service"
    >
      {/* Background Gradients & Textures */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 15% 30%, rgba(30, 90, 255, 0.22) 0%, transparent 60%), " +
            "radial-gradient(ellipse at 85% 20%, rgba(56, 189, 248, 0.16) 0%, transparent 50%), " +
            "radial-gradient(ellipse at 50% 80%, rgba(14, 165, 233, 0.10) 0%, transparent 60%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), " +
            "linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Messaging & CTAs */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Emergency Service Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 backdrop-blur-md">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-sky-300">
                  Emergency Service Active
                </span>
                <span className="text-white/20">•</span>
                <span className="text-[11px] font-bold text-emerald-400">
                  Avg. 28-Min Doorstep SLA
                </span>
              </div>
            </motion.div>

            {/* Primary Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] mb-5"
            >
              Reliable Home Services, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-200">
                Right When You Need Them.
              </span>
            </motion.h1>

            {/* Supporting Message */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-base sm:text-lg text-slate-300 mb-8 max-w-xl leading-relaxed"
            >
              Professional plumbing, AC, electrical, and appliance repair services delivered by
              trusted technicians. Same-day emergency response across all Noida sectors & Expressway societies.
            </motion.p>

            {/* Primary & Secondary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap items-center gap-3.5 mb-8"
            >
              {/* Primary CTA */}
              <Link
                href="/booking"
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                <span>Book a Service</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Secondary CTA */}
              <a
                href={`https://wa.me/${APP_CONFIG.whatsapp}?text=${encodeURIComponent(
                  "Hi, I need home service assistance. Please help me book an appointment."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 font-bold text-sm hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Us</span>
              </a>

              {/* Phone Dial */}
              <a
                href={`tel:${APP_CONFIG.phone}`}
                className="px-4 py-3.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 font-semibold text-sm transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-sky-400" />
                <span>{APP_CONFIG.phoneDisplay}</span>
              </a>
            </motion.div>

            {/* Rapid Sector Booking Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-white/10 backdrop-blur-xl shadow-2xl max-w-xl"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Radio className="w-4 h-4 text-sky-400 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                    Instant Sector Dispatch
                  </span>
                </div>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  Next Slot: In 20 Mins
                </span>
              </div>

              <form onSubmit={handleRapidDispatch} className="grid grid-cols-1 sm:grid-cols-12 gap-2.5">
                <div className="sm:col-span-6">
                  <label htmlFor="hero-service-select" className="sr-only">Select Service</label>
                  <select
                    id="hero-service-select"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full bg-slate-950 border border-white/15 text-white text-xs font-medium rounded-xl py-3 px-3 focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all cursor-pointer"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.slug} value={s.slug} className="bg-slate-950 text-white">
                        {s.emoji} {s.name} (from ₹{s.startingPrice})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-6">
                  <label htmlFor="hero-sector-select" className="sr-only">Select Area / Sector</label>
                  <select
                    id="hero-sector-select"
                    value={selectedSector}
                    onChange={(e) => setSelectedSector(e.target.value)}
                    className="w-full bg-slate-950 border border-white/15 text-white text-xs font-medium rounded-xl py-3 px-3 focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all cursor-pointer"
                  >
                    {Object.entries(PINCODE_AREAS).map(([pin, area]) => (
                      <option key={pin} value={pin} className="bg-slate-950 text-white">
                        📍 {area}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-12">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-sky-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Bolt className="w-4 h-4" />
                    <span>Check Availability & Book in 60s</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Trust Indicators (4 Checkpoints) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/10"
            >
              {TRUST_INDICATORS.map((item) => (
                <div key={item.label} className="flex flex-col">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-white mb-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{item.label}</span>
                  </div>
                  <span className="text-[11px] text-slate-400">{item.detail}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: High Definition Technician Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-sky-500/30 via-blue-500/20 to-purple-500/30 blur-xl opacity-70" />

              <div className="relative rounded-3xl overflow-hidden border border-white/20 bg-slate-900/90 shadow-2xl">
                <div className="relative h-96 sm:h-[440px] w-full overflow-hidden">
                  <Image
                    src={selectedServiceObj.image}
                    alt={`${selectedServiceObj.name} professional technician at work`}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-xs font-bold text-white">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>ISO 9001 Certified Services</span>
                  </div>

                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-xs font-bold text-amber-300">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>4.9 / 5</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/85 backdrop-blur-xl border border-white/15">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-xl bg-gradient-to-br ${selectedServiceObj.gradient} text-white flex items-center justify-center text-xl shrink-0`}
                        >
                          {selectedServiceObj.emoji}
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-white">{selectedServiceObj.name}</h3>
                          <p className="text-[11px] text-slate-300">
                            Starting from <span className="text-sky-400 font-bold">₹{selectedServiceObj.startingPrice}</span>
                          </p>
                        </div>
                      </div>
                      <Link
                        href={`/booking?service=${selectedServiceObj.slug}`}
                        className="px-3.5 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-white text-xs font-bold transition-colors shrink-0"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-slate-950/90 border-t border-white/10 grid grid-cols-3 gap-2 text-center">
                  <div>
                    <span className="block text-base font-extrabold text-white">28 min</span>
                    <span className="text-[10px] text-slate-400 uppercase font-medium">Avg. Arrival</span>
                  </div>
                  <div className="border-x border-white/10">
                    <span className="block text-base font-extrabold text-emerald-400">100%</span>
                    <span className="text-[10px] text-slate-400 uppercase font-medium">Genuine Parts</span>
                  </div>
                  <div>
                    <span className="block text-base font-extrabold text-sky-400">30 Days</span>
                    <span className="text-[10px] text-slate-400 uppercase font-medium">Warranty</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
