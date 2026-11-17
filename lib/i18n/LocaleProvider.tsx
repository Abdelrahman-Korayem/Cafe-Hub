"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { isLocale, translate, type Locale } from "./messages";

type LocaleContextValue = {
  locale: Locale;
  direction: "rtl" | "ltr";
  t: (key: string) => string;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  children,
  initialLocale,
}: Readonly<{ children: React.ReactNode; initialLocale: Locale }>) {
  const [locale, setCurrentLocale] = useState(initialLocale);
  const value = useMemo<LocaleContextValue>(() => {
    const setLocale = (nextLocale: Locale) => {
      if (!isLocale(nextLocale)) return;
      setCurrentLocale(nextLocale);
      document.documentElement.lang = nextLocale;
      document.documentElement.dir = nextLocale === "ar" ? "rtl" : "ltr";
      document.cookie = `cafehub-locale=${nextLocale}; Path=/; Max-Age=31536000; SameSite=Lax${location.protocol === "https:" ? "; Secure" : ""}`;
    };
    return {
      locale,
      direction: locale === "ar" ? "rtl" : "ltr",
      t: (key) => translate(locale, key),
      setLocale,
      toggleLocale: () => setLocale(locale === "ar" ? "en" : "ar"),
    };
  }, [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be used inside <LocaleProvider>");
  return context;
}
