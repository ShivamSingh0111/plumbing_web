import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import MobileBottomBar from "@/components/ui/MobileBottomBar";
import BookingWizard from "@/components/booking/BookingWizard";
import { APP_CONFIG } from "@/config/services";

export const metadata: Metadata = {
  title: "Book a Service",
  description: `Book certified home technicians in Noida — ${APP_CONFIG.name}. Fast multi-step booking, same-day scheduling available.`,
  robots: { index: true, follow: true },
};

export default function BookingPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-28 md:pt-32 pb-16 min-h-screen bg-slate-50">
        <div className="bg-slate-950 py-12 px-4 mb-10 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-sky-300 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Real-time Dispatch Desk Active
            </div>
            <h1 className="font-sans font-extrabold text-3xl lg:text-4xl text-white mb-3">
              Book a Certified Field Technician
            </h1>
            <p className="text-slate-300 text-sm max-w-lg mx-auto">
              Complete your booking in under 60 seconds. Guaranteed doorstep arrival across{" "}
              <span className="text-white font-medium">{APP_CONFIG.serviceArea}</span>.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <BookingWizard />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileBottomBar />
    </>
  );
}
