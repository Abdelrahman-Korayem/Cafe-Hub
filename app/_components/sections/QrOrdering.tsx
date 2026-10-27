import Image from "next/image";
import { Check } from "lucide-react";
import Container from "@/app/_components/ui/Container";

const points = [
  "Scan & Browse",
  "Order with Ease",
  "Faster Service",
  "Seamless Order Management",
];

export default function QrOrdering() {
  return (
    <section id="our-story" className="pb-20 mx-auto w-[90%] max-w-7xl relative">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16 ">


         <div className="absolute right-[-9.2%] top-[0%] z-30 w-[17%] hidden lg:block ">
                    <Image
                      src="/QR/leave.png"
                      alt=""
                      width={400}
                      height={400}
                      className="h-auto w-full"
                    />
                  </div>
                   <div className="absolute right-[7%] top-[70%] z-30 w-[12%] hidden lg:block">
                    <Image
                      src="/QR/cup.png"
                      alt=""
                      width={400}
                      height={400}
                      className="h-auto w-full"
                    />
                  </div>



        {/* Image */}
        <div className="relative aspect-[360/243] w-full overflow-hidden rounded-3xl rounded-tr-[4.5rem] shadow-md">
          <Image
            src="/features/qr-order.png"
            alt="A table QR code and the CafeHub ordering app on a phone"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Let Your Customers
            <br />
            Order with a Scan
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-ink/80">
            Place a unique QR code on every table and let customers browse your
            menu, customize their orders, and pay directly from their phones.
          </p>

          <ul className="mt-6 space-y-4">
            {points.map((p) => (
              <li
                key={p}
                className="flex items-center gap-3 text-base text-ink"
              >
                <span className="grid size-5 shrink-0 place-items-center rounded-full bg-primary text-white">
                  <Check className="size-3" strokeWidth={3} aria-hidden />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
