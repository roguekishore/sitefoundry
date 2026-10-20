import { HhhusherSpecs, type HhhusherSpecsProps } from "./hhhusher-specs";

export const specsSample: HhhusherSpecsProps = {
  id: "specs",
  title: ["Spec", "Sheet"],
  text: "Before you order, check that your kit matches the list below. Still unsure? Our answers might help.",
  cta: { label: "Questions", href: "#questions" },
  groups: [
    {
      label: "The Veil",
      rows: [
        { label: "Height", value: "62 mm (2.4 in)" },
        { label: "Depth", value: "165 mm (6.5 in)" },
        { label: "Width", value: "240 mm (9.4 in)" },
        { label: "Weight", value: "640 g (1.4 lb)" },
        { label: "Materials", value: "Wool felt, foam core, steel clip" },
      ],
    },
    {
      label: "Snares",
      rows: [
        { label: "Diameter", value: "12″, 13″, 14″" },
        { label: "Hoops", value: "Triple-flange, die-cast, wood" },
        { label: "Depth", value: "Any" },
      ],
    },
    {
      label: "Rim clearance",
      rows: [
        { label: "Hoop height", value: "8 mm to 22 mm" },
        { label: "Free rim", value: "70 mm between lugs" },
      ],
    },
    {
      label: "Also needed",
      rows: [
        { label: "Mic clip", value: "Standard 5/8″ thread" },
        { label: "Space above the drum", value: "At least 4 cm" },
      ],
    },
  ],
};

export default function Demo() {
  return <HhhusherSpecs {...specsSample} />;
}
