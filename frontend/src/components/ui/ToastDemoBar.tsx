"use client";

import { useState } from "react";
import { useToast, ToastType } from "./ToastSystem";
import { BellRing, ChevronUp, ChevronDown } from "lucide-react";

export default function ToastDemoBar() {
  const { showToast } = useToast();
  const [isOpen, setIsOpen] = useState(false);

  const demoItems: { type: ToastType; label: string }[] = [
    { type: "booking_submitted", label: "1. Booking Confirmed" },
    { type: "whatsapp_initiated", label: "2. WhatsApp Triggered" },
    { type: "service_received", label: "3. Request Received" },
    { type: "validation_error", label: "4. Form Error" },
    { type: "network_error", label: "5. Network State" },
    { type: "appointment_confirmed", label: "6. Tech Assigned" },
    { type: "reminder", label: "7. Reminder" },
    { type: "general_success", label: "8. Success" },
  ];

  return (
    <aside aria-label="UX Notification Tester" className="fixed bottom-20 left-4 z-[150] hidden md:block">
      <div className="bg-slate-900/90 backdrop-blur-md border border-white/15 rounded-2xl shadow-xl p-2 transition-all">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:text-white transition-colors"
        >
          <BellRing className="w-3.5 h-3.5 text-sky-400" />
          <span>Test Notification UX</span>
          {isOpen ? <ChevronDown className="w-3 h-3 text-slate-400" /> : <ChevronUp className="w-3 h-3 text-slate-400" />}
        </button>

        {isOpen && (
          <div className="pt-2 mt-1 border-t border-white/10 grid grid-cols-2 gap-1.5 max-w-xs">
            {demoItems.map((item) => (
              <button
                key={item.type}
                onClick={() => showToast(item.type)}
                className="text-left px-2.5 py-1.5 rounded-lg text-[10px] font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer truncate"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}
