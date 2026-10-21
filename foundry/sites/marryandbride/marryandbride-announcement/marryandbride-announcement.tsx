import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface MarryandbrideAnnouncementProps {
  /** the messages, shown one at a time in turn */
  messages: string[];
  /** seconds each message stays */
  interval?: number;
  /** screen-reader label of the close button */
  closeLabel: string;
  className?: string;
}

/** A thin dark top bar whose centred uppercase messages crossfade in turn; closable. */
export function MarryandbrideAnnouncement({ messages, interval = 4, closeLabel, className }: MarryandbrideAnnouncementProps) {
  const [current, setCurrent] = useState(0);
  const [closed, setClosed] = useState(false);

  // step to the next message every `interval` seconds
  useEffect(() => {
    if (messages.length < 2) return;
    const timer = window.setInterval(() => setCurrent((i) => (i + 1) % messages.length), interval * 1000);
    return () => window.clearInterval(timer);
  }, [messages.length, interval]);

  if (closed) return null;

  return (
    <div className={cn("relative z-[60] h-10 bg-foreground font-sans text-background lg:h-[1.875rem]", className)}>
      <div className="relative mx-auto h-full max-w-xl px-10">
        {messages.map((message, i) => (
          <p
            key={message}
            aria-hidden={i !== current}
            className={cn(
              "absolute inset-0 flex items-center justify-center text-center text-[0.65rem] leading-none tracking-[0.07em] uppercase transition-opacity duration-500 ease-in-out motion-reduce:transition-none lg:text-[0.7rem]",
              i === current ? "opacity-100" : "opacity-0",
            )}
          >
            {message}
          </p>
        ))}
      </div>
      <button
        type="button"
        aria-label={closeLabel}
        onClick={() => setClosed(true)}
        className="absolute top-1/2 right-gutter -translate-y-1/2 transition-opacity duration-200 hover:opacity-70"
      >
        <X className="size-3.5" strokeWidth={1.5} />
      </button>
    </div>
  );
}
