import { useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { BevelButton } from "@foundry/bevel-button";

export interface BevelNavLink {
  label: ReactNode;
  href: string;
}

export interface BevelHeaderProps {
  /** the wordmark (a small mark + name) */
  brand: ReactNode;
  /** where the wordmark links */
  brandHref?: string;
  /** two or three quiet links */
  links: BevelNavLink[];
  /** the dark pill button at the right */
  cta: BevelNavLink & { icon?: ReactNode };
  /** screen-reader label of the phone menu button */
  menuLabel?: string;
  className?: string;
}

/**
 * A frosted white pill fixed at the top centre: wordmark, quiet links and a dark download
 * pill on desktop; a full-width pill with a menu icon (opening a frosted dropdown) on phones.
 */
export function BevelHeader({ brand, brandHref = "/", links, cta, menuLabel, className }: BevelHeaderProps) {
  const [open, setOpen] = useState(false);
  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 px-gutter pt-4", className)}>
      <nav
        className={cn(
          "mx-auto flex h-[3.25rem] max-w-page items-center rounded-2xl bg-background/60 pr-3 pl-4 text-foreground ring-1 ring-background/70 backdrop-blur-xl",
          "shadow-[0_2px_16px_0_color-mix(in_oklab,var(--foreground)_6%,transparent)]",
          "lg:h-[3.375rem] lg:w-[31.25rem] lg:rounded-full lg:pr-[0.4375rem] lg:pl-6",
        )}
      >
        <a
          href={brandHref}
          className="flex items-center gap-2 text-[1.25rem] font-medium tracking-[-0.01em] transition-colors duration-150 hover:text-muted-foreground [&_svg]:size-6"
        >
          {brand}
        </a>
        <ul className="ml-[3.375rem] hidden items-center gap-6 lg:flex">
          {links.map((link, i) => (
            <li key={i}>
              <a href={link.href} className="text-base font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <BevelButton label={cta.label} href={cta.href} icon={cta.icon} size="sm" className="ml-auto hidden lg:inline-flex" />
        <button
          type="button"
          aria-label={menuLabel}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="ml-auto flex size-9 items-center justify-center lg:hidden"
        >
          {open ? <X className="size-6" strokeWidth={1.75} /> : <Menu className="size-7" strokeWidth={1.75} />}
        </button>
      </nav>
      {open && (
        <div className="mx-auto mt-2 flex max-w-page flex-col gap-1 rounded-2xl bg-background/85 p-4 ring-1 ring-background/70 backdrop-blur-xl lg:hidden">
          {links.map((link, i) => (
            <a key={i} href={link.href} onClick={() => setOpen(false)} className="py-2 text-[1.125rem] font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground">
              {link.label}
            </a>
          ))}
          <BevelButton label={cta.label} href={cta.href} icon={cta.icon} className="mt-2" />
        </div>
      )}
    </header>
  );
}
