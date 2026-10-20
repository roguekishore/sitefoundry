import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { PlumeformV2Button } from "@foundry/plumeform-v2-button";

export interface PlumeformV2HeaderLink {
  label: string;
  href: string;
  /** shows a small chevron after the label */
  hasMenu?: boolean;
  /** the page you're on: shown with a soft tint */
  current?: boolean;
}

export interface PlumeformV2HeaderProps {
  /** the brand's name: the home link's label for screen readers */
  brand: string;
  /** logo (an svg or icon plus a wordmark) */
  logo: ReactNode;
  homeHref?: string;
  /** the centred links */
  links: PlumeformV2HeaderLink[];
  /** the quiet text link at the right (e.g. log in) */
  secondary?: { label: string; href: string };
  /** the pill button at the right */
  cta: { label: string; href: string };
  /** label of the phone menu button, for screen readers */
  menuLabel?: string;
  className?: string;
}

export function PlumeformV2Header({
  brand,
  logo,
  homeHref = "/",
  links,
  secondary,
  cta,
  menuLabel = "Menu",
  className,
}: PlumeformV2HeaderProps) {
  const [open, setOpen] = useState(false);
  const [overDark, setOverDark] = useState(false);
  const bar = useRef<HTMLDivElement>(null);

  // Look at what's under the middle of the bar and go dark over dark bands.
  useEffect(() => {
    let frame = 0;
    const check = () => {
      frame = 0;
      const el = bar.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      // the outer header ignores the pointer, so hiding the bar lets the hit test find what is underneath
      el.style.visibility = "hidden";
      const under = document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2);
      el.style.visibility = "";
      setOverDark(!!under?.closest(".dark"));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };
    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header className={cn("pointer-events-none sticky top-2 z-40 mt-2 -mb-[3.75rem] px-2 sm:px-gutter", className)}>
      <div
        ref={bar}
        className={cn(
          "pointer-events-auto mx-auto max-w-[calc(var(--page-width)-2*var(--page-gutter)+0.25rem)] rounded-[1.625rem] border text-foreground backdrop-blur-xl",
          "transition-[background-color,color,border-color,box-shadow] duration-300 ease-out motion-reduce:transition-none",
          overDark
            ? "dark border-foreground/12 bg-background/70 shadow-[inset_0_1px_0_color-mix(in_oklab,var(--foreground)_10%,transparent),0_18px_40px_-28px_var(--background)]"
            : "border-border bg-card/90 shadow-[0_1px_2px_color-mix(in_oklab,var(--foreground)_5%,transparent)]",
        )}
      >
        <div className="flex h-[3.125rem] items-center gap-2 pr-2 pl-3.5">
          <a href={homeHref} aria-label={brand} className="flex shrink-0 items-center text-foreground">
            {logo}
          </a>

          <nav className="mx-auto hidden items-center gap-0.5 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={link.current ? "page" : undefined}
                className={cn(
                  "flex h-9 items-center gap-1 rounded-full px-2.5 text-[0.8125rem] font-medium text-muted-foreground transition-colors duration-200 hover:bg-foreground/8 hover:text-foreground motion-reduce:transition-none",
                  link.current && "bg-foreground/8 text-foreground",
                )}
              >
                {link.label}
                {link.hasMenu && <ChevronDown className="size-3.5 opacity-70" strokeWidth={2} aria-hidden />}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-1.5 lg:ml-0">
            {secondary && (
              <a
                href={secondary.href}
                className="hidden h-9 items-center rounded-full px-3 text-[0.8125rem] font-medium text-muted-foreground transition-colors duration-200 hover:bg-foreground/8 hover:text-foreground lg:flex"
              >
                {secondary.label}
              </a>
            )}
            <PlumeformV2Button href={cta.href} size="sm" className="h-9 px-4">
              {cta.label}
            </PlumeformV2Button>
            <button
              type="button"
              aria-label={menuLabel}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="relative size-9 rounded-full transition-colors hover:bg-foreground/8 lg:hidden"
            >
              {/* two bars that cross into an X */}
              <span
                className={cn(
                  "absolute left-1/2 h-[1.5px] w-4 -translate-x-1/2 bg-foreground transition-transform duration-300 motion-reduce:transition-none",
                  open ? "top-[17px] rotate-45" : "top-[14px]",
                )}
              />
              <span
                className={cn(
                  "absolute left-1/2 h-[1.5px] w-4 -translate-x-1/2 bg-foreground transition-transform duration-300 motion-reduce:transition-none",
                  open ? "top-[17px] -rotate-45" : "top-[20px]",
                )}
              />
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-foreground/10 px-4 pt-1 pb-3 lg:hidden">
            {[...links, ...(secondary ? [secondary] : [])].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-foreground/10 py-3 text-[0.9375rem] font-semibold last:border-0"
              >
                {link.label}
                {"hasMenu" in link && link.hasMenu && <ChevronDown className="size-4 opacity-60" strokeWidth={1.75} aria-hidden />}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
