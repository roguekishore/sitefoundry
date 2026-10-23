import { useEffect, useState } from "react";
import { cn } from "@foundry/foundry-utils";
import { ThirdwayArrowLink } from "@foundry/thirdway-arrow-link";
import { ThirdwayCountPill } from "@foundry/thirdway-count-pill";

export interface ThirdwayHeaderLink {
  label: string;
  href: string;
}

export interface ThirdwayHeaderProps {
  /** the wordmark text */
  brand: string;
  /** a tiny superscript after the wordmark (e.g. a trade mark glyph) */
  mark?: string;
  /** home link of the wordmark */
  homeHref?: string;
  /** the pages listed in the menu panel */
  links: ThirdwayHeaderLink[];
  /** the "let's talk" call to action */
  cta: ThirdwayHeaderLink;
  /** accessible name of the menu button */
  menuLabel: string;
  /** IANA time zone of the clock at the left (desktop) */
  timeZone?: string;
  /** the zone abbreviation shown beside the clock */
  zoneLabel: string;
  className?: string;
}

function useClock(timeZone: string) {
  const [time, setTime] = useState<[string, string]>(["00", "00"]);
  useEffect(() => {
    const tick = () => {
      const parts = new Intl.DateTimeFormat("en-GB", { timeZone, hour: "2-digit", minute: "2-digit", hour12: false }).formatToParts(new Date());
      setTime([parts.find((p) => p.type === "hour")?.value ?? "00", parts.find((p) => p.type === "minute")?.value ?? "00"]);
    };
    tick();
    const id = window.setInterval(tick, 15000);
    return () => window.clearInterval(id);
  }, [timeZone]);
  return time;
}

/**
 * Fixed top bar: on phones one cream bar (wordmark, call to action, menu square); from md up a
 * cream wordmark box with the menu square in the centre, a live clock at the left and the call
 * to action at the right. The clock and the call to action invert against whatever is behind them.
 */
export function ThirdwayHeader({ brand, mark, homeHref = "#", links, cta, menuLabel, timeZone = "Europe/London", zoneLabel, className }: ThirdwayHeaderProps) {
  const [open, setOpen] = useState(false);
  const [hh, mm] = useClock(timeZone);

  return (
    <header className={cn("pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8 md:pt-5", className)}>
      <div className="relative flex items-start justify-center">
        <div className="pointer-events-auto absolute top-2.5 left-0 hidden items-center gap-1.5 text-background mix-blend-difference md:flex">
          <ThirdwayCountPill value={hh} />
          <span className="text-sm font-[560]">:</span>
          <ThirdwayCountPill value={mm} />
          <span className="ml-1 text-base font-[560] tracking-[-0.04em]">{zoneLabel}</span>
        </div>

        <div className="pointer-events-auto relative w-full md:w-auto">
          <div className="flex items-center justify-between gap-6 rounded-[2px] bg-background p-1.5 pl-3 text-foreground md:justify-center md:gap-4">
            <a href={homeHref} className="text-[1.65rem] leading-none font-[560] tracking-[-0.06em]">
              {brand}
              {mark && <sup className="ml-0.5 align-super text-[0.4em] tracking-normal">{mark}</sup>}
            </a>
            <div className="flex items-center gap-4">
              <a href={cta.href} className="text-sm leading-none font-[560] tracking-[-0.04em] underline underline-offset-4 md:hidden">
                {cta.label}
              </a>
              <button
                type="button"
                aria-label={menuLabel}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="flex size-8 flex-col items-center justify-center gap-[5px] rounded-[2px] bg-secondary transition-colors duration-150 hover:bg-accent motion-reduce:transition-none"
              >
                <span className={cn("block h-0.5 w-3.5 bg-foreground transition-transform duration-300 ease-[cubic-bezier(0.66,0.01,0.12,0.98)] motion-reduce:transition-none", open && "translate-y-[3.5px] rotate-45")} />
                <span className={cn("block h-0.5 w-3.5 bg-foreground transition-transform duration-300 ease-[cubic-bezier(0.66,0.01,0.12,0.98)] motion-reduce:transition-none", open && "-translate-y-[3.5px] -rotate-45")} />
              </button>
            </div>
          </div>
          {open && (
            <nav className="absolute top-full left-0 mt-2 w-full rounded-[2px] bg-background p-4 text-foreground md:left-1/2 md:w-80 md:-translate-x-1/2">
              <ul className="grid gap-1">
                {links.map((l) => (
                  <li key={l.href + l.label}>
                    <a href={l.href} className="block text-[2rem] leading-[1.1] font-[560] tracking-[-0.06em] transition-opacity duration-150 hover:opacity-60 motion-reduce:transition-none">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>

        <div className="pointer-events-auto absolute top-2.5 right-0 hidden text-background mix-blend-difference md:block">
          <ThirdwayArrowLink label={cta.label} href={cta.href} size="md" className="text-background [&>span:last-child]:bg-background [&>span:last-child]:text-foreground" />
        </div>
      </div>
    </header>
  );
}
