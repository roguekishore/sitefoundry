import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface ModerntreasuryAnnouncementProps {
  /** the news line */
  text: string;
  /** the link after it */
  link: { label: string; href: string };
  className?: string;
}

/** A one-line news strip on a pale surface, with a bold underlined link. */
export function ModerntreasuryAnnouncement({ text, link, className }: ModerntreasuryAnnouncementProps) {
  return (
    <div className={cn("bg-muted text-foreground", className)}>
      <p className="mx-auto max-w-page px-gutter py-3.5 text-sm leading-[1.5] lg:text-center">
        {text}{" "}
        <a href={link.href} className="group inline-flex items-center gap-1 font-semibold underline decoration-1 underline-offset-2 hover:text-highlight">
          {link.label}
          <ArrowRight aria-hidden className="size-3.5 transition-transform duration-150 group-hover:translate-x-0.5 motion-reduce:transition-none" strokeWidth={2.25} />
        </a>
      </p>
    </div>
  );
}
