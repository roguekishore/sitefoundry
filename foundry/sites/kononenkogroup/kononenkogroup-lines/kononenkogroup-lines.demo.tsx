import { KononenkogroupLines } from "./kononenkogroup-lines";

export default function Demo() {
  return (
    <div className="bg-background px-gutter py-[60vh] text-foreground">
      <KononenkogroupLines
        as="h2"
        text={["Measured", "Light & Structure"]}
        className="text-center font-sans text-[10.67vw] leading-[0.85] tracking-[-0.03em] lg:text-[9.1vw]"
      />
      <KononenkogroupLines
        text="Massing, elevations and floor plans, design development, construction drawings and renderings, worked out line by line."
        className="mt-[30vh] font-display text-[9.6vw] leading-[0.9] tracking-[-0.03em] indent-[10.8vw] lg:text-[6.15vw] lg:indent-[6.53vw]"
      />
    </div>
  );
}
