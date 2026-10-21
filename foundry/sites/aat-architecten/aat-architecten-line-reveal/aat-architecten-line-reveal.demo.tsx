import { AatArchitectenLineReveal } from "./aat-architecten-line-reveal";

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <div className="h-[80svh]" />
      <div className="mx-auto max-w-page px-gutter py-section">
        <AatArchitectenLineReveal
          className="max-w-[56rem] indent-[7.125rem] text-[clamp(20px,1.3vw+0.8rem,32px)] leading-[1.375] lg:indent-[11.5rem] lg:leading-[1.25]"
          text="A plan is finished when nobody has to think about it: the corridor ends at a window, the stair is where the hand expects it, and the morning sun reaches the desk before the people do."
        />
      </div>
      <div className="h-[60svh]" />
    </div>
  );
}
