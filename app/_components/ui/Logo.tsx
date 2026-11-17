"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export default function Logo() {
  const { t } = useLocale();
  return (
    <Link
      href="/"
      aria-label={t("CafeHub home")}
      className="flex items-center gap-2 text-xl font-bold tracking-tight text-ink"
    >
      <Image
        src="/icons/nav/navicon.svg"
        alt=""
        width={30}
        height={30}
        className="h-9 w-auto"
        priority
      />
      CAFE HUB
    </Link>
  );
}
