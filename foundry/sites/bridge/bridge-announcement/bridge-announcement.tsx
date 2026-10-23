import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface BridgeAnnouncementProps {
  /** the news line, e.g. "Our euro rail is live. Read more" */
  text: string;
  /** where the line links to */
  href: string;
  className?: string;
}

/** Bridge's sky-blue announcement strip. */
export function BridgeAnnouncement({ text, href, className }: BridgeAnnouncementProps) {
  return (
    <div className={cn("bg-primary text-primary-foreground", className)}>
      <a
        href={href}
        className="mx-auto flex h-[2.0625rem] max-w-page items-center justify-center gap-2 px-gutter text-[0.9375rem]/none tracking-[-0.02em] underline-offset-4 hover:underline lg:h-[2.1875rem]"
      >
        <span className="truncate">{text}</span>
        <ArrowRight aria-hidden className="size-3.5 shrink-0" strokeWidth={1.75} />
      </a>
    </div>
  );
}
