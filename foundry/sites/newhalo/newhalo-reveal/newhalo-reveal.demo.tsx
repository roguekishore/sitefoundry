import { NewhaloReveal } from "./newhalo-reveal";

const effects = ["fade", "rise", "rise-sm", "zoom", "bloom"] as const;

export default function Demo() {
  return (
    <div className="bg-background px-8 pt-[60vh] pb-[40vh] text-foreground">
      <ul className="grid gap-6 sm:grid-cols-5">
        {effects.map((effect, i) => (
          <NewhaloReveal key={effect} as="li" effect={effect} step={i} className="grid aspect-square place-items-center rounded-lg bg-card text-lg">
            {effect}
          </NewhaloReveal>
        ))}
      </ul>
      <div className="mt-16 aspect-[2] overflow-clip rounded-lg">
        <NewhaloReveal effect="drift" drift={40} className="-my-12 h-[calc(100%+6rem)] bg-muted" />
      </div>
    </div>
  );
}
