
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Container from "@/app/_components/ui/Container";
import { cn } from "@/lib/cn";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const items = [
  {
    icon: "/icons/bar/easy-setup.svg",
    title: "Easy Setup",
    text: "Get Started in minutes",
    order: "order-1 lg:order-1",
  },
  {
    icon: "/icons/bar/trusted.svg",
    title: "Trusted by 500+",
    text: "Cafes World Wide",
    order: "order-3 lg:order-2",
  },
  {
    icon: "/icons/bar/secure.svg",
    title: "Secure & reliable",
    text: "Your Data is always Safe",
    order: "order-2 lg:order-3",
  },
  {
    icon: "/icons/bar/support.svg",
    title: "24/7 Support",
    text: "Partner Companies",
    order: "order-4 lg:order-4",
  },
];

export default function FeaturesBar() {
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
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label={t("Features")}
      className={cn(
        "features-bar border-y border-black/10 bg-white py-6 lg:border-y-0 lg:bg-gradient-to-b lg:from-[#fdf6ea] lg:to-[#f8ebd8] lg:py-5",
        isVisible && "is-visible"
      )}
    >
      <Container>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4 lg:gap-6">
          {items.map(({ icon, title, text, order }, index) => (
            <li
              key={title}
              style={{ animationDelay: `${index * 180}ms` }}
              className={cn(
                "features-bar-item flex items-center gap-3 lg:gap-4",
                order
              )}
            >
              <span className="features-bar-icon shrink-0">
                <Image
                  src={icon}
                  alt=""
                  width={40}
                  height={40}
                  className="h-9 w-auto lg:h-10"
                />
              </span>

              <div className="features-bar-text">
                <p className="text-base font-bold leading-tight text-ink lg:text-xl">
                  {t(title)}
                </p>
                <p className="mt-1 text-xs text-ink/80 lg:text-sm">
                  {t(text)}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

