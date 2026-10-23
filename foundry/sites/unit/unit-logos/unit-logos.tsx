import type { CSSProperties } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import "./unit-logos.css";

/** How a customer's name is set, standing in for the variety of real logos. */
export type UnitLogoStyle = "bold" | "regular" | "caps" | "italic" | "mono";

export interface UnitLogo {
  /** the customer's name, shown as a typeset wordmark */
  name: string;
  /** a second name that takes turns with the first in the same cell */
  next?: string;
  /** how the name is set */
  style?: UnitLogoStyle;
  /** a case study link: shows the small chevron dot in the cell's corner */
  href?: string;
}

export interface UnitLogosProps {
  /** twelve cells read best: 6×2 on desktop, 3×4 on phones */
  logos: UnitLogo[];
  /** label for the grid (screen readers) */
  label?: string;
  className?: string;
}

const styles: Record<UnitLogoStyle, string> = {
  bold: "font-bold tracking-[-0.03em]",
  regular: "font-normal tracking-[-0.02em]",
  caps: "font-bold uppercase tracking-[0.02em] text-[0.85em]",
  italic: "font-semibold italic tracking-[-0.03em]",
  mono: "font-mono font-normal tracking-[-0.04em] text-[0.9em]",
};

/** A quiet grid of customer wordmarks; some cells swap names in place with a blur. */
export function UnitLogos({ logos, label, className }: UnitLogosProps) {
  return (
    <section aria-label={label} className={cn("bg-background font-sans text-foreground", className)}>
      <ul className="mx-auto grid max-w-page grid-cols-3 gap-y-2.5 px-[calc(var(--page-gutter)-0.5rem)] pt-11 pb-6 lg:grid-cols-6 lg:gap-y-6 lg:px-[calc(var(--page-gutter)-1.25rem)] lg:pt-[3.25rem] lg:pb-10">
        {logos.map((logo, i) => {
          const set = cn("block text-[0.8125rem] leading-none whitespace-nowrap lg:text-[1.25rem]", styles[logo.style ?? "bold"]);
          const Cell = logo.href ? "a" : "div";
          return (
            <li key={`${logo.name}-${i}`}>
              <Cell
                {...(logo.href ? { href: logo.href } : {})}
                className="group/logo relative flex h-8 items-center justify-center rounded-lg transition-colors duration-[325ms] ease-[cubic-bezier(0.075,0.82,0.165,1)] hover:bg-foreground/5 motion-reduce:transition-none lg:h-12"
              >
                <span className="relative grid place-items-center" style={{ "--unit-logos-delay": `${-((i * 7) % 12) * 0.85}s` } as CSSProperties}>
                  <span className={cn(set, logo.next && "unit-logos-a", "col-start-1 row-start-1")}>{logo.name}</span>
                  {logo.next && (
                    <span aria-hidden className={cn(set, "unit-logos-b col-start-1 row-start-1")}>
                      {logo.next}
                    </span>
                  )}
                </span>
                {logo.href && (
                  <span
                    aria-hidden
                    className="absolute top-0.5 right-3 flex size-3 items-center justify-center rounded-full bg-foreground/10 transition-colors duration-[325ms] ease-[cubic-bezier(0.075,0.82,0.165,1)] group-hover/logo:bg-background motion-reduce:transition-none lg:top-1 lg:right-8"
                  >
                    <ChevronRight className="size-2" strokeWidth={2.5} />
                  </span>
                )}
              </Cell>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
