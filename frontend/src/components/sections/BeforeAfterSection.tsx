"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { BEFORE_AFTER_ITEMS } from "@/config/services";
import { Sparkles, CheckCircle2, AlertTriangle } from "lucide-react";

export default function BeforeAfterSection() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const activeItem = BEFORE_AFTER_ITEMS[activeItemIndex];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percent);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden" aria-label="Before and After Results">
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(56, 189, 248, 0.4) 0%, transparent 60%), " +
            "radial-gradient(circle at 70% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Proven Engineering Results</span>
          </div>

          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
            Before &amp; After Workmanship
          </h2>

          <p className="text-base text-slate-400 leading-relaxed">
            Slide the interactive divider to inspect real before-and-after restorations performed inside
            Noida residences. From concealed pipe bursts to deep AC jet servicing.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {BEFORE_AFTER_ITEMS.map((item, index) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveItemIndex(index);
                setSliderPosition(50);
              }}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeItemIndex === index
                  ? "bg-sky-500 text-white shadow-lg shadow-sky-500/30 scale-105"
                  : "bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-white/10"
              }`}
            >
              {item.service}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
            className="relative h-[380px] sm:h-[480px] rounded-3xl overflow-hidden border border-white/20 shadow-2xl select-none cursor-ew-resize bg-slate-900"
          >
            {/* AFTER Image */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={activeItem.afterImage}
                alt={activeItem.afterTitle}
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
                priority
              />
              <div className="absolute top-4 right-4 z-20 px-3.5 py-1.5 rounded-full bg-emerald-950/85 backdrop-blur-md border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center gap-1.5 shadow-lg">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>AFTER: {activeItem.afterTitle}</span>
              </div>
            </div>

            {/* BEFORE Image (Clipped) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="relative w-[896px] h-full" style={{ width: containerRef.current?.clientWidth || "100%" }}>
                <Image
                  src={activeItem.beforeImage}
                  alt={activeItem.beforeTitle}
                  fill
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="object-cover"
                  priority
                />
                <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-full bg-rose-950/85 backdrop-blur-md border border-rose-500/40 text-rose-300 text-xs font-bold flex items-center gap-1.5 shadow-lg">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                  <span>BEFORE: {activeItem.beforeTitle}</span>
                </div>
              </div>
            </div>

            {/* Slider Divider Bar */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-30 shadow-[0_0_15px_rgba(255,255,255,0.7)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-2xl border-2 border-sky-500">
                <span className="text-xs font-bold">⇄</span>
              </div>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-4 left-4 right-4 z-20 p-4 rounded-2xl bg-slate-950/85 backdrop-blur-xl border border-white/15">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div>
                  <h4 className="text-sm font-bold text-white">{activeItem.title}</h4>
                  <p className="text-xs text-slate-300">{activeItem.summary}</p>
                </div>
                <span className="text-[11px] font-semibold text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded-lg border border-sky-500/20 shrink-0">
                  Drag slider left / right
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
