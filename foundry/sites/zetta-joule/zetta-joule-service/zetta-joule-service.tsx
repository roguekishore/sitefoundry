import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ZettaJouleButton } from "@foundry/zetta-joule-button";
import { ZettaJoulePlaceholder } from "@foundry/zetta-joule-placeholder";
import { ZettaJouleReveal } from "@foundry/zetta-joule-reveal";

export interface ZettaJouleServiceProps {
  /** the heading ("\n" breaks the line on desktop) */
  heading: string;
  /** the paragraphs, bottom-left on desktop */
  paragraphs: string[];
  /** the button under them */
  cta: { label: string; href: string };
  /** the large illustration (isometric site plan); empty shows a placeholder. Aspect 1.52 */
  media?: ReactNode;
  className?: string;
}

export function ZettaJouleService({ heading, paragraphs, cta, media, className }: ZettaJouleServiceProps) {
  const lines = heading.split("\n");
  return (
    <section className={cn("relative bg-background px-gutter py-16 text-foreground lg:sticky lg:top-0 lg:flex lg:h-svh lg:min-h-[46rem] lg:flex-col lg:justify-between lg:overflow-clip lg:px-[4.7rem] lg:pt-[7.5rem] lg:pb-[7.8rem]", className)}>
      <ZettaJouleReveal variant="lines" as="h2" className="relative z-10 font-display text-2xl leading-none font-[250] tracking-[-0.03em] lg:text-5xl">
        {lines.map((l, i) => (
          <span key={i} className="block lg:inline">
            {l}
            {i < lines.length - 1 && <span className="lg:hidden"> </span>}
            {i < lines.length - 1 && <br className="max-lg:hidden" />}
          </span>
        ))}
      </ZettaJouleReveal>
      <div className="mt-6 aspect-[571/376] w-full lg:absolute lg:top-[6.5rem] lg:right-[3.7rem] lg:mt-0 lg:w-[68.5%] [&>*]:size-full [&>*]:object-contain">
        {media ?? <ZettaJoulePlaceholder tone="panel" className="size-full" />}
      </div>
      <div className="relative z-10 mt-20 lg:mt-0 lg:max-w-[20rem]">
        <ZettaJouleReveal variant="lines" distance={40} className="grid gap-5 text-base leading-[1.3] tracking-[-0.01em] text-muted-foreground">
          {paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </ZettaJouleReveal>
        <ZettaJouleReveal className="mt-10">
          <ZettaJouleButton label={cta.label} href={cta.href} />
        </ZettaJouleReveal>
      </div>
    </section>
  );
}
