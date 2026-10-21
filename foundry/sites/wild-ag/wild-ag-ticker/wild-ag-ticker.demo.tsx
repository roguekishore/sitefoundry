import { WildAgTicker } from "./wild-ag-ticker";

const words = ["Plot", "Plan", "Build", "Keep", "Plot", "Plan", "Build", "Keep"];

export default function Demo() {
  return (
    <div className="bg-background py-24">
      <WildAgTicker duration={20} gap="3rem">
        {words.map((w, i) => (
          <span key={i} className="font-display text-7xl text-primary uppercase italic">
            {w}
          </span>
        ))}
      </WildAgTicker>
    </div>
  );
}
