import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface AatArchitectenWordmarkProps {
  /** the studio name, set in light wide-tracked capitals */
  name: string;
  /** the small word after the hairline (e.g. the discipline) */
  descriptor?: string;
  /** where the wordmark links; without it, plain text */
  href?: string;
  /** a real logo to show instead of the name */
  children?: ReactNode;
  className?: string;
}

/** Name | descriptor, on one baseline. 20px-tall caps on phones, 30px from 1024px. */
export function AatArchitectenWordmark({ name, descriptor, href, children, className }: AatArchitectenWordmarkProps) {
  const inner = (
    <>
      <span className="font-display text-[1.625rem] leading-[0.75] font-light tracking-[0.18em] uppercase lg:text-[2.375rem]">
        {children ?? name}
      </span>
      {descriptor && (
        <>
          {/* the thin upright rule between name and descriptor */}
          <span aria-hidden className="ml-1 h-[1.375rem] w-px bg-current lg:ml-1.5 lg:h-[1.875rem]" />
          <span className="ml-3 font-sans text-[0.8125rem] leading-none lg:ml-5 lg:text-xl">{descriptor}</span>
        </>
      )}
    </>
  );
  const classes = cn("inline-flex items-end text-foreground", className);
  return href ? (
    <a href={href} className={classes}>
      {inner}
    </a>
  ) : (
    <span className={classes}>{inner}</span>
  );
}
