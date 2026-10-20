import { PlumeformV2Reveal } from "./plumeform-v2-reveal";

const cards = ["Draft", "Share", "Read"];

export default function Demo() {
  return (
    <div className="bg-background px-gutter py-[60vh] text-foreground">
      <ul className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-3">
        {cards.map((c, i) => (
          <PlumeformV2Reveal as="li" key={c} step={i} className="rounded-2xl border border-border bg-card p-8 text-lg font-bold">
            {c}
          </PlumeformV2Reveal>
        ))}
      </ul>
    </div>
  );
}
