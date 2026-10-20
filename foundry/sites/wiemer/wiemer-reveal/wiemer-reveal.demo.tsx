import { WiemerSplitText, wiemerDriftFrame, wiemerReveal, wiemerRevealStyle } from "./wiemer-reveal";

export default function Demo() {
  return (
    <div className="bg-background px-gutter pt-[70vh] pb-[40vh] text-foreground">
      <WiemerSplitText text={"Good morning,\nRaster."} className="font-display text-[64px] leading-[1.1] md:text-[9vw]" />
      <WiemerSplitText as="p" size="sm" text="A table you keep for thirty years." className="mt-16 text-xl font-medium" />
      <p className={wiemerReveal("rise")} style={wiemerRevealStyle(40)}>
        A paragraph rises 24px and fades in a little after the subline above it.
      </p>
      <div className={`${wiemerDriftFrame} mt-16 aspect-[2/3] max-w-sm overflow-clip rounded-2xl`}>
        <div className={`${wiemerReveal("drift")} -my-12 h-[calc(100%+6rem)] bg-muted`} style={wiemerRevealStyle(0, 46)} />
      </div>
    </div>
  );
}
