import { EightsleepResearch, type EightsleepResearchProps } from "./eightsleep-research";

export const researchSample: EightsleepResearchProps = {
  eyebrow: "Sleep lab",
  title: "People feel it in the first week",
  sub: "Our in-house sleep scientists have spent nine years measuring how a cooler, steadier bed changes a night, and the morning after.",
  results: [
    { title: "Fall asleep sooner", stat: "Up to 41% less time to drift off*" },
    { title: "Sleep more deeply", stat: "Up to 30% more deep sleep*" },
    { title: "Wake more rested", stat: "A 28% average rise in sleep scores*" },
  ],
  studies: [
    { title: "Cooler beds and better sleep quality", link: { label: "Read the study", href: "#" } },
    { title: "Heart rate and deep sleep on the Mantle", link: { label: "Read the study", href: "#" } },
    { title: "Temperature needs through the menopause", link: { label: "Read the study", href: "#" } },
  ],
};

export default function Demo() {
  return <EightsleepResearch {...researchSample} />;
}
