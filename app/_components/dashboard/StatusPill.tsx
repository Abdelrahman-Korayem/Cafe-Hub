import { cn } from "@/lib/cn";

type Tone = "success" | "warning" | "danger" | "neutral";

const tones: Record<Tone, string> = {
  success: "bg-[#eef0c9] text-[#6a6b2b]",
  warning: "bg-[#f9e6c9] text-[#9a5f1d]",
  danger: "bg-[#f8dcd5] text-[#a2402a]",
  neutral: "bg-[#efe3d8] text-secondary",
};

export default function StatusPill({
  tone = "neutral",
  dot = true,
  children,
}: {
  tone?: Tone;
  dot?: boolean;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-medium",
        tones[tone],
      )}
    >
      {dot && <span aria-hidden className="size-1.5 rounded-full bg-current" />}
      {children}
    </span>
  );
}