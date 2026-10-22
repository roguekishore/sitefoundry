import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./rho-tone-flow.css";

export interface RhoToneFlowProps {
  /** the page's sections; those with data-rho-tone take part */
  children: ReactNode;
  /** tone before the first section is measured */
  initialTone?: "dark" | "light";
  className?: string;
}

export function RhoToneFlow({ children, initialTone = "dark", className }: RhoToneFlowProps) {
  const root = useRef<HTMLDivElement>(null);
  const [tone, setTone] = useState(initialTone);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const sections = Array.from(el.querySelectorAll<HTMLElement>("[data-rho-tone]"));
    if (!sections.length) return;
    // A one-pixel line across the middle of the window: the section it crosses sets the tone.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const next = (entry.target as HTMLElement).dataset.rhoTone;
            if (next === "dark" || next === "light") setTone(next);
          }
        }
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    setOn(true);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={root}
      data-rho-flow={on ? "on" : undefined}
      className={cn(on && tone === "dark" && "dark", "bg-background text-foreground", className)}
    >
      {children}
    </div>
  );
}
