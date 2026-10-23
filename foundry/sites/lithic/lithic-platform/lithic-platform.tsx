import { useState, type CSSProperties, type ReactNode } from "react";
import { CircleCheck } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { LithicButton } from "@foundry/lithic-button";
import { LithicContours } from "@foundry/lithic-contours";
import { LithicPlaceholder } from "@foundry/lithic-placeholder";
import "./lithic-platform.css";

export interface LithicPlatformTab {
  /** the tab's name in the list */
  label: string;
  /** the pane's heading */
  title: string;
  /** the pane's paragraph */
  text: string;
  /** the checked bullet points */
  bullets: string[];
  /** the white pill under the bullets */
  link: { label: string; href: string };
  /** the visual in the middle. Three floating placeholders when empty */
  media?: ReactNode;
}

export interface LithicPlatformProps {
  /** the headline above the card */
  title: string;
  /** two to six tabs */
  tabs: LithicPlatformTab[];
  /** how long each tab shows before the next, in ms */
  interval?: number;
  /** accessible name of the tab list */
  tabsLabel: string;
  className?: string;
}

function Stack() {
  return (
    <div className="flex w-[12.75rem] flex-col items-center gap-2 lg:w-[20.8rem] lg:gap-[0.875rem]">
      <LithicPlaceholder tone="card" className="aspect-[259/139] w-[78%] rounded-[0.85rem] lg:rounded-[1.35rem]" />
      <LithicPlaceholder tone="card" className="aspect-[333/77] w-full rounded-[0.85rem] lg:rounded-[1.35rem]" />
      <LithicPlaceholder tone="card" className="aspect-[259/103] w-[78%] rounded-[0.85rem] lg:rounded-[1.35rem]" />
    </div>
  );
}

/** Self-advancing product tabs on a lavender card, with a progress ring. */
export function LithicPlatform({ title, tabs, interval = 6000, tabsLabel, className }: LithicPlatformProps) {
  const [active, setActive] = useState(0);
  const tab = tabs[active] ?? tabs[0];
  const next = () => setActive((i) => (i + 1) % tabs.length);

  const tabList = (
    <div role="tablist" aria-label={tabsLabel} className="grid grid-cols-2 gap-x-6 gap-y-4 lg:flex lg:flex-col lg:items-end lg:gap-[1.15rem]">
      {tabs.map((t, i) => (
        <button
          key={t.label}
          type="button"
          role="tab"
          aria-selected={i === active}
          onClick={() => setActive(i)}
          className={cn(
            "w-fit text-left text-sm/[1.2] font-semibold tracking-[-0.01em] transition-colors duration-200 lg:text-right lg:text-2xl/[1.2] lg:tracking-[-0.02em] motion-reduce:transition-none",
            i === active ? "text-accent-foreground" : "text-accent-foreground/45 hover:text-accent-foreground/70",
          )}
        >
          {t.label}
        </button>
      ))}
    </div>
  );

  return (
    <section className={cn("bg-background px-gutter pt-12 pb-[4.5rem] text-foreground lg:pt-[4.6rem] lg:pb-[7.4rem]", className)}>
      <h2 className="mx-auto max-w-[20rem] text-center font-display text-2xl/[1.2] font-semibold tracking-[-0.02em] sm:max-w-none lg:text-[2rem]/[1.2]">{title}</h2>
      <div
        className="relative isolate mx-auto mt-6 grid max-w-[74rem] overflow-clip rounded-lg bg-accent px-6 pt-8 pb-14 lg:mt-[2.35rem] lg:h-[31.25rem] lg:grid-cols-[22rem_1fr_auto] lg:items-center lg:gap-10 lg:px-16 lg:py-0"
        style={{ "--lithic-platform-interval": `${interval}ms` } as CSSProperties}
      >
        <LithicContours shape="ellipse" gap={14} at="50% 50%" className="-z-10 text-accent-foreground/15 max-lg:top-[45%] max-lg:left-[60%] lg:inset-x-[28%] lg:-inset-y-[10%]" />
        <div className="lg:order-3">{tabList}</div>
        <div key={`text-${active}`} role="tabpanel" className="lithic-platform-pane mt-10 lg:order-1 lg:mt-0">
          <h3 className="font-display text-xl/[1.2] font-semibold tracking-[-0.02em] lg:text-2xl/[1.2]">{tab.title}</h3>
          <p className="mt-6 max-w-[22rem] text-sm/[1.45] lg:mt-[1.4rem] lg:text-base/[1.4]">{tab.text}</p>
          <ul className="mt-8 flex flex-col gap-3 lg:mt-[1.9rem] lg:gap-[0.6rem]">
            {tab.bullets.map((b) => (
              <li key={b} className="flex items-center gap-2.5 text-base font-semibold text-accent-foreground lg:text-sm">
                <CircleCheck aria-hidden className="size-5 shrink-0 fill-accent-foreground stroke-accent lg:size-[1.125rem]" strokeWidth={2} />
                {b}
              </li>
            ))}
          </ul>
          <LithicButton href={tab.link.href} variant="light" className="mt-10 w-[9.25rem] lg:mt-[2.6rem]">
            {tab.link.label}
          </LithicButton>
        </div>
        <div key={`media-${active}`} className="lithic-platform-pane mt-16 flex justify-center lg:order-2 lg:mt-0">
          {tab.media ?? <Stack />}
        </div>
        <svg aria-hidden viewBox="0 0 36 36" className="absolute right-5 bottom-8 size-7 -rotate-90 text-accent-foreground lg:right-[2.6rem] lg:bottom-[2.6rem]">
          <circle cx="18" cy="18" r="15" fill="none" stroke="currentColor" strokeOpacity={0.15} strokeWidth={4} />
          <circle
            key={`ring-${active}`}
            cx="18"
            cy="18"
            r="15"
            fill="none"
            stroke="currentColor"
            strokeWidth={4}
            strokeLinecap="round"
            pathLength={100}
            className="lithic-platform-ring"
            onAnimationEnd={next}
          />
        </svg>
      </div>
    </section>
  );
}
