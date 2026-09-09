import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Share2,
  Share,
  Tv,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { APP_CONFIG, SERVICES } from "@/config/services";
import BrandLogo from "@/components/ui/BrandLogo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800" role="contentinfo" aria-label="Site footer">
      {/* Strong Final CTA Banner */}
      <div className="border-b border-slate-800/80 bg-gradient-to-r from-blue-950 via-slate-950 to-sky-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400 block mb-2">
                Need a Home Service?
              </span>
              <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                Book a Professional Today.
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl">
                Police-verified technicians dispatched across Noida within 28 minutes.
                Fixed digital pricing and a 30-day unconditional rework warranty.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3.5 shrink-0">
              <Link
                href="/booking"
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-sky-500/30 hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Book a Service</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={`https://wa.me/${APP_CONFIG.whatsapp}?text=${encodeURIComponent(
                  "Hi, I need home service assistance. Please help me book an appointment."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 font-bold text-xs uppercase tracking-wider hover:-translate-y-0.5 transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Mission */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="mb-5">
              <BrandLogo theme="dark" />
            </div>

            <p className="text-xs text-slate-400 leading-relaxed mb-6 max-w-sm">
              All Noida Services is the premier residential home maintenance platform
              serving high-rise gated communities across Noida, Greater Noida, and the Noida Expressway.
            </p>

            <div className="space-y-3 mb-6 text-xs text-slate-300">
              <a
                href={`tel:${APP_CONFIG.phone}`}
                className="flex items-center gap-2.5 hover:text-sky-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{APP_CONFIG.phoneDisplay} (24/7 Helpline)</span>
              </a>

              <a
                href={`https://wa.me/${APP_CONFIG.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-emerald-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: {APP_CONFIG.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${APP_CONFIG.email}`}
                className="flex items-center gap-2.5 hover:text-sky-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{APP_CONFIG.email}</span>
              </a>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{APP_CONFIG.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{APP_CONFIG.workingDays} • {APP_CONFIG.workingHours}</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={APP_CONFIG.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/15 transition-colors text-slate-300 hover:text-white"
                aria-label="Facebook"
              >
                <Share2 className="w-3.5 h-3.5" />
              </a>
              <a
                href={APP_CONFIG.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/15 transition-colors text-slate-300 hover:text-white"
                aria-label="Instagram"
              >
                <Share className="w-3.5 h-3.5" />
              </a>
              <a
                href={APP_CONFIG.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/15 transition-colors text-slate-300 hover:text-white"
                aria-label="YouTube"
              >
                <Tv className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* All 8 Services */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              All 8 Services
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-white transition-colors flex items-center gap-2 py-0.5"
                  >
                    <span>{s.emoji}</span>
                    <span>{s.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-xs text-slate-400 mb-6">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/#how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="/#why-us" className="hover:text-white transition-colors">Why Choose Us</Link></li>
              <li><Link href="/#reviews" className="hover:text-white transition-colors">Customer Reviews</Link></li>
              <li><Link href="/#faq" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>

            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Support &amp; Trust
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>28-Min SLA</span>
              </li>
              <li className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>30-Day Warranty</span>
              </li>
              <li className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Police Verified</span>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Service Areas
            </h3>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs text-slate-300 mb-4">
              <div className="font-semibold text-white">Central Noida Hub</div>
              <p className="text-[11px] text-slate-400">Sectors 1, 15, 18, 27, 34, 44, 50, 62, 74, 76, 78</p>
              <div className="font-semibold text-white pt-2 border-t border-white/10">Expressway Societies</div>
              <p className="text-[11px] text-slate-400">Sectors 93A, 107, 128, 137, 143, 150, 168</p>
              <div className="font-semibold text-white pt-2 border-t border-white/10">Greater Noida &amp; Extension</div>
              <p className="text-[11px] text-slate-400">Gaur City, Pari Chowk, Alpha, Beta, Delta</p>
            </div>
            <Link
              href="/#coverage"
              className="text-xs font-bold text-sky-400 hover:text-sky-300 flex items-center gap-1"
            >
              <span>View full coverage radar</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {year} {APP_CONFIG.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <span>•</span>
            <Link href="/refund" className="hover:text-slate-300 transition-colors">Warranty Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
