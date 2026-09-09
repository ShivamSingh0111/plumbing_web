import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import TrustStatsSection from "@/components/sections/TrustStatsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import BeforeAfterSection from "@/components/sections/BeforeAfterSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import EmergencyCTASection from "@/components/sections/EmergencyCTASection";
import ServiceAreaSection from "@/components/sections/ServiceAreaSection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/footer/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import MobileBottomBar from "@/components/ui/MobileBottomBar";
import ToastDemoBar from "@/components/ui/ToastDemoBar";
import { APP_CONFIG } from "@/config/services";

export const metadata: Metadata = {
  title: `${APP_CONFIG.name} | Premium Home Services in Noida`,
  description:
    "Reliable home services, right when you need them. Professional plumbing, AC, electrical, and appliance repair services delivered by trusted technicians.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <TrustStatsSection />
        <ServicesSection />
        <BeforeAfterSection />
        <HowItWorksSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <EmergencyCTASection />
        <ServiceAreaSection />
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileBottomBar />
      <ToastDemoBar />
    </>
  );
}
