import { GrowthbookV2SmoothScroll } from "./growthbook-v2-smooth-scroll";

const rows = Array.from({ length: 10 }, (_, i) => i + 1);

export default function Demo() {
  return (
    <div className="bg-background p-8">
      <GrowthbookV2SmoothScroll />
      {rows.map((n) => (
        <div key={n} className="mb-4 h-40 rounded-xl bg-muted" />
      ))}
    </div>
  );
}
