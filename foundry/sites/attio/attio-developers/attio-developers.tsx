import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { AttioButton } from "@foundry/attio-button";
import { AttioHeading } from "@foundry/attio-heading";

export interface AttioDevelopersProps {
  /** the heading: white lead… */
  lead: string;
  /** …and grey rest, on its own line */
  rest?: string;
  /** the small outline button */
  action?: { label: string; href: string };
  /** the line art on the right (≈435×348); empty shows a placeholder */
  media?: ReactNode;
  mediaLabel?: string;
  className?: string;
}

/** dashed blueprint lines every 58px, drawn as two masked layers (vertical and horizontal) */
function Blueprint() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px)] bg-[size:3.625rem_100%] [mask-image:repeating-linear-gradient(to_bottom,black_0_4px,transparent_4px_9px)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:100%_3.625rem] [mask-image:repeating-linear-gradient(to_right,black_0_4px,transparent_4px_9px)]" />
    </div>
  );
}

/**
 * A dark developer band on a dashed blueprint grid: a hairline box with a two-tone heading
 * and a small button on the left, line art on the right. On phones the heading centres
 * and the art sits underneath.
 */
export function AttioDevelopers({ lead, rest, action, media, mediaLabel, className }: AttioDevelopersProps) {
  return (
    <section data-header-tone="dark" className={cn("dark bg-background text-foreground lg:px-gutter", className)}>
      <div className="mx-auto grid max-w-page border-b border-border lg:grid-cols-2 lg:border-x">
        <div className="relative px-gutter pt-20 pb-14 lg:p-[3.625rem] lg:pr-0">
          <div className="hidden lg:block">
            <Blueprint />
          </div>
          <div className="relative flex flex-col items-center text-center lg:min-h-[21.75rem] lg:items-start lg:border lg:border-r-0 lg:border-border lg:bg-background lg:px-8 lg:pt-[6.75rem] lg:text-left">
            <AttioHeading lead={lead} rest={rest} restOnNewLine />
            {action && (
              <AttioButton href={action.href} size="sm" arrow className="mt-8 lg:mt-6">
                {action.label}
              </AttioButton>
            )}
          </div>
        </div>

        <div className="relative flex h-[13.75rem] items-center justify-center border-t border-border lg:h-auto lg:border-t-0">
          <Blueprint />
          <div
            role="img"
            aria-label={mediaLabel}
            className="relative aspect-[435/348] h-[80%] border border-border bg-muted/70 lg:h-auto lg:w-[62%] [&>*]:size-full [&>img]:object-contain"
          >
            {media}
          </div>
        </div>
      </div>
    </section>
  );
}
