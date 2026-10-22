import { BevelCard, type BevelTint } from "./bevel-card";

const tints: BevelTint[] = ["peach", "blue", "green", "lavender", "teal", "pink"];

export default function Demo() {
  return (
    <div className="grid gap-6 bg-background p-8 sm:grid-cols-3">
      {tints.map((tint, i) => (
        <BevelCard key={tint} tint={tint} wash={i > 3 ? "bloom" : "rise"} className="h-72" />
      ))}
    </div>
  );
}
