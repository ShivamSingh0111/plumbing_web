"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Wrench, Star, ShieldCheck, Award } from "lucide-react";
import { TRUST_STATS } from "@/config/services";

function CounterItem({
  value,
  label,
  detail,
  icon: Icon,
  index,
}: {
  value: string;
  label: string;
  detail: string;
  icon: React.ElementType;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
    >
      <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-5 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
        <Icon className="w-6 h-6" />
      </div>

      <div className="flex items-baseline gap-1 mb-2">
        <span className="font-sans font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tight">
          {value}
        </span>
      </div>

      <h3 className="text-base font-bold text-slate-900 mb-1">{label}</h3>
      <p className="text-xs text-slate-500 leading-relaxed">{detail}</p>
    </motion.div>
  );
}

export default function TrustStatsSection() {
  const ICONS = [Wrench, Users, ShieldCheck, Star];

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200/60" aria-label="Trust & Credentials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
            <span>Noida's Highest-Rated Home Engineering Team</span>
          </div>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
            Trusted by Over 5,000+ Families Inside Gated Societies
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            From Sector 1 to Sector 168 and across the Noida Expressway, our certified technicians
            arrive with police verification, background clearance, and guaranteed flat digital rate cards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {TRUST_STATS.map((stat, i) => (
            <CounterItem
              key={stat.label}
              value={stat.value}
              label={stat.label}
              detail={stat.detail}
              icon={ICONS[i % ICONS.length]}
              index={i}
            />
          ))}
        </div>

        <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
              <Award className="w-7 h-7 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Unconditional 30-Day Workmanship Guarantee</h3>
              <p className="text-xs text-slate-300">
                If the resolved issue reoccurs within 30 days, we dispatch a senior engineer to rectify it completely free of charge.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 shrink-0 border-t md:border-t-0 md:border-l border-white/15 pt-4 md:pt-0 md:pl-6 w-full md:w-auto justify-around">
            <div className="text-center">
              <span className="block text-xl font-extrabold text-sky-400">12+</span>
              <span className="text-[11px] text-slate-400 font-medium">Years in Noida</span>
            </div>
            <div className="text-center">
              <span className="block text-xl font-extrabold text-emerald-400">100%</span>
              <span className="text-[11px] text-slate-400 font-medium">Police Verified</span>
            </div>
            <div className="text-center">
              <span className="block text-xl font-extrabold text-amber-400">0</span>
              <span className="text-[11px] text-slate-400 font-medium">Hidden Fees</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
