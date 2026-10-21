import { RollersWhy, type RollersWhyProps } from "./rollers-why";

export const whySample: RollersWhyProps = {
  id: "story",
  eyebrow: "Why Stonebank",
  heading: [{ text: "We don't rent out everything." }, { text: "We rent out compaction.", tone: "accent", newLine: true }],
  lede: "A narrow fleet and people who know it, for most of the civil work you will price this year.",
  items: [
    { title: "One kind of work", body: "Compactors, tankers and graders only, kept by a workshop that services nothing else." },
    { title: "Wet or dry, your call", body: "The machine alone, or with a ticketed operator who has run the same spec on the job next door." },
    { title: "Paperwork before the float", body: "Pre-starts, service logs and load plans go out with every machine, so audits stay short." },
    { title: "Close to the job", body: "Three inland depots and our own floats, so a breakdown is a morning, not a week." },
    { title: "Cabins that run themselves", body: "Solar crib huts and toilet blocks from our own range, delivered with the plant." },
    { title: "Owners on the phone", body: "The people who own the yard still pick up, decide on the spot and remember the last job." },
  ],
};

export default function Demo() {
  return <RollersWhy {...whySample} />;
}
