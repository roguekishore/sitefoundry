import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { ZettaJouleButton } from "@foundry/zetta-joule-button";
import { ZettaJouleMark } from "@foundry/zetta-joule-mark";

export interface ZettaJouleHeaderLink {
  /** link text */
  label: string;
  /** link target */
  href: string;
}

export interface ZettaJouleHeaderProps {
  /** the company name (wordmark) */
  brand: string;
  /** where the wordmark links */
  homeHref?: string;
  /** the centre links (desktop) and the menu list (phones) */
  links: ZettaJouleHeaderLink[];
  /** the call-to-action on the right (desktop) and at the end of the menu (phones) */
  cta: ZettaJouleHeaderLink;
  /** accessible name of the phone menu button */
  menuLabel: string;
  className?: string;
}

/** One nav link: the text rolls up and a copy rolls in from below on hover. */
function RollLink({ label, href }: ZettaJouleHeaderLink) {
  const roll = "block transition-transform duration-300 ease-[cubic-bezier(0.165,0.84,0.44,1)] motion-reduce:transition-none group-hover:-translate-y-full";
  return (
    <a href={href} className="group block h-[1.05rem] overflow-clip text-sm leading-[1.05rem] font-medium tracking-[-0.01em] text-foreground transition-colors duration-200 hover:text-primary">
      <span className={roll}>{label}</span>
      <span aria-hidden className={roll}>
        {label}
      </span>
    </a>
  );
}

/** Sits over the top of the page (zero height, sticky). Hides while scrolling down, returns on the way up with a dark bar. */
export function ZettaJouleHeader({ brand, homeHref = "#", links, cta, menuLabel, className }: ZettaJouleHeaderProps) {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (y > last && y > 120) setHidden(true);
      else if (y < last) setHidden(false);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("dark sticky top-0 z-50 h-0 text-foreground", className)}>
      <div
        className={cn(
          "absolute inset-x-0 top-0 transition-[transform,background-color] duration-300 ease-out motion-reduce:transition-none",
          hidden && !open && "-translate-y-full",
          scrolled || open ? "bg-popover/90 backdrop-blur-md" : "bg-transparent",
        )}
      >
        <div className="mx-auto flex w-full max-w-[calc(var(--page-width)+5rem)] items-center justify-between px-gutter py-6 lg:px-10">
          <a href={homeHref} className="transition-opacity duration-200 hover:opacity-70">
            <ZettaJouleMark name={brand} className="text-[1.5rem] lg:text-[1.75rem]" />
          </a>
          <nav aria-label="Main" className="absolute left-1/2 hidden -translate-x-1/2 gap-8 lg:flex">
            {links.map((l) => (
              <RollLink key={l.label} {...l} />
            ))}
          </nav>
          <ZettaJouleButton variant="solid" label={cta.label} href={cta.href} className="hidden lg:inline-flex" />
          <button
            type="button"
            aria-label={menuLabel}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="grid size-9 place-items-center rounded-lg bg-foreground text-background lg:hidden"
          >
            {open ? <X className="size-5" strokeWidth={1.5} /> : <Menu className="size-5" strokeWidth={1.5} />}
          </button>
        </div>
        {open && (
          <nav aria-label="Menu" className="grid gap-1 px-gutter pb-8 lg:hidden">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="border-b border-border py-3 font-display text-2xl font-[250] tracking-[-0.03em]">
                {l.label}
              </a>
            ))}
            <ZettaJouleButton variant="solid" label={cta.label} href={cta.href} className="mt-6 w-full" />
          </nav>
        )}
      </div>
    </header>
  );
}
