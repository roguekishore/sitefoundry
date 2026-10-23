import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { RaycastPlaceholder } from "@foundry/raycast-placeholder";
import "./raycast-notes.css";

export interface RaycastNotesProps {
  /** the first line, white (a question) */
  question: ReactNode;
  /** the opening answer, white with a faint glow */
  answer: ReactNode;
  /** the long paragraph that follows; its words brighten one by one while scrolling (plain text) */
  body: string;
  /** the small chip: an icon and a name */
  chip: { icon: ReactNode; label: ReactNode };
  /** the grey note under the chip (desktop) with its underlined link */
  note: { text: ReactNode; link: { label: ReactNode; href: string } };
  /** the window shot; a token placeholder when empty */
  media?: ReactNode;
  className?: string;
}

/** Window slot beside (or above) a paragraph that brightens word by word as it scrolls into view. */
export function RaycastNotes({ question, answer, body, chip, note, media, className }: RaycastNotesProps) {
  const words = body.split(/\s+/).filter(Boolean);
  return (
    <section className={cn("overflow-clip bg-background px-gutter py-section text-foreground lg:py-48", className)}>
      <div className="mx-auto grid max-w-page gap-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-6">
        <div className="aspect-square max-w-[20.375rem] overflow-clip rounded-[0.5625rem] max-lg:self-center lg:order-2 lg:-mr-14 lg:w-[calc(100%+3.5rem)] lg:max-w-none [&>*]:size-full">
          {media ?? <RaycastPlaceholder tone="panel" className="rounded-[0.5625rem]" />}
        </div>

        <div className="flex flex-col lg:order-1">
          <span className="inline-flex w-fit items-center gap-2 rounded-lg bg-foreground/[0.08] px-2.5 py-1.5 text-sm font-semibold tracking-[0.2px] max-lg:order-1 lg:order-2 lg:mt-24 [&_svg]:size-4">
            {chip.icon}
            {chip.label}
          </span>
          <p className="text-2xl leading-[1.6] font-medium tracking-[0.2px] max-lg:order-2 max-lg:mt-8 lg:order-1 lg:max-w-[25rem] lg:leading-[1.6]">
            <span className="block font-semibold">{question}</span>
            <span className="font-semibold [text-shadow:0_0_24px_color-mix(in_oklab,var(--glow)_55%,transparent)]">{answer}</span>{" "}
            {words.map((w, i) => (
              <span key={i} className="raycast-notes-word text-foreground/20">
                {w}{" "}
              </span>
            ))}
          </p>
          <p className="mt-5 hidden max-w-[17rem] text-sm leading-[1.65] font-medium tracking-[0.2px] text-muted-foreground lg:order-3 lg:block">
            {note.text}{" "}
            <a href={note.link.href} className="underline underline-offset-2 transition-colors hover:text-foreground">
              {note.link.label}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
