import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { SharplinkLabel } from "@foundry/sharplink-label";
import { SharplinkRule } from "@foundry/sharplink-rule";
import { SharplinkTextReveal } from "@foundry/sharplink-text-reveal";
import "./sharplink-pillars.css";

export interface SharplinkPillar {
  /** the narrow label over the title, e.g. "Stewardship" */
  label: string;
  /** the title; "\n" breaks the line */
  title: string;
  /** the short paragraph */
  body: string;
  /** a tall render or image for this item (about 0.73 wide per tall); a placeholder when empty */
  media?: ReactNode;
}

export interface SharplinkPillarsProps {
  /** the small label over the section title */
  label: string;
  /** the section title; "\n" breaks the line */
  title: string;
  /** the principles, in order */
  items: SharplinkPillar[];
  /** the index of the first item on the dark band (items before it stay on the light paper) */
  darkFrom?: number;
  className?: string;
}

const placeholder = (
  <div className="border border-dotted border-foreground/20 bg-[radial-gradient(60%_50%_at_50%_45%,color-mix(in_oklab,var(--glow)_22%,transparent),transparent)]" />
);

/** Principles list beside a pinned media slot, running from light paper into a dark band. */
export function SharplinkPillars({ label, title, items, darkFrom = 1, className }: SharplinkPillarsProps) {
  const name = (i: number) => `--sharplink-pillar-${i}`;
  const sectionStyle = {
    "--sharplink-pillars-scope": items.map((_, i) => name(i)).join(", "),
    "--sl-paper": "var(--background)",
    "--sl-pale": "var(--accent)",
  } as CSSProperties;

  const item = (pillar: SharplinkPillar, i: number) => (
    <li
      key={pillar.label + i}
      className="sharplink-pillars-item py-10 lg:min-h-[12.8rem] lg:py-9"
      style={{ "--sharplink-pillars-name": name(i) } as CSSProperties}
    >
      <div className="sharplink-pillars-dim grid gap-y-5 lg:grid-cols-[minmax(0,22rem)_minmax(0,20rem)] lg:gap-x-[1.5rem]">
        <SharplinkLabel tone="muted" className="lg:col-span-2">
          {pillar.label}
        </SharplinkLabel>
        <SharplinkTextReveal
          as="h3"
          mode="dim"
          text={pillar.title}
          range={[15, 45]}
          className="font-display text-[2rem] leading-[1.16] font-medium tracking-[-0.01em]"
        />
        <p className="max-w-[21rem] text-base leading-[1.1] lg:pt-1">{pillar.body}</p>
      </div>
      <div className="mx-auto mt-10 aspect-[0.73] w-full max-w-[22rem] lg:hidden [&>*]:h-full [&>*]:w-full [&>*]:object-contain">
        {pillar.media ?? placeholder}
      </div>
    </li>
  );

  return (
    <section className={cn("sharplink-pillars relative isolate overflow-clip text-foreground", className)} style={sectionStyle}>
      <div className="mx-auto grid max-w-page px-gutter lg:grid-cols-[minmax(0,1fr)_35rem] lg:gap-x-gutter">
        <div className="pb-28 lg:pb-[12.5rem]">
          <SharplinkRule />
          <SharplinkLabel className="mt-7">{label}</SharplinkLabel>
          <SharplinkTextReveal
            text={title}
            className="mt-5 font-display text-[2.75rem] leading-[1.15] font-medium tracking-[-0.01em] lg:mt-6 lg:max-w-[40rem] lg:text-[4.25rem] lg:leading-[1.06] lg:tracking-[-0.02em]"
          />
          <ul className="mt-20 border-t border-dotted border-foreground/15 lg:mt-[6.5rem]">{items.slice(0, darkFrom).map(item)}</ul>
          {darkFrom < items.length && (
            <div data-sharplink-tone="dark" className="dark relative text-foreground">
              <div
                aria-hidden
                className="sharplink-pillars-band absolute -inset-x-[100vw] -top-[14rem] -bottom-[16rem] -z-10 bg-[linear-gradient(to_bottom,transparent_0%,var(--sl-pale)_12%,color-mix(in_oklab,var(--glow)_75%,var(--sl-pale))_22%,color-mix(in_oklab,var(--glow)_55%,var(--background))_48%,var(--background)_78%)]"
              />
              <ul>{items.slice(darkFrom).map((p, i) => item(p, i + darkFrom))}</ul>
            </div>
          )}
        </div>

        <div className="relative hidden lg:block">
          <div className="sticky top-[4.5rem] grid aspect-[0.73] max-h-[calc(100svh-5.5rem)] w-full">
            {items.map((pillar, i) => (
              <div
                key={pillar.label + i}
                className="sharplink-pillars-media [grid-area:1/1] [&>*]:h-full [&>*]:w-full [&>*]:object-contain"
                style={{ "--sharplink-pillars-name": name(i) } as CSSProperties}
              >
                {pillar.media ?? placeholder}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
