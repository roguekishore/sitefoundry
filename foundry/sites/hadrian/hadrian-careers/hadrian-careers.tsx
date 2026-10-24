import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { HadrianButton } from "@foundry/hadrian-button";
import { HadrianPlaceholder } from "@foundry/hadrian-placeholder";
import "./hadrian-careers.css";

export interface HadrianCareersProps {
  /** anchor id */
  id?: string;
  /** the slogan that loops across the top band (shown uppercase) */
  slogan: string;
  /** the heading */
  title: string;
  /** a short paragraph */
  text: string;
  /** the gold button */
  action: { label: string; href: string };
  /** image on the right half (behind the copy on phones), object-cover; a placeholder when empty */
  media?: ReactNode;
  /** seconds for the slogan to travel one run */
  loopSeconds?: number;
  className?: string;
}

const RUN = [0, 1, 2, 3];

/** Boxed hiring call to action with a looping slogan band. */
export function HadrianCareers({ id, slogan, title, text, action, media, loopSeconds = 30, className }: HadrianCareersProps) {
  const run = (hidden: boolean) => (
    <div aria-hidden={hidden || undefined} className="flex shrink-0">
      {RUN.map((i) => (
        <span key={i} aria-hidden={i > 0 || undefined} className="shrink-0 pr-[1.875rem] lg:pr-[3.125rem]">
          {slogan}
        </span>
      ))}
    </div>
  );
  return (
    <section id={id} className={cn("relative bg-background py-16 text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <div className="border border-foreground">
          <div className="relative overflow-clip border-b border-foreground py-[1.625rem] lg:py-[1.875rem]">
            <div
              className="hadrian-careers-track flex w-max font-display text-[0.9375rem] leading-[1.25] font-semibold text-primary uppercase lg:text-xl"
              style={{ "--hadrian-loop": `${loopSeconds}s` } as CSSProperties}
            >
              {run(false)}
              {run(true)}
            </div>
            <div aria-hidden className="absolute inset-y-0 left-0 w-12 bg-linear-to-r from-background to-transparent lg:w-20" />
            <div aria-hidden className="absolute inset-y-0 right-0 w-12 bg-linear-to-l from-background to-transparent lg:w-20" />
          </div>
          <div className="relative isolate flex flex-col px-6 py-10 lg:min-h-[23.9375rem] lg:p-10">
            <div className="absolute inset-0 -z-10 lg:left-1/2 [&>img]:size-full [&>img]:object-cover">
              {media ?? <HadrianPlaceholder />}
              <div aria-hidden className="absolute inset-0 bg-linear-to-r from-background via-background/40 to-transparent" />
            </div>
            <h2 className="max-w-[19rem] text-[1.875rem] leading-none font-medium tracking-[-0.035em] [word-spacing:-0.06em] lg:max-w-none lg:text-[2.25rem] lg:font-normal">{title}</h2>
            <p className="mt-4 max-w-[18rem] text-lg leading-[1.2] tracking-[-0.02em] lg:mt-[1.125rem] lg:max-w-[32rem] lg:text-xl lg:leading-[1.07]">
              {text}
            </p>
            <HadrianButton
              label={action.label}
              href={action.href}
              variant="solid"
              className="mt-10 h-10 self-start lg:mt-auto lg:h-11"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
