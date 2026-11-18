"use client";

import { Languages } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, toggleLocale, t } = useLocale();
  const nextLanguage = locale === "ar" ? "English" : "Arabic";

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={`${t("Language")}: ${t(nextLanguage)}`}
      title={`${t("Language")}: ${t(nextLanguage)}`}
      className={`inline-flex min-h-9 items-center justify-center gap-2 rounded-lg border border-[#f0dccd] bg-white/70 px-3 text-xs font-semibold text-primary transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary ${className}`}
    >
      <Languages className="size-4" aria-hidden="true" />
      <span>{locale === "ar" ? "EN" : "عربي"}</span>
    </button>
  );
}
