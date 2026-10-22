import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { SharplinkButton } from "@foundry/sharplink-button";
import { SharplinkLabel } from "@foundry/sharplink-label";
import { SharplinkRule } from "@foundry/sharplink-rule";
import { SharplinkTextReveal } from "@foundry/sharplink-text-reveal";
import "./sharplink-thesis.css";

export interface SharplinkThesisPoint {
  /** a small line icon or illustration (about 90px); a dotted square when empty */
  icon?: ReactNode;
  /** the point's title */
  title: string;
  /** the point's text */
  body: string;
}

export interface SharplinkThesisProps {
  /** the small label at the top */
  label: string;
  /** the tinted button across from the label */
  cta?: { label: string; href: string };
  /** the long statement whose words light up as you scroll */
  statement: string;
  /** the points listed under the blue arc */
  points: SharplinkThesisPoint[];
  /** a large render or image beside the points (wide screens); a faint placeholder when empty */
  media?: ReactNode;
  className?: string;
}

/** Pinned statement on black opening into a blue arc, then a list of points on paper. */
export function SharplinkThesis({ label, cta, statement, points, media, className }: SharplinkThesisProps) {
  const style = { "--sl-pale": "var(--accent)" } as CSSProperties;
  return (
    <section className={cn("relative isolate overflow-clip text-foreground", className)} style={style}>
      <div data-sharplink-tone="dark" className="sharplink-thesis-stage dark relative h-[165svh] text-foreground lg:h-[150svh]">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,var(--background)_78%,transparent)] bg-[radial-gradient(140%_80%_at_50%_100%,transparent_18%,color-mix(in_oklab,var(--sl-pale)_85%,transparent)_34%,var(--glow)_52%,color-mix(in_oklab,var(--glow)_40%,var(--background))_70%,var(--background)_90%)]"
        />
        <div aria-hidden data-sharplink-tone="light" className="absolute inset-x-0 bottom-0 h-[22%]" />
        <div className="sticky top-0 min-h-svh">
          <div className="sharplink-thesis-pinned mx-auto max-w-page px-gutter pt-[8rem] lg:pt-[10rem]">
            <SharplinkRule className="lg:border-transparent" />
            <div className="mt-7 flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
              <SharplinkLabel>{label}</SharplinkLabel>
              {cta && (
                <SharplinkButton href={cta.href} variant="tint" arrow>
                  {cta.label}
                </SharplinkButton>
              )}
            </div>
            <SharplinkTextReveal
              as="p"
              mode="words"
              text={statement}
              timeline="--sharplink-thesis"
              range={[22, 50]}
              className="mt-8 max-w-[63rem] font-display text-2xl leading-[1.4] font-medium tracking-[-0.01em] lg:mt-6 lg:text-[2.75rem] lg:leading-[1.23]"
            />
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-page px-gutter pb-24 lg:pb-[8.5rem]">
        <div className="absolute top-0 right-0 hidden h-full max-h-[55rem] w-[42%] lg:block [&>*]:h-full [&>*]:w-full [&>*]:object-contain">
          {media ?? <div className="bg-[radial-gradient(55%_45%_at_60%_50%,color-mix(in_oklab,var(--foreground)_8%,transparent),transparent)]" />}
        </div>
        <ul className="relative lg:max-w-[37.5rem]">
          {points.map((point) => (
            <li
              key={point.title}
              className="sharplink-thesis-point grid gap-6 border-t border-dotted border-foreground/20 py-8 lg:grid-cols-[5.625rem_1fr] lg:gap-7 lg:py-9"
            >
              <div className="size-[3.75rem] text-foreground/50 lg:size-[5.625rem] [&_svg]:size-full">
                {point.icon ?? <div className="size-full border border-dotted border-foreground/30" />}
              </div>
              <div>
                <h3 className="sharplink-thesis-point-title text-base leading-[1.35] font-medium">{point.title}</h3>
                <p className="mt-3 text-[1.0625rem] leading-[1.35] text-foreground/60 lg:mt-4">{point.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
