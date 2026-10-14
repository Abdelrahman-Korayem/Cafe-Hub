import { cn } from "@/lib/cn";

export default function Pill({
  tone = "green",
  className,
  children,
}: {
  tone?: "green" | "amber" | "white" | "red";
  className?: string;
  children: React.ReactNode;
}) {
  const tones = {
    green: "bg-green-100 text-green-800",
    amber: "bg-amber-100 text-amber-800",
    white: "bg-white text-brand-700 ring-1 ring-brand-200",
    red: "bg-red-100 text-red-800",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
