import type { ReactNode } from "react";
import { ChevronDown, Equal } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { VercelButton } from "@foundry/vercel-button";
import { VercelMark } from "@foundry/vercel-mark";
import "./vercel-header.css";

export interface VercelHeaderLink {
  /** the item's text */
  label: string;
  /** where it goes */
  href: string;
  /** sub-links: turns the item into a small hover menu with a chevron */
  items?: { label: string; href: string }[];
}

export interface VercelHeaderProps {
  /** the company name (read to screen readers next to the mark) */
  brand: string;
  /** the mark (an svg or lucide icon) */
  mark: ReactNode;
  /** where the mark links */
  brandHref?: string;
  /** nav items after the mark (four on the original) */
  links: VercelHeaderLink[];
  /** white ringed buttons before the main one (e.g. book a demo, sign in) */
  secondary?: { label: string; href: string }[];
  /** the ink button on the far right */
  action: { label: string; href: string };
  /** screen-reader label for the phone menu button */
  menuLabel?: string;
  className?: string;
}

const linkClass =
  "text-sm text-muted-foreground transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-foreground motion-reduce:transition-none";

/** Sticky page-coloured bar with nav on the left and compact buttons on the right. */
export function VercelHeader({ brand, mark, brandHref, links, secondary = [], action, menuLabel, className }: VercelHeaderProps) {
  return (
    <header
      className={cn(
        "vercel-header-bar sticky top-0 z-50 border-b border-border bg-background px-gutter text-foreground",
        className,
      )}
    >
      <div className="relative flex h-16 items-center">
        <VercelMark brand={brand} mark={mark} href={brandHref} />

        <nav className="ml-8 hidden items-center gap-6 lg:flex">
          {links.map((link) =>
            link.items?.length ? (
              <div key={link.label} className="group relative">
                <a href={link.href} className={cn(linkClass, "inline-flex items-center gap-1 py-5 group-hover:text-foreground")}>
                  {link.label}
                  <ChevronDown
                    aria-hidden
                    className="size-3 transition-transform duration-200 group-hover:rotate-180 motion-reduce:transition-none"
                    strokeWidth={2}
                  />
                </a>
                <div className="pointer-events-none invisible absolute top-full -left-3 w-56 rounded-xl bg-popover p-2 opacity-0 shadow-lg shadow-foreground/5 ring-1 ring-border transition-opacity duration-200 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 motion-reduce:transition-none">
                  {link.items.map((item) => (
                    <a key={item.label} href={item.href} className={cn(linkClass, "block rounded-lg px-3 py-2 hover:bg-muted")}>
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a key={link.label} href={link.href} className={linkClass}>
                {link.label}
              </a>
            ),
          )}
        </nav>

        <div className="ml-auto hidden items-center gap-2.5 lg:flex">
          {secondary.map((item) => (
            <VercelButton key={item.label} href={item.href} variant="secondary" shape="box">
              {item.label}
            </VercelButton>
          ))}
          <VercelButton href={action.href} shape="box">
            {action.label}
          </VercelButton>
        </div>

        <details className="group ml-auto lg:hidden">
          <summary
            aria-label={menuLabel}
            className="grid size-8 cursor-pointer list-none place-items-center text-foreground [&::-webkit-details-marker]:hidden"
          >
            <Equal aria-hidden className="size-5" strokeWidth={1.5} />
          </summary>
          <nav className="absolute inset-x-0 top-full -mx-gutter flex h-[calc(100svh-4rem)] flex-col overflow-y-auto border-t border-border bg-background px-gutter pt-4 pb-8">
            <div className="flex flex-col gap-3">
              {secondary.map((item) => (
                <VercelButton key={item.label} href={item.href} variant="secondary" shape="box" block className="h-10">
                  {item.label}
                </VercelButton>
              ))}
              <VercelButton href={action.href} shape="box" block className="h-10">
                {action.label}
              </VercelButton>
            </div>
            {links.flatMap((link) => [link, ...(link.items ?? [])]).map((link) => (
              <a key={link.label} href={link.href} className="border-b border-border py-3 text-base text-foreground">
                {link.label}
              </a>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
