import { Fragment } from "react";
import {
  ArrowRight,
  CreditCard,
  Info,
  KeyRound,
  ListChecks,
  ScanLine,
} from "lucide-react";
import { sampleToken } from "@/features/wifi/data";

const steps = [
  { icon: ScanLine, title: "Scan", text: "Guest scans the WiFi QR at the table" },
  { icon: ListChecks, title: "Select", text: "Guest picks a package from the landing page" },
  { icon: CreditCard, title: "Pay", text: "Payment is taken with the order bill or online" },
  { icon: KeyRound, title: "Connect", text: "A unique token is issued for the purchased duration" },
];

export default function PurchaseFlow() {
  return (
    <section
      aria-labelledby="purchase-flow"
      className="rounded-xl border border-[#f3dccb] bg-[#fef7f2] shadow-sm"
    >
      <div className="border-b border-[#f3dccb] px-4 py-3">
        <h3 id="purchase-flow" className="text-sm font-bold text-primary">
          Paid WiFi purchase flow
        </h3>
        <p className="text-[11px] text-secondary">
          How a guest goes from the table QR to a working connection
        </p>
      </div>

      <div className="space-y-3 p-4">
        <ol className="flex flex-col gap-3 lg:flex-row lg:items-stretch">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <Fragment key={title}>
              {i > 0 && (
                <li
                  aria-hidden
                  className="hidden items-center text-secondary/60 lg:flex"
                >
                  <ArrowRight className="size-4" />
                </li>
              )}
              <li className="flex-1 rounded-xl border border-[#f0dccd] bg-white/60 p-3">
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
            </Fragment>
          ))}
        </ol>

        <p className="flex flex-wrap items-center gap-2 rounded-lg bg-[#fdf1e8] px-3 py-3 text-[11px] text-secondary">
          <Info className="size-3.5 shrink-0" aria-hidden />
          Every paid purchase generates a unique token bound to the package
          duration. Example token:
          <code className="rounded-md bg-white px-2 py-0.5 text-[11px] font-semibold text-primary">
            {sampleToken}
          </code>
        </p>
      </div>
    </section>
  );
}