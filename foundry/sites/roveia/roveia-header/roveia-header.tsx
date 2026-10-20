import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { RoveiaButton } from "@foundry/roveia-button";
import { RoveiaWordmark } from "@foundry/roveia-wordmark";

export interface RoveiaNavLink {
  label: string;
  href: string;
  /** shows a small chevron, as for a menu */
  menu?: boolean;
}

export interface RoveiaHeaderProps {
  /** company name for the wordmark */
  brand: string;
  /** tiny mark above the wordmark's first letter */
  brandMark?: ReactNode;
  homeHref?: string;
  /** the links in the middle of the pill (desktop) and in the drop-down (phones) */
  links: RoveiaNavLink[];
  /** the dark pill on the right */
  cta: { label: string; href: string };
  /** screen-reader label for the phone menu button */
  menuLabel: string;
  /** fixed (default) floats over the page; static stays in the flow (for previews) */
  position?: "fixed" | "static";
  className?: string;
}

/**
 * A floating white nav pill with a soft shadow, centred 24px from the top: wordmark, a row of
 * links (some with chevrons) and a dark "get started" pill that turns blue on hover. On phones
 * the links fold into a two-line burger that opens a white panel (no JavaScript: <details>).
 */
export function RoveiaHeader({ brand, brandMark, homeHref = "#", links, cta, menuLabel, position = "fixed", className }: RoveiaHeaderProps) {
  return (
    <header className={cn(position === "fixed" ? "fixed inset-x-0 top-0" : "relative", "z-50 px-8 pt-4 text-foreground lg:px-gutter lg:pt-6", className)}>
      <div className="relative mx-auto flex h-12 max-w-[62.25rem] items-center justify-between rounded-full bg-card pr-2 pl-6 shadow-[0_8px_30px_color-mix(in_oklab,var(--foreground)_10%,transparent)] lg:h-14 lg:pl-7">
        <RoveiaWordmark name={brand} mark={brandMark} href={homeHref} />

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="flex items-center gap-1 text-base tracking-[-0.01em] transition-opacity duration-300 hover:opacity-64 motion-reduce:transition-none"
            >
              {l.label}
              {l.menu && <ChevronDown aria-hidden className="size-4" strokeWidth={1.75} />}
            </a>
          ))}
        </nav>

        <RoveiaButton href={cta.href} variant="dark" size="sm" className="hidden lg:inline-flex">
          {cta.label}
        </RoveiaButton>

        <details className="group lg:hidden">
          <summary
            aria-label={menuLabel}
            className="flex size-12 cursor-pointer list-none flex-col items-center justify-center gap-2 [&::-webkit-details-marker]:hidden"
          >
            <span className="h-px w-12 bg-foreground transition-transform duration-300 group-open:translate-y-[4.5px] group-open:rotate-[20deg] motion-reduce:transition-none" />
            <span className="h-px w-12 bg-foreground transition-transform duration-300 group-open:-translate-y-[4.5px] group-open:-rotate-[20deg] motion-reduce:transition-none" />
          </summary>
          <div className="absolute inset-x-0 top-[calc(100%+0.5rem)] rounded-lg bg-card p-6 shadow-[0_8px_30px_color-mix(in_oklab,var(--foreground)_10%,transparent)]">
            <nav className="flex flex-col gap-4">
              {links.map((l) => (
                <a key={l.label} href={l.href} className="text-xl tracking-[-0.02em]">
                  {l.label}
                </a>
              ))}
            </nav>
            <RoveiaButton href={cta.href} block className="mt-6">
              {cta.label}
            </RoveiaButton>
          </div>
        </details>
      </div>
    </header>
  );
}
