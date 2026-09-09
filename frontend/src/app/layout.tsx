import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ToastProvider } from "@/components/ui/ToastSystem";
import { APP_CONFIG } from "@/config/services";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0284c7",
};

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: `${APP_CONFIG.name} | Premium Home Services in Noida`,
    template: `%s | ${APP_CONFIG.shortName}`,
  },
  description:
    "Reliable home services, right when you need them. Expert plumbing, AC repair, electrical, washing machine, refrigerator & home maintenance in Noida. 28-min SLA, same-day service.",
  authors: [{ name: APP_CONFIG.name }],
  keywords: [
    "Plumbing Noida",
    "AC repair Noida",
    "Electrician Noida",
    "Washing machine repair Noida",
    "Refrigerator service Noida",
    "Home maintenance Noida",
    "All Noida Services",
  ],
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-slate-900 antialiased selection:bg-sky-500 selection:text-white">
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
