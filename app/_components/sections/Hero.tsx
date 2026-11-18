
"use client";

import Image from "next/image";
import Button from "@/app/_components/ui/Button";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export default function Hero() {
  const { t, direction } = useLocale();
  const isRTL = direction === "rtl";

  return (
    <section
      id="home"
      className="px-4 pb-10 pt-20 lg:px-0 lg:pb-8 lg:pt-[72px]"
    >
      <div className="relative overflow-hidden rounded-3xl bg-[#faf3e4] lg:rounded-none">
        {/* Dotted texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(153,95,47,0.18) 1px, transparent 1px)",
            backgroundSize: "5px 5px",
          }}
        />

        {/* Soft light behind the text */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 lg:hidden"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 40% 18%, rgba(255,255,255,0.9), transparent 60%)",
          }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden lg:block"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 25% 50%, rgba(255,255,255,0.9), transparent 60%)",
          }}
        />

        {/* Content frame */}
        <div className="@container relative w-full lg:aspect-[1100/595]">
          {/* Splash */}
          <div
            className={`pointer-events-none absolute top-0 z-0 w-[24%] -scale-x-100 lg:w-[22.5%] lg:scale-x-100 ${
              isRTL
                ? "left-0 lg:left-auto lg:right-0"
                : "right-0 lg:right-auto lg:left-0"
            }`}
          >
            <Image
              src="/hero/splash.png"
              alt=""
              width={600}
              height={600}
              className="h-auto w-full"
              priority
            />
          </div>

          {/* Hero content */}
          <div
            className={`relative z-40 px-5 pb-4 pt-5 lg:absolute lg:top-[24%] lg:w-[41%] lg:p-0 ${
              isRTL ? "lg:right-[5.3%]" : "lg:left-[5.3%]"
            }`}
          >
            <span className="hero-animate inline-block rounded-md bg-gradient-to-r from-[#c8a46c] via-[#ecdcb4] to-[#c8a46c] px-4 py-2 text-sm font-bold uppercase tracking-wide text-primary shadow-sm lg:px-[1.5cqw] lg:py-[0.7cqw] lg:text-[1cqw]">
              {t("Built for cafe owners")}
            </span>

            <h1 className="hero-animate hero-animate-delay-1 mt-4 text-[1.75rem] font-bold leading-[1.15] text-ink lg:mt-[1.6cqw] lg:text-[4.1cqw]">
              {t("More Customers")}{" "}
              <br className="hidden lg:block" />
              {t("Happier Guests")}

              <span className="block font-script text-4xl font-semibold text-primary lg:text-[4.8cqw] lg:leading-[1.1]">
                {t("A Bigger Cafe")}
              </span>
            </h1>

            <p className="hero-animate hero-animate-delay-2 mt-3 text-base text-ink/80 lg:mt-[1.2cqw] lg:text-[1.3cqw] lg:leading-[1.5]">
              {t(
                "Manage bookings, memberships and daily operations in one place, so you can focus on what you love."
              )}
            </p>

            {/* Desktop CTA */}
            <div className="hero-animate hero-animate-delay-3 mt-6 hidden lg:mt-[2cqw] lg:block">
              <Button href="#features">
                {t("Explore Cafehub")}
              </Button>
            </div>
          </div>

          {/* Visual composition */}
          <div className="relative aspect-[415/310] w-full lg:absolute lg:inset-0 lg:aspect-auto">
            {/* Big leaves */}
            <div
              className={`hero-float absolute top-0 z-0 w-[40%] lg:w-[46%] ${
                isRTL ? "left-0" : "right-0"
              }`}
            >
              <Image
                src="/hero/leaves-1.png"
                alt=""
                width={900}
                height={900}
                className="h-auto w-full"
                priority
              />
            </div>

            {/* Podium */}
            <div
              className={`absolute bottom-0 z-10 w-full lg:w-[70%] ${
                isRTL
                  ? "right-0 lg:right-[30%]"
                  : "left-0 lg:left-[30%]"
              }`}
            >
              <Image
                src="/hero/podium.png"
                alt=""
                width={1200}
                height={300}
                className="h-auto w-full"
              />
            </div>

            {/* Laptop */}
            <div
              className={`hero-visual-animate absolute top-[14%] z-31 w-[74%] lg:top-[24%] lg:w-[58%] ${
                isRTL
                  ? "right-[24%] lg:right-[40%]"
                  : "left-[24%] lg:left-[40%]"
              }`}
            >
              <Image
                src="/hero/laptop.png"
                alt={t("CafeHub dashboard on a laptop")}
                width={1200}
                height={800}
                className="h-auto w-full"
                priority
              />
            </div>

            {/* Side leaves */}
            <div
              className={`hero-float absolute top-[30%] z-30 w-[13%] ${
                isRTL ? "left-0" : "right-0"
              }`}
              style={{ animationDelay: "500ms" }}
            >
              <Image
                src="/hero/leaves-2.png"
                alt=""
                width={400}
                height={600}
                className="h-auto w-full"
              />
            </div>

            {/* Phone */}
            <div
              className={`hero-visual-animate hero-visual-delay-1 absolute top-[23%] z-30 w-[21%] lg:top-[35%] lg:w-[16%] ${
                isRTL
                  ? "right-[29%] lg:right-[43.8%]"
                  : "left-[29%] lg:left-[43.8%]"
              }`}
            >
              <Image
                src="/hero/phone.png"
                alt={t("CafeHub mobile app")}
                width={400}
                height={800}
                className="h-auto w-full"
                priority
              />
            </div>

            {/* Muffin - Desktop only */}
            <div
              className={`hero-float absolute top-[3%] z-30 hidden w-[11.8%] lg:block ${
                isRTL ? "right-[44.5%]" : "left-[44.5%]"
              }`}
              style={{ animationDelay: "1s" }}
            >
              <Image
                src="/hero/muffin.png"
                alt=""
                width={400}
                height={400}
                className="h-auto w-full"
              />
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="hero-animate hero-animate-delay-3 relative z-40 mt-5 px-5 pb-5 lg:hidden">
            <Button href="#features" className="w-full py-4">
              {t("Explore Cafehub")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

