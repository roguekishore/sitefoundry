import { EightsleepMarquee } from "./eightsleep-marquee";

export default function Demo() {
  return (
    <div className="bg-secondary py-section">
      <EightsleepMarquee
        duration={30}
        items={["Rested", "Cooler", "Steadier", "Deeper", "Quieter", "Lighter"].map((word) => (
          <div key={word} className="flex h-40 w-64 items-center justify-center rounded-lg bg-card text-[22px] text-card-foreground">
            {word}
          </div>
        ))}
      />
    </div>
  );
}
