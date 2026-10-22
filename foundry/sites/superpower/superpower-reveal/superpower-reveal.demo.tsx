import { SuperpowerReveal } from "./superpower-reveal";

const cards = ["Draw", "Read", "Act", "Retest"];

export default function Demo() {
  return (
    <div className="bg-background px-gutter py-[70vh] text-foreground">
      <ul className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-4">
        {cards.map((c, i) => (
          <SuperpowerReveal as="li" key={c} step={i} className="rounded-lg bg-muted p-8 text-lg">
            {c}
          </SuperpowerReveal>
        ))}
      </ul>
    </div>
  );
}
