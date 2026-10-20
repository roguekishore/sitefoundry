import { WiemerV2SplitHeading } from "./wiemer-v2-split-heading";

export default function Demo() {
  return (
    <div className="bg-background px-gutter pt-[80vh] pb-[50vh] text-foreground">
      <WiemerV2SplitHeading text={"Four plates,\none Ilse."} className="font-display text-[4rem] leading-[1.1] font-medium tracking-[-0.01em] lg:text-[9vw]" />
      <WiemerV2SplitHeading as="h3" text="Simple on purpose. Ilse, the side table." className="mt-24 text-xl font-medium lg:text-[1.6vw]" />
    </div>
  );
}
