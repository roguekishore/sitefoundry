import { FileText } from "lucide-react";
import { SuperhumanMark } from "@foundry/superhuman-mark";
import { SuperhumanPages, type SuperhumanPagesProps } from "./superhuman-pages";

export const pagesSample: SuperhumanPagesProps = {
  heading: {
    mark: <SuperhumanMark brand="Wayfinder" product="Pages" icon={<FileText />} />,
    title: "Align your team",
    muted: "with collaborative AI documents",
    narrow: true,
    description: "Wayfinder Pages is more than a place for text. It is your home base for plans, workflows and data, so your team can build and work from one connected surface.",
    primary: { label: "Try Pages", href: "#" },
    secondary: { label: "Learn more", href: "#" },
  },
  wide: { eyebrow: "Pages", title: "Share one surface for every kind of work. Notes, data, plans and checklists live in one source of truth." },
  left: { eyebrow: "Pages assistant", title: "Turn a short description into a shared team plan." },
  right: { eyebrow: "Pages connector", title: "Ask any assistant to draft a brief or build a table. It lands right in Pages." },
};

export default function Demo() {
  return <SuperhumanPages {...pagesSample} />;
}
