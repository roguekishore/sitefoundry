import { RollersIntro, type RollersIntroProps } from "./rollers-intro";

export const introSample: RollersIntroProps = {
  eyebrow: "Who we are",
  heading: [
    { text: "Heavy plant for civil work," },
    { text: "run by crews who have done the job.", tone: "accent", newLine: true },
  ],
};

export default function Demo() {
  return <RollersIntro {...introSample} />;
}
