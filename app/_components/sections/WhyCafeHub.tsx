import Container from "@/app/_components/ui/Container";
import SectionHeading from "@/app/_components/ui/SectionHeading";
import Pill from "../ui/Pill";

const reasons = [
  { n: "01", title: "Digital ordering", text: "A faster, branded way to order with less staff intervention." },
  { n: "02", title: "Unified billing", text: "Products and optional WiFi in one reconciled bill." },
  { n: "03", title: "Operational visibility", text: "See orders, revenue, demand, and payment patterns clearly." },
  { n: "04", title: "Waste awareness", text: "Identify low stock and near-expiry items before they are missed." },
  { n: "05", title: "Actionable intelligence", text: "Turn business signals into structured recommendations." },
  { n: "06", title: "Built for every café", text: "White-label experiences and scalable multi-branch operations." },
];

export default function WhyCafeHub() {
  return (
    <section id="cafes" className="bg-olive-100 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Why CafeHub"
          title={
            <>
              One operating layer for the{" "}
              <span className="text-yellow-400">café</span> experience.
            </>
          }
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <li
              key={r.n}
              className="rounded-2xl border border-black/5 bg-white p-5"
            >
              <span className="grid size-6 place-items-center rounded-full bg-brand-100 text-[10px] font-bold text-brand-700">
                <Pill>{r.n}</Pill>
                
              </span>
              <h3 className="mt-8 text-base font-bold">{r.title}</h3>
              <p className="mt-1.5 text-sm text-ink/60">{r.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
