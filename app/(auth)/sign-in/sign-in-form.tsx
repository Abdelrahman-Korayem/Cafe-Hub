"use client";

import Link from "next/link";
import { useState, type FormEvent, type ReactNode } from "react";
import { loginSchema, pinSchema } from "./schema";

type Mode = "owner" | "pin";
type Errors = Partial<Record<"identifier" | "password" | "pin", string>>;

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
  hint?: ReactNode;
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

export default function SignInForm() {
  const [mode, setMode] = useState<Mode>("owner");
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
    const identifier = text("identifier");
    const remember = data.get("remember") === "on";

    const result =
      mode === "owner"
        ? loginSchema.safeParse({ identifier, password: text("password"), remember })
        : pinSchema.safeParse({ identifier, pin: text("pin"), remember });

    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof Errors;
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
        <span
          aria-current="page"
          className="flex items-center gap-1.5 rounded-full bg-primary px-5 py-2 text-cream"
        >
          <span aria-hidden className="size-1.5 rounded-full bg-secondary" />
          Sign In
        </span>
        <Link
          href="/register"
          className="rounded-full px-5 py-2 text-primary/70 transition hover:text-primary"
        >
          Register Café
        </Link>
      </div>

      <div className="mt-4 text-center">
        <h1 className="text-3xl font-bold tracking-tight">Sign in to núvo</h1>
        <p className="mx-auto mt-2 max-w-xs text-sm text-primary/70">
          Manage your live queues, floor tables, and artisanal workflows.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-1 rounded-xl bg-cream p-1">
        {(["owner", "pin"] as const).map((m) => (
          <button
            key={m}
            type="button"
            aria-pressed={mode === m}
            onClick={() => {
              setMode(m);
              setErrors({});
            }}
            className={`rounded-lg py-2 text-xs font-medium transition focus-visible:outline-2 focus-visible:outline-tertiary ${
              mode === m
                ? "bg-white text-primary shadow-sm"
                : "text-primary/60 hover:text-primary"
            }`}
          >
            {m === "owner" ? "Owner & Manager" : "Quick PIN"}
          </button>
        ))}
      </div>

      <form
        noValidate
        onSubmit={handleSubmit}
        onChange={(e) => {
          const name = (e.target as HTMLFormElement).name as keyof Errors;
          if (name && errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
        }}
        className="mt-5 flex flex-col gap-4"
      >
        <Field
          label="Business Email or Mobile"
          id="identifier"
          hint="EG (+20)"
          error={errors.identifier}
        >
          <IconInput icon={<span className="text-base leading-none">@</span>}>
            <input
              id="identifier"
              name="identifier"
              type="text"
              autoComplete="username"
              placeholder="name@cafe.com or 0100 123 4567"
              className={`${inputClass} pl-10 pr-3`}
              {...a11y("identifier")}
            />
          </IconInput>
        </Field>

        {mode === "owner" ? (
          <Field
            key="password"
            label="Password"
            id="password"
            hint={
              <Link href="/forgot-password" className="font-medium text-secondary hover:underline">
                Forgot password?
              </Link>
            }
            error={errors.password}
          >
            <IconInput icon={icons.lock}>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
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
        ) : (
          <Field key="pin" label="Quick PIN" id="pin" hint="4 to 6 digits" error={errors.pin}>
            <IconInput icon={icons.lock}>
              <input
                id="pin"
                name="pin"
                type="password"
                inputMode="numeric"
                maxLength={6}
                autoComplete="off"
                placeholder="••••"
                className={`${inputClass} pl-10 pr-3 tracking-widest`}
                {...a11y("pin")}
              />
            </IconInput>
          </Field>
        )}

        <div className="flex items-center justify-between gap-2">
          <label htmlFor="remember" className="flex items-center gap-2 text-xs text-primary/80">
            <input
              id="remember"
              name="remember"
              type="checkbox"
              className="size-4 accent-primary"
            />
            Keep this terminal logged in
          </label>
          <span className="text-xs text-primary/60">2FA Shield</span>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-cream shadow-md transition hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary disabled:opacity-60"
        >
          {submitting ? "Signing in…" : "Sign In"}
        </button>
      </form>

      <div className="my-5 flex items-center gap-3 text-[0.65rem] uppercase tracking-widest text-primary/50">
        <span className="h-px flex-1 bg-primary/10" />
        Or continue with
        <span className="h-px flex-1 bg-primary/10" />
      </div>

      {/* Wire these to your auth provider; add the brand icons next to the labels */}
      <div className="grid grid-cols-2 gap-3">
        {["Google", "Instant SMS OTP"].map((provider) => (
          <button
            key={provider}
            type="button"
            className="rounded-full border border-primary/15 bg-white py-3 text-xs font-medium transition hover:bg-cream focus-visible:outline-2 focus-visible:outline-tertiary"
          >
            {provider}
          </button>
        ))}
      </div>
    </section>
  );
}