import { Fragment, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { RailwayPanel } from "@foundry/railway-panel";
import "./railway-feature.css";

export interface RailwayFeaturePoint {
  /** a small lucide icon, tinted with the section's tone */
  icon?: ReactNode;
  title: string;
  text: string;
}

export interface RailwayFeatureProps {
  /** the small pill above the title, e.g. "Build and launch" */
  badge: string;
  /** the serif title, one string per desktop line (phones let it wrap freely) */
  title: string[];
  /** the paragraph under the title */
  lead: string;
  /** the "learn more" link after the paragraph */
  link?: { label: string; href: string };
  /** three short points with icons */
  points: RailwayFeaturePoint[];
  /** the "alternative to" row: a label and the names of tools this replaces */
  alternatives?: { label: string; icon?: ReactNode; names: string[] };
  /** the product shot (image or video); a placeholder of the same size and frame when empty */
  media?: ReactNode;
  /**
   * stacked: text, then a wide media below, then the points in three columns ·
   * split: text and a points list on the left, a tall media card on the right
   */
  layout?: "stacked" | "split";
  /** stacked media frame: window (near-black, 1160×824) or card (raised, 1160×600) */
  frame?: "window" | "card";
  /** put the section in a framed, tinted panel (and which tint) */
  panel?: "none" | "chart-5" | "chart-2" | "highlight";
  /** accent colour of the badge, icons and rail */
  tone?: "neutral" | "chart-2" | "chart-3";
  /** a full-width hairline above the section */
  rule?: boolean;
  /** show the rail (track, pulsing station, a car sliding down with the scroll) on desktops */
  rail?: boolean;
  className?: string;
}

const tones = {
  neutral: {
    badge: "bg-foreground/10 text-foreground",
    icon: "text-foreground",
    track: "bg-foreground/10",
    ring: "border-foreground/80",
    glow: "from-foreground/10",
  },
  "chart-2": {
    badge: "bg-chart-2/10 text-chart-2",
    icon: "text-chart-2",
    track: "bg-chart-2/20",
    ring: "border-chart-2",
    glow: "from-chart-2/25",
  },
  "chart-3": {
    badge: "bg-chart-3/15 text-chart-3",
    icon: "text-chart-3",
    track: "bg-chart-3/20",
    ring: "border-chart-3",
    glow: "from-chart-3/20",
  },
};

/**
 * One feature section of a long product page: badge, two-line serif title, lead and link,
 * a product shot, three points and an "alternative to" row. On desktops a rail runs down
 * the left edge with a pulsing station beside the badge and a car that slides down the
 * track as the section scrolls past. Stack several, alternating framed and open ones.
 */
export function RailwayFeature({
  badge,
  title,
  lead,
  link,
  points,
  alternatives,
  media,
  layout = "stacked",
  frame = "window",
  panel = "none",
  tone = "neutral",
  rule = false,
  rail = true,
  className,
}: RailwayFeatureProps) {
  const t = tones[tone];
  const framed = panel !== "none";
  const split = layout === "split";

  const text = (
    <div>
      <span className={cn("inline-flex h-8 items-center rounded-md px-3 text-sm font-medium", t.badge)}>{badge}</span>
      <h2 className="mt-9 font-display text-[2.25rem] leading-[3rem] tracking-[-0.01em]">
        {title.map((line, i) => (
          <Fragment key={i}>
            {i > 0 && (
              <>
                {" "}
                <br className="max-lg:hidden" />
              </>
            )}
            {line}
          </Fragment>
        ))}
      </h2>
      <p className={cn("mt-2 max-w-[33.75rem] text-lg leading-[1.6] text-muted-foreground")}>
        {lead}
        {link && (
          <>
            {" "}
            <a
              href={link.href}
              className={cn(
                "font-medium text-foreground transition-opacity duration-150 hover:opacity-80 motion-reduce:transition-none",
                split && "mt-1 block w-fit",
              )}
            >
              {link.label}
            </a>
          </>
        )}
      </p>
    </div>
  );

  const alternativesRow = alternatives && (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-6">
      <span className="flex items-center gap-4 text-base font-medium">
        <span className={cn("[&_svg]:size-5", t.icon)}>{alternatives.icon}</span>
        {alternatives.label}
      </span>
      <ul className="flex flex-wrap gap-x-5 gap-y-1 text-[0.9375rem] font-semibold tracking-[-0.01em] text-foreground/60">
        {alternatives.names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );

  const mediaSlot = split ? (
    <div className="-mx-3 mt-16 lg:mx-0 lg:mt-8">
      <div className={cn("aspect-[464/509] overflow-clip rounded-xl border border-border bg-linear-to-t to-foreground/[0.03] to-60%", t.glow)}>
        {media}
      </div>
    </div>
  ) : (
    <div
      className={cn(
        "mt-12 overflow-clip border border-border lg:mt-20",
        frame === "window" ? "aspect-[1160/824] rounded-lg bg-muted" : "-mx-3 aspect-[1160/600] rounded-2xl bg-card lg:mx-0",
        framed && frame === "card" && "mx-0",
      )}
    >
      {media}
    </div>
  );

  const body = (
    <div
      className={cn(
        "railway-feature relative mx-auto max-w-page",
        framed ? "px-8 pt-16 pb-16 lg:px-8 lg:pt-32 lg:pb-32 xl:px-0" : "px-3 pt-8 pb-20 lg:px-4 lg:pt-28 lg:pb-28 xl:px-0",
      )}
    >
      {rail && (
        <div className="railway-feature-rail pointer-events-none absolute inset-y-0 left-[1.3125rem] hidden w-[1.125rem] overflow-clip lg:block" aria-hidden>
          <div className={cn("absolute inset-y-0 left-1/2 w-1.5 -translate-x-1/2", t.track)} />
          <div className="railway-feature-car absolute inset-0">
            <div className={cn("absolute inset-x-0 top-0 h-[6.875rem] rounded-full border-[1.5px] bg-background", t.ring)} />
          </div>
        </div>
      )}
      {rail && (
        <div
          className={cn(
            "pointer-events-none absolute left-[1.875rem] hidden -translate-x-1/2 -translate-y-1/2 lg:block",
            framed ? "top-[9rem]" : "top-[8rem]",
          )}
          aria-hidden
        >
          <span className="railway-feature-pulse absolute top-1/2 left-1/2 -mt-[1.625rem] -ml-[1.625rem] size-[3.25rem] rounded-full bg-foreground/5" />
          <span className={cn("relative block size-[1.125rem] rounded-full border-2 bg-background", t.ring)} />
        </div>
      )}

      {split ? (
        <div className="lg:grid lg:grid-cols-[minmax(0,31.25rem)_29rem] lg:justify-between lg:pl-[7.5rem]">
          <div>
            {text}
            <ul className="mt-16 lg:mt-12">
              {points.map((point) => (
                <li key={point.title} className="flex gap-4 border-t border-border py-[1.375rem]">
                  <span className={cn("mt-3 shrink-0 [&_svg]:size-5", t.icon)}>{point.icon}</span>
                  <span>
                    <span className="block text-base font-medium">{point.title}</span>
                    <span className="block text-base leading-6 text-muted-foreground">{point.text}</span>
                  </span>
                </li>
              ))}
            </ul>
            {alternativesRow && <div className="border-t border-border pt-6">{alternativesRow}</div>}
          </div>
          {mediaSlot}
        </div>
      ) : (
        <>
          <div className="lg:pl-[7.5rem]">{text}</div>
          {mediaSlot}
          <div className="lg:pl-[7.5rem]">
            <ul className="mt-12 grid gap-y-14 lg:mt-[5.5rem] lg:grid-cols-3 lg:gap-x-8">
              {points.map((point) => (
                <li key={point.title} className="max-w-[17rem] lg:max-w-none">
                  <span className={cn("block [&_svg]:size-5", t.icon)}>{point.icon}</span>
                  <span className="mt-5 block text-base font-semibold">{point.title}</span>
                  <span className="mt-1 block text-base leading-6 text-muted-foreground">{point.text}</span>
                </li>
              ))}
            </ul>
            {alternativesRow && <div className="mt-8 border-t border-border pt-8 lg:mt-16">{alternativesRow}</div>}
          </div>
        </>
      )}
    </div>
  );

  return (
    <section className={cn("text-foreground", framed ? "px-gutter pb-4" : "px-gutter", rule && "border-t border-border", className)}>
      {framed ? <RailwayPanel tint={panel}>{body}</RailwayPanel> : body}
    </section>
  );
}
