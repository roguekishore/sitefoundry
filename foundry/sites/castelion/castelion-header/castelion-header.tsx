import { useEffect, useId, useState, type CSSProperties } from "react";
import { cn } from "@foundry/foundry-utils";
import "./castelion-header.css";

export interface CastelionHeaderLink {
  /** link text */
  label: string;
  /** where it goes */
  href: string;
}

export interface CastelionHeaderProps {
  /** the company name, set as an italic wordmark */
  brand: string;
  /** where the wordmark links (usually "/") */
  homeHref?: string;
  /** the nav links (a drop-down panel on phones) */
  links: CastelionHeaderLink[];
  /** screen-reader name of the phone menu button, e.g. "Menu" */
  menuLabel: string;
  /** how far down (in window heights) the page must scroll before the bar slides away */
  hideAfter?: number;
  className?: string;
}

const ease = "duration-500 ease-[ease] motion-reduce:transition-none";

/** Fixed cream-on-film bar with a wordmark, nav links and a full-width rule ending in a dart. */
export function CastelionHeader({ brand, homeHref = "/", links, menuLabel, hideAfter = 0.4, className }: CastelionHeaderProps) {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y > window.innerHeight * hideAfter && y > last) setHidden(true);
      else if (y < last) setHidden(false);
      setScrolled(y > 8);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hideAfter]);

  return (
    <header
      className={cn(
        "dark fixed inset-x-0 top-0 z-50 text-foreground transition-[background-color,transform]",
        ease,
        (scrolled || open) && "bg-secondary",
        hidden && !open && "-translate-y-full",
        className,
      )}
    >
      <div className="mx-auto max-w-page px-gutter pt-3 pb-1 lg:pt-4 lg:pb-1">
        <div className="flex h-10 items-center justify-between lg:h-[4.875rem]">
          <a
            href={homeHref}
            className="castelion-header-brand -mt-1 font-display text-[1.75rem]/none font-semibold tracking-[-0.03em] italic lg:-mt-2 lg:text-[2.875rem]"
          >
            {brand}
          </a>
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-[4.375rem]">
              {links.map((link, i) => (
                <li key={link.href + link.label} className="castelion-header-link" style={{ "--castelion-header-i": i } as CSSProperties}>
                  <a
                    href={link.href}
                    className={cn(
                      "text-base/none font-medium underline decoration-transparent decoration-2 underline-offset-6 transition-[text-decoration-color] hover:decoration-current",
                      ease,
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button
            type="button"
            aria-label={menuLabel}
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((v) => !v)}
            className="castelion-header-brand grid h-10 w-[3.375rem] content-center gap-[0.4375rem] lg:hidden"
          >
            {[0, 1, 2].map((n) => (
              <span
                key={n}
                aria-hidden
                className={cn(
                  "block h-0.5 w-full bg-current transition-[transform,opacity]",
                  ease,
                  open && n === 0 && "translate-y-[0.5625rem] rotate-12",
                  open && n === 1 && "opacity-0",
                  open && n === 2 && "-translate-y-[0.5625rem] -rotate-12",
                )}
              />
            ))}
          </button>
        </div>

        {/* the full-width rule with its dart tip */}
        <div aria-hidden className="relative mt-1.5 h-2.5 [container-type:inline-size] lg:mt-3">
          <span className="castelion-header-rule absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-current" />
          <svg
            viewBox="0 0 24 10"
            className="castelion-header-dart absolute top-0 right-0 h-2.5 w-6 fill-current"
          >
            <path d="M0 4h14l-3-4h2.5l4.5 4h2.5c1.5 0 3.5.6 3.5 1s-2 1-3.5 1H18l-4.5 4H11l3-4H0z" />
          </svg>
        </div>
      </div>

      {/* phone menu panel */}
      <nav id={panelId} className={cn("px-gutter pb-6 lg:hidden", open ? "block" : "hidden")}>
        <ul className="grid gap-4 pt-4">
          {links.map((link) => (
            <li key={link.href + link.label}>
              <a href={link.href} className="font-display text-[1.75rem]/[1.2] font-bold tracking-[0.02em]" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
