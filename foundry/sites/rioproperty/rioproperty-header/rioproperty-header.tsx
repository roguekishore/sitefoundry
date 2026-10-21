import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface RiopropertyHeaderLink {
  label: string;
  href: string;
}

export interface RiopropertyHeaderProps {
  /** the wordmark, in very wide-tracked capitals; its words stack on phones */
  brand: string;
  homeHref?: string;
  /** screen-reader label of the burger button */
  menuLabel: string;
  /** screen-reader label of the close button inside the menu */
  closeLabel: string;
  /** links inside the menu panel */
  links: RiopropertyHeaderLink[];
  /** true: at the top it sits over dark media and uses light text */
  overMedia?: boolean;
  /** px the page scrolls down before the bar slides away (it returns on scroll up) */
  threshold?: number;
  className?: string;
}

// The original's transform timing: 0.75s on a long, snappy ease.
const ease = "duration-[750ms] ease-[cubic-bezier(0.625,0.05,0,1)] motion-reduce:transition-none";

export function RiopropertyHeader({
  brand,
  homeHref = "/",
  menuLabel,
  closeLabel,
  links,
  overMedia = true,
  threshold = 300,
  className,
}: RiopropertyHeaderProps) {
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const check = () => {
      const y = window.scrollY;
      setHidden(y > threshold && y > last);
      setSolid(y > threshold);
      last = y;
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, [threshold]);

  // light text over the hero media; once back over the paper sections the bar gets a background
  const light = overMedia && !solid;
  const words = brand.split(/\s+/).filter(Boolean);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[translate,background-color]",
          ease,
          hidden && !open ? "-translate-y-full" : "translate-y-0",
          light ? "bg-transparent text-background dark:text-foreground" : "bg-background text-foreground",
          className,
        )}
      >
        <div className="mx-auto flex max-w-page items-center justify-between px-gutter py-9 lg:py-10">
          <a href={homeHref} aria-label={brand} className="flex flex-col font-display text-base leading-[1.6] font-semibold tracking-[0.35em] uppercase lg:flex-row lg:gap-[0.7em] lg:text-lg">
            {words.map((word, i) => (
              <span key={i} aria-hidden>
                {word}
              </span>
            ))}
          </a>
          <button
            type="button"
            aria-label={menuLabel}
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="group/burger flex h-6 w-9 flex-col items-end justify-center gap-[5px]"
          >
            {/* three lines, each shorter than the one above; on hover they even out */}
            <span aria-hidden className={cn("h-0.5 w-8 bg-current transition-[width]", ease)} />
            <span aria-hidden className={cn("h-0.5 w-6 bg-current transition-[width] group-hover/burger:w-8", ease)} />
            <span aria-hidden className={cn("h-0.5 w-4 bg-current transition-[width] group-hover/burger:w-8", ease)} />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-popover text-popover-foreground">
          <div className="mx-auto flex w-full max-w-page items-center justify-end px-gutter py-8 lg:py-9">
            <button type="button" aria-label={closeLabel} onClick={() => setOpen(false)} className="transition-colors duration-200 hover:text-highlight">
              <X aria-hidden className="size-8" strokeWidth={1.5} />
            </button>
          </div>
          <nav className="mx-auto flex w-full max-w-page flex-1 flex-col justify-center px-gutter pb-16">
            <ul className="flex flex-col gap-2 lg:gap-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-[2.25rem] leading-[0.966] font-semibold uppercase transition-colors duration-500 hover:text-highlight lg:text-[4.625rem]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
