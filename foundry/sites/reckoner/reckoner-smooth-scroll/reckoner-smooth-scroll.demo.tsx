import { ReckonerSmoothScroll } from "./reckoner-smooth-scroll";

const rows = Array.from({ length: 12 }, (_, i) => i + 1);

export default function Demo() {
  return (
    <div className="bg-background p-8 text-foreground">
      <ReckonerSmoothScroll />
      {rows.map((n) => (
        <div key={n} className="mb-5 h-40 rounded-sm border border-border bg-muted" />
      ))}
    </div>
  );
}
