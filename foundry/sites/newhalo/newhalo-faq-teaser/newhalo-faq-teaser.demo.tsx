import { faqItems } from "../newhalo-accordion/newhalo-accordion.demo";
import { NewhaloFaqTeaser, type NewhaloFaqTeaserProps } from "./newhalo-faq-teaser";

export const faqTeaserSample: NewhaloFaqTeaserProps = {
  id: "questions",
  title: "Good questions",
  cta: { label: "All questions", href: "#faq" },
  items: faqItems,
};

export default function Demo() {
  return <NewhaloFaqTeaser {...faqTeaserSample} />;
}
