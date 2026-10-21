import { WildAgProcess, type WildAgProcessProps } from "./wild-ag-process";

export const processSample: WildAgProcessProps = {
  id: "method",
  title: "Method.",
  paragraphs: [
    "Every project we take on runs on the same three stages, so owners, banks and neighbours always know where it stands and what comes next.",
    "The stages don't change with size: a single house gets the same checks and the same plain reports as a block of forty flats.",
  ],
  steps: [
    { label: "Survey", href: "#survey" },
    { label: "Design", href: "#design" },
    { label: "Delivery", href: "#delivery" },
  ],
};

export default function Demo() {
  return (
    <div className="bg-background pb-24">
      <WildAgProcess {...processSample} />
    </div>
  );
}
