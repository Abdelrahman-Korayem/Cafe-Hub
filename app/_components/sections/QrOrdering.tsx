
"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import Container from "@/app/_components/ui/Container";
import { useEffect, useRef, useState } from "react";

const points = [
  "Scan & Browse",
  "Order with Ease",
  "Faster Service",
  "Seamless Order Management",
];

export default function QrOrdering() {
  const { t } = useLocale();

  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="our-story"
      className={`qr-section relative overflow-hidden bg-[#f6eee6] pt-8 pb-12 md:bg-transparent md:pt-10 md:pb-16 lg:pb-20 ${
        isVisible ? "is-visible" : ""
      }`}
    >
      {/* Decorations */}
      <div className="qr-decoration qr-leaves pointer-events-none absolute -right-2 top-[8%] hidden w-[11%] md:block">
        <Image
          src="/QR/leaves-right.png"
          alt=""
          width={400}
          height={900}
          className="h-auto w-full"
        />
      </div>

      <div className="qr-decoration qr-cup pointer-events-none absolute bottom-[3%] right-[10%] z-20 hidden w-[9%] md:block">
        <Image
          src="/QR/cup.png"
          alt=""
          width={400}
          height={400}
          className="h-auto w-full"
        />
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-6 md:grid-cols-[1.05fr_1fr] md:gap-10 lg:gap-16">
          {/* Image */}
          <div className="qr-image relative aspect-[413/378] w-full overflow-hidden rounded-2xl shadow-md md:aspect-[778/526] md:rounded-3xl md:rounded-tr-[4.5rem] lg:rounded-tr-[6rem]">
            <Image
              src="/features/qr-order.png"
              alt={t("A table QR code and the CafeHub ordering app on a phone")}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-[70%_50%] md:object-center"
            />
          </div>

          {/* Text */}
          <div className="qr-content">
            <h2 className="qr-heading text-2xl font-bold leading-tight text-ink md:text-3xl lg:text-5xl">
              {t("Let Your Customers")}{" "}
              <br className="hidden md:block" />
              {t("Order with a Scan")}
            </h2>

            <p className="qr-description mt-3 max-w-xl text-base leading-relaxed text-ink/80 md:mt-4 lg:text-lg">
              {t(
                "Place a unique QR code on every table and let customers browse your menu, customize their orders, and pay directly from their phones."
              )}
            </p>

            <ul className="mt-5 space-y-4 md:mt-6 lg:space-y-5">
              {points.map((p, index) => (
                <li
                  key={p}
                  style={{
                    animationDelay: `${index * 120}ms, ${1000 + index * 120}ms`,
                  }}
                  className="qr-point flex items-center gap-3 text-base text-ink lg:text-lg"
                >
                  <span className="qr-check grid size-6 shrink-0 place-items-center rounded-full bg-primary text-white">
                    <Check
                      className="size-3.5"
                      strokeWidth={3}
                      aria-hidden
                    />
                  </span>
                  {t(p)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

