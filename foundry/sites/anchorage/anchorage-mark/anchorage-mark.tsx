import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface AnchorageMarkProps {
  /** the emblem, e.g. a lucide icon; drawn in the text colour */
  emblem: ReactNode;
  /** the wordmark, one entry per line (e.g. ["strata", "reserve"]); empty for the emblem alone */
  lines?: string[];
  /** the brand's name, read out by screen readers */
  label: string;
  /** link target (usually the home page) */
  href?: string;
  className?: string;
}

/** Emblem + a two-line lowercase wordmark with tight leading. */
export function AnchorageMark({ emblem, lines = [], label, href, className }: AnchorageMarkProps) {
  const inner = (
    <>
      <span aria-hidden className="flex size-11 shrink-0 items-center justify-center [&>svg]:size-full">
        {emblem}
      </span>
      {lines.length > 0 && (
        <span aria-hidden className="flex flex-col font-display text-[1.1875rem] leading-[0.9] font-[450] lowercase">
          {lines.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </span>
      )}
    </>
  );
  const classes = cn("inline-flex items-center gap-3 text-foreground", className);
  return href ? (
    <a href={href} aria-label={label} className={classes}>
      {inner}
    </a>
  ) : (
    <span role="img" aria-label={label} className={classes}>
      {inner}
    </span>
  );
}
