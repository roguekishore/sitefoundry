import { useEffect, useState, type ReactNode } from "react";
import { Menu, PersonStanding, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { NewhaloButton } from "@foundry/newhalo-button";

export interface NewhaloHeaderLink {
  label: string;
  href: string;
  /** the current page: orange, with a small dot underneath */
  active?: boolean;
}

export interface NewhaloHeaderProps {
  /** the wordmark, set large in the display face */
  brand: string;
  /** an icon shown before the wordmark (e.g. a lucide icon) */
  brandIcon?: ReactNode;
  /** where the wordmark links to */
  brandHref?: string;
  /** the centred navigation (desktop) and the menu panel (phones) */
  links: NewhaloHeaderLink[];
  /** the white button at the right; shortLabel is used on phones */
  cta: { label: string; shortLabel?: string; href: string };
  /** a small language switch next to the button (desktop) */
  language?: { label: string; href: string };
  /** screen-reader name of the accessibility button; leave out to hide it */
  accessibilityLabel?: string;
  /** screen-reader names of the menu button */
  menuLabels?: { open: string; close: string };
  className?: string;
}

const ease = "ease-[cubic-bezier(0.32,0.94,0.6,1)]";

/**
 * A fixed, see-through header on a black context: wordmark left, small centred links, a white
 * button and two quiet squares right. It slides away while you scroll down and comes back,
 * on solid black, as soon as you scroll up. On phones a menu square opens a full-height panel.
 */
export function NewhaloHeader({
  brand,
  brandIcon,
  brandHref = "/",
  links,
  cta,
  language,
  accessibilityLabel,
  menuLabels = { open: "Open menu", close: "Close menu" },
  className,
}: NewhaloHeaderProps) {
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 40);
      setHidden(y > 120 && y > last);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "dark fixed inset-x-0 top-0 z-50 text-foreground transition-[transform,background-color] duration-400 motion-reduce:transition-none",
        ease,
        hidden && !open && "-translate-y-full",
        (solid || open) && "bg-background",
        className,
      )}
    >
      <div className="mx-auto flex h-18 max-w-page items-center gap-4 px-gutter lg:h-30">
        <a href={brandHref} className="mr-auto flex items-center gap-2 font-display text-[2.25rem] leading-none tracking-[-0.02em] lg:gap-3 lg:text-5xl">
          {brandIcon && <span className="flex [&_svg]:size-9 lg:[&_svg]:size-11">{brandIcon}</span>}
          {brand}
        </a>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
          <ul className="flex gap-10">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  aria-current={l.active ? "page" : undefined}
                  className={cn(
                    "relative block py-2 text-base leading-none transition-colors duration-300 hover:text-primary motion-reduce:transition-none",
                    ease,
                    l.active && "text-primary after:absolute after:-bottom-1 after:left-1/2 after:size-1 after:-translate-x-1/2 after:rounded-full after:bg-primary",
                  )}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2.5">
          <NewhaloButton label={cta.label} href={cta.href} variant="light" className="hidden lg:inline-flex" />
          <NewhaloButton label={cta.shortLabel ?? cta.label} href={cta.href} variant="light" className="lg:hidden" />
          {language && <NewhaloButton label={language.label} href={language.href} variant="quiet" className="hidden w-10 px-0 lg:inline-flex" />}
          {accessibilityLabel && (
            <NewhaloButton label={accessibilityLabel} variant="quiet" iconOnly icon={<PersonStanding strokeWidth={1.5} />} className="hidden lg:inline-flex" />
          )}
          <button
            type="button"
            aria-expanded={open}
            aria-label={open ? menuLabels.close : menuLabels.open}
            onClick={() => setOpen((o) => !o)}
            className="flex size-10 items-center justify-center rounded-sm bg-foreground/10 lg:hidden"
          >
            {open ? <X aria-hidden strokeWidth={1.25} className="size-6" /> : <Menu aria-hidden strokeWidth={1.25} className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="h-[calc(100svh-4.5rem)] overflow-y-auto px-gutter pt-6 pb-10 lg:hidden">
          <ul className="border-b border-border">
            {links.map((l) => (
              <li key={l.href} className="border-t border-border">
                <a href={l.href} aria-current={l.active ? "page" : undefined} className={cn("block py-4 font-display text-[1.75rem] leading-tight", l.active && "text-primary")}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          {language && <NewhaloButton label={language.label} href={language.href} variant="quiet" className="mt-8" />}
        </nav>
      )}
    </header>
  );
}
