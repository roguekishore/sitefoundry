import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { HalodentalButton } from "@foundry/halodental-button";

export interface HalodentalFooterColumn {
  /** column heading (e.g. "Company") */
  heading: string;
  /** vertical list of links */
  links: { label: string; href: string }[];
}

export interface HalodentalFooterProps {
  /** three navigation link columns */
  columns: HalodentalFooterColumn[];
  /** outlined secondary action button */
  secondaryCta: { label: string; href: string };
  /** vermilion primary action button */
  primaryCta: { label: string; href: string };
  /** bottom-left legal links */
  legalLinks: { label: string; href: string }[];
  /** bottom-right copyright notice */
  copyright: string;
  /** optional custom technical blueprint slot */
  diagram?: ReactNode;
  /** force dark tokens (as on the original) or inherit from page */
  tone?: "dark" | "inherit";
  className?: string;
}

/**
 * Halo Dental's rounded dark footer: framed by a subtle outer margin to match the hero,
 * with 3 link columns on the left, 2 rectangular buttons on the right, a technical
 * line-drawing wireframe with concentric sonic rings across the middle, and legal fine print below.
 */
export function HalodentalFooter({
  columns,
  secondaryCta,
  primaryCta,
  legalLinks,
  copyright,
  diagram,
  tone = "dark",
  className,
}: HalodentalFooterProps) {
  return (
    <footer className={cn("bg-card px-1.5 pb-1.5 lg:px-2.5 lg:pb-2.5", className)}>
      <div
        className={cn(
          "relative isolate overflow-hidden rounded-lg bg-background pt-10 pb-8 text-foreground lg:pt-12 lg:pb-9",
          tone === "dark" && "dark",
        )}
      >
        <div className="mx-auto max-w-page px-6 lg:px-10">
          {/* Top navigation columns + action buttons */}
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-start">
            <div className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3 lg:gap-x-24">
              {columns.map((col) => (
                <div key={col.heading} className="flex flex-col gap-3">
                  <h3 className="font-display text-[1.3125rem] font-normal leading-[1.1] text-foreground lg:text-[1.5rem]">
                    {col.heading}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-[0.9125rem] text-foreground/90 transition-colors hover:text-primary motion-reduce:transition-none lg:text-base"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-start gap-2.5 sm:flex-row lg:items-center">
              <HalodentalButton variant="outline" href={secondaryCta.href}>
                {secondaryCta.label}
              </HalodentalButton>
              <HalodentalButton variant="primary" href={primaryCta.href}>
                {primaryCta.label}
              </HalodentalButton>
            </div>
          </div>

          {/* Middle technical wireframe diagram slot */}
          <div aria-hidden className="relative my-8 flex items-center justify-center lg:my-6">
            {diagram ?? (
              <>
                {/* Desktop horizontal instrument wireframe */}
                <div className="relative hidden h-72 w-full items-center justify-end pr-16 lg:flex">
                  {/* Concentric target rings around the mirror head */}
                  <div className="pointer-events-none absolute right-2 flex items-center justify-center">
                    <div className="size-[26rem] rounded-full border border-border/25" />
                    <div className="absolute size-[19.5rem] rounded-full border border-border/35" />
                    <div className="absolute size-[13.5rem] rounded-full border border-border/50" />
                  </div>

                  {/* Horizontal probe body + tapered neck + circular mirror head */}
                  <div className="relative z-10 flex w-[68%] items-center">
                    {/* Handle shaft */}
                    <div className="relative flex h-12 w-[52%] items-center rounded-l-full border border-foreground/70 bg-background px-6">
                      <span className="h-full w-1.5 bg-foreground" />
                      <svg
                        viewBox="0 0 24 24"
                        className="ml-4 size-4 fill-foreground"
                      >
                        <ellipse cx="9" cy="12" rx="6" ry="3" transform="rotate(-40 9 12)" />
                        <ellipse cx="15" cy="12" rx="6" ry="3" transform="rotate(-40 15 12)" />
                      </svg>
                      <span className="ml-auto size-1.5 rounded-full bg-foreground" />
                    </div>
                    {/* Tapered neck */}
                    <div className="h-6 flex-1 border-y border-foreground/65 bg-background" />
                    {/* Circular optical head */}
                    <div className="relative -ml-1 flex size-24 shrink-0 items-center justify-center rounded-full border border-foreground/80 bg-background">
                      <div className="flex size-20 items-center justify-end rounded-full border border-foreground/75 pr-3">
                        <span className="size-2 rounded-full bg-foreground" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile vertical instrument wireframe */}
                <div className="relative flex h-72 w-full flex-col items-center justify-end overflow-hidden lg:hidden">
                  <div className="pointer-events-none absolute top-4 flex items-center justify-center">
                    <div className="size-72 rounded-full border border-border/25" />
                    <div className="absolute size-52 rounded-full border border-border/35" />
                    <div className="absolute size-36 rounded-full border border-border/50" />
                  </div>
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="flex size-24 items-center justify-center rounded-full border border-foreground/80 bg-background">
                      <div className="flex size-20 items-start justify-center rounded-full border border-foreground/75 pt-2.5">
                        <span className="size-1.5 rounded-full bg-foreground" />
                      </div>
                    </div>
                    <div className="-mt-1 h-32 w-5 border-x border-foreground/65 bg-background" />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Bottom legal + copyright bar */}
          <div className="flex flex-col items-center justify-between gap-3 pt-2 text-xs text-foreground/75 lg:flex-row">
            <div className="flex items-center gap-6">
              {legalLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="transition-colors hover:text-foreground motion-reduce:transition-none"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <p className="text-center lg:text-right">{copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
