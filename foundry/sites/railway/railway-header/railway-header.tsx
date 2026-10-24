import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { RailwayButton } from "@foundry/railway-button";

export interface RailwayNavLink {
  label: string;
  href: string;
}

export interface RailwayNavItem {
  label: string;
  /** a plain link when set */
  href?: string;
  /** a dropdown (with a chevron) when set */
  links?: RailwayNavLink[];
}

export interface RailwayHeaderProps {
  /** the brand: a mark (svg or lucide icon) and a wordmark */
  brand: { name: string; mark?: ReactNode; href: string };
  /** the centred navigation */
  nav: RailwayNavItem[];
  /** the right-hand links (e.g. sign in, book a demo) */
  actions: RailwayNavLink[];
  /** screen-reader label of the phone menu button */
  menuLabel: string;
  className?: string;
}

/**
 * Sticky dark top bar: wordmark left, centred nav with chevron dropdowns, two quiet links
 * right. Phones get a two-line menu button that opens a full-width list (a <details>, so it
 * works without JavaScript).
 */
export function RailwayHeader({ brand, nav, actions, menuLabel, className }: RailwayHeaderProps) {
  return (
    <header className={cn("sticky top-0 z-40 bg-background text-foreground", className)}>
      <div className="mx-auto flex h-[4.125rem] max-w-page items-center justify-between px-gutter lg:h-[4.5rem] xl:px-0">
        <a href={brand.href} className="flex items-center gap-2 text-[1.375rem] font-semibold tracking-[-0.02em] [&_svg]:size-6">
          {brand.mark}
          <span>{brand.name}</span>
        </a>

        <nav className="hidden items-center gap-3 lg:flex">
          {nav.map((item) =>
            item.links ? (
              <div key={item.label} className="group relative">
                <button
                  type="button"
                  className="flex h-9 items-center gap-1.5 rounded-md px-3 text-sm font-medium text-foreground/90 transition-colors duration-150 group-focus-within:bg-card group-hover:bg-card group-hover:text-foreground motion-reduce:transition-none"
                >
                  {item.label}
                  <ChevronDown className="size-3.5 text-muted-foreground" strokeWidth={2} />
                </button>
                <div className="invisible absolute top-full left-0 pt-2 opacity-0 transition-opacity duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100 motion-reduce:transition-none">
                  <ul className="min-w-48 rounded-lg border border-border bg-popover p-1.5 text-popover-foreground shadow-lg">
                    {item.links.map((link) => (
                      <li key={link.label}>
                        <a href={link.href} className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors duration-150 hover:bg-card hover:text-foreground">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="flex h-9 items-center rounded-md px-3 text-sm font-medium text-foreground/90 transition-colors duration-150 hover:text-foreground motion-reduce:transition-none"
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          {actions.map((action) => (
            <RailwayButton key={action.label} href={action.href} variant="ghost" size="sm">
              {action.label}
            </RailwayButton>
          ))}
        </div>

        <details className="group lg:hidden">
          <summary aria-label={menuLabel} className="flex size-10 cursor-pointer list-none items-center justify-center rounded-md [&::-webkit-details-marker]:hidden">
            <span className="flex w-3.5 flex-col gap-[3px]">
              <span className="h-px w-full bg-foreground transition-transform duration-150 group-open:translate-y-[2px] group-open:rotate-45 motion-reduce:transition-none" />
              <span className="h-px w-full bg-foreground transition-transform duration-150 group-open:-translate-y-[2px] group-open:-rotate-45 motion-reduce:transition-none" />
            </span>
          </summary>
          <div className="absolute inset-x-0 top-full border-b border-border bg-background px-gutter pt-2 pb-6">
            <ul className="divide-y divide-border">
              {nav.map((item) => (
                <li key={item.label}>
                  <a href={item.href ?? item.links?.[0]?.href} className="flex items-center justify-between py-3.5 text-base font-medium">
                    {item.label}
                    {item.links && <ChevronDown className="size-4 -rotate-90 text-muted-foreground" />}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {actions.map((action, i) => (
                <RailwayButton key={action.label} href={action.href} variant={i === actions.length - 1 ? "primary" : "dark"}>
                  {action.label}
                </RailwayButton>
              ))}
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
