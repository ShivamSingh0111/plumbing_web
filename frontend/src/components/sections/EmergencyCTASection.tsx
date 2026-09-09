"use client";

import { Phone, MessageSquare, Clock, ShieldAlert, Zap } from "lucide-react";
import { APP_CONFIG } from "@/config/services";

export default function EmergencyCTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-rose-950 via-slate-950 to-slate-900 text-white relative overflow-hidden" aria-label="Emergency Home Services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-slate-900/90 border border-rose-500/30 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 flex flex-col">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-extrabold uppercase tracking-wider mb-4 w-fit">
                <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping" />
                <span>24/7 Rapid Emergency Response</span>
              </div>

              <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
                Need Help Right Now?
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-6">
                Get a professional technician at your doorstep as quickly as possible.
                Instant priority response for burst pipes, severe water leaks, burning electrical switchboards,
                sudden power outages, and compressor shutdowns.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-rose-200">
                  <Clock className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>28-Min Doorstep SLA</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-rose-200">
                  <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>Certified Master Technicians</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-rose-200">
                  <Zap className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>Zero Surge Charges</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 w-full">
              <a
                href={`tel:${APP_CONFIG.phone}`}
                className="w-full py-4 px-6 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-extrabold text-center text-sm uppercase tracking-wider shadow-lg shadow-rose-600/30 hover:shadow-rose-600/50 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                aria-label="Call emergency technician now"
              >
                <Phone className="w-5 h-5 text-white animate-bounce" />
                <span>Call Now: {APP_CONFIG.phoneDisplay}</span>
              </a>

              <a
                href={`https://wa.me/${APP_CONFIG.whatsapp}?text=${encodeURIComponent(
                  "EMERGENCY: I have an urgent home service emergency. Please dispatch the nearest technician immediately."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-center text-sm uppercase tracking-wider shadow-lg shadow-emerald-600/25 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5"
                aria-label="WhatsApp emergency technician now"
              >
                <MessageSquare className="w-5 h-5 text-white" />
                <span>WhatsApp Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
