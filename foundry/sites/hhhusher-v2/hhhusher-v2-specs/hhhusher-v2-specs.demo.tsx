import { HhhusherV2Specs, type HhhusherV2SpecsProps } from "./hhhusher-v2-specs";

export const specsSample: HhhusherV2SpecsProps = {
  id: "specs",
  heading: "The Numbers\nThat Matter",
  note: "Before you order a hood, check it against your kit with the points below. Still unsure?",
  action: { label: "Ask", href: "#questions" },
  groups: [
    {
      name: "Quello Hood",
      rows: [
        { label: "Height", value: "54 mm (2.1 in)" },
        { label: "Depth", value: "172 mm (6.8 in)" },
        { label: "Width", value: "112 mm (4.4 in)" },
        { label: "Weight", value: "0.8 kg (1.8 lb)" },
        { label: "Made of", value: "Moulded fibre & wool felt" },
      ],
    },
    {
      name: "Your hats",
      rows: [
        { label: "Size", value: "13″ to 16″" },
        { label: "Weight", value: "Any" },
        { label: "Metal", value: "Bronze, brass, alloy" },
      ],
    },
    {
      name: "Your stand",
      rows: [
        { label: "Tube", value: "12 to 25 mm" },
        { label: "Shape", value: "Round" },
      ],
    },
    {
      name: "Good to know",
      rows: [
        { label: "Side", value: "Either" },
        { label: "Free tube under the hats", value: "40 mm or more" },
      ],
    },
  ],
};

export default function Demo() {
  return <HhhusherV2Specs {...specsSample} />;
}
