import { useState, type ReactNode } from "react";
import { Grip, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { SuperpowerButton } from "@foundry/superpower-button";
import "./superpower-header.css";

export interface SuperpowerHeaderLink {
  label: string;
  href: string;
}

export interface SuperpowerHeaderProps {
  /** the brand's name: the home link's label for screen readers */
  brand: string;
  /** the wordmark (styled text or an svg); it is shown large and shrinks on scroll on desktop */
  logo: ReactNode;
  homeHref?: string;
  /** links before the CTA on desktop, and in the phone menu */
  links: SuperpowerHeaderLink[];
  /** the near-black pill at the right */
  cta: { label: string; href: string };
  /** label of the phone menu button, for screen readers */
  menuLabel?: string;
  className?: string;
}

export function SuperpowerHeader({ brand, logo, homeHref = "/", links, cta, menuLabel = "Menu", className }: SuperpowerHeaderProps) {
  const [open, setOpen] = useState(false);
  return (
    <header className={cn("sticky top-0 z-40 -mb-[4.5rem] lg:mb-0", className)}>
      <div className="border-b border-border bg-background/95 text-foreground backdrop-blur-md lg:border-transparent">
        <div className="mx-auto flex h-[4.5rem] max-w-page items-center gap-3 px-gutter lg:h-[5.125rem]">
          <a href={homeHref} aria-label={brand} className="superpower-header-logo mr-auto flex shrink-0 items-center">
            {logo}
          </a>
          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.9375rem] tracking-[-0.01em] text-foreground transition-colors duration-200 ease-out hover:text-foreground/70 motion-reduce:transition-none"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <SuperpowerButton href={cta.href} size="sm" className="lg:ml-5">
            {cta.label}
          </SuperpowerButton>
          <button
            type="button"
            aria-label={menuLabel}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="-mr-1.5 grid size-10 place-items-center rounded-full transition-colors duration-200 hover:bg-muted lg:hidden"
          >
            {open ? <X className="size-6" strokeWidth={1.75} aria-hidden /> : <Grip className="size-7" strokeWidth={2.25} aria-hidden />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-b border-border bg-background px-gutter pt-2 pb-6 text-foreground lg:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border py-4 text-[1.125rem] tracking-[-0.01em] last:border-0"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
