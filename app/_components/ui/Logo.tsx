import Link from "next/link";
import { cn } from "@/lib/cn";
import Image from "next/image";

export default function Logo({ light }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className={cn(
        "text-xl tracking-tight",
        light ? "text-white" : "text-brand-700"
      )}
      aria-label="CafeHub home"
    >
          <Image
            src="/logo/navlogo.png"
            alt="Nuvo logo"
            width={96}
            height={40}
            priority
            className="h-10 w-auto"
          />
    </Link>
  );
}
