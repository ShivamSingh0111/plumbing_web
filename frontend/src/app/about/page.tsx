import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import MobileBottomBar from "@/components/ui/MobileBottomBar";
import { ShieldCheck, Award, Users, Clock, CheckCircle2 } from "lucide-react";
import { APP_CONFIG } from "@/config/services";

export const metadata: Metadata = {
  title: "About Us | All Noida Services",
  description: "Noida's highest-rated home maintenance engineering company.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 md:pt-32 pb-20 min-h-screen bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 pt-8">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-2 block">
              Our Story &amp; Mission
            </span>
            <h1 className="font-sans font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tight mb-6">
              Setting the Benchmark for Professional Home Maintenance
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Founded to eliminate the unpredictability of local contractors, {APP_CONFIG.name} brings
              certified engineering standards, transparent flat digital pricing, and strict background checks to your doorstep.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
              <ShieldCheck className="w-8 h-8 text-sky-600 mb-4" />
              <h2 className="font-bold text-lg text-slate-900 mb-2">100% Background-Checked</h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every field engineer undergoes thorough police verification, skill trade testing, and behavioral safety training.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
              <Clock className="w-8 h-8 text-sky-600 mb-4" />
              <h2 className="font-bold text-lg text-slate-900 mb-2">28-Min Emergency SLA</h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Localized rapid-response hubs across Noida sectors guarantee fast doorstep arrival for pipe bursts and electrical outages.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
              <Award className="w-8 h-8 text-sky-600 mb-4" />
              <h2 className="font-bold text-lg text-slate-900 mb-2">30-Day Workmanship Warranty</h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero arguments. If any repaired component fails within 30 days, we rectify it with zero service fee.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileBottomBar />
    </>
  );
}
