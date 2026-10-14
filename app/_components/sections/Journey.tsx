import Image from "next/image";
import Container from "@/app/_components/ui/Container";
import SectionHeading from "@/app/_components/ui/SectionHeading";
import Pill from "../ui/Pill";

const steps = [
  { n: "1", title: "Scan", text: "The customer scans the QR at their table.", img: "/images/scan.png", w: 1081, h: 1019 },
  { n: "2", title: "Order", text: "They browse the branded menu and choose items.", img: "/images/order.png", w: 610, h: 560 },
  { n: "3", title: "Add WiFi", text: "If needed, paid WiFi joins the same order.", img: "/images/wifi.png", w: 650, h: 500 },
  { n: "4", title: "Pay", text: "Cash or online. One payer, one bill.", img: "/images/pay.png", w: 1222, h: 737 },
  { n: "5", title: "Receipt", text: "A digital receipt leads naturally to Google Review.", img: "/images/receipt.png", w: 1163, h: 813 },
];

export default function Journey() {
  return (
    <section id="how-it-works" className="bg-olive-100 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="How CafeHub works"
          title={
            <>
              One clear journey from <span className="text-green-500">scan</span>
               to{" "}
              <span className="text-green-500">insight.</span>
            </>
          }
          subtitle="Simple for customers. Practical for staff. Useful for owners."
        />

        <ol className="mt-14 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className="relative flex flex-col items-center text-center"
            >
              <div className="flex h-24 items-center justify-center">
                <Image
                  src={s.img}
                  alt=""
                  width={s.w}
                  height={s.h}
                  className="h-full w-auto object-contain"
                />
              </div>
              <span className="mt-4 text-[10px] font-bold text-brand-700">
                <Pill tone="green">{s.n}</Pill>
              </span>
              <h3 className="mt-1 text-sm font-bold">{s.title}</h3>
              <p className="mt-1 max-w-[11rem] text-xs text-ink/60">{s.text}</p>

              {i < steps.length - 1 && (
                <svg
                  aria-hidden
                  viewBox="0 0 80 40"
                  className={`absolute -right-10 hidden h-8 w-20 text-brand-600/60 lg:block ${
                    i % 2 === 0 ? "top-2" : "top-10 -scale-y-100"
                  }`}
                  fill="none"
                >
                  <path
                    d="M2 32 Q40 -8 76 20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  <path
                    d="M70 14l7 6-9 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
