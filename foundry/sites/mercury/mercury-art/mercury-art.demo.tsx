// Gallery only.
import { MercuryArt, type MercuryArtBar, type MercuryArtVariant } from "./mercury-art";

export const coverageBars: MercuryArtBar[] = [
  { value: "$4M", label: "With Larkspur", height: 0.9, lit: true },
  { value: "$250K", label: "Typical bank", height: 0.06 },
];

const all: MercuryArtVariant[] = ["valley", "studio", "lens", "beam", "globe", "ripple", "bars", "print", "toggles"];

export default function Demo() {
  return (
    <div className="grid grid-cols-2 gap-3 bg-background p-4 sm:grid-cols-3">
      {all.map((v) => (
        <div key={v} className="aspect-[4/5] overflow-hidden rounded-lg">
          <MercuryArt variant={v} bars={coverageBars} />
        </div>
      ))}
    </div>
  );
}
