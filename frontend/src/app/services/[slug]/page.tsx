import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import MobileBottomBar from "@/components/ui/MobileBottomBar";
import { SERVICES, SERVICE_MAP, APP_CONFIG, FAQS, TESTIMONIALS } from "@/config/services";
import { formatPrice } from "@/lib/utils";
import {
  CheckCircle2,
  Clock,
  ArrowRight,
  Phone,
  MessageSquare,
  ShieldCheck,
  Star,
  Award,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICE_MAP[slug];
  if (!service) return {};
  return {
    title: `${service.name} in Noida | ${APP_CONFIG.shortName}`,
    description: `${service.description} Same-day emergency response across Noida & Expressway. Starting at ${formatPrice(
      service.startingPrice
    )}.`,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICE_MAP[slug];
  if (!service) notFound();

  const serviceReviews =
    TESTIMONIALS.filter((t) => t.serviceSlug === service.slug).length > 0
      ? TESTIMONIALS.filter((t) => t.serviceSlug === service.slug)
      : TESTIMONIALS.slice(0, 2);

  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-28 md:pt-32 min-h-screen bg-white">
        {/* Large HD Service Hero Header */}
        <section className="relative bg-slate-950 text-white overflow-hidden py-16 lg:py-24">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <Image
              src={service.image}
              alt={service.name}
              fill
              priority
              sizes="100vw"
              className="object-cover blur-sm"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/80" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/#services" className="hover:text-white transition-colors">Services</Link>
              <span>/</span>
              <span className="text-sky-400 font-semibold">{service.name}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider mb-4">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                  <span>{service.badge || "Certified Master Engineers"}</span>
                </div>

                <h1 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
                  {service.emoji} {service.name}
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 max-w-xl">
                  {service.description}
                </p>

                <div className="flex items-center gap-4 text-xs text-slate-300 mb-8 flex-wrap">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-sky-400" />
                    <span>28-Min Fast Response</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-emerald-400" />
                    <span>30-Day Warranty</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span>4.9 / 5 Rated</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href={`/booking?service=${service.slug}`}
                    className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-sky-500/25 transition-all flex items-center gap-2"
                  >
                    <span>Book {service.shortName} Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={`https://wa.me/${APP_CONFIG.whatsapp}?text=${encodeURIComponent(
                      `Hi, I need ${service.name.toLowerCase()}. Please help me book an appointment.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp Us</span>
                  </a>

                  <a
                    href={`tel:${APP_CONFIG.phone}`}
                    className="px-4 py-3.5 rounded-xl text-slate-300 hover:text-white font-semibold text-xs flex items-center gap-1.5"
                  >
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span>{APP_CONFIG.phoneDisplay}</span>
                  </a>
                </div>
              </div>

              {/* HD Photography Card */}
              <div className="lg:col-span-5 relative">
                <div className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-white/15 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-semibold">Standard Rate Card</span>
                      <p className="text-sm font-extrabold text-sky-400">
                        Starting from {formatPrice(service.startingPrice)}
                      </p>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/20 px-2.5 py-1 rounded-full border border-emerald-500/30">
                      Zero Surge Price
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Problems We Fix */}
        <section className="py-16 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight mb-2">
                Common {service.shortName} Problems We Resolve
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Select your problem below for an instant price estimate and rapid dispatch.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.problems.map((p) => (
                <div
                  key={p.id}
                  className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-sky-300 transition-all flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-900 leading-snug">{p.label}</h3>
                      {p.price && (
                        <span className="text-[11px] text-slate-500">Est. from {formatPrice(p.price)}</span>
                      )}
                    </div>
                  </div>

                  <Link
                    href={`/booking?service=${service.slug}&problem=${p.id}`}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-sky-500 hover:text-white text-slate-700 text-xs font-bold transition-colors shrink-0"
                  >
                    Fix This
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Available Services & Pricing Card */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-6">
                <span className="text-xs font-extrabold uppercase tracking-wider text-sky-600 mb-2 block">
                  Standardized Rate Card
                </span>
                <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight mb-4">
                  Available Services &amp; Transparent Rates
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  No hidden travel fees or surprise add-ons. Our certified technicians share an
                  itemized digital estimate before turning a single screw.
                </p>

                <div className="space-y-3">
                  {service.availableServices?.map((item) => (
                    <div
                      key={item.name}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between"
                    >
                      <div>
                        <h4 className="text-xs font-bold text-slate-900">{item.name}</h4>
                        <span className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                          <Clock className="w-3 h-3 text-slate-400" />
                          <span>Duration: ~{item.duration}</span>
                        </span>
                      </div>
                      <span className="text-sm font-extrabold text-sky-600 bg-white px-3 py-1 rounded-xl border border-slate-200 shadow-sm">
                        {formatPrice(item.price)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Execution Process */}
              <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-xl">
                <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400 mb-2 block">
                  Strict Engineering Protocol
                </span>
                <h3 className="text-xl font-bold text-white mb-6">Our 5-Step Service Process</h3>
                <div className="space-y-4">
                  {service.process.map((step, idx) => (
                    <div key={step} className="flex items-start gap-3.5">
                      <div className="w-7 h-7 rounded-full bg-sky-500/20 text-sky-400 border border-sky-500/40 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        0{idx + 1}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">{step}</h4>
                        <p className="text-[11px] text-slate-400 mt-0.5">
                          Conducted in adherence to high-rise safety and quiet-hours society protocols.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews for this service */}
        <section className="py-16 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight mb-2">
                What Homeowners Say About Our {service.shortName}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Verified feedback from high-rise societies in Noida.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {serviceReviews.map((rev) => (
                <div
                  key={rev.id}
                  className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-200 shrink-0">
                        <Image src={rev.avatar} alt={rev.name} fill sizes="40px" className="object-cover" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900">{rev.name}</h4>
                        <p className="text-[11px] text-slate-500">{rev.society}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-amber-400 mb-3">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed italic">
                      "{rev.review}"
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Verified Booking</span>
                    <span>{rev.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight mb-8 text-center">
              Frequently Asked Questions — {service.shortName}
            </h2>
            <div className="space-y-3">
              {FAQS.slice(0, 4).map((f) => (
                <div key={f.question} className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-2">{f.question}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{f.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href={`/booking?service=${service.slug}`}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-sky-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
              >
                <span>Book {service.name} Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileBottomBar />
    </>
  );
}
