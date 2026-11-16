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
  MapPin,
  ShieldCheck,
} from "lucide-react";
import AuthVisual from "@/app/_components/ui/AuthVisual";
import FormField, { inputClass } from "@/app/_components/ui/FormField";
import { loginSchema } from "@/lib/validation/auth";
import { text, useZodForm } from "@/lib/validation/useZodForm";

export default function SignInPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const { errors, submitting, formProps, fieldProps } = useZodForm({
    schema: loginSchema,
    read: (data) => ({
      identifier: text(data, "identifier"),
      password: text(data, "password"),
      remember: data.get("remember") === "on",
    }),
    onValid: () => {
      // TODO: call your login API. Temporary redirect until it is connected.
      router.push("/owner");
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
              Staff &amp; Owner Portal
            </span>
            <Link
              href="/"
              className="flex items-center gap-1 text-[11px] font-semibold text-secondary hover:text-primary"
            >
              Back to main site
              <ArrowUpRight className="size-3" aria-hidden />
            </Link>
          </div>

          <h2 className="mt-6 text-3xl font-bold text-primary">Welcome Back</h2>
          <p className="mt-2 text-sm text-ink/70">
            Enter your account credentials to access your cafe management
            workspace.
          </p>

          <form {...formProps} className="mt-10 space-y-5 lg:mt-20">
            <FormField
              id="identifier"
              label="Work Email or Staff Username"
              icon={<Mail className="size-4" aria-hidden />}
              hint={
                <span className="text-[10px] text-ink/50">
                  e.g. roastery admin
                </span>
              }
              error={errors.identifier}
            >
              <input
                {...fieldProps("identifier")}
                type="text"
                autoComplete="username"
                placeholder="owner@cafehub.com or captain1"
                className={inputClass}
              />
            </FormField>

            <FormField
              id="password"
              label="Security Password"
              icon={<Lock className="size-4" aria-hidden />}
              hint={
                <Link
                  href="#"
                  className="text-[11px] font-semibold text-secondary hover:text-primary"
                >
                  Forgot password?
                </Link>
              }
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
                autoComplete="current-password"
                placeholder="••••••••••••"
                className={inputClass}
              />
            </FormField>

            <div className="flex items-center justify-between gap-3 pt-1">
              <label className="flex items-center gap-2 text-xs text-ink">
                <input
                  name="remember"
                  type="checkbox"
                  defaultChecked
                  className="size-4 rounded accent-primary"
                />
                Remember device token
              </label>
              <span className="flex items-center gap-1.5 rounded-full bg-sand/50 px-3 py-1.5 text-[10px] font-semibold text-primary">
                <MapPin className="size-3" aria-hidden />
                All 4 Roastery Hubs
              </span>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-secondary disabled:opacity-60"
            >
              Sign In to Workspace
              <ArrowRight className="size-4" aria-hidden />
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-ink">
            Want to register a new cafe?{" "}
            <Link
              href="/register"
              className="font-bold text-secondary hover:text-primary"
            >
              Join as Cafe Owner
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