import { cn } from "@foundry/foundry-utils";
import { ParsleyhealthButton } from "@foundry/parsleyhealth-button";
import "./parsleyhealth-floating-cta.css";

export interface ParsleyhealthFloatingCtaProps {
  /** the pill's text */
  label: string;
  /** where it goes */
  href: string;
  className?: string;
}

/** A pill fixed near the bottom of the window that appears once the first screen is scrolled past. */
export function ParsleyhealthFloatingCta({ label, href, className }: ParsleyhealthFloatingCtaProps) {
  return (
    <div
      className={cn(
        "parsleyhealth-floating-cta pointer-events-none fixed inset-x-4 bottom-6 z-30 flex justify-center lg:bottom-6",
        className,
      )}
    >
      <ParsleyhealthButton href={href} arrow className="pointer-events-auto max-lg:w-full">
        {label}
      </ParsleyhealthButton>
    </div>
  );
}
