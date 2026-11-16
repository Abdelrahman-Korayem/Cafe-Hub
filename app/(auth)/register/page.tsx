"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
              Cafe Owner Portal
            </span>
            <Link
              href="/"
              className="flex items-center gap-1 text-[11px] font-semibold text-secondary hover:text-primary"
            >
              Back to main site
              <ArrowUpRight className="size-3" aria-hidden />
            </Link>
          </div>

          <h2 className="mt-6 text-3xl font-bold text-primary">
            Join as Cafe Owner
          </h2>
          <p className="mt-2 text-sm text-ink/70">
            Set up your cafe workspace and configure your subscription plan to
            get started.
          </p>

          <form {...formProps} className="mt-8 space-y-5">
            <FormField
              id="cafeName"
              label="Cafe Name"
              icon={<Store className="size-4" aria-hidden />}
              error={errors.cafeName}
            >
              <input
                {...fieldProps("cafeName")}
                type="text"
                autoComplete="organization"
                placeholder="e.g. Roastery Club Cafe"
                className={inputClass}
              />
            </FormField>

            <FormField
              id="email"
              label="Work Email Address"
              icon={<Mail className="size-4" aria-hidden />}
              error={errors.email}
            >
              <input
                {...fieldProps("email")}
                type="email"
                autoComplete="email"
                placeholder="owner@cafehub.com"
                className={inputClass}
              />
            </FormField>

            <FormField
              id="password"
              label="Security Password"
              icon={<Lock className="size-4" aria-hidden />}
              error={errors.password}
              action={
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
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
                I agree to Terms &amp; Cafe Service SLA
              </label>
              {errors.terms && (
                <p
                  id="terms-error"
                  role="alert"
                  className="mt-1.5 text-xs text-red-700"
                >
                  {errors.terms}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-secondary disabled:opacity-60"
            >
              Continue to Setup &amp; Payment
              <ArrowRight className="size-4" aria-hidden />
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-ink">
            Already have an active account?{" "}
            <Link
              href="/sign-in"
              className="font-bold text-secondary hover:text-primary"
            >
              Sign In
            </Link>
          </p>

          <div className="mt-4 flex items-center justify-center gap-3 border-t border-black/5 pt-4 text-[11px] text-ink/60">
            <span className="flex items-center gap-1.5">
              <Lock className="size-3" aria-hidden />
              256-Bit SSL Encrypted
            </span>
            <span aria-hidden>•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="size-3" aria-hidden />
              SOC-2 Compliant
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}