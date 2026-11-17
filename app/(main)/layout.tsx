import type { Metadata } from "next";
import { cookies } from "next/headers";
import { isLocale, translate } from "@/lib/i18n/messages";
import Navbar from "../_components/layout/Navbar";
import Footer from "../_components/layout/Footer";

export async function generateMetadata(): Promise<Metadata> {
  const value = (await cookies()).get("cafehub-locale")?.value;
  const locale = isLocale(value) ? value : "ar";
  if (locale === "ar") {
    return {
      metadataBase: new URL("https://www.nuvo-cafe.com"),
      title: { default: translate(locale, "Nuvo | Smart Café POS & QR Ordering"), template: "%s | Nuvo" },
      description: translate(locale, "Nuvo is a smart café POS and QR ordering platform for coffee shops, roasteries, and dine-in venues. Launch faster with WiFi billing, table ordering, and real-time sales insights."),
      applicationName: "Nuvo",
      openGraph: { type: "website", locale: "ar_EG", url: "https://www.nuvo-cafe.com", title: translate(locale, "Nuvo | Smart Café POS & QR Ordering"), description: translate(locale, "Launch a customer ordering app and smart POS in 48 hours with WiFi sales, table QR ordering, and multi-branch café management."), siteName: "Nuvo" },
      twitter: { card: "summary_large_image", title: translate(locale, "Nuvo | Smart Café POS & QR Ordering"), description: translate(locale, "Launch a customer app and café POS in 48 hours. Manage QR orders, WiFi billing, and multi-branch operations from one platform.") },
    };
  }
  return {
  metadataBase: new URL("https://www.nuvo-cafe.com"),
  title: {
    default: translate(locale, "Nuvo | Smart Café POS & QR Ordering"),
    template: "%s | Nuvo",
  },
  description: translate(locale, "Nuvo is a smart café POS and QR ordering platform for coffee shops, roasteries, and dine-in venues. Launch faster with WiFi billing, table ordering, and real-time sales insights."),
  keywords: [
    "café POS",
    "coffee shop POS",
    "QR ordering for cafes",
    "restaurant ordering system",
    "WiFi billing for cafes",
    "table ordering app",
    "smart cafe software",
    "multi-branch cafe management",
  ],
  applicationName: "Nuvo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.nuvo-cafe.com",
    title: translate(locale, "Nuvo | Smart Café POS & QR Ordering"),
    description: translate(locale, "Launch a customer ordering app and smart POS in 48 hours with WiFi sales, table QR ordering, and multi-branch café management."),
    siteName: "Nuvo",
  },
  twitter: {
    card: "summary_large_image",
    title: translate(locale, "Nuvo | Smart Café POS & QR Ordering"),
    description: translate(locale, "Launch a customer app and café POS in 48 hours. Manage QR orders, WiFi billing, and multi-branch operations from one platform."),
  },
  };
}

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
