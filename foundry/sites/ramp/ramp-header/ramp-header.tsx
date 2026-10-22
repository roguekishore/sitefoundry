import { useState, type ReactNode } from "react";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { RampButton } from "@foundry/ramp-button";

export interface RampHeaderLink {
  label: string;
  href: string;
  /** shows a chevron, as for items that open a menu */
  menu?: boolean;
}

export interface RampHeaderProps {
  /** the wordmark: a name in the display face, with an optional small icon after it */
  brand: { name: string; href: string; icon?: ReactNode };
  /** the dark strip above the nav (leave out to hide it) */
  announcement?: { text: string; link?: { label: string; href: string } };
  /** screen-reader label for the announcement's close button */
  dismissLabel?: string;
  /** the nav links */
  links: RampHeaderLink[];
  /** the quiet text link on the right, e.g. "Sign in" */
  login?: { label: string; href: string };
  /** the acid-lime button */
  primary: { label: string; href: string };
  /** the near-black button */
  secondary?: { label: string; href: string };
  /** screen-reader label for the phone menu button */
  menuLabel: string;
  className?: string;
}

/** Ramp's pinned header: announcement strip + white nav, sticky at the top. */
export function RampHeader({ brand, announcement, dismissLabel, links, login, primary, secondary, menuLabel, className }: RampHeaderProps) {
  const [open, setOpen] = useState(true);
  return (
    <header className={cn("sticky top-0 z-40 bg-background text-foreground", className)}>
      {announcement && open && (
        <div className="dark bg-background text-foreground">
          <div className="relative mx-auto flex min-h-10 max-w-page items-center py-2.5 pr-12 pl-gutter text-base/[1.4] sm:justify-center sm:px-12 lg:py-0">
            <p className="sm:text-center">
              {announcement.text}
              {announcement.link && (
                <a href={announcement.link.href} className="ml-3 text-sm underline underline-offset-2 hover:text-muted-foreground">
                  {announcement.link.label}
                </a>
              )}
            </p>
            <button
              type="button"
              aria-label={dismissLabel}
              onClick={() => setOpen(false)}
              className="absolute top-1/2 right-gutter -translate-y-1/2 rounded-sm p-1 text-foreground hover:bg-foreground/10 lg:right-[calc(var(--page-gutter)*1.5)]"
            >
              <X aria-hidden className="size-4" strokeWidth={2} />
            </button>
          </div>
        </div>
      )}

      <div className="border-b border-border bg-background">
        <nav className="mx-auto flex h-[3.875rem] max-w-page items-center justify-between px-gutter lg:px-[calc(var(--page-gutter)*4)]">
          <div className="flex items-center gap-8">
            <a href={brand.href} className="flex items-center gap-1 font-display text-[1.375rem] leading-none tracking-[-0.02em] [&_svg]:size-5">
              {brand.name}
              {brand.icon}
            </a>
            <ul className="hidden items-center gap-7 lg:flex">
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="flex items-center gap-1.5 text-base transition-colors duration-150 hover:text-muted-foreground motion-reduce:transition-none">
                    {l.label}
                    {l.menu && <ChevronDown aria-hidden className="size-4" strokeWidth={1.75} />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            {login && (
              <a href={login.href} className="mr-4 text-base transition-colors duration-150 hover:text-muted-foreground motion-reduce:transition-none">
                {login.label}
              </a>
            )}
            <RampButton href={primary.href} size="sm">
              {primary.label}
            </RampButton>
            {secondary && (
              <RampButton href={secondary.href} size="sm" variant="solid">
                {secondary.label}
              </RampButton>
            )}
          </div>

          <details className="group lg:hidden">
            <summary
              aria-label={menuLabel}
              className="flex size-10 cursor-pointer list-none items-center justify-center rounded-[calc(var(--radius)-6px)] bg-secondary text-secondary-foreground [&::-webkit-details-marker]:hidden"
            >
              <Menu aria-hidden className="size-5 group-open:hidden" strokeWidth={1.75} />
              <X aria-hidden className="hidden size-5 group-open:block" strokeWidth={1.75} />
            </summary>
            <div className="absolute inset-x-0 top-full max-h-[calc(100svh-8rem)] overflow-y-auto border-b border-border bg-background px-gutter pt-2 pb-6">
              <ul className="divide-y divide-border">
                {links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="flex items-center justify-between py-4 text-lg">
                      {l.label}
                      {l.menu && <ChevronRight aria-hidden className="size-4 text-muted-foreground" strokeWidth={1.75} />}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-4 grid gap-2">
                <RampButton href={primary.href}>{primary.label}</RampButton>
                {secondary && (
                  <RampButton href={secondary.href} variant="solid">
                    {secondary.label}
                  </RampButton>
                )}
                {login && (
                  <RampButton href={login.href} variant="secondary">
                    {login.label}
                  </RampButton>
                )}
              </div>
            </div>
          </details>
        </nav>
      </div>
    </header>
  );
}
