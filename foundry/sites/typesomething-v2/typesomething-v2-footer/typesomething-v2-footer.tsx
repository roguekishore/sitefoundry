import type { ReactNode } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { TypesomethingV2Wordmark } from "@foundry/typesomething-v2-wordmark";
import "./typesomething-v2-footer.css";

export interface TypesomethingV2FooterColumn {
  /** small-caps heading */
  title: string;
  links: { label: string; href: string }[];
}

export interface TypesomethingV2FooterProps {
  /** the big wordmark: bold lead + lime tail, and a mark after it */
  brand: { lead: string; tail: string; href: string; mark?: ReactNode };
  /** tiny tracked line under the wordmark */
  tagline?: string;
  /** a few short lines (domain, company name) */
  details?: string[];
  /** label above the social buttons, e.g. "Follow us" */
  socialLabel?: string;
  social?: { label: string; href: string; icon: ReactNode }[];
  /** usually three columns */
  columns: TypesomethingV2FooterColumn[];
  copyright: string;
  /** underlined links next to the copyright */
  legal?: { label: string; href: string }[];
  /** the small "built with" badge at the bottom right */
  badge?: { label: string; lead: string; tail: string; href: string; mark?: ReactNode };
  /** the round back-to-top button */
  top?: { label: string; href: string };
  className?: string;
}

const roundButton =
  "grid size-9 place-items-center rounded-full border border-foreground/25 transition-colors duration-[160ms] ease-[ease] hover:bg-foreground hover:text-background motion-reduce:transition-none";

const underlineLink =
  "decoration-primary underline-offset-[0.3rem] hover:underline hover:decoration-[0.2rem]";

export function TypesomethingV2Footer({ brand, tagline, details, socialLabel, social, columns, copyright, legal, badge, top, className }: TypesomethingV2FooterProps) {
  return (
    <footer className={cn("border-t border-foreground/15 bg-secondary text-secondary-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter pt-12 pb-6 lg:pt-20">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr_1fr_0.9fr] lg:gap-0">
          <div>
            <a href={brand.href} className="inline-flex flex-col items-center">
              <TypesomethingV2Wordmark lead={brand.lead} tail={brand.tail} mark={brand.mark} cursor animated className="text-[1.95rem] leading-none lg:text-[2.75rem]" />
              {tagline && <span className="mt-1.5 text-[0.62rem] tracking-[0.2em]">{tagline}</span>}
            </a>
            {details && details.length > 0 && (
              <div className="mt-5 text-[0.78rem] leading-[1.55]">
                {details.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            )}
            {social && social.length > 0 && (
              <div className="mt-7">
                {socialLabel && <p className="text-[0.72rem] font-medium tracking-[0.12em] uppercase">{socialLabel}</p>}
                <ul className="mt-3 flex flex-wrap gap-2">
                  {social.map((item) => (
                    <li key={item.label}>
                      <a href={item.href} aria-label={item.label} className={cn(roundButton, "[&_svg]:size-5")}>
                        {item.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-[0.7rem] font-bold tracking-[0.12em] uppercase">{column.title}</h3>
              <ul className="mt-5 space-y-3 text-[0.96rem]">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className={underlineLink}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-foreground/20 pt-6 lg:mt-14 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-4 text-[0.82rem] lg:flex-row lg:items-center lg:gap-4">
            <p className="text-foreground/65">{copyright}</p>
            {legal && legal.length > 0 && (
              <ul className="flex flex-wrap gap-4 lg:ml-1">
                {legal.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="underline underline-offset-4 hover:decoration-primary hover:decoration-[0.2rem]">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex items-center justify-end gap-8">
            {badge && (
              <a
                href={badge.href}
                className="group inline-flex items-center gap-2 rounded-full border border-transparent px-2.5 py-1 opacity-85 transition-[opacity,border-color,background-color] duration-[180ms] ease-[ease] hover:border-primary hover:bg-foreground/7 hover:opacity-100"
              >
                {badge.mark && <span className="[&_svg]:size-5">{badge.mark}</span>}
                <span className="flex flex-col leading-tight">
                  <span className="text-[0.55rem] tracking-[0.12em] uppercase">{badge.label}</span>
                  <span className="typesomething-v2-footer-spark text-[0.8rem]">
                    <TypesomethingV2Wordmark lead={badge.lead} tail={badge.tail} className="[&>span:nth-child(2)]:text-foreground" />
                  </span>
                </span>
              </a>
            )}
            {top && (
              <a href={top.href} aria-label={top.label} className={roundButton}>
                <ArrowUp aria-hidden className="size-4" strokeWidth={1.75} />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
