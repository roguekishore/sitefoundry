import { useEffect, useRef, useState } from "react";
import { Heart, Menu, ShoppingBag, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface MarryandbrideHeaderLink {
  label: string;
  href: string;
}

export interface MarryandbrideHeaderCounter {
  href: string;
  /** screen-reader label (e.g. "Wish list") */
  label: string;
  /** the small number at the icon's top right */
  count: number;
}

export interface MarryandbrideHeaderProps {
  /** the wordmark in the centre */
  wordmark: string;
  homeHref?: string;
  /** links at the left (desktop) */
  leftLinks: MarryandbrideHeaderLink[];
  /** links at the right, before the icons (desktop) */
  rightLinks: MarryandbrideHeaderLink[];
  /** the heart icon */
  wishlist: MarryandbrideHeaderCounter;
  /** the bag icon */
  bag: MarryandbrideHeaderCounter;
  /** screen-reader labels of the phone menu buttons */
  menuLabel: string;
  closeLabel: string;
  className?: string;
}

const linkClass =
  "text-[0.78rem] leading-none tracking-[0.07em] uppercase transition-opacity duration-200 hover:opacity-70 lg:text-[0.863rem]";

function Counter({ counter, icon: Icon }: { counter: MarryandbrideHeaderCounter; icon: typeof Heart }) {
  return (
    <a href={counter.href} aria-label={counter.label} className="relative block transition-opacity duration-200 hover:opacity-70">
      <Icon className="size-5 lg:size-[1.35rem]" strokeWidth={1.1} />
      <span className="absolute -top-1.5 -right-1.5 text-[0.6rem] leading-none font-medium">{counter.count}</span>
    </a>
  );
}

/**
 * The header: transparent over the hero, hidden while scrolling down, back (solid) on scroll up.
 */
export function MarryandbrideHeader({ wordmark, homeHref = "/", leftLinks, rightLinks, wishlist, bag, menuLabel, closeLabel, className }: MarryandbrideHeaderProps) {
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  // hide on scroll down, show on scroll up; solid once the first screen has gone by
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY.current && y > 120);
      setSolid(y > window.innerHeight * 0.85);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 -mb-12 h-12 font-sans transition-[transform,background-color,color] duration-[400ms] ease-out motion-reduce:transition-none lg:-mb-[3.625rem] lg:h-[3.625rem]",
          hidden && !open && "-translate-y-full",
          solid ? "bg-background text-foreground" : "bg-transparent text-background",
          className,
        )}
      >
        <div className="grid h-full grid-cols-[1fr_auto_1fr] items-center px-gutter">
          <div className="flex items-center gap-[2.1rem]">
            <button type="button" aria-label={menuLabel} aria-expanded={open} onClick={() => setOpen(true)} className="lg:hidden">
              <Menu className="size-5" strokeWidth={1.1} />
            </button>
            {leftLinks.map((link) => (
              <a key={link.href} href={link.href} className={cn(linkClass, "hidden lg:block")}>
                {link.label}
              </a>
            ))}
          </div>
          <a href={homeHref} className="font-display text-[1.65rem] leading-none tracking-[-0.01em] lg:text-[2.5rem]">
            {wordmark}
          </a>
          <div className="flex items-center justify-end gap-5 lg:gap-[2.1rem]">
            {rightLinks.map((link) => (
              <a key={link.href} href={link.href} className={cn(linkClass, "hidden lg:block")}>
                {link.label}
              </a>
            ))}
            <Counter counter={wishlist} icon={Heart} />
            <Counter counter={bag} icon={ShoppingBag} />
          </div>
        </div>
      </header>

      {/* Phone menu: a paper sheet from the left with every link in tracked uppercase. */}
      <div
        className={cn(
          "fixed inset-0 z-[70] bg-foreground/30 transition-opacity duration-300 motion-reduce:transition-none lg:hidden",
          open ? "opacity-100" : "pointer-events-none invisible opacity-0",
        )}
        onClick={() => setOpen(false)}
      >
        <nav
          onClick={(e) => e.stopPropagation()}
          className={cn(
            "h-full w-[85%] max-w-sm bg-background px-gutter pt-4 font-sans text-foreground transition-transform duration-300 ease-out motion-reduce:transition-none",
            open ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <button type="button" aria-label={closeLabel} onClick={() => setOpen(false)} className="mb-8">
            <X className="size-5" strokeWidth={1.1} />
          </button>
          <ul className="space-y-5">
            {[...leftLinks, ...rightLinks].map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
