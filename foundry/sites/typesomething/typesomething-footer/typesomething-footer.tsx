import type { ReactNode } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { TypesomethingWordmark } from "@foundry/typesomething-wordmark";

export interface TypesomethingFooterLink {
  label: string;
  href: string;
}

export interface TypesomethingFooterColumn {
  /** small uppercase heading */
  title: string;
  links: TypesomethingFooterLink[];
}

export interface TypesomethingFooterSocial {
  /** the network's name, for screen readers */
  label: string;
  href: string;
  /** its icon (a lucide icon or an svg) */
  icon: ReactNode;
}

export interface TypesomethingFooterProps {
  /** wordmark: bold first half and light second half */
  brand: { lead: string; tail: string };
  /** large mark after the wordmark (a lucide icon or an svg) */
  brandIcon?: ReactNode;
  /** tiny letter-spaced line under the wordmark */
  tagline?: string;
  /** short lines under it (address, company) */
  details?: string[];
  /** label over the social icons (e.g. "Follow us") */
  socialLabel?: string;
  socials?: TypesomethingFooterSocial[];
  /** link columns at the right */
  columns: TypesomethingFooterColumn[];
  /** the copyright line */
  copyright: string;
  /** small underlined links next to it */
  legal?: TypesomethingFooterLink[];
  /** small "made with" badge at the bottom right: an icon, a tiny label and a bold name */
  badge?: { label: string; name?: string; href: string; icon?: ReactNode };
  /** the round back-to-top button; its label is for screen readers */
  top?: { label: string; href: string };
  /** the wordmark types itself out on a loop */
  typing?: boolean;
  className?: string;
}

/**
 * Stone-grey footer: a big two-tone wordmark with a tiny spaced tagline, contact lines and
 * round social buttons, three link columns, and a hairline bottom bar with the copyright,
 * legal links, a small badge and a back-to-top button.
 */
export function TypesomethingFooter({
  brand,
  brandIcon,
  tagline,
  details = [],
  socialLabel,
  socials = [],
  columns,
  copyright,
  legal = [],
  badge,
  top,
  typing = true,
  className,
}: TypesomethingFooterProps) {
  const roundButton =
    "grid size-9 place-items-center rounded-full border border-foreground/25 transition-[color,background-color] duration-[160ms] ease-[ease] hover:bg-foreground hover:text-background motion-reduce:transition-none [&_svg]:size-[1.1rem]";
  const underline = "underline-offset-[0.3rem] decoration-primary decoration-[0.2rem] hover:underline";
  return (
    <footer className={cn("border-t border-foreground/20 bg-secondary px-gutter text-secondary-foreground", className)}>
      <div className="mx-auto max-w-page pt-10 lg:pt-[4.5rem]">
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr_1fr_0.9fr] lg:gap-0">
          <div>
            <div className="inline-flex flex-col items-center">
              <TypesomethingWordmark lead={brand.lead} tail={brand.tail} icon={brandIcon} typing={typing} cursor="" className="text-[2.1rem] lg:text-[2.75rem] [&_svg]:size-[1.2em]" />
              {tagline && <span className="mt-2 text-[0.62rem] tracking-[0.25em]">{tagline}</span>}
            </div>
            {details.length > 0 && (
              <div className="mt-5 text-[0.78rem] leading-[1.6]">
                {details.map((d) => (
                  <p key={d}>{d}</p>
                ))}
              </div>
            )}
            {socials.length > 0 && (
              <div className="mt-7">
                {socialLabel && <p className="text-[0.72rem] tracking-[0.12em] uppercase">{socialLabel}</p>}
                <ul className="mt-3 flex flex-wrap gap-2">
                  {socials.map((s) => (
                    <li key={s.href}>
                      <a href={s.href} aria-label={s.label} className={roundButton}>
                        {s.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {columns.map((c) => (
            <nav key={c.title} aria-label={c.title} className="lg:pt-2">
              <p className="text-[0.7rem] font-bold tracking-[0.12em] uppercase">{c.title}</p>
              <ul className="mt-5 space-y-3 lg:mt-6">
                {c.links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className={cn("text-[0.92rem]", underline)}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-foreground/20 py-6 lg:mt-16 lg:flex-row lg:items-center lg:gap-8">
          <p className="text-[0.78rem] text-foreground/65">{copyright}</p>
          {legal.length > 0 && (
            <ul className="flex flex-wrap gap-4">
              {legal.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[0.78rem] underline underline-offset-[0.25rem] decoration-foreground/60 hover:decoration-primary">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
          <div className="flex items-center justify-end gap-9 lg:ml-auto">
            {badge && (
              <a href={badge.href} className="flex items-center gap-2 opacity-80 transition-opacity duration-[180ms] hover:opacity-100 [&_svg]:size-6">
                {badge.icon}
                <span className="leading-[1.2]">
                  <span className="block text-[0.6rem] tracking-[0.1em] uppercase">{badge.label}</span>
                  {badge.name && <span className="block text-[0.8rem] font-bold tracking-[-0.02em]">{badge.name}</span>}
                </span>
              </a>
            )}
            {top && (
              <a href={top.href} aria-label={top.label} className={roundButton}>
                <ArrowUp aria-hidden />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
