import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface AttioLogo {
  /** the company's name, for screen readers */
  name: string;
  /** the wordmark (an svg, img or styled text) */
  logo: ReactNode;
  /** a customer story to link to: the cell gets a small ↗ in its corner */
  href?: string;
}

export interface AttioLogosProps {
  /** ten logos: five a row on desktop; phones show the first six, two a row */
  logos: AttioLogo[];
  className?: string;
}

/**
 * A hairline grid of customer wordmarks inside the page frame: two rows of five pale-grey
 * cells on desktop, three rows of two on phones. Cells with a story carry a ↗ and darken
 * a shade on hover.
 */
export function AttioLogos({ logos, className }: AttioLogosProps) {
  return (
    <section className={cn("bg-background text-foreground lg:px-gutter", className)}>
      <ul className="mx-auto grid max-w-page grid-cols-2 gap-px border-b border-border bg-border lg:grid-cols-5 lg:border-x">
        {logos.map((item, i) => {
          const body = (
            <>
              <span role="img" aria-label={item.name} className="flex items-center [&_svg]:h-6 [&_svg]:w-auto">
                {item.logo}
              </span>
              {item.href && <ArrowUpRight aria-hidden className="absolute top-3 right-3 size-3 text-muted-foreground/70" />}
            </>
          );
          const cell = "relative flex h-24 items-center justify-center bg-muted transition-colors duration-200 ease-[cubic-bezier(0,0,0,1)] motion-reduce:transition-none";
          return (
            <li key={item.name} className={cn("flex", i >= 6 && "hidden lg:flex", i >= 10 && "lg:hidden")}>
              {item.href ? (
                <a href={item.href} className={cn(cell, "w-full hover:bg-secondary")}>
                  {body}
                </a>
              ) : (
                <div className={cn(cell, "w-full")}>{body}</div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
