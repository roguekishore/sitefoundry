import { ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface VardaAnnouncementProps {
  /** small bold label at the top left */
  label: string;
  /** the news itself, one line on desktop */
  text: string;
  /** where the strip links to */
  href: string;
  className?: string;
}

const ease = "duration-500 ease-[cubic-bezier(0.165,0.84,0.44,1)] motion-reduce:transition-none";

/** A bright full-width news strip: label and arrow on top, one line of news below. */
export function VardaAnnouncement({ label, text, href, className }: VardaAnnouncementProps) {
  return (
    <a
      href={href}
      className={cn(
        "group flex flex-col gap-7 bg-card px-gutter pt-[calc(var(--page-gutter)+0.25rem)] pb-[calc(var(--page-gutter)+0.25rem)] text-card-foreground lg:gap-8",
        className,
      )}
    >
      <span className="flex items-start justify-between gap-4">
        <span className="text-base/6 font-bold lg:text-[1.0625rem]/6">{label}</span>
        <ArrowUpRight
          aria-hidden
          strokeWidth={3}
          className={cn("mt-0.5 size-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5", ease)}
        />
      </span>
      <span className="text-xl/6 font-medium lg:text-[1.375rem]/6">{text}</span>
    </a>
  );
}
