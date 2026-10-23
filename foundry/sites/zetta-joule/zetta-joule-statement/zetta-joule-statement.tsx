import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ZettaJouleReveal } from "@foundry/zetta-joule-reveal";
import "./zetta-joule-statement.css";

export interface ZettaJouleStatementProps {
  /** the small label in the left column; "\n" starts a new line */
  label: string;
  /** the large light statement in the right columns */
  statement: string;
  /** default follows the text colour; accent uses the navy highlight colour (for pale-blue sections) */
  tone?: "default" | "accent";
  /** extra content under the statement (a button) */
  children?: ReactNode;
  className?: string;
}

/** A label that types itself in letter by letter. */
function Chars({ text }: { text: string }) {
  let n = 0;
  return text.split("\n").map((line, li) => (
    <span key={li} className="block">
      {line.split(" ").map((word, wi) => (
        <span key={wi}>
          {wi > 0 && " "}
          <span className="inline-block whitespace-nowrap">
            {[...word].map((ch, ci) => (
              <span key={ci} className="zetta-joule-statement-char" style={{ "--i": n++ } as CSSProperties}>
                {ch}
              </span>
            ))}
          </span>
        </span>
      ))}
    </span>
  ));
}

export function ZettaJouleStatement({ label, statement, tone = "default", children, className }: ZettaJouleStatementProps) {
  return (
    <div className={cn("grid gap-x-4 gap-y-3 lg:grid-cols-12", tone === "accent" ? "text-highlight" : "text-foreground", className)}>
      <p className="text-sm leading-[1.2] font-medium tracking-[-0.01em] lg:col-span-4">
        <span className="sr-only">{label}</span>
        <span aria-hidden>
          <Chars text={label} />
        </span>
      </p>
      <div className="lg:col-span-8">
        <ZettaJouleReveal variant="lines" as="p" className="font-display text-2xl leading-[1.2] font-[250] tracking-[-0.03em] lg:max-w-[49rem] lg:text-[2rem]">
          {statement}
        </ZettaJouleReveal>
        {children && <div className="mt-10 lg:mt-12">{children}</div>}
      </div>
    </div>
  );
}
