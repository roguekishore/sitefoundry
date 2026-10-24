import { useState, type ReactNode } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { ResendButton } from "@foundry/resend-button";
import "./resend-header.css";

export interface ResendHeaderLink {
  label: string;
  href: string;
  /** shows a small chevron (a menu in the original) */
  hasMenu?: boolean;
}

export interface ResendHeaderProps {
  /** the brand's name: the home link's label for screen readers */
  brand: string;
  /** the wordmark (an svg, img or styled text) */
  logo: ReactNode;
  homeHref?: string;
  /** the centred links */
  links: ResendHeaderLink[];
  /** the quiet text link before the button (log in) */
  secondary?: { label: string; href: string };
  /** the graphite button at the right end */
  cta?: { label: string; href: string };
  /** label of the phone menu button, for screen readers */
  menuLabel?: string;
  className?: string;
}

export function ResendHeader({ brand, logo, homeHref = "/", links, secondary, cta, menuLabel = "Menu", className }: ResendHeaderProps) {
  const [open, setOpen] = useState(false);
  return (
    <header className={cn("resend-header sticky top-0 z-40", className)}>
      <div className="resend-header-bar border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-[4.625rem] max-w-page items-center px-gutter lg:h-[3.625rem]">
          <a href={homeHref} aria-label={brand} className="flex shrink-0 items-center text-foreground lg:flex-1 [&_svg]:h-5 [&_svg]:w-auto">
            {logo}
          </a>
          <nav className="hidden items-center lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group/link flex h-9 items-center gap-1 px-3 text-sm text-muted-foreground transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-foreground motion-reduce:transition-none"
              >
                {link.label}
                {link.hasMenu && (
                  <ChevronDown
                    aria-hidden
                    className="size-3.5 opacity-70 transition-transform duration-150 group-hover/link:translate-y-0.5 motion-reduce:transition-none"
                    strokeWidth={1.75}
                  />
                )}
              </a>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-4 lg:flex-1 lg:justify-end">
            {secondary && (
              <a
                href={secondary.href}
                className="hidden px-3 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground motion-reduce:transition-none lg:block"
              >
                {secondary.label}
              </a>
            )}
            {cta && (
              <ResendButton href={cta.href} size="sm" className="hidden lg:inline-flex">
                {cta.label}
              </ResendButton>
            )}
            <button
              type="button"
              aria-label={menuLabel}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="-mr-2 flex size-10 items-center justify-center rounded-md text-foreground hover:bg-accent lg:hidden"
            >
              {open ? <X className="size-5" strokeWidth={1.5} /> : <Menu className="size-5" strokeWidth={1.5} />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="border-t border-border px-gutter pt-2 pb-6 lg:hidden">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="flex h-12 items-center border-b border-border text-base text-foreground">
                {link.label}
              </a>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              {cta && <ResendButton href={cta.href}>{cta.label}</ResendButton>}
              {secondary && (
                <ResendButton href={secondary.href} variant="ghost">
                  {secondary.label}
                </ResendButton>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
