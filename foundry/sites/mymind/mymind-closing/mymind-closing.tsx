import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { MymindInstallRow, type MymindInstallTarget } from "@foundry/mymind-install-row";
import { MymindPill } from "@foundry/mymind-pill";

export interface MymindClosingProps {
  /** a small brand mark at the crown of the arc (an icon or picture) */
  mark?: ReactNode;
  /** short centred paragraphs */
  paragraphs: string[];
  /** the tangerine pill */
  cta: { label: string; href: string };
  /** install tiles under the pill (tablet and up) */
  targets?: MymindInstallTarget[];
  /** the small grey line at the bottom, and its link */
  note?: { text: string; href: string };
  className?: string;
}

/** Closing words under a fading arc, then the call to action. */
export function MymindClosing({ mark, paragraphs, cta, targets, note, className }: MymindClosingProps) {
  return (
    <section className={cn("relative isolate overflow-x-clip bg-accent pt-20 pb-20 text-foreground lg:pt-[9rem] lg:pb-14", className)}>
      {/* the arc: the top of a very large thin circle, fading into the band */}
      <div aria-hidden className="absolute top-[9.5rem] left-1/2 -z-10 h-[18rem] w-[44rem] -translate-x-1/2 overflow-clip lg:top-[11.5rem] lg:h-[32rem] lg:w-[76rem]">
        <div className="aspect-square w-full rounded-full border border-foreground/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-45% to-accent" />
      </div>

      <div className="mx-auto flex max-w-page flex-col items-center px-gutter text-center">
        {mark && <div className="grid h-[4.5rem] w-12 place-items-center text-foreground [&_svg]:size-full">{mark}</div>}
        <div className="mymind-closing-drift mt-12 max-w-[22rem] space-y-10 font-display text-[1.75rem] leading-10 tracking-[-0.03em] lg:mt-[8.5rem] lg:max-w-[49rem] lg:space-y-[3.75rem] lg:text-[3.25rem] lg:leading-[3.75rem]">
          {paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <MymindPill href={cta.href} size="sm" caps className="mt-16 h-11 px-8 lg:mt-[4.5rem]">
          {cta.label}
        </MymindPill>
        {targets && targets.length > 0 && <MymindInstallRow targets={targets} className="mt-16 hidden md:flex lg:mt-[4.5rem]" />}
        {note && (
          <a href={note.href} className="mt-6 hidden text-[0.9375rem] text-muted-foreground transition-colors duration-200 ease-linear hover:text-foreground md:block">
            {note.text}
          </a>
        )}
      </div>
    </section>
  );
}
