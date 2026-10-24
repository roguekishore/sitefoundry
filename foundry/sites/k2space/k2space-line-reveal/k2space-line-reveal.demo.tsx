import { K2spaceLineReveal } from "./k2space-line-reveal";

export default function Demo() {
  return (
    <div className="bg-background px-gutter py-[60vh] text-foreground">
      <K2spaceLineReveal
        as="p"
        className="max-w-[69vw] font-display text-[34px]/none font-[560] lg:text-[3.307vw]/none"
        text="More mass means more margin. Heavier buses carry wider arrays, deeper tanks and room for the payloads others leave on the ground."
      />
    </div>
  );
}
