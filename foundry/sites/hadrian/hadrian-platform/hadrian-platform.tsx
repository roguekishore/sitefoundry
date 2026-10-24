import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { HadrianEyebrow } from "@foundry/hadrian-eyebrow";
import { HadrianPlaceholder } from "@foundry/hadrian-placeholder";
import "./hadrian-platform.css";

export interface HadrianPlatformProps {
  /** anchor id, so buttons can scroll here */
  id?: string;
  /** small gold label on the left of the text row */
  eyebrow: string;
  /** the large paragraph (around 70–90 words reads like the original) */
  text: string;
  /** media strip across the top (video or image, object-cover); a placeholder when empty */
  media?: ReactNode;
  className?: string;
}

/** Gold-framed panel: media strip on top, label and large paragraph below. */
export function HadrianPlatform({ id, eyebrow, text, media, className }: HadrianPlatformProps) {
  return (
    <section
      id={id}
      className={cn("relative bg-background pt-[6.5rem] pb-20 text-foreground lg:pt-[8.75rem] lg:pb-28", className)}
    >
      <div className="mx-auto max-w-page px-gutter">
        <div className="hadrian-platform-reveal border border-primary">
          <div className="aspect-video overflow-clip lg:aspect-[1318/480] [&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover">
            {media ?? <HadrianPlaceholder />}
          </div>
          <div className="border-t border-primary lg:grid lg:grid-cols-4">
            <div className="border-b border-primary px-5 pt-7 pb-6 lg:border-r lg:border-b-0 lg:p-8 lg:pt-10">
              <HadrianEyebrow label={eyebrow} className="lg:max-w-[16rem]" />
            </div>
            <p className="px-5 pt-7 pb-6 text-lg leading-[1.2] tracking-[-0.02em] lg:col-span-3 lg:px-8 lg:pt-8 lg:pb-9 lg:text-[1.875rem] lg:leading-[1.07] lg:[word-spacing:-0.04em]">
              {text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
