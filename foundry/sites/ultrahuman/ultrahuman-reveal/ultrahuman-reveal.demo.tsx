import { UltrahumanReveal } from "./ultrahuman-reveal";

const cards = ["Resting pulse", "Skin temperature", "Sleep stages"];

export default function Demo() {
  return (
    <div className="bg-background px-8 pt-[60vh] pb-24 text-foreground">
      <UltrahumanReveal as="h2" className="text-4xl tracking-[-0.025em]">
        Scroll to reveal
      </UltrahumanReveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {cards.map((card, i) => (
          <UltrahumanReveal key={card} step={i} className="h-48 rounded-lg bg-muted p-6">
            {card}
          </UltrahumanReveal>
        ))}
      </div>
    </div>
  );
}
