import { cn } from "@foundry/foundry-utils";
import "./valaratomics-statement.css";

export interface ValaratomicsStatementProps {
  /** the short heading */
  title: string;
  /** the paragraph under it */
  body: string;
  /** words appended to the paragraph in bold (its punchline) */
  emphasis?: string;
  className?: string;
}

/** One gold bracket: a straight line with a chamfered bump pushed outward in its middle. */
function Bracket({ side }: { side: "top" | "bottom" | "left" | "right" }) {
  const vertical = side === "left" || side === "right";
  // drawn for the top / left side; the bottom one is turned round, the right one mirrored
  const d = vertical ? "M98 0 V34 L2 42 V66 L98 75 V100" : "M0 98 H25 L34 2 H57 L66 98 H100";
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={cn(
        "pointer-events-none absolute fill-none stroke-primary [stroke-width:2]",
        vertical ? "hidden h-[30.75rem] w-10 lg:block" : "h-7 w-[87%] lg:hidden",
        side === "top" && "top-[8rem] left-[10%]",
        side === "bottom" && "bottom-[8rem] left-[3%] rotate-180",
        side === "left" && "top-[calc(50%-2rem)] left-[15.6%] -translate-y-1/2",
        side === "right" && "top-[calc(50%-2rem)] right-[18.9%] -translate-y-1/2 -scale-x-100",
      )}
    >
      <path d={d} vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

/**
 * A quiet, window-tall statement on the page grey: a short heading and paragraph centred
 * between two gold brackets (left and right on desktop, above and below on phones). The text
 * comes into focus from a blur as it scrolls up.
 */
export function ValaratomicsStatement({ title, body, emphasis, className }: ValaratomicsStatementProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-[43.75rem] items-center justify-center overflow-x-clip bg-background px-gutter py-[13rem] text-foreground lg:min-h-svh lg:py-section",
        className,
      )}
    >
      <Bracket side="top" />
      <Bracket side="bottom" />
      <Bracket side="left" />
      <Bracket side="right" />
      <div className="valaratomics-statement-focus mx-auto max-w-[37.5rem] text-center lg:text-left">
        <h2 className="font-sans text-[2.25rem] leading-[0.9] font-semibold tracking-[-0.03em] lg:text-5xl lg:leading-[0.9]">
          {title}
        </h2>
        <p className="mt-9 text-[1.375rem] leading-[1.1] tracking-[-0.02em] text-foreground/70">
          {body}
          {emphasis && (
            <>
              {" "}
              <strong className="font-semibold text-foreground">{emphasis}</strong>
            </>
          )}
        </p>
      </div>
    </section>
  );
}
