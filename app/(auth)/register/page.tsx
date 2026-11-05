"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Coffee,
  Eye,
  EyeOff,
  Lock,
  Mail,
  Radio,
  ShieldCheck,
  Store,
  Zap,
} from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="grid min-h-screen lg:grid-cols-2">
      {/* Left: visual panel */}
      <section className="relative hidden overflow-hidden bg-primary lg:block">
        <Image
          src="/auth/register-bg.png"
          alt=""
          fill
          priority
          sizes="50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />

        <div className="relative z-10 flex h-full flex-col justify-between p-12 text-white">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 text-lg font-semibold">
              <span className="grid size-10 place-items-center rounded-xl bg-white/15 ring-1 ring-white/20 backdrop-blur">
                <Coffee className="size-5" aria-hidden />
              </span>
              CafeHub
            </Link>
            <span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-wider ring-1 ring-white/20 backdrop-blur">
              <span className="size-1.5 rounded-full bg-secondary" />
              Specialty Roastery OS
            </span>
          </div>

          <div>
            <h1 className="text-4xl font-bold leading-tight">
              Smarter Cafes,
              <br />
              Happier Guests.
            </h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80">
              The comprehensive multi-tenant operations suite crafted for
              specialty roasters, fast-casual bistros, and high-volume espresso
              bars.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <div className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 ring-1 ring-white/20 backdrop-blur">
                <span className="grid size-9 place-items-center rounded-lg bg-white/10">
                  <Radio className="size-4" aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-semibold">Active Roastery Session</p>
                  <p className="mt-0.5 flex items-center gap-1.5 text-[10px] text-white/70">
                    <span className="size-1.5 rounded-full bg-green-400" />
                    Live Hub connected
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 ring-1 ring-white/20 backdrop-blur">
                <Zap className="size-4 text-secondary" aria-hidden />
                <p className="text-xs font-semibold">Ticket Latency</p>
                <span className="rounded-md bg-white/15 px-2 py-1 text-[10px] font-semibold">
                  &lt; 1.2s avg
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Right: form */}
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

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 space-y-5"
          >
            <div>
              <label htmlFor="cafe-name" className="text-xs font-semibold text-ink">
                Cafe Name
              </label>
              <div className="mt-2 flex items-center gap-3 rounded-lg border border-sand bg-[#f6efe4] px-3.5 py-3 focus-within:border-secondary">
                <Store className="size-4 shrink-0 text-ink/50" aria-hidden />
                <input
                  id="cafe-name"
                  type="text"
                  required
                  placeholder="e.g. Roastery Club Cafe"
                  className="w-full bg-transparent text-sm text-ink placeholder:text-ink/40 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="text-xs font-semibold text-ink">
                Work Email Address
              </label>
              <div className="mt-2 flex items-center gap-3 rounded-lg border border-sand bg-[#f6efe4] px-3.5 py-3 focus-within:border-secondary">
                <Mail className="size-4 shrink-0 text-ink/50" aria-hidden />
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="owner@cafehub.com"
                  className="w-full bg-transparent text-sm text-ink placeholder:text-ink/40 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="text-xs font-semibold text-ink">
                Security Password
              </label>
              <div className="mt-2 flex items-center gap-3 rounded-lg border border-sand bg-[#f6efe4] px-3.5 py-3 focus-within:border-secondary">
                <Lock className="size-4 shrink-0 text-ink/50" aria-hidden />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  minLength={8}
                  placeholder="••••••••••••"
                  className="w-full bg-transparent text-sm text-ink placeholder:text-ink/40 focus:outline-none"
                />
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
              </div>
            </div>

            <label className="flex items-center gap-2 pt-6 text-xs text-ink">
              <input
                type="checkbox"
                required
                className="size-4 rounded accent-primary"
              />
              I agree to Terms &amp; Cafe Service SLA
            </label>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-secondary"
            >
              Continue to Setup &amp; Payment
              <ArrowRight className="size-4" aria-hidden />
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-ink">
            Already have an active account?{" "}
            <Link href="/sign-in" className="font-bold text-secondary hover:text-primary">
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