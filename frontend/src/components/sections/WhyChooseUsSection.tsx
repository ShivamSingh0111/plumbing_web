"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Receipt,
  Award,
  Clock,
  Wrench,
  Headphones,
  MessageSquare,
  Sparkles,
} from "lucide-react";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Verified Professionals",
    description: "Every engineer is background checked with police clearance, carrying verified photo identification.",
    color: "text-blue-600 bg-blue-50 border-blue-100",
  },
  {
    icon: Zap,
    title: "Fast Response",
    description: "28-minute average emergency dispatch across Central Noida, Expressway, and Greater Noida West.",
    color: "text-amber-600 bg-amber-50 border-amber-100",
  },
  {
    icon: Receipt,
    title: "Transparent Pricing",
    description: "Digital itemized rate cards shown upfront before work begins. No hidden costs or surge markups.",
    color: "text-emerald-600 bg-emerald-50 border-emerald-100",
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description: "Unconditional 30-day rework warranty. If anything fails, we fix it at zero additional cost to you.",
    color: "text-indigo-600 bg-indigo-50 border-indigo-100",
  },
  {
    icon: Clock,
    title: "Same-Day Service",
    description: "Book before 7:00 PM for guaranteed same-day technician visit in your chosen 2-hour window.",
    color: "text-sky-600 bg-sky-50 border-sky-100",
  },
  {
    icon: Wrench,
    title: "Experienced Technicians",
    description: "Master plumbers, licensed electricians, and HVAC certified engineers with 8+ years hands-on mastery.",
    color: "text-cyan-600 bg-cyan-50 border-cyan-100",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description: "Dedicated Noida helpdesk available 7 days a week for scheduling, tracking, and post-service queries.",
    color: "text-purple-600 bg-purple-50 border-purple-100",
  },
  {
    icon: MessageSquare,
    title: "Easy WhatsApp Booking",
    description: "Book or modify appointments in 30 seconds straight from WhatsApp with instant human assistance.",
    color: "text-teal-600 bg-teal-50 border-teal-100",
  },
];

export default function WhyChooseUsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="why-us" className="py-24 bg-white" aria-labelledby="why-choose-us-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4 border border-slate-200"
          >
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>The Gold Standard in Home Services</span>
          </motion.div>

          <motion.h2
            id="why-choose-us-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight mb-4"
          >
            Why Choose Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            We eliminate the frustration of unreliable local contractors with standardized
            high-rise engineering protocols, flat digital pricing, and proven customer protection.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.06, duration: 0.5 }}
                className="p-6 sm:p-7 rounded-3xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:shadow-xl hover:border-slate-300 hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 border ${item.color} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-sans font-bold text-base text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
