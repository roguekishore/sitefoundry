import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { M3PgLink } from "@foundry/m3-pg-link";
import "./m3-pg-header.css";

export interface M3PgHeaderLink {
  label: string;
  href: string;
}

export interface M3PgHeaderProps {
  /** the full wordmark shown at the top of the page */
  brand: string;
  /** the short mark that replaces it once the page scrolls */
  mark: string;
  homeHref?: string;
  /** the main links (five fit the desktop row) */
  links: M3PgHeaderLink[];
  /** the language switch at the right, e.g. { label: "DE", href: "/de/" } */
  language?: M3PgHeaderLink;
  /** screen-reader label of the phone menu button */
  menuLabel: string;
  className?: string;
}

export function M3PgHeader({ brand, mark, homeHref = "/", links, language, menuLabel, className }: M3PgHeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className={cn("sticky top-0 z-50 bg-background text-foreground", className)}>
      <div className="m3-pg-header-bar mx-auto max-w-page px-gutter lg:pt-4">
        <div className="flex h-14 items-center justify-between lg:grid lg:h-20 lg:grid-cols-4 lg:gap-x-5">
          {/* wordmark and short mark share one spot and cross-fade */}
          <a href={homeHref} className="relative grid items-center text-highlight">
            <span className="m3-pg-header-full col-start-1 row-start-1 text-lg leading-6 font-semibold tracking-[-0.02em] whitespace-nowrap lg:text-xl">
              {brand}
            </span>
            <span
              aria-hidden
              className="m3-pg-header-mark col-start-1 row-start-1 text-[2rem] leading-none font-semibold tracking-[-0.05em] lg:text-[2.875rem]"
            >
              {mark}
            </span>
          </a>

          <nav className="hidden lg:col-span-2 lg:flex lg:items-center lg:justify-between">
            {links.map((link) => (
              <M3PgLink key={link.href} href={link.href} variant="nav" className="text-base leading-6 tracking-[-0.01em]">
                {link.label}
              </M3PgLink>
            ))}
          </nav>

          <div className="flex items-center justify-end">
            {language && (
              <M3PgLink href={language.href} variant="nav" className="hidden text-base leading-6 lg:inline">
                {language.label}
              </M3PgLink>
            )}
            <button
              type="button"
              aria-label={menuLabel}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="-mr-1 flex size-9 items-center justify-center lg:hidden"
            >
              {open ? <X className="size-6" strokeWidth={1.25} aria-hidden /> : <Menu className="size-6" strokeWidth={1.25} aria-hidden />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-gutter pt-4 pb-8 lg:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)} className="block py-1.5 text-2xl leading-8 font-semibold tracking-[-0.02em]">
                  {link.label}
                </a>
              </li>
            ))}
            {language && (
              <li>
                <a href={language.href} className="mt-3 block text-base text-muted-foreground">
                  {language.label}
                </a>
              </li>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}
