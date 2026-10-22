import { SuperpowerAccordion, type SuperpowerAccordionItem } from "./superpower-accordion";

const items: SuperpowerAccordionItem[] = [
  { question: "How is a Kestrel panel different from a yearly check-up?", answer: "A check-up usually looks at a handful of markers. Your panel reads over a hundred, then a clinician walks you through what they mean." },
  { question: "Can I pause my membership?", answer: "Yes. Pause or end it from your account at any time; your results stay yours." },
  { question: "Where do I give blood?", answer: "At a partner lab near you, or at home with a visiting nurse." },
];

export default function Demo() {
  return (
    <div className="grid gap-12 bg-background p-8 text-foreground lg:grid-cols-2">
      <SuperpowerAccordion items={items} />
      <SuperpowerAccordion items={items} variant="soft" />
    </div>
  );
}
