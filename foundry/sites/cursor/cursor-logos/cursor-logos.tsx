import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface CursorLogo {
  /** the company's name, for screen readers */
  name: string;
  /** the wordmark (an svg, img or styled text) */
  logo: ReactNode;
}

export interface CursorLogosProps {
  /** the line above the tiles */
  caption: string;
  /** eight logos (four per row on phones) */
  logos: CursorLogo[];
  className?: string;
}

/** Caption and eight logo tiles. */
export function CursorLogos({ caption, logos, className }: CursorLogosProps) {
  return (
    <section className={cn("bg-background pb-8 text-foreground", className)}>
      <div className="mx-auto max-w-[calc(var(--page-width)+2*var(--page-gutter))] px-gutter">
        <p className="mx-auto max-w-[22rem] text-center text-[0.8125rem] leading-5 tracking-[0.01em] sm:max-w-none lg:text-sm">{caption}</p>
        <ul className="mt-4 grid grid-cols-4 gap-2 lg:mt-6 lg:grid-cols-8 lg:gap-2.5">
          {logos.map((l) => (
            <li
              key={l.name}
              role="img"
              aria-label={l.name}
              className="flex h-15 items-center justify-center overflow-clip rounded-lg border border-border bg-card px-1.5 lg:h-25"
            >
              {l.logo}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
