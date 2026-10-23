import { useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { RaycastButton } from "@foundry/raycast-button";

export interface RaycastNavLink {
  /** the link text */
  label: ReactNode;
  /** where it goes */
  href: string;
}

export interface RaycastHeaderProps {
  /** the wordmark: a small icon and the product name */
  brand: ReactNode;
  /** where the wordmark links */
  brandHref?: string;
  /** the centre links (desktop bar; phone dropdown) */
  links: RaycastNavLink[];
  /** the quiet account link left of the button */
  login: RaycastNavLink;
  /** the light keycap button at the right */
  cta: RaycastNavLink & { icon?: ReactNode };
  /** screen-reader label of the phone menu button */
  menuLabel?: string;
  className?: string;
}

/**
 * A floating bar fixed 16px under the top edge: wordmark, links, login and the download
 * button at desktop widths; wordmark and a menu button (dropdown panel) on phones.
 */
export function RaycastHeader({ brand, brandHref = "/", links, login, cta, menuLabel, className }: RaycastHeaderProps) {
  const [open, setOpen] = useState(false);
  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 px-4 pt-4 lg:px-gutter", className)}>
      <nav
        className={cn(
          "mx-auto flex h-[3.625rem] max-w-page items-center rounded-2xl border border-foreground/10 bg-card/80 pr-4 pl-4 text-foreground backdrop-blur-xl",
          "bg-gradient-to-br from-foreground/[0.04] to-transparent",
          "lg:h-[4.75rem] lg:rounded-[1.25rem] lg:pr-[1.75rem] lg:pl-8",
        )}
      >
        <a
          href={brandHref}
          className="flex items-center gap-2.5 text-base font-medium tracking-[0.2px] transition-transform duration-300 hover:scale-105 [&_svg]:size-5 [&_svg]:text-highlight"
        >
          {brand}
        </a>
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 lg:flex xl:gap-8">
          {links.map((link, i) => (
            <li key={i}>
              <a href={link.href} className="text-sm font-medium tracking-[0.2px] text-muted-foreground transition-colors duration-200 ease-in-out hover:text-foreground">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="ml-auto hidden items-center gap-7 lg:flex">
          <a href={login.href} className="text-sm font-medium tracking-[0.2px] text-muted-foreground transition-colors duration-200 hover:text-foreground">
            {login.label}
          </a>
          <RaycastButton label={cta.label} href={cta.href} icon={cta.icon} size="sm" />
        </div>
        <button
          type="button"
          aria-label={menuLabel}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="ml-auto flex size-9 items-center justify-center text-muted-foreground transition-colors hover:text-foreground lg:hidden"
        >
          {open ? <X className="size-6" strokeWidth={1.5} /> : <Menu className="size-6" strokeWidth={1.5} />}
        </button>
      </nav>
      {open && (
        <div className="mx-auto mt-2 flex max-w-page flex-col rounded-2xl border border-foreground/10 bg-card/95 p-4 backdrop-blur-xl lg:hidden">
          {links.map((link, i) => (
            <a key={i} href={link.href} onClick={() => setOpen(false)} className="py-2.5 text-base font-medium text-muted-foreground transition-colors hover:text-foreground">
              {link.label}
            </a>
          ))}
          <a href={login.href} className="py-2.5 text-base font-medium text-muted-foreground transition-colors hover:text-foreground">
            {login.label}
          </a>
          <RaycastButton label={cta.label} href={cta.href} icon={cta.icon} className="mt-3 justify-center" />
        </div>
      )}
    </header>
  );
}
