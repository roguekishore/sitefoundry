import { ChevronDown } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { RoveiaV2Button } from "@foundry/roveia-v2-button";

export interface RoveiaV2NavLink {
  /** the link text */
  label: string;
  /** where it goes (ignored when the item has children) */
  href?: string;
  /** a dropdown of further links */
  children?: { label: string; href: string }[];
}

export interface RoveiaV2HeaderProps {
  /** the company name, set as a plain wordmark */
  brand: string;
  /** where the wordmark links */
  brandHref?: string;
  /** the centre links */
  links: RoveiaV2NavLink[];
  /** the pill button on the right */
  cta: { label: string; href: string };
  /** label of the phone menu button, for screen readers */
  menuLabel?: string;
  className?: string;
}

export function RoveiaV2Header({ brand, brandHref = "#", links, cta, menuLabel = "Menu", className }: RoveiaV2HeaderProps) {
  return (
    <header className={cn("fixed inset-x-0 top-4 z-50 px-8 text-foreground lg:top-6 lg:px-gutter", className)}>
      <div className="relative mx-auto flex h-12 max-w-[62.25rem] items-center justify-between rounded-full bg-card pr-4 pl-6 shadow-[0_8px_30px_color-mix(in_oklab,var(--foreground)_10%,transparent)] lg:h-14 lg:pr-2 lg:pl-[1.625rem]">
        <a href={brandHref} className="text-[1.0625rem] font-medium tracking-[0.01em] lg:text-lg">
          {brand}
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) =>
            link.children ? (
              <div key={link.label} className="group relative">
                <button type="button" className="flex items-center gap-1 text-base tracking-[-0.02em] transition-opacity duration-300 hover:opacity-60 motion-reduce:transition-none">
                  {link.label}
                  <ChevronDown aria-hidden className="size-4" strokeWidth={1.75} />
                </button>
                <div className="invisible absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 transition-opacity duration-300 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100 motion-reduce:transition-none">
                  <ul className="min-w-48 rounded-lg bg-popover p-2 text-popover-foreground shadow-[0_8px_30px_color-mix(in_oklab,var(--foreground)_10%,transparent)]">
                    {link.children.map((child) => (
                      <li key={child.label}>
                        <a href={child.href} className="block rounded-sm px-3 py-2 text-[0.9375rem] transition-colors duration-300 hover:bg-accent hover:text-primary">
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <a key={link.label} href={link.href} className="text-base tracking-[-0.02em] transition-opacity duration-300 hover:opacity-60 motion-reduce:transition-none">
                {link.label}
              </a>
            ),
          )}
        </nav>

        <RoveiaV2Button href={cta.href} variant="ink" size="sm" className="hidden lg:inline-flex">
          {cta.label}
        </RoveiaV2Button>

        {/* phones: a two-line burger that opens a white card of links */}
        <details className="group/menu lg:hidden">
          <summary aria-label={menuLabel} className="flex h-10 w-12 cursor-pointer list-none flex-col items-end justify-center gap-2 [&::-webkit-details-marker]:hidden">
            <span className="h-0.5 w-12 rounded-full bg-foreground transition-transform duration-300 group-open/menu:translate-y-[5px] group-open/menu:rotate-6 motion-reduce:transition-none" />
            <span className="h-0.5 w-12 rounded-full bg-foreground transition-transform duration-300 group-open/menu:-translate-y-[5px] group-open/menu:-rotate-6 motion-reduce:transition-none" />
          </summary>
          <div className="absolute inset-x-0 top-full mt-3 rounded-lg bg-popover p-6 text-popover-foreground shadow-[0_8px_30px_color-mix(in_oklab,var(--foreground)_10%,transparent)]">
            <ul className="space-y-1">
              {links.map((link) => (
                <li key={link.label}>
                  {link.children ? (
                    <>
                      <p className="pt-2 pb-1 text-sm text-muted-foreground">{link.label}</p>
                      <ul>
                        {link.children.map((child) => (
                          <li key={child.label}>
                            <a href={child.href} className="block py-1.5 text-lg tracking-[-0.02em]">
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <a href={link.href} className="block py-1.5 text-lg tracking-[-0.02em]">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <RoveiaV2Button href={cta.href} block className="mt-6">
              {cta.label}
            </RoveiaV2Button>
          </div>
        </details>
      </div>
    </header>
  );
}
