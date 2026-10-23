import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface PuzzleFooterGroup {
  label: string;
  links: { label: string; href: string }[];
}

export interface PuzzleFooterProps {
  /** the wordmark: a name with a small icon on a green tile */
  brand: { name: string; href: string; icon?: ReactNode };
  /** the line under the wordmark */
  tagline?: string;
  /** square ink buttons; icon is a small lucide icon */
  socials?: { label: string; href: string; icon: ReactNode }[];
  /** three columns, each one or two groups */
  columns: PuzzleFooterGroup[][];
  /** e.g. "© Oakbook 2026" */
  copyright: string;
  /** the grey links in the bottom bar */
  legal: { label: string; href: string }[];
  className?: string;
}

const link = "opacity-90 transition-opacity duration-300 hover:opacity-100 hover:text-highlight motion-reduce:transition-none";

/** The framed footer with corner brackets. */
export function PuzzleFooter({ brand, tagline, socials, columns, copyright, legal, className }: PuzzleFooterProps) {
  const bracket = "pointer-events-none absolute size-3.5 border-foreground";
  return (
    <footer className={cn("bg-sidebar p-4 text-sidebar-foreground", className)}>
      <div className="relative border border-foreground/20">
        <span aria-hidden className={cn(bracket, "-top-px -left-px border-t-2 border-l-2")} />
        <span aria-hidden className={cn(bracket, "-top-px -right-px border-t-2 border-r-2")} />
        <span aria-hidden className={cn(bracket, "-bottom-px -left-px border-b-2 border-l-2")} />
        <span aria-hidden className={cn(bracket, "-right-px -bottom-px border-r-2 border-b-2")} />

        <div className="lg:grid lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div className="px-4 pt-9 pb-9 lg:px-8 lg:pt-8 lg:pb-12">
            <a href={brand.href} className="flex items-center gap-4 font-display text-[2.25rem]/none font-semibold tracking-[-0.01em] lg:text-[2rem]/none">
              {brand.icon && (
                <span className="flex size-14 items-center justify-center rounded-[calc(var(--radius)*0.9)] bg-glow text-foreground [&_svg]:size-7">{brand.icon}</span>
              )}
              {brand.name}
            </a>
            {tagline && <p className="mt-10 max-w-[19rem] text-[0.9375rem]/[1.55] lg:mt-12">{tagline}</p>}
            {socials && (
              <ul className="mt-8 flex gap-4">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      aria-label={s.label}
                      className="flex size-8 items-center justify-center rounded-[calc(var(--radius)*0.375)] bg-foreground text-background transition-opacity duration-300 hover:opacity-80 motion-reduce:transition-none [&_svg]:size-[1.125rem]"
                    >
                      {s.icon}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* desktop: three columns between vertical hairlines */}
          {columns.map((col, i) => (
            <div key={i} className="hidden flex-col gap-12 border-l border-foreground/20 px-8 pt-10 pb-12 lg:flex">
              {col.map((g) => (
                <div key={g.label}>
                  <p className="text-[0.9375rem] text-muted-foreground/80">{g.label}</p>
                  <ul className="mt-3 flex flex-col gap-[0.9rem] text-[0.9375rem]/[1.5]">
                    {g.links.map((l) => (
                      <li key={l.label}>
                        <a href={l.href} className={link}>
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}

          {/* phones: one accordion row per group */}
          <div className="lg:hidden">
            {columns.flat().map((g) => (
              <details key={g.label} className="group border-t border-foreground/20">
                <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-6 text-[0.9375rem]/none uppercase [&::-webkit-details-marker]:hidden">
                  {g.label}
                  <ChevronDown aria-hidden className="size-5 transition-transform duration-300 group-open:rotate-180 motion-reduce:transition-none" strokeWidth={1.5} />
                </summary>
                <ul className="flex flex-col gap-4 px-4 pb-6 text-[0.9375rem]">
                  {g.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className={link}>
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </div>

        <div className="flex flex-col-reverse gap-6 border-t border-foreground/20 px-4 pt-8 pb-8 text-[0.9375rem] text-muted-foreground/80 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-6">
          <p>{copyright}</p>
          <ul className="flex flex-col gap-3 lg:flex-row lg:gap-6">
            {legal.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="transition-colors duration-300 hover:text-foreground motion-reduce:transition-none">
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
