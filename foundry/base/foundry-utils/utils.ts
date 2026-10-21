import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Join class names; later Tailwind classes win over earlier ones (e.g. a caller's `className`). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * A stable DOM id made from a label ("Pro plan" → "pro-plan"), optionally with a prefix
 * ("release-1-2-0"). The same text always gives the same id, so server and client agree.
 */
export function slugId(text: string, prefix?: string) {
  const slug = text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return [prefix, slug || "item"].filter(Boolean).join("-");
}
