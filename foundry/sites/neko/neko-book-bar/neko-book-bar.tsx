import { useEffect, useState } from "react";
import { cn } from "@foundry/foundry-utils";
import { NekoButton } from "@foundry/neko-button";

export interface NekoBookBarProps {
  /** the product's name */
  title: string;
  /** one short line under it (duration, price…) */
  detail: string;
  /** the blue button */
  cta: { label: string; href: string };
  /** always show it (for previews) instead of waiting for an upward scroll */
  alwaysShown?: boolean;
  className?: string;
}

export function NekoBookBar({ title, detail, cta, alwaysShown, className }: NekoBookBarProps) {
  const [shown, setShown] = useState(!!alwaysShown);

  // Show while scrolling up once past the first screen; hide while scrolling down.
  useEffect(() => {
    if (alwaysShown) return;
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - last) < 4) return;
      setShown(y < last && y > window.innerHeight);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [alwaysShown]);

  return (
    <div className={cn("pointer-events-none fixed inset-x-0 bottom-0 z-40 overflow-clip pt-8 lg:hidden", className)}>
      <div
        className={cn(
          "pointer-events-auto flex items-center justify-between gap-4 bg-card px-gutter py-4 font-sans text-card-foreground shadow-[0_-8px_32px_-12px_color-mix(in_oklab,var(--foreground)_8%,transparent)] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none",
          shown ? "translate-y-0" : "translate-y-full",
        )}
      >
        <div className="min-w-0">
          <p className="truncate text-base leading-6">{title}</p>
          <p className="truncate text-base leading-6 font-medium">{detail}</p>
        </div>
        <NekoButton href={cta.href} variant="primary" size="sm" arrow={false} className="text-sm">
          {cta.label}
        </NekoButton>
      </div>
    </div>
  );
}
