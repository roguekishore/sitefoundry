import { cn } from "@foundry/foundry-utils";

export interface VastspaceWordmarkProps {
  /** the company name, set in capitals */
  name: string;
  className?: string;
}

/** A plain-text stand-in for a logo: wide-set capitals that take the surrounding text colour. */
export function VastspaceWordmark({ name, className }: VastspaceWordmarkProps) {
  return <span className={cn("inline-block font-display text-base/none font-medium tracking-[0.4em] uppercase", className)}>{name}</span>;
}
