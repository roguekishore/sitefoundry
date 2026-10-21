import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import "./mrcresidencesbocaraton-hero.css";

export interface MrcresidencesbocaratonHeroProps {
  /** the light part of the line, e.g. "Life is slower at" */
  title: string;
  /** the bold part that follows it (the name) */
  titleStrong?: string;
  /** the outline button under the line */
  cta: { label: string; href: string };
  /** the small cue at the bottom (desktop only) */
  cue?: { label: string; href: string };
  /** a looping video or an image; fills the hero like object-fit cover. Empty: a placeholder */
  media?: ReactNode;
  className?: string;
}

export function MrcresidencesbocaratonHero({ title, titleStrong, cta, cue, media, className }: MrcresidencesbocaratonHeroProps) {
  return (
    <section
      className={cn(
        "sticky top-0 isolate aspect-[390/429] w-full overflow-clip text-primary-foreground lg:aspect-auto lg:h-[101svh]",
        className,
      )}
    >
      {/* media (the original fades its video in); empty, the primary colour shows under the tint */}
      <div className="absolute inset-0 -z-20 bg-primary">
        <div className="mrcresidencesbocaraton-hero-media size-full [&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover">
          {media}
        </div>
      </div>
      <div aria-hidden className="mrcresidencesbocaraton-hero-tint absolute inset-0 -z-10 bg-glow opacity-30" />

      <div className="mrcresidencesbocaraton-hero-wrap absolute inset-0 flex flex-col items-center justify-center px-gutter pt-[62px] lg:pt-10">
        <div className="mrcresidencesbocaraton-hero-copy flex flex-col items-center text-center">
          <h1 className="text-[22px] leading-[1.15] font-normal uppercase lg:text-[42px]">
            {title}
            {titleStrong && <strong className="font-bold"> {titleStrong}</strong>}
          </h1>
          <a
            href={cta.href}
            className="mt-[23px] flex h-[31px] w-[126px] items-center justify-center border border-primary-foreground text-[11px] font-semibold uppercase transition-colors duration-500 ease-in-out hover:bg-primary-foreground hover:text-primary motion-reduce:transition-none lg:mt-[43px] lg:h-[47px] lg:w-[155px]"
          >
            {cta.label}
          </a>
        </div>

        {cue && (
          <a
            href={cue.href}
            className="mrcresidencesbocaraton-hero-cue group/cue absolute bottom-10 left-1/2 hidden -translate-x-1/2 lg:block"
          >
            <span className="flex flex-col items-center transition-opacity duration-500 group-hover/cue:opacity-70">
              <span className="text-[9px] leading-[1.15] font-bold tracking-[0.1em] uppercase">{cue.label}</span>
              <ChevronDown
                aria-hidden
                strokeWidth={3}
                className="relative top-0 size-3 transition-[top] duration-500 ease-in-out group-hover/cue:top-2.5 motion-reduce:transition-none"
              />
            </span>
          </a>
        )}
      </div>
    </section>
  );
}
