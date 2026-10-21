import { cn } from "@foundry/foundry-utils";
import "./mrcresidencesbocaraton-pattern.css";

export interface MrcresidencesbocaratonPatternProps {
  /** line colour: the theme's highlight, or a faint tint of the text on a primary band */
  tone?: "line" | "faint";
  /** sizing and position of the panel */
  className?: string;
}

export function MrcresidencesbocaratonPattern({ tone = "line", className }: MrcresidencesbocaratonPatternProps) {
  return <div aria-hidden data-tone={tone} className={cn("mrcresidencesbocaraton-pattern", className)} />;
}
