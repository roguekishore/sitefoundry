import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface MercuryLogo {
  /** the company name, set as a bold wordmark (or a label for the image) */
  name: string;
  /** a small mark before the name (e.g. a lucide icon) */
  icon?: ReactNode;
  /** a real logo image instead of the typeset wordmark */
  src?: string;
}

export interface MercuryLogosProps {
  /** the customers' logos, in one row */
  logos: MercuryLogo[];
  className?: string;
}

/**
 * One wide row of customer wordmarks in the text colour, fading out at both ends. On
 * phones the row keeps its size and scrolls sideways instead of shrinking.
 */
export function MercuryLogos({ logos, className }: MercuryLogosProps) {
  return (
    <div
      className={cn(
        "overflow-x-auto [scrollbar-width:none] [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
        className,
      )}
    >
      <ul className="mx-auto flex w-max items-center gap-10 px-10 lg:gap-14">
        {logos.map((logo) => (
          <li key={logo.name} className="flex shrink-0 items-center gap-2 text-foreground">
            {logo.src ? (
              <img src={logo.src} alt={logo.name} className="h-7 w-auto" />
            ) : (
              <>
                {logo.icon && <span className="flex size-7 items-center justify-center [&_svg]:size-full">{logo.icon}</span>}
                <span className="font-display text-[1.375rem] font-[650] tracking-[-0.02em] lg:text-[1.75rem]">{logo.name}</span>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
