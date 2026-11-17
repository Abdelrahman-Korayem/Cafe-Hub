import type { Locale } from "./messages";

const numberFormats: Record<Locale, Intl.NumberFormat> = {
  en: new Intl.NumberFormat("en-EG", { maximumFractionDigits: 2 }),
  ar: new Intl.NumberFormat("ar-EG", { maximumFractionDigits: 2 }),
};

export function formatCurrency(
  locale: Locale,
  amount: number,
  stacked = false,
): string {
  const formattedAmount = numberFormats[locale].format(amount);
  if (locale === "ar") {
    return `${formattedAmount}${stacked ? "\n" : " "}ج.م`;
  }
  return stacked ? `EGP\n${formattedAmount}` : `EGP ${formattedAmount}`;
}
