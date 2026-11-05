"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CircleHelp,
  Coffee,
  Home,
  Infinity as InfinityIcon,
  Table,
} from "lucide-react";
import Container from "@/app/_components/ui/Container";
import { cn } from "@/lib/cn";

type Billing = "monthly" | "yearly";

const plans = [
  {
    name: "Starter 20",
    tagline: "For Single Cafés",
    houses: 1,
    branches: "1 branch",
    tables: "Up to 20 tables",
    unlimitedTables: false,
    monthly: 1000,
    yearly: 750,
    priceStyle: "suffix", // 750 / EGP
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
    monthly: 2000,
    yearly: 1500,
    priceStyle: "prefix", // EGP 1,500
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
    monthly: 3000,
    yearly: 2250,
    priceStyle: "suffix",
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
] as const;

const fmt = (n: number) => n.toLocaleString("en-US");

export default function SubscriptionPage() {
  const [billing, setBilling] = useState<Billing>("yearly");
  const isYearly = billing === "yearly";

  return (
    <div className="min-h-screen bg-white pb-16">
      {/* Header */}
      <header className="bg-[#fdf6e3]">
        <Container className="flex items-center justify-between py-5">
          <Link
            href="/"
            className="flex items-center gap-3 text-2xl font-bold text-ink"
            aria-label="CafeHub home"
          >
            <Coffee className="size-8 text-secondary" aria-hidden />
            CAFE HUB
          </Link>
          <nav aria-label="Secondary" className="flex items-center gap-6 text-xs text-ink/80">
            <Link href="/" className="flex items-center gap-1.5 hover:text-secondary">
              <ArrowLeft className="size-3.5" aria-hidden />
              Back to main site
            </Link>
            <Link href="#" className="flex items-center gap-1.5 hover:text-secondary">
              <CircleHelp className="size-3.5" aria-hidden />
              Help &amp; Support
            </Link>
          </nav>
        </Container>
      </header>

      <Container>
        <div className="mt-16 text-center">
          <h1 className="text-xl font-bold text-ink sm:text-2xl">
            Choose the Plan your cafe’s Needs
          </h1>

          {/* Billing toggle */}
          <div
            role="group"
            aria-label="Billing period"
            className="mx-auto mt-6 inline-flex rounded-full bg-[#fdf6e3] p-1 ring-1 ring-sand"
          >
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              aria-pressed={!isYearly}
              className={cn(
                "rounded-full px-7 py-2 text-xs font-bold transition-colors",
                !isYearly ? "bg-primary text-white" : "text-ink",
              )}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBilling("yearly")}
              aria-pressed={isYearly}
              className={cn(
                "flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold transition-colors",
                isYearly ? "bg-primary text-white" : "text-ink",
              )}
            >
              Yearly
              <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] text-white">
                Save 25%
              </span>
            </button>
          </div>
        </div>

        <ul className="mx-auto mt-14 grid max-w-5xl items-stretch gap-5 md:grid-cols-3">
          {plans.map((plan) => {
            const amount = isYearly ? plan.yearly : plan.monthly;
            const priceLabel =
              plan.priceStyle === "prefix"
                ? `EGP ${fmt(amount)}`
                : `${fmt(amount)} / EGP`;
            const oldLabel =
              plan.priceStyle === "prefix"
                ? `EGP\n${fmt(plan.monthly)}`
                : `${fmt(plan.monthly)}\nEGP`;

            return (
              <li
                key={plan.name}
                className={cn(
                  "relative flex flex-col rounded-2xl bg-[#fdf9f1] p-5 ring-1 ring-black/10",
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
                    <h2
                      className={cn(
                        "text-2xl font-bold",
                        plan.popular ? "text-secondary" : "text-ink",
                      )}
                    >
                      {plan.name}
                    </h2>
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
                    <span
                      className={
                        plan.popular || plan.unlimitedTables ? "font-semibold" : ""
                      }
                    >
                      {plan.tables}
                    </span>
                  </li>
                </ul>

                <div className="mt-5 flex items-center gap-3">
                  {isYearly && (
                    <span className="whitespace-pre-line text-xs leading-tight text-ink/50 line-through">
                      {oldLabel}
                    </span>
                  )}
                  <span
                    className={cn(
                      "text-2xl font-bold leading-none lg:text-[1.7rem]",
                      plan.popular ? "text-secondary" : "text-ink",
                    )}
                  >
                    {priceLabel}
                  </span>
                  <span className="text-[11px] text-ink/70">/month</span>
                  {isYearly && (
                    <span className="ml-auto rounded-md bg-sand/60 px-2 py-1 text-[10px] font-bold text-primary">
                      Save25%
                    </span>
                  )}
                </div>
                <p className="mt-3 text-[11px] text-ink/60">
                  {isYearly
                    ? `Billed annually (EGP ${fmt(plan.yearly * 12)}/year)`
                    : "Billed monthly"}
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

                <Link
                  href={`/pending-approval?plan=${encodeURIComponent(plan.name)}&billing=${billing}`}
                  className={cn(
                    "mt-8 inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors",
                    plan.popular
                      ? "bg-secondary hover:bg-primary"
                      : "bg-primary hover:bg-secondary",
                  )}
                >
                  {plan.cta}
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </div>
  );
}