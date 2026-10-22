import type { ReactNode } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { BasepowercompanyButton } from "@foundry/basepowercompany-button";
import { BasepowercompanyWordmark } from "@foundry/basepowercompany-wordmark";
import "./basepowercompany-header.css";

export interface BasepowercompanyHeaderLink {
  /** the link text */
  label: string;
  /** where it goes */
  href: string;
  /** draw a chevron after it (an item that would open a menu) */
  hasMenu?: boolean;
}

export interface BasepowercompanyHeaderProps {
  /** the company name, shown as the wordmark */
  brand: string;
  /** a small mark before the wordmark (e.g. a lucide icon) */
  mark?: ReactNode;
  /** where the wordmark links */
  homeHref?: string;
  /** the nav items (desktop row, phone menu) */
  links: BasepowercompanyHeaderLink[];
  /** the hairline button before the main one */
  signIn: { label: string; href: string };
  /** the lime main button */
  cta: { label: string; href: string };
  /** screen-reader label for the phone menu button */
  menuLabel?: string;
  className?: string;
}

/*
 * Fixed. At the top of the page it is clear with light ink, for the photo hero under it; over
 * the first 80px of scrolling it turns into a solid bar with dark ink. The light ink is read
 * from a dark-scoped inner box, the solid colours from the page's own tokens.
 */
export function BasepowercompanyHeader({ brand, mark, homeHref = "#", links, signIn, cta, menuLabel = "Menu", className }: BasepowercompanyHeaderProps) {
  return (
    <header className={cn("bp-header fixed inset-x-0 top-0 z-50", className)}>
      <div className="dark bp-header-top">
        <div className="bp-header-bar">
          <div className="mx-auto flex h-[3.3125rem] max-w-page items-center gap-4 px-gutter lg:h-[4.3125rem] lg:px-[calc(var(--page-gutter)*2)]">
            <BasepowercompanyWordmark name={brand} mark={mark} href={homeHref} />

            <nav className="ml-8 hidden items-center gap-1 lg:flex">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="group/nav flex h-10 items-center gap-1 rounded-lg px-2.5 text-base font-semibold tracking-[-0.005em] transition-colors duration-300 ease-[cubic-bezier(0.3,0.3,0.3,1)] hover:bg-[var(--bp-pill)] hover:text-[var(--bp-ink)] motion-reduce:transition-none"
                >
                  {l.label}
                  {l.hasMenu && (
                    <ChevronDown
                      aria-hidden
                      className="size-4 stroke-[1.75] transition-transform duration-300 ease-[cubic-bezier(0.3,0.3,0.3,1)] group-hover/nav:rotate-180 motion-reduce:transition-none"
                    />
                  )}
                </a>
              ))}
            </nav>

            <div className="ml-auto hidden items-center gap-2 lg:flex">
              <BasepowercompanyButton href={signIn.href} size="sm" variant="ghost" className="bp-header-signin">
                {signIn.label}
              </BasepowercompanyButton>
              <BasepowercompanyButton href={cta.href} size="sm">
                {cta.label}
              </BasepowercompanyButton>
            </div>

            {/* phone menu: a disclosure, no JavaScript */}
            <details className="group/menu ml-auto lg:hidden">
              <summary className="-mr-2 flex size-10 cursor-pointer list-none items-center justify-center [&::-webkit-details-marker]:hidden">
                <span className="sr-only">{menuLabel}</span>
                <Menu aria-hidden className="size-6 stroke-[1.5] group-open/menu:hidden" />
                <X aria-hidden className="hidden size-6 stroke-[1.5] group-open/menu:block" />
              </summary>
              <nav className="fixed inset-x-0 top-[3.3125rem] bg-[var(--bp-bar)] px-gutter pt-2 pb-6 text-[var(--bp-ink)]">
                <ul className="flex flex-col">
                  {links.map((l) => (
                    <li key={l.href} className="border-b border-[var(--bp-line)]">
                      <a href={l.href} className="flex items-center justify-between py-3.5 text-lg font-semibold">
                        {l.label}
                        {l.hasMenu && <ChevronDown aria-hidden className="size-5 -rotate-90 stroke-[1.5]" />}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href={signIn.href}
                    className="flex h-[3.125rem] items-center justify-center rounded-lg border border-[var(--bp-brand)] font-bold text-[var(--bp-brand)]"
                  >
                    {signIn.label}
                  </a>
                  <BasepowercompanyButton href={cta.href} block>
                    {cta.label}
                  </BasepowercompanyButton>
                </div>
              </nav>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}
