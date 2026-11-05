"use client";

import { useState } from "react";
import Link from "next/link";
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


export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);

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

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-10 space-y-5 lg:mt-20"
          >
            <div>
              <div className="flex items-center justify-between gap-3">
                <label htmlFor="identifier" className="text-xs font-semibold text-ink">
                  Work Email or Staff Username
                </label>
                <span className="text-[10px] text-ink/50">
                  e.g. roastery admin
                </span>
              </div>
              <div className="mt-2 flex items-center gap-3 rounded-lg border border-sand bg-[#f6efe4] px-3.5 py-3 focus-within:border-secondary">
                <Mail className="size-4 shrink-0 text-ink/50" aria-hidden />
                <input
                  id="identifier"
                  type="text"
                  required
                  autoComplete="username"
                  placeholder="owner@cafehub.com or captain1"
                  className="w-full bg-transparent text-sm text-ink placeholder:text-ink/40 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-xs font-semibold text-ink">
                  Security Password
                </label>
                <Link
                  href="#"
                  className="text-[11px] font-semibold text-secondary hover:text-primary"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="mt-2 flex items-center gap-3 rounded-lg border border-sand bg-[#f6efe4] px-3.5 py-3 focus-within:border-secondary">
                <Lock className="size-4 shrink-0 text-ink/50" aria-hidden />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="current-password"
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

            <div className="flex items-center justify-between gap-3 pt-1">
              <label className="flex items-center gap-2 text-xs text-ink">
                <input
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
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-secondary"
            >
              Sign In to Workspace
              <ArrowRight className="size-4" aria-hidden />
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-ink">
            Want to register a new cafe?{" "}
            <Link href="/register" className="font-bold text-secondary hover:text-primary">
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