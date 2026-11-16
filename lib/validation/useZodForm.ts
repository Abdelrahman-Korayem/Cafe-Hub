"use client";

import { useState, type FocusEvent, type FormEvent } from "react";
import type { ZodType } from "zod";

type Issue = { path: readonly PropertyKey[]; message: string };

// First message per field wins
function toErrors(issues: readonly Issue[]) {
  const out: Record<string, string> = {};
  for (const issue of issues) {
    const key = String(issue.path[0] ?? "");
    if (key && !(key in out)) out[key] = issue.message;
  }
  return out;
}

// The event target is the form control that fired the event
const asField = (target: EventTarget) => target as HTMLInputElement;

export const text = (data: FormData, key: string) =>
  String(data.get(key) ?? "");

type Options<T> = {
  schema: ZodType<T>;
  read: (data: FormData) => unknown;
  onValid: (values: T) => void | Promise<void>;
};

export function useZodForm<T extends Record<string, unknown>>({
  schema,
  read,
  onValid,
}: Options<T>) {
  type Name = keyof T & string;

  const [errors, setErrors] = useState<Record<string, string | undefined>>({});
  const [submitting, setSubmitting] = useState(false);

  const fieldError = (form: HTMLFormElement, name: string) => {
    const result = schema.safeParse(read(new FormData(form)));
    return result.success ? undefined : toErrors(result.error.issues)[name];
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const result = schema.safeParse(read(new FormData(form)));

    if (!result.success) {
      const next = toErrors(result.error.issues);
      setErrors(next);
      const first = Object.keys(next)[0];
      (form.elements.namedItem(first) as HTMLElement | null)?.focus?.();
      return;
    }

    setErrors({});
    setSubmitting(true);
    try {
      await onValid(result.data);
    } finally {
      setSubmitting(false);
    }
  };

  // Validate a field when the user leaves it
  const onBlur = (e: FocusEvent<HTMLFormElement>) => {
    const field = asField(e.target);
    if (!field.name || field.type === "checkbox") return;
    const message = fieldError(e.currentTarget, field.name);
    setErrors((prev) => ({ ...prev, [field.name]: message }));
  };

  // Once a field shows an error, re-check it live while the user types
  const onChange = (e: FormEvent<HTMLFormElement>) => {
    const field = asField(e.target);
    if (!field.name || !errors[field.name]) return;
    const message = fieldError(e.currentTarget, field.name);
    setErrors((prev) => ({ ...prev, [field.name]: message }));
  };

  return {
    errors: errors as Partial<Record<Name, string>>,
    submitting,
    formProps: { noValidate: true, onSubmit, onBlur, onChange },
    fieldProps: (name: Name) => ({
      id: name,
      name,
      "aria-invalid": errors[name] ? (true as const) : undefined,
      "aria-describedby": errors[name] ? `${name}-error` : undefined,
    }),
  };
}