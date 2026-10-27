import Link from "next/link";
import { Coffee } from "lucide-react";

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="CafeHub home"
      className="flex items-center gap-2 text-xl font-bold tracking-tight text-ink"
    >
      <Coffee className="size-6 text-secondary" aria-hidden />
      CAFE HUB
    </Link>
  );
}