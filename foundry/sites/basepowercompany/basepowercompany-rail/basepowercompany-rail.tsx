import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { BasepowercompanyButton } from "@foundry/basepowercompany-button";
import { BasepowercompanyMedia } from "@foundry/basepowercompany-media";
import "./basepowercompany-rail.css";

export interface BasepowercompanyRailItem {
  /** a small line icon (lucide) before the title */
  icon: ReactNode;
  /** the short title, always shown */
  title: string;
  /** the text that opens while this item is the active one (may hold a <strong>) */
  body: ReactNode;
  /** the photo shown while this item is active */
  media?: ReactNode;
  /** describes the placeholder for screen readers */
  mediaLabel?: string;
}

export interface BasepowercompanyRailProps {
  /** the heading; wrap a phrase in BasepowercompanySwash to underline it */
  title: ReactNode;
  /** the points, told one at a time while the section is pinned (four reads best) */
  items: BasepowercompanyRailItem[];
  /** the lime button and the outline button under the list */
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  className?: string;
}

// Where item k opens and closes on the pinned stretch: evenly spaced, each change over 4%.
function ranges(k: number, n: number) {
  const at = (i: number) => (i * 100) / n;
  const open = k > 0 ? `contain ${at(k) - 2}% contain ${at(k) + 2}%` : "contain 0% contain 0%";
  const close = k < n - 1 ? `contain ${at(k + 1) - 2}% contain ${at(k + 1) + 2}%` : "contain 100% contain 100%";
  return { open, close, hasOpen: k > 0, hasClose: k < n - 1 };
}

function vars(k: number, n: number, kind: "desc" | "title" | "photo"): CSSProperties {
  const r = ranges(k, n);
  const names = (name: string) => `${r.hasOpen ? `bp-rail-${name}-open` : "none"}, ${r.hasClose ? `bp-rail-${name}-close` : "none"}`;
  return {
    ["--bp-range" as string]: `${r.open}, ${r.close}`,
    ["--bp-anim" as string]: names(kind),
    // the title's text size has its own pair (desktop only: phones keep one size)
    ...(kind === "title" ? { ["--bp-anim-size" as string]: names("size") } : {}),
  };
}

/*
 * Pinned while you scroll through it: a heading and a list of points on the left, a photo on
 * the right. An orange bar grows down the list; at each quarter the next point turns green,
 * grows and opens its text while the photo crossfades. CSS scroll timelines only; without
 * them (or with reduced motion) it is a plain section with every point open.
 */
export function BasepowercompanyRail({ title, items, primaryCta, secondaryCta, className }: BasepowercompanyRailProps) {
  const n = items.length;
  return (
    <section className={cn("bp-rail relative bg-background text-foreground", className)}>
      <div className="bp-rail-screen py-section">
        <div className="mx-auto grid w-full max-w-page gap-5 px-gutter pt-[3.3125rem] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.225fr)] lg:items-center lg:gap-x-18 lg:px-[calc(var(--page-gutter)+2.375rem)] lg:pt-[4.3125rem]">
          {/* photos: stacked, the first on top */}
          <div className="bp-rail-in relative aspect-[1.77] overflow-clip rounded-2xl lg:order-2 lg:aspect-[1.017]">
            {items.map((it, k) => (
              // the first item sits on top; later ones show as it fades
              <div key={k} className="bp-rail-photo absolute inset-0" style={{ zIndex: n - k, ...vars(k, n, "photo") }}>
                <BasepowercompanyMedia media={it.media} label={it.mediaLabel} className="size-full" />
              </div>
            ))}
          </div>

          <div className="lg:order-1">
            <h2 className="bp-rail-in font-display text-[2rem] leading-[1.2] font-bold tracking-[-0.025em] text-primary lg:text-[2.5rem]">{title}</h2>

            <ol className="bp-rail-in relative mt-4 pl-[3.4375rem] lg:mt-5">
              {/* the rail: a grey track and an orange fill that grows down it */}
              <span aria-hidden className="absolute inset-y-0 left-0 w-1.5 rounded-full bg-muted" />
              <span aria-hidden className="bp-rail-fill absolute inset-y-0 left-0 w-1.5 origin-top rounded-full bg-highlight" />
              {items.map((it, k) => (
                <li key={k} className={cn("relative", k < n - 1 && "pb-5 lg:pb-[4.75rem]")}>
                  <div className="bp-rail-title flex items-start text-primary" style={vars(k, n, "title")}>
                    <span aria-hidden className="absolute -left-9 flex h-[1.875rem] items-center [&_svg]:size-6 [&_svg]:stroke-[1.5] lg:h-[1.6875rem]">
                      {it.icon}
                    </span>
                    <h3 className="text-base leading-[1.4] lg:text-xl lg:leading-[1.35] font-bold tracking-normal">{it.title}</h3>
                  </div>
                  <div className="bp-rail-desc overflow-clip" style={vars(k, n, "desc")}>
                    <p className="pt-1.5 text-sm leading-[1.5] tracking-[-0.005em] text-foreground lg:text-base lg:leading-[1.4] [&_strong]:font-bold">{it.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            {(primaryCta || secondaryCta) && (
              <div className="bp-rail-in mt-4 flex flex-col gap-2.5 lg:mt-14 lg:flex-row lg:gap-8">
                {primaryCta && (
                  <BasepowercompanyButton href={primaryCta.href} className="w-full lg:w-auto">
                    {primaryCta.label}
                  </BasepowercompanyButton>
                )}
                {secondaryCta && (
                  <BasepowercompanyButton href={secondaryCta.href} variant="outline" className="w-full lg:w-auto">
                    {secondaryCta.label}
                  </BasepowercompanyButton>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
