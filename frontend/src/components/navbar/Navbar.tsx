"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { APP_CONFIG, SERVICES } from "@/config/services";
import BrandLogo from "@/components/ui/BrandLogo";

const ESSENTIAL_LINKS = [
  { label: "Services", href: "/#services", hasDropdown: true },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-[200] px-4 pt-3.5 sm:pt-4 pointer-events-none select-none">
      {/* MINIMALIST FLOATING ACRYLIC PILL */}
      <div className="max-w-5xl mx-auto pointer-events-auto">
        <div
          className={`rounded-full transition-all duration-300 border flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 ${
            isScrolled
              ? "bg-slate-950/90 backdrop-blur-2xl border-white/15 shadow-[0_16px_40px_rgba(0,0,0,0.6)]"
              : "bg-slate-900/70 backdrop-blur-xl border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
          }`}
        >
          {/* 1. BRAND LOGO */}
          <Link href="/" aria-label="All Noida Services Home" className="flex items-center">
            <BrandLogo theme="dark" />
          </Link>

          {/* 2. CLEAN CENTER NAVIGATION (ONLY ESSENTIALS) */}
          <nav className="hidden md:flex items-center gap-1" role="navigation" aria-label="Main">
            {ESSENTIAL_LINKS.map((link) =>
              link.hasDropdown ? (
                <div key={link.label} className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    aria-expanded={isServicesOpen}
                    onClick={() => setIsServicesOpen((v) => !v)}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                      isServicesOpen
                        ? "text-sky-400 bg-white/10"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isServicesOpen ? "rotate-180 text-sky-400" : "text-slate-400"
                      }`}
                    />
                  </button>

                  {/* MINIMAL SERVICES DROPDOWN */}
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[440px] bg-slate-950/95 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl p-2.5 grid grid-cols-2 gap-1.5 z-50"
                      >
                        {SERVICES.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            onClick={() => setIsServicesOpen(false)}
                            className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-white/5 transition-colors group"
                          >
                            <span className="text-base shrink-0">{s.emoji}</span>
                            <div className="min-w-0">
                              <p className="text-xs font-semibold text-white group-hover:text-sky-400 transition-colors truncate">
                                {s.shortName}
                              </p>
                              <p className="text-[10px] text-slate-400">from ₹{s.startingPrice}</p>
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* 3. RIGHT CALL & BOOKING ACTION */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${APP_CONFIG.phone}`}
              className="hidden lg:flex items-center gap-1.5 text-xs text-slate-300 hover:text-white font-medium px-3 py-1.5 rounded-full hover:bg-white/5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>{APP_CONFIG.phoneDisplay}</span>
            </a>

            <Link
              href="/booking"
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white text-xs font-bold shadow-lg shadow-sky-500/20 hover:shadow-sky-500/35 transition-all duration-200 cursor-pointer"
            >
              <span>Book Service</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileOpen((v) => !v)}
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              className="md:hidden p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* 4. MOBILE MINIMALIST SHEET */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto fixed inset-x-4 top-20 bg-slate-950/98 backdrop-blur-3xl rounded-3xl border border-white/10 p-5 shadow-2xl text-white md:hidden max-h-[80vh] overflow-y-auto"
          >
            <nav className="flex flex-col gap-1 pb-3 border-b border-white/10">
              {ESSENTIAL_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="px-3 py-2 rounded-xl text-sm font-semibold text-slate-200 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="py-3">
              <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block mb-2 px-1">
                Popular Services
              </span>
              <div className="grid grid-cols-2 gap-1.5">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    onClick={() => setIsMobileOpen(false)}
                    className="flex items-center gap-2 p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <span>{s.emoji}</span>
                    <span className="text-xs font-medium text-slate-200 truncate">{s.shortName}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <Link
                href="/booking"
                onClick={() => setIsMobileOpen(false)}
                className="w-full py-2.5 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-center text-xs shadow-lg flex items-center justify-center gap-1.5"
              >
                <span>Book Service Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href={`tel:${APP_CONFIG.phone}`}
                className="w-full py-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 font-medium text-center text-xs flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3 h-3 text-sky-400" />
                <span>Call {APP_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
