import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface SupabaseLogo {
  /** the company's name, for screen readers and as the fallback wordmark */
  name: string;
  /** the wordmark (an svg, img or styled text); shown in grey */
  logo?: ReactNode;
}

export interface SupabaseLogosProps {
  /** the small grey line above the band */
  label: string;
  /** twelve fill the grid: 3 × 4 on phones, 6 × 2 on desktop */
  logos: SupabaseLogo[];
  className?: string;
}

/** A small grey label, then a band ruled top and bottom (and at its sides on desktop) holding a grid of grey wordmarks. */
export function SupabaseLogos({ label, logos, className }: SupabaseLogosProps) {
  return (
    <section className={cn("bg-background text-foreground", className)}>
      <p className="mx-auto box-content max-w-page px-gutter pb-6 text-sm text-muted-foreground lg:pb-6">{label}</p>
      <div className="border-y border-border">
        <ul className="mx-auto grid max-w-[calc(var(--page-width)+12rem)] grid-cols-3 px-gutter py-5 lg:grid-cols-6 lg:border-x lg:border-border lg:px-24 lg:py-5">
          {logos.map((item) => (
            <li
              key={item.name}
              role="img"
              aria-label={item.name}
              className="flex h-20 min-w-0 items-center justify-center text-muted-foreground/75 [&_svg]:h-6 [&_svg]:w-auto [&>*]:scale-[0.62] [&>*]:whitespace-nowrap lg:[&>*]:scale-100"
            >
              {item.logo ?? <span className="font-display text-lg font-bold tracking-[-0.02em]">{item.name}</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
