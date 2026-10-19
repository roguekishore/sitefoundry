import { Accessibility } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { HalodentalVagueFlashButton } from "@foundry/halodental-vague-flash-button";
import { HalodentalVagueFlashMark, type HalodentalVagueFlashMarkProps } from "@foundry/halodental-vague-flash-mark";

export interface HalodentalVagueFlashNavItem {
  label: string;
  href: string;
}

export interface HalodentalVagueFlashHeaderProps {
  /** brand mark configuration on the left */
  mark: HalodentalVagueFlashMarkProps;
  /** centred navigation links on desktop, disclosure list on mobile */
  nav: HalodentalVagueFlashNavItem[];
  /** primary white contrast button on the right */
  cta: {
    label: string;
    /** shorter label shown on phones (e.g. "Reserve") */
    mobileLabel?: string;
    href: string;
  };
  /** two-letter locale button shown on desktop (e.g. "Fr") */
  locale?: { label: string; href: string };
  /** show the 40×40 accessibility icon button on desktop */
  showAccessibility?: boolean;
  /** accessible label for the mobile menu button */
  menuLabel?: string;
  /** lie transparently on top of the hero (default true) */
  overlay?: boolean;
  className?: string;
}

/**
 * Halo Dental's top bar: 76px tall on phones, 100px tall on desktop, aligned to --page-gutter.
 */
export function HalodentalVagueFlashHeader({
  mark,
  nav,
  cta,
  locale,
  showAccessibility = true,
  menuLabel = "Toggle menu",
  overlay = true,
  className,
}: HalodentalVagueFlashHeaderProps) {
  return (
    <header
      className={cn(
        "dark z-20 w-full text-foreground",
        overlay ? "absolute inset-x-0 top-0 bg-transparent" : "relative bg-background",
        className,
      )}
    >
      <div className="mx-auto flex h-[4.75rem] max-w-[var(--page-width)] items-center justify-between px-[var(--page-gutter)] pt-4 pb-5 lg:relative lg:h-[6.25rem] lg:pt-10 lg:pb-5">
        <HalodentalVagueFlashMark {...mark} className="relative z-10 shrink-0" />

        <nav aria-label="Main navigation" className="hidden lg:absolute lg:left-1/2 lg:block lg:-translate-x-1/2">
          <ul className="flex items-center gap-x-10 text-base font-normal text-foreground">
            {nav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="inline-flex h-10 items-center transition-colors duration-150 hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-x-2.5">
          <HalodentalVagueFlashButton variant="contrast" href={cta.href} className="lg:hidden">
            {cta.mobileLabel ?? cta.label}
          </HalodentalVagueFlashButton>
          <HalodentalVagueFlashButton variant="contrast" href={cta.href} className="hidden lg:inline-flex">
            {cta.label}
          </HalodentalVagueFlashButton>

          {locale && (
            <HalodentalVagueFlashButton
              variant="ghost-square"
              href={locale.href}
              className="hidden capitalize lg:inline-flex"
            >
              {locale.label}
            </HalodentalVagueFlashButton>
          )}

          {showAccessibility && (
            <HalodentalVagueFlashButton
              variant="ghost-square"
              ariaLabel="Accessibility options"
              className="hidden lg:inline-flex"
            >
              <Accessibility className="size-4" strokeWidth={1.5} />
            </HalodentalVagueFlashButton>
          )}

          <details className="group relative lg:hidden">
            <summary
              aria-label={menuLabel}
              className="grid size-10 cursor-pointer list-none place-items-center rounded-[var(--radius)] bg-foreground/10 text-foreground transition-colors hover:bg-foreground/20 [&::-webkit-details-marker]:hidden"
            >
              <span aria-hidden className="flex h-[11px] w-5 flex-col justify-between">
                <span className="h-px w-full bg-current" />
                <span className="h-px w-full bg-current" />
                <span className="h-px w-full bg-current" />
              </span>
            </summary>
            <div className="absolute top-12 right-0 z-30 w-64 rounded-lg border border-border bg-card p-4 text-card-foreground">
              <ul className="flex flex-col gap-1">
                {nav.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="block rounded-[var(--radius)] px-3 py-2 text-sm text-card-foreground hover:bg-secondary"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
