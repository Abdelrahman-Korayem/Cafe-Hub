import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export const inputClass =
  "w-full bg-transparent text-sm text-ink placeholder:text-ink/40 focus:outline-none";

type FormFieldProps = {
  id: string;
  label: string;
  icon?: ReactNode;
  action?: ReactNode;
  hint?: ReactNode;
  error?: string;
  children: ReactNode;
};

export default function FormField({
  id,
  label,
  icon,
  action,
  hint,
  error,
  children,
}: FormFieldProps) {
  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <label htmlFor={id} className="text-xs font-semibold text-ink">
          {label}
        </label>
        {hint}
      </div>

      <div
        className={cn(
          "mt-2 flex items-center gap-3 rounded-lg border bg-[#f6efe4] px-3.5 py-3",
          error
            ? "border-red-600 focus-within:border-red-600"
            : "border-sand focus-within:border-secondary",
        )}
      >
        {icon && <span className="shrink-0 text-ink/50">{icon}</span>}
        {children}
        {action}
      </div>

      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}