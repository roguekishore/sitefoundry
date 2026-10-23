import { Menu, Orbit } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { OndoButton } from "@foundry/ondo-button";
import "./ondo-header.css";

export interface OndoHeaderLink {
  /** the item's text */
  label: string;
  /** where it goes */
  href: string;
}

export interface OndoHeaderProps {
  /** the company name, set as the wordmark */
  brand: string;
  /** where the wordmark links */
  brandHref?: string;
  /** the nav items (four on the original) */
  links: OndoHeaderLink[];
  /** the pale button on the right */
  action: OndoHeaderLink;
  /** screen-reader label for the phone menu button */
  menuLabel?: string;
  className?: string;
}

/** Floating black nav bar; overlays the section below it. */
export function OndoHeader({ brand, brandHref = "#", links, action, menuLabel, className }: OndoHeaderProps) {
  return (
    <header className={cn("sticky top-0 z-50 h-0 lg:top-3", className)}>
      <div className="dark lg:px-gutter">
        <div className="ondo-header-bar relative mx-auto flex h-[3.625rem] items-center bg-background px-gutter text-foreground lg:max-w-[49.5rem] lg:rounded-lg lg:pr-[0.875rem] lg:pl-7 lg:shadow-[0_9px_80px_color-mix(in_oklab,var(--glow)_7%,transparent),0_2px_18px_color-mix(in_oklab,var(--glow)_5%,transparent),0_0.6px_5px_color-mix(in_oklab,var(--glow)_3%,transparent)]">
          <div className="ondo-header-items flex w-full items-center">
            <a href={brandHref} className="flex items-center gap-2 text-foreground">
              <Orbit aria-hidden className="size-7" strokeWidth={1.75} />
              <span className="text-[1.375rem] font-medium tracking-[-0.03em] max-lg:sr-only">{brand}</span>
            </a>
            <nav className="mx-auto hidden items-center gap-4 lg:flex">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-foreground transition-colors duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-foreground/10 motion-reduce:transition-none"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <OndoButton href={action.href} className="ml-auto rounded-md text-sm lg:ml-0">
              {action.label}
            </OndoButton>
            <details className="group ml-5 lg:hidden">
              <summary aria-label={menuLabel} className="grid size-6 cursor-pointer list-none place-items-center text-foreground [&::-webkit-details-marker]:hidden">
                <Menu aria-hidden className="size-5" strokeWidth={1.5} />
              </summary>
              <nav className="absolute inset-x-0 top-full flex flex-col border-t border-border bg-background px-gutter py-4">
                {links.map((link) => (
                  <a key={link.label} href={link.href} className="py-3 text-lg font-medium text-foreground">
                    {link.label}
                  </a>
                ))}
              </nav>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}
