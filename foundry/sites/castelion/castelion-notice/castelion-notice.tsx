import type { ReactNode } from "react";
import { CircleAlert } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import "./castelion-notice.css";

export interface CastelionNoticeProps {
  /** the short bold title beside the icon */
  title: string;
  /** the paragraph; may hold an inline link */
  body: ReactNode;
  className?: string;
}

/** Ink notice card: alert icon and title, then a justified paragraph. */
export function CastelionNotice({ title, body, className }: CastelionNoticeProps) {
  return (
    <section className={cn("bg-background py-7 lg:py-[3.25rem]", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <div className="dark overflow-clip rounded-lg bg-card text-card-foreground">
          <div className="castelion-notice-content grid gap-5 px-7 py-7 lg:grid-cols-[25.2rem_1fr] lg:items-center lg:gap-0 lg:px-[4.5rem] lg:py-[3.25rem]">
            <h2 className="flex items-center gap-3.5 text-[clamp(0.875rem,0.829rem+0.19vw,1rem)]/[1.4] font-bold lg:max-w-[15rem]">
              <CircleAlert aria-hidden strokeWidth={2.5} className="size-4 shrink-0 fill-foreground text-card" />
              {title}
            </h2>
            <div className="text-justify text-[clamp(0.875rem,0.829rem+0.19vw,1rem)]/[1.4] font-medium text-muted-foreground [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-2">
              {body}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
