import { LedupHighlights, type LedupHighlightsProps } from "./ledup-highlights";

export const highlightsSample: LedupHighlightsProps = {
  label: "Highlights",
  title: "Every detail, ready when you are.",
  text: "Datasheets, catalogues and news in one place. Clear, well-kept documents, so every specification is quick to make and easy to trust.",
  rows: [
    {
      cards: [
        { kind: "photo", title: "Datasheets", href: "#datasheets", weight: 408 },
        { kind: "product", title: "Meridian lantern", href: "#meridian", weight: 299 },
        { kind: "stat", value: "86", title: "Stockists across the country", weight: 190 },
        { kind: "photo", title: "Stockists", href: "#stockists", weight: 299 },
      ],
    },
    {
      height: "tall",
      cards: [
        { kind: "product", title: "Basalt floodlight", href: "#basalt", weight: 299 },
        { kind: "photo", title: "Catalogue 2026", text: "Browse the complete range.", href: "#catalogue", weight: 626 },
        { kind: "product", title: "Lumen downlight", href: "#lumen", weight: 299 },
      ],
    },
  ],
};

export default function Demo() {
  return <LedupHighlights {...highlightsSample} />;
}
