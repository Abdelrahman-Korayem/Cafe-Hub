"use client";

import Link from "next/link";
import { useState, type FormEvent, type ReactNode } from "react";
import { BRANCHES, registerSchema, type RegisterValues } from "./schema";

type Errors = Partial<Record<keyof RegisterValues, string>>;

const iconProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

const icons = {
  user: (
    <svg {...iconProps}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
    </svg>
  ),
  cup: (
    <svg {...iconProps}>
      <path d="M4 8h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8z" />
      <path d="M17 9h2a2 2 0 0 1 0 5h-2" />
      <path d="M8 3v2M12 3v2" />
    </svg>
  ),
  mail: (
    <svg {...iconProps}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  lock: (
    <svg {...iconProps}>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  ),
  eye: (
    <svg {...iconProps}>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  eyeOff: (
    <svg {...iconProps}>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
      <path d="M3 3l18 18" />
    </svg>
  ),
};

const inputClass =
  "w-full rounded-xl bg-cream py-3 text-sm text-primary outline-none ring-1 ring-transparent transition placeholder:text-primary/40 focus:ring-2 focus:ring-tertiary aria-[invalid=true]:ring-red-700";

function Field({
  label,
  id,
  hint,
  error,
  children,
}: {
  label: string;
  id: string;
  hint?: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-baseline justify-between gap-2">
        <label htmlFor={id} className="text-xs font-semibold text-primary">
          {label}
        </label>
        {hint && <span className="text-xs text-primary/60">{hint}</span>}
      </div>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-xs text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

function IconInput({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <div className="relative">
      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-primary/50">
        {icon}
      </span>
      {children}
    </div>
  );
}

export default function RegisterForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const a11y = (name: keyof Errors) => ({
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const text = (key: string) => String(data.get(key) ?? "");

    const result = registerSchema.safeParse({
      contactName: text("contactName"),
      cafeName: text("cafeName"),
      email: text("email"),
      phone: text("phone"),
      branch: text("branch"),
      password: text("password"),
      terms: data.get("terms") === "on",
    });

    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof RegisterValues;
        next[key] ??= issue.message;
      }
      setErrors(next);
      const first = Object.keys(next)[0];
      (form.elements.namedItem(first) as HTMLElement | null)?.focus?.();
      return;
    }

    setErrors({});
    setSubmitting(true);
    try {
      // TODO: send result.data to your API route or server action.
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="w-full max-w-md rounded-3xl bg-white p-6 shadow-[0_24px_60px_-20px_rgba(27,59,43,0.35)] sm:p-8">
      {/* Swap this wordmark for your logo component/image */}
      <p className="text-center text-4xl font-bold tracking-tight text-primary">
        núvo
      </p>

      <div className="mx-auto mt-5 flex w-fit rounded-full bg-cream p-1 text-xs font-medium">
        <Link
          href="/sign-in"
          className="rounded-full px-5 py-2 text-primary/70 transition hover:text-primary"
        >
          Sign In
        </Link>
        <span
          aria-current="page"
          className="flex items-center gap-1.5 rounded-full bg-primary px-5 py-2 text-cream"
        >
          <span aria-hidden className="size-1.5 rounded-full bg-secondary" />
          Register
        </span>
      </div>

      <div className="mt-4 text-center">
        <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-secondary">
          Specialty Café Suite
        </p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight">
          Register your café
        </h1>
        <p className="mx-auto mt-2 max-w-xs text-sm text-primary/70">
          Launch touchless QR table ordering, multi-café inventory, and
          intelligent barista workflows in 48 hours.
        </p>
      </div>

      <form
        noValidate
        onSubmit={handleSubmit}
        onChange={(e) => {
          const name = (e.target as HTMLFormElement).name as keyof Errors;
          if (name && errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
        }}
        className="mt-6 flex flex-col gap-4"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Primary Contact Name" id="contactName" error={errors.contactName}>
            <IconInput icon={icons.user}>
              <input
                id="contactName"
                name="contactName"
                type="text"
                autoComplete="name"
                placeholder="Your full name"
                className={`${inputClass} pl-10 pr-3`}
                {...a11y("contactName")}
              />
            </IconInput>
          </Field>

          <Field label="Café Name" id="cafeName" error={errors.cafeName}>
            <IconInput icon={icons.cup}>
              <input
                id="cafeName"
                name="cafeName"
                type="text"
                autoComplete="organization"
                placeholder="Your café"
                className={`${inputClass} pl-10 pr-3`}
                {...a11y("cafeName")}
              />
            </IconInput>
          </Field>
        </div>

        <Field label="Work Email Address" id="email" error={errors.email}>
          <IconInput icon={icons.mail}>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="user@user.com"
              className={`${inputClass} pl-10 pr-3`}
              {...a11y("email")}
            />
          </IconInput>
        </Field>

        <Field
          label="WhatsApp / Mobile Number"
          id="phone"
          hint="Instant dispatch verification"
          error={errors.phone}
        >
          <div className="relative">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 border-r border-primary/15 pr-3 text-sm font-medium">
              +20
            </span>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              placeholder="10 1234 5678"
              className={`${inputClass} pl-16 pr-3`}
              {...a11y("phone")}
            />
          </div>
        </Field>

        <div className="flex flex-col gap-1.5">
          <div className="flex items-baseline justify-between gap-2">
            <span id="branch-label" className="text-xs font-semibold">
              Primary Branch Location
            </span>
            <span className="text-xs text-primary/60">Select flagship area</span>
          </div>
          <div
            role="radiogroup"
            aria-labelledby="branch-label"
            className="flex flex-wrap gap-2"
          >
            {BRANCHES.map((branch, i) => (
              <label key={branch} className="cursor-pointer">
                <input
                  type="radio"
                  name="branch"
                  value={branch}
                  defaultChecked={i === 0}
                  className="peer sr-only"
                />
                <span className="block rounded-full bg-cream px-3 py-1.5 text-xs font-medium transition peer-checked:bg-primary peer-checked:text-cream peer-focus-visible:ring-2 peer-focus-visible:ring-tertiary peer-focus-visible:ring-offset-2">
                  {branch}
                </span>
              </label>
            ))}
          </div>
          {errors.branch && (
            <p role="alert" className="text-xs text-red-700">
              {errors.branch}
            </p>
          )}
        </div>

        <Field
          label="Admin Master Password"
          id="password"
          hint="Minimum 8 characters"
          error={errors.password}
        >
          <IconInput icon={icons.lock}>
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              placeholder="••••••••••••"
              className={`${inputClass} pl-10 pr-11`}
              {...a11y("password")}
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              aria-pressed={showPassword}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-primary/60 transition hover:text-primary focus-visible:outline-2 focus-visible:outline-tertiary"
            >
              {showPassword ? icons.eyeOff : icons.eye}
            </button>
          </IconInput>
        </Field>

        <div className="flex flex-col gap-1.5">
          <div className="flex items-start gap-2.5">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              className="mt-0.5 size-4 shrink-0 accent-primary"
              {...a11y("terms")}
            />
            <label htmlFor="terms" className="text-xs leading-relaxed text-primary/80">
              I agree to the{" "}
              <Link href="/merchant-agreement" className="font-medium text-primary underline">
                Merchant Agreement
              </Link>
              ,{" "}
              <Link href="/terms" className="font-medium text-primary underline">
                Terms of Service
              </Link>
              , and verify ownership of this hospitality brand.
            </label>
          </div>
          {errors.terms && (
            <p id="terms-error" role="alert" className="text-xs text-red-700">
              {errors.terms}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-cream shadow-md transition hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary disabled:opacity-60"
        >
          {submitting ? "Creating account…" : "Create Account & Start 48h Handover"}
        </button>
      </form>

      <div className="my-5 flex items-center gap-3 text-[0.65rem] uppercase tracking-widest text-primary/50">
        <span className="h-px flex-1 bg-primary/10" />
        Or expedited setup
        <span className="h-px flex-1 bg-primary/10" />
      </div>

      {/* Wire these to your auth provider; add the brand icons next to the labels */}
      <div className="grid grid-cols-2 gap-3">
        {["Google", "WhatsApp"].map((provider) => (
          <button
            key={provider}
            type="button"
            className="rounded-xl bg-cream py-3 text-xs font-medium transition hover:bg-cream/70 focus-visible:outline-2 focus-visible:outline-tertiary"
          >
            {provider}
          </button>
        ))}
      </div>

      <p className="mt-6 border-t border-primary/10 pt-5 text-center text-xs text-primary/80">
        Already running your café on núvo?{" "}
        <Link href="/sign-in" className="font-semibold text-primary hover:underline">
          Sign In
        </Link>
      </p>
    </section>
  );
}