// Gallery only.
import { StripeArt, type StripeArtVariant } from "./stripe-art";

const all: StripeArtVariant[] = ["bloom", "dusk", "tide", "grid", "aerial", "facade", "market", "ribbon", "violet"];

export default function Demo() {
  return (
    <div className="grid grid-cols-2 gap-3 bg-background p-4 sm:grid-cols-3">
      {all.map((v) => (
        <div key={v} className="h-48 overflow-hidden rounded-lg">
          <StripeArt variant={v} />
        </div>
      ))}
    </div>
  );
}
