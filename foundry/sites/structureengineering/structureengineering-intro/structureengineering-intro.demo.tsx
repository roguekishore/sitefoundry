import { StructureengineeringIntro, type StructureengineeringIntroProps } from "./structureengineering-intro";

export const introSample: StructureengineeringIntroProps = {
  statement:
    "We listen first, draw second and say plainly what the building needs. That habit turns awkward sites and bold briefs into frames that stand up, go together easily and leave the architecture alone, across homes, workplaces, schools, heritage repair and public art.",
  tabs: [
    {
      label: "Curiosity",
      paragraphs: [
        "People expect an engineer to say no. We would rather ask what the design is trying to do and find the quiet way of letting it.",
        "The practice was set up around one idea: the frame is part of the architecture, not a tax on it. Good numbers matter, and so does how the beam meets the glass.",
        "We bring the same patience to a garden studio as to a six-storey school, working beside architects, builders and owners until the drawings say one clear thing.",
      ],
    },
    {
      label: "Rigour",
      paragraphs: [
        "Every member is checked twice and drawn once. Calculations come with the reasoning written beside them, so the next person can follow it.",
        "Site visits are booked before they are needed, not after something goes wrong, and every question from the builder gets a same-day answer.",
      ],
    },
  ],
  cta: { label: "About the practice", href: "#practice" },
};

export default function Demo() {
  return <StructureengineeringIntro {...introSample} />;
}
