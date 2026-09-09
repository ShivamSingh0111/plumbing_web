"use client";

import { useState } from "react";
import { MapPin, Search, ShieldCheck } from "lucide-react";
import { PINCODE_AREAS } from "@/config/services";

export default function ServiceAreaSection() {
  const [searchTerm, setSearchTerm] = useState("");

  const entries = Object.entries(PINCODE_AREAS);
  const filteredEntries = entries.filter(([pin, area]) =>
    searchTerm ? area.toLowerCase().includes(searchTerm.toLowerCase()) || pin.includes(searchTerm) : true
  );

  return (
    <section id="coverage" className="py-24 bg-white" aria-label="Coverage and Service Areas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-4 border border-sky-200">
            <MapPin className="w-3.5 h-3.5 text-sky-600" />
            <span>Noida &amp; Expressway Coverage Radar</span>
          </div>

          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight mb-4">
            Service Locations &amp; Response Zones
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We maintain localized mobile engineering units across all key sectors.
            Check your pincode or sector below for guaranteed same-day dispatch.
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-12">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by sector or pincode (e.g., Sector 78, 201301)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm text-slate-900 shadow-sm transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Map Visual */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-slate-950 text-white relative overflow-hidden border border-slate-800 shadow-2xl">
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(56, 189, 248, 0.4) 1px, transparent 1px), " +
                  "linear-gradient(90deg, rgba(56, 189, 248, 0.4) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">
                    Live Dispatch Map — Sector Hubs
                  </h3>
                </div>
                <span className="text-xs font-bold text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
                  100% Coverage Active
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-white">Central Noida Hub</span>
                    <span className="text-[10px] font-extrabold text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded-md">
                      20–25 Min SLA
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Sectors 1 to 78 • Atta Market, Wave City, Logix City Centre, Mahagun Moderne
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-white">Expressway Corridor</span>
                    <span className="text-[10px] font-extrabold text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded-md">
                      25–30 Min SLA
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Sectors 93 to 168 • Jaypee Wish Town, ATS Village, Eldeco Utopia, Paras Tierea
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-white">Greater Noida West</span>
                    <span className="text-[10px] font-extrabold text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded-md">
                      30–35 Min SLA
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Noida Extension • Gaur City 1 &amp; 2, Cherry County, Panchsheel Hynish
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-white">Greater Noida HQ</span>
                    <span className="text-[10px] font-extrabold text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded-md">
                      35–45 Min SLA
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Pari Chowk, Alpha, Beta, Gamma, Omega, Delta sectors &amp; institutional area
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-sky-950/60 border border-sky-500/30 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0" />
                  <span className="text-xs text-slate-300">
                    Technicians dispatched from nearest sector hub with GPS telemetry.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Sector Lookup List */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <h3 className="text-base font-bold text-slate-900 mb-1">
              Active Same-Day Sectors ({filteredEntries.length})
            </h3>
            <div className="max-h-[460px] overflow-y-auto space-y-2.5 pr-2">
              {filteredEntries.map(([pincode, area]) => (
                <div
                  key={pincode}
                  className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-md transition-all flex items-center justify-between"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 text-xs font-bold">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-slate-900 truncate">{area}</h4>
                      <span className="text-[10px] text-slate-500">PIN: {pincode}</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full shrink-0">
                    Same-Day
                  </span>
                </div>
              ))}
              {filteredEntries.length === 0 && (
                <div className="p-8 text-center text-slate-400 text-xs">
                  No matching sectors found. We still service all Noida regions — please contact support.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
