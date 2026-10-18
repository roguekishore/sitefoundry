import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { Button } from "@foundry/sample-button";

export interface HeaderLink {
  label: string;
  href: string;
}

export interface SampleHeaderProps {
  /** business name, shown when there's no logo (and as the logo's alt text) */
  brand: string;
  logoSrc?: string;
  links: HeaderLink[];
  cta?: HeaderLink;
  /** label of the phone menu button, for screen readers */
  menuLabel?: string;
  /** stays at the top while scrolling */
  sticky?: boolean;
  className?: string;
}

export function SampleHeader({ brand, logoSrc, links, cta, menuLabel = "Menu", sticky = true, className }: SampleHeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className={cn("z-40 border-b bg-background/85 backdrop-blur", sticky && "sticky top-0", className)}>
      <div className="mx-auto flex h-16 max-w-page items-center justify-between gap-6 px-gutter">
        <a href="/" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
          {logoSrc ? <img src={logoSrc} alt={brand} className="h-8 w-auto" /> : brand}
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {cta && (
            <Button href={cta.href} className="hidden sm:inline-flex">
              {cta.label}
            </Button>
          )}
          <button
            type="button"
            aria-label={menuLabel}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="inline-flex size-10 items-center justify-center rounded-lg hover:bg-accent md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t bg-background px-gutter pb-6 pt-2 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b py-4 text-base font-medium"
            >
              {link.label}
            </a>
          ))}
          {cta && (
            <Button href={cta.href} size="lg" className="mt-6 w-full">
              {cta.label}
            </Button>
          )}
        </nav>
      )}
    </header>
  );
}
