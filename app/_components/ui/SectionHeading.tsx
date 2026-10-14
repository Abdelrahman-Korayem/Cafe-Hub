import { cn } from "@/lib/cn";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light,
  align = "center",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  light?: boolean;
  align?: "center" | "left";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-[11px] font-medium uppercase tracking-[0.14em]",
            light ? "text-brand-200" : "text-brand-700/70",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-4xl",
          light ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-4 text-base", light ? "text-brand-100" : "text-ink/65")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
