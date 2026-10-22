import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { EightsleepButton } from "@foundry/eightsleep-button";
import { EightsleepMedia } from "@foundry/eightsleep-media";
import "./eightsleep-hub-tabs.css";

export interface EightsleepHubTab {
  /** the short claim: a big line on desktop, a tab on phones */
  label: ReactNode;
  /** the subhead shown while this claim is current */
  title: ReactNode;
  /** one or two sentences under the subhead */
  text: ReactNode;
  /** the photo or video for this claim */
  media?: ReactNode;
}

export interface EightsleepHubTabsProps {
  /** small mono line at the top, set in caps */
  eyebrow?: ReactNode;
  /** three to five claims */
  items: EightsleepHubTab[];
  /** the full-width black button */
  cta?: { label: ReactNode; href: string };
  /** seconds each claim stays before the next */
  interval?: number;
  className?: string;
}

function Ring({ active, interval, className }: { active: number; interval: number; className?: string }) {
  return (
    <svg key={active} viewBox="0 0 28 28" aria-hidden className={cn("size-7 -rotate-90", className)}>
      <circle cx="14" cy="14" r="12" fill="none" strokeWidth="1.5" className="stroke-foreground/15" />
      <circle
        cx="14"
        cy="14"
        r="12"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        className="eightsleep-hub-tabs-ring stroke-foreground"
        style={{ "--eightsleep-hub-time": `${interval}s` } as CSSProperties}
      />
    </svg>
  );
}

export function EightsleepHubTabs({ eyebrow, items, cta, interval = 6, className }: EightsleepHubTabsProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => setActive((a) => (a + 1) % items.length), interval * 1000);
    return () => window.clearTimeout(id);
  }, [active, interval, items.length]);

  const current = items[active];
  return (
    <section className={cn("bg-background pt-[60px] pb-[64px] text-foreground lg:py-[80px]", className)}>
      <div className="mx-auto grid max-w-page grid-cols-1 px-gutter lg:grid-cols-[minmax(0,426fr)_minmax(0,640fr)] lg:gap-x-[clamp(48px,10.8vw,155px)] lg:pr-[calc(64px+min(91px,6.3vw))] lg:pl-16">
        <div className="flex items-center justify-between lg:col-start-1 lg:row-start-1 lg:mt-[52px]">
          {eyebrow && <span className="font-mono text-[13px] tracking-[0.04em] uppercase">{eyebrow}</span>}
          <Ring active={active} interval={interval} className="lg:hidden" />
        </div>

        {/* phones: a tab row */}
        <div role="tablist" className="-mx-gutter mt-6 flex gap-6 overflow-x-auto px-gutter [scrollbar-width:none] lg:hidden">
          {items.map((item, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={cn(
                "shrink-0 border-b pb-2 text-[15px] font-medium whitespace-nowrap transition-colors duration-300",
                i === active ? "border-foreground text-foreground" : "border-transparent text-muted-foreground",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* desktop: the claims stacked large */}
        <ul className="mt-5 hidden lg:col-start-1 lg:row-start-2 lg:block">
          {items.map((item, i) => (
            <li key={i}>
              <button
                type="button"
                aria-pressed={i === active}
                onClick={() => setActive(i)}
                className={cn(
                  "text-start text-[44px] leading-[48px] tracking-[-0.01em] transition-colors duration-500",
                  i === active ? "text-foreground" : "text-foreground/18 hover:text-foreground/40",
                )}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        <Ring active={active} interval={interval} className="mt-6 hidden lg:col-start-1 lg:row-start-3 lg:block" />

        <div className="relative mt-8 aspect-[350/243] overflow-clip rounded-lg lg:col-start-2 lg:row-span-6 lg:row-start-1 lg:mt-0 lg:aspect-square lg:self-start lg:rounded-lg">
          {items.map((item, i) => (
            <EightsleepMedia
              key={i}
              media={item.media}
              className={cn("absolute inset-0 transition-opacity duration-500 motion-reduce:transition-none", i === active ? "opacity-100" : "opacity-0")}
            />
          ))}
        </div>

        <h3 className="mt-9 max-w-[17em] text-[22px] leading-[1.1] lg:col-start-1 lg:row-start-4 lg:mt-14 lg:text-[28px]">{current.title}</h3>
        <p className="mt-4 max-w-[25rem] text-[15px] leading-[1.35] text-muted-foreground lg:col-start-1 lg:row-start-5 lg:mt-5 lg:text-[18px] lg:leading-[1.4]">
          {current.text}
        </p>
        {cta && (
          <div className="mt-10 lg:col-start-1 lg:row-start-6 lg:mt-10">
            <EightsleepButton href={cta.href} block size="lg">
              {cta.label}
            </EightsleepButton>
          </div>
        )}
      </div>
    </section>
  );
}
