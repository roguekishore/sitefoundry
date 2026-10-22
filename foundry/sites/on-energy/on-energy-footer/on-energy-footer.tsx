import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { OnEnergyButton } from "@foundry/on-energy-button";

export interface OnEnergyFooterProps {
  /** two short lines at the top-left */
  tagline: string;
  /** the black button under the tagline */
  cta?: { label: string; href: string };
  /** the big links on the right; `more` adds a small chevron (a section with sub-pages) */
  links: { label: string; href: string; more?: boolean }[];
  /** small icon links under the big links */
  socials?: { label: string; href: string; icon: ReactNode }[];
  /** the giant wordmark in the bottom-left corner (plain text) */
  wordmark: string;
  /** the copyright line */
  copyright: string;
  /** small legal links, separated by dots */
  legal?: { label: string; href: string }[];
  className?: string;
}

/**
 * A yellow footer card floating over a dark pattern of hairline circles and grid lines:
 * tagline and black button top-left, a column of big light links with hairline rules on the
 * right, small icon links, a giant wordmark in the bottom-left and the legal line at the
 * bottom. On phones the card runs full width with only its bottom corners rounded.
 */
export function OnEnergyFooter({ tagline, cta, links, socials = [], wordmark, copyright, legal = [], className }: OnEnergyFooterProps) {
  return (
    <footer
      className={cn(
        "bg-card bg-[radial-gradient(circle,transparent_47px,var(--border)_47px,var(--border)_48px,transparent_48px),linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] bg-size-[96px_96px] pb-[5.5rem] lg:p-4 lg:pt-5 lg:pb-40",
        className,
      )}
    >
      <div data-on-energy-tone="primary" className="mx-auto grid max-w-page rounded-b-[1.56rem] bg-primary px-gutter pt-16 pb-14 text-primary-foreground lg:grid-cols-2 lg:gap-x-[1.6vw] lg:min-h-[43.3rem] lg:rounded-[1.5rem] lg:px-5 lg:pt-[2.6rem] lg:pb-5">
        <div className="flex flex-col">
          <p className="max-w-[26rem] text-[1.17rem]/[1.25] font-light tracking-[-0.03em] whitespace-pre-line lg:text-2xl/[1.167]">{tagline}</p>
          {cta && (
            <div className="mt-8">
              <OnEnergyButton variant="ink" href={cta.href}>
                {cta.label}
              </OnEnergyButton>
            </div>
          )}
          <p
            aria-hidden
            className="order-last mt-auto hidden pt-32 font-display text-[11rem]/[0.78] font-bold tracking-[-0.07em] lg:block"
          >
            {wordmark}
          </p>
        </div>

        <div className="mt-20 flex flex-col lg:mt-0">
          <ul>
            {links.map((link) => (
              <li key={link.label} className="border-b border-primary-foreground/40">
                <a href={link.href} className="group/link flex items-center justify-between py-1.5 lg:py-1">
                  <span className="text-[1.82rem]/[1.2] font-light tracking-[-0.02em] transition-transform duration-200 group-hover/link:translate-x-2 motion-reduce:transition-none lg:text-4xl/[1.25]">
                    {link.label}
                  </span>
                  {link.more && <ChevronDown aria-hidden className="size-3 [stroke-dasharray:0.01_2.5] [stroke-linecap:round]" strokeWidth={2.5} />}
                </a>
              </li>
            ))}
          </ul>
          {socials.length > 0 && (
            <ul className="mt-9 flex gap-7 lg:mt-10">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} aria-label={s.label} className="block transition-opacity duration-200 hover:opacity-60 [&_svg]:size-[1.125rem]">
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-auto flex flex-col gap-y-6 pt-10 lg:flex-row lg:items-end lg:justify-between lg:gap-x-10 lg:pt-24">
            <p className="order-last text-center text-[0.91rem] font-light lg:order-first lg:text-left lg:text-base">{copyright}</p>
            <p aria-hidden className="font-display text-[9.4rem]/[0.78] font-bold tracking-[-0.07em] max-lg:mt-48 lg:hidden">
              {wordmark}
            </p>
            {legal.length > 0 && (
              <ul className="-order-1 flex flex-wrap items-center gap-x-2 text-[0.91rem] font-light lg:order-none lg:pr-10 lg:text-[0.8125rem]">
                {legal.map((l, i) => (
                  <li key={l.label} className="flex items-center gap-2">
                    {i > 0 && <span aria-hidden className="size-1 rounded-full bg-current" />}
                    <a href={l.href} className="hover:underline">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
