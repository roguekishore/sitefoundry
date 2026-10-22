import { useState, type ReactNode } from "react";
import { ArrowRight, Menu, ShoppingCart, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import "./eightsleep-header.css";

export interface EightsleepNavLink {
  label: ReactNode;
  href: string;
}

export interface EightsleepHeaderProps {
  /** the wordmark: plain text or a small logo */
  brand: ReactNode;
  /** where the wordmark links */
  brandHref?: string;
  /** the promo strip's text; leave out for no strip */
  promo?: { label: ReactNode; href: string };
  /** two to four main links */
  links: EightsleepNavLink[];
  /** the quiet account link at the right */
  login?: EightsleepNavLink;
  /** the small white button at the right (hidden on phones) */
  cta?: EightsleepNavLink;
  /** where the cart icon links */
  cartHref?: string;
  /** screen-reader labels */
  cartLabel?: string;
  menuLabel?: string;
  className?: string;
}

const linkText = "text-[12px] font-medium tracking-[0.08em] uppercase transition-opacity duration-200 hover:opacity-70";

export function EightsleepHeader({ brand, brandHref = "/", promo, links, login, cta, cartHref = "#", cartLabel, menuLabel, className }: EightsleepHeaderProps) {
  const [open, setOpen] = useState(false);
  return (
    <header className={cn("fixed inset-x-0 top-0 z-50", promo && "eightsleep-header-tuck", className)}>
      {promo && (
        <a
          href={promo.href}
          className="flex h-[42px] items-center justify-center gap-2 bg-highlight px-gutter text-center text-[11px] font-medium tracking-[0.1em] text-highlight-foreground uppercase transition-opacity duration-200 hover:opacity-90 lg:text-[12px]"
        >
          {promo.label}
          <ArrowRight className="size-3.5 shrink-0" strokeWidth={2} />
        </a>
      )}
      <div className="dark relative bg-background/75 text-foreground backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-page items-center gap-8 px-gutter lg:px-16">
          <a href={brandHref} className="font-display text-[21px] leading-none font-semibold tracking-[-0.03em]">
            {brand}
          </a>
          <ul className="hidden items-center gap-8 lg:flex">
            {links.map((link, i) => (
              <li key={i}>
                <a href={link.href} className={linkText}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="ml-auto flex items-center gap-5 lg:gap-7">
            {login && (
              <a href={login.href} className={linkText}>
                {login.label}
              </a>
            )}
            <a href={cartHref} aria-label={cartLabel} className="transition-opacity duration-200 hover:opacity-70">
              <ShoppingCart className="size-5" strokeWidth={1.5} />
            </a>
            {cta && (
              <a
                href={cta.href}
                className="hidden h-9 items-center rounded-[calc(var(--radius)/2)] bg-primary px-4 text-[14px] font-medium text-primary-foreground transition-colors duration-200 hover:bg-primary/85 lg:inline-flex"
              >
                {cta.label}
              </a>
            )}
            <button type="button" aria-label={menuLabel} aria-expanded={open} onClick={() => setOpen(!open)} className="lg:hidden">
              {open ? <X className="size-6" strokeWidth={1.5} /> : <Menu className="size-6" strokeWidth={1.5} />}
            </button>
          </div>
        </nav>
        {open && (
          <ul className="absolute inset-x-0 top-full flex flex-col gap-1 border-t border-border bg-background/90 px-gutter py-4 backdrop-blur-xl lg:hidden">
            {links.map((link, i) => (
              <li key={i}>
                <a href={link.href} className={cn(linkText, "block py-3 text-[13px]")} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
            {cta && (
              <li className="pt-3">
                <a href={cta.href} className="flex h-12 items-center justify-center rounded-[calc(var(--radius)/2)] bg-primary text-[15px] font-medium text-primary-foreground">
                  {cta.label}
                </a>
              </li>
            )}
          </ul>
        )}
      </div>
    </header>
  );
}
