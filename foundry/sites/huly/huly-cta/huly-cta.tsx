import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { HulyButton } from "@foundry/huly-button";
import { HulyHeading } from "@foundry/huly-heading";
import "./huly-cta.css";

export interface HulyCtaProps {
  title: string | string[];
  text?: string;
  /** the glowing pill */
  primary: { label: string; href: string };
  /** the dark outline pill, with an optional icon */
  secondary?: { label: string; href: string; icon?: ReactNode };
  /** mark set large and dim on the watch face */
  logo?: ReactNode;
  /** dark forces the dark colours (as on the original); inherit follows the page */
  tone?: "dark" | "inherit";
  className?: string;
}

// Ring-shaped masks: only the band between the two percentages of the radius shows.
const RING_ORANGE = "[mask-image:radial-gradient(closest-side,transparent_70%,black_71%,black_75%,transparent_76%)]";
const RING_BLUE = "[mask-image:radial-gradient(closest-side,transparent_79%,black_80%,black_83%,transparent_84%)]";
const TICKS = "[mask-image:radial-gradient(closest-side,transparent_88%,black_89%,black_95%,transparent_96%)]";

function Watch({ logo }: { logo?: ReactNode }) {
  return (
    <div aria-hidden className="relative aspect-square w-[13.5rem] lg:w-[24rem]">
      {/* crown */}
      <span className="absolute top-1/2 right-[-3.5%] h-[9%] w-[5%] -translate-y-1/2 rounded-sm bg-linear-to-r from-foreground/25 to-foreground/10" />
      {/* case */}
      <div className="absolute inset-0 rounded-full bg-linear-to-b from-foreground/20 via-foreground/5 to-foreground/15 p-[3.5%] shadow-[0_30px_80px_-20px_var(--background),0_0_0_1px_color-mix(in_oklab,var(--foreground)_10%,transparent)]">
        <div className="relative h-full w-full overflow-hidden rounded-full bg-background">
          {/* halftone dial, warm on the left and cool on the right */}
          <div className="absolute inset-0 bg-[radial-gradient(color-mix(in_oklab,var(--foreground)_16%,transparent)_0.7px,transparent_0.8px)] bg-size-[4px_4px] [mask-image:radial-gradient(closest-side,black_60%,transparent_75%)]" />
          <div className="absolute inset-0 bg-linear-to-r from-highlight/30 via-transparent to-glow/40" />
          {/* tick marks */}
          <div className={cn("absolute inset-0 rounded-full bg-[repeating-conic-gradient(color-mix(in_oklab,var(--foreground)_30%,transparent)_0_0.7deg,transparent_0.7deg_6deg)]", TICKS)} />
          {/* the mark */}
          <div className="absolute inset-[30%] text-foreground/12 [&_svg]:size-full">{logo}</div>

          {/* lit arcs: they sway slowly */}
          <div className="absolute inset-0 animate-[huly-sweep_7s_ease-in-out_infinite_alternate] motion-reduce:animate-none">
            <div className={cn("absolute inset-0 rounded-full bg-[conic-gradient(from_190deg,transparent_0deg,var(--highlight)_25deg,color-mix(in_oklab,var(--highlight)_70%,var(--foreground))_70deg,var(--highlight)_130deg,transparent_160deg)]", RING_ORANGE)} />
            <div className={cn("absolute inset-0 rounded-full bg-[conic-gradient(from_190deg,transparent_0deg,var(--highlight)_25deg,var(--highlight)_130deg,transparent_160deg)] blur-md", RING_ORANGE)} />
            <div className={cn("absolute inset-0 rounded-full bg-[conic-gradient(from_-20deg,transparent_0deg,var(--glow)_20deg,color-mix(in_oklab,var(--glow)_60%,var(--foreground))_80deg,var(--glow)_140deg,transparent_170deg)]", RING_BLUE)} />
            <div className={cn("absolute inset-0 rounded-full bg-[conic-gradient(from_-20deg,transparent_0deg,var(--glow)_20deg,var(--glow)_140deg,transparent_170deg)] blur-md", RING_BLUE)} />
          </div>

          {/* hands */}
          <span className="absolute bottom-1/2 left-1/2 h-[30%] w-[2.5%] origin-bottom -translate-x-1/2 -rotate-[52deg] rounded-full bg-linear-to-t from-foreground/40 to-highlight shadow-[0_0_10px_var(--highlight)]" />
          <span className="absolute bottom-1/2 left-1/2 h-[38%] w-[1.6%] origin-bottom -translate-x-1/2 rotate-90 rounded-full bg-linear-to-t from-foreground/50 to-foreground shadow-[0_0_10px_var(--glow)]" />
          <span className="absolute inset-0 animate-[huly-tick_60s_linear_infinite] motion-reduce:animate-none">
            <span className="absolute bottom-[38%] left-1/2 h-[54%] w-px origin-[50%_77%] -translate-x-1/2 rotate-[160deg] bg-foreground/50" />
          </span>
          <span className="absolute top-1/2 left-1/2 size-[4%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/80 ring-2 ring-background" />
        </div>
      </div>
    </div>
  );
}

