import { OnEnergyReveal } from "./on-energy-reveal";

const tiles = ["Fade only", "Rise 60px", "Rise 60px, later"];

export default function Demo() {
  return (
    <div className="grid gap-4 bg-background px-gutter py-[80vh] text-foreground lg:grid-cols-3">
      {tiles.map((label, i) => (
        <OnEnergyReveal key={label} rise={i === 0 ? 0 : 60} delay={i === 2 ? 10 : 0} className="grid h-60 place-items-center rounded-[1.5rem] bg-card font-mono text-xs">
          {label}
        </OnEnergyReveal>
      ))}
    </div>
  );
}
