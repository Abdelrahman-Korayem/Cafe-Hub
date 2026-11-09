import {
  Info,
  LogIn,
  LogOut,
  QrCode,
  ScanLine,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/cn";

const N = 21;

function qrCell(x: number, y: number): boolean {
  const corners = [
    [0, 0],
    [N - 7, 0],
    [0, N - 7],
  ];
  for (const [cx, cy] of corners) {
    const dx = x - cx;
    const dy = y - cy;
    if (dx >= -1 && dx <= 7 && dy >= -1 && dy <= 7) {
      if (dx < 0 || dx > 6 || dy < 0 || dy > 6) return false;
      return Math.max(Math.abs(dx - 3), Math.abs(dy - 3)) !== 2;
    }
  }
  return (x * 7 + y * 13 + x * y) % 5 < 2;
}

const cells = Array.from({ length: N * N }, (_, i) => ({
  x: i % N,
  y: Math.floor(i / N),
})).filter((c) => qrCell(c.x, c.y));

const steps = [
  { icon: ScanLine, title: "Scan", text: "Staff scans the QR at the branch tablet" },
  { icon: ShieldCheck, title: "Verify", text: "Identity verified against the staff account" },
  { icon: LogIn, title: "Check in", text: "Check-in recorded with timestamp" },
  { icon: LogOut, title: "Check out", text: "Same flow records the check-out time" },
];

type Props = {
  onSimulate: () => void;
  canSimulate: boolean;
};

export default function QrCheckinConcept({ onSimulate, canSimulate }: Props) {
  return (
    <section
      aria-label="Authenticated QR check-in"
      className="rounded-xl border border-[#f3dccb] bg-[#fef7f2] shadow-sm"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#f3dccb] px-4 py-3">
        <div className="flex items-center gap-3">
          <span className="grid size-8 place-items-center rounded-lg bg-[#f4ecd0] text-secondary">
            <QrCode className="size-4" aria-hidden />
          </span>
          <div>
            <h3 className="flex items-center gap-2 text-sm font-bold text-primary">
              Authenticated QR check-in
              <span className="rounded-full border border-[#bfd0a8] bg-[#f1f5e6] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-[#5d7a3a]">
                Concept
              </span>
            </h3>
            <p className="text-[11px] text-secondary">
              Product concept — not a shipped feature
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onSimulate}
          disabled={!canSimulate}
          title={canSimulate ? undefined : "Everyone has checked in"}
          className={cn(
            "inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold text-white shadow-sm transition-opacity",
            "bg-gradient-to-r from-[#b2693b] to-[#97502f]",
            canSimulate ? "hover:opacity-90" : "cursor-not-allowed opacity-50",
          )}
        >
          <LogIn className="size-3.5" aria-hidden />
          Simulate check-in
        </button>
      </div>

      <div className="grid gap-4 p-4 lg:grid-cols-[170px_1fr]">
        <figure className="rounded-xl border border-[#f0dccd] bg-white/70 p-3 text-center">
          <svg
            viewBox={`0 0 ${N} ${N}`}
            role="img"
            aria-label="Staff QR concept visual"
            className="mx-auto size-28 text-primary"
            shapeRendering="crispEdges"
          >
            {cells.map((c) => (
              <rect
                key={`${c.x}-${c.y}`}
                x={c.x}
                y={c.y}
                width="1"
                height="1"
                fill="currentColor"
              />
            ))}
          </svg>
          <figcaption className="mt-2 text-[10px] text-secondary">
            Staff QR — concept visual
          </figcaption>
        </figure>

        <div className="space-y-3">
          <ol className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <li
                key={title}
                className="rounded-xl border border-[#f0dccd] bg-white/60 p-3"
              >
                <div className="flex items-center gap-2">
                  <span className="grid size-6 place-items-center rounded-md bg-[#f4ecd0] text-secondary">
                    <Icon className="size-3.5" aria-hidden />
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-secondary">
                    Step {i + 1}
                  </span>
                </div>
                <p className="mt-2 text-xs font-bold text-primary">{title}</p>
                <p className="mt-1 text-[11px] leading-snug text-secondary">
                  {text}
                </p>
              </li>
            ))}
          </ol>

          <div className="rounded-xl border border-[#f0c9ad] bg-[#fbe9dc] p-3">
            <p className="flex items-center gap-2 text-xs font-bold text-primary">
              <Info className="size-3.5 text-secondary" aria-hidden />
              Concept note
            </p>
            <p className="mt-1 text-[11px] leading-relaxed text-secondary">
              Authenticated staff QR check-in/out is the product concept. The
              attendance controller and device configuration are still subject
              to technical decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}