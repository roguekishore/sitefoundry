import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface AirwallexWordmarkProps {
  /** the company name */
  name: string;
  /** a small mark before the name (e.g. a lucide icon) */
  mark?: ReactNode;
  /** where it links to; plain text when not set */
  href?: string;
  /** md: the header's 24px · lg: the footer's 30px */
  size?: "md" | "lg";
  className?: string;
}

/** The company's name set bold with a highlight-coloured mark. */
export function AirwallexWordmark({ name, mark, href, size = "md", className }: AirwallexWordmarkProps) {
  const classes = cn(
    "inline-flex items-center font-display font-bold tracking-[-0.02em] text-foreground",
    size === "md" ? "gap-1.5 text-[1.375rem] lg:text-2xl [&_svg]:size-6" : "gap-2 text-[1.875rem] [&_svg]:size-8",
    className,
  );
  const inner = (
    <>
      {mark && <span className="text-highlight [&_svg]:stroke-[2.75]">{mark}</span>}
      {name}
    </>
  );
  return href ? (
    <a href={href} className={classes}>
      {inner}
    </a>
  ) : (
    <span className={classes}>{inner}</span>
  );
}
