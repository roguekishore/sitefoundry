import { Menu, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { UnitButton } from "@foundry/unit-button";

export interface UnitHeaderLink {
  label: string;
  href: string;
}

export interface UnitHeaderProps {
  /** the wordmark, set in lowercase type */
  brand: string;
  /** where the wordmark links to */
  brandHref?: string;
  /** the main menu (left, after the wordmark) */
  links: UnitHeaderLink[];
  /** a plain text link before the button (e.g. a sandbox) */
  secondary?: UnitHeaderLink;
  /** the outline pill at the far right */
  cta: UnitHeaderLink;
  /** screen-reader label of the phone menu button */
  menuLabel: string;
  className?: string;
}

/** A 64px white bar pinned to the top: wordmark and menu left, a text link and outline pill right. */
export function UnitHeader({ brand, brandHref = "#", links, secondary, cta, menuLabel, className }: UnitHeaderProps) {
  const linkClass =
    "transition-opacity duration-300 ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:opacity-60 motion-reduce:transition-none";
  return (
    <header className={cn("sticky top-0 z-40 border-b border-border bg-background font-sans text-foreground", className)}>
      <div className="mx-auto flex h-[3.125rem] max-w-page items-center px-gutter lg:h-16">
        <a href={brandHref} className="font-display text-[1.875rem] leading-none font-bold tracking-[-0.05em] lg:text-[1.75rem]">
          {brand}
        </a>

        <nav className="ml-[4.75rem] hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a key={l.label} href={l.href} className={cn("text-sm tracking-[0.01em]", linkClass)}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-6 lg:flex">
          {secondary && (
            <a href={secondary.href} className={cn("text-sm tracking-[0.01em]", linkClass)}>
              {secondary.label}
            </a>
          )}
          <UnitButton href={cta.href} variant="outline" size="sm">
            {cta.label}
          </UnitButton>
        </div>

        {/* phones: a native disclosure, no JavaScript */}
        <details className="group ml-auto lg:hidden">
          <summary aria-label={menuLabel} className="flex size-10 cursor-pointer list-none items-center justify-end [&::-webkit-details-marker]:hidden">
            <Menu aria-hidden className="size-6 group-open:hidden" strokeWidth={1.75} />
            <X aria-hidden className="hidden size-6 group-open:block" strokeWidth={1.75} />
          </summary>
          <div className="absolute inset-x-0 top-full h-[calc(100svh-3.125rem)] overflow-y-auto border-t border-border bg-background px-gutter py-6">
            <ul className="flex flex-col">
              {[...links, ...(secondary ? [secondary] : [])].map((l) => (
                <li key={l.label} className="border-b border-border">
                  <a href={l.href} className={cn("block py-4 text-lg", linkClass)}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <UnitButton href={cta.href} className="mt-6 w-full">
              {cta.label}
            </UnitButton>
          </div>
        </details>
      </div>
    </header>
  );
}
