import { useState, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { AndurilScramble } from "@foundry/anduril-scramble";
import "./anduril-hero.css";

export interface AndurilHeroProps {
  /** the film (a <video> or <img>), cropped like object-fit: cover; empty shows a placeholder */
  media?: ReactNode;
  /** optional all-caps caption over the film, one entry per line; it decodes in every 12 seconds */
  caption?: string[];
  /** leave 72px at the top for the fixed header (default on) */
  underHeader?: boolean;
  className?: string;
}

/** Window-tall film under the header band; edge to edge on phones, inset with 2px corners on desktop. */
export function AndurilHero({ media, caption = [], underHeader = true, className }: AndurilHeroProps) {
  // each loop of the caption animation re-mounts the lines so they decode again
  const [round, setRound] = useState(0);

  return (
    <section className={cn("flex h-[96svh] flex-col bg-background", underHeader && "pt-[4.5rem]", className)}>
      <div className="relative min-h-0 flex-1 md:px-gutter">
        <div className="relative h-full overflow-clip bg-muted md:rounded-lg [&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover">
          {media}
        </div>
        {caption.length > 0 && (
          <p
            onAnimationIteration={() => setRound((r) => r + 1)}
            className="anduril-hero-caption pointer-events-none absolute inset-x-0 top-[22%] flex flex-col items-center px-2 text-center font-display text-[2.25rem] leading-none font-medium tracking-[-0.02em] text-foreground uppercase md:text-[3.5rem]"
          >
            {caption.map((line, i) => (
              <AndurilScramble key={`${round}-${i}`} text={line} triggers={["load"]} duration={1100} />
            ))}
          </p>
        )}
      </div>
    </section>
  );
}
