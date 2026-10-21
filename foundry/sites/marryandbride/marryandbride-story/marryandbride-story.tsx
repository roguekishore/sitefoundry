import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface MarryandbrideStoryProps {
  /** the paragraphs, each centred */
  paragraphs: string[];
  /** the photo at the left (4:5 on desktop) */
  media?: ReactNode;
  className?: string;
}

/** A photo beside centred serif paragraphs. */
export function MarryandbrideStory({ paragraphs, media, className }: MarryandbrideStoryProps) {
  return (
    <section className={cn("bg-background text-foreground lg:grid lg:grid-cols-2", className)}>
      <div className="aspect-[39/41] bg-muted lg:aspect-[4/5] [&_img]:size-full [&_img]:object-cover">{media}</div>
      <div className="flex flex-col items-center justify-center gap-[1.5em] px-gutter pt-12 pb-8 text-center font-display text-[1.36rem] leading-[1.38] lg:py-0 lg:text-[1.63rem] lg:leading-[1.4]">
        {paragraphs.map((paragraph, i) => (
          <p key={i} className="max-w-[20rem] lg:max-w-[29rem]">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
