import { z } from "zod";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const USERNAME_RE = /^[a-zA-Z0-9._-]{3,}$/;

export const registerSchema = z.object({
  cafeName: z
    .string()
    .trim()
    .min(1, "Cafe name is required")
    .min(2, "Cafe name must be at least 2 characters")
    .max(60, "Cafe name must be 60 characters or fewer"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .regex(EMAIL_RE, "Enter a valid email address, like owner@cafehub.com"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(64, "Password must be 64 characters or fewer")
    .refine(
      (value) => /[A-Za-z]/.test(value) && /\d/.test(value),
      "Use at least one letter and one number",
    ),
  terms: z.boolean().refine((value) => value, {
    message: "You need to accept the Terms & Cafe Service SLA",
  }),
});

export const loginSchema = z.object({
  identifier: z
    .string()
    .trim()
    .min(1, "Enter your email or staff username")
    .refine(
      (value) =>
        value.includes("@") ? EMAIL_RE.test(value) : USERNAME_RE.test(value),
      "Enter a valid email, or a username of at least 3 characters (letters, numbers, . _ -)",
    ),
  password: z.string().min(1, "Enter your password"),
  remember: z.boolean(),
});

export type RegisterValues = z.infer<typeof registerSchema>;
export type LoginValues = z.infer<typeof loginSchema>;