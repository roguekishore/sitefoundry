import { cn } from "@foundry/foundry-utils";

export interface GalaxyFootnoteProps {
  /** the note, e.g. "Figures as of …" */
  text: string;
  className?: string;
}

export function GalaxyFootnote({ text, className }: GalaxyFootnoteProps) {
  return (
    <section className={cn("bg-background pt-16 pb-14 text-muted-foreground lg:pt-16 lg:pb-[5.75rem]", className)}>
      <p className="mx-auto max-w-page px-gutter text-sm leading-5 tracking-[0.1em] uppercase lg:pl-[calc(var(--page-gutter)+17.5rem)]">{text}</p>
    </section>
  );
}
