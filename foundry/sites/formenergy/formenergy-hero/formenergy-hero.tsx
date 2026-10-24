import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { FormenergyPlaceholder } from "@foundry/formenergy-placeholder";

export interface FormenergyHeroProps {
  /** anchor id */
  id?: string;
  /** the headline, one entry per desktop line (shown uppercase) */
  titleLines: string[];
  /** the lead paragraph beside the orange rule */
  lead: string;
  /** a video or image filling the hero (cover); a dark placeholder when empty */
  media?: ReactNode;
  className?: string;
}

/** Full-bleed media hero with a big condensed uppercase headline and a ruled lead. */
export function FormenergyHero({ id, titleLines, lead, media, className }: FormenergyHeroProps) {
  return (
    <section
      id={id}
      className={cn(
        "dark relative isolate flex min-h-[33.4rem] flex-col justify-end overflow-clip border-t-2 border-primary bg-background text-foreground md:min-h-[40rem] lg:min-h-[47.375rem]",
        className,
      )}
    >
      <div className="absolute inset-0 -z-10 [&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover">
        {media ?? <FormenergyPlaceholder tone="dark" />}
      </div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-linear-[140deg] from-background/60 via-background/25 to-transparent" />

      <div className="mx-auto w-full max-w-page px-gutter pt-32 pb-11 lg:pt-40 lg:pb-[8.5rem]">
        <div className="lg:pl-[1.875rem]">
          <h1 className="font-display text-[2.7rem] leading-none font-normal tracking-[0.04em] uppercase lg:text-[5.375rem]">
            {titleLines.map((line, i) => (
              <span key={i} className="lg:block">
                {line}
                {i < titleLines.length - 1 && " "}
              </span>
            ))}
          </h1>
          <p className="mt-4 ml-[3px] max-w-[45rem] border-l border-primary pl-[1.9rem] text-[1.1rem] leading-[1.2] lg:mt-[2.5rem] lg:ml-1.5 lg:text-2xl lg:leading-[1.3]">
            {lead}
          </p>
        </div>
      </div>
    </section>
  );
}
