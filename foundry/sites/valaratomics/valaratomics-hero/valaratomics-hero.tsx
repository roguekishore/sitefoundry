import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ValaratomicsButton } from "@foundry/valaratomics-button";
import { ValaratomicsPlaceholder } from "@foundry/valaratomics-placeholder";

export interface ValaratomicsHeroProps {
  /** the giant caps title, one string per line (e.g. ["Heat for", "the plains"]) */
  title: string[];
  /** the sentence on the right */
  body: string;
  /** the framed button under it */
  cta?: { label: string; href: string };
  /** the full-bleed background video or image (cropped like object-fit: cover); empty shows a placeholder */
  media?: ReactNode;
  className?: string;
}

/**
 * A black, window-tall opening band: a full-bleed video behind, and at the bottom an
 * extra-wide heavy caps title on the left seven columns with a short sentence and a
 * gold-framed button on the right five.
 */
export function ValaratomicsHero({ title, body, cta, media, className }: ValaratomicsHeroProps) {
  return (
    <section className={cn("dark relative isolate flex min-h-svh flex-col bg-background text-foreground", className)}>
      <div className="absolute inset-0 -z-10 overflow-clip [&>*]:size-full [&_img]:object-cover [&_video]:object-cover">
        {media ?? <ValaratomicsPlaceholder />}
      </div>
      <div className="mx-auto mt-auto grid w-full max-w-page gap-y-[1.375rem] px-gutter pt-[8rem] pb-[4.5rem] lg:grid-cols-12 lg:gap-x-[2vw] lg:pb-[4.5rem]">
        <h1 className="font-display text-[2rem] leading-[0.9] font-black uppercase [font-stretch:var(--valaratomics-stretch,100%)] lg:col-span-7 lg:text-[5rem] lg:leading-[0.9]">
          {title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
        <div className="flex flex-col items-start gap-9 lg:col-span-5 lg:col-start-8 lg:gap-[4.5rem]">
          <p className="text-lg leading-[1.1] tracking-[-0.02em] lg:text-[1.375rem] lg:leading-[1.1]">{body}</p>
          {cta && <ValaratomicsButton label={cta.label} href={cta.href} />}
        </div>
      </div>
    </section>
  );
}
