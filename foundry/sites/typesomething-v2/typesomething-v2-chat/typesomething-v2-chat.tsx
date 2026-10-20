import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./typesomething-v2-chat.css";

export interface TypesomethingV2ChatMessage {
  /** assistant: ink bubble on the right · user: pink bubble on the left */
  from: "assistant" | "user";
  /** one entry per paragraph */
  paragraphs: ReactNode[];
  /** a bold lime link at the end of the bubble */
  link?: { label: string; href: string };
}

export interface TypesomethingV2ChatProps {
  messages: TypesomethingV2ChatMessage[];
  /** the assistant's avatar (media slot, 40px circle); empty shows a placeholder */
  assistantAvatar?: ReactNode;
  /** the customer's avatar (media slot, 40px circle); empty shows a placeholder */
  userAvatar?: ReactNode;
  /** no top padding: sits directly under the section above */
  joined?: boolean;
  className?: string;
}

function Avatar({ media, tone }: { media?: ReactNode; tone: "assistant" | "user" }) {
  return (
    <span
      className={cn(
        "size-10 shrink-0 overflow-clip rounded-full border-2 border-card shadow-[0_4px_13px_color-mix(in_oklab,var(--foreground)_14%,transparent)] [&>img]:size-full [&>img]:object-cover",
        !media && (tone === "assistant" ? "bg-secondary" : "bg-linear-to-br from-highlight to-muted"),
      )}
    >
      {media}
    </span>
  );
}

export function TypesomethingV2Chat({ messages, assistantAvatar, userAvatar, joined, className }: TypesomethingV2ChatProps) {
  return (
    <section className={cn("bg-muted pb-section text-foreground lg:pb-[calc(var(--section-y)*1.75)]", joined ? "pt-0" : "pt-section", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <div className="overflow-clip rounded-lg border border-border bg-card shadow-[0_28px_80px_color-mix(in_oklab,var(--foreground)_10%,transparent)]">
          <div aria-hidden className="flex h-9 items-center gap-1.5 border-b border-border bg-muted px-4">
            <span className="size-2.5 rounded-full bg-primary" />
            <span className="size-2.5 rounded-full bg-foreground/20" />
            <span className="size-2.5 rounded-full bg-foreground/20" />
          </div>
          <ol className="flex flex-col gap-4 p-4 lg:p-10">
            {messages.map((message, i) => {
              const mine = message.from === "assistant";
              return (
                <li key={i} className={cn("typesomething-v2-chat-message flex items-start gap-3", mine ? "flex-row-reverse" : "flex-row")}>
                  <Avatar media={mine ? assistantAvatar : userAvatar} tone={message.from} />
                  <div
                    className={cn(
                      "min-w-0 flex-1 space-y-2.5 px-4 py-3.5 text-[0.92rem] leading-[1.55] lg:max-w-[46rem] lg:text-[0.96rem]",
                      mine
                        ? "dark rounded-[var(--radius)_var(--radius)_calc(var(--radius)*0.2)_var(--radius)] bg-background text-foreground"
                        : "rounded-[var(--radius)_var(--radius)_var(--radius)_calc(var(--radius)*0.2)] bg-highlight text-highlight-foreground",
                    )}
                  >
                    {message.paragraphs.map((paragraph, j) => (
                      <p key={j}>{paragraph}</p>
                    ))}
                    {message.link && (
                      <a href={message.link.href} className="block truncate font-bold text-primary no-underline hover:underline">
                        {message.link.label}
                      </a>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
