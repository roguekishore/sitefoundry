import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface IncreaseAnnouncementProps {
  /** the card's title */
  title: string;
  /** one or two sentences under it */
  body: string;
  /** the mint text link at the bottom */
  link: { label: string; href: string };
  /** a photo for the card's right side (from sm, cropped like cover). Empty: a muted placeholder panel */
  media?: ReactNode;
  className?: string;
}

/** A dark news card inside the frame: title, short text and a mint link left, a photo right. */
export function IncreaseAnnouncement({ title, body, link, media, className }: IncreaseAnnouncementProps) {
  return (
    <section className={cn("border-b border-border bg-background", className)}>
      <div className="mx-auto max-w-page border-x border-border px-gutter py-4 sm:py-6">
        <a
          href={link.href}
          className="dark group flex overflow-clip rounded-lg bg-background text-foreground shadow-[0_18px_34px_-12px_color-mix(in_oklab,var(--background)_42%,transparent),0_2px_6px_color-mix(in_oklab,var(--background)_10%,transparent)]"
        >
          <div className="flex min-w-0 flex-1 flex-col p-8 sm:pt-10 sm:pb-8">
            <h2 className="max-w-[36rem] text-xl leading-7 font-semibold text-pretty sm:text-[1.375rem]">{title}</h2>
            <p className="mt-2 max-w-[36rem] text-base leading-7 text-muted-foreground sm:text-[1.0625rem] sm:leading-[1.625rem]">{body}</p>
            <span className="mt-auto inline-flex items-center gap-1 pt-12 text-lg font-semibold text-primary group-hover:underline sm:pt-9">
              {link.label}
              <ArrowUpRight className="size-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" strokeWidth={2.25} />
            </span>
          </div>
          <div aria-hidden={media ? undefined : true} className="relative hidden w-[17rem] shrink-0 sm:block lg:w-[16.8rem] [&>img]:absolute [&>img]:inset-0 [&>img]:size-full [&>img]:object-cover">
            {media ?? <div className="absolute inset-0 bg-accent" />}
          </div>
        </a>
      </div>
    </section>
  );
}
