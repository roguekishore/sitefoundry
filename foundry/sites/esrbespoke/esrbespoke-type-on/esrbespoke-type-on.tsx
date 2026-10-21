import { useEffect, useRef, type CSSProperties } from "react";
import { cn } from "@foundry/foundry-utils";
import "./esrbespoke-type-on.css";

export interface EsrbespokeTypeOnProps {
  /** the text to type on */
  text: string;
  /** milliseconds between two letters */
  step?: number;
  /** milliseconds to wait before the first letter */
  delay?: number;
  /** the element to render */
  as?: "span" | "p" | "div";
  /**
   * when to start: "view" when it scrolls into view; "page-end" for text inside a footer the
   * page lifts off (stuck underneath, so always "in view"): when the page is near its end.
   * "page-end" falls back to "view" when no ancestor is actually sticky (e.g. on phones).
   */
  trigger?: "view" | "page-end";
  className?: string;
}

/**
 * Text whose letters appear one after another when it comes into view. The text is complete
 * in static HTML; JavaScript hides the letters only once it can also show them again.
 */
export function EsrbespokeTypeOn({ text, step = 12, delay = 0, as: Tag = "span", trigger = "view", className }: EsrbespokeTypeOnProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.setAttribute("data-armed", "");
    // one frame later, so the hidden state is painted before the transition starts
    const start = () => requestAnimationFrame(() => el.setAttribute("data-on", ""));

    let stuck = false;
    for (let node = el.parentElement; node && trigger === "page-end"; node = node.parentElement) {
      if (getComputedStyle(node).position === "sticky") {
        stuck = true;
        break;
      }
    }
    if (stuck) {
      const onScroll = () => {
        const left = document.documentElement.scrollHeight - window.scrollY - window.innerHeight;
        if (left < window.innerHeight * 0.4) {
          start();
          window.removeEventListener("scroll", onScroll);
        }
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
      return () => window.removeEventListener("scroll", onScroll);
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          start();
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [trigger]);

  let index = 0;
  const words = text.split(/(\s+)/);
  const style = { "--esrbespoke-type-on-step": `${step}ms`, "--esrbespoke-type-on-start": `${delay}ms` } as CSSProperties;

  return (
    <Tag ref={ref as never} className={cn("esrbespoke-type-on", className)} style={style} aria-label={text}>
      {words.map((word, w) =>
        /^\s+$/.test(word) ? (
          <span key={w} aria-hidden>
            {word}
          </span>
        ) : (
          <span key={w} aria-hidden className="inline-block whitespace-nowrap">
            {Array.from(word).map((char, c) => (
              <span
                key={c}
                className="esrbespoke-type-on-char"
                style={{ "--esrbespoke-type-on-i": index++ } as CSSProperties}
              >
                {char}
              </span>
            ))}
          </span>
        ),
      )}
    </Tag>
  );
}
