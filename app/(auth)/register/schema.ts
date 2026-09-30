import { z } from "zod";

export const BRANCHES = [
  "Zamalek",
  "New Cairo (5th)",
  "Maadi",
  "Alexandria",
  "Sheikh Zayed",
] as const;

export const registerSchema = z.object({
  contactName: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters"),
  cafeName: z
    .string()
    .trim()
    .min(2, "Café name must be at least 2 characters"),
  email: z.string().trim().email("Enter a valid email address"),
  phone: z
    .string()
    .trim()
    .refine(
      (value) => /^1[0125]\d{8}$/.test(value.replace(/\s/g, "")),
      "Enter a valid Egyptian mobile number",
    ),
  branch: z.enum(BRANCHES, { message: "Select your primary branch" }),
  password: z.string().min(8, "Password must be at least 8 characters"),
  terms: z.boolean().refine((value) => value === true, {
    message: "You must accept the terms to continue",
  }),
});

export type RegisterValues = z.infer<typeof registerSchema>;