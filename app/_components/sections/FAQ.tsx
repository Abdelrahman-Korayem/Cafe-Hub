import { Minus, Plus } from "lucide-react";
import Container from "@/app/_components/ui/Container";
import SectionHeading from "@/app/_components/ui/SectionHeading";

// NOTE: only the first answer comes from the design — replace the rest with real copy.
const faqs = [
  {
    q: "Does CafeHub replace our POS?",
    a: "No. CafeHub dispatches orders to your existing POS where supported. It does not replace it or claim full POS synchronization.",
  },
  {
    q: "How does paid WiFi work?",
    a: "Guests can add a WiFi package to the same order. It appears on one reconciled bill and staff can look up the token if needed.",
  },
  {
    q: "Can customers pay with cash?",
    a: "Yes. Guests can choose cash or online payment, and owners see the payment mix in one place.",
  },
  {
    q: "Do customers need to install an app?",
    a: "No. Guests scan the table QR code and order from a branded web menu. CafeHub can also be installed as a PWA.",
  },
  {
    q: "Can I run more than one branch?",
    a: "Yes. CafeHub is white-label and multi-branch ready, so you can scale without changing the guest experience.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              <span className="text-yellow-400">Questions</span>, <span className="text-green-500">answered.</span>
            </>
          }
        />
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              name="faq"
              open={i === 0}
              className="group rounded-xl border border-black/10 bg-white px-5 py-4 open:shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold [&::-webkit-details-marker]:hidden">
                {f.q}
                <Plus className="size-4 shrink-0 group-open:hidden" aria-hidden />
                <Minus className="hidden size-4 shrink-0 group-open:block" aria-hidden />
              </summary>
              <p className="mt-3 text-sm text-ink/65">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
