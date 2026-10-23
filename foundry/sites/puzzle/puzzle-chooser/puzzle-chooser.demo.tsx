import { PuzzleChooser, type PuzzleChooserProps } from "./puzzle-chooser";

export const chooserSample: PuzzleChooserProps = {
  eyebrow: "An easy place to begin",
  title: "How much do you want to hand over?",
  cta: { label: "See every plan and price", href: "#" },
  choices: [
    { quote: "“I'd rather keep the books myself.”", lead: "Best fit:", answer: "Oakbook software + assistant" },
    { quote: "“I'd like someone to look it over.”", lead: "Best fit:", answer: "Checked Over" },
    { quote: "“Please just take the books off me.”", lead: "Best fit:", answer: "Fully Run" },
    { quote: "“I've got one particular job to sort.”", lead: "Best fit:", answer: "Moving over, catch-up, R&D or tax" },
  ],
};

export default function Demo() {
  return <PuzzleChooser {...chooserSample} />;
}
