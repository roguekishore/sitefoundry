import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ValaratomicsButton } from "@foundry/valaratomics-button";
import { ValaratomicsPlaceholder } from "@foundry/valaratomics-placeholder";

export interface ValaratomicsPilotProps {
  /** the big heading, e.g. the test reactor's name */
  title: string;
  /** partner names shown in a row under the heading (plain text in the mono face) */
  partners?: string[];
  /** the paragraph on the right */
  body: string;
  /** the framed button under it */
  cta?: { label: string; href: string };
  /** the full-bleed photo or video behind (cropped like object-fit: cover); empty shows a placeholder */
  media?: ReactNode;
  className?: string;
}

/**
 * A full-bleed, window-tall photo band under black fades at top and bottom. Vertically
 * centred: a 60px heading with a row of partner names under it on the left, a paragraph and
 * a gold-framed button on the right. Phones stack them.
 */
export function ValaratomicsPilot({ title, partners = [], body, cta, media, className }: ValaratomicsPilotProps) {
  return (
    <section className={cn("dark relative isolate flex min-h-svh items-center bg-background text-foreground", className)}>
      <div className="absolute inset-0 -z-10 overflow-clip [&>*]:size-full [&_img]:object-cover [&_video]:object-cover">
        {media ?? <ValaratomicsPlaceholder />}
      </div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-b from-background/70 via-transparent to-background/80" />
      <div className="mx-auto grid w-full max-w-page gap-y-12 px-gutter py-section lg:grid-cols-2 lg:gap-x-[2vw]">
        <div>
          <h2 className="font-sans text-[2.625rem] leading-[0.9] font-medium tracking-[-0.02em] lg:text-[3.75rem] lg:leading-[0.9]">
            {title}
          </h2>
          {partners.length > 0 && (
            <ul className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 lg:mt-16 lg:gap-x-8">
              {partners.map((p) => (
                <li
                  key={p}
                  className="flex h-11 items-center font-mono text-xs leading-[1.1] font-medium tracking-[0.04em] text-foreground/80 uppercase lg:text-sm"
                >
                  {p}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex flex-col items-start gap-6 lg:gap-12">
          <p className="text-lg leading-[1.1] tracking-[-0.01em] lg:pt-1 lg:text-[1.375rem] lg:leading-[1.1]">{body}</p>
          {cta && <ValaratomicsButton label={cta.label} href={cta.href} />}
        </div>
      </div>
    </section>
  );
}
