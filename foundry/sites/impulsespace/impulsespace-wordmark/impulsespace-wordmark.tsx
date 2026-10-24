import { Orbit } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface ImpulsespaceWordmarkProps {
  /** the company's name, set in tracked capitals */
  name: string;
  /** link target (the home page); a plain span when empty */
  href?: string;
  className?: string;
}

/** The name in wide-tracked capitals after a small orbit mark; colour comes from the parent. */
export function ImpulsespaceWordmark({ name, href, className }: ImpulsespaceWordmarkProps) {
  const classes = cn(
    "inline-flex shrink-0 items-center gap-1.5 font-display text-[1.0625rem] leading-none font-semibold tracking-[0.18em] uppercase",
    className,
  );
  const inner = (
    <>
      <Orbit aria-hidden className="size-[1.125rem] -rotate-12" strokeWidth={2.5} />
      <span>{name}</span>
    </>
  );
  return href ? (
    <a href={href} className={classes} aria-label={name}>
      {inner}
    </a>
  ) : (
    <span className={classes}>{inner}</span>
  );
}
