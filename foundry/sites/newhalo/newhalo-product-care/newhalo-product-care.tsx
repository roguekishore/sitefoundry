import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { NewhaloMedia } from "@foundry/newhalo-media";
import { newhaloReveal } from "@foundry/newhalo-reveal";

export interface NewhaloProductCareProps {
  /** the anchor id (for the sub-navigation) */
  id?: string;
  /** the 64px heading on the left */
  title: string;
  /** the dark feature card: a title, a paragraph, a small cobalt icon tab and a product shot */
  card: { title: string; text: string; icon: ReactNode; media?: ReactNode };
  /** the text block under the card */
  note: { title: string; paragraphs: string[] };
  className?: string;
}

/**
 * Everyday-use details on paper: a 64px heading on the left; on the right a dark graphite card
 * (title, paragraph, a small cobalt icon tab, a product shot) and a plain text block under it.
 */
export function NewhaloProductCare({ id, title, card, note, className }: NewhaloProductCareProps) {
  return (
    <section id={id} className={cn("bg-background py-section text-foreground", className)}>
      <div className="mx-auto grid max-w-page gap-y-10 px-gutter lg:grid-cols-12 lg:gap-x-6">
        <h2 className="font-display text-[2.5rem] leading-[1.1] tracking-[-0.01em] lg:col-span-5 lg:text-[4rem] lg:leading-none">{title}</h2>
        <div className="lg:col-span-7 lg:col-start-6">
          <div className={cn("dark relative isolate h-[28rem] overflow-clip rounded-lg bg-card text-card-foreground lg:h-[33rem]", newhaloReveal("bloom"))}>
            <NewhaloMedia tone="deep" className="absolute inset-x-0 top-[30%] bottom-0 -z-10">
              {card.media}
            </NewhaloMedia>
            <div className="flex items-start justify-between gap-6 p-gutter lg:p-[1.875rem]">
              <div className={cn("max-w-[20.5rem]", newhaloReveal("rise"))} style={{ "--newhalo-rise": "30px" } as CSSProperties}>
                <h3 className="font-display text-[1.3rem] leading-[1.1] lg:text-2xl">{card.title}</h3>
                <p className="mt-3 text-[0.91rem] leading-normal lg:mt-4 lg:text-base">{card.text}</p>
              </div>
              <span aria-hidden className="-mt-gutter flex h-16 w-12 shrink-0 items-center justify-center rounded-b-xl border border-t-0 border-foreground/60 bg-linear-to-b from-transparent to-chart-4 lg:-mt-[1.875rem] lg:mr-3 [&_svg]:size-4">
                {card.icon}
              </span>
            </div>
          </div>
          <div className={cn("mt-16 max-w-[20rem] lg:mt-24", newhaloReveal("rise"))} style={{ "--newhalo-rise": "30px" } as CSSProperties}>
            <h3 className="font-display text-[1.3rem] leading-[1.1] lg:text-2xl">{note.title}</h3>
            <div className="mt-4 space-y-6 text-[0.91rem] leading-normal lg:text-base">
              {note.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
