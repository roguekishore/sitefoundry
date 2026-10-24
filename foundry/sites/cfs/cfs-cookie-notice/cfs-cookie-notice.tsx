import { useState } from "react";
import { cn } from "@foundry/foundry-utils";
import "./cfs-cookie-notice.css";

export interface CfsCookieNoticeProps {
  /** the small orange spaced-capitals label, e.g. "Privacy notice" */
  eyebrow: string;
  /** the short title */
  title: string;
  /** one sentence about what is stored */
  text: string;
  /** the policy link after the sentence */
  policyLink: { label: string; href: string };
  /** the outlined button's text */
  declineLabel: string;
  /** the orange button's text */
  acceptLabel: string;
  /** called with the visitor's choice; the card hides either way */
  onChoice?: (accepted: boolean) => void;
  /** pin to the window's bottom-right corner; default true */
  fixed?: boolean;
  className?: string;
}

const ease = "transition-colors duration-150 ease-[cubic-bezier(0.455,0.03,0.515,0.955)] motion-reduce:transition-none";

/** Navy consent card with a growing orange top bar and two square buttons. */
export function CfsCookieNotice({
  eyebrow,
  title,
  text,
  policyLink,
  declineLabel,
  acceptLabel,
  onChoice,
  fixed = true,
  className,
}: CfsCookieNoticeProps) {
  const [open, setOpen] = useState(true);
  if (!open) return null;

  const choose = (accepted: boolean) => {
    setOpen(false);
    onChoice?.(accepted);
  };

  return (
    <aside
      aria-label={eyebrow}
      className={cn(
        "cfs-cookie-notice dark z-40 bg-background px-5 pt-5 pb-4 text-foreground shadow-[0_18px_42px_color-mix(in_oklab,var(--background)_70%,transparent)]",
        fixed ? "fixed inset-x-[7px] bottom-2 sm:inset-x-auto sm:right-[25px] sm:bottom-[25px] sm:w-80" : "relative w-full max-w-80",
        className,
      )}
    >
      <span aria-hidden className="cfs-cookie-notice-bar absolute inset-x-0 top-0 h-[3px] bg-primary" />
      <p className="flex items-center gap-2.5 font-mono text-[10px] tracking-[1.8px] text-primary uppercase">
        {eyebrow}
        <span aria-hidden className="h-px flex-1 bg-border" />
      </p>
      <p className="mt-3 font-display text-base leading-[1.5] font-light">{title}</p>
      <p className="mt-1 text-[12.5px] leading-[1.5] text-foreground/85">
        {text}{" "}
        <a href={policyLink.href} className={cn("border-b border-primary/50 text-primary hover:border-foreground hover:text-foreground", ease)}>
          {policyLink.label}
        </a>
        .
      </p>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => choose(false)}
          className={cn(
            "h-[30px] border border-border font-mono text-[10px] tracking-[1.6px] text-muted-foreground uppercase hover:border-foreground hover:text-foreground",
            ease,
          )}
        >
          {declineLabel}
        </button>
        <button
          type="button"
          onClick={() => choose(true)}
          className={cn(
            "h-[30px] border border-primary bg-primary font-mono text-[10px] tracking-[1.6px] text-background uppercase hover:border-foreground hover:bg-foreground",
            ease,
          )}
        >
          {acceptLabel}
        </button>
      </div>
    </aside>
  );
}
