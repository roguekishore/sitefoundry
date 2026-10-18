import { PersonStanding } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { HalodentalButton } from "@foundry/halodental-button";

export interface HalodentalNavLink {
  /** navigation item text */
  label: string;
  /** target URL */
  href: string;
}

export interface HalodentalHeaderProps {
  /** brand wordmark next to the double-oval emblem */
  brandName: string;
  /** brand home link */
  brandHref?: string;
  /** centred navigation links on desktop */
  links: HalodentalNavLink[];
  /** primary right-side CTA (desktop label) */
  cta: { label: string; mobileLabel?: string; href: string };
  /** two-letter language switcher button label (e.g. "Fr") */
  localeLabel?: string;
  /** language switcher link */
  localeHref?: string;
  /** accessible label for the accessibility utility button */
  a11yLabel: string;
  /** accessible label for the mobile menu toggle button */
  menuLabel: string;
  /** sit over the top of the hero section instead of taking vertical flow space */
  overlay?: boolean;
  /** force dark tokens (as on the original hero) or inherit from page */
  tone?: "dark" | "inherit";
  className?: string;
}

/**
 * Halo Dental's top bar: double-capsule emblem + geometric wordmark on the left,
 * six centred navigation links, and a crisp white rectangular CTA + two dark utility
 * squares on the right. On mobile, displays the brand mark, a compact white CTA,
 * and a dark square burger button.
 */
export function HalodentalHeader({
  brandName,
  brandHref = "#",
  links,
  cta,
  localeLabel,
  localeHref = "#",
  a11yLabel,
  menuLabel,
  overlay = true,
  tone = "dark",
  className,
}: HalodentalHeaderProps) {
  return (
    <header
      className={cn(
        "relative z-30 h-20 text-foreground lg:h-24",
        tone === "dark" && "dark",
        overlay && "-mb-20 lg:-mb-24",
        className,
      )}
    >
      <div className="mx-auto flex h-full max-w-page items-center justify-between px-6 pt-3 lg:px-10 lg:pt-4">
        <a
          href={brandHref}
          className="inline-flex items-center gap-3 text-foreground transition-opacity hover:opacity-85 motion-reduce:transition-none"
        >
          <span aria-hidden className="inline-flex items-center">
            <svg viewBox="0 0 54 32" className="h-7 w-auto fill-current lg:h-8">
              <ellipse cx="16" cy="16" rx="15" ry="7.5" transform="rotate(-40 16 16)" />
              <ellipse cx="37" cy="16" rx="15" ry="7.5" transform="rotate(-40 37 16)" />
            </svg>
          </span>
          <span className="font-display text-[1.875rem] font-normal tracking-[-0.03em] lg:text-[2.25rem]">
            {brandName}
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex xl:gap-9">
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-base font-normal text-foreground transition-colors hover:text-primary motion-reduce:transition-none"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <HalodentalButton variant="solid-inverse" size="md" href={cta.href}>
            {cta.label}
          </HalodentalButton>
          {localeLabel && (
            <HalodentalButton
              variant="secondary"
              size="square"
              href={localeHref}
              className="bg-foreground/10 text-foreground hover:bg-foreground/20"
            >
              {localeLabel}
            </HalodentalButton>
          )}
          <HalodentalButton
            variant="secondary"
            size="square"
            ariaLabel={a11yLabel}
            className="bg-foreground/10 text-foreground hover:bg-foreground/20"
          >
            <PersonStanding aria-hidden className="size-4" strokeWidth={1.75} />
          </HalodentalButton>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <HalodentalButton
            variant="solid-inverse"
            size="md"
            href={cta.href}
            className="h-10 px-4 text-[0.9375rem]"
          >
            {cta.mobileLabel ?? cta.label}
          </HalodentalButton>

          <details className="group relative">
            <summary
              aria-label={menuLabel}
              className="flex size-10 cursor-pointer list-none items-center justify-center rounded-md bg-foreground/12 text-foreground transition-colors hover:bg-foreground/20 [&::-webkit-details-marker]:hidden"
            >
              <span aria-hidden className="flex w-5 flex-col gap-1">
                <span className="h-[1.5px] bg-current transition-transform group-open:translate-y-[5.5px] group-open:rotate-45 motion-reduce:transition-none" />
                <span className="h-[1.5px] bg-current group-open:opacity-0" />
                <span className="h-[1.5px] bg-current transition-transform group-open:-translate-y-[5.5px] group-open:-rotate-45 motion-reduce:transition-none" />
              </span>
            </summary>

            <div className="absolute right-0 top-12 z-40 w-64 rounded-lg border border-border bg-card p-3 text-card-foreground shadow-lg">
              <nav className="flex flex-col">
                {links.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="rounded-md px-3 py-2.5 text-[0.9375rem] font-normal hover:bg-secondary"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              {localeLabel && (
                <div className="mt-2 flex items-center gap-2 border-t border-border pt-2">
                  <HalodentalButton variant="secondary" size="sm" href={localeHref} className="w-full">
                    {localeLabel}
                  </HalodentalButton>
                </div>
              )}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
