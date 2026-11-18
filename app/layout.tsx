import type { Metadata } from "next";
import { Sora, Caveat } from "next/font/google";
import { cookies } from "next/headers";
import { isLocale, translate } from "@/lib/i18n/messages";
import { LocaleProvider } from "@/lib/i18n/LocaleProvider";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const cookieLocale = (await cookies()).get("cafehub-locale")?.value;
  const locale = isLocale(cookieLocale) ? cookieLocale : "ar";
  return locale === "ar"
    ? {
        title: translate(locale, "CafeHub — Run your café smarter with one connected system"),
        description: translate(locale, "Connected ordering, payments, WiFi, analytics, and insight for modern cafés."),
      }
    : {
        title: translate(locale, "CafeHub — Run your café smarter with one connected system"),
        description: translate(locale, "Connected ordering, payments, WiFi, analytics, and insight for modern cafés."),
      };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieLocale = (await cookies()).get("cafehub-locale")?.value;
  const locale = isLocale(cookieLocale) ? cookieLocale : "ar";
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} className={`${sora.variable} ${caveat.variable}`}>
      <body className="font-sans antialiased">
        <LocaleProvider initialLocale={locale}>{children}</LocaleProvider>
      </body>
    </html>
  );
}
