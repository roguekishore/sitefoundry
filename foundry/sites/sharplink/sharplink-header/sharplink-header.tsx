import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { sharplinkLabelType } from "@foundry/sharplink-label";

export interface SharplinkHeaderLink {
  /** the link text */
  label: string;
  /** where it goes */
  href: string;
}

export interface SharplinkHeaderProps {
  /** the company name, shown as the wordmark */
  brand: string;
  /** a small mark before the name (an icon or svg) */
  brandMark?: ReactNode;
  /** where the wordmark links to */
  homeHref?: string;
  /** the navigation links, in order */
  links: SharplinkHeaderLink[];
  /** the square arrow box at the end of the row (e.g. to the main dashboard) */
  action?: SharplinkHeaderLink;
  /** the label of the phone menu button */
  menuLabel: string;
  /** colours before the page has been measured: dark when the first section is dark */
  initialTone?: "light" | "dark";
  className?: string;
}

const box = cn(
  "grid h-[2.125rem] place-items-center bg-foreground/10 text-foreground backdrop-blur-md",
  "transition-colors duration-[250ms] ease-[cubic-bezier(0.455,0.03,0.515,0.955)] hover:bg-foreground/[0.18] motion-reduce:transition-none",
);

/** Fixed bar of square glass links whose colours follow the section beneath it. */
export function SharplinkHeader({ brand, brandMark, homeHref = "/", links, action, menuLabel, initialTone = "light", className }: SharplinkHeaderProps) {
  const ref = useRef<HTMLElement>(null);
  const [dark, setDark] = useState(initialTone === "dark");
  const [open, setOpen] = useState(false);

  // Take the tone of the last marked region (in page order, so nested marks win) that the
  // bar's middle line crosses; unmarked parts of the page are light.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const y = el.offsetHeight / 2;
      let tone = "light";
      document.querySelectorAll<HTMLElement>("[data-sharplink-tone]").forEach((mark) => {
        if (el.contains(mark)) return;
        const box = mark.getBoundingClientRect();
        if (box.height > 0 && box.top <= y && box.bottom > y) tone = mark.dataset.sharplinkTone ?? "light";
      });
      setDark(tone === "dark");
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <header ref={ref} className={cn("fixed inset-x-0 top-0 z-50 text-foreground", (dark || open) && "dark", className)}>
      <div className="mx-auto flex max-w-page items-center justify-between px-gutter pt-3 lg:pt-4">
        <a href={homeHref} className="flex items-center gap-1.5 text-foreground" onClick={() => setOpen(false)}>
          {brandMark && <span className="[&_svg]:size-6">{brandMark}</span>}
          <span className="font-display text-[1.375rem] leading-none font-medium tracking-[-0.03em]">{brand}</span>
        </a>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className={cn(box, "px-4", sharplinkLabelType)}>
              {link.label}
            </a>
          ))}
          {action && (
            <a href={action.href} aria-label={action.label} className={cn(box, "w-[2.125rem]")}>
              <ArrowRight className="size-4" strokeWidth={1.5} />
            </a>
          )}
        </nav>

        <div className="flex items-center gap-0.5 lg:hidden">
          <button type="button" className={cn(box, "px-4", sharplinkLabelType)} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            {menuLabel}
          </button>
          <button type="button" className={cn(box, "w-[2.125rem]")} aria-label={menuLabel} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            {open ? <X className="size-4" strokeWidth={1.5} /> : <Menu className="size-4" strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="fixed inset-x-0 top-0 -z-10 flex h-svh flex-col justify-end bg-background px-gutter pb-10 lg:hidden">
          <ul className="grid gap-1">
            {[...links, ...(action ? [action] : [])].map((link) => (
              <li key={link.href} className="border-t border-dotted border-foreground/20">
                <a href={link.href} className="block py-3 font-display text-[2rem] leading-[1.16] font-medium tracking-[-0.01em]" onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
