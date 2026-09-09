"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Wrench,
  Wind,
  Zap,
  Settings,
  Thermometer,
  Monitor,
  Home,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { SERVICES } from "@/config/services";
import { formatPrice } from "@/lib/utils";

const ICON_MAP: Record<string, React.ElementType> = {
  Wrench,
  Wind,
  Zap,
  Settings,
  Thermometer,
  Monitor,
  Home,
  Tool: Wrench,
};

function ServiceCard({ service, index }: { service: (typeof SERVICES)[number]; index: number }) {
  const Icon = ICON_MAP[service.icon] ?? Wrench;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      className="group relative flex flex-col bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
    >
      {/* HD Professional Image Header */}
      <div className="relative h-52 w-full overflow-hidden bg-slate-900">
        <Image
          src={service.image}
          alt={`${service.name} professional service`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="text-xl p-1.5 rounded-xl bg-white/90 backdrop-blur-md shadow-sm">
            {service.emoji}
          </span>
          {service.badge && (
            <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-950/85 text-white backdrop-blur-md border border-white/20">
              {service.badge}
            </span>
          )}
        </div>

        {/* Bottom Floating Price Tag inside image */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/15 text-white">
            <span className="text-[10px] text-slate-300 font-medium">From</span>
            <span className="text-sm font-extrabold text-sky-400">{formatPrice(service.startingPrice)}</span>
          </div>
          <span className="text-[10px] font-semibold text-emerald-300 bg-emerald-950/70 px-2 py-0.5 rounded-md border border-emerald-500/30">
            Available Today
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Service Name & Icon */}
        <div className="flex items-center gap-2.5 mb-2.5">
          <div
            className={`w-8 h-8 rounded-xl bg-gradient-to-br ${service.gradient} text-white flex items-center justify-center shrink-0 shadow-sm`}
          >
            <Icon className="w-4 h-4" />
          </div>
          <h3 className="font-sans font-bold text-lg text-slate-900 group-hover:text-sky-600 transition-colors">
            {service.name}
          </h3>
        </div>

        {/* Short Description */}
        <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
          {service.shortDescription}
        </p>

        {/* Key Highlights */}
        <div className="space-y-1.5 mb-6 pt-2 border-t border-slate-100">
          {service.highlights.slice(0, 2).map((h) => (
            <div key={h} className="flex items-center gap-2 text-[11px] text-slate-600">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span className="truncate">{h}</span>
            </div>
          ))}
        </div>

        {/* Action Area: Book Now Primary + Details Link */}
        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
          <Link
            href={`/booking?service=${service.slug}`}
            id={`book-${service.slug}`}
            className="flex-1 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-sky-600 text-white text-xs font-bold text-center tracking-wide transition-all duration-200 flex items-center justify-center gap-1.5 shadow-sm hover:shadow-md"
            aria-label={`Book ${service.name}`}
          >
            <span>Book Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <Link
            href={`/services/${service.slug}`}
            className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
            aria-label={`View full details for ${service.name}`}
            title="View Details"
          >
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-24 bg-white" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-700 text-xs font-bold uppercase tracking-wider mb-4 border border-sky-200/60"
          >
            <Wrench className="w-3.5 h-3.5 text-sky-600" aria-hidden="true" />
            <span>Core Service Disciplines</span>
          </motion.div>

          <motion.h2
            id="services-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight mb-4"
          >
            Specialized Home Maintenance, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600">
              Delivered by Master Technicians
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            Each service is executed using industrial-grade equipment, authentic OEM parts,
            and flat digital pricing. Tap any card below to schedule in under 60 seconds.
          </motion.p>
        </div>

        {/* 8 Distinct Service Cards Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          role="list"
          aria-label="Available home services"
        >
          {SERVICES.map((service, i) => (
            <div key={service.id} role="listitem">
              <ServiceCard service={service} index={i} />
            </div>
          ))}
        </div>

        {/* Multi-service package banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-sky-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400 block mb-1">
              Need Multiple Services Done Together?
            </span>
            <h3 className="text-xl font-bold text-white">Custom Whole-Home Maintenance Packages Available</h3>
            <p className="text-xs text-slate-300 mt-1 max-w-xl">
              Consolidate plumbing, AC servicing, and electrical safety audits into a single technician visit with discounted bundle rates.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/booking"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white text-xs font-bold uppercase tracking-wider shadow-lg transition-all"
            >
              Book Home Package
            </Link>
            <a
              href={`https://wa.me/${SERVICES[0].slug}?text=${encodeURIComponent(
                "Hi, I want to inquire about a multi-service home maintenance package."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold transition-colors"
            >
              Ask on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
