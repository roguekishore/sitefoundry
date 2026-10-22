import type { ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { GranolaButton } from "@foundry/granola-button";
import { GranolaWordmark } from "@foundry/granola-wordmark";
import "./granola-header.css";

export interface GranolaHeaderLink {
  /** the link text */
  label: string;
  /** where it goes */
  href: string;
}

export interface GranolaHeaderProps {
  /** the company name, shown as the wordmark */
  brand: string;
  /** a small mark before the wordmark (e.g. a lucide icon) */
  mark?: ReactNode;
  /** where the wordmark links */
  homeHref?: string;
  /** the centred links (desktop row, phone menu) */
  links: GranolaHeaderLink[];
  /** the quiet hairline pill before the main one (desktop and phone menu) */
  secondaryCta?: GranolaHeaderLink;
  /** the main pill: desktop label, a shorter phone label, link and an optional icon */
  cta: { label: string; mobileLabel?: string; href: string; icon?: ReactNode };
  /** screen-reader label for the phone menu button */
  menuLabel?: string;
  className?: string;
}

export function GranolaHeader({ brand, mark, homeHref = "#", links, secondaryCta, cta, menuLabel = "Menu", className }: GranolaHeaderProps) {
  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 lg:top-2", className)}>
      <div className="relative mx-auto flex h-14 max-w-[calc(var(--page-width)_+_1rem)] items-center gap-4 pr-2 pl-gutter lg:pl-4">
        {/* the bar's fill: hairline, translucent paper and blur, faded in once the page scrolls */}
        <div
          aria-hidden
          className="granola-header-fill absolute inset-0 border-b border-border bg-background/85 backdrop-blur-md lg:rounded-full lg:border lg:shadow-[0_1px_2px_color-mix(in_oklab,var(--foreground)_6%,transparent)]"
        />

        <GranolaWordmark name={brand} mark={mark} href={homeHref} className="relative" />

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-foreground/85 transition-colors duration-150 hover:text-foreground motion-reduce:transition-none"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="relative ml-auto flex items-center gap-1">
          {secondaryCta && (
            <GranolaButton href={secondaryCta.href} variant="soft" size="sm" className="hidden lg:inline-flex">
              {secondaryCta.label}
            </GranolaButton>
          )}
          <GranolaButton href={cta.href} variant="brand" size="sm" icon={cta.icon} className="granola-header-cta hidden lg:inline-flex">
            {cta.label}
          </GranolaButton>
          <GranolaButton href={cta.href} variant="brand" size="sm" className="granola-header-cta h-10 px-3.5 text-[0.9375rem] lg:hidden">
            {cta.mobileLabel ?? cta.label}
          </GranolaButton>

          {/* phone menu: a disclosure, no JavaScript */}
          <details className="group/menu lg:hidden">
            <summary className="flex size-10 cursor-pointer list-none items-center justify-center [&::-webkit-details-marker]:hidden">
              <span className="sr-only">{menuLabel}</span>
              <Menu aria-hidden className="size-6 stroke-[1.5] group-open/menu:hidden" />
              <X aria-hidden className="hidden size-6 stroke-[1.5] group-open/menu:block" />
            </summary>
            <nav className="fixed inset-x-0 top-14 border-y border-border bg-background px-gutter pt-2 pb-6">
              <ul className="flex flex-col">
                {links.map((l) => (
                  <li key={l.href} className="border-b border-border">
                    <a href={l.href} className="block py-3.5 font-display text-2xl">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              {secondaryCta && (
                <GranolaButton href={secondaryCta.href} variant="outline" block className="mt-6">
                  {secondaryCta.label}
                </GranolaButton>
              )}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
