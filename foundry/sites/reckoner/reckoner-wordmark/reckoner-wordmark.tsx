import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface ReckonerWordmarkProps {
  /** the firm's name */
  name: string;
  /** the small tracked line under the name, e.g. "Credit partners" */
  descriptor?: string;
  /** an icon before the name (e.g. a lucide icon) */
  icon?: ReactNode;
  /** colour of the icon: the text colour, or the theme's highlight (as in the footer) */
  tone?: "inherit" | "highlight";
  /** where the lockup links to; leave out for plain text */
  href?: string;
  className?: string;
}

/** Icon + name + small descriptor line: about 180×38px on desktop, a little smaller on phones. */
export function ReckonerWordmark({ name, descriptor, icon, tone = "inherit", href, className }: ReckonerWordmarkProps) {
  const inner = (
    <>
      {icon && (
        <span className={cn("flex [&_svg]:size-8 lg:[&_svg]:size-9", tone === "highlight" && "text-highlight")}>{icon}</span>
      )}
      <span className="flex flex-col">
        <span className="font-display text-[1.75rem] leading-[0.9] font-medium tracking-[-0.03em] lg:text-[2rem]">{name}</span>
        {descriptor && (
          <span className="mt-1 text-[0.5625rem] leading-none font-medium tracking-[0.24em] uppercase lg:text-[0.625rem]">
            {descriptor}
          </span>
        )}
      </span>
    </>
  );
  const classes = cn("inline-flex items-center gap-2 text-current", className);
  return href ? (
    <a href={href} className={classes} aria-label={name}>
      {inner}
    </a>
  ) : (
    <span className={classes}>{inner}</span>
  );
}
