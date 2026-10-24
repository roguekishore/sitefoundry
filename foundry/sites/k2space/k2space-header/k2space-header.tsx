import { useEffect, useState } from "react";
import { cn } from "@foundry/foundry-utils";
import { K2spaceWordmark, type K2spaceWordmarkProps } from "@foundry/k2space-wordmark";
import "./k2space-header.css";

export interface K2spaceHeaderLink {
  /** the link text */
  label: string;
  href: string;
}

export interface K2spaceMissionClock {
  /** when the mission started (ISO date-time); the clock counts up from here */
  since: string;
  /** the mission or spacecraft name shown after the time */
  name: string;
}

export interface K2spaceHeaderProps {
  /** the wordmark (two words around an orbit icon) */
  brand: K2spaceWordmarkProps;
  /** where the wordmark links */
  brandHref?: string;
  /** the links across the middle (desktop) and in the phone menu */
  links: K2spaceHeaderLink[];
  /** the live elapsed-time readout on the right (desktop) */
  clock?: K2spaceMissionClock;
  /** the accessible name of the phone menu button */
  menuLabel: string;
  className?: string;
}

/** "T+12d 04h 09m 31s" from a start time; a fixed-width readout */
function elapsed(since: string, now: number) {
  const total = Math.max(0, Math.floor((now - Date.parse(since)) / 1000));
  const pad = (n: number) => String(n).padStart(2, "0");
  const d = Math.floor(total / 86400);
  const h = Math.floor((total % 86400) / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  return `T+${d}d ${pad(h)}h ${pad(m)}m ${pad(s)}s`;
}

/**
 * A transparent fixed bar: wordmark left, links in the middle, a mission clock ticking on the
 * right. Phones show a two-line menu button. The whole bar fades out and lifts as soon as the
 * page scrolls (CSS scroll timeline).
 */
export function K2spaceHeader({ brand, brandHref = "/", links, clock, menuLabel, className }: K2spaceHeaderProps) {
  const [now, setNow] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!clock) return;
    setNow(Date.now());
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, [clock]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "k2space-header dark fixed inset-x-0 top-0 z-40 font-sans font-medium text-foreground [font-stretch:var(--k2space-stretch,100%)]",
        className,
      )}
    >
      <div className="flex h-[72px] items-center justify-between px-gutter lg:grid lg:h-[7.2vw] lg:grid-cols-[31.3vw_1fr_auto] lg:items-center">
        <a href={brandHref} className="transition-opacity duration-200 hover:opacity-80 motion-reduce:transition-none">
          <K2spaceWordmark {...brand} className={cn("text-[15px] lg:text-[1.2vw]", brand.className)} />
        </a>

        <nav className="max-lg:hidden">
          <ul className="flex gap-[4.5vw] text-[max(1rem,1.3227vw)]/none">
            {links.map((link, i) => (
              <li key={i}>
                <a href={link.href} className="transition-opacity duration-200 ease-[ease] hover:opacity-80 motion-reduce:transition-none">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {clock && (
          <p className="text-[max(1rem,1.3227vw)]/none tabular-nums max-lg:hidden">
            <span className="inline-block min-w-[12.5em]">{now !== null ? elapsed(clock.since, now) : null}</span>
            <span aria-hidden> / </span>
            {clock.name}
          </p>
        )}

        <button
          type="button"
          aria-label={menuLabel}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative h-3 w-10 lg:hidden"
        >
          <span className={cn("absolute inset-x-0 top-0 h-px bg-current transition-transform duration-300 motion-reduce:transition-none", open && "translate-y-[5.5px] rotate-[20deg]")} />
          <span className={cn("absolute inset-x-0 bottom-0 h-px bg-current transition-transform duration-300 motion-reduce:transition-none", open && "-translate-y-[5.5px] -rotate-[20deg]")} />
        </button>
      </div>

      <div className={cn("bg-background px-gutter pt-6 pb-10 lg:hidden", open ? "block" : "hidden")}>
        <ul className="flex flex-col gap-5 font-display text-[34px]/none font-[560]">
          {links.map((link, i) => (
            <li key={i}>
              <a href={link.href} onClick={() => setOpen(false)} className="transition-opacity duration-200 hover:opacity-80 motion-reduce:transition-none">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
