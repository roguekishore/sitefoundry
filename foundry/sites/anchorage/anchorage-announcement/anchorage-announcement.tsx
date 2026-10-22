import { cn } from "@foundry/foundry-utils";

export interface AnchorageAnnouncementProps {
  /** the lead-in before the wordmark, e.g. "Introducing" */
  lead: string;
  /** the announced company's wordmark: a bold italic name over a small byline */
  brand: { name: string; byline?: string };
  /** the sentence after the wordmark, up to the link */
  text: string;
  /** the underlined link at the end of the sentence */
  link: { label: string; href: string };
  /** what follows the link, e.g. "." */
  after?: string;
  className?: string;
}

/** The cobalt announcement strip above the header. */
export function AnchorageAnnouncement({ lead, brand, text, link, after, className }: AnchorageAnnouncementProps) {
  return (
    <div className={cn("bg-primary px-gutter py-2.5 text-primary-foreground", className)}>
      <p className="mx-auto flex max-w-page flex-wrap items-center justify-center gap-x-4 gap-y-0.5 text-center text-base leading-[1.6] font-semibold lg:min-h-10">
        <span>{lead}</span>
        <span className="inline-flex flex-col items-start leading-none">
          <span className="font-display text-[1.375rem] leading-[1] font-extrabold tracking-[-0.02em] italic">{brand.name}</span>
          {brand.byline && <span className="text-[0.6875rem] leading-[1.2] font-medium">{brand.byline}</span>}
        </span>
        <span>
          {text}{" "}
          <a href={link.href} className="underline underline-offset-2 transition-opacity duration-300 hover:opacity-60 motion-reduce:transition-none">
            {link.label}
          </a>
          {after}
        </span>
      </p>
    </div>
  );
}
