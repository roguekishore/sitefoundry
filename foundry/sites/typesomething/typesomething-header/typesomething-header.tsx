import type { ReactNode } from "react";
import { ArrowRight, Globe, Menu } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { TypesomethingWordmark } from "@foundry/typesomething-wordmark";
import "./typesomething-header.css";

export interface TypesomethingHeaderLink {
  label: string;
  href: string;
  /** the page you're on: shown as an acid pill */
  active?: boolean;
}

export interface TypesomethingHeaderProps {
  /** wordmark: bold first half and light second half (e.g. "Paper" + "kite") */
  brand: { lead: string; tail: string };
  /** small mark after the wordmark (a lucide icon or an svg) */
  brandIcon?: ReactNode;
  /** name of the home link, for screen readers */
  homeLabel: string;
  homeHref?: string;
  /** the centred links */
  links: TypesomethingHeaderLink[];
  /** language switch at the right (e.g. "EN"); left out when empty */
  language?: { label: string; href: string };
  /** the acid pill at the right end */
  cta: { label: string; href: string };
  /** label of the phone menu button, for screen readers */
  menuLabel?: string;
  /** the second half of the wordmark types itself out on a loop */
  typing?: boolean;
  className?: string;
}

/**
 * Sticky floating pill: white glass over the page, 14px in from the top. As the page scrolls
 * it slides up to the top edge and (on desktop) narrows. On phones the links fold into a
 * round acid menu button that opens a panel (native <details>, works without JavaScript).
 */
export function TypesomethingHeader({
  brand,
  brandIcon,
  homeLabel,
  homeHref = "/",
  links,
  language,
  cta,
  menuLabel = "Menu",
  typing = true,
  className,
}: TypesomethingHeaderProps) {
  return (
    <header className={cn("typesomething-header sticky top-0 z-40 px-gutter pt-3.5 pb-3.5 text-foreground", className)}>
      <div className="typesomething-header-pill relative mx-auto flex h-[3.75rem] max-w-page items-center gap-4 rounded-[1.875rem] border border-foreground/14 bg-background/72 pr-2 pl-5 shadow-[0_8px_24px_-12px_color-mix(in_oklab,var(--foreground)_18%,transparent)] backdrop-blur-md lg:pl-6">
        <a href={homeHref} aria-label={homeLabel} className="flex items-center text-[1.3rem] [&_svg]:text-foreground">
          <TypesomethingWordmark lead={brand.lead} tail={brand.tail} icon={brandIcon} typing={typing} />
        </a>

        <nav className="mx-auto hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={link.active ? "page" : undefined}
              className={cn(
                "flex h-10 items-center rounded-full px-4 text-[0.9rem] transition-colors duration-[140ms] ease-[ease] motion-reduce:transition-none",
                link.active ? "bg-primary font-semibold text-primary-foreground" : "hover:bg-foreground/7",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-3 lg:ml-0 lg:flex">
          {language && (
            <a href={language.href} className="flex h-10 items-center gap-1.5 rounded-full px-3 text-[0.8rem] font-semibold transition-colors duration-[140ms] hover:bg-foreground/7 [&_svg]:size-3.5">
              <Globe aria-hidden />
              {language.label}
            </a>
          )}
          <a
            href={cta.href}
            className="flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-[0.84rem] font-bold text-primary-foreground transition-[color,background-color] duration-[160ms] ease-[ease] hover:bg-foreground hover:text-background motion-reduce:transition-none [&_svg]:size-4"
          >
            {cta.label}
            <ArrowRight aria-hidden />
          </a>
        </div>

        <details className="group ml-auto lg:hidden">
          <summary
            aria-label={menuLabel}
            className="grid size-11 cursor-pointer list-none place-items-center rounded-full bg-primary text-primary-foreground [&::-webkit-details-marker]:hidden [&_svg]:size-5"
          >
            <Menu aria-hidden />
          </summary>
          <nav className="absolute inset-x-0 top-[calc(100%+0.5rem)] rounded-lg border border-foreground/14 bg-background p-3 shadow-[0_28px_80px_color-mix(in_oklab,var(--foreground)_14%,transparent)]">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={link.active ? "page" : undefined}
                className={cn("flex h-12 items-center rounded-full px-4 text-base", link.active ? "bg-primary font-semibold text-primary-foreground" : "hover:bg-muted")}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex items-center justify-between gap-3 border-t border-foreground/14 pt-3">
              {language && (
                <a href={language.href} className="flex items-center gap-1.5 px-4 text-sm font-semibold [&_svg]:size-4">
                  <Globe aria-hidden />
                  {language.label}
                </a>
              )}
              <a href={cta.href} className="ml-auto flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-bold text-primary-foreground [&_svg]:size-4">
                {cta.label}
                <ArrowRight aria-hidden />
              </a>
            </div>
          </nav>
        </details>
      </div>
    </header>
  );
}
