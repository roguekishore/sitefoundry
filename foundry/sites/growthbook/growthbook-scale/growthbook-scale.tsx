import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { GrowthbookButton } from "@foundry/growthbook-button";
import { GrowthbookRail } from "@foundry/growthbook-rail";
import "./growthbook-scale.css";

export interface GrowthbookScalePin {
  /** chip text, e.g. "4x tests" */
  label: string;
  /** small icon inside the round marker (lucide, 16px) */
  icon?: ReactNode;
  /** violet (primary) or teal (highlight) */
  tone?: "primary" | "highlight";
}

export interface GrowthbookScaleProps {
  /** the heading; each string starts a new line */
  title: string[];
  body: string;
  cta?: { label: string; href: string };
  /** two pins: the first sits top-right, the second bottom-right */
  pins: [GrowthbookScalePin, GrowthbookScalePin];
  /** the chart illustration (svg/img), filling the chart field; a faint wash when empty */
  media?: ReactNode;
  className?: string;
}

export function GrowthbookScale({ title, body, cta, pins, media, className }: GrowthbookScaleProps) {
  return (
    <section className={cn("bg-background text-foreground", className)}>
      <div className="mx-auto max-w-[calc(var(--page-width)+var(--page-gutter)*4)] px-gutter md:px-[calc(var(--page-gutter)*2)]">
        <div className="relative grid gap-12 border-l border-border pt-4 pb-16 lg:grid-cols-2 lg:gap-10 lg:pt-14 lg:pb-32">
          <GrowthbookRail />
          <div className="pl-4 lg:pl-9">
            <h2 className="font-display text-4xl leading-[1.25] font-normal lg:text-[3.5rem] lg:leading-[1.2]">
              {title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-8 max-w-[33.75rem] text-sm leading-[1.65] text-foreground/85 lg:mt-12 lg:text-base">{body}</p>
            {cta && (
              <GrowthbookButton href={cta.href} arrow blockOnMobile className="mt-10 lg:mt-12">
                {cta.label}
              </GrowthbookButton>
            )}
          </div>

          {/* the chart field: five guide lines, the illustration, two pins */}
          <div className="relative h-[24rem] lg:mt-10 lg:mr-14 lg:ml-[5.5rem] lg:h-[34rem]">
            <div aria-hidden className="absolute inset-x-[8%] top-[10%] bottom-[16%] flex justify-between">
              {[0, 1, 2, 3, 4].map((i) => (
                <span key={i} className="w-px bg-border/70" />
              ))}
            </div>
            <div className="absolute inset-x-[8%] top-[10%] bottom-[16%] [&>*]:size-full">
              {media ?? <div className="bg-linear-to-t from-muted/80 to-transparent" />}
            </div>
            {pins.map((p, i) => (
              <div
                key={p.label}
                className={cn(
                  "growthbook-scale-pin absolute right-0 flex items-center gap-4 lg:gap-6",
                  i === 0 ? "top-[3%]" : "bottom-[10%]",
                )}
              >
                <span className="rounded-sm bg-card px-3 py-2 text-xs text-card-foreground lg:px-4 lg:py-2.5 lg:text-sm">{p.label}</span>
                <span className="relative grid size-8 place-items-center lg:size-12">
                  <span
                    aria-hidden
                    className={cn(
                      "growthbook-scale-halo absolute -inset-4 rounded-full blur-md",
                      p.tone === "highlight" ? "bg-highlight/50" : "bg-primary/45",
                    )}
                  />
                  <span
                    className={cn(
                      "relative grid size-full place-items-center rounded-full text-primary-foreground ring-4 [&_svg]:size-3.5 lg:[&_svg]:size-4",
                      p.tone === "highlight" ? "bg-highlight ring-highlight/30" : "bg-primary ring-primary/30",
                    )}
                  >
                    {p.icon}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
