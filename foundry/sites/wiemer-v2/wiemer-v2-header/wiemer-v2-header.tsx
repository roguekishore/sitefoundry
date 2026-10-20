import { useEffect, useState, type ReactNode } from "react";
import { WiemerV2ArrowLink } from "@foundry/wiemer-v2-arrow-link";
import { cn } from "@foundry/foundry-utils";

export interface WiemerV2HeaderProps {
  /** the wordmark: the brand's name, an optional icon before it, and where it links */
  brand: { name: string; icon?: ReactNode; href: string };
  /** the one call to action on the right */
  cta: { label: string; href: string };
  /**
   * overlay: floats over a full-window hero (an accent bar on phones; from lg transparent with
   * light text, turning solid once the page passes `solidAfter`) · solid: a plain bar in the flow
   */
  variant?: "overlay" | "solid";
  /** overlay only: how far down (in window heights) the bar turns solid, default 1.5 */
  solidAfter?: number;
  className?: string;
}

/**
 * A slim 72px bar: wordmark on the left, a circle-arrow link on the right. It slides away
 * while you scroll down and comes back as soon as you scroll up.
 */
export function WiemerV2Header({ brand, cta, variant = "overlay", solidAfter = 1.5, className }: WiemerV2HeaderProps) {
  const [hidden, setHidden] = useState(false);
  const [past, setPast] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 96 && y > last);
      setPast(y > window.innerHeight * solidAfter - 72);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [solidAfter]);

  const overlay = variant === "overlay";
  const clear = overlay && !past; // transparent over the hero (from lg)

  return (
    <header
      className={cn(
        "inset-x-0 top-0 z-50 transition-[translate,background-color,color] duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] motion-reduce:transition-none",
        overlay ? "fixed" : "sticky",
        hidden && "-translate-y-full",
        overlay ? "bg-highlight text-highlight-foreground" : "border-b border-border bg-background text-foreground",
        overlay && (clear ? "lg:bg-transparent lg:text-background" : "lg:border-b lg:border-border lg:bg-background lg:text-foreground"),
        className,
      )}
    >
      <div className="flex h-18 items-center justify-between gap-4 px-gutter lg:px-8">
        <a href={brand.href} className="flex items-center gap-2 text-[1.75rem] leading-none font-medium tracking-[-0.03em] [&_svg]:size-6">
          {brand.icon}
          <span>{brand.name}</span>
        </a>
        <WiemerV2ArrowLink href={cta.href} tone={clear ? "inverse" : "ink"} className={cn(clear && "max-lg:text-highlight-foreground max-lg:[&>span:last-child]:border-highlight-foreground")}>
          {cta.label}
        </WiemerV2ArrowLink>
      </div>
    </header>
  );
}
