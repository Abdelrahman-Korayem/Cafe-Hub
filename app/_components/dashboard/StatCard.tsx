import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

type StatCardProps = {
  label: string;
  value: string | number;
  hint?: string;
  icon: LucideIcon;
  iconPosition?: "left" | "right";
};

export default function StatCard({
  label,
  value,
  hint,
  icon: Icon,
  iconPosition = "left",
}: StatCardProps) {
  const iconBox = (
    <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-[#f4ecd0] text-secondary">
      <Icon className="size-4" aria-hidden />
    </span>
  );

  return (
    <div className="rounded-xl border border-[#f3dccb] bg-[#fef7f2] p-4 shadow-sm">
      {iconPosition === "left" ? (
        <div className="flex items-center gap-3">
          {iconBox}
          <div className="min-w-0">
            <p className="text-xs text-secondary">{label}</p>
            <p className="text-xl font-bold leading-tight text-primary">
              {value}
            </p>
            {hint && <p className="text-[11px] text-secondary">{hint}</p>}
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-start justify-between gap-2">
            <p className="text-xs text-secondary">{label}</p>
            {iconBox}
          </div>
          <p className={cn("text-2xl font-bold text-primary", hint && "mb-0.5")}>
            {value}
          </p>
          {hint && <p className="text-[11px] text-secondary">{hint}</p>}
        </div>
      )}
    </div>
  );
}