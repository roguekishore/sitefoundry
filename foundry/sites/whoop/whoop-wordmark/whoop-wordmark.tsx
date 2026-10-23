import { cn } from "@foundry/foundry-utils";

export interface WhoopWordmarkProps {
  /** the brand name, set in capitals */
  name: string;
  /** makes it a link (e.g. home) */
  href?: string;
  /** size and colour come from here (e.g. "text-[1.6rem]") */
  className?: string;
}

/** The brand name as a light, widely tracked capital logotype. */
export function WhoopWordmark({ name, href, className }: WhoopWordmarkProps) {
  const cls = cn("inline-block font-display leading-none font-light tracking-[0.06em] uppercase", className);
  return href ? (
    <a href={href} className={cls}>
      {name}
    </a>
  ) : (
    <span className={cls}>{name}</span>
  );
}
