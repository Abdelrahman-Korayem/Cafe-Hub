"use client";

import { useState } from "react";
import { Check, Sparkles, Handshake } from "lucide-react";
import Link from "next/link";
export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState("monthly"); // monthly, 6months, 12months

  return (
    <section id="pricing" className="py-20 px-6 bg-cream">
      <div className="max-w-6xl mx-auto text-center">
        {/* الترويسة العلوية (Stepper & Subtitle) */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-xs font-medium text-primary mb-6">
          <span>1. Select Plan</span> &gt; <span>2. Café & Owner Profile</span>{" "}
          &gt; <span>3. Launch in 48h</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
          Select the Right Operating Plan for Your Café
        </h2>
        <p className="text-primary/70 text-sm md:text-base max-w-xl mx-auto mb-8">
          Scale your floor flow, eliminate waiter bottlenecks, and issue
          automated WiFi cards with zero per-order commission.
        </p>

        {/* أزرار تبديل مدة الاشتراك (Billing Toggle) */}
        <div className="inline-flex items-center p-1.5 rounded-full bg-primary/5 border border-primary/10 mb-12 gap-2">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-5 py-2 rounded-full text-xs font-semibold transition ${
              billingCycle === "monthly"
                ? "bg-primary text-cream shadow-md"
                : "text-primary/70 hover:text-primary"
            }`}
          >
            3 Months (Standard)
          </button>
          <button
            onClick={() => setBillingCycle("6months")}
            className={`px-5 py-2 rounded-full text-xs font-semibold transition flex items-center gap-1.5 ${
              billingCycle === "6months"
                ? "bg-primary text-cream shadow-md"
                : "text-primary/70 hover:text-primary"
            }`}
          >
            6 Months{" "}
            <span className="text-[10px] bg-secondary text-white px-1.5 py-0.5 rounded-full">
              Save 7%
            </span>
          </button>
          <button
            onClick={() => setBillingCycle("12months")}
            className={`px-5 py-2 rounded-full text-xs font-semibold transition flex items-center gap-1.5 ${
              billingCycle === "12months"
                ? "bg-primary text-cream shadow-md"
                : "text-primary/70 hover:text-primary"
            }`}
          >
            12 Months{" "}
            <span className="text-[10px] bg-secondary text-white px-1.5 py-0.5 rounded-full">
              Best Value + Save 15%
            </span>
          </button>
        </div>

        {/* شبكة الباقات (Pricing Cards Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left items-stretch">
          {/* الباقة الأولى: Start Package */}
          <div className="bg-white rounded-3xl p-8 border border-primary/10 shadow-sm flex flex-col justify-between relative">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-primary/50 mb-1">
                Web & QR Essential
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">
                Start Package
              </h3>
              <p className="text-xs text-primary/70 mb-6">
                Ideal for single-location espresso bars & boutique roasteries
                seeking rapid-fire in-table ordering without capital app
                development.
              </p>

              {/* السعر */}
              <div className="mb-6 pb-6 border-b border-primary/10">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-primary">
                    7,500
                  </span>
                  <span className="text-sm font-semibold text-primary/70">
                    EGP / month
                  </span>
                </div>
                <p className="text-[11px] text-primary/50 mt-1">
                  Equivalent to 7,500 EGP/mo
                </p>
              </div>

              {/* قائمة المميزات */}
              <div className="space-y-3 mb-8">
                <div className="text-xs font-semibold text-primary/70 uppercase mb-2">
                  Included in Start:
                </div>
                {[
                  "Branded QR Ordering Web App & PWA",
                  "Unified Café Admin Panel",
                  "Integrated WiFi Card Generator",
                  "Up to 3 Branches & 15 Tables Included",
                  "Unlimited Orders (0% Commission)",
                  "48-Hour Setup & Menu Handover",
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-xs text-primary/80"
                  >
                    <Check className="w-4 h-4 text-secondary shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* زر الاشتراك */}
            <div>
              <Link
                href="/register"
                className="w-full py-3.5 rounded-xl border border-primary/20 text-primary text-xs font-bold hover:bg-primary/5 transition flex items-center justify-center"
              >
                Select Start Plan →
              </Link>

              <p className="text-[10px] text-center text-primary/40 mt-3">
                Billed per selected interval + tax/extra-invoice
              </p>
            </div>
          </div>

          {/* الباقة الثانية: Growth Package (المميزة) */}
          <div className="bg-primary text-cream rounded-3xl p-8 shadow-xl flex flex-col justify-between relative border border-secondary/30">
            {/* بادئة الأكثر طلباً */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-cream text-[10px] font-bold tracking-wider px-4 py-1.5 rounded-full uppercase flex items-center gap-1 shadow-md">
              <Sparkles className="w-3 h-3" /> Most Popular + Full Brand
              Experience
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-cream/60 mb-1 mt-2">
                Native App & QR Essential
              </div>
              <h3 className="text-2xl font-bold text-cream mb-2">
                Growth Package
              </h3>
              <p className="text-xs text-cream/70 mb-6">
                Engineered for growing multi-location businesses demanding
                native App store presence, customer retention and loyalty push
                alerts.
              </p>

              {/* السعر */}
              <div className="mb-6 pb-6 border-b border-cream/10">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-cream">
                    15,000
                  </span>
                  <span className="text-sm font-semibold text-cream/70">
                    EGP / month
                  </span>
                </div>
                <p className="text-[11px] text-cream/50 mt-1">
                  Equivalent to 15,000 EGP/mo
                </p>
              </div>

              {/* قائمة المميزات */}
              <div className="space-y-3 mb-8">
                <div className="text-xs font-semibold text-cream/70 uppercase mb-2">
                  Everything in Start, plus native power:
                </div>
                {[
                  "Native iOS App on Apple App Store (Published under your own brand identity)",
                  "Native Android App on Google Play (High-performance PWA optimized for Egypt's messaging device base)",
                  "Real-time Push Notifications (Drive promo re-orders, happy hours & loyalty alerts direct to customer phones)",
                  "3 Branches & 15 Tables Included (Zero commission on unlimited dine-in, takeaway & delivery)",
                  "Priority 24/7 & Ops Onboarding (Dedicated onboarding engineer and menu digitization within 48 hours)",
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-xs text-cream/90"
                  >
                    <Check className="w-4 h-4 text-secondary shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* زر الاشتراك */}
            <div>
              <Link
                href="/register"
                className="w-full py-3.5 rounded-xl bg-secondary text-cream text-xs font-bold hover:bg-secondary/90 transition shadow-md flex items-center justify-center"
              >
                Select Growth Plan →
              </Link>
              <p className="text-[10px] text-center text-cream/50 mt-3">
                Recommended for roasteries & specialty chains
              </p>
            </div>
          </div>
        </div>

        {/* الميزات السفلية الإضافية (Footer Add-ons) */}
        <div className="mt-10 bg-white border border-primary/10 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3">
            <span className="p-2.5 rounded-xl bg-primary/5 text-primary text-lg">
              <Handshake className="size-5" />
            </span>
            <div>
              <div className="text-xs font-bold text-primary">
                Need more than 3 branches or 15 tables?
              </div>
              <p className="text-[11px] text-primary/70">
                Check out our Enterprise scale-up package: add unlimited tables,
                kitchen display systems (KDS), and ERP inventory sync.
              </p>
            </div>
          </div>
          <button className="whitespace-nowrap px-4 py-2 rounded-xl border border-primary/20 text-xs font-semibold text-primary hover:bg-primary/5 transition">
            Inquire for Enterprise Add-ons
          </button>
        </div>
      </div>
    </section>
  );
}
