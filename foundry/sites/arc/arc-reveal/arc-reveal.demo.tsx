import { ArcReveal } from "./arc-reveal";

const labels = ["First", "Second", "Third"];

export default function Demo() {
  return (
    <div className="bg-background px-gutter pt-[80vh] pb-32 text-foreground">
      <div className="grid gap-6 sm:grid-cols-3">
        {labels.map((label, i) => (
          <ArcReveal key={label} step={i}>
            <div className="rounded-[calc(var(--radius)+12px)] bg-accent p-10 text-lg">{label}</div>
          </ArcReveal>
        ))}
      </div>
    </div>
  );
}
