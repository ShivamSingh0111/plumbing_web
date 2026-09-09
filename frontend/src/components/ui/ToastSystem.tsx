"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  MessageSquare,
  Clock,
  AlertCircle,
  WifiOff,
  CalendarCheck,
  Bell,
  Sparkles,
  X,
} from "lucide-react";

export type ToastType =
  | "booking_submitted"
  | "whatsapp_initiated"
  | "service_received"
  | "validation_error"
  | "network_error"
  | "appointment_confirmed"
  | "reminder"
  | "general_success";

export interface ToastMessage {
  id: string;
  type: ToastType;
  title: string;
  message: string;
  duration?: number;
}

interface ToastContextType {
  showToast: (type: ToastType, customMessage?: { title?: string; message?: string }) => void;
  removeToast: (id: string) => void;
  toasts: ToastMessage[];
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const TOAST_PRESETS: Record<
  ToastType,
  { title: string; message: string; icon: React.ElementType; color: string; border: string; bg: string }
> = {
  booking_submitted: {
    title: "Booking Submitted Successfully",
    message: "Ticket #ANP-8492 created. A certified technician will be assigned within 5 minutes.",
    icon: CheckCircle2,
    color: "text-emerald-500",
    border: "border-emerald-500/30",
    bg: "bg-emerald-950/95 text-white",
  },
  whatsapp_initiated: {
    title: "WhatsApp Dispatch Connected",
    message: "Opening secure WhatsApp chat with dispatch desk for instant confirmation.",
    icon: MessageSquare,
    color: "text-emerald-400",
    border: "border-emerald-500/30",
    bg: "bg-slate-900/95 text-white",
  },
  service_received: {
    title: "Service Request Received",
    message: "Our central Noida telemetry hub has logged your priority ticket.",
    icon: Clock,
    color: "text-sky-400",
    border: "border-sky-500/30",
    bg: "bg-slate-900/95 text-white",
  },
  validation_error: {
    title: "Please Check Required Fields",
    message: "Please enter a valid 10-digit mobile number and sector address to proceed.",
    icon: AlertCircle,
    color: "text-rose-400",
    border: "border-rose-500/30",
    bg: "bg-slate-900/95 text-white",
  },
  network_error: {
    title: "Connection Re-establishing",
    message: "Telemetry sync paused. Offline cache active — your booking details are safe.",
    icon: WifiOff,
    color: "text-amber-400",
    border: "border-amber-500/30",
    bg: "bg-slate-900/95 text-white",
  },
  appointment_confirmed: {
    title: "Appointment Confirmed",
    message: "Technician Rajesh Kumar (Badge #ANP-104) locked for your selected time window.",
    icon: CalendarCheck,
    color: "text-indigo-400",
    border: "border-indigo-500/30",
    bg: "bg-slate-900/95 text-white",
  },
  reminder: {
    title: "Service Reminder",
    message: "Your AC Jet Servicing window starts in 45 minutes. Technician en route.",
    icon: Bell,
    color: "text-amber-400",
    border: "border-amber-500/30",
    bg: "bg-slate-900/95 text-white",
  },
  general_success: {
    title: "Action Completed",
    message: "Your preferences have been saved and applied to your account.",
    icon: Sparkles,
    color: "text-cyan-400",
    border: "border-cyan-500/30",
    bg: "bg-slate-900/95 text-white",
  },
};

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback(
    (type: ToastType, customMessage?: { title?: string; message?: string }) => {
      const preset = TOAST_PRESETS[type];
      const id = `${Date.now()}-${Math.random().toString(36).substring(2, 6)}`;
      const newToast: ToastMessage = {
        id,
        type,
        title: customMessage?.title || preset.title,
        message: customMessage?.message || preset.message,
      };

      setToasts((prev) => [newToast, ...prev.slice(0, 3)]);

      setTimeout(() => {
        removeToast(id);
      }, 5000);
    },
    [removeToast]
  );

  return (
    <ToastContext.Provider value={{ showToast, removeToast, toasts }}>
      {children}
      <div
        aria-live="assertive"
        className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-[300] flex flex-col gap-2.5 max-w-sm w-full pointer-events-none"
      >
        <AnimatePresence>
          {toasts.map((toast) => {
            const config = TOAST_PRESETS[toast.type];
            const Icon = config.icon;
            return (
              <motion.div
                key={toast.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className={`pointer-events-auto rounded-2xl p-4 shadow-2xl backdrop-blur-xl border ${config.border} ${config.bg} flex items-start gap-3`}
                role="status"
              >
                <div className="mt-0.5 shrink-0">
                  <Icon className={`w-5 h-5 ${config.color}`} />
                </div>
                <div className="flex-1 min-w-0 pr-1">
                  <h4 className="text-xs font-bold tracking-tight text-white">{toast.title}</h4>
                  <p className="text-[11px] text-slate-300 mt-0.5 leading-relaxed">{toast.message}</p>
                </div>
                <button
                  onClick={() => removeToast(toast.id)}
                  className="text-slate-400 hover:text-white transition-colors p-1 -mr-1 -mt-1 rounded-lg"
                  aria-label="Dismiss notification"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
