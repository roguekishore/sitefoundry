import type { CSSProperties } from "react";
import { cn } from "@foundry/foundry-utils";
import "./hhhusher-lines.css";

export interface HhhusherLinesProps {
  /** the text, one entry per line as it breaks on a wide screen */
  lines: string[];
  /** the element to render */
  as?: "h1" | "h2" | "h3" | "p";
  /**
   * rise: each line rises (later lines from further down) and fades in as it scrolls into view
   * · none: no motion
   */
  reveal?: "rise" | "none";
  className?: string;
}

/**
 * Text set line by line. From 64rem up each line is its own row and rises into place as it
 * scrolls into view, later lines a little later and from further down. Below that the lines
 * flow together as one paragraph (so phones break them naturally) and only fade in, in turn.
 */
export function HhhusherLines({ lines, as: Tag = "p", reveal = "rise", className }: HhhusherLinesProps) {
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span
          key={i}
          className={cn("lg:block", reveal === "rise" && "hhhusher-line")}
          style={{ "--hhhusher-line": i } as CSSProperties}
        >
          {line}
          {i < lines.length - 1 && " "}
        </span>
      ))}
    </Tag>
  );
}
