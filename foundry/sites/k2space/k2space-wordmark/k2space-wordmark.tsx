import { Orbit } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface K2spaceWordmarkProps {
  /** the first word of the name */
  name: string;
  /** the second word, after the icon */
  suffix?: string;
  /** size it with a text size class (the icon follows the font size) */
  className?: string;
}

/** Wide-set light capitals with a thin orbit icon between the two words. */
export function K2spaceWordmark({ name, suffix, className }: K2spaceWordmarkProps) {
  return (
    <span
      aria-label={suffix ? `${name} ${suffix}` : name}
      className={cn("inline-flex items-center gap-[0.35em] font-display leading-none font-normal tracking-[0.2em] uppercase [font-stretch:125%]", className)}
    >
      <span aria-hidden>{name}</span>
      <Orbit aria-hidden strokeWidth={1.5} className="size-[1.45em] shrink-0" />
      {suffix && <span aria-hidden>{suffix}</span>}
    </span>
  );
}
