import { useEffect, useId, useState } from "react";
import { cn } from "@foundry/foundry-utils";
import { HadrianButton } from "@foundry/hadrian-button";
import { HadrianWordmark } from "@foundry/hadrian-wordmark";

export interface HadrianClock {
  /** short place code, e.g. "OH" */
  code: string;
  /** the time shown before JavaScript runs, e.g. "06:14AM EDT" */
  time: string;
  /** IANA time zone; when given, the cell keeps itself current, e.g. "America/New_York" */
  timeZone?: string;
}

export interface HadrianHeaderLink {
  /** link text (shown uppercase) */
  label: string;
  /** where it goes */
  href: string;
}

export interface HadrianHeaderProps {
  /** the company name, set as the wordmark */
  brand: string;
  /** where the wordmark links (usually "/") */
  homeHref?: string;
  /** the centred strip of local times (hidden on phones) */
  clocks?: HadrianClock[];
  /** text of the menu toggle when closed, e.g. "Menu" */
  menuLabel: string;
  /** text of the menu toggle when open, e.g. "Close" */
  closeLabel: string;
  /** links in the menu panel */
  links: HadrianHeaderLink[];
  /** how far down (in window heights) the page must scroll before the bar slides away */
  hideAfter?: number;
  className?: string;
}

function formatTime(timeZone: string) {
  const parts = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone,
    timeZoneName: "short",
  }).formatToParts(new Date());
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  return `${get("hour")}:${get("minute")}${get("dayPeriod").toUpperCase()} ${get("timeZoneName")}`;
}

function Clock({ code, time, timeZone }: HadrianClock) {
  const [now, setNow] = useState(time);
  useEffect(() => {
    if (!timeZone) return;
    const tick = () => setNow(formatTime(timeZone));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, [timeZone]);
  return (
    <>
      <span className="px-2">{code}</span>
      <span className="px-2">{now}</span>
    </>
  );
}

/** Fixed bar with wordmark, local-time strip and a MENU box; hides while scrolling down. */
export function HadrianHeader({
  brand,
  homeHref = "/",
  clocks = [],
  menuLabel,
  closeLabel,
  links,
  hideAfter = 0.47,
  className,
}: HadrianHeaderProps) {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y > window.innerHeight * hideAfter && y > last) setHidden(true);
      else if (y < last) setHidden(false);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hideAfter]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-background text-foreground transition-[background-color,transform] duration-200 ease-in-out motion-reduce:transition-none",
        hidden && !open && "-translate-y-full",
        className,
      )}
    >
      <div className="mx-auto grid h-[4.75rem] max-w-page grid-cols-[1fr_auto] items-center px-gutter md:grid-cols-[1fr_auto_1fr] lg:h-[6.25rem]">
        <HadrianWordmark name={brand} href={homeHref} className="text-[1.875rem] lg:text-[2.5rem]" />
        {clocks.length > 0 && (
          <p className="hidden h-[1.625rem] items-center divide-x divide-foreground border border-foreground font-mono text-xs leading-[1.5] whitespace-nowrap uppercase md:flex [&>span]:flex [&>span]:h-full [&>span]:items-center">
            {clocks.map((c) => (
              <Clock key={c.code} {...c} />
            ))}
          </p>
        )}
        <HadrianButton
          label={open ? closeLabel : menuLabel}
          size="sm"
          onClick={() => setOpen((v) => !v)}
          expanded={open}
          controls={panelId}
          className="justify-self-end"
        />
      </div>
      <nav
        id={panelId}
        hidden={!open}
        className="border-t border-foreground bg-background"
      >
        <ul className="mx-auto flex max-w-page flex-col px-gutter py-6 lg:flex-row lg:gap-10 lg:py-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 font-mono text-base uppercase transition-colors duration-150 hover:text-primary lg:text-lg"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
