import Image from "next/image";
import Container from "@/app/_components/ui/Container";

const stats = [
  { icon: "/icons/stats/bean.svg", value: "500+", label: "Cafes World Wide" },
  { icon: "/icons/stats/smile.svg", value: "100K+", label: "Happy Customers" },
  {
    icon: "/icons/stats/growth.svg",
    value: "35%",
    label: "Average Revenue Increase",
  },
  {
    icon: "/icons/stats/thumbs.svg",
    value: "4.9/5",
    label: "Customer Satisfaction",
  },
];

function StoreButtons({ className }: { className?: string }) {
  return (
    <div className={className}>
      <a href="#" aria-label="Download on the App Store" className="block">
        <Image
          src="/app/app-store.png"
          alt="Download on the App Store"
          width={400}
          height={120}
          className="h-12 w-auto md:h-11 lg:h-12"
        />
      </a>
      <a href="#" aria-label="Get it on Google Play" className="block">
        <Image
          src="/app/google-play.png"
          alt="Get it on Google Play"
          width={400}
          height={120}
          className="h-12 w-auto md:h-11 lg:h-12"
        />
      </a>
    </div>
  );
}

export default function AppShowcase() {
  return (
    <section className="relative overflow-hidden py-12 md:py-16">
      {/* Decoration (tablet and up) */}
      <div className="pointer-events-none absolute -left-2 top-[4%] hidden w-[15%] md:block">
        <Image
          src="/app/leaves-left.png"
          alt=""
          width={500}
          height={600}
          className="h-auto w-full"
        />
      </div>

      <Container className="relative z-10">
        <div className="md:mx-auto md:max-w-2xl md:text-center">
          <h2 className="text-2xl font-bold leading-tight text-ink md:text-3xl lg:text-4xl">
            A Better Way to Run Your Café
          </h2>
          <p className="mt-3 text-base text-ink/85 md:mt-5">
            CafeHub helps you spend less time managing operations and more time
            creating memorable customer experiences.
          </p>
        </div>

        <ul className="mx-auto mt-8 grid max-w-sm grid-cols-2 gap-x-4 gap-y-6 md:mt-10 md:max-w-4xl md:grid-cols-4 md:gap-x-6">
          {stats.map(({ icon, value, label }) => (
            <li key={label} className="flex items-center gap-3">
              <span className="grid size-14 shrink-0 place-items-center rounded-xl border border-black/5 bg-white shadow-sm md:size-16">
                <Image
                  src={icon}
                  alt=""
                  width={32}
                  height={32}
                  className="size-7 md:size-8"
                />
              </span>
              <div className="min-w-0">
                <p className="text-base font-bold leading-tight text-ink">
                  {value}
                </p>
                <p className="mt-1 text-[11px] leading-tight text-ink/70">
                  {label}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>

      {/* Phones block */}
      <div className="relative mt-12 bg-gradient-to-b from-white to-[#f6eee6] py-10 md:mt-14 md:bg-none md:py-0">
        {/* Decorations (tablet and up) */}
        <div className="pointer-events-none absolute -right-4 top-10 z-0 hidden w-[17%] md:block">
          <Image
            src="/app/cup.png"
            alt=""
            width={500}
            height={700}
            className="h-auto w-full"
          />
        </div>
        <div className="pointer-events-none absolute -bottom-25 right-0 z-0 hidden w-[9%] md:block">
          <Image
            src="/app/muffen.png"
            alt=""
            width={300}
            height={300}
            className="h-auto w-full"
          />
        </div>
        <div className="pointer-events-none absolute -bottom-6 left-0 z-0 hidden w-[15%] md:block">
          <Image
            src="/app/soda.png"
            alt=""
            width={300}
            height={300}
            className="h-auto w-full"
          />
        </div>

        <Container className="relative z-10">
          <div className="grid items-center gap-6 md:grid-cols-[1.15fr_1fr] md:gap-10 lg:gap-16">
            {/* Text */}
            <div className="md:order-2">
              <h3 className="text-2xl font-bold leading-tight text-ink md:text-3xl lg:text-4xl">
                A Better Café Experience
                <br className="hidden md:block" /> Starts Here
              </h3>
              <p className="mt-3 max-w-lg text-base leading-relaxed text-ink/80 md:mt-4">
                Let your customers explore your menu, discover their favorites,
                place orders, and book tables through a smooth, convenient
                mobile experience.
              </p>

              <StoreButtons className="mt-8 hidden items-center gap-3 md:flex" />
            </div>

            {/* Phones */}
            <div className="relative mx-auto aspect-[1/0.95] w-full max-w-[600px] md:order-1">
              <Image
                src="/app/phones.png"
                alt="CafeHub mobile app screens"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-contain"
              />
            </div>

            {/* Store buttons on mobile: below the image */}
            <StoreButtons className="grid grid-cols-2 gap-3 md:hidden [&_img]:h-auto [&_img]:w-full" />
          </div>
        </Container>
      </div>
    </section>
  );
}