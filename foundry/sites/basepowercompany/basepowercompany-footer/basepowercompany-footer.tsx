import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface BasepowercompanyFooterColumn {
  /** the small uppercase heading */
  heading: string;
  /** the links under it */
  links: { label: string; href: string }[];
}

export interface BasepowercompanyFooterProps {
  /** the company name, set huge and faint across the footer */
  brand: string;
  /** the link columns (five across on desktop, two on phones) */
  columns: BasepowercompanyFooterColumn[];
  /** small dark download badges: an icon, a tiny top line and a label */
  badges?: { icon?: ReactNode; top: string; label: string; href: string }[];
  /** the contact blocks: an optional bold heading and lines */
  contact?: { heading?: string; lines: string[] }[];
  /** social links, shown as icons */
  socials?: { label: string; href: string; icon: ReactNode }[];
  /** the small print paragraphs; the first is set bold */
  legal?: ReactNode[];
  /** the underlined policy links at the very bottom */
  legalLinks?: { label: string; href: string }[];
  /** a round certification seal beside the small print (two short lines) */
  seal?: [string, string];
  /** the sign-off line at the bottom right, with an optional icon above */
  signoff?: { text: string; icon?: ReactNode };
  className?: string;
}

/*
 * A deep forest-green footer: link columns and download badges, a contact row with social
 * icons, the company name set huge and faint across the full width, then a hairline and the
 * small print with a round seal and a lime sign-off.
 */
export function BasepowercompanyFooter({ brand, columns, badges = [], contact = [], socials = [], legal = [], legalLinks = [], seal, signoff, className }: BasepowercompanyFooterProps) {
  return (
    <footer className={cn("bg-primary text-primary-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter pt-12 pb-14 lg:px-[calc(var(--page-gutter)*2)] lg:pt-14 lg:pb-14">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-[repeat(5,minmax(0,14rem))_1fr] lg:gap-x-0">
          {columns.map((c) => (
            <nav key={c.heading} aria-label={c.heading}>
              <p className="text-sm leading-[1.5] tracking-[-0.005em] text-primary-foreground/65 uppercase">{c.heading}</p>
              <ul className="mt-4 space-y-3 lg:mt-5">
                {c.links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-base leading-6 transition-opacity duration-150 hover:opacity-80 motion-reduce:transition-none">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          {badges.length > 0 && (
            <ul className="flex flex-col items-start gap-3 lg:items-end">
              {badges.map((b) => (
                <li key={b.href}>
                  <a
                    href={b.href}
                    className="flex h-[2.125rem] w-[6.75rem] items-center gap-1.5 rounded-md border border-primary-foreground/40 bg-foreground px-2.5 text-background transition-opacity duration-150 hover:opacity-85 motion-reduce:transition-none [&_svg]:size-4"
                  >
                    {b.icon}
                    <span className="flex flex-col leading-none">
                      <span className="text-[0.5rem] tracking-[0.04em] uppercase">{b.top}</span>
                      <span className="text-sm font-bold">{b.label}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        {(contact.length > 0 || socials.length > 0) && (
          <div className="mt-14 flex flex-col gap-10 lg:mt-[3.75rem] lg:flex-row lg:items-start lg:justify-between">
            <div className="flex flex-col gap-8 lg:flex-row lg:gap-14">
              {contact.map((c, i) => (
                <div key={i} className="text-base leading-[1.45]">
                  {c.heading && <p className="mb-1 font-bold">{c.heading}</p>}
                  {c.lines.map((l) => (
                    <p key={l}>{l}</p>
                  ))}
                </div>
              ))}
            </div>
            {socials.length > 0 && (
              <ul className="flex gap-5">
                {socials.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} aria-label={s.label} className="block transition-opacity duration-150 hover:opacity-80 motion-reduce:transition-none [&_svg]:size-6 [&_svg]:stroke-[1.5]">
                      {s.icon}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* the giant faint name: an SVG word stretched to the full width */}
        <svg aria-hidden viewBox="0 0 1000 200" className="mt-12 block h-auto w-full text-foreground/20 lg:mt-14">
          <text x="0" y="192" textLength="1000" lengthAdjust="spacingAndGlyphs" fill="currentColor" className="font-display text-[268px] font-black tracking-[-0.025em] uppercase">
            {brand}
          </text>
        </svg>

        <div className="mt-8 border-t border-primary-foreground/20 pt-8 lg:mt-[3.25rem] lg:pt-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
            <div className="max-w-[48rem] space-y-1.5 text-xs leading-[1.5] text-primary-foreground/75 [&>p:first-child]:font-bold">
              {legal.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            {seal && (
              <span className="flex size-[5.875rem] shrink-0 flex-col items-center justify-center rounded-full border-4 border-primary-foreground/25 bg-foreground text-center leading-none text-background">
                <span className="text-lg">{seal[0]}</span>
                <span className="mt-0.5 text-lg">{seal[1]}</span>
              </span>
            )}
          </div>
          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <ul className="flex flex-wrap gap-x-4 gap-y-3 text-sm">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-primary-foreground/85 underline underline-offset-2 transition-opacity duration-150 hover:opacity-70 motion-reduce:transition-none">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            {signoff && (
              <p className="flex flex-col items-start gap-2 font-display text-sm font-black tracking-[0.06em] text-accent uppercase lg:items-end [&_svg]:size-4">
                {signoff.icon}
                {signoff.text}
              </p>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
