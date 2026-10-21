import { RollersWhatWeDo, type RollersWhatWeDoProps } from "./rollers-what-we-do";

export const whatWeDoSample: RollersWhatWeDoProps = {
  eyebrow: "What we do",
  heading: [{ text: "Machines and operators," }, { text: "start to finish.", tone: "accent", newLine: true }],
  tileCaption: "Built for the first pass",
};

export default function Demo() {
  return <RollersWhatWeDo {...whatWeDoSample} />;
}
