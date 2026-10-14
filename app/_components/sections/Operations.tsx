import { Check } from "lucide-react";
import Container from "@/app/_components/ui/Container";
import SectionHeading from "@/app/_components/ui/SectionHeading";

const roles = [
  {
    label: "Captain / Cashier staff",
    title: "Confirm what needs a person.",
    items: [
      "Receive incoming orders",
      "Confirm cash receipt",
      "Look up a WiFi token",
      "Help with customer issues",
    ],
  },
  {
    label: "Barista / Kitchen",
    title: "See what needs preparing.",
    items: [
      "Station-filtered incoming orders",
      "Preparation time as reference",
      "No unnecessary status tapping",
      "Printer dispatch or KDS fallback",
    ],
  },
];

export default function Operations() {
  return (
    <section id="features" className="bg-[#115C41] py-16 sm:py-20 text-white">
      <Container>
        <SectionHeading
          light
          eyebrow="Operational simplicity"
          title="System calculates. Staff verifies."
          subtitle="CafeHub automates reliable calculations and keeps human judgment where it belongs."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {roles.map((r) => (
            <article key={r.label} className="rounded-2xl bg-white p-6 sm:p-7">
              <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-ink/50">
                {r.label}
              </p>
              <h3 className="mt-3 text-xl font-extrabold text-black">
                {r.title}
              </h3>
              <ul className="mt-5 space-y-2.5 text-sm text-ink/75 text-black">
                {r.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <Check className="size-3.5 text-brand-600" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-xl text-center text-[11px] text-brand-100/80">
          CafeHub dispatches orders to the existing POS where supported. It does
          not replace or claim full POS synchronization.
        </p>
      </Container>
    </section>
  );
}
