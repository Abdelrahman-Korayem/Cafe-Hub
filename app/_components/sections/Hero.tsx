import Image from "next/image";
import Container from "@/app/_components/ui/Container";
import Button from "@/app/_components/ui/Button";
import Pill from "@/app/_components/ui/Pill";
import {CookingPot , QrCode} from "lucide-react";

const stats = [
  { value: "1 QR", text: "Order, pay, and review from one scan" },
  { value: "1 bill", text: "Products and WiFi in one reconciled total" },
  { value: "Cash + Online", text: "Payment mix visible to owners" },
  { value: "Multi-branch", text: "White-label and ready to scale" },
];

export default function Hero() {
  return (
    <section id="top" className="bg-sand pb-16 pt-28 sm:pt-32">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <Pill tone="green" className="bg-brand-100/80">
              Built for modern cafés
            </Pill>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink text-balance sm:text-5xl">
              Run your café smarter with one connected system.
            </h1>
            <p className="mt-5 max-w-md text-base text-ink/70">
              Order, pay, and connect with your guests.{" "}
              <strong className="font-semibold text-brand-700">CafeHub</strong>{" "}
              turns every transaction into clear operations and useful insight.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button href="#get-started">Get Started</Button>
              <Button href="#how-it-works" variant="link">
                See how it works
              </Button>
            </div>
            <p className="mt-6 text-xs text-ink/60">
              Branded for your café · Installable PWA · Multi-branch ready
            </p>
          </div>

          <div className="relative rounded-3xl bg-white p-3 shadow-xl shadow-black/5 sm:p-4">
            {/* الصورة الرئيسية */}
            <Image
              src="/images/hero-preview.png"
              alt="Guests scan a table QR code, order on their phone, and staff receive the order instantly"
              width={620}
              height={500}
              priority
              className="h-auto w-full rounded-2xl"
            />

            {/* البطاقة الأولى (فوق على الشمال - اللي كانت عندك) */}
            <div className="absolute -top-4 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-neutral-100 flex items-center gap-3">
              <div className="bg-emerald-50 p-2 rounded-xl text-emerald-600 font-bold">
                <QrCode/>
              </div>
              <div>
                <p className="text-xs font-bold text-neutral-900">
                  Table QR ordering
                </p>
                <p className="text-[10px] text-neutral-500">
                  Zero waiter bottleneck
                </p>
              </div>
            </div>

            {/* البطاقة الجديدة (تحت على اليمين) */}
            <div className="absolute -bottom-4 -right-4 sm:-right-8 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-neutral-100 flex items-center gap-3">
              <div className="bg-amber-50 p-2 rounded-xl text-amber-600 font-bold">
                <CookingPot/>
              </div>
              <div>
                <p className="text-xs font-bold text-neutral-900">
                  Instant Kitchen Sync
                </p>
                <p className="text-[10px] text-neutral-500">
                  Orders sent directly to staff
                </p>
              </div>
            </div>
          </div>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
          {stats.map((s) => (
            <li
              key={s.value}
              className="rounded-2xl bg-white px-4 py-5 text-center shadow-sm sm:px-5 sm:py-6"
            >
              <p className="text-xl font-extrabold text-ink sm:text-2xl">
                {s.value}
              </p>
              <p className="mx-auto mt-1.5 max-w-[16rem] text-xs text-ink/60">
                {s.text}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
