import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { PrenuvoArc } from "@foundry/prenuvo-arc";
import { PrenuvoButton } from "@foundry/prenuvo-button";
import { PrenuvoReveal } from "@foundry/prenuvo-reveal";

type Tone = "green" | "blue" | "lilac";

export interface PrenuvoPanel {
  /** the panel title */
  title: string;
  /** the lead under it */
  body: ReactNode;
  /** an optional list under the lead: an icon (lucide) and a short label */
  features?: { icon: ReactNode; label: string }[];
  /** the pills: usually an outline "read more" and a gradient booking pill */
  actions: { label: string; href: string; variant?: "gradient" | "ocean" | "outline" }[];
  /** the dot and icon colour */
  tone?: Tone;
  /** placeholder backdrop when there is no media: deep teal, sky or crimson */
  backdrop?: "teal" | "sky" | "crimson";
  /** the backdrop that fills the panel (photo or video, cover); empty shows a tone gradient */
  media?: ReactNode;
  /** show a tall figure on the right on desktop (590×870, contain) */
  figureSlot?: boolean;
  /** what fills the figure slot; empty shows a placeholder */
  figure?: ReactNode;
}

export interface PrenuvoPanelsProps {
  /** the panels, in order; each pins and the next slides over it */
  panels: PrenuvoPanel[];
  /** an id for in-page links */
  id?: string;
  className?: string;
}

const dots: Record<Tone, string> = {
  green: "bg-chart-1 shadow-[0_0_12px_var(--chart-1)]",
  blue: "bg-chart-2 shadow-[0_0_12px_var(--chart-2)]",
  lilac: "bg-chart-3 shadow-[0_0_12px_var(--chart-3)]",
};
const icons: Record<Tone, string> = { green: "text-chart-1", blue: "text-chart-2", lilac: "text-chart-3" };
const tones: Tone[] = ["green", "blue", "lilac"];

const backdrops = {
  teal: "bg-[linear-gradient(to_bottom,var(--card),var(--background)_92%)]",
  sky: "bg-[linear-gradient(to_bottom,color-mix(in_oklab,var(--glow)_45%,var(--muted)),color-mix(in_oklab,var(--glow)_15%,var(--muted)))]",
  crimson: "bg-[linear-gradient(to_bottom,var(--chart-5),color-mix(in_oklab,var(--chart-5)_70%,var(--background)))]",
};

export function PrenuvoPanels({ panels, id, className }: PrenuvoPanelsProps) {
  return (
    <section id={id} className={cn("dark relative z-10 text-foreground", className)}>
      {panels.map((p, i) => {
        const tone = p.tone ?? tones[i % 3];
        return (
          <PrenuvoArc
            as="article"
            key={p.title}
            overlap={i === 0}
            className={cn("sticky top-[-12svh] h-[120svh] overflow-clip bg-background", i > 0 && "mt-[30svh]")}
          >
            <div className="absolute inset-0 [&>*]:size-full [&>*]:object-cover">
              {p.media ?? (
                <div className={backdrops[p.backdrop ?? (["teal", "sky", "crimson"] as const)[i % 3]]}>
                  {/* the faint dot grid of the original's teal panel */}
                  <div className="size-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--foreground)_9%,transparent)_1px,transparent_1.5px)] bg-[length:14px_14px]" />
                </div>
              )}
            </div>
            {/* a soft left scrim keeps the copy legible over photos */}
            <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_oklab,var(--background)_35%,transparent),transparent_55%)]" />

            {p.figureSlot && (
              <div className="absolute top-[7svh] right-[8%] hidden aspect-[590/870] h-[87svh] lg:block [&>*]:size-full [&>*]:object-contain">
                {p.figure ?? <div className="rounded-2xl bg-foreground/5" />}
              </div>
            )}

            <div className="relative mx-auto h-full max-w-page px-gutter pt-[13rem] lg:px-12 lg:pt-[12.5rem]">
              <div className="relative pl-10 lg:pl-24">
                {/* the timeline: a hairline fading in and out, with the glowing dot at the title */}
                <span aria-hidden className="absolute top-[-8rem] bottom-[-3rem] left-4 w-px bg-[linear-gradient(to_bottom,transparent,color-mix(in_oklab,var(--foreground)_28%,transparent)_30%,color-mix(in_oklab,var(--foreground)_28%,transparent)_70%,transparent)] lg:left-8" />
                <span aria-hidden className={cn("absolute top-[0.85rem] left-[calc(1rem-5.5px)] size-3 rounded-full lg:left-[calc(2rem-5.5px)]", dots[tone])} />

                <PrenuvoReveal className="max-w-[30rem]">
                  <h2 className="font-display text-[2rem] leading-[1.2] font-semibold tracking-[-0.01em] text-balance lg:text-4xl">{p.title}</h2>
                  <p className="mt-6 text-base leading-normal lg:mt-7 lg:max-w-[27rem] lg:text-xl">{p.body}</p>

                  {p.features && p.features.length > 0 && (
                    <ul className="mt-8 flex flex-col gap-4 lg:mt-12 lg:gap-6">
                      {p.features.map((f) => (
                        <li key={f.label} className="flex items-start gap-3 font-display text-base leading-snug font-semibold lg:items-center lg:gap-4 lg:text-lg">
                          <span aria-hidden className={cn("mt-px flex size-7 shrink-0 items-center justify-center [&_svg]:size-6", icons[tone])}>
                            {f.icon}
                          </span>
                          {f.label}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-11 flex flex-wrap gap-4 lg:mt-12">
                    {p.actions.map((a) => (
                      <PrenuvoButton key={a.href} href={a.href} variant={a.variant ?? "gradient"} className={a.variant === "outline" ? "h-[2.875rem]" : undefined}>
                        {a.label}
                      </PrenuvoButton>
                    ))}
                  </div>
                </PrenuvoReveal>
              </div>
            </div>
          </PrenuvoArc>
        );
      })}
    </section>
  );
}
