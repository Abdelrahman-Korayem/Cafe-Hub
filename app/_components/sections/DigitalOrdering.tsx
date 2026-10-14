import Image from "next/image";
import { ListChecks, Clock, Smartphone, Wifi} from "lucide-react";
import Container from "@/app/_components/ui/Container";
import Pill from "@/app/_components/ui/Pill";

const points = [
  { icon: ListChecks, text: "Clear categories, search, sizes, and add-ons" },
  { icon: Clock, text: "Availability and estimated preparation time" },
  { icon: Smartphone, text: "Order more during the same visit, no restart" },
  { icon: Wifi, text: "One reconciled bill for products and optional WiFi" },
];

export default function DigitalOrdering() {
  return (
    <section id="ordering" className="bg-olive-200 py-16 sm:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em] text-brand-700/70">
              Digital ordering
            </p>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-4xl">
              Let customers order{" "}
              <span className="text-green-500">without</span>{" "}
              <span className="text-yellow-400">the wait</span>.
            </h2>
            <p className="mt-4 max-w-md text-base text-ink/65">
              A branded menu makes discovery, customization, and reordering
              intuitive, without adding a heavy workflow for your team.
            </p>
            <ul className="mt-7 space-y-4">
              {points.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-sm">
                  <Pill tone="green"><Icon
                    className="size-4 shrink-0 text-brand-700"
                    aria-hidden
                  /></Pill>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto aspect-[4/4.2] w-full max-w-md overflow-hidden rounded-3xl shadow-xl lg:max-w-none">
            {/* Replace with your exported Figma image */}
            <Image
              src="/images/digital-ordering.png"
              alt="CafeHub menu open on a phone, resting on a café table"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
