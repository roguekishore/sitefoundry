import { cn } from "@foundry/foundry-utils";

export interface HadrianEyebrowProps {
  /** the label (shown uppercase) */
  label: string;
  className?: string;
}

/** Gold uppercase mono label. */
export function HadrianEyebrow({ label, className }: HadrianEyebrowProps) {
  return <p className={cn("font-mono text-sm leading-normal text-primary uppercase", className)}>{label}</p>;
}
