import { LedupReveal } from "./ledup-reveal";

const cards = ["Linear profiles", "Downlights", "Floodlights"];

export default function Demo() {
  return (
    <div className="bg-background px-gutter py-[70svh] font-sans text-foreground">
      <LedupReveal distance={40}>
        <h2 className="text-center text-4xl font-medium">Light that arrives on cue</h2>
      </LedupReveal>
      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {cards.map((c, i) => (
          <LedupReveal key={c} distance={40} step={i}>
            <div className="h-40 rounded-lg bg-card p-5 shadow-[0_0_20px_var(--muted)]">{c}</div>
          </LedupReveal>
        ))}
      </div>
    </div>
  );
}
