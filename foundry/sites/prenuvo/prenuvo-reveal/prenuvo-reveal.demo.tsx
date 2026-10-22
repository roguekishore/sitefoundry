import { PrenuvoReveal } from "./prenuvo-reveal";

const cards = ["Scan", "Review", "Track"];

export default function Demo() {
  return (
    <div className="bg-background px-gutter py-[60vh] text-foreground">
      <ul className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-3">
        {cards.map((c, i) => (
          <PrenuvoReveal as="li" key={c} step={i} className="rounded-2xl bg-muted p-8 font-display text-lg font-semibold">
            {c}
          </PrenuvoReveal>
        ))}
      </ul>
    </div>
  );
}
