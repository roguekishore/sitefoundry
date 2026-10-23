import type { ReactNode } from "react";
import { Hexagon, Menu, Search } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface GalaxyHeaderLink {
  /** the item's text */
  label: string;
  /** where it goes */
  href: string;
}

export interface GalaxyHeaderProps {
  /** the company name, set as a lowercase wordmark */
  brand: string;
  /** where the wordmark links */
  brandHref?: string;
  /** the mark before the wordmark; a lucide hexagon when empty */
  mark?: ReactNode;
  /** the centred nav items (four on the original) */
  links: GalaxyHeaderLink[];
  /** the text link on the right (e.g. a login) */
  action: GalaxyHeaderLink;
  /** where the search icon goes */
  searchHref?: string;
  /** screen-reader label for the search icon */
  searchLabel?: string;
  /** screen-reader label for the phone menu button */
  menuLabel?: string;
  className?: string;
}

const linkHover = "transition-colors duration-300 ease-[cubic-bezier(0.42,0,0.58,1)] hover:text-muted-foreground/70 motion-reduce:transition-none";

export function GalaxyHeader({ brand, brandHref = "#", mark, links, action, searchHref = "#", searchLabel, menuLabel, className }: GalaxyHeaderProps) {
  return (
    <header className={cn("sticky top-0 z-50 bg-background text-foreground", className)}>
      <div className="relative mx-auto flex h-[3.375rem] max-w-page items-center px-gutter lg:h-20">
        <a href={brandHref} className="flex items-center gap-2.5 transition-opacity duration-300 ease-[cubic-bezier(0.42,0,0.58,1)] hover:opacity-60 motion-reduce:transition-none">
          <span aria-hidden className="grid size-[1.875rem] place-items-center [&_svg]:size-full">
            {mark ?? <Hexagon strokeWidth={2.25} />}
          </span>
          <span className="text-[1.375rem] leading-none tracking-[-0.02em] lowercase">{brand}</span>
        </a>
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-16 lg:flex">
          {links.map((link) => (
            <a key={link.label} href={link.href} className={cn("text-base leading-none", linkHover)}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-7 lg:gap-14">
          <a href={searchHref} aria-label={searchLabel} className={linkHover}>
            <Search aria-hidden className="size-[1.125rem]" strokeWidth={1.75} />
          </a>
          <a href={action.href} className={cn("hidden text-base leading-none lg:inline lg:mr-8", linkHover)}>
            {action.label}
          </a>
          <details className="group lg:hidden">
            <summary aria-label={menuLabel} className="grid size-6 cursor-pointer list-none place-items-center [&::-webkit-details-marker]:hidden">
              <Menu aria-hidden className="size-5" strokeWidth={1.5} />
            </summary>
            <nav className="absolute inset-x-0 top-full flex flex-col border-t border-border bg-background px-gutter py-4">
              {[...links, action].map((link) => (
                <a key={link.label} href={link.href} className={cn("py-3 text-lg", linkHover)}>
                  {link.label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
