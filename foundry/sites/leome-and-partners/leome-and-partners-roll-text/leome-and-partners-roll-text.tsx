import { cn } from "@foundry/foundry-utils";

export interface LeomeAndPartnersRollTextProps {
  /** the label; every character rolls up to an identical copy on hover */
  text: string;
  className?: string;
}

// The original's hover timing: 0.6s on a long, soft ease-out, 10ms between characters.
const roll =
  "inline-block [text-shadow:0_1.3em_currentColor] transition-[translate] duration-[600ms] ease-[cubic-bezier(0.625,0.05,0,1)] " +
  "group-hover/roll:-translate-y-[1.3em] group-focus-visible/roll:-translate-y-[1.3em] " +
  "motion-reduce:transition-none motion-reduce:group-hover/roll:translate-y-0 motion-reduce:group-focus-visible/roll:translate-y-0";

/**
 * A label whose characters roll up one after another on hover, each replaced by a copy rising
 * from below (a text shadow 1.3em down). The hover target is the nearest ancestor with the
 * class `group/roll` (a link or button). Screen readers get the plain text.
 */
export function LeomeAndPartnersRollText({ text, className }: LeomeAndPartnersRollTextProps) {
  return (
    <span className={cn("relative inline-block overflow-clip align-top leading-[1.2]", className)}>
      <span className="sr-only">{text}</span>
      <span aria-hidden className="inline-block whitespace-pre">
        {Array.from(text).map((char, i) => (
          <span key={i} className={roll} style={{ transitionDelay: `${(i * 0.01).toFixed(2)}s` }}>
            {char}
          </span>
        ))}
      </span>
    </span>
  );
}
