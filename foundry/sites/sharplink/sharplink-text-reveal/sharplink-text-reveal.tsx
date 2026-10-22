import type { CSSProperties, ElementType } from "react";
import { cn } from "@foundry/foundry-utils";
import "./sharplink-text-reveal.css";

export interface SharplinkTextRevealProps {
  /** the text; a line break ("\n") forces a new line */
  text: string;
  /** the element to render (h2 by default) */
  as?: ElementType;
  /**
   * letters: letters fade in from nothing in a scattered order.
   * dim: letters brighten from 35% in a scattered order.
   * words: words brighten from 35% one after another, in reading order.
   */
  mode?: "letters" | "dim" | "words";
  /** where the reveal runs, as [start, end] percentages of the timeline's cover range */
  range?: [number, number];
  /** a parent's named view timeline to follow (e.g. "--my-stage"); the text's own by default */
  timeline?: string;
  className?: string;
}

/** A stable, scattered number between 0 and 1 for piece i. */
function scatter(i: number) {
  return ((i * 7919 + 13) % 101) / 100;
}

/** Text whose letters or words appear as it scrolls into view (CSS scroll-driven). */
export function SharplinkTextReveal({ text, as: Tag = "h2", mode = "letters", range, timeline, className }: SharplinkTextRevealProps) {
  const [start, end] = range ?? (mode === "words" ? [20, 55] : [8, 42]);
  const span = end - start;
  const lines = text.split("\n").map((line) => line.split(" ").filter(Boolean));
  const total = lines.reduce((n, words) => n + (mode === "words" ? words.length : words.join("").length), 0);
  const slice = mode === "words" ? Math.max(span / Math.max(total, 1), span * 0.08) : span * 0.3;
  let count = 0;
  const piece = (content: string, key: string) => {
    const i = count++;
    const at = mode === "words" ? total > 1 ? i / (total - 1) : 0 : scatter(i);
    const a = start + at * (span - slice);
    return (
      <span key={key} className="sharplink-text-reveal-piece" style={{ "--sl-a": `${a.toFixed(2)}%`, "--sl-b": `${(a + slice).toFixed(2)}%` } as CSSProperties}>
        {content}
      </span>
    );
  };
  const style = {
    "--sharplink-text-reveal-from": mode === "letters" ? 0 : 0.35,
    ...(timeline ? { "--sharplink-text-reveal-timeline": timeline } : {}),
  } as CSSProperties;
  return (
    <Tag className={cn("sharplink-text-reveal", className)} style={style} aria-label={text.replace(/\n/g, " ")}>
      <span aria-hidden>
        {lines.map((words, l) => (
          <span key={l}>
            {l > 0 && <br />}
            {words.map((word, w) => (
              <span key={w}>
                {w > 0 && " "}
                {mode === "words" ? (
                  piece(word, "w")
                ) : (
                  <span className="inline-block whitespace-nowrap">{[...word].map((ch, c) => piece(ch, String(c)))}</span>
                )}
              </span>
            ))}
          </span>
        ))}
      </span>
    </Tag>
  );
}
