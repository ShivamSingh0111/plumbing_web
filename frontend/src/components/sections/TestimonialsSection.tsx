"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Star, ShieldCheck, CheckCircle2, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/config/services";

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [filter, setFilter] = useState("all");

  const filteredReviews =
    filter === "all" ? TESTIMONIALS : TESTIMONIALS.filter((t) => t.serviceSlug === filter);

  return (
    <section id="reviews" className="py-24 bg-slate-50 border-y border-slate-200/70" aria-label="Customer Reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>100% Verified Noida Homeowners</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight mb-4"
          >
            Customer Reviews
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            Real feedback from residents in ATS Village, Mahagun Moderne, Jaypee Greens, and
            societies across the Noida Expressway.
          </motion.p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              filter === "all"
                ? "bg-slate-900 text-white shadow-md"
                : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
            }`}
          >
            All Reviews ({TESTIMONIALS.length})
          </button>
          <button
            onClick={() => setFilter("plumbing")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              filter === "plumbing"
                ? "bg-slate-900 text-white shadow-md"
                : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
            }`}
          >
            Plumbing
          </button>
          <button
            onClick={() => setFilter("ac-service")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              filter === "ac-service"
                ? "bg-slate-900 text-white shadow-md"
                : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
            }`}
          >
            AC Service
          </button>
          <button
            onClick={() => setFilter("electrical")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              filter === "electrical"
                ? "bg-slate-900 text-white shadow-md"
                : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
            }`}
          >
            Electrical
          </button>
          <button
            onClick={() => setFilter("washing-machine")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              filter === "washing-machine"
                ? "bg-slate-900 text-white shadow-md"
                : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
            }`}
          >
            Appliances
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-slate-200 shadow-sm shrink-0">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-sm font-bold text-slate-900 leading-tight">{item.name}</h4>
                        <span title="Verified Customer">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 truncate max-w-[180px]">{item.society}</p>
                    </div>
                  </div>

                  <Quote className="w-6 h-6 text-slate-200 shrink-0" />
                </div>

                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-200/60">
                    {item.service}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed italic">
                  "{item.review}"
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>Verified Service Order</span>
                <span>{item.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
