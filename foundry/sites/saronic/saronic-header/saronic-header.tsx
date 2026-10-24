import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface SaronicHeaderLink {
  /** the link text */
  label: ReactNode;
  href: string;
}

export interface SaronicMenuItem {
  /** the destination's name */
  title: ReactNode;
  /** one line about it */
  description?: ReactNode;
  href: string;
}

export interface SaronicHeaderProps {
  /** the company name, set as a bold wordmark */
  brand: string;
  /** a small mark before the name (an icon) */
  mark?: ReactNode;
  /** where the wordmark links */
  brandHref?: string;
  /** mono links before the menu button (desktop only), split by a thin bar */
  links?: SaronicHeaderLink[];
  /** the menu button's text */
  menuLabel: ReactNode;
  /** the menu button's text while open */
  closeLabel: ReactNode;
  /** what the menu panel lists */
  menu: SaronicMenuItem[];
  /** sit transparent over a dark hero (light text) until it has scrolled away, then turn solid */
  overlay?: boolean;
  /** with overlay: hide the wordmark on desktop while over the hero (the hero shows a giant one) */
  hideBrandOverHero?: boolean;
  /** with overlay: turn solid once the page has scrolled the window height minus this many px */
  solidOffset?: number;
  className?: string;
}

/**
 * A 64px sticky header. Over the hero it is transparent with light text; once the hero has
 * scrolled away it becomes a pale bar with ink text, a hairline under it and one down its
 * centre (0.3s). Wordmark left; mono links and a two-line menu button right. The menu opens a
 * dark panel of destinations under the bar.
 */
export function SaronicHeader({
  brand,
  mark,
  brandHref = "/",
  links = [],
  menuLabel,
  closeLabel,
  menu,
  overlay = false,
  hideBrandOverHero = false,
  solidOffset = 128,
  className,
}: SaronicHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!overlay) return;
    const update = () => setScrolled(window.scrollY >= window.innerHeight - solidOffset);
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [overlay, solidOffset]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = !overlay || scrolled || open;

  return (
    <header
      className={cn(
        "sticky top-0 z-40 h-16 border-b font-mono text-xs/none tracking-[0.025em] uppercase",
        "transition-[background-color,border-color,color] duration-300 ease-[ease] motion-reduce:transition-none",
        overlay && "-mb-16",
        solid ? "border-border bg-background text-foreground" : "dark border-transparent bg-transparent text-foreground",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "absolute inset-y-0 left-1/2 w-px bg-border transition-opacity duration-300 motion-reduce:transition-none",
          solid ? "opacity-100" : "opacity-0",
        )}
      />
      <div className="relative flex h-full items-center justify-between px-6">
        <a
          href={brandHref}
          className={cn(
            "flex items-center gap-1.5 font-display text-[1.3rem]/none font-extrabold tracking-[0.01em] normal-case transition-opacity duration-300 motion-reduce:transition-none",
            hideBrandOverHero && !solid && "lg:pointer-events-none lg:opacity-0",
          )}
        >
          {mark && <span className="inline-flex [&>svg]:size-6">{mark}</span>}
          <span className="uppercase">{brand}</span>
        </a>
        <nav className="flex items-center">
          {links.map((link, i) => (
            <span key={i} className="flex items-center max-lg:hidden">
              <a href={link.href} className="transition-opacity duration-300 hover:opacity-80 motion-reduce:transition-none">
                {link.label}
              </a>
              <span aria-hidden className="mx-6 h-3 w-px bg-current opacity-70" />
            </span>
          ))}
          <button
            type="button"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-5 uppercase transition-opacity duration-300 hover:opacity-80 motion-reduce:transition-none"
          >
            <span>{open ? closeLabel : menuLabel}</span>
            <span aria-hidden className="relative block h-2.5 w-[1.625rem]">
              <span
                className={cn(
                  "absolute inset-x-0 top-0 h-px bg-current transition-transform duration-300 motion-reduce:transition-none",
                  open && "translate-y-[4.5px] rotate-[20deg]",
                )}
              />
              <span
                className={cn(
                  "absolute inset-x-0 bottom-0 h-px bg-current transition-transform duration-300 motion-reduce:transition-none",
                  open && "-translate-y-[4.5px] -rotate-[20deg]",
                )}
              />
            </span>
          </button>
        </nav>
      </div>
      {open && (
        <div className="dark absolute inset-x-0 top-full border-b border-border bg-card text-card-foreground normal-case">
          <ul className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {menu.map((item, i) => (
              <li key={i} className="bg-card">
                <a
                  href={item.href}
                  className="group flex h-full flex-col gap-3 p-6 opacity-70 transition-opacity duration-300 hover:opacity-100 focus:opacity-100 motion-reduce:transition-none lg:p-10"
                >
                  <span className="font-display text-[2rem]/[1.12] tracking-[-0.02em]">{item.title}</span>
                  {item.description && (
                    <span className="font-mono text-xs/[1.5] tracking-[0.025em] text-muted-foreground uppercase">{item.description}</span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
