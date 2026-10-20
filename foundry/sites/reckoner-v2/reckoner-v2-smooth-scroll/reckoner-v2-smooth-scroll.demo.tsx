import { ReckonerV2SmoothScroll } from "./reckoner-v2-smooth-scroll";

const rows = Array.from({ length: 12 }, (_, i) => i + 1);

export default function Demo() {
  return (
    <div className="bg-background p-8 text-foreground">
      <ReckonerV2SmoothScroll />
      {rows.map((n) => (
        <div key={n} className="mb-5 h-40 bg-card" />
      ))}
    </div>
  );
}
