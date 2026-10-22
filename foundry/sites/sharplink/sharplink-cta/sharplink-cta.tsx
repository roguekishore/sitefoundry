import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { SharplinkButton } from "@foundry/sharplink-button";
import { SharplinkTextReveal } from "@foundry/sharplink-text-reveal";
import "./sharplink-cta.css";

export interface SharplinkCtaLink {
  /** the button text */
  label: string;
  /** where it goes */
  href: string;
}

export interface SharplinkCtaProps {
  /** a mark at the top left of the panel (an outline icon or logo mark) */
  mark?: ReactNode;
  /** the bright first line */
  title: string;
  /** the faded second line */
  subtitle?: string;
  /** the main button (solid, with the sliding arrow) */
  primary: SharplinkCtaLink;
  /** the tinted button next to it */
  secondary?: SharplinkCtaLink;
  /** a tall outline drawing on the right; a dotted frame when empty */
  media?: ReactNode;
  className?: string;
}

/** Black band with a framed panel: mark, two-tone statement, buttons and a revealed drawing. */
export function SharplinkCta({ mark, title, subtitle, primary, secondary, media, className }: SharplinkCtaProps) {
  const corner = "absolute size-1.5 bg-highlight";
  return (
    <section data-sharplink-tone="dark" className={cn("dark relative bg-background text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <div className="relative border border-dotted border-foreground/20 px-4 lg:px-7">
          <span aria-hidden className={cn(corner, "-top-[3.5px] -left-[3.5px]")} />
          <span aria-hidden className={cn(corner, "-top-[3.5px] -right-[3.5px]")} />
          <span aria-hidden className={cn(corner, "-bottom-[3.5px] -left-[3.5px]")} />
          <span aria-hidden className={cn(corner, "-right-[3.5px] -bottom-[3.5px]")} />

          <div className="relative isolate flex min-h-[41rem] flex-col overflow-clip bg-card p-4 lg:min-h-[37.5rem] lg:p-7">
            <div className="absolute inset-x-6 top-8 bottom-[12rem] -z-10 lg:inset-x-auto lg:top-7 lg:right-[8%] lg:bottom-7 lg:aspect-[0.73]">
              <div className="sharplink-cta-media h-full w-full [&>*]:h-full [&>*]:w-full [&>*]:object-contain">
                {media ?? <div className="border border-dotted border-foreground/20" />}
              </div>
              <span aria-hidden className="absolute top-1/2 left-1/2 grid size-8 -translate-1/2 place-items-center border border-highlight">
                <span className="size-3 bg-highlight" />
              </span>
            </div>

            {mark && <div className="sharplink-cta-mark hidden text-foreground/40 lg:block [&_svg]:size-[5.5rem]">{mark}</div>}

            <div className="mt-auto lg:my-auto">
              <SharplinkTextReveal
                text={title}
                className="font-display text-2xl leading-[1.4] font-medium tracking-[-0.01em] lg:text-[2.75rem] lg:leading-[1.23]"
              />
              {subtitle && (
                <SharplinkTextReveal
                  as="p"
                  text={subtitle}
                  range={[14, 48]}
                  className="font-display text-2xl leading-[1.4] font-medium tracking-[-0.01em] text-foreground/40 lg:text-[2.75rem] lg:leading-[1.23]"
                />
              )}
            </div>

            <div className="mt-4 flex flex-col gap-1 lg:mt-0 lg:flex-row">
              <SharplinkButton href={primary.href} fullWidth="mobile">
                {primary.label}
              </SharplinkButton>
              {secondary && (
                <SharplinkButton href={secondary.href} variant="tint" fullWidth="mobile">
                  {secondary.label}
                </SharplinkButton>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
