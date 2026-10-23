import { EzraSteps, type EzraStepsProps } from "./ezra-steps";

export const stepsSample: EzraStepsProps = {
  title: "Every visit is built to",
  phrases: ["catch things early.", "fit a busy week.", "leave you knowing more."],
  steps: [
    {
      number: "01",
      title: "Pick a time",
      body: "Choose a clinic and a slot online, answer a short health form, and you’re set.",
    },
    {
      number: "02",
      title: "Lie back for the scan",
      body: "Under half an hour in a quiet machine, looking at up to fourteen organs from head to hips. No radiation.",
    },
    {
      number: "03",
      title: "Read your report",
      body: "A plain-language report arrives with clear next steps and a doctor to talk it through.",
    },
  ],
};

export default function Demo() {
  return <EzraSteps {...stepsSample} />;
}
