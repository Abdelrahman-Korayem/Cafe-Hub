import { z } from "zod";

const identifier = z
  .string()
  .trim()
  .min(1, "Enter your email or mobile number")
  .refine(
    (value) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
      /^0?1[0125]\d{8}$/.test(value.replace(/\s/g, "")),
    "Enter a valid email or Egyptian mobile number",
  );

export const loginSchema = z.object({
  identifier,
  password: z.string().min(1, "Enter your password"),
  remember: z.boolean(),
});

export const pinSchema = z.object({
  identifier,
  pin: z.string().regex(/^\d{4,6}$/, "PIN must be 4 to 6 digits"),
  remember: z.boolean(),
});

export type LoginValues = z.infer<typeof loginSchema>;
export type PinValues = z.infer<typeof pinSchema>;