import { useEffect, useId, useState, type ReactNode } from "react";
import { LeomeAndPartnersRollText } from "@foundry/leome-and-partners-roll-text";
import { cn } from "@foundry/foundry-utils";

export interface LeomeAndPartnersHeaderLink {
  label: string;
  href: string;
}

export interface LeomeAndPartnersHeaderProps {
  /** the firm's name beside the mark, one entry per line (two short lines read best) */
  wordmark: string[];
  /** the brand mark left of the wordmark, e.g. a lucide icon; it is sized to 4rem */
  mark?: ReactNode;
  homeHref?: string;
  /** the menu button's label */
  menuLabel: string;
  /** the button's label while the menu is open */
  closeLabel: string;
  /** the links of the full-screen menu */
  links: LeomeAndPartnersHeaderLink[];
  /** short lines along the foot of the open menu (address, phone, email…) */
  menuFootnote?: string[];
  className?: string;
}

// The original's hover and menu timings.
const ease = "ease-[cubic-bezier(0.625,0.05,0,1)]";
const bar = cn("absolute inset-x-0 top-1/2 h-px bg-current transition-[translate,rotate,scale,opacity] duration-[600ms] motion-reduce:transition-none", ease);

/**
 * A fixed, transparent header: a mark with a two-line wordmark at the left and a small filled
 * "Menu" button at the right whose label rolls, fill insets and outer bars shorten on hover.
 * The button opens a full-screen menu that wipes down (clip-path); hovering one of its large
 * links dims the others.
 */
export function LeomeAndPartnersHeader({
  wordmark,
  mark,
  homeHref = "/",
  menuLabel,
  closeLabel,
  links,
  menuFootnote,
  className,
}: LeomeAndPartnersHeaderProps) {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 font-sans text-foreground", className)}>
      <div className="relative z-10 flex items-center justify-between px-10 pt-[1.5625rem]">
        <a href={homeHref} className="flex items-center gap-3">
          {mark && (
            <span aria-hidden className="block size-16 [&_svg]:size-full">
              {mark}
            </span>
          )}
          <span className="text-2xl leading-none font-medium tracking-[-0.02em]">
            {wordmark.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </span>
        </a>

        <button
          type="button"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
          className="group/roll relative flex h-[2.125rem] items-center gap-3 px-3.5 text-[0.85rem] font-medium text-primary-foreground"
        >
          <span
            aria-hidden
            className={cn("absolute inset-0 bg-primary transition-[inset] duration-[600ms] group-hover/roll:inset-[0.125em] motion-reduce:transition-none", ease)}
          />
          <LeomeAndPartnersRollText text={open ? closeLabel : menuLabel} className="relative" />
          <span aria-hidden className="relative block h-[1em] w-6">
            <span
              className={cn(
                bar,
                open
                  ? "translate-y-0 rotate-45 scale-x-70"
                  : "-translate-y-[0.35em] group-hover/roll:-translate-y-[0.5em] group-hover/roll:scale-x-50",
              )}
            />
            <span className={cn(bar, open && "opacity-0")} />
            <span
              className={cn(
                bar,
                open
                  ? "translate-y-0 -rotate-45 scale-x-70"
                  : "translate-y-[0.35em] group-hover/roll:translate-y-[0.5em] group-hover/roll:scale-x-50",
              )}
            />
          </span>
        </button>
      </div>

      <div
        id={menuId}
        inert={!open}
        className={cn(
          "fixed inset-0 flex flex-col justify-end gap-12 bg-card px-10 pt-32 pb-10 text-card-foreground transition-[clip-path] duration-1000 ease-[cubic-bezier(0.9,0,0.1,1)] motion-reduce:transition-none",
          open ? "[clip-path:inset(0_0_0_0)]" : "pointer-events-none [clip-path:inset(0_0_100%_0)]",
        )}
      >
        <nav>
          <ul className="[&:has(>li:hover)>li:not(:hover)]:opacity-15">
            {links.map((link) => (
              <li key={link.href} className="transition-opacity duration-500 motion-reduce:transition-none">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="group/roll block text-[2.75rem] font-medium tracking-[-0.048em] lg:text-[3.65rem]"
                >
                  <LeomeAndPartnersRollText text={link.label} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {menuFootnote && menuFootnote.length > 0 && (
          <ul className="flex flex-wrap gap-x-8 gap-y-2 text-xs font-medium uppercase">
            {menuFootnote.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}
