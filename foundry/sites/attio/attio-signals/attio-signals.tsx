import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import { useReducedMotion } from "motion/react";
import { cn } from "@foundry/foundry-utils";
import { AttioBadge } from "@foundry/attio-badge";
import { AttioButton } from "@foundry/attio-button";
import { AttioHeading } from "@foundry/attio-heading";
import "./attio-signals.css";

export interface AttioSignalsTab {
  /** the tab's name */
  title: string;
  /** the line shown under the active tab */
  text: string;
  /** this tab's art; falls back to the block's media */
  media?: ReactNode;
}

export interface AttioSignalsProps {
  /** the small label over the heading */
  badge?: string;
  /** the heading: white lead… */
  lead: string;
  /** …and grey rest */
  rest?: string;
  /** the small outline button under the heading */
  action?: { label: string; href: string };
  /** three tabs that take turns */
  tabs: AttioSignalsTab[];
  /** seconds each tab stays before the next one takes over */
  seconds?: number;
  /** the big art on the right (695×808); empty shows a placeholder */
  media?: ReactNode;
  mediaLabel?: string;
  className?: string;
}

/**
 * A dark split band: on the left a badge, a two-tone heading and a small button over a
 * list of three tabs that take turns on a timer, the active one showing its line and a
 * progress rule that fills; on the right a tall art panel. On phones it all centres, the
 * three rules sit side by side and the active line goes under them.
 */
export function AttioSignals({ badge, lead, rest, action, tabs, seconds = 6, media, mediaLabel, className }: AttioSignalsProps) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  // advance to the next tab when the current one's time is up
  useEffect(() => {
    if (reduce || tabs.length < 2) return;
    const id = window.setTimeout(() => setActive((a) => (a + 1) % tabs.length), seconds * 1000);
    return () => window.clearTimeout(id);
  }, [active, reduce, seconds, tabs.length]);

  const art = tabs[active]?.media ?? media;
  const time = { "--attio-signals-time": `${seconds}s` } as CSSProperties;

  return (
    <section data-header-tone="dark" className={cn("dark bg-background text-foreground lg:px-gutter", className)}>
      <div className="mx-auto grid max-w-page border-b border-border lg:grid-cols-2 lg:border-x">
        <div className="flex flex-col items-center px-gutter pt-[5.5rem] text-center lg:items-start lg:border-r lg:border-border lg:px-[3.6875rem] lg:pt-[9.5rem] lg:pb-24 lg:text-left">
          {badge && <AttioBadge>{badge}</AttioBadge>}
          <AttioHeading lead={lead} rest={rest} className="mt-5 max-w-[29rem] lg:mt-6" />
          {action && (
            <AttioButton href={action.href} size="sm" arrow className="mt-8">
              {action.label}
            </AttioButton>
          )}

          {/* desktop: a vertical list; the active tab opens with its line and rule */}
          <div role="tablist" className="mt-auto hidden w-full max-w-[36.25rem] pt-36 lg:block">
            {tabs.map((t, i) => (
              <button
                key={t.title}
                type="button"
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={cn("block w-full text-left", i > 0 && "mt-6")}
              >
                <span className={cn("block text-lg font-medium tracking-[-0.01em] transition-colors duration-300", active === i ? "text-foreground" : "text-foreground/90 hover:text-foreground")}>
                  {t.title}
                </span>
                {active === i && (
                  <>
                    <span className="mt-3 block max-w-[15rem] text-base leading-[1.45] font-medium text-muted-foreground">{t.text}</span>
                    <span className="relative mt-6 mb-2 block h-px w-full overflow-clip bg-border">
                      <span key={active} style={time} className="attio-signals-fill absolute inset-0 bg-muted-foreground" />
                    </span>
                  </>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center px-6 pt-14 pb-6 lg:p-0">
          <div
            key={active}
            role="img"
            aria-label={mediaLabel}
            className="attio-signals-art aspect-square w-full max-w-[21.375rem] bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--glow)_14%,transparent),transparent)] lg:aspect-[695/808] lg:max-w-none [&>*]:size-full [&>img]:object-cover"
          >
            {art}
          </div>
        </div>

        {/* phones: three rules side by side, the active line centred under them */}
        <div className="px-gutter pb-24 lg:hidden">
          <div role="tablist" className="grid grid-cols-3 gap-1.5">
            {tabs.map((t, i) => (
              <button key={t.title} type="button" role="tab" aria-selected={active === i} aria-label={t.title} onClick={() => setActive(i)} className="py-2">
                <span className="relative block h-0.5 overflow-clip rounded-full bg-border">
                  {active === i && <span key={active} style={time} className="attio-signals-fill absolute inset-0 bg-muted-foreground" />}
                </span>
              </button>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-lg font-medium tracking-[-0.01em]">{tabs[active]?.title}</p>
            <p className="mx-auto mt-2 max-w-[15rem] text-base leading-[1.45] font-medium text-muted-foreground">{tabs[active]?.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
