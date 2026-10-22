import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./prenuvo-press.css";

export interface PrenuvoPressItem {
  /** the publication's name */
  name: string;
  /** how the name is set (plain text stands in for a logo) */
  look?: "heavy" | "caps" | "light" | "condensed" | "italic";
  /** a real logo instead of the text */
  logo?: ReactNode;
}

export interface PrenuvoPressProps {
  /** the publications, in order */
  items: PrenuvoPressItem[];
  /** seconds for one full pass */
  duration?: number;
  /** a label for screen readers */
  label?: string;
  className?: string;
}

const looks = {
  heavy: "font-display font-extrabold tracking-[-0.02em]",
  caps: "font-display font-bold uppercase tracking-[-0.01em]",
  light: "font-display font-light uppercase tracking-[0.3em]",
  condensed: "font-display font-semibold uppercase tracking-[-0.04em] scale-x-90",
  italic: "font-sans font-bold italic uppercase",
};

export function PrenuvoPress({ items, duration = 50, label, className }: PrenuvoPressProps) {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center gap-10 pr-10 lg:gap-14 lg:pr-14">
      {items.map((it) => (
        <li key={it.name} className={cn("text-xl whitespace-nowrap text-muted-foreground/55 lg:text-[2rem]", looks[it.look ?? "heavy"])}>
          {it.logo ?? it.name}
        </li>
      ))}
    </ul>
  );
  return (
    <section aria-label={label} className={cn("relative z-10 overflow-x-clip bg-background py-10 lg:py-[3.25rem]", className)}>
      <div className="prenuvo-press-track flex w-max" style={{ "--prenuvo-press-duration": `${duration}s` } as CSSProperties}>
        {row(false)}
        {row(true)}
      </div>
      {/* soft white edges */}
      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-[linear-gradient(90deg,var(--background)_15%,transparent)] lg:w-40" />
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-[linear-gradient(270deg,var(--background)_15%,transparent)] lg:w-40" />
    </section>
  );
}
