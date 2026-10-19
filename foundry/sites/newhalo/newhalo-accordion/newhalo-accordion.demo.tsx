import { NewhaloAccordion } from "./newhalo-accordion";

export const faqItems = [
  { question: "When will Lumen One start shipping?", answer: "The first batch leaves our workshop in spring 2027. Pre-orders are served in the order they arrive." },
  {
    question: "Which practice software does Lumen One work with?",
    answer: "Pictures export as standard files and attach to the patient record in most practice software. Direct links to the larger systems are on the way.",
  },
  { question: "Can the head go through an autoclave?", answer: "Yes. The head is rated for standard cassette autoclave cycles; the battery is wiped, not autoclaved." },
  { question: "What comes in the box?", answer: "Three instruments, three batteries, the charging dock, sterilisation caps and a year of the companion app." },
  { question: "Which tablets and phones can it pair with?", answer: "Any recent iPad or Android tablet, and most phones from the last four years." },
  { question: "What happens once I pre-order?", answer: "Someone from our team calls you within a week to walk through options and timing. Nothing is charged until then." },
];

export default function Demo() {
  return (
    <div className="grid gap-16 bg-background p-8 text-foreground">
      <NewhaloAccordion items={faqItems} group="demo-lines" />
      <NewhaloAccordion items={faqItems.slice(0, 2)} variant="cards" group="demo-cards" openIndex={0} />
    </div>
  );
}
