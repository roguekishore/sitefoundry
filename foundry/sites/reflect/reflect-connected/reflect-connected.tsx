import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ReflectHeading } from "@foundry/reflect-heading";
import { ReflectMedia } from "@foundry/reflect-media";
import { ReflectStarfield } from "@foundry/reflect-starfield";

export interface ReflectConnectedCard {
  /** a picture of the idea (an animated illustration in the original); a muted panel when empty */
  media?: ReactNode;
  mediaLabel?: string;
  /** a 24px line icon */
  icon: ReactNode;
  /** the lead-in, in ink */
  title: string;
  /** the rest of the sentence, muted */
  text: string;
}

export interface ReflectConnectedProps {
  eyebrow?: string;
  /** "\n" breaks the line on desktop only */
  title: string;
  /** "\n" breaks the line on desktop only */
  lead?: string;
  /** the cone of light above the heading (an image in the original); a glow wash when empty */
  media?: ReactNode;
  mediaLabel?: string;
  /** two cards side by side (stacked on phones) */
  cards: ReflectConnectedCard[];
  className?: string;
}

/** A cone of light, the heading at its base, then two hairline-framed cards. */
export function ReflectConnected({ eyebrow, title, lead, media, mediaLabel, cards, className }: ReflectConnectedProps) {
  return (
    <section className={cn("relative isolate overflow-clip bg-background pb-[7.5rem] text-foreground lg:pb-[9rem]", className)}>
      <ReflectStarfield size={1000} count={70} seed={23} className="h-[34rem]" />
      <ReflectMedia
        tone="glow"
        reveal
        label={mediaLabel}
        className="absolute top-0 left-1/2 -z-10 h-[53rem] w-[50.375rem] -translate-x-1/2 max-sm:w-[30rem]"
      >
        {media}
      </ReflectMedia>
      <div className="relative px-gutter pt-[31rem]">
        <ReflectHeading eyebrow={eyebrow} title={title} lead={lead} leadClassName="max-w-[20rem] sm:max-w-[31.5rem]" />
      </div>
      <div className="relative mx-auto mt-[4.5rem] max-w-[58.5rem] lg:mt-12">
        {/* top rule that fades out at the ends */}
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 hidden h-px bg-[linear-gradient(90deg,transparent,var(--border)_30%,var(--border)_80%,transparent)] lg:block"
        />
        <ul className="grid lg:grid-cols-2">
          {cards.map((card) => (
            <li
              key={card.title}
              className="relative flex flex-col border-border max-lg:[&:not(:first-child)]:border-t lg:[&:not(:first-child)]:border-l"
            >
              <ReflectMedia
                tone="panel"
                reveal
                label={card.mediaLabel}
                className="aspect-[468/256] w-full bg-[linear-gradient(180deg,color-mix(in_oklab,var(--muted)_40%,transparent),var(--muted))]"
              >
                {card.media}
              </ReflectMedia>
              <div className="relative px-8 pt-8 pb-8 lg:pt-1">
                <span aria-hidden className="absolute top-[4.5rem] left-0 hidden h-4 w-px bg-foreground/35 lg:block" />
                <div className="size-6 text-foreground [&_svg]:size-6">{card.icon}</div>
                <p className="mt-6 max-w-[25rem] text-base/6 text-muted-foreground">
                  <span className="font-medium text-foreground">{card.title}</span> {card.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
