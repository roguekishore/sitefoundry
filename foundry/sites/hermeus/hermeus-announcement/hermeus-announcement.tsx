import { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface HermeusAnnouncementProps {
  /** the small tag after the amber dot, e.g. "News" */
  tag: string;
  /** the one-line headline (shown in capitals) */
  text: string;
  /** where the headline links to */
  href: string;
  /** accessible name of the close button */
  closeLabel: string;
  className?: string;
}

/** Thin news strip with a dot tag, a linked headline and a close cross. */
export function HermeusAnnouncement({ tag, text, href, closeLabel, className }: HermeusAnnouncementProps) {
  const [open, setOpen] = useState(true);
  if (!open) return null;

  return (
    <aside
      className={cn(
        "relative flex h-[clamp(1.625rem,1.393rem+0.952vw,2.25rem)] items-center gap-[clamp(1.5rem,1rem+2vw,3rem)] bg-background px-gutter text-foreground",
        "text-[clamp(0.58rem,0.53rem+0.2vw,0.72rem)]/none uppercase",
        className,
      )}
    >
      <span className="flex shrink-0 items-center gap-[clamp(0.3rem,0.25rem+0.2vw,0.45rem)]">
        <span aria-hidden className="size-[clamp(0.45rem,0.4rem+0.2vw,0.6rem)] rounded-full bg-primary" />
        {tag}
      </span>
      <a
        href={href}
        className="flex min-w-0 items-center gap-1.5 transition-colors duration-200 ease-[ease-in-out] hover:text-primary motion-reduce:transition-none lg:absolute lg:left-1/2 lg:-translate-x-1/2"
      >
        <span className="truncate">{text}</span>
        <ArrowRight aria-hidden strokeWidth={1.5} className="size-[1.1em] shrink-0" />
      </a>
      <button
        type="button"
        aria-label={closeLabel}
        onClick={() => setOpen(false)}
        className="ml-auto grid size-6 shrink-0 cursor-pointer place-items-center transition-colors duration-200 ease-[ease-in-out] hover:text-primary motion-reduce:transition-none"
      >
        <X aria-hidden strokeWidth={1.25} className="size-3.5" />
      </button>
    </aside>
  );
}
