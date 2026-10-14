import Container from "@/app/_components/ui/Container";
import SectionHeading from "@/app/_components/ui/SectionHeading";
import Pill from "@/app/_components/ui/Pill";

const problems = [
  {
    n: "1",
    title: "Disconnected ordering",
    text: "Orders rely on avoidable staff intervention, increasing friction for guests and teams.",
  },
  {
    n: "2",
    title: "Fragmented billing",
    text: "Products, payment, and paid WiFi can become separate operational threads.",
  },
  {
    n: "3",
    title: "Hidden business signals",
    text: "Revenue leakage, peak hours, and near-expiry stock are easy to miss.",
  },
];

export default function Problem() {
  return (
    <section id="product" className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="The operational gap"
          title={
            <>
              Your <span className="text-green-500">café</span> already creates
              the data. CafeHub makes it useful.
            </>
          }
          subtitle="Instead of adding another complicated system, CafeHub connects the customer journey to the decisions owners make every day."
        />
        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {problems.map((p) => (
            <li
              key={p.n}
              className="rounded-2xl border border-black/5 bg-white p-5"
            >
              <span className="grid size-6 place-items-center rounded-full bg-brand-100 text-[10px] font-bold text-brand-700">
                <Pill tone="green">{p.n}</Pill>
              </span>
              <h3 className="mt-10 text-base font-bold">{p.title}</h3>
              <p className="mt-1.5 text-sm text-ink/60">{p.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
