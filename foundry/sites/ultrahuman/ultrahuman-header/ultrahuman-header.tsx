import type { ReactNode } from "react";
import { ChevronRight, Globe, Hexagon, Menu, ShoppingBag } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { UltrahumanButton } from "@foundry/ultrahuman-button";
import "./ultrahuman-header.css";

export interface UltrahumanHeaderLink {
  /** the item's text */
  label: string;
  /** where it goes */
  href: string;
}

export interface UltrahumanHeaderProps {
  /** the company name, set as the centred wordmark (and read to screen readers on phones) */
  brand: string;
  /** where the wordmark links */
  brandHref?: string;
  /** the brand mark shown before the name, and alone once the bar has shrunk (an icon or svg) */
  mark?: ReactNode;
  /** the notice line above the bar on desktop */
  notice: string;
  /** a shorter notice for phones (falls back to notice) */
  noticeShort?: string;
  /** the underlined link after the notice */
  noticeLink?: UltrahumanHeaderLink;
  /** the nav items shown on desktop, left of the wordmark (four on the original) */
  links: UltrahumanHeaderLink[];
  /** extra items listed only in the menu panel */
  menuLinks?: UltrahumanHeaderLink[];
  /** the buy button on the right (a plain text link on phones) */
  action: UltrahumanHeaderLink;
  /** the region code in the locale pill, e.g. "UK" */
  locale: string;
  /** where the bag icon links */
  cartHref?: string;
  /** screen-reader labels for the icon buttons */
  labels?: { menu?: string; cart?: string; locale?: string };
  className?: string;
}

/**
 * The store header: a one-line notice over a white bar. While the page scrolls the notice slides
 * away and, on desktop, the bar shrinks into a centred, translucent pill with only the mark showing.
 */
export function UltrahumanHeader({
  brand,
  brandHref = "#",
  mark,
  notice,
  noticeShort,
  noticeLink,
  links,
  menuLinks = [],
  action,
  locale,
  cartHref = "#",
  labels = {},
  className,
}: UltrahumanHeaderProps) {
  const markNode = mark ?? <Hexagon strokeWidth={2.5} />;
  return (
    <header className={cn("pointer-events-none sticky top-0 z-50", className)}>
      <div className="ultrahuman-header-notice pointer-events-auto flex h-8 items-center justify-center bg-background px-gutter text-[0.8125rem] leading-none tracking-[-0.01em] text-foreground lg:text-xs">
        <p className="truncate">
          <span className="lg:hidden">{noticeShort ?? notice}</span>
          <span className="hidden lg:inline">{notice}</span>
          {noticeLink && (
            <a href={noticeLink.href} className="ml-1.5 hidden underline underline-offset-2 lg:inline">
              {noticeLink.label}
            </a>
          )}
        </p>
        {noticeLink && (
          <a href={noticeLink.href} aria-label={noticeLink.label} className="ml-1 shrink-0 lg:hidden">
            <ChevronRight aria-hidden className="size-4" strokeWidth={2.25} />
          </a>
        )}
      </div>

      <div className="ultrahuman-header-bar pointer-events-auto relative mx-auto flex h-[2.8125rem] max-w-full items-center gap-3 border-b border-foreground/8 bg-background px-4 text-foreground lg:h-[3.5625rem] lg:gap-0 lg:border-transparent lg:px-12">
        <details className="group order-last lg:order-first">
          <summary aria-label={labels.menu} className="grid size-6 cursor-pointer list-none place-items-center [&::-webkit-details-marker]:hidden">
            <Menu aria-hidden className="size-5" strokeWidth={1.5} />
          </summary>
          <nav className="absolute inset-x-0 top-full flex flex-col border-t border-foreground/8 bg-background px-gutter py-4 shadow-[0_12px_24px_color-mix(in_oklab,var(--foreground)_6%,transparent)] lg:inset-x-6 lg:mt-2 lg:rounded-lg lg:px-8">
            {[...links, ...menuLinks].map((link) => (
              <a key={link.label} href={link.href} className="py-2.5 text-lg tracking-[-0.02em] text-foreground transition-colors duration-[220ms] hover:text-foreground/60">
                {link.label}
              </a>
            ))}
          </nav>
        </details>

        <nav className="ml-9 hidden items-center gap-10 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[0.8125rem] tracking-[-0.01em] text-foreground transition-colors duration-[220ms] ease-out hover:text-foreground/60 motion-reduce:transition-none"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={brandHref}
          className="order-first flex items-center gap-2.5 text-foreground lg:absolute lg:left-1/2 lg:order-none lg:-translate-x-1/2"
        >
          <span aria-hidden className="flex [&_svg]:size-[1.375rem] lg:[&_svg]:size-5">
            {markNode}
          </span>
          <span className="ultrahuman-header-word inline-block overflow-clip whitespace-nowrap text-[1.3125rem] leading-none font-black tracking-[0.02em] uppercase italic max-lg:sr-only">
            {brand}
          </span>
        </a>

        <div className="ml-auto flex items-center gap-3 lg:gap-0">
          <a href={action.href} className="text-sm tracking-[-0.01em] text-foreground lg:hidden">
            {action.label}
          </a>
          <a
            href="#"
            aria-label={labels.locale}
            className="flex size-7 items-center justify-center gap-1.5 rounded-full border border-foreground/10 text-[0.8125rem] font-medium transition-colors hover:bg-foreground/4 lg:h-7 lg:w-auto lg:px-1.5 lg:pr-2"
          >
            <Globe aria-hidden className="size-4 text-foreground/70" strokeWidth={1.75} />
            <span className="hidden lg:inline">{locale}</span>
          </a>
          <a href={cartHref} aria-label={labels.cart} className="grid size-6 place-items-center lg:mr-6 lg:ml-10">
            <ShoppingBag aria-hidden className="size-5" strokeWidth={1.5} />
          </a>
          <UltrahumanButton href={action.href} className="hidden min-w-0 px-6 text-[0.8125rem] lg:inline-flex">
            {action.label}
          </UltrahumanButton>
        </div>
      </div>
    </header>
  );
}
