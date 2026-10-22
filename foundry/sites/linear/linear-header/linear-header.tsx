import { useState, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { LinearButton } from "@foundry/linear-button";

export interface LinearHeaderLink {
  label: string;
  href: string;
}

export interface LinearHeaderProps {
  /** the brand's name: the home link's label for screen readers */
  brand: string;
  /** the wordmark (an svg, img or styled text) */
  logo: ReactNode;
  homeHref?: string;
  /** the nav links, in a row from lg and in the phone menu */
  links: LinearHeaderLink[];
  /** the quiet text link before the button (e.g. log in) */
  secondary?: LinearHeaderLink;
  /** the pale pill at the right end (e.g. sign up) */
  primary?: LinearHeaderLink;
  /** labels of the phone menu button, for screen readers */
  menuLabel?: string;
  closeLabel?: string;
  className?: string;
}

/**
 * Linear's top bar: translucent black with a blur, wordmark left, nav + divider + log in +
 * sign-up pill right. Phones keep log in and sign up visible next to a two-bar menu button.
 */
export function LinearHeader({
  brand,
  logo,
  homeHref = "/",
  links,
  secondary,
  primary,
  menuLabel = "Open menu",
  closeLabel = "Close menu",
  className,
}: LinearHeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-border bg-background/80 text-foreground backdrop-blur-xl",
        className,
      )}
    >
      <div className="mx-auto flex h-16 max-w-[calc(var(--page-width)+2*var(--page-gutter))] items-center px-gutter lg:h-[4.5rem]">
        <a href={homeHref} aria-label={brand} className="flex items-center text-foreground">
          {logo}
        </a>

        <nav className="ml-auto hidden items-center lg:flex">
          {links.map((link) => (
            <LinearButton key={link.href} href={link.href} variant="ghost" size="sm" className="font-normal">
              {link.label}
            </LinearButton>
          ))}
          <span aria-hidden className="mx-4 h-4 w-px bg-border" />
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          {secondary && (
            <LinearButton
              href={secondary.href}
              variant="ghost"
              size="sm"
              className="text-[0.9375rem] font-normal lg:text-[0.8125rem]"
            >
              {secondary.label}
            </LinearButton>
          )}
          {primary && (
            <LinearButton href={primary.href} size="sm" className="h-10 px-4 text-[0.9375rem] lg:h-8 lg:px-3 lg:text-[0.8125rem]">
              {primary.label}
            </LinearButton>
          )}
          <button
            type="button"
            aria-label={open ? closeLabel : menuLabel}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="relative -mr-2 ml-2 size-9 lg:hidden"
          >
            {/* two bars that cross into an X */}
            <span
              className={cn(
                "absolute left-1/2 h-[1.5px] w-4 -translate-x-1/2 bg-foreground transition-[top,rotate] duration-200 motion-reduce:transition-none",
                open ? "top-[17px] rotate-45" : "top-[14px]",
              )}
            />
            <span
              className={cn(
                "absolute left-1/2 h-[1.5px] w-4 -translate-x-1/2 bg-foreground transition-[top,rotate] duration-200 motion-reduce:transition-none",
                open ? "top-[17px] -rotate-45" : "top-[20px]",
              )}
            />
          </button>
        </div>
      </div>

      {open && (
        <nav className="h-[calc(100svh-4rem)] overflow-y-auto border-t border-border bg-background px-gutter pt-4 pb-10 lg:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex h-12 items-center border-b border-border text-[0.9375rem] text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
