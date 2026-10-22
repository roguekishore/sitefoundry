import { GranolaSteps, type GranolaStepsProps } from "./granola-steps";

export const stepsSample: GranolaStepsProps = {
  intro: "Tidemark sits with you before the call, through it, and long after.",
  idPrefix: "how",
  steps: [
    {
      label: "Before the call",
      title: "Walk in already briefed",
      body: "Ahead of each call, Tidemark reads your calendar and pulls together a one-page primer: who's coming, what you last agreed, and what has changed since.",
    },
    {
      label: "During the call",
      title: "Listen first, jot later",
      body: "Keep your eyes on people, not on the keyboard. Scribble a word or two and Tidemark fills in the rest from what was actually said.",
    },
    {
      label: "After the call",
      title: "The follow-up is already drafted",
      body: "Decisions, owners and a ready-to-send recap land the minute you hang up, so the work keeps moving.",
    },
  ],
};

export default function Demo() {
  return <GranolaSteps {...stepsSample} />;
}
