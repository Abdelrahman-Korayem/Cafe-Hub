import Container from "@/app/_components/ui/Container";
import SectionHeading from "@/app/_components/ui/SectionHeading";
import Pill from "@/app/_components/ui/Pill";

const metrics = [
  { label: "Peak hours", value: "4–6 PM", text: "Know when demand builds" },
  { label: "Payment mix", value: "58% online", text: "Cash and online visibility" },
  { label: "WiFi attach rate", value: "34%", text: "See package adoption" },
  { label: "Best sellers", value: "Iced Latte", text: "Understand product demand" },
];

export default function Dashboard() {
  return (
    <section id="insights" className="bg-white py-16 sm:py-20">
      <Container>
        <div className="text-center">
          <Pill tone="white" className="mb-4">
            Owner dashboard
          </Pill>
        </div>
        <SectionHeading
          title="See what is happening, and what needs attention."
          subtitle="Revenue, order patterns, payments, WiFi, stock signals, and structured recommendations in one practical view."
        />
        <ul className="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
          {metrics.map((m) => (
            <li key={m.label} className="rounded-2xl border border-black/5 bg-white p-5">
              <p className="text-xs text-ink/55">{m.label}</p>
              <p className=" text-green-600 mt-2 text-xl font-extrabold text-brand-700 sm:text-2xl ">{m.value}</p>
              <p className="mt-2 text-xs text-ink/50">{m.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center text-xs text-ink/40">Sample data shown for illustration.</p>
      </Container>
    </section>
  );
}
