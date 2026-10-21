import { RollersServices, type RollersServicesProps } from "./rollers-services";

export const servicesSample: RollersServicesProps = {
  statement: [
    { text: "The right machine and the right hands", tone: "accent" },
    { text: "for roads, subdivisions, pads and haul tracks." },
  ],
  items: [
    {
      title: "Dry hire & operated hire",
      body: "Take the machine on its own, or book it with one of our ticketed operators who knows the compaction spec and the site rules before the first pass.",
    },
    {
      title: "Road maintenance grading",
      body: "Planned grading for unsealed roads and haul tracks, scheduled, run and signed off by our own crews.",
    },
    {
      title: "Operator training",
      body: "Hands-on training in machine operation, compaction method and site safety, built around your crew.",
    },
  ],
};

export default function Demo() {
  return <RollersServices {...servicesSample} />;
}
