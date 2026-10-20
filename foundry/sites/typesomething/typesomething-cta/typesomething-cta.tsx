import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { TypesomethingButton } from "@foundry/typesomething-button";

export interface TypesomethingCtaProps {
  /** the heading; may hold the wordmark on its own line */
  title: ReactNode;
  /** a sentence or two under it */
  text?: string;
  /** the acid pill */
  action: { label: string; href: string; icon?: ReactNode };
  /** small print under the pill */
  note?: string;
  /** anchor id for in-page links */
  id?: string;
  className?: string;
}

/**
 * Closing call to action: a big ink card with very rounded corners on paper-grey, lit by two
 * dim lights (blush top-left, acid bottom-right), with centred white text and an acid pill.
 */
export function TypesomethingCta({ title, text, action, note, id, className }: TypesomethingCtaProps) {
  return (
    <section id={id} className={cn("bg-muted px-gutter py-14 lg:py-[6.5rem]", className)}>
      <div className="dark relative isolate mx-auto max-w-page overflow-clip rounded-lg bg-background px-6 py-12 text-center text-foreground shadow-[0_28px_96px_-40px_color-mix(in_oklab,var(--background)_60%,transparent)] lg:rounded-[3rem] lg:py-28">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,color-mix(in_oklab,var(--highlight)_18%,transparent),transparent_18rem),radial-gradient(circle_at_85%_80%,color-mix(in_oklab,var(--primary)_16%,transparent),transparent_18rem)]"
        />
        <h2 className="mx-auto max-w-[40rem] font-display text-[1.65rem] leading-[1.55] font-normal tracking-[-0.02em] text-balance lg:text-[2.75rem] lg:leading-[1.8]">
          {title}
        </h2>
        {text && <p className="mx-auto mt-4 max-w-[33rem] text-[0.96rem] leading-[1.6] text-foreground/75 lg:text-[1.05rem]">{text}</p>}
        <TypesomethingButton href={action.href} icon={action.icon} className="mt-6">
          {action.label}
        </TypesomethingButton>
        {note && <p className="mx-auto mt-6 max-w-[30rem] text-[0.72rem] leading-[1.6] tracking-[0.04em] text-foreground/55">{note}</p>}
      </div>
    </section>
  );
}
