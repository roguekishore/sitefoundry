import { OnEnergySmoothScroll } from "./on-energy-smooth-scroll";

const bands = Array.from({ length: 8 }, (_, i) => i);

export default function Demo() {
  return (
    <div className="bg-background">
      <OnEnergySmoothScroll />
      {bands.map((n) => (
        <div key={n} className={n % 3 === 0 ? "h-72 bg-primary" : n % 3 === 1 ? "h-72 bg-card" : "h-72 bg-foreground"} />
      ))}
    </div>
  );
}
