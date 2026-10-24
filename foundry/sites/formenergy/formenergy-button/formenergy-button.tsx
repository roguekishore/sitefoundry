import { cn } from "@foundry/foundry-utils";

export interface FormenergyButtonProps {
  /** the button's text (shown uppercase) */
  label: string;
  /** where it goes; without it the component renders a <button> */
  href?: string;
  /** click handler (buttons only) */
  onClick?: () => void;
  className?: string;
}

/** Outlined uppercase mono button that fills with the brand orange on hover. */
export function FormenergyButton({ label, href, onClick, className }: FormenergyButtonProps) {
  const classes = cn(
    "inline-flex h-12 shrink-0 items-center justify-center rounded-[3px] border-2 border-primary px-[1.875rem] font-mono text-[0.7rem] leading-none font-medium tracking-[0.2em] whitespace-nowrap text-secondary-foreground uppercase transition-colors duration-300 ease-[ease] hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none lg:h-[3.25rem] lg:text-sm lg:tracking-[0.143em]",
    className,
  );
  if (href) {
    return (
      <a href={href} className={classes}>
        {label}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={classes}>
      {label}
    </button>
  );
}
