import { useState, type ReactNode } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface SuperhumanNavLink {
  /** the link text */
  label: string;
  /** where it goes */
  href: string;
  /** shows a chevron: the item opens a menu on the real site */
  hasMenu?: boolean;
}

export interface SuperhumanHeaderProps {
  /** the lockup at the left (a SuperhumanMark) */
  brand: ReactNode;
  /** where the lockup links */
  brandHref?: string;
  /** the navigation links */
  links: SuperhumanNavLink[];
  /** the quiet link before the sign-in pill (desktop only) */
  contact: SuperhumanNavLink;
  /** the bordered sign-in pill */
  signIn: SuperhumanNavLink;
  /** screen-reader label of the phone menu button */
  menuLabel: string;
  className?: string;
}

const linkClass = "inline-flex items-center gap-1 text-base font-[460] text-foreground transition-colors duration-200 hover:text-chart-5 hover:underline-offset-4 motion-reduce:transition-none";

export function SuperhumanHeader({ brand, brandHref = "/", links, contact, signIn, menuLabel, className }: SuperhumanHeaderProps) {
  const [open, setOpen] = useState(false);
  return (
    <header className={cn("sticky top-0 z-50 border-b border-border bg-popover text-foreground", className)}>
      <div className="mx-auto flex h-[4.125rem] max-w-[calc(var(--page-width)+2*var(--page-gutter))] items-center px-gutter">
        <a href={brandHref} className="shrink-0">
          {brand}
        </a>
        <nav aria-label="Main" className="ml-10 hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <a key={l.label} href={l.href} className={linkClass}>
              {l.label}
              {l.hasMenu && <ChevronDown className="size-4 text-foreground/65" strokeWidth={1.5} />}
            </a>
          ))}
        </nav>
        <div className="ml-auto hidden items-center gap-6 lg:flex">
          <a href={contact.href} className={linkClass}>
            {contact.label}
          </a>
          <a
            href={signIn.href}
            className="inline-flex h-[2.1875rem] items-center gap-1.5 rounded-sm px-3.5 text-sm font-medium shadow-[inset_0_0_0_1px_var(--border)] transition-shadow duration-200 ease-in-out hover:shadow-[inset_0_0_0_2px_var(--border)] motion-reduce:transition-none"
          >
            {signIn.label}
            <ChevronDown className="size-4" strokeWidth={1.5} />
          </a>
        </div>
        <button type="button" aria-label={menuLabel} aria-expanded={open} onClick={() => setOpen(!open)} className="ml-auto flex size-10 items-center justify-center lg:hidden">
          {open ? <X className="size-6" strokeWidth={1.5} /> : <Menu className="size-6" strokeWidth={1.5} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border px-gutter pb-4 lg:hidden">
          {[...links, contact, signIn].map((l) => (
            <a key={l.label} href={l.href} className="block py-3 text-base font-[460]">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
