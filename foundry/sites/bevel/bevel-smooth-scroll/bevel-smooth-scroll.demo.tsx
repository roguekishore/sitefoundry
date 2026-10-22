import { BevelSmoothScroll } from "./bevel-smooth-scroll";

const rows = Array.from({ length: 12 }, (_, i) => i + 1);

export default function Demo() {
  return (
    <div className="bg-background p-8 text-foreground">
      <BevelSmoothScroll />
      {rows.map((n) => (
        <div key={n} className="mb-4 h-40 rounded-[2rem] bg-card" />
      ))}
    </div>
  );
}
