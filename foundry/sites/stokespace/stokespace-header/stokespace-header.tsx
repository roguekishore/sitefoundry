import { useState } from "react";
import { cn } from "@foundry/foundry-utils";
import { StokespaceWordmark } from "@foundry/stokespace-wordmark";

export interface StokespaceNavLink {
  /** link text */
  label: string;
  /** where it goes */
  href: string;
  /** optional sub-links: shown in a small drop-down on desktop and indented in the phone menu */
  items?: { label: string; href: string }[];
}

export interface StokespaceHeaderProps {
  /** company name, shown as the wordmark */
  brand: string;
  /** where the wordmark links */
  brandHref?: string;
  /** the main links */
  links: StokespaceNavLink[];
  /** accessible name of the phone menu button while closed */
  openLabel: string;
  /** accessible name of the phone menu button while open */
  closeLabel: string;
  className?: string;
}

// The original's ease for every colour change: a quick start that settles slowly.
const ease = "duration-350 ease-[cubic-bezier(0.165,0.84,0.44,1)]";

/**
 * Sticky header. Phones: a full-width 76px frosted bar with the wordmark and a glowing
 * plus that opens a full-height menu (the plus turns into a cross). From 1024px: a
 * transparent 126px strip holding a centred frosted pill with the wordmark and links; links
 * turn the primary colour on hover and links with sub-links open a small drop-down.
 */
export function StokespaceHeader({
  brand,
  brandHref = "/",
  links,
  openLabel,
  closeLabel,
  className,
}: StokespaceHeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className={cn("pointer-events-none sticky top-0 z-50 h-19 lg:h-[7.875rem]", className)}>
      {/* Phones: full-width bar */}
      <div className="pointer-events-auto relative flex h-full items-center justify-between bg-foreground/5 px-gutter backdrop-blur-xl lg:hidden">
        <a href={brandHref} className="flex items-center">
          <StokespaceWordmark name={brand} className="text-[1.25rem]" />
        </a>
        <button
          type="button"
          aria-expanded={open}
          aria-controls="stokespace-header-menu"
          aria-label={open ? closeLabel : openLabel}
          onClick={() => setOpen((v) => !v)}
          className="relative -mr-1 size-10 text-primary [filter:drop-shadow(0_0_9.5px_var(--primary))_drop-shadow(0_0_3.6px_var(--primary))]"
        >
          <span
            aria-hidden
            className={cn(
              "absolute inset-0 m-auto block size-9 transition-transform duration-400 ease-[cubic-bezier(0.77,0,0.175,1)] motion-reduce:transition-none",
              open && "rotate-45",
            )}
          >
            <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-current" />
            <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-current" />
          </span>
        </button>

        <nav
          id="stokespace-header-menu"
          aria-label={brand}
          className={cn(
            "absolute inset-x-0 top-full h-[calc(100svh-4.75rem)] overflow-y-auto bg-background px-gutter pt-8 pb-12 transition-[clip-path,visibility] duration-400 ease-[cubic-bezier(0.77,0,0.175,1)] motion-reduce:transition-none",
            open ? "visible [clip-path:inset(0_0_0_0)]" : "invisible [clip-path:inset(0_0_100%_0)]",
          )}
        >
          <ul className="flex flex-col gap-5">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn("text-[1.75rem] leading-none font-light tracking-[-0.02em] transition-colors hover:text-primary", ease)}
                >
                  {link.label}
                </a>
                {link.items && (
                  <ul className="mt-3 flex flex-col gap-2 pl-4">
                    {link.items.map((sub) => (
                      <li key={sub.label}>
                        <a
                          href={sub.href}
                          onClick={() => setOpen(false)}
                          className={cn("text-base font-light text-foreground/60 transition-colors hover:text-primary", ease)}
                        >
                          {sub.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Desktop: centred pill */}
      <div className="hidden h-full justify-center pt-[1.9375rem] lg:flex">
        <div className="pointer-events-auto flex h-16 items-center gap-15 rounded-lg bg-foreground/5 pr-12 pl-6 backdrop-blur-xl">
          <a href={brandHref} className="flex items-center">
            <StokespaceWordmark name={brand} />
          </a>
          <nav aria-label={brand}>
            <ul className="flex items-center gap-12">
              {links.map((link) => (
                <li key={link.label} className="group/nav relative">
                  <a
                    href={link.href}
                    className={cn(
                      "block py-2 text-base leading-none font-light tracking-[-0.02em] transition-colors hover:text-primary group-focus-within/nav:text-primary",
                      ease,
                    )}
                  >
                    {link.label}
                  </a>
                  {link.items && (
                    <div className="invisible absolute top-full -left-4 pt-5 opacity-0 transition-[opacity,visibility] duration-350 group-focus-within/nav:visible group-focus-within/nav:opacity-100 group-hover/nav:visible group-hover/nav:opacity-100 motion-reduce:transition-none">
                      <ul className="flex min-w-48 flex-col gap-3 rounded-lg bg-foreground/5 p-4 backdrop-blur-xl">
                        {link.items.map((sub) => (
                          <li key={sub.label}>
                            <a
                              href={sub.href}
                              className={cn("text-base leading-none font-light tracking-[-0.02em] transition-colors hover:text-primary", ease)}
                            >
                              {sub.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
