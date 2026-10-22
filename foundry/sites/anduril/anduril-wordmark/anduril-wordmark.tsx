import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface AndurilWordmarkProps {
  /** the emblem, e.g. a lucide icon; drawn in the text colour */
  emblem: ReactNode;
  /** the brand name, set in bold capitals */
  name: string;
  /** link target (usually the home page); leave out for a plain mark */
  href?: string;
  /** larger mark, as in the footer */
  size?: "md" | "lg";
  className?: string;
}

/** Line emblem + bold all-caps wordmark. */
export function AndurilWordmark({ emblem, name, href, size = "md", className }: AndurilWordmarkProps) {
  const inner = (
    <>
      <span aria-hidden className={cn("flex shrink-0 items-center justify-center [&>svg]:size-full", size === "lg" ? "size-6" : "size-[1.375rem]")}>
        {emblem}
      </span>
      <span className={cn("font-display leading-none font-bold tracking-[-0.01em] uppercase", size === "lg" ? "text-[1.5rem]" : "text-[1.25rem]")}>{name}</span>
    </>
  );
  const classes = cn("inline-flex items-center gap-1.5 text-foreground", className);
  return href ? (
    <a href={href} className={classes}>
      {inner}
    </a>
  ) : (
    <span className={classes}>{inner}</span>
  );
}
