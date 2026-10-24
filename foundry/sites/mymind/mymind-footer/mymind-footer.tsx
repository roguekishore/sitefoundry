import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface MymindFooterLink {
  /** link text */
  label: string;
  /** where it goes */
  href: string;
}

export interface MymindFooterColumn {
  /** small-capital heading */
  title: string;
  /** the column's links */
  links: MymindFooterLink[];
  /** a second, separate group of links under the first */
  extra?: MymindFooterLink[];
}

export interface MymindFooterProps {
  /** the wordmark text */
  brand: string;
  /** a small mark before the wordmark (an icon) */
  mark?: ReactNode;
  /** italic serif slogan after the wordmark */
  slogan: string;
  /** the grey box: serif title, small line, link */
  feature: { title: string; text: string; href: string };
  /** the larger links on the left */
  primaryLinks: MymindFooterLink[];
  /** the small-capital link columns */
  columns: MymindFooterColumn[];
  /** copyright line */
  copyright: string;
  /** the second small line (e.g. where it's made) */
  madeIn: string;
  /** legal links on the right of the bottom row */
  legal: MymindFooterLink[];
  className?: string;
}

const round = "font-[family-name:var(--mymind-round,var(--typeface-body))]";

/** White footer card on a soft colour wash. */
export function MymindFooter({ brand, mark, slogan, feature, primaryLinks, columns, copyright, madeIn, legal, className }: MymindFooterProps) {
  return (
    <footer className={cn("relative isolate overflow-x-clip bg-accent px-5 pt-20 text-foreground lg:px-[4.375rem] lg:pt-24", className)}>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_34%_55%_at_0%_62%,color-mix(in_oklab,var(--primary)_80%,var(--accent))_0%,transparent_100%),radial-gradient(ellipse_30%_60%_at_100%_88%,color-mix(in_oklab,var(--chart-3)_55%,var(--chart-2))_0%,transparent_100%),radial-gradient(ellipse_45%_45%_at_15%_100%,color-mix(in_oklab,var(--chart-2)_80%,var(--accent))_0%,transparent_100%),radial-gradient(ellipse_50%_30%_at_50%_10%,color-mix(in_oklab,var(--primary)_25%,var(--accent))_0%,transparent_100%)] blur-[30px]"
      />
      <div className="mx-auto max-w-[81.25rem] rounded-t-[1.25rem] bg-card px-[1.875rem] pt-10 pb-6 text-card-foreground lg:px-[4.375rem] lg:pt-[3.75rem] lg:pb-8">
        <div className="grid gap-y-16 lg:grid-cols-[1fr_41.25rem] lg:gap-x-10 lg:gap-y-[5rem]">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className={cn(round, "flex items-center gap-1.5 text-2xl font-bold tracking-[-0.02em] [&_svg]:size-6")}>
              {mark}
              {brand}
            </span>
            <span aria-hidden className="size-1 rounded-full bg-chart-2" />
            <span className="font-display text-2xl tracking-[-0.03em] text-chart-2 italic">{slogan}</span>
          </p>
          <a
            href={feature.href}
            className="order-last flex flex-col items-center justify-center rounded-lg bg-muted/70 px-6 py-8 text-center transition-colors duration-200 ease-linear hover:bg-muted lg:order-none lg:h-[9.75rem]"
          >
            <span className="font-display text-[2rem] leading-none tracking-[-0.03em] lg:text-[2.5rem]">{feature.title}</span>
            <span className={cn(round, "mt-2 text-lg text-muted-foreground/80")}>{feature.text}</span>
          </a>

          <ul className="space-y-1.5 lg:space-y-1">
            {primaryLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-xl leading-8 text-foreground/85 transition-colors duration-200 ease-linear hover:text-primary lg:text-2xl lg:leading-10">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="grid gap-y-14 sm:grid-cols-3 sm:gap-x-6">
            {columns.map((c) => (
              <div key={c.title}>
                <h3 className={cn(round, "text-sm font-semibold tracking-[0.06em] text-foreground/85 uppercase")}>{c.title}</h3>
                <ul className="mt-4 space-y-1">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className={cn(round, "text-lg leading-[2.0625rem] text-muted-foreground/90 transition-colors duration-200 ease-linear hover:text-primary lg:text-[1.0625rem] lg:leading-8")}>
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
                {c.extra && (
                  <ul className="mt-6">
                    {c.extra.map((l) => (
                      <li key={l.label}>
                        <a href={l.href} className={cn(round, "text-lg leading-7 text-muted-foreground/90 transition-colors duration-200 ease-linear hover:text-primary lg:text-[1.0625rem]")}>
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={cn(round, "mt-24 flex flex-col gap-4 border-t border-border pt-8 text-[0.9375rem] text-muted-foreground/90 lg:mt-14 lg:flex-row lg:items-center lg:gap-14 lg:pt-6 lg:text-sm")}>
          <span>{copyright}</span>
          <span>{madeIn}</span>
          <ul className="flex flex-wrap gap-x-2 lg:ml-auto">
            {legal.map((l, i) => (
              <li key={l.label} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden className="size-0.5 rounded-full bg-current" />}
                <a href={l.href} className="transition-colors duration-200 ease-linear hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
