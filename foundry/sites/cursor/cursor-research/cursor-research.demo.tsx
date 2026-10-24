import type { CursorResearchProps } from "./cursor-research";
import { CursorResearch } from "./cursor-research";

export const researchSample: CursorResearchProps = {
  statement: "Fernwork Labs is a small research group working out how software will be written next.",
  link: { label: "Work with us", href: "#" },
  mediaLabel: "The team around a whiteboard",
};

export default function Demo() {
  return <CursorResearch {...researchSample} />;
}
