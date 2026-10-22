import { SuperpowerTour, type SuperpowerTourProps } from "./superpower-tour";

export const tourSample: SuperpowerTourProps = {
  id: "panel",
  steps: [
    {
      tab: "Your first panel",
      title: "Every year opens with 110 markers",
      text: "One thorough panel from a ten-minute draw, at a partner lab near you or at your kitchen table.",
      questions: [
        { question: "How is this more than a routine check-up?", answer: "A routine check-up reads a few markers. Your panel covers hormones, heart, liver, kidneys, thyroid, nutrients and more." },
        { question: "Which markers are on the panel?", answer: "Over a hundred, grouped by body system; the full list is on the panel page." },
        { question: "Where can I give blood?", answer: "At more than 1,800 partner labs, or at home with a visiting nurse." },
      ],
      mediaLabel: "Photo: a member holding a tablet with their results",
    },
    {
      tab: "All your records",
      title: "Every record you have, in one view",
      text: "Bring in past lab reports and connect your wearables. See how the numbers move together and catch a trend early.",
      questions: [
        { question: "What does Kestrel do with my records?", answer: "It reads them to give your care team and Wren the full picture. Nothing else." },
        { question: "How is my data protected?", answer: "Encrypted at rest and in transit, and never sold." },
      ],
      mediaLabel: "Photo: a phone showing connected wearables",
    },
    {
      tab: "Your plan",
      title: "A plan you can actually follow",
      text: "Clear next steps for food, movement, sleep and supplements, reviewed by a clinician before you see them.",
      questions: [
        { question: "Who writes my plan?", answer: "Wren drafts it from your results; a clinician checks and signs it off." },
        { question: "Can I order what it suggests?", answer: "Yes, supplements and follow-up tests can be ordered from the plan." },
      ],
      mediaLabel: "Photo: a plan on a phone beside breakfast",
    },
    {
      tab: "Wren and your team",
      title: "Questions answered, day or night",
      text: "Ask Wren anything about your results, and reach a clinician whenever you need a person.",
      questions: [
        { question: "What can Wren help with?", answer: "Explaining a marker, comparing results over time, or preparing questions for your doctor." },
        { question: "How fast do clinicians reply?", answer: "Usually within a few hours, every day of the week." },
      ],
      mediaLabel: "Video: a member chatting with Wren on a phone",
    },
  ],
};

export default function Demo() {
  return (
    <div className="bg-background">
      <div className="h-[40vh]" />
      <SuperpowerTour {...tourSample} />
      <div className="h-[60vh]" />
    </div>
  );
}
