import { ZettaJouleButton } from "@foundry/zetta-joule-button";
import { ZettaJouleSplitHeading } from "./zetta-joule-split-heading";

export default function Demo() {
  return (
    <div className="grid gap-16">
      <div className="bg-secondary px-gutter py-16 text-foreground lg:px-10">
        <ZettaJouleSplitHeading
          heading={"Modernizing\nProven Technology"}
          body="We build on a reactor design that has run for decades, updated with modern materials and digital controls, to deliver industrial heat up to 950 °C."
        >
          <ZettaJouleButton label="Explore the technology" />
        </ZettaJouleSplitHeading>
      </div>
      <div className="dark bg-background px-gutter py-16 text-foreground lg:px-10">
        <ZettaJouleSplitHeading heading={"Unmatched\nHeat Capabilities"} bodyTone="strong" body="Our reactor is designed to run far hotter than water-cooled plants, while still delivering steady power." />
      </div>
    </div>
  );
}
