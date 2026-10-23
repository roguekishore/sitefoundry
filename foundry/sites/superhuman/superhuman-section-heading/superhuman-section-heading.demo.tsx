import { Compass } from "lucide-react";
import { SuperhumanMark } from "@foundry/superhuman-mark";
import { SuperhumanSectionHeading, type SuperhumanSectionHeadingProps } from "./superhuman-section-heading";

export const sectionHeadingSample: SuperhumanSectionHeadingProps = {
  mark: <SuperhumanMark brand="Wayfinder" product="Pages" icon={<Compass />} />,
  title: "Align your team",
  muted: "with documents that think along",
  narrow: true,
  description: "Wayfinder Pages is more than a place for text. It holds your plans, checklists and tables in one connected surface.",
  primary: { label: "Try Pages", href: "#" },
  secondary: { label: "Learn more", href: "#" },
};

export default function Demo() {
  return (
    <div className="bg-background px-gutter py-10 lg:py-section">
      <SuperhumanSectionHeading {...sectionHeadingSample} />
    </div>
  );
}
