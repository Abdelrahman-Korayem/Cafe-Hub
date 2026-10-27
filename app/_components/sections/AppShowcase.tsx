import Image from "next/image";
import { Bean, Smile, TrendingUp, ThumbsUp } from "lucide-react";
import Container from "@/app/_components/ui/Container";

const stats = [
  { icon: Bean, value: "500+", label: "Cafes World Wide" },
  { icon: Smile, value: "100K+", label: "Happy Customers" },
  { icon: TrendingUp, value: "35%", label: "Average Revenue Increase" },
  { icon: ThumbsUp, value: "4.9/5", label: "Customer Satisfaction" },
];

export default function AppShowcase() {
  return (
    <section className="py-16 relative">
          <div className="absolute left-[0%] top-[-14%] z-0 w-[23%] hidden lg:block">
                  <Image
                    src="/app/leave.png"
                    alt=""
                    width={600}
                    height={600}
                    className="h-auto w-full"
                    priority
                  />
                </div>
                    <div className="absolute left-[0%] top-[20%] z-0 w-[20%] hidden lg:block">
                            <Image
                              src="/app/soda.png"
                              alt=""
                              width={600}
                              height={600}
                              className="h-auto w-full"
                              priority
                            />
                          </div>
                              <div className="absolute right-[0%] bottom-[0%] z-0 w-[20%] hidden lg:block">
                                      <Image
                                        src="/app/cup.png"
                                        alt=""
                                        width={600}
                                        height={600}
                                        className="h-auto w-full"
                                        priority
                                      />
                                    </div>












      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">
            A Better Way to Run Your Café
          </h2>
          <p className="mt-5 text-base text-ink/80">
            CafeHub helps you spend less time managing operations and more time
            creating memorable customer experiences.
          </p>
        </div>

        <ul className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <li
              key={label}
              className="flex items-center gap-3 rounded-xl border border-sand/60 bg-white p-3 shadow-sm"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-lg bg-[#f6ebd9] text-secondary">
                <Icon className="size-6" aria-hidden />
              </span>
              <div>
                <p className="text-base font-bold leading-tight text-ink">
                  {value}
                </p>
                <p className="mt-0.5 text-[11px] leading-tight text-ink/70">
                  {label}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div className="relative mx-auto aspect-[1/0.95] w-full max-w-[600px]">
            <Image
              src="/app/phones.png"
              alt="CafeHub mobile app screens"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-contain"
            />
          </div>

          <div>
            <h3 className="text-3xl font-bold leading-tight text-ink sm:text-4xl">
              A Better Café
              <br />
              Experience Starts Here
            </h3>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink/80">
              Let your customers explore your menu, discover their favorites,
              place orders, and book tables through a smooth, convenient mobile
              experience.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#" aria-label="Download on the App Store">
                <Image
                  src="/app/app-store.png"
                  alt="Download on the App Store"
                  width={400}
                  height={120}
                  className="h-12 w-auto"
                />
              </a>
              <a href="#" aria-label="Get it on Google Play">
                <Image
                  src="/app/google-play.png"
                  alt="Get it on Google Play"
                  width={400}
                  height={120}
                  className="h-12 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}