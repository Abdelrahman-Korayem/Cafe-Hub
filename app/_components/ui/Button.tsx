import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "light" | "link";

const styles: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-brand-700 rounded-lg px-5 py-2.5 shadow-sm",
  light:
    "bg-light ounded-full border-2 border-brand-50 text-brand-700 hover:bg-brand-50 rounded-lg px-5 py-2.5",
  link: "text-ink  hover:text-brand-700 px-5 py-2.5  bg-emerald-50 p-2 rounded-xl text-emerald-600 font-bold",
};

export default function Button({
  href,
  variant = "primary",
  arrow = true,
  className,
  children,
}: {
  href: string;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600",
        styles[variant],
        className,
      )}
    >
      {children}
      {arrow && <ArrowRight className="size-4" aria-hidden />}
    </Link>
  );
}
