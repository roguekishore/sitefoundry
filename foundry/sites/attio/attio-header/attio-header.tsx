import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRight, ChevronDown, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { AttioButton } from "@foundry/attio-button";

export interface AttioHeaderLink {
  label: string;
  href: string;
  /** shows a small chevron, as for a link that opens a menu */
  menu?: boolean;
}

export interface AttioHeaderProps {
  /** the brand's name: the home link's label for screen readers */
  brand: string;
  /** the wordmark (an svg, img or styled text) */
  logo: ReactNode;
  homeHref?: string;
  /** the one-line news in the black bar above the nav; leave out for no bar */
  announcement?: { label: string; href: string };
  /** screen-reader label of the bar's close button */
  dismissLabel?: string;
  /** the nav links, in a row from lg and in the phone menu below */
  links: AttioHeaderLink[];
  /** the outline button at the right end (e.g. sign in) */
  secondary?: { label: string; href: string };
  /** the dark button at the right end (e.g. start free) */
  primary?: { label: string; href: string };
  /** labels of the phone menu button, for screen readers */
  menuLabel?: string;
  closeLabel?: string;
  className?: string;
}

/**
 * A black one-line news bar over a 68px white nav bar, both pinned to the top for the whole
 * page. Over any section marked data-header-tone="dark" the nav bar turns dark too.
 */
export function AttioHeader({
  brand,
  logo,
  homeHref = "/",
  announcement,
  dismissLabel = "Dismiss",
  links,
  secondary,
  primary,
  menuLabel = "Open menu",
  closeLabel = "Close menu",
  className,
}: AttioHeaderProps) {
  const [open, setOpen] = useState(false);
  const [barShown, setBarShown] = useState(true);
  const [dark, setDark] = useState(false);
  const ref = useRef<HTMLElement>(null);

  // Follow the section under the header's bottom edge: dark bands turn the bar dark.
  useEffect(() => {
    let frame = 0;
    const check = () => {
      frame = 0;
      const line = (ref.current?.getBoundingClientRect().bottom ?? 0) + 1;
      const bands = document.querySelectorAll<HTMLElement>('[data-header-tone="dark"]');
      let over = false;
      bands.forEach((band) => {
        const r = band.getBoundingClientRect();
        if (r.top <= line && r.bottom > line) over = true;
      });
      setDark(over);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };
    check();
    document.addEventListener("scroll", onScroll, { passive: true, capture: true });
    window.addEventListener("resize", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll, { capture: true });
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header ref={ref} className={cn("sticky top-0 z-40", className)}>
      {announcement && barShown && (
        <div className="dark relative flex h-12 items-center bg-background px-6 text-foreground">
          <a
            href={announcement.href}
            className="group flex min-w-0 items-center gap-2 pr-10 text-[0.9375rem] font-semibold tracking-[-0.01em] lg:mx-auto lg:pr-0 lg:text-sm"
          >
            <span className="truncate">{announcement.label}</span>
            <ArrowRight aria-hidden className="size-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none" />
          </a>
          <button
            type="button"
            aria-label={dismissLabel}
            onClick={() => setBarShown(false)}
            className="absolute right-6 grid size-7 place-items-center rounded-md text-foreground/80 transition-colors duration-300 hover:bg-accent hover:text-foreground lg:right-8"
          >
            <X aria-hidden className="size-4" />
          </button>
        </div>
      )}

      <div
        className={cn(
          "border-b border-border bg-background text-foreground transition-[background-color,border-color,color] duration-300 ease-[cubic-bezier(0.2,0,0,1)] motion-reduce:transition-none",
          dark && "dark",
        )}
      >
        <div className="flex h-[3.25rem] items-center px-6 lg:h-[4.25rem] lg:px-7">
          <a href={homeHref} aria-label={brand} className="flex items-center text-foreground [&_svg]:h-6 [&_svg]:w-auto">
            {logo}
          </a>

          <nav className="ml-11 hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <AttioButton key={link.href} href={link.href} variant="ghost" className="h-9 gap-1 px-3">
                {link.label}
                {link.menu && <ChevronDown aria-hidden className="ml-1 inline size-4 opacity-70" />}
              </AttioButton>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2.5">
            {secondary && (
              <AttioButton href={secondary.href} className="hidden lg:inline-flex">
                {secondary.label}
              </AttioButton>
            )}
            {primary && (
              <AttioButton href={primary.href} variant="primary" className="hidden font-semibold lg:inline-flex">
                {primary.label}
              </AttioButton>
            )}
            <button
              type="button"
              aria-label={open ? closeLabel : menuLabel}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="relative -mr-1.5 size-9 rounded-md lg:hidden"
            >
              {/* two bars that cross into an X */}
              <span
                className={cn(
                  "absolute left-1/2 h-[1.5px] w-[1.125rem] -translate-x-1/2 rounded-full bg-foreground transition-transform duration-300 motion-reduce:transition-none",
                  open ? "top-[17px] rotate-45" : "top-[13px]",
                )}
              />
              <span
                className={cn(
                  "absolute left-1/2 h-[1.5px] w-[1.125rem] -translate-x-1/2 rounded-full bg-foreground transition-transform duration-300 motion-reduce:transition-none",
                  open ? "top-[17px] -rotate-45" : "top-[21px]",
                )}
              />
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-border px-6 pt-2 pb-6 lg:hidden">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex h-12 items-center justify-between border-b border-border text-base font-medium text-foreground"
              >
                {link.label}
                {link.menu && <ChevronDown aria-hidden className="size-4 -rotate-90 opacity-60" />}
              </a>
            ))}
            <div className="mt-5 grid grid-cols-2 gap-3">
              {secondary && (
                <AttioButton href={secondary.href} size="lg">
                  {secondary.label}
                </AttioButton>
              )}
              {primary && (
                <AttioButton href={primary.href} variant="primary" size="lg">
                  {primary.label}
                </AttioButton>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
