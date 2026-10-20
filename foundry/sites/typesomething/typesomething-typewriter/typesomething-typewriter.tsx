import { useEffect, useState } from "react";
import { cn } from "@foundry/foundry-utils";
import "./typesomething-typewriter.css";

export interface TypesomethingTypewriterProps {
  /** the words typed one after another, then erased; one word types and erases itself on a loop */
  words: string[];
  /** the glyph after the text, blinking like a terminal cursor */
  cursor?: string;
  /** keep the width of the longest word, so nothing after it moves while it types */
  reserve?: boolean;
  /** milliseconds per typed letter */
  typeMs?: number;
  /** milliseconds per erased letter */
  eraseMs?: number;
  /** how long a finished word stays before it's erased (ms) */
  holdMs?: number;
  /** pause on an empty line before the next word (ms) */
  gapMs?: number;
  /** classes for the cursor (e.g. a colour) */
  cursorClassName?: string;
  className?: string;
}

/**
 * Types each word letter by letter, holds it, erases it and moves on. The static HTML (and
 * reduced motion) shows the first word in full; the loop starts once React hydrates.
 */
export function TypesomethingTypewriter({
  words,
  cursor = "_",
  reserve = false,
  typeMs = 90,
  eraseMs = 45,
  holdMs = 1800,
  gapMs = 350,
  cursorClassName,
  className,
}: TypesomethingTypewriterProps) {
  const first = words[0] ?? "";
  const [text, setText] = useState(first);
  // the words as one string, so a new array with the same words doesn't restart the loop
  const key = words.join("\n");

  useEffect(() => {
    const words = key ? key.split("\n") : [];
    if (!words.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let index = 0;
    let shown = words[0].length;
    let erasing = true;
    let timer: ReturnType<typeof setTimeout>;

    // One step of the loop: erase a letter, or type a letter, or wait at either end.
    const step = () => {
      const word = words[index];
      if (erasing) {
        if (shown > 0) {
          shown -= 1;
          setText(word.slice(0, shown));
          timer = setTimeout(step, eraseMs);
        } else {
          erasing = false;
          index = (index + 1) % words.length;
          timer = setTimeout(step, gapMs);
        }
      } else if (shown < word.length) {
        shown += 1;
        setText(word.slice(0, shown));
        timer = setTimeout(step, typeMs);
      } else {
        erasing = true;
        timer = setTimeout(step, holdMs);
      }
    };
    timer = setTimeout(step, holdMs);
    return () => clearTimeout(timer);
  }, [key, typeMs, eraseMs, holdMs, gapMs]);

  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), "");

  return (
    <span className={cn("relative inline-flex items-baseline whitespace-nowrap", className)}>
      {/* screen readers hear every word once, never the typing */}
      <span className="sr-only">{words.join(", ")}</span>
      <span aria-hidden className={cn(reserve && "inline-grid text-left")}>
        {reserve && <span className="invisible [grid-area:1/1]">{longest}{cursor}</span>}
        <span className={cn(reserve && "[grid-area:1/1]")}>
          {text}
          <span className={cn("typesomething-typewriter-cursor", cursorClassName)}>{cursor}</span>
        </span>
      </span>
    </span>
  );
}
