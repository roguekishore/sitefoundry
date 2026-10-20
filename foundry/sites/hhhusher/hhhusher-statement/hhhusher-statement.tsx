import { cn } from "@foundry/foundry-utils";
import { HhhusherLines } from "@foundry/hhhusher-lines";

export interface HhhusherStatementProps {
  /** the statement, one entry per line as it breaks on a wide screen */
  lines: string[];
  /** tan: the camel band (secondary) · plain: the page background */
  surface?: "tan" | "plain";
  /** the id other links jump to */
  id?: string;
  className?: string;
}

/**
 * One big statement across the full width on a camel band: 57px medium text, four or so
 * lines, each rising into place in turn as it scrolls into view (phones: the lines flow
 * together and fade in).
 */
export function HhhusherStatement({ lines, surface = "tan", id, className }: HhhusherStatementProps) {
  return (
    <section id={id} className={cn(surface === "tan" ? "bg-secondary text-secondary-foreground" : "bg-background text-foreground", "py-section", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <HhhusherLines
          as="h2"
          lines={lines}
          className="max-w-[82rem] font-display text-[2.08rem] leading-[1.06] font-medium tracking-[-0.01em] lg:text-[3.5625rem] lg:leading-[1.05]"
        />
      </div>
    </section>
  );
}
