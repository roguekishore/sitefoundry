import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./linear-logos.css";

export interface LinearLogo {
  /** the company's name, for screen readers */
  name: string;
  /** the wordmark (an svg, img or styled text) */
  logo: ReactNode;
}

export interface LinearLogosProps {
  /** the wordmarks; seven fill the desktop row */
  logos: LinearLogo[];
  /** the small monospace line under the row */
  caption?: ReactNode;
  className?: string;
}

/** Customer wordmarks in one row (a marquee on phones) with a mono caption. */
export function LinearLogos({ logos, caption, className }: LinearLogosProps) {
  const item = (l: LinearLogo, i: number, copy: boolean) => (
    <li
      key={`${copy ? "b" : "a"}-${l.name}-${i}`}
      aria-hidden={copy || undefined}
      className={cn("flex h-10 shrink-0 items-center text-foreground [&_svg]:h-5 [&_svg]:w-auto lg:[&_svg]:h-6", copy && "lg:hidden")}
    >
      <span role="img" aria-label={l.name} className="flex items-center">
        {l.logo}
      </span>
    </li>
  );

  return (
    <section className={cn("bg-background pt-10 pb-14 text-foreground lg:pt-28 lg:pb-24", className)}>
      <div className="overflow-clip lg:mx-auto lg:max-w-[calc(var(--page-width)+2*var(--page-gutter))] lg:px-gutter">
        <ul className="linear-logos-track flex w-max gap-10 pr-10 lg:w-full lg:justify-between lg:gap-6 lg:pr-0">
          {logos.map((l, i) => item(l, i, false))}
          {logos.map((l, i) => item(l, i, true))}
        </ul>
      </div>
      {caption && (
        <p className="mx-auto mt-10 max-w-[calc(var(--page-width)+2*var(--page-gutter))] px-gutter font-mono text-xs tracking-[0.02em] text-muted-foreground/70 uppercase">
          {caption}
        </p>
      )}
    </section>
  );
}
