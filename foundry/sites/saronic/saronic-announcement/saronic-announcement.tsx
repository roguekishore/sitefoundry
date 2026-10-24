import { useState, type ReactNode } from "react";
import { X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { SaronicButton } from "@foundry/saronic-button";

export interface SaronicAnnouncementProps {
  /** the bold caption at the start ("Announcement") */
  label: ReactNode;
  /** the news line; clipped at the window edge on phones */
  message: ReactNode;
  /** the small button after the message (desktop only) */
  cta?: { label: ReactNode; href: string };
  /** a small icon before the caption (desktop only) */
  icon?: ReactNode;
  /** screen-reader label for the close button */
  closeLabel: string;
  className?: string;
}

/**
 * The lime announcement strip above the header: mono caption, a dimmer news line and a small
 * ink-tinted button, with a close X at the far right (in its own hairline cell on phones).
 * 48px tall on phones, 64px on desktop. Closing removes it.
 */
export function SaronicAnnouncement({ label, message, cta, icon, closeLabel, className }: SaronicAnnouncementProps) {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div
      className={cn(
        "relative flex h-12 items-stretch bg-primary font-mono text-base/none tracking-[0.025em] text-primary-foreground uppercase lg:h-16",
        className,
      )}
    >
      <div className="flex min-w-0 flex-1 items-center overflow-clip pl-4 whitespace-nowrap lg:pl-6">
        {icon && <span className="mr-6 hidden shrink-0 lg:inline-flex [&>svg]:size-7">{icon}</span>}
        <span className="shrink-0">{label}</span>
        <span className="ml-4 shrink-0 text-primary-foreground/70">{message}</span>
        {cta && (
          <SaronicButton href={cta.href} variant="tint" size="sm" icon="none" className="ml-6 max-lg:hidden">
            {cta.label}
          </SaronicButton>
        )}
      </div>
      <button
        type="button"
        aria-label={closeLabel}
        onClick={() => setOpen(false)}
        className="flex w-12 shrink-0 items-center justify-center border-l border-primary-foreground/10 transition-opacity duration-300 hover:opacity-70 motion-reduce:transition-none lg:w-16 lg:border-l-0"
      >
        <X aria-hidden strokeWidth={1.5} className="size-6" />
      </button>
    </div>
  );
}
