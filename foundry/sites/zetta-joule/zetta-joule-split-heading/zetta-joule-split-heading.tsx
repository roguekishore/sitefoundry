import { Fragment, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ZettaJouleReveal } from "@foundry/zetta-joule-reveal";

export interface ZettaJouleSplitHeadingProps {
  /** the heading (48px on desktop, 24px on phones); "\n" is a line break from lg up, a space below */
  heading: string;
  /** the paragraph in the right-hand columns */
  body: ReactNode;
  /** keep the "\n" line break on phones too */
  keepBreaks?: boolean;
  /** muted: grey text (light bands); strong: white medium text (dark bands) */
  bodyTone?: "muted" | "strong";
  /** a button under the paragraph */
  children?: ReactNode;
  className?: string;
}

export function ZettaJouleSplitHeading({ heading, body, bodyTone = "muted", keepBreaks = false, children, className }: ZettaJouleSplitHeadingProps) {
  const lines = heading.split("\n");
  return (
    <div className={cn("grid gap-x-4 gap-y-4 lg:grid-cols-12", className)}>
      <ZettaJouleReveal variant="lines" as="h2" className="font-display text-2xl leading-none font-[250] tracking-[-0.03em] text-foreground lg:col-span-6 lg:text-5xl">
        {lines.map((line, i) => (
          <Fragment key={i}>
            {i > 0 && (
              <>
                {!keepBreaks && <span className="lg:hidden"> </span>}
                <br className={keepBreaks ? undefined : "max-lg:hidden"} />
              </>
            )}
            {line}
          </Fragment>
        ))}
      </ZettaJouleReveal>
      <div className="lg:col-span-4 lg:col-start-9">
        <ZettaJouleReveal
          variant="lines"
          as="div"
          className={cn("text-base leading-[1.3] tracking-[-0.01em] lg:leading-normal", bodyTone === "strong" ? "font-medium text-foreground" : "text-muted-foreground")}
        >
          {body}
        </ZettaJouleReveal>
        {children && <div className="mt-10 lg:mt-12">{children}</div>}
      </div>
    </div>
  );
}
