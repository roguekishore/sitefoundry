import { ChevronDown } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { PrenuvoButton } from "@foundry/prenuvo-button";
import { PrenuvoWordmark } from "@foundry/prenuvo-wordmark";
import "./prenuvo-header.css";

export interface PrenuvoHeaderLink {
  /** the link text */
  label: string;
  /** where it goes */
  href: string;
}

export interface PrenuvoHeaderProps {
  /** the company name, shown as the wordmark */
  brand: string;
  /** where the wordmark links */
  homeHref?: string;
  /** the main links (desktop row, phone menu) */
  links: PrenuvoHeaderLink[];
  /** the gradient pill: its desktop label, an optional longer phone label, and its link */
  cta: { label: string; mobileLabel?: string; href: string };
  /** the region picker: the current region and the others */
  region?: { current: string; options: PrenuvoHeaderLink[] };
  /** screen-reader label for the phone menu button */
  menuLabel?: string;
  className?: string;
}

export function PrenuvoHeader({ brand, homeHref = "#", links, cta, region, menuLabel = "Menu", className }: PrenuvoHeaderProps) {
  return (
    <header className={cn("dark sticky top-0 z-50 -mb-16 h-16 text-foreground lg:-mb-20 lg:h-20", className)}>
      <div aria-hidden className="prenuvo-header-fill absolute inset-0 bg-card" />
      <div className="relative mx-auto flex h-full max-w-page items-center gap-6 px-gutter lg:px-12">
        {/* phone menu */}
        <details className="group/menu lg:hidden">
          <summary className="flex size-10 -ml-1 cursor-pointer list-none flex-col items-start justify-center gap-[5px] [&::-webkit-details-marker]:hidden">
            <span className="sr-only">{menuLabel}</span>
            <span className="h-px w-8 bg-foreground transition-transform duration-200 group-open/menu:translate-y-[6px] group-open/menu:rotate-45 motion-reduce:transition-none" />
            <span className="h-px w-8 bg-foreground transition-opacity duration-200 group-open/menu:opacity-0 motion-reduce:transition-none" />
            <span className="h-px w-8 bg-foreground transition-transform duration-200 group-open/menu:-translate-y-[6px] group-open/menu:-rotate-45 motion-reduce:transition-none" />
          </summary>
          <nav className="absolute inset-x-0 top-full border-t border-border bg-card px-gutter pt-4 pb-8">
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="block py-3 font-display text-lg font-semibold">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </details>

        <PrenuvoWordmark name={brand} href={homeHref} size="sm" className="lg:hidden" />
        <PrenuvoWordmark name={brand} href={homeHref} className="hidden lg:inline-block" />

        <nav className="ml-auto hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-sm font-bold text-foreground/75 transition-colors duration-200 ease-[ease] hover:text-foreground motion-reduce:transition-none"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <PrenuvoButton href={cta.href} size="sm" className="ml-auto lg:hidden">
          {cta.mobileLabel ?? cta.label}
        </PrenuvoButton>
        <PrenuvoButton href={cta.href} className="hidden h-[3.125rem] text-base lg:inline-flex">
          {cta.label}
        </PrenuvoButton>

        {region && (
          <details className="group/region relative hidden lg:block">
            <summary className="flex cursor-pointer list-none items-center gap-1 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground [&::-webkit-details-marker]:hidden">
              {region.current}
              <ChevronDown className="size-4 transition-transform duration-200 group-open/region:rotate-180 motion-reduce:transition-none" aria-hidden />
            </summary>
            <ul className="absolute top-full right-0 mt-3 min-w-44 rounded-lg bg-popover p-2 text-popover-foreground">
              {region.options.map((o) => (
                <li key={o.href}>
                  <a href={o.href} className="block rounded-md px-3 py-2 text-sm hover:bg-accent">
                    {o.label}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        )}
      </div>
    </header>
  );
}
