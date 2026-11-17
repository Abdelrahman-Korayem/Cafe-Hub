"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "@/app/_components/ui/LanguageSwitcher";
import { useLocale } from "@/lib/i18n/LocaleProvider";

type Props = {
  searchParams: Promise<{ email?: string }>;
};

const steps = [
  {
    title: "Application received",
    text: "Your cafe details and subscription plan are saved.",
    status: "done",
  },
  {
    title: "Under review",
    text: "Our team is checking your account. This usually takes up to 24 hours.",
    status: "current",
  },
  {
    title: "Approval email",
    text: "We will email you as soon as your workspace is ready.",
    status: "upcoming",
  },
] as const;

export default function PendingApprovalPage({ searchParams }: Props) {
  const { email } = use(searchParams);
  const { t, direction } = useLocale();

  return (
    <main className="grid min-h-screen grid-cols-1 bg-[#fbf7ef] lg:grid-cols-[1.35fr_1fr]">
      {/* Left: brand panel (same as register / login) */}
      <section className="relative hidden overflow-hidden lg:block">
        <Image
          src="/auth/register-bg.png" /* غيّر المسار لصورة الخلفية اللي مستخدمها في صفحة الريجستر */
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/60" />

        <div className="relative flex h-full flex-col justify-between p-10 text-white">
          <div className="flex items-center gap-2">
            <span className="grid size-8 place-items-center rounded-lg bg-white/15 backdrop-blur">
              <CupIcon className="size-4" />
            </span>
            <span className="text-sm font-semibold">CafeHub</span>
          </div>

          <div className="max-w-md">
            <h2 className="text-4xl font-semibold leading-tight">
              {t("Smarter Cafes,")}
              <br />
              {t("Happier Guests.")}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              {t("The multi-tenant operations suite crafted for specialty roasters, fast-casual bistros, and high-volume espresso bars.")}
            </p>
          </div>
        </div>
      </section>

      {/* Right: status card */}
      <section className="flex items-center justify-center px-6 py-12 sm:px-12">
        <div className="w-full max-w-md">
          <div className="flex items-center justify-between">
            <span className="rounded-full border border-sand bg-sand/40 px-3 py-1 text-xs font-medium text-secondary">
              {t("Cafe Owner Portal")}
            </span>
            <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Link
              href="/"
              className="text-xs text-secondary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {t("Back to main site")}
            </Link>
            </div>
          </div>

          <div
            className="mt-10 grid size-14 place-items-center rounded-2xl bg-primary text-white"
            aria-hidden="true"
          >
            <ClockIcon className="size-7" />
          </div>

          <h1 className="mt-6 text-2xl font-semibold text-ink">
            {t("Your account is waiting for approval")}
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-ink/70">
            {t("Thanks for subscribing to CafeHub.")} {" "}
            {email ? (
              <>
                {t("We will send the approval email to")} {" "}
                <span className="font-semibold text-ink">{email}</span>.
              </>
            ) : (
              t("We will send you an email once your account is approved.")
            )}
          </p>

          <ol className="mt-8 space-y-0">
            {steps.map((step, i) => (
              <li key={step.title} className="relative flex gap-4 pb-6 last:pb-0">
                {i < steps.length - 1 && (
                  <span
                    className={`absolute top-6 h-[calc(100%-1.5rem)] w-px ${direction === "rtl" ? "right-[11px]" : "left-[11px]"} ${
                      step.status === "done" ? "bg-primary" : "bg-sand"
                    }`}
                    aria-hidden="true"
                  />
                )}

                <StepMarker status={step.status} />

                <div>
                  <p
                    className={`text-sm font-semibold ${
                      step.status === "upcoming" ? "text-ink/50" : "text-ink"
                    }`}
                  >
                    {t(step.title)}
                  </p>
                  <p className="mt-0.5 text-xs leading-relaxed text-ink/60">
                    {t(step.text)}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 space-y-3">
            <Link
              href="/"
              className="flex h-11 w-full items-center justify-center rounded-lg bg-primary text-sm font-medium text-white transition-colors hover:bg-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {t("Back to home")}
            </Link>
            <p className="text-center text-xs text-ink/60">
              {t("Did not get an email after 24 hours?")} {" "}
              <a
                href="mailto:support@cafehub.com"
                className="font-medium text-secondary underline-offset-4 hover:underline"
              >
                {t("Contact support")}
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function StepMarker({ status }: { status: "done" | "current" | "upcoming" }) {
  const { t } = useLocale();
  if (status === "done") {
    return (
      <span className="relative z-10 grid size-6 shrink-0 place-items-center rounded-full bg-primary text-white">
        <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m5 12 5 5L20 7" />
        </svg>
        <span className="sr-only">{t("Completed")}</span>
      </span>
    );
  }

  if (status === "current") {
    return (
      <span className="relative z-10 grid size-6 shrink-0 place-items-center rounded-full border-2 border-secondary bg-[#fbf7ef]">
        <span className="size-2 rounded-full bg-secondary motion-safe:animate-pulse" />
        <span className="sr-only">{t("In progress")}</span>
      </span>
    );
  }

  return (
    <span className="relative z-10 size-6 shrink-0 rounded-full border-2 border-sand bg-[#fbf7ef]">
      <span className="sr-only">{t("Pending")}</span>
    </span>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function CupIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 8h13v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Z" />
      <path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17" />
    </svg>
  );
}
