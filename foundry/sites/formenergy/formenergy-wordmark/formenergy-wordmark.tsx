import { cn } from "@foundry/foundry-utils";

export interface FormenergyWordmarkProps {
  /** the first, larger word */
  name: string;
  /** the smaller, tracked word under it */
  suffix?: string;
  /** where it links (e.g. "/") */
  href?: string;
  /** label for screen readers when it is a link */
  label?: string;
  /** font size sets its scale, e.g. text-[1.5rem] */
  className?: string;
}

/** Plain stacked text wordmark. */
export function FormenergyWordmark({ name, suffix, href, label, className }: FormenergyWordmarkProps) {
  const inner = (
    <>
      <span className="block text-[1em] leading-[0.95] font-normal tracking-[-0.01em]">{name}</span>
      {suffix && <span className="block text-[0.62em] leading-none font-medium tracking-[0.16em] lowercase">{suffix}</span>}
    </>
  );
  const classes = cn("inline-flex flex-col items-start font-sans", className);
  if (href) {
    return (
      <a href={href} aria-label={label} className={classes}>
        {inner}
      </a>
    );
  }
  return <span className={classes}>{inner}</span>;
}
