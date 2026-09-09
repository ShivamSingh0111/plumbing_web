"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { MousePointerClick, CalendarClock, UserCheck, ShieldCheck, ArrowRight } from "lucide-react";

const STEPS = [
  {
    step: "01",
    title: "Choose a Service",
    description: "Select from our 8 core engineering disciplines or choose your specific problem type.",
    icon: MousePointerClick,
    timeframe: "Instant • 30 seconds",
  },
  {
    step: "02",
    title: "Book an Appointment",
    description: "Pick your preferred 2-hour doorstep window or request priority 28-min emergency dispatch.",
    icon: CalendarClock,
    timeframe: "Real-time slot lock",
  },
  {
    step: "03",
    title: "Professional Arrives",
    description: "A certified, police-verified technician arrives on time with complete toolkits and genuine parts.",
    icon: UserCheck,
    timeframe: "Live SMS & WhatsApp tracker",
  },
  {
    step: "04",
    title: "Problem Solved",
    description: "Work completed with multi-point testing, site cleanup, digital invoice, and 30-day warranty.",
    icon: ShieldCheck,
    timeframe: "100% Satisfaction backed",
  },
];

export default function HowItWorksSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="how-it-works" className="py-24 bg-slate-50 border-b border-slate-200/70" aria-label="How It Works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-4 border border-sky-200"
          >
            <span>Seamless 4-Step Process</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight mb-4"
          >
            How It Works
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            Booking trusted home engineering in Noida takes less than a minute.
            Here is what to expect from first click to final sign-off.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-sans font-extrabold text-3xl text-sky-600/30">
                      {step.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="font-sans font-bold text-lg text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>{step.timeframe}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-sky-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-sky-500/25 transition-all cursor-pointer"
          >
            <span>Start Step 01 — Choose Your Service</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
