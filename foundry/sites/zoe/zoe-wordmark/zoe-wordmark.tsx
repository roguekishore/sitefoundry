import { cn } from "@foundry/foundry-utils";

export interface ZoeWordmarkProps {
  /** the brand name, set in lowercase */
  name: string;
  /** makes it a link (e.g. home) */
  href?: string;
  /** size and colour can be changed here (e.g. "text-[2rem]") */
  className?: string;
}

/** The brand name as a heavy, tight lowercase logotype. */
export function ZoeWordmark({ name, href, className }: ZoeWordmarkProps) {
  const cls = cn(
    "inline-block font-display text-[2.125rem] leading-none font-extrabold tracking-[-0.06em] text-primary lowercase",
    className,
  );
  return href ? (
    <a href={href} className={cls}>
      {name}
    </a>
  ) : (
    <span className={cls}>{name}</span>
  );
}
