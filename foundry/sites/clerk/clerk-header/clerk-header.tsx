import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { Caret } from "@foundry/clerk-button";

export interface ClerkHeaderLink {
  label: string;
  href: string;
  /** shows a small chevron after the label */
  hasMenu?: boolean;
}

export interface ClerkHeaderProps {
  /** the brand's name: the home link's label for screen readers */
  brand: string;
  /** logo (an svg or img, wordmark included) */
  logo: ReactNode;
  homeHref?: string;
  links: ClerkHeaderLink[];
  /** small links at the right end, split by hairlines (e.g. sign in, sign up) */
  actions?: { label: string; href: string }[];
  /** thin black strip above the bar */
  announcement?: { text: string; link?: { label: string; href: string } };
  /** label of the phone menu button, for screen readers */
  menuLabel?: string;
  /** colour behind the bar where it rests at the top: match the first section under it */
  surface?: "card" | "background" | "none";
  className?: string;
}

const surfaces = { card: "bg-card", background: "bg-background", none: "" };

export function ClerkHeader({
  brand,
  logo,
  homeHref = "/",
  links,
  actions = [],
  announcement,
  menuLabel = "Menu",
  surface = "card",
  className,
}: ClerkHeaderProps) {
  const [open, setOpen] = useState(false);
  const [overDark, setOverDark] = useState(false);
  const bar = useRef<HTMLDivElement>(null);

  // While floating, look at what's under the bar and go dark over dark sections.
  useEffect(() => {
    let frame = 0;
    const check = () => {
      frame = 0;
      const el = bar.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
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
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      {announcement && (
        <div className="dark bg-background text-foreground">
          <p className="mx-auto flex h-10 max-w-page items-center justify-center gap-4 px-gutter text-[0.8125rem] font-medium whitespace-nowrap">
            <span className="truncate">{announcement.text}</span>
            {announcement.link && (
              <>
                <span aria-hidden className="h-4 w-px bg-border" />
                <a href={announcement.link.href} className="group/a flex items-center gap-2.5 transition-colors hover:text-foreground/75">
                  {announcement.link.label}
                  <Caret className="size-1.5 opacity-70 transition-transform duration-300 group-hover/a:translate-x-0.5 motion-reduce:transition-none" />
                </a>
              </>
            )}
          </p>
        </div>
      )}
      {/* the strip behind the bar's resting place; it scrolls away, the bar doesn't */}
      <div aria-hidden className={cn("h-[3.125rem]", surfaces[surface])} />
      <header
        className={cn(
          "sticky top-2 z-40 -mt-[2.625rem] mx-auto w-full max-w-[calc(var(--page-width)-2*var(--page-gutter)+1.75rem)] px-2 lg:px-0",
          className,
        )}
      >
        <div
          ref={bar}
          className={cn(
            "rounded-xl bg-background/90 text-foreground backdrop-blur-md transition-[background-color,color,box-shadow] duration-500 ease-out motion-reduce:transition-none",
            "shadow-[inset_0_0_0_0.5px_color-mix(in_oklab,var(--card)_90%,transparent),0_0_0_0.5px_color-mix(in_oklab,var(--foreground)_15%,transparent),0_2px_3px_color-mix(in_oklab,var(--foreground)_4%,transparent),0_4px_6px_color-mix(in_oklab,var(--foreground)_4%,transparent)]",
            overDark && "dark",
          )}
        >
          <div className="flex h-[2.625rem] items-center py-2 pr-2 pl-3">
            <a href={homeHref} aria-label={brand} className="flex items-center text-foreground [&_svg]:h-[1.375rem] [&_svg]:w-auto">
              {logo}
            </a>
            <span aria-hidden className="mx-3 hidden h-6 w-px bg-border lg:block" />
            <nav className="hidden items-center lg:flex">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex h-7 items-center gap-1 rounded-md px-3 text-[0.8125rem] font-medium transition-colors duration-200 hover:bg-foreground/5"
                >
                  {link.label}
                  {link.hasMenu && <ChevronDown className="size-3.5 opacity-60" strokeWidth={2} />}
                </a>
              ))}
            </nav>

            <div className="ml-auto flex items-center">
              {actions.map((a, i) => (
                <span key={a.href} className="flex items-center">
                  {i > 0 && <span aria-hidden className="h-4 w-px bg-border" />}
                  <a href={a.href} className="flex h-7 items-center rounded-md px-3 text-[0.8125rem] font-medium transition-colors duration-200 hover:bg-foreground/5">
                    {a.label}
                  </a>
                </span>
              ))}
              <button
                type="button"
                aria-label={menuLabel}
                aria-expanded={open}
                onClick={() => setOpen((o) => !o)}
                className="relative ml-1 size-7 rounded-md hover:bg-foreground/5 lg:hidden"
              >
                {/* two short bars that cross into an X */}
                <span
                  className={cn(
                    "absolute left-1/2 h-px w-3.5 -translate-x-1/2 bg-foreground transition-transform duration-300 motion-reduce:transition-none",
                    open ? "top-[13.5px] rotate-45" : "top-[11px]",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-1/2 h-px w-3.5 -translate-x-1/2 bg-foreground transition-transform duration-300 motion-reduce:transition-none",
                    open ? "top-[13.5px] -rotate-45" : "top-[16px]",
                  )}
                />
              </button>
            </div>
          </div>

          {open && (
            <nav className="border-t border-border px-3 pt-2 pb-3 lg:hidden">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-border py-3 text-[0.9375rem] font-medium last:border-0"
                >
                  {link.label}
                  {link.hasMenu && <ChevronDown className="size-4 opacity-50" strokeWidth={1.75} />}
                </a>
              ))}
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
