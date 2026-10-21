import { cn } from "@foundry/foundry-utils";
import { MarryandbrideLink } from "@foundry/marryandbride-link";

export interface MarryandbrideIntroSegment {
  text: string;
  /** makes this segment an underlined link */
  href?: string;
}

export interface MarryandbrideIntroProps {
  /** tiny uppercase line above */
  eyebrow: string;
  /** the passage, in segments (linked ones are underlined) */
  segments: MarryandbrideIntroSegment[];
  className?: string;
}

/** A tiny label and a serif passage with inline underlined links. */
export function MarryandbrideIntro({ eyebrow, segments, className }: MarryandbrideIntroProps) {
  return (
    <section className={cn("bg-background px-gutter pt-8 pb-12 text-foreground lg:pt-9 lg:pb-16", className)}>
      <p className="font-sans text-[0.65rem] leading-none tracking-[0.07em] uppercase lg:text-[0.7rem]">{eyebrow}</p>
      <p className="mt-4 max-w-[40rem] font-display text-[1.36rem] leading-[1.5] lg:mt-3.5 lg:text-[1.63rem]">
        {segments.map((segment, i) =>
          segment.href ? (
            <MarryandbrideLink key={i} href={segment.href} className="underline-offset-[0.22em]">
              {segment.text}
            </MarryandbrideLink>
          ) : (
            <span key={i}>{segment.text}</span>
          ),
        )}
      </p>
    </section>
  );
}
