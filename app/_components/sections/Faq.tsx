import Image from "next/image";
import { Plus } from "lucide-react";
import Container from "@/app/_components/ui/Container";

const faqs = [
  {
    q: "How long does it take to set up CafeHub?",
    a: "Most cafés are up and running in minutes. Add your menu, tables and staff, print your QR codes, and you're ready to take orders.",
  },
  {
    q: "Do my customers need to download an app?",
    a: "No. Customers scan the QR code on their table and order straight from their phone's browser.",
  },
  {
    q: "Can I manage more than one branch?",
    a: "Yes. The Growth plan supports up to 2 branches and the Pro plan supports 3 or more, all managed from one dashboard.",
  },
  {
    q: "Can I change my plan later?",
    a: "Yes. You can upgrade or downgrade your plan whenever your cafe's needs change.",
  },
  {
    q: "How does billing work?",
    a: "Plans are billed annually, and the annual price already includes the 25% saving shown on each plan.",
  },
  {
    q: "Is my data safe?",
    a: "Yes. Your cafe's data is stored securely and is only accessible to you and your team.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="relative overflow-hidden py-16">
      {/* Decorations */}
      <div className="pointer-events-none absolute -left-4 top-6 hidden w-[13%] lg:block">
        <Image
          src="/Faq/Faq.png"
          alt=""
          width={300}
          height={300}
          className="h-auto w-full"
        />
      </div>
      

      <Container className="relative z-10">
        <h2 className="text-center text-3xl font-bold text-ink sm:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="mx-auto mt-12 grid max-w-5xl items-start gap-x-8 gap-y-5 md:grid-cols-2">
          {faqs.map(({ q, a }) => (
            <details
              key={q}
              className="group rounded-lg bg-white px-4 py-3 shadow-md ring-1 ring-black/5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-ink [&::-webkit-details-marker]:hidden">
                {q}
                <Plus
                  className="size-4 shrink-0 transition-transform group-open:rotate-45"
                  aria-hidden
                />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">{a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}