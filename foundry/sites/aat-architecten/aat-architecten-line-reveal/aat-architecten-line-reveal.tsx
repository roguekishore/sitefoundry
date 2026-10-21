import { useEffect, useRef, useState, type CSSProperties, type RefObject } from "react";
import { cn } from "@foundry/foundry-utils";
import "./aat-architecten-line-reveal.css";

export interface AatArchitectenLineRevealProps {
  /** the text; it is split into words, and the words into the lines the browser breaks them into */
  text: string;
  /** which element to render */
  as?: "p" | "div" | "h2" | "h3";
  /** delay between one line and the next, in seconds */
  step?: number;
  className?: string;
}

type Phase = "static" | "armed" | "in";

/**
 * Text whose lines rise out of masks, one after another, the first time it enters the window.
 * Server HTML shows the text in place; the hiding only starts once JavaScript has measured it.
 */
export function AatArchitectenLineReveal({ text, as = "p", step = 0.08, className }: AatArchitectenLineRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [phase, setPhase] = useState<Phase>("static");
  const [lines, setLines] = useState<number[]>([]);
  const words = text.split(/\s+/).filter(Boolean);
  const Tag = as as "p";

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Already scrolled past (e.g. a reload halfway down): leave it shown.
    if (el.getBoundingClientRect().bottom < 0) return;

    // Group the words into lines by their distance from the top of the block.
    const tops: number[] = [];
    const lineOf = Array.from(el.querySelectorAll<HTMLElement>("[data-word]")).map((word) => {
      const top = word.offsetTop;
      let line = tops.findIndex((t) => Math.abs(t - top) < 4);
      if (line < 0) line = tops.push(top) - 1;
      return line;
    });
    setLines(lineOf);
    setPhase("armed");

    let frame = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        // two frames, so the hidden state is painted before the slide starts
        frame = requestAnimationFrame(() => {
          frame = requestAnimationFrame(() => setPhase("in"));
        });
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [text]);

  return (
    <Tag
      ref={ref as RefObject<HTMLParagraphElement>}
      data-phase={phase}
      style={{ "--aat-reveal-step": `${step}s` } as CSSProperties}
      className={cn("aat-architecten-line-reveal", className)}
    >
      {words.map((word, i) => (
        <span key={i}>
          {i > 0 && " "}
          {/* indent-0: inline-blocks inherit text-indent, which belongs only to the first line */}
          <span data-word className="inline-block overflow-clip align-top indent-0">
            <span data-word-inner style={{ "--line": lines[i] ?? 0 } as CSSProperties}>
              {word}
            </span>
          </span>
        </span>
      ))}
    </Tag>
  );
}
