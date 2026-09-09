import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import MobileBottomBar from "@/components/ui/MobileBottomBar";
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowRight } from "lucide-react";
import { APP_CONFIG } from "@/config/services";

export const metadata: Metadata = {
  title: "Contact Us | All Noida Services",
  description: "Reach our central Noida dispatch desk 24/7.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 md:pt-32 pb-20 min-h-screen bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 pt-8">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-2 block">
              24/7 Helpline &amp; Dispatch
            </span>
            <h1 className="font-sans font-extrabold text-4xl text-slate-900 tracking-tight mb-4">
              Contact Our Central Dispatch Desk
            </h1>
            <p className="text-sm text-slate-600">
              Have an urgent emergency or need a personalized quote? We are always reachable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <h2 className="font-bold text-lg text-slate-900 mb-6">Direct Helplines</h2>

                <div className="space-y-5 text-sm">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 block">Emergency Phone Call</span>
                      <a href={`tel:${APP_CONFIG.phone}`} className="font-bold text-slate-900 hover:text-sky-600">
                        {APP_CONFIG.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 block">WhatsApp Dispatch</span>
                      <a
                        href={`https://wa.me/${APP_CONFIG.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-emerald-600 hover:underline"
                      >
                        +{APP_CONFIG.whatsapp}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 block">Official Support Email</span>
                      <a href={`mailto:${APP_CONFIG.email}`} className="font-semibold text-slate-900 hover:text-sky-600">
                        {APP_CONFIG.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 block">Central Hub Location</span>
                      <span className="font-semibold text-slate-900">{APP_CONFIG.address}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-500 flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Operating hours: 24/7 for emergency dispatch</span>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-950 text-white shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-sky-400 block mb-2">
                  Fastest Booking
                </span>
                <h2 className="font-bold text-2xl text-white mb-4">Book Your Service in 60 Seconds</h2>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  Skip the phone queues and choose your required category, date, and preferred 2-hour doorstep arrival slot using our multi-step booking engine.
                </p>
              </div>

              <a
                href="/booking"
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-lg shadow-sky-500/30 transition-all cursor-pointer"
              >
                <span>Launch Booking Engine</span>
                <ArrowRight className="w-4 h-4" />
              </a>
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
