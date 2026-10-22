import { SharplinkTextReveal } from "./sharplink-text-reveal";

export default function Demo() {
  return (
    <div className="bg-background px-gutter py-[70vh] text-foreground">
      <SharplinkTextReveal text={"Yield by\nDesign"} className="font-display text-[2.75rem] leading-[1.15] font-medium tracking-[-0.02em] lg:text-[4.25rem]" />
      <div className="h-[40vh]" />
      <SharplinkTextReveal mode="dim" as="h3" text={"Run by Seasoned\nOperators"} className="font-display text-[2rem] leading-[1.16] font-medium" />
      <div className="h-[40vh]" />
      <SharplinkTextReveal
        mode="words"
        as="p"
        text="Lumen is becoming the settlement layer for a new kind of market, and owning it is the clearest long-term position of the decade."
        className="max-w-4xl text-2xl leading-[1.4] font-medium lg:text-[2.75rem] lg:leading-[1.23]"
      />
    </div>
  );
}
