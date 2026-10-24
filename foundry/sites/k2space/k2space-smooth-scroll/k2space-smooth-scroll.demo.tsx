import { K2spaceSmoothScroll } from "./k2space-smooth-scroll";

const rows = Array.from({ length: 12 }, (_, i) => i + 1);

export default function Demo() {
  return (
    <div className="bg-background p-8 text-foreground">
      <K2spaceSmoothScroll />
      {rows.map((n) => (
        <div key={n} className="mb-6 h-40 bg-secondary" />
      ))}
    </div>
  );
}
