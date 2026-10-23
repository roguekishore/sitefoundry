import type { ReactNode } from "react";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { BrexButton } from "@foundry/brex-button";

export interface BrexHeaderLink {
  label: string;
  href: string;
  /** shows a chevron, as for items that open a menu */
  menu?: boolean;
}

export interface BrexHeaderProps {
  /** the wordmark: a name in the display face with an optional small icon before it */
  brand: { name: string; href: string; icon?: ReactNode };
  /** the nav links */
  links: BrexHeaderLink[];
  /** the two plain links on the right, e.g. "Sign in" and "See a demo" */
  secondary: { label: string; href: string }[];
  /** the orange button */
  primary: { label: string; href: string };
  /** screen-reader label for the phone menu button */
  menuLabel: string;
  className?: string;
}

/** Brex's pinned white header. */
export function BrexHeader({ brand, links, secondary, primary, menuLabel, className }: BrexHeaderProps) {
  const wordmark = (
    <a href={brand.href} className="flex items-center gap-1.5 font-display text-2xl/none font-semibold tracking-[-0.04em] [&_svg]:size-5">
      {brand.icon}
      {brand.name}
    </a>
  );
  return (
    <header className={cn("sticky top-0 z-40 border-b border-border bg-background text-foreground", className)}>
      <nav className="mx-auto flex h-[3.75rem] max-w-page items-center justify-between px-gutter">
        <div className="flex items-center gap-4 lg:gap-3">
          <details className="group lg:hidden">
            <summary aria-label={menuLabel} className="flex size-8 cursor-pointer list-none items-center justify-center [&::-webkit-details-marker]:hidden">
              <Menu aria-hidden className="size-6 group-open:hidden" strokeWidth={1.75} />
              <X aria-hidden className="hidden size-6 group-open:block" strokeWidth={1.75} />
            </summary>
            <div className="absolute inset-x-0 top-full max-h-[calc(100svh-4rem)] overflow-y-auto border-b border-border bg-background px-gutter pt-2 pb-6">
              <ul className="divide-y divide-border">
                {links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="flex items-center justify-between py-4 text-lg font-medium">
                      {l.label}
                      {l.menu && <ChevronRight aria-hidden className="size-4 text-muted-foreground" strokeWidth={1.75} />}
                    </a>
                  </li>
                ))}
                {secondary.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="block py-4 text-lg font-medium">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </details>
          {wordmark}
          <ul className="hidden items-center lg:flex">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="flex items-center gap-1.5 px-[1.1875rem] py-2 text-sm font-medium tracking-[-0.02em] transition-opacity duration-150 ease-linear hover:opacity-70 motion-reduce:transition-none"
                >
                  {l.label}
                  {l.menu && <ChevronDown aria-hidden className="size-4" strokeWidth={2} />}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-1 lg:gap-0">
          <ul className="hidden items-center lg:flex">
            {secondary.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="px-[1.1875rem] py-2 text-sm font-medium tracking-[-0.02em] transition-opacity duration-150 ease-linear hover:opacity-70 motion-reduce:transition-none">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <BrexButton href={primary.href} size="sm" className="lg:ml-2.5">
            {primary.label}
          </BrexButton>
        </div>
      </nav>
    </header>
  );
}
