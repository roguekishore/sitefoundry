import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { HadrianWordmark } from "@foundry/hadrian-wordmark";

export interface HadrianFooterLink {
  /** link text (shown uppercase) */
  label: string;
  /** where it goes */
  href: string;
}

export interface HadrianFooterProps {
  /** the company name, set as the wordmark */
  brand: string;
  /** where the wordmark links */
  homeHref?: string;
  /** the full company name, in wide caps on the second row */
  company: string;
  /** main links, top right */
  links: HadrianFooterLink[];
  /** quieter grey links (contact, privacy…) */
  legal: HadrianFooterLink[];
  /** home country or city, last on the second row */
  place: string;
  /** a small icon before the place (e.g. a lucide icon), desktop only */
  placeIcon?: ReactNode;
  className?: string;
}

const link = "transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-primary";

/** Two-row navy footer; centred and stacked on phones. */
export function HadrianFooter({ brand, homeHref = "/", company, links, legal, place, placeIcon, className }: HadrianFooterProps) {
  return (
    <footer className={cn("relative border-t border-foreground bg-background text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter pt-[3.75rem] pb-[4.25rem]">
        <div className="flex flex-col items-center gap-[1.625rem] lg:flex-row lg:justify-between">
          <HadrianWordmark name={brand} href={homeHref} className="text-[2.5rem] lg:text-[2.5rem]" />
          <ul className="flex gap-8 font-mono text-sm leading-none uppercase lg:text-base">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={link}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-[4.25rem] flex flex-col items-center gap-[2.25rem] lg:flex-row lg:justify-between">
          <p className="font-display text-sm leading-none font-semibold uppercase lg:text-base">{company}</p>
          <div className="flex flex-col items-center gap-[1.875rem] font-mono text-sm leading-none uppercase lg:flex-row lg:gap-8 lg:text-base">
            <ul className="flex gap-8 text-muted-foreground">
              {legal.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={link}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="flex items-center gap-8">
              {placeIcon && <span aria-hidden className="hidden lg:flex [&_svg]:size-5">{placeIcon}</span>}
              <span>{place}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
