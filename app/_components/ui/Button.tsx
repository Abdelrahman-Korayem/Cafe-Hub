import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type ButtonProps = React.ComponentProps<typeof Link> & {
  arrow?: boolean;
};

export default function Button({
  arrow = true,
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <Link
      {...rest}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        className,
      )}
    >
      {children}
      {arrow && <ArrowRight className="directional-arrow size-4" aria-hidden />}
    </Link>
  );
}