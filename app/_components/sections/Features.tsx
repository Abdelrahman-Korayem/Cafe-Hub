"use client";
import Image from "next/image";
import Container from "@/app/_components/ui/Container";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { cn } from "@/lib/cn";

const features = [
  {
    icon: "/icons/features/bookings.svg",
    title: "Bookings",
    text: "Manage table reservations and walk-in guests effortlessly.",
    order: "order-1",
  },
  {
    icon: "/icons/features/people.svg",
    title: "Memberships",
    text: "Reward loyal customers and build lasting relationships.",
    order: "order-2",
  },
  {
    icon: "/icons/features/menu.svg",
    title: "Menu Management",
    text: "Update your menu, prices, and availability in real time.",
    order: "order-3",
  },
  {
    icon: "/icons/features/staff.svg",
    title: "Staff Management",
    text: "Organize your team, roles, and daily shifts.",
    order: "order-4",
  },
  {
    icon: "/icons/features/analytics.svg",
    title: "Analytics",
    text: "Track performance and make smarter business decisions.",
    order: "order-5",
  },
  {
    icon: "/icons/features/people.svg",
    title: "Customer Management",
    text: "Understand customer preferences and encourage repeat visits.",
    order: "order-6",
  },
  {
    icon: "/icons/features/orders.svg",
    title: "Order Management",
    text: "Manage dine-in and takeaway orders from one place.",
    order: "order-8 lg:order-7",
  },
  {
    icon: "/icons/features/settings.svg",
    title: "Settings",
    text: "Configure your cafe, preferences, and integrations in one place.",
    order: "order-7 lg:order-8",
  },
];

export default function Features() {
  const { t } = useLocale();
  return (
    <section id="features" className="relative overflow-hidden py-12 lg:py-16">
      {/* Muffin (desktop only) */}
      <div className="pointer-events-none absolute -right-2 top-4 hidden w-[15%] lg:block">
        <Image
          src="/features/FeaturesMuffin.png"
          alt=""
          width={300}
          height={300}
          className="h-auto w-full"
        />
      </div>

      <Container className="relative">
        <div className="max-w-xl lg:mx-auto lg:max-w-3xl lg:text-center">
          <h2 className="text-2xl font-bold leading-tight text-ink sm:text-3xl lg:text-4xl">
            {t("Everything You Need to Run Your Cafe in one Place")}
          </h2>
          <p className="mt-4 text-base text-ink/85 lg:mt-6 lg:text-lg">
            {t("From bookings to staff management, CafeHub brings your daily operations together in one simple platform.")}
          </p>
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-3 lg:mt-12 lg:grid-cols-4 lg:gap-5">
          {features.map(({ icon, title, text, order }, i) => (
            <li
              key={`${title}-${i}`}
              className={cn(
                "flex items-start gap-3 rounded-xl border border-[#f6d9ae] bg-white p-3 lg:items-center lg:p-4",
                order,
              )}
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-[#f6ebd9] lg:size-12">
                <Image
                  src={icon}
                  alt=""
                  width={24}
                  height={24}
                  className="size-5 lg:size-6"
                />
              </span>
              <div className="min-w-0">
                <h3 className="text-sm font-bold leading-tight text-ink lg:text-base">
                  {t(title)}
                </h3>
                <p className="mt-1.5 text-[10px] leading-relaxed text-ink/75 lg:text-[11px]">
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
