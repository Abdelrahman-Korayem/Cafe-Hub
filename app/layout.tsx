import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "./_components/layout/Navbar";
import "./globals.css";
import Footer from "./_components/layout/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nuvo-cafe.com"),
  title: {
    default: "Nuvo | Smart Café POS & QR Ordering",
    template: "%s | Nuvo",
  },
  description:
    "Nuvo is a smart café POS and QR ordering platform for coffee shops, roasteries, and dine-in venues. Launch faster with WiFi billing, table ordering, and real-time sales insights.",
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
    title: "Nuvo | Smart Café POS & QR Ordering",
    description:
      "Launch a customer ordering app and smart POS in 48 hours with WiFi sales, table QR ordering, and multi-branch café management.",
    siteName: "Nuvo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuvo | Smart Café POS & QR Ordering",
    description:
      "Launch a customer app and café POS in 48 hours. Manage QR orders, WiFi billing, and multi-branch operations from one platform.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={jakarta.variable}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}