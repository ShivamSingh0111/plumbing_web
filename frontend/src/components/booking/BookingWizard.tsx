"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  User,
  Phone,
  MessageSquare,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Copy,
  Check,
} from "lucide-react";
import { SERVICES, TIME_SLOTS, PINCODE_AREAS, APP_CONFIG } from "@/config/services";
import { formatPrice } from "@/lib/utils";
import { useToast } from "@/components/ui/ToastSystem";

const STEPS = [
  { id: 1, label: "Service", description: "Select category" },
  { id: 2, label: "Problem", description: "Specify repair issue" },
  { id: 3, label: "Date & Time", description: "Preferred window" },
  { id: 4, label: "Customer Details", description: "Name, phone & address" },
  { id: 5, label: "Confirmation", description: "Ticket booked" },
];

export default function BookingWizard() {
  const { showToast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedServiceSlug, setSelectedServiceSlug] = useState("plumbing");
  const [selectedProblemId, setSelectedProblemId] = useState("");
  const [customProblem, setCustomProblem] = useState("");
  const [selectedDate, setSelectedDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  });
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(TIME_SLOTS[1]);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerSector, setCustomerSector] = useState("201301");
  const [additionalMessage, setAdditionalMessage] = useState("");
  const [bookingTicket, setBookingTicket] = useState("");
  const [copied, setCopied] = useState(false);

  const selectedService = SERVICES.find((s) => s.slug === selectedServiceSlug) || SERVICES[0];

  const handleNext = () => {
    if (currentStep === 1) {
      if (!selectedServiceSlug) {
        showToast("validation_error", { message: "Please select a service category to continue." });
        return;
      }
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (!selectedProblemId && !customProblem.trim()) {
        showToast("validation_error", { message: "Please select the specific problem or write a description." });
        return;
      }
      setCurrentStep(3);
    } else if (currentStep === 3) {
      if (!selectedDate || !selectedTimeSlot) {
        showToast("validation_error", { message: "Please select your preferred date and time window." });
        return;
      }
      setCurrentStep(4);
    } else if (currentStep === 4) {
      if (!customerName.trim()) {
        showToast("validation_error", { message: "Please enter your full name." });
        return;
      }
      if (!customerPhone.trim() || customerPhone.replace(/\D/g, "").length < 10) {
        showToast("validation_error", { message: "Please enter a valid 10-digit mobile number." });
        return;
      }
      if (!customerAddress.trim()) {
        showToast("validation_error", { message: "Please enter your society / house address." });
        return;
      }

      const ticketNum = `ANP-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingTicket(ticketNum);

      showToast("booking_submitted", {
        title: "Service Booked Successfully!",
        message: `Ticket #${ticketNum} assigned to local Noida sector hub.`,
      });

      setCurrentStep(5);
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const copyTicket = () => {
    if (!bookingTicket) return;
    navigator.clipboard.writeText(bookingTicket);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const selectedProblemObj = selectedService.problems.find((p) => p.id === selectedProblemId);

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Indicator */}
      <div className="mb-10" aria-label="Booking Progress">
        <div className="relative flex items-center justify-between">
          <div className="absolute top-5 left-0 right-0 h-1 bg-slate-200 -z-0" />
          <div
            className="absolute top-5 left-0 h-1 bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 transition-all duration-500 -z-0"
            style={{ width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%` }}
          />

          {STEPS.map((step) => {
            const isCompleted = step.id < currentStep;
            const isCurrent = step.id === currentStep;

            return (
              <div key={step.id} className="flex flex-col items-center relative z-10">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                    isCompleted
                      ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/30"
                      : isCurrent
                      ? "bg-sky-600 text-white ring-4 ring-sky-100 shadow-lg"
                      : "bg-white text-slate-400 border-2 border-slate-300"
                  }`}
                >
                  {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : step.id}
                </div>
                <span
                  className={`text-[11px] font-bold mt-2 truncate ${
                    isCurrent ? "text-sky-600 font-extrabold" : "text-slate-500"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Wizard Form Card */}
      <div className="rounded-3xl bg-white border border-slate-200/90 shadow-xl p-6 sm:p-10">
        <AnimatePresence mode="wait">
          {/* STEP 1: SERVICE SELECTION */}
          {currentStep === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <div className="mb-6">
                <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block mb-1">
                  Step 01 / 05
                </span>
                <h2 className="font-sans font-extrabold text-2xl text-slate-900">
                  Select Service Discipline
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Choose the category that best matches your repair or maintenance requirement.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                {SERVICES.map((s) => {
                  const isSelected = s.slug === selectedServiceSlug;
                  return (
                    <div
                      key={s.slug}
                      onClick={() => {
                        setSelectedServiceSlug(s.slug);
                        setSelectedProblemId("");
                      }}
                      className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        isSelected
                          ? "border-sky-500 bg-sky-50/50 shadow-md ring-1 ring-sky-500"
                          : "border-slate-200/80 bg-slate-50 hover:bg-white hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl p-2 rounded-xl bg-white shadow-sm">{s.emoji}</span>
                        <div>
                          <h3 className="text-xs font-bold text-slate-900">{s.name}</h3>
                          <span className="text-[11px] text-slate-500">
                            From {formatPrice(s.startingPrice)}
                          </span>
                        </div>
                      </div>

                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          isSelected ? "border-sky-600 bg-sky-600 text-white" : "border-slate-300"
                        }`}
                      >
                        {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* STEP 2: PROBLEM SELECTION */}
          {currentStep === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <div className="mb-6">
                <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block mb-1">
                  Step 02 / 05
                </span>
                <h2 className="font-sans font-extrabold text-2xl text-slate-900">
                  Select {selectedService.name} Problem
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Pick the common issue or describe what requires inspection.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {selectedService.problems.map((p) => {
                  const isSelected = selectedProblemId === p.id;
                  return (
                    <div
                      key={p.id}
                      onClick={() => {
                        setSelectedProblemId(p.id);
                        setCustomProblem("");
                      }}
                      className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? "border-sky-500 bg-sky-50/50 shadow-md ring-1 ring-sky-500"
                          : "border-slate-200/80 bg-slate-50 hover:bg-white hover:border-slate-300"
                      }`}
                    >
                      <div>
                        <h4 className="text-xs font-bold text-slate-900">{p.label}</h4>
                        {p.price && (
                          <span className="text-[10px] text-slate-500">Est. {formatPrice(p.price)}</span>
                        )}
                      </div>
                      <div
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          isSelected ? "border-sky-600 bg-sky-600 text-white" : "border-slate-300"
                        }`}
                      >
                        {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mb-6">
                <label htmlFor="custom-issue-desc" className="text-xs font-bold text-slate-700 block mb-1.5">
                  Or Describe Other / Specific Issue:
                </label>
                <input
                  id="custom-issue-desc"
                  type="text"
                  placeholder="e.g. Master bedroom split AC making rattling noise..."
                  value={customProblem}
                  onChange={(e) => {
                    setCustomProblem(e.target.value);
                    if (e.target.value.trim()) setSelectedProblemId("");
                  }}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-xs focus:bg-white focus:ring-2 focus:ring-sky-500 focus:outline-none"
                />
              </div>
            </motion.div>
          )}

          {/* STEP 3: DATE & TIME */}
          {currentStep === 3 && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <div className="mb-6">
                <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block mb-1">
                  Step 03 / 05
                </span>
                <h2 className="font-sans font-extrabold text-2xl text-slate-900">
                  Select Preferred Date &amp; Time
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Choose when you want the certified technician to arrive.
                </p>
              </div>

              <div className="mb-6">
                <label htmlFor="booking-date-input" className="text-xs font-bold text-slate-700 block mb-2 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-sky-600" />
                  <span>Service Date</span>
                </label>
                <input
                  id="booking-date-input"
                  type="date"
                  value={selectedDate}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold text-slate-900 focus:bg-white focus:ring-2 focus:ring-sky-500 focus:outline-none cursor-pointer"
                />
              </div>

              <div className="mb-6">
                <label className="text-xs font-bold text-slate-700 block mb-2 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-sky-600" />
                  <span>Doorstep Time Window</span>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {TIME_SLOTS.map((slot) => {
                    const isSelected = selectedTimeSlot === slot;
                    return (
                      <div
                        key={slot}
                        onClick={() => setSelectedTimeSlot(slot)}
                        className={`p-3.5 rounded-xl border-2 transition-all cursor-pointer flex items-center justify-between text-xs font-medium ${
                          isSelected
                            ? "border-sky-500 bg-sky-50/50 text-slate-900 font-bold shadow-sm"
                            : "border-slate-200/80 bg-slate-50 text-slate-600 hover:bg-white"
                        }`}
                      >
                        <span>{slot}</span>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-sky-600" />}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Same-day appointment slots are guaranteed if booked before 7:00 PM.</span>
              </div>
            </motion.div>
          )}

          {/* STEP 4: CUSTOMER DETAILS */}
          {currentStep === 4 && (
            <motion.div
              key="step-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <div className="mb-6">
                <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block mb-1">
                  Step 04 / 05
                </span>
                <h2 className="font-sans font-extrabold text-2xl text-slate-900">
                  Customer &amp; Address Details
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Technicians check in with your gated society security using these details.
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label htmlFor="customer-name-input" className="text-xs font-bold text-slate-700 block mb-1 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-sky-600" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    id="customer-name-input"
                    type="text"
                    required
                    placeholder="e.g. Vikram Malhotra"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-xs focus:bg-white focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="customer-phone-input" className="text-xs font-bold text-slate-700 block mb-1 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-sky-600" />
                    <span>10-Digit Mobile Number *</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500">
                      +91
                    </span>
                    <input
                      id="customer-phone-input"
                      type="tel"
                      required
                      placeholder="98110 00000"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-semibold focus:bg-white focus:ring-2 focus:ring-sky-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="customer-sector-select" className="text-xs font-bold text-slate-700 block mb-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-sky-600" />
                    <span>Noida Sector / Area *</span>
                  </label>
                  <select
                    id="customer-sector-select"
                    value={customerSector}
                    onChange={(e) => setCustomerSector(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium focus:bg-white focus:ring-2 focus:ring-sky-500 focus:outline-none cursor-pointer"
                  >
                    {Object.entries(PINCODE_AREAS).map(([pin, area]) => (
                      <option key={pin} value={pin}>
                        📍 {area} (PIN: {pin})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="customer-address-input" className="text-xs font-bold text-slate-700 block mb-1">
                    Flat No., Tower &amp; Society Name *
                  </label>
                  <input
                    id="customer-address-input"
                    type="text"
                    required
                    placeholder="e.g. Tower 4, Flat 1204, Mahagun Moderne, Sector 78"
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-xs focus:bg-white focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="additional-message-input" className="text-xs font-bold text-slate-700 block mb-1">
                    Additional Instructions for Technician (Optional)
                  </label>
                  <textarea
                    id="additional-message-input"
                    rows={2}
                    placeholder="e.g. Call before ringing doorbell; gate pass code #8821..."
                    value={additionalMessage}
                    onChange={(e) => setAdditionalMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-xs focus:bg-white focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 5: CONFIRMATION */}
          {currentStep === 5 && (
            <motion.div
              key="step-5"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center py-4"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/20">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600">
                Booking Confirmed
              </span>
              <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-slate-900 mt-1 mb-2">
                Technician Dispatched
              </h2>
              <p className="text-xs text-slate-600 max-w-md mx-auto mb-6">
                Your service order has been successfully routed to the nearest Noida sector hub.
              </p>

              {/* Ticket Card */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 max-w-md mx-auto text-left mb-6 shadow-sm">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400">Order Reference</span>
                    <div className="text-base font-extrabold text-slate-900 font-mono">{bookingTicket}</div>
                  </div>
                  <button
                    onClick={copyTicket}
                    className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-slate-900 text-xs font-semibold flex items-center gap-1 shadow-sm transition-all cursor-pointer"
                    title="Copy Ticket"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? "Copied" : "Copy"}</span>
                  </button>
                </div>

                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Service:</span>
                    <span className="font-bold text-slate-800">{selectedService.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Issue:</span>
                    <span className="font-medium text-slate-800">
                      {selectedProblemObj ? selectedProblemObj.label : customProblem || "General Inspection"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Scheduled Date:</span>
                    <span className="font-bold text-slate-800">{selectedDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Time Window:</span>
                    <span className="font-bold text-slate-800">{selectedTimeSlot}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Customer:</span>
                    <span className="font-bold text-slate-800">{customerName} (+91 {customerPhone})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Address:</span>
                    <span className="font-medium text-slate-800 truncate max-w-[200px]">{customerAddress}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`https://wa.me/${APP_CONFIG.whatsapp}?text=${encodeURIComponent(
                    `Hi, I have booked Ticket #${bookingTicket} for ${selectedService.name}. Please share technician arrival status.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Sync on WhatsApp</span>
                </a>

                <a
                  href={`tel:${APP_CONFIG.phone}`}
                  className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Call Central Desk</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {currentStep < 5 && (
          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            ) : (
              <div />
            )}

            <button
              type="button"
              onClick={handleNext}
              className="px-7 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-sky-500/25 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>{currentStep === 4 ? "Confirm & Book Service" : "Continue"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
