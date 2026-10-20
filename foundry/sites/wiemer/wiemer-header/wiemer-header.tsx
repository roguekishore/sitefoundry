import { useEffect, useState } from "react";
import { WiemerArrowLink } from "@foundry/wiemer-arrow-link";
import { cn } from "@foundry/foundry-utils";

export interface WiemerHeaderProps {
  /** the wordmark, set in the display face */
  brand: string;
  /** where the wordmark links */
  homeHref?: string;
  /** the one call to action on the right */
  cta: { label: string; href: string };
  /** float over a hero: transparent with light text (orange bar on phones) until the hero has passed */
  overlay?: boolean;
  /** with overlay: how tall the hero is, in window heights, on wide screens (phones use 1) */
  heroHeight?: number;
  className?: string;
}

/** Fixed bar with a wordmark and one arrow link; hides while scrolling down. */
export function WiemerHeader({ brand, homeHref = "/", cta, overlay = false, heroHeight = 1.5, className }: WiemerHeaderProps) {
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(!overlay);

  useEffect(() => {
    let last = window.scrollY;
    const wide = window.matchMedia("(min-width: 768px)");
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - last) > 4) {
        setHidden(y > last && y > 120);
        last = y;
      }
      if (overlay) setSolid(y > window.innerHeight * (wide.matches ? heroHeight : 1) - 72);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overlay, heroHeight]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 h-18 transition-transform duration-[600ms] ease-[cubic-bezier(0.625,0.05,0,1)] motion-reduce:transition-none",
          hidden && "-translate-y-full",
          className,
        )}
      >
        {/* the two surfaces: orange on phones over the hero, near-white with a hairline once solid */}
        {overlay && <div aria-hidden="true" className={cn("absolute inset-0 bg-primary transition-opacity duration-300 md:hidden", solid && "opacity-0")} />}
        <div aria-hidden="true" className={cn("absolute inset-0 border-b border-border bg-background transition-opacity duration-300", !solid && "opacity-0")} />
        <div
          className={cn(
            "relative flex h-full items-center justify-between px-gutter transition-colors duration-300",
            solid ? "text-foreground" : "text-primary-foreground md:text-background md:dark:text-foreground",
          )}
        >
          <a href={homeHref} className="font-display text-[1.6rem] leading-none font-medium tracking-[-0.05em] md:text-[1.75rem]">
            {brand}
          </a>
          <WiemerArrowLink label={cta.label} href={cta.href} />
        </div>
      </header>
      {!overlay && <div aria-hidden="true" className="h-18" />}
    </>
  );
}
