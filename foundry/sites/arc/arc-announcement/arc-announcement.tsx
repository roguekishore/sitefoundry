import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface ArcAnnouncementProps {
  /** the news line, e.g. "Basin now holds cash for 2,000 startups." */
  message: string;
  /** the link after it */
  linkLabel: string;
  linkHref: string;
  className?: string;
}

/** The thin dark strip above Arc's header: one centred line of news and a link with an arrow. */
export function ArcAnnouncement({ message, linkLabel, linkHref, className }: ArcAnnouncementProps) {
  return (
    <div className={cn("dark bg-background text-foreground", className)}>
      <p className="mx-auto max-w-page px-gutter py-[0.9375rem] text-center text-[0.9375rem]/[1.45] sm:py-4 sm:text-base/6">
        <span className="block sm:inline">{message}</span>{" "}
        <a href={linkHref} className="group inline-flex items-center gap-2.5 transition-opacity duration-200 hover:opacity-75 motion-reduce:transition-none">
          {linkLabel}
          <ArrowRight aria-hidden className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none" strokeWidth={1.5} />
        </a>
      </p>
    </div>
  );
}
