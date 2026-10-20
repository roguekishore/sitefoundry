import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { TypesomethingTypewriter } from "@foundry/typesomething-typewriter";

export interface TypesomethingWordmarkProps {
  /** the bold first half of the name (e.g. "Paper") */
  lead: string;
  /** the second half, set light in the brand colour (e.g. "kite") */
  tail: string;
  /** a small mark after the name (a lucide icon, an svg or an img) */
  icon?: ReactNode;
  /** the second half types itself and erases on a loop, behind a blinking cursor */
  typing?: boolean;
  /** the cursor glyph shown after the name; empty for none */
  cursor?: string;
  className?: string;
}

/** The two-tone wordmark: bold lead, light brand-coloured tail, an underscore cursor. Size it with a text-* class. */
export function TypesomethingWordmark({ lead, tail, icon, typing = false, cursor = "_", className }: TypesomethingWordmarkProps) {
  return (
    <span className={cn("inline-flex items-center gap-[0.3em] font-display leading-none tracking-[-0.02em]", className)}>
      <span className="whitespace-nowrap">
        <span className="font-bold">{lead}</span>
        {typing ? (
          <TypesomethingTypewriter words={[tail]} cursor={cursor} reserve holdMs={2600} typeMs={110} eraseMs={60} gapMs={600} className="font-normal text-primary" cursorClassName="text-foreground" />
        ) : (
          <span className="font-normal text-primary">
            {tail}
            {cursor && <span className="typesomething-typewriter-cursor text-foreground">{cursor}</span>}
          </span>
        )}
      </span>
      {icon && <span className="flex shrink-0 items-center [&_svg]:size-[1.05em]">{icon}</span>}
    </span>
  );
}
