"use client";

import { useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { APP_CONFIG, SERVICES } from "@/config/services";
import { useToast } from "@/components/ui/ToastSystem";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("plumbing");
  const [customNote, setCustomNote] = useState("");
  const { showToast } = useToast();

  const currentServiceObj = SERVICES.find((s) => s.slug === selectedService) || SERVICES[0];

  const handleSend = () => {
    const baseText = `Hi, I need ${currentServiceObj.name.toLowerCase()}. Please help me book an appointment.`;
    const fullText = customNote.trim() ? `${baseText}\n\nDetails: ${customNote.trim()}` : baseText;
    const url = `https://wa.me/${APP_CONFIG.whatsapp}?text=${encodeURIComponent(fullText)}`;

    showToast("whatsapp_initiated", {
      title: "Connecting to WhatsApp",
      message: `Routing your ${currentServiceObj.name} request to the local dispatch supervisor.`,
    });

    window.open(url, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  return (
    <>
      <div className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-[180] flex flex-col items-end">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mb-3 w-80 sm:w-96 rounded-3xl bg-slate-950/95 backdrop-blur-2xl border border-emerald-500/30 shadow-2xl p-5 text-white"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-md">
                    <MessageSquare className="w-4 h-4 fill-white" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white">Direct WhatsApp Dispatch</h3>
                    <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Dispatch Desk Online
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close WhatsApp chat assistant"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Service Selection */}
              <div className="mb-3">
                <label className="text-[11px] font-bold text-slate-300 block mb-1.5">
                  Select Required Service:
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full bg-slate-900 border border-white/15 text-white text-xs font-medium rounded-xl py-2.5 px-3 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all cursor-pointer"
                >
                  {SERVICES.map((s) => (
                    <option key={s.slug} value={s.slug} className="bg-slate-950 text-white">
                      {s.emoji} {s.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Custom Optional Note */}
              <div className="mb-4">
                <label className="text-[11px] font-bold text-slate-300 block mb-1.5">
                  Specific Issue or Landmark (Optional):
                </label>
                <textarea
                  rows={2}
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                  placeholder="e.g. Master bathroom tap leaking, Sector 78 Mahagun..."
                  className="w-full bg-slate-900 border border-white/15 text-white text-xs rounded-xl p-2.5 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all placeholder:text-slate-500"
                />
              </div>

              {/* Live Message Preview */}
              <div className="p-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-[11px] text-slate-300 mb-4 italic">
                "{`Hi, I need ${currentServiceObj.name.toLowerCase()}. Please help me book an appointment.`}"
              </div>

              {/* Send Button */}
              <button
                onClick={handleSend}
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/50 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Send on WhatsApp</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Pulsating Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Chat on WhatsApp"
          className="relative group p-3.5 sm:p-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center cursor-pointer"
        >
          <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-40 animate-ping pointer-events-none" />
          <MessageSquare className="w-6 h-6 fill-white" />
          <span className="absolute -top-1 -right-1 px-1.5 py-0.5 rounded-full bg-slate-950 text-[9px] font-black text-emerald-400 border border-emerald-500/40">
            24/7
          </span>
        </button>
      </div>
    </>
  );
}
