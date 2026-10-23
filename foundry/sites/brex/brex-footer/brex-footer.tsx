import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface BrexFooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface BrexFooterProps {
  /** the wordmark: a name with an optional small icon before it */
  brand: { name: string; href: string; icon?: ReactNode };
  /** four link columns */
  columns: BrexFooterColumn[];
  /** social links: an icon node plus the accessible name */
  social: { label: string; href: string; icon: ReactNode }[];
  /** app store pills, as text */
  stores: { label: string; href: string }[];
  /** the dagger footnote paragraphs (the first gets the marker) */
  footnotes: string[];
  /** the marker for the footnotes, e.g. a dagger */
  footnoteMarker: string;
  /** the remaining legal paragraphs */
  legal: string[];
  className?: string;
}

/** Brex's dark link footer with long legal text. */
export function BrexFooter({ brand, columns, social, stores, footnotes, footnoteMarker, legal, className }: BrexFooterProps) {
  return (
    <footer className={cn("dark bg-background text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter pt-20 pb-20 lg:px-[calc(var(--page-gutter)*3)] lg:pt-40 lg:pb-40">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-5 lg:gap-x-0 lg:gap-y-0">
          <a href={brand.href} className="col-span-2 mb-0 flex items-center gap-1.5 self-start font-display text-2xl/none font-semibold tracking-[-0.04em] lg:col-span-1 [&_svg]:size-5">
            {brand.icon}
            {brand.name}
          </a>
          {columns.map((c) => (
            <nav key={c.title} aria-label={c.title}>
              <h2 className="text-sm/5 font-semibold text-foreground">{c.title}</h2>
              <ul className="mt-2.5 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-base/6 text-muted-foreground transition-opacity duration-150 ease-linear hover:opacity-80 motion-reduce:transition-none">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-3 lg:mt-28 lg:flex lg:items-center lg:gap-x-36">
          <ul className="flex items-center gap-3 self-start text-muted-foreground lg:gap-5 lg:self-auto [&_svg]:size-5">
            {social.map((s) => (
              <li key={s.label}>
                <a href={s.href} aria-label={s.label} className="block transition-opacity duration-150 ease-linear hover:opacity-80 motion-reduce:transition-none">
                  {s.icon}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col items-start gap-3 lg:flex-row lg:gap-6">
            {stores.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="flex h-6 items-center rounded-[5px] border border-foreground/60 px-3 text-[0.625rem] leading-none font-medium text-foreground transition-opacity duration-150 ease-linear hover:opacity-80 motion-reduce:transition-none">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-36 space-y-2 text-xs/4 text-foreground/85 lg:mt-60">
          <div className="space-y-2 pl-3.5">
            {footnotes.map((p, i) => (
              <p key={i} className="relative">
                {i === 0 && <span aria-hidden className="absolute -left-3.5 text-[0.5rem]">{footnoteMarker}</span>}
                {p}
              </p>
            ))}
          </div>
          {legal.map((p, i) => (
            <p key={i} className="lg:py-0.5">
              {p}
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
}
