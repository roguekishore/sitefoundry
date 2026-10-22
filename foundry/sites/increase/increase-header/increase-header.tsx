import { useState, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { IncreaseButton } from "@foundry/increase-button";

export interface IncreaseHeaderLink {
  label: string;
  href: string;
}

export interface IncreaseHeaderProps {
  /** the brand's name: the home link's label for screen readers */
  brand: string;
  /** the wordmark (an svg, img or styled text) */
  logo: ReactNode;
  homeHref?: string;
  /** the nav links, shown in a row from lg and in the phone menu below */
  links: IncreaseHeaderLink[];
  /** the quiet text link at the right end (e.g. sign in) */
  secondary?: IncreaseHeaderLink;
  /** the dark button at the right end (e.g. sign up) */
  primary?: IncreaseHeaderLink;
  /** labels of the phone menu button, for screen readers */
  menuLabel?: string;
  closeLabel?: string;
  className?: string;
}

/**
 * A 64px white bar that stays on top for the whole page (95% opaque, a hairline under it):
 * wordmark at the frame's left edge, small grey nav links that tint on hover, a ghost link
 * and a dark button at the right. On phones a two-bar button opens the links below the bar.
 */
export function IncreaseHeader({
  brand,
  logo,
  homeHref = "/",
  links,
  secondary,
  primary,
  menuLabel = "Open menu",
  closeLabel = "Close menu",
  className,
}: IncreaseHeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className={cn("sticky top-0 z-40 border-b border-border bg-background/95 text-foreground backdrop-blur-sm", className)}>
      <div className="mx-auto flex h-16 max-w-[calc(var(--page-width)+2*var(--page-gutter))] items-center px-gutter">
        <a href={homeHref} aria-label={brand} className="flex items-center text-foreground [&_svg]:h-4 [&_svg]:w-auto">
          {logo}
        </a>

        <nav className="ml-20 hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <IncreaseButton key={link.href} href={link.href} variant="ghost" size="sm" className="h-8 px-3">
              {link.label}
            </IncreaseButton>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-4">
          {secondary && (
            <IncreaseButton href={secondary.href} variant="ghost" size="sm" className="hidden lg:inline-flex">
              {secondary.label}
            </IncreaseButton>
          )}
          {primary && (
            <IncreaseButton href={primary.href} variant="dark" size="sm" className="hidden lg:inline-flex">
              {primary.label}
            </IncreaseButton>
          )}
          <button
            type="button"
            aria-label={open ? closeLabel : menuLabel}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="relative -mr-1.5 size-8 rounded-md lg:hidden"
          >
            {/* two bars that cross into an X */}
            <span
              className={cn(
                "absolute left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-foreground transition-transform duration-300 motion-reduce:transition-none",
                open ? "top-[15px] rotate-45" : "top-[11px]",
              )}
            />
            <span
              className={cn(
                "absolute left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-foreground transition-transform duration-300 motion-reduce:transition-none",
                open ? "top-[15px] -rotate-45" : "top-[19px]",
              )}
            />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-gutter pt-2 pb-6 lg:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex h-12 items-center border-b border-border text-base text-foreground"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-5 grid grid-cols-2 gap-3">
            {secondary && (
              <IncreaseButton href={secondary.href} variant="outline">
                {secondary.label}
              </IncreaseButton>
            )}
            {primary && (
              <IncreaseButton href={primary.href} variant="dark">
                {primary.label}
              </IncreaseButton>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
