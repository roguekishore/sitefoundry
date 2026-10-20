import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface GrowthbookFooterLink {
  label: string;
  href: string;
  /** small violet tag after the label, e.g. "NEW" */
  tag?: string;
}

export interface GrowthbookFooterColumn {
  title: string;
  links: GrowthbookFooterLink[];
}

export interface GrowthbookFooterProps {
  /** wordmark text */
  brand: string;
  /** small mark before the wordmark */
  brandIcon?: ReactNode;
  blurb: string;
  socials?: { label: string; href: string; icon: ReactNode }[];
  /** round outlined badges; each string in a badge is one line */
  badges?: { label: string; lines: string[] }[];
  columns: GrowthbookFooterColumn[];
  copyright: string;
  legal?: GrowthbookFooterLink[];
  className?: string;
}

export function GrowthbookFooter({ brand, brandIcon, blurb, socials, badges, columns, copyright, legal, className }: GrowthbookFooterProps) {
  const link = "transition-colors duration-250 ease-[ease] hover:text-glow motion-reduce:transition-none";
  return (
    <footer className={cn("dark bg-background text-foreground", className)}>
      <div className="mx-auto max-w-[calc(var(--page-width)+var(--page-gutter)*4)] px-gutter pt-12 pb-8 md:px-[calc(var(--page-gutter)*2)] lg:pt-14 lg:pb-14">
        <div className="grid gap-y-16 lg:grid-cols-[25.25rem_minmax(0,1fr)] lg:gap-x-[4.5rem] lg:gap-y-12">
          <div>
            <p className="flex items-center gap-2 text-[2rem] leading-none font-medium tracking-[-0.02em] lg:ml-2.5">
              {brandIcon && <span className="flex text-primary [&_svg]:size-8">{brandIcon}</span>}
              {brand}
            </p>
            <p className="mt-6 text-sm leading-[1.75]">{blurb}</p>
          </div>

          <nav className="grid grid-cols-2 gap-x-5 gap-y-10 lg:row-span-2 lg:grid-cols-5 lg:pt-2">
            {columns.map((c) => (
              <div key={c.title}>
                <p className="text-base">{c.title}</p>
                <ul className="mt-5 grid gap-3.5">
                  {c.links.map((l) => (
                    <li key={l.label} className="flex items-center gap-2 text-sm leading-[1.5]">
                      <a href={l.href} className={link}>
                        {l.label}
                      </a>
                      {l.tag && <span className="rounded-sm bg-primary px-1.5 py-px text-[0.625rem] leading-4 font-bold tracking-[1.5px] text-primary-foreground">{l.tag}</span>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <div>
            {socials && (
              <ul className="flex gap-12 pl-4 lg:-mt-2">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} aria-label={s.label} className="flex text-foreground/55 transition-colors duration-250 hover:text-foreground motion-reduce:transition-none [&_svg]:size-7">
                      {s.icon}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            {badges && (
              <ul className="mt-10 flex gap-2">
                {badges.map((b) => (
                  <li
                    key={b.label}
                    aria-label={b.label}
                    className="grid size-[4.5rem] place-items-center rounded-full border border-foreground/30 text-center text-xs leading-tight text-foreground/80 lg:size-24 lg:text-base"
                  >
                    <span>
                      {b.lines.map((l) => (
                        <span key={l} className="block">
                          {l}
                        </span>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-4 font-mono text-xs leading-[1.75] lg:mt-[12.5rem] lg:flex lg:items-center lg:justify-between">
          <p>{copyright}</p>
          {legal?.length ? (
            <ul className="contents lg:flex lg:gap-8">
              {legal.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className={link}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
