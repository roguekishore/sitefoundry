import type { ReactNode } from "react";
import { Flame } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { ZettaJouleButton } from "@foundry/zetta-joule-button";
import { ZettaJoulePlaceholder } from "@foundry/zetta-joule-placeholder";
import { ZettaJouleReveal } from "@foundry/zetta-joule-reveal";
import "./zetta-joule-cta.css";

export interface ZettaJouleCtaProps {
  /** the bright first sentence */
  lead: string;
  /** the rest of the text, in muted grey */
  text: string;
  /** the button */
  cta: { label: string; href: string };
  /** two photos on the right: the first is wider; each is cropped like object-fit: cover; empty shows a placeholder */
  images?: [ReactNode?, ReactNode?];
  className?: string;
}

export function ZettaJouleCta({ lead, text, cta, images, className }: ZettaJouleCtaProps) {
  const frame = "relative overflow-clip rounded-sm aspect-[175/289] lg:aspect-auto lg:h-[37.1875rem]";
  return (
    <section className={cn("dark relative z-10 rounded-b-sm bg-background pt-20 pb-20 text-foreground lg:py-40", className)}>
      <div className="mx-auto grid w-full max-w-[calc(var(--page-width)+5rem)] grid-cols-2 gap-x-4 px-gutter lg:grid-cols-12 lg:px-10">
        <div className="col-span-2 flex flex-col justify-between lg:col-span-5">
          <Flame aria-hidden className="size-6" strokeWidth={1.25} />
          <ZettaJouleReveal variant="lines" as="p" className="mt-10 font-display text-xl leading-[1.2] font-light tracking-[-0.02em] lg:mt-0 lg:max-w-[26rem] lg:text-[2rem]">
            <span>{lead}</span> <span className="text-muted-foreground">{text}</span>
          </ZettaJouleReveal>
          <ZettaJouleReveal className="mt-8 lg:mt-0">
            <ZettaJouleButton label={cta.label} href={cta.href} />
          </ZettaJouleReveal>
        </div>
        {[0, 1].map((i) => (
          <div key={i} className={cn(frame, "mt-10 lg:mt-0", i === 0 ? "lg:col-span-4" : "lg:col-span-3")}>
            <div className="zetta-joule-cta-drift absolute inset-x-0 -inset-y-8 [&>*]:size-full [&>*]:object-cover">
              {images?.[i] ?? <ZettaJoulePlaceholder tone="deep" className="size-full" />}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
