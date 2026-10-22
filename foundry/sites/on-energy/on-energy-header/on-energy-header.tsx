import { useEffect, useState } from "react";
import { ChevronDown, Grip, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface OnEnergyNavLink {
  /** the link text */
  label: string;
  /** where it goes */
  href: string;
  /** links shown in a dropdown under this one (desktop) or indented under it (phone menu) */
  children?: { label: string; href: string }[];
}

export interface OnEnergyHeaderProps {
  /** the wordmark, set as plain text in the yellow badge */
  brand: string;
  /** where the wordmark links to */
  brandHref?: string;
  /** the main links; on desktop each gets an equal-width glass pill */
  links: OnEnergyNavLink[];
  /** the yellow call to action at the right end */
  cta: { label: string; href: string };
  /** screen-reader label for the phone menu button */
  menuLabel?: string;
  className?: string;
}

type Tone = "default" | "primary" | "inverse";

/** Colours per tone: the header follows the section under it (sections mark themselves with
 *  data-on-energy-tone="primary" for yellow, "inverse" for light-on-dark-theme). */
const TONES: Record<Tone, { badge: string; pill: string; cta: string }> = {
  default: {
    badge: "bg-primary text-primary-foreground",
    pill: "bg-foreground/20 text-foreground",
    cta: "bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary",
  },
  primary: {
    badge: "bg-primary-foreground text-primary",
    pill: "bg-primary-foreground/15 text-primary-foreground",
    cta: "bg-primary-foreground text-primary hover:bg-foreground hover:text-background",
  },
  inverse: {
    badge: "bg-background text-primary",
    pill: "bg-background/20 text-background",
    cta: "bg-background text-primary hover:bg-primary hover:text-primary-foreground",
  },
};

/**
 * A fixed, floating header. Desktop: a yellow wordmark badge, a row of equal glass pills
 * (dropdowns open on hover) and a yellow mono CTA, 4px apart across the full width.
 * Phone: one yellow pill in the top-right corner with the wordmark and a grid menu button
 * that opens a full-screen yellow menu.
 */
export function OnEnergyHeader({ brand, brandHref = "#", links, cta, menuLabel = "Menu", className }: OnEnergyHeaderProps) {
  const [open, setOpen] = useState(false);
  const [tone, setTone] = useState<Tone>("default");

  // Find the section under the header's line and take its tone.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      let next: Tone = "default";
      for (const el of document.querySelectorAll<HTMLElement>("[data-on-energy-tone]")) {
        const r = el.getBoundingClientRect();
        if (r.top <= 30 && r.bottom > 30) next = (el.dataset.onEnergyTone as Tone) ?? "default";
      }
      setTone(next);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);
  const t = TONES[tone];
  return (
    <header className={cn("pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-4 lg:px-4", className)}>
      {/* desktop row */}
      <nav className="pointer-events-auto hidden h-7 items-stretch gap-1 lg:flex">
        <a href={brandHref} className={cn("flex w-14 shrink-0 items-center justify-center rounded-lg font-display text-[0.9375rem] font-bold tracking-[-0.06em] transition-colors duration-300", t.badge)}>
          {brand}
        </a>
        {links.map((link) => (
          <div key={link.label} className="group/nav relative flex-1">
            <a
              href={link.href}
              className={cn(
                "flex h-full items-center justify-between rounded-lg px-3.5 font-sans text-[0.8125rem] backdrop-blur-md transition-colors duration-200 group-hover/nav:bg-foreground group-hover/nav:text-background motion-reduce:transition-none",
                t.pill,
              )}
            >
              <span>{link.label}</span>
              {link.children?.length ? <ChevronDown aria-hidden className="size-3 opacity-70" strokeWidth={1.5} /> : null}
            </a>
            {link.children?.length ? (
              <ul className="invisible absolute inset-x-0 top-full mt-1 flex flex-col gap-px overflow-clip rounded-lg bg-card/90 p-1 opacity-0 backdrop-blur-md transition-opacity duration-200 group-focus-within/nav:visible group-focus-within/nav:opacity-100 group-hover/nav:visible group-hover/nav:opacity-100">
                {link.children.map((child) => (
                  <li key={child.label}>
                    <a href={child.href} className="block rounded-md px-3 py-2 text-[0.8125rem] text-card-foreground transition-colors duration-200 hover:bg-foreground hover:text-background">
                      {child.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
        <a
          href={cta.href}
          className={cn("flex shrink-0 items-center rounded-lg px-4 font-mono text-xs font-medium transition-colors duration-300 motion-reduce:transition-none", t.cta)}
        >
          {cta.label}
        </a>
      </nav>

      {/* phone pill */}
      <div
        className={cn(
          "pointer-events-auto ml-auto flex h-[2.875rem] w-[10.875rem] items-stretch overflow-clip rounded-lg transition-colors duration-300 lg:hidden",
          tone === "primary" ? "bg-primary-foreground text-primary" : "bg-primary text-primary-foreground",
        )}
      >
        <a href={brandHref} className="flex flex-1 items-center justify-center font-display text-xl font-bold tracking-[-0.06em]">
          {brand}
        </a>
        <button
          type="button"
          aria-label={menuLabel}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex w-[2.875rem] items-center justify-center border-l border-current transition-colors duration-200 hover:bg-primary-foreground hover:text-foreground"
        >
          {open ? <X aria-hidden className="size-5" /> : <Grip aria-hidden className="size-5" strokeWidth={2.5} />}
        </button>
      </div>

      {/* phone menu */}
      {open && (
        <div className="pointer-events-auto fixed inset-x-0 top-[4.5rem] bottom-0 overflow-y-auto bg-primary px-gutter pt-4 pb-10 text-primary-foreground lg:hidden">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.label} className="border-b border-primary-foreground/40 py-2">
                <a href={link.href} className="block text-[1.8rem] font-light tracking-[-0.04em]">
                  {link.label}
                </a>
                {link.children?.length ? (
                  <ul className="flex flex-wrap gap-x-4 gap-y-1 pb-1">
                    {link.children.map((child) => (
                      <li key={child.label}>
                        <a href={child.href} className="text-sm">
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
          <a href={cta.href} className="mt-8 inline-flex h-10 items-center rounded-md bg-primary-foreground px-6 font-mono text-xs text-primary">
            {cta.label}
          </a>
        </div>
      )}
    </header>
  );
}