export function HulyCta({ title, text, primary, secondary, logo, tone = "dark", className }: HulyCtaProps) {
  return (
    <section className={cn("relative isolate overflow-hidden bg-background text-foreground", tone === "dark" && "dark", className)}>
      {/* light streaks: warm from the left into the watch, cool out of it toward the lower right */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[9%] left-[-30%] h-20 w-[24rem] origin-right rotate-[24deg] bg-linear-to-r from-transparent via-highlight/50 to-highlight/80 [clip-path:polygon(0_0,100%_35%,100%_65%,0_100%)] [mask-image:linear-gradient(to_right,transparent,black_55%)] lg:top-[26%] lg:left-[-6%] lg:h-36 lg:w-[30rem]" />
        <div className="absolute top-[9%] left-[-30%] h-20 w-[24rem] origin-right rotate-[24deg] bg-[radial-gradient(var(--highlight)_1px,transparent_1.2px)] bg-size-[4px_4px] opacity-60 [clip-path:polygon(0_0,100%_35%,100%_65%,0_100%)] [mask-image:linear-gradient(to_right,transparent,black_55%)] lg:top-[26%] lg:left-[-6%] lg:h-36 lg:w-[30rem]" />
        <div className="absolute top-[30%] left-[45%] h-28 w-[22rem] origin-left rotate-[24deg] bg-linear-to-r from-glow/80 via-glow/40 to-transparent [clip-path:polygon(0_35%,100%_0,100%_100%,0_65%)] [mask-image:linear-gradient(to_right,black_20%,transparent_90%)] lg:top-[64%] lg:left-[30%] lg:h-56 lg:w-[38rem]" />
        <div className="absolute top-[30%] left-[45%] h-28 w-[22rem] origin-left rotate-[24deg] bg-[radial-gradient(var(--glow)_1px,transparent_1.2px)] bg-size-[4px_4px] opacity-70 [clip-path:polygon(0_35%,100%_0,100%_100%,0_65%)] [mask-image:linear-gradient(to_right,black_20%,transparent_90%)] lg:top-[64%] lg:left-[30%] lg:h-56 lg:w-[38rem]" />
        <div className="absolute top-[4%] left-1/2 size-[22rem] -translate-x-1/2 rounded-full bg-foreground/4 blur-3xl lg:top-[12%] lg:left-[25%] lg:size-[36rem]" />
      </div>

      <div className="mx-auto grid max-w-page items-center gap-8 px-gutter pt-12 pb-14 lg:grid-cols-[34rem_1fr] lg:gap-0 lg:py-36">
        <div className="flex justify-center lg:justify-start lg:pl-16">
          <Watch logo={logo} />
        </div>
        <div className="text-center lg:text-left">
          <HulyHeading title={title} text={text} weight="medium" gradient textClassName="mx-auto max-w-[22rem] text-foreground/90 lg:mx-0" />
          <div className="mt-7 flex flex-col items-center gap-3 lg:mt-8 lg:flex-row lg:gap-8">
            <HulyButton href={primary.href} variant="glow" className="w-[10.875rem] px-0">
              {primary.label}
            </HulyButton>
            {secondary && (
              <HulyButton href={secondary.href} icon={secondary.icon} className="w-[10.875rem] px-0">
                {secondary.label}
              </HulyButton>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
