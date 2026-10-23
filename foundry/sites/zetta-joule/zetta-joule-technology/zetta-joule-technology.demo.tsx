import { ZettaJouleTechnology, type ZettaJouleTechnologyProps } from "./zetta-joule-technology";

export const technologySample: ZettaJouleTechnologyProps = {
  heading: "Proven Design,\nModern Build",
  body: "We start from a high-temperature gas reactor that has run safely for decades, then update its materials, controls and construction to deliver industrial process heat up to 950 °C.",
  cta: { label: "Explore Our Technology", href: "#" },
  callout: {
    title: "Built to Blend In",
    text: "Each plant is a compact energy campus with softened lines, low buildings and quiet landscaping that settle into the surrounding countryside.",
  },
};

export default function Demo() {
  return <ZettaJouleTechnology {...technologySample} />;
}
