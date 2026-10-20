import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./typesomething-chat.css";

export interface TypesomethingChatMessage {
  /** assistant: dark bubble on the right · user: blush bubble on the left */
  from: "assistant" | "user";
  /** the message, one string per paragraph */
  paragraphs: string[];
  /** a bold link after the paragraphs (e.g. a preview address) */
  link?: { label: string; href: string };
}

export interface TypesomethingChatProps {
  /** the conversation, top to bottom */
  messages: TypesomethingChatMessage[];
  /** the assistant's round avatar (an img or an icon); a grey disc when empty */
  assistantAvatar?: ReactNode;
  /** the user's round avatar (an img); a grey disc when empty */
  userAvatar?: ReactNode;
  /** name of the conversation, for screen readers */
  label?: string;
  className?: string;
}

function Avatar({ children }: { children?: ReactNode }) {
  return (
    <span className="size-[2.15rem] shrink-0 overflow-clip rounded-full border-2 border-background bg-muted shadow-[0_4px_12.8px_color-mix(in_oklab,var(--foreground)_14%,transparent)] lg:size-10 [&>img]:size-full [&>img]:object-cover">
      {children}
    </span>
  );
}

/**
 * A chat transcript in a white app window on paper-grey: the assistant's dark bubbles on the
 * right, the user's blush bubbles on the left, each beside a round avatar. Every message
 * rises 12px and fades in as it scrolls into view.
 */
export function TypesomethingChat({ messages, assistantAvatar, userAvatar, label, className }: TypesomethingChatProps) {
  return (
    <section aria-label={label} className={cn("bg-muted py-section text-foreground lg:py-28", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <div className="overflow-clip rounded-lg border border-foreground/14 bg-card shadow-[0_28px_80px_color-mix(in_oklab,var(--foreground)_10%,transparent)]">
          <div aria-hidden className="flex h-[2.3rem] items-center gap-1.5 border-b border-foreground/14 bg-muted px-4">
            <span className="size-2.5 rounded-full bg-primary" />
            <span className="size-2.5 rounded-full bg-foreground/20" />
            <span className="size-2.5 rounded-full bg-foreground/20" />
          </div>
          <ol className="flex flex-col gap-4 px-[1.1rem] py-4 lg:px-10 lg:py-10">
            {messages.map((m, i) => {
              const mine = m.from === "user";
              return (
                <li
                  key={i}
                  className={cn("typesomething-chat-message flex items-start gap-2.5 lg:gap-3", mine ? "flex-row" : "flex-row-reverse")}
                >
                  <Avatar>{mine ? userAvatar : assistantAvatar}</Avatar>
                  <div
                    className={cn(
                      "flex-1 space-y-3 px-4 py-3.5 text-[0.78rem] leading-[1.55] lg:w-[46rem] lg:flex-none lg:text-[0.92rem]",
                      mine
                        ? "rounded-[1.5rem_1.5rem_1.5rem_0.3rem] bg-highlight text-highlight-foreground"
                        : "rounded-[1.5rem_1.5rem_0.3rem_1.5rem] bg-foreground text-background",
                    )}
                  >
                    {m.paragraphs.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                    {m.link && (
                      <a href={m.link.href} className={cn("block font-bold underline-offset-4 hover:underline", mine ? "" : "text-primary")}>
                        {m.link.label}
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
