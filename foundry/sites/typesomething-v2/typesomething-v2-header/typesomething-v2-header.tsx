import type { ReactNode } from "react";
import { Globe, Menu } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { TypesomethingV2Button } from "@foundry/typesomething-v2-button";
import { TypesomethingV2Wordmark } from "@foundry/typesomething-v2-wordmark";
import "./typesomething-v2-header.css";

export interface TypesomethingV2HeaderLink {
  label: string;
  href: string;
  /** the current page: shown as a lime pill */
  active?: boolean;
}

export interface TypesomethingV2HeaderProps {
  /** the wordmark: bold lead + lime tail */
  brand: { lead: string; tail: string; href: string; mark?: ReactNode };
  /** centre navigation */
  links: TypesomethingV2HeaderLink[];
  /** a short locale label shown with a globe, e.g. "EN" */
  locale?: { label: string; href: string };
  /** the lime call to action at the right */
  cta: { label: string; href: string };
  /** accessible name of the phone menu button */
  menuLabel: string;
  className?: string;
}

export function TypesomethingV2Header({ brand, links, locale, cta, menuLabel, className }: TypesomethingV2HeaderProps) {
  return (
    <header className={cn("typesomething-v2-header sticky top-0 z-50 px-gutter pt-3 pb-3 text-foreground lg:pt-3.5", className)}>
      <div className="typesomething-v2-header-bar relative mx-auto flex h-16 max-w-page items-center justify-between gap-4 rounded-full border border-border bg-background/72 pr-3 pl-5 backdrop-blur-md lg:h-15 lg:pr-2.5">
        <a href={brand.href} className="shrink-0 text-[1.2rem] lg:text-[1.3rem]">
          <TypesomethingV2Wordmark lead={brand.lead} tail={brand.tail} mark={brand.mark} cursor animated />
        </a>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {links.map((link) => (
              <li key={link.href + link.label}>
                <a
                  href={link.href}
                  aria-current={link.active ? "page" : undefined}
                  className={cn(
                    "inline-flex h-9 items-center rounded-full px-4 text-[0.88rem] font-medium transition-colors duration-[140ms] ease-[ease] motion-reduce:transition-none",
                    link.active ? "bg-primary text-primary-foreground" : "hover:bg-accent",
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          {locale && (
            <a href={locale.href} className="inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-[0.82rem] font-semibold transition-colors duration-[140ms] hover:bg-accent">
              <Globe aria-hidden className="size-4" strokeWidth={1.75} />
              {locale.label}
            </a>
          )}
          <TypesomethingV2Button href={cta.href} size="sm" arrow>
            {cta.label}
          </TypesomethingV2Button>
        </div>

        <details className="group lg:hidden">
          <summary
            aria-label={menuLabel}
            className="grid size-10 cursor-pointer list-none place-items-center rounded-full bg-primary text-primary-foreground transition-colors duration-[160ms] hover:bg-foreground hover:text-background [&::-webkit-details-marker]:hidden"
          >
            <Menu aria-hidden className="size-5" strokeWidth={2} />
          </summary>
          <div className="absolute inset-x-0 top-[calc(100%+0.5rem)] rounded-lg border border-border bg-card p-3 shadow-[0_28px_80px_color-mix(in_oklab,var(--foreground)_10%,transparent)]">
            <ul className="flex flex-col gap-1">
              {links.map((link) => (
                <li key={link.href + link.label}>
                  <a
                    href={link.href}
                    aria-current={link.active ? "page" : undefined}
                    className={cn("flex h-11 items-center rounded-full px-4 text-[0.95rem] font-medium", link.active ? "bg-primary text-primary-foreground" : "hover:bg-accent")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex items-center gap-3 border-t border-border pt-3">
              {locale && (
                <a href={locale.href} className="inline-flex items-center gap-1.5 px-2 text-[0.85rem] font-semibold">
                  <Globe aria-hidden className="size-4" strokeWidth={1.75} />
                  {locale.label}
                </a>
              )}
              <TypesomethingV2Button href={cta.href} size="sm" arrow block className="flex-1">
                {cta.label}
              </TypesomethingV2Button>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
