
"use client";

import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import Container from "@/app/_components/ui/Container";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const testimonials = [
  {
    name: "Lina S.",
    role: "Cafe Owner",
    quote:
      "CafeHub took our bookings and daily operations from scattered notes to one clear dashboard. We save hours every week.",
  },
  {
    name: "Jason M.",
    role: "Cafe Manager",
    quote:
      "The analytics showed me exactly which hours and menu items drive our revenue, and the setup took minutes.",
  },
  {
    name: "Priya K.",
    role: "Cafe Owner",
    quote:
      "Our customers love ordering with a scan, and my team finally has one place for orders, staff shifts and memberships.",
  },
];

export default function Testimonials() {
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
      className={`testimonials-section pt-10 pb-16 md:pt-12 md:pb-16 ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="testimonials-heading text-3xl font-bold text-ink sm:text-4xl">
            {t("What cafe owners are saying")}
          </h2>

          <p className="testimonials-description mt-5 text-base text-ink/80">
            {t("Trusted by cafe owners around the world.")}
          </p>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map(({ name, role, quote }, index) => (
            <li
              key={name}
              style={{ animationDelay: `${index * 180}ms` }}
              className="testimonials-card flex flex-col rounded-2xl bg-white p-6 shadow-md ring-1 ring-black/5"
            >
              <div
                className="testimonials-stars flex gap-1 text-secondary"
                aria-label={t("5 out of 5 stars")}
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-current"
                    aria-hidden
                  />
                ))}
              </div>

              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-ink/85">
                “{t(quote)}”
              </blockquote>

              <div className="mt-6 flex items-center gap-3">
                <span
                  aria-hidden
                  className="grid size-9 shrink-0 place-items-center rounded-full bg-sand text-sm font-bold text-primary"
                >
                  {name.charAt(0)}
                </span>

                <div>
                  <p className="text-sm font-bold leading-tight text-ink">
                    {name}
                  </p>
                  <p className="text-xs text-ink/70">{t(role)}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

