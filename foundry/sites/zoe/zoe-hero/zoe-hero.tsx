import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ZoeButton } from "@foundry/zoe-button";
import { ZoePlaceholder } from "@foundry/zoe-placeholder";

export interface ZoeHeroProps {
  /** the headline, one string per line */
  titleLines: string[];
  /** the line under it */
  subtitle: string;
  /** the yellow button near the bottom */
  cta: { label: string; href: string };
  /** the photo (an <img> or <video> with object-cover); a placeholder when empty */
  media?: ReactNode;
  className?: string;
}

/** Zoe's photo hero. */
export function ZoeHero({ titleLines, subtitle, cta, media, className }: ZoeHeroProps) {
  return (
    <section
      className={cn(
        "relative isolate aspect-[4/5] overflow-clip text-background sm:aspect-[3/2] lg:aspect-[1440/716] dark:text-foreground",
        className,
      )}
    >
      <div className="absolute inset-0 -z-10 *:size-full *:object-cover">{media ?? <ZoePlaceholder tone="photo" />}</div>
      {/* the scrim: darker at the top on phones (behind the centred text), a faint pool on the left on desktop */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-linear-to-b from-foreground/45 from-15% via-foreground/0 via-58% to-foreground/20 to-87% lg:bg-radial-[circle_at_21%_64%] lg:from-foreground/15 lg:from-0% lg:via-foreground/0 lg:via-45% lg:to-foreground/0 dark:from-background/45 dark:to-background/20 lg:dark:from-background/15 lg:dark:to-background/0"
      />

      <div className="relative mx-auto h-full max-w-page px-gutter">
        <div className="pt-8 text-center lg:absolute lg:top-1/2 lg:left-gutter lg:-translate-y-1/2 lg:pt-0 lg:pl-[3.375rem] lg:text-left">
          <h1 className="font-display text-[2.75rem] leading-[1.05] font-semibold tracking-[-0.02em] lg:text-[4.5rem]">
            {titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mx-auto mt-3 max-w-[17rem] text-xl leading-[1.3] sm:max-w-none lg:mt-6 lg:text-2xl lg:leading-[1.1]">
            {subtitle}
          </p>
        </div>
        <ZoeButton href={cta.href} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-lg lg:bottom-12">
          {cta.label}
        </ZoeButton>
      </div>
    </section>
  );
}
