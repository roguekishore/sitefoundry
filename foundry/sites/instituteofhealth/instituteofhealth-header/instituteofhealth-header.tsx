import { useEffect, useState, type ReactNode } from "react";
import { CornerDownRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface InstituteofhealthNavLink {
  label: string;
  href: string;
}

export interface InstituteofhealthHeaderProps {
  /** the wordmark (text, svg or img); it inherits the bar's text colour */
  brand: ReactNode;
  /** where the wordmark links to */
  brandHref?: string;
  /** the links centred in the desktop bar (and listed first in the phone menu) */
  links: InstituteofhealthNavLink[];
  /** the links at the right of the desktop bar, before the button */
  sideLinks?: InstituteofhealthNavLink[];
  /** the dark button at the far right of the desktop bar (and at the foot of the phone menu) */
  action: { label: string; href: string };
  /** the word next to the burger */
  menuLabel: string;
  /** the word next to the burger while the menu is open */
  closeLabel: string;
  /** light text on a see-through phone bar until you scroll past the first screen (a dark hero) */
  overMedia?: boolean;
  className?: string;
}

const smallLink = "text-[0.765rem] font-medium tracking-[-0.02em] transition-opacity duration-400 ease-[ease] hover:opacity-65 motion-reduce:transition-none";

export function InstituteofhealthHeader({
  brand,
  brandHref = "/",
  links,
  sideLinks = [],
  action,
  menuLabel,
  closeLabel,
  overMedia = true,
  className,
}: InstituteofhealthHeaderProps) {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [pastFirstScreen, setPastFirstScreen] = useState(false);

  // Desktop bar: hide while scrolling down past 100px, show again on the way up.
  // Phone bar: switch from see-through to solid once the first screen has scrolled by.
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setPastFirstScreen(y > window.innerHeight - 64);
      if (Math.abs(y - last) < 6) return;
      setHidden(y > last && y > 100);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const light = overMedia && !pastFirstScreen && !open;

  return (
    <>
      {/* Phones: top bar */}
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 lg:hidden",
          "transition-[background-color,color] duration-400 ease-[ease] motion-reduce:transition-none",
          light ? "bg-transparent text-highlight-foreground" : "bg-background text-foreground",
          className,
        )}
      >
        <nav className="flex h-16 items-center justify-between px-gutter">
          <a href={brandHref} className="flex items-center">
            {brand}
          </a>
          <button
            type="button"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex items-center gap-3.5 text-[0.975rem] leading-none font-medium tracking-[-0.03em]"
          >
            {open ? closeLabel : menuLabel}
            <span aria-hidden className="relative block h-2 w-7">
              <span
                className={cn(
                  "absolute inset-x-0 top-0 h-0.5 bg-current transition-transform duration-400 motion-reduce:transition-none",
                  open && "translate-y-[3px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "absolute inset-x-0 bottom-0 h-0.5 bg-current transition-transform duration-400 motion-reduce:transition-none",
                  open && "-translate-y-[3px] -rotate-45",
                )}
              />
            </span>
          </button>
        </nav>
        {open && (
          <div className="flex h-[calc(100svh-4rem)] flex-col justify-between bg-background px-gutter pt-6 pb-8">
            <ul className="flex flex-col gap-1">
              {[...links, ...sideLinks].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="block py-1 font-display text-[2.07rem] leading-[1.1] font-medium tracking-[-0.03em] transition-opacity duration-400 hover:opacity-65"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={action.href}
              className="flex h-12 items-center justify-center gap-2 rounded-md bg-primary text-[0.975rem] font-medium tracking-[-0.03em] text-primary-foreground"
            >
              <CornerDownRight aria-hidden className="size-4" strokeWidth={1.5} />
              {action.label}
            </a>
          </div>
        )}
      </header>

      {/* Desktop: bar docked to the bottom of the window */}
      <header
        className={cn(
          "fixed inset-x-0 bottom-0 z-50 hidden bg-background text-foreground lg:block",
          "transition-transform duration-400 ease-[ease] motion-reduce:transition-none",
          hidden && "translate-y-full",
        )}
      >
        <nav className="relative flex h-[3.75rem] items-center justify-between px-gutter">
          <a href={brandHref} className="flex items-center">
            {brand}
          </a>
          <ul className="absolute left-1/2 flex -translate-x-1/2 items-center gap-6">
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} className={smallLink}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-6">
            {sideLinks.map((l) => (
              <a key={l.label} href={l.href} className={smallLink}>
                {l.label}
              </a>
            ))}
            <a
              href={action.href}
              className="-mr-[0.5rem] flex h-[2.875rem] items-center gap-2 rounded-md border-2 border-primary bg-primary px-6 text-[0.765rem] font-medium tracking-[-0.02em] text-primary-foreground transition-[border-color] duration-[450ms] ease-[ease] hover:border-muted-foreground motion-reduce:transition-none"
            >
              <CornerDownRight aria-hidden className="size-4" strokeWidth={1.5} />
              {action.label}
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
