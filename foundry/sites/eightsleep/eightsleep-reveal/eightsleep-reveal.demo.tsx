import { EightsleepReveal } from "./eightsleep-reveal";

export default function Demo() {
  return (
    <div className="bg-background px-gutter py-[60vh] text-center text-foreground">
      <EightsleepReveal step={0} className="font-display text-[44px] leading-[1.1]">Cooler nights, by design</EightsleepReveal>
      <EightsleepReveal step={1} className="mt-4 text-[18px] text-muted-foreground">Each line follows the one before it by a beat.</EightsleepReveal>
    </div>
  );
}
