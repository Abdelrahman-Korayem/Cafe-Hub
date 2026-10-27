import Image from "next/image";
import { ArrowRight, Check, Home, Infinity as InfinityIcon, Table } from "lucide-react";
import Container from "@/app/_components/ui/Container";
import { cn } from "@/lib/cn";

const plans = [
  {
    name: "Starter 20",
    tagline: "For Single Cafés",
    houses: 1,
    branches: "1 branch",
    tables: "Up to 20 tables",
    unlimitedTables: false,
    oldPrice: "1,200\nEGP",
    price: "900 / EGP",
    yearly: "10,800",
    cta: "Choose Starter",
    popular: false,
    features: [
      "QR Table Ordering",
      "Menu Management",
      "Order Management",
      "Smart Inventory Tracking",
      "Low-Stock Alerts",
      "Expiry Date Alerts",
    ],
  },
  {
    name: "Growth 50",
    tagline: "For Growing Businesses",
    houses: 2,
    branches: "Up to 2 branches",
    tables: "50 tables per branch",
    unlimitedTables: false,
    oldPrice: "EGP\n2,400",
    price: "EGP 1,800",
    yearly: "21,600",
    cta: "Choose Growth",
    popular: true,
    features: [
      "QR Table Ordering",
      "Menu Management",
      "Order Management",
      "Smart Inventory Tracking",
      "Low-Stock Alerts",
      "Expiry Date Alerts",
      "Sales & Order Reports",
      "Centralized Branch Management",
    ],
  },
  {
    name: "Pro",
    tagline: "For Café Chains",
    houses: 3,
    branches: "3+ branches",
    tables: "Unlimited tables",
    unlimitedTables: true,
    oldPrice: "4,800\nEGP",
    price: "3,600 / EGP",
    yearly: "43,200",
    cta: "Choose Pro",
    popular: false,
    features: [
      "QR Table Ordering",
      "Menu Management",
      "Order Management",
      "Smart Inventory Tracking",
      "Low-Stock Alerts",
      "Expiry Date Alerts",
      "Multi-Branch Analytics",
      "Advanced Reports",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden py-16">
      {/* Decorations */}
      <div className="pointer-events-none absolute left-0 top-[8%] hidden w-[20%] lg:block">
        <Image
          src="/pricing/coffee-bag.png"
          alt=""
          width={500}
          height={500}
          className="h-auto w-full"
        />
      </div>
      <div className="pointer-events-none absolute right-0 top-[4%] hidden w-[18%] lg:block">
        <Image
          src="/pricing/iced-coffee.png"
          alt=""
          width={500}
          height={700}
          className="h-auto w-full"
        />
      </div>
      <div className="pointer-events-none absolute -bottom-4 right-0  hidden w-[9%] lg:block">
        <Image
          src="/pricing/leaves.png"
          alt=""
          width={300}
          height={400}
          className="h-auto w-full"
        />
      </div>

      
        <div className="text-center">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">
            Simple Transparent Pricing
          </h2>
          <p className="mt-4 text-lg font-semibold text-ink">
            Choose the Plan your cafe’s Needs
          </p>
        </div>

        <ul className="mx-auto mt-14 grid max-w-6xl items-stretch gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <li
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-2xl bg-[#fdf9f1]/95 p-5 ring-1 ring-black/10",
                plan.popular &&
                  "z-10 ring-2 ring-secondary shadow-[0_10px_40px_rgba(153,95,47,0.35)] md:-my-1.5 md:py-7",
              )}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-secondary px-5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                  Most Popular
                </span>
              )}

              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3
                    className={cn(
                      "text-2xl font-bold",
                      plan.popular ? "text-secondary" : "text-ink",
                    )}
                  >
                    {plan.name}
                  </h3>
                  <p className="mt-1 text-sm text-ink/70">{plan.tagline}</p>
                </div>
                <span className="flex h-11 min-w-11 shrink-0 items-center justify-center gap-0.5 rounded-xl border border-sand bg-[#f6ebd9] px-2 text-secondary">
                  {Array.from({ length: plan.houses }).map((_, i) => (
                    <Home key={i} className="size-4" aria-hidden />
                  ))}
                </span>
              </div>

              <ul className="mt-5 space-y-2 border-y border-black/10 py-4 text-sm text-ink">
                <li className="flex items-center gap-2">
                  <Home className="size-4" aria-hidden />
                  <span className={plan.popular ? "font-semibold" : ""}>
                    {plan.branches}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  {plan.unlimitedTables ? (
                    <InfinityIcon className="size-4" aria-hidden />
                  ) : (
                    <Table className="size-4" aria-hidden />
                  )}
                  <span className={plan.popular || plan.unlimitedTables ? "font-semibold" : ""}>
                    {plan.tables}
                  </span>
                </li>
              </ul>

              <div className="mt-5 flex items-center gap-3">
                <span className="whitespace-pre-line text-xs leading-tight text-ink/50 line-through">
                  {plan.oldPrice}
                </span>
                <span className="text-2xl font-bold leading-none text-ink lg:text-[1.7rem]">
                  {plan.price}
                </span>
                <span className="text-[11px] text-ink/70">/month</span>
                <span className="ml-auto rounded-md bg-sand/60 px-2 py-1 text-[10px] font-bold text-primary">
                  Save25%
                </span>
              </div>
              <p className="mt-3 text-[11px] text-ink/60">
                Billed annually (EGP {plan.yearly}/year)
              </p>

              <ul className="mt-5 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-[13px] text-ink">
                    <span
                      className={cn(
                        "grid size-4 shrink-0 place-items-center rounded-full text-white",
                        plan.popular ? "bg-secondary" : "bg-primary",
                      )}
                    >
                      <Check className="size-2.5" strokeWidth={3} aria-hidden />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={cn(
                  "mt-8 inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors",
                  plan.popular
                    ? "bg-secondary hover:bg-primary"
                    : "bg-primary hover:bg-secondary",
                )}
              >
                {plan.cta}
                <ArrowRight className="size-4" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      
    </section>
  );
}