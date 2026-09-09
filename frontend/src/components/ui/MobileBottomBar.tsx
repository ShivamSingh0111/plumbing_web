"use client";

import Link from "next/link";
import { Phone, Calendar, MessageSquare } from "lucide-react";
import { APP_CONFIG } from "@/config/services";

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[190] md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-white/10 px-4 py-2.5 shadow-[0_-8px_30px_rgba(0,0,0,0.3)]">
      <div className="grid grid-cols-12 gap-2 items-center">
        {/* Call CTA */}
        <a
          href={`tel:${APP_CONFIG.phone}`}
          className="col-span-3 flex flex-col items-center justify-center py-1 rounded-xl bg-white/10 hover:bg-white/15 text-white active:scale-95 transition-all"
          aria-label="Call technician"
        >
          <Phone className="w-4 h-4 text-emerald-400 mb-0.5" />
          <span className="text-[10px] font-bold">Call</span>
        </a>

        {/* WhatsApp CTA */}
        <a
          href={`https://wa.me/${APP_CONFIG.whatsapp}?text=${encodeURIComponent(
            "Hi, I need home service assistance. Please help me book an appointment."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-3 flex flex-col items-center justify-center py-1 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 active:scale-95 transition-all"
          aria-label="WhatsApp technician"
        >
          <MessageSquare className="w-4 h-4 text-emerald-400 mb-0.5" />
          <span className="text-[10px] font-bold">WhatsApp</span>
        </a>

        {/* Primary Book Now CTA */}
        <Link
          href="/booking"
          className="col-span-6 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 text-white font-extrabold text-xs tracking-wide shadow-lg shadow-sky-500/30 active:scale-95 transition-all"
        >
          <Calendar className="w-4 h-4" />
          <span>Book a Service</span>
        </Link>
      </div>
    </div>
  );
}
