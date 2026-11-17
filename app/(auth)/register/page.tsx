"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import LanguageSwitcher from "@/app/_components/ui/LanguageSwitcher";
import {
  ArrowRight,
  ArrowUpRight,
  Eye,
  EyeOff,
  Lock,
  Mail,
  ShieldCheck,
  Store,
} from "lucide-react";
import AuthVisual from "@/app/_components/ui/AuthVisual";
import FormField, { inputClass } from "@/app/_components/ui/FormField";
import { registerSchema } from "@/lib/validation/auth";
import { text, useZodForm } from "@/lib/validation/useZodForm";

export default function RegisterPage() {
  const { t, direction } = useLocale();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const { errors, submitting, formProps, fieldProps } = useZodForm({
    schema: registerSchema,
    read: (data) => ({
      cafeName: text(data, "cafeName"),
      email: text(data, "email"),
      password: text(data, "password"),
      terms: data.get("terms") === "on",
    }),
    onValid: () => {
      // TODO: send the values to your API before moving on
      router.push("/Subscription");
    },
  });

  return (
    <main className="grid min-h-screen lg:grid-cols-2">
      <AuthVisual />

      <section className="flex items-center bg-[#faf6ef] px-6 py-10 sm:px-12 lg:px-16">
        <div className="mx-auto w-full max-w-md">
          <div className="flex items-center justify-between border-b border-black/5 pb-4">
            <span className="flex items-center gap-2 rounded-full bg-sand/50 px-3 py-1.5 text-[11px] font-semibold text-primary">
              <span className="size-1.5 rounded-full bg-secondary" />
              {t("Cafe Owner Portal")}
            </span>
            <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Link
              href="/"
              className="flex items-center gap-1 text-[11px] font-semibold text-secondary hover:text-primary"
            >
              {t("Back to main site")}
              <ArrowUpRight className={`size-3 ${direction === "rtl" ? "-scale-x-100" : ""}`} aria-hidden />
            </Link>
            </div>
          </div>

          <h2 className="mt-6 text-3xl font-bold text-primary">
            {t("Join as Cafe Owner")}
          </h2>
          <p className="mt-2 text-sm text-ink/70">
            {t("Set up your cafe workspace and configure your subscription plan to get started.")}
          </p>

          <form {...formProps} className="mt-8 space-y-5">
            <FormField
              id="cafeName"
              label={t("Cafe Name")}
              icon={<Store className="size-4" aria-hidden />}
              error={errors.cafeName ? t(errors.cafeName) : undefined}
            >
              <input
                {...fieldProps("cafeName")}
                type="text"
                dir="auto"
                autoComplete="organization"
                placeholder={t("e.g. Roastery Club Cafe")}
                className={inputClass}
              />
            </FormField>

            <FormField
              id="email"
              label={t("Work Email Address")}
              icon={<Mail className="size-4" aria-hidden />}
              error={errors.email ? t(errors.email) : undefined}
            >
              <input
                {...fieldProps("email")}
                type="email"
                dir="ltr"
                autoComplete="email"
                placeholder="name@domain.com"
                className={inputClass}
              />
            </FormField>

            <FormField
              id="password"
              label={t("Security Password")}
              icon={<Lock className="size-4" aria-hidden />}
              error={errors.password ? t(errors.password) : undefined}
              action={
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? t("Hide password") : t("Show password")}
                  className="text-ink/50 hover:text-ink"
                >
                  {showPassword ? (
                    <EyeOff className="size-4" />
                  ) : (
                    <Eye className="size-4" />
                  )}
                </button>
              }
            >
              <input
                {...fieldProps("password")}
                type={showPassword ? "text" : "password"}
                dir="ltr"
                autoComplete="new-password"
                placeholder="••••••••••••"
                className={inputClass}
              />
            </FormField>

            <div className="pt-6">
              <label className="flex items-center gap-2 text-xs text-ink">
                <input
                  {...fieldProps("terms")}
                  type="checkbox"
                  className="size-4 rounded accent-primary"
                />
                {t("I agree to Terms & Cafe Service SLA")}
              </label>
              {errors.terms && (
                <p
                  id="terms-error"
                  role="alert"
                  className="mt-1.5 text-xs text-red-700"
                >
                  {t(errors.terms)}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-secondary disabled:opacity-60"
            >
              {t("Continue to Setup & Payment")}
              <ArrowRight className={`size-4 ${direction === "rtl" ? "rotate-180" : ""}`} aria-hidden />
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-ink">
            {t("Already have an active account?")} {" "}
            <Link
              href="/sign-in"
              className="font-bold text-secondary hover:text-primary"
            >
              {t("Sign In")}
            </Link>
          </p>

          <div className="mt-4 flex items-center justify-center gap-3 border-t border-black/5 pt-4 text-[11px] text-ink/60">
            <span className="flex items-center gap-1.5">
              <Lock className="size-3" aria-hidden />
              {t("256-Bit SSL Encrypted")}
            </span>
            <span aria-hidden>•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="size-3" aria-hidden />
              {t("SOC-2 Compliant")}
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
