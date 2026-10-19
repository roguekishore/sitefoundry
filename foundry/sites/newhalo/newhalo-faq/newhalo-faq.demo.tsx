import { faqItems } from "../newhalo-accordion/newhalo-accordion.demo";
import { NewhaloFaq, type NewhaloFaqProps } from "./newhalo-faq";

export const faqSample: NewhaloFaqProps = {
  topics: [
    { label: "Ordering", items: [...faqItems, { question: "Is there a discount for several kits?", answer: "Yes: practices ordering three kits or more get a lower price per kit." }] },
    {
      label: "Waiting list",
      items: [
        { question: "How long is the wait?", answer: "Kits ship in the order pre-orders arrive; we share your expected month when we call." },
        { question: "Can I leave the list?", answer: "Any time, with one email. Nothing has been charged." },
      ],
    },
    { label: "Batteries", items: [{ question: "How long does a battery last?", answer: "A full clinic day on one charge; swapping takes seconds." }] },
    { label: "The instrument", items: [{ question: "How heavy is it?", answer: "About 34 grams, close to a classic mirror." }] },
    { label: "Companion app", items: [{ question: "What does the app cost?", answer: "The first year is included with every kit." }] },
    { label: "Brand and press", items: [{ question: "Where can I find logos?", answer: "In the press kit, ready to download." }] },
    { label: "Practice software", items: [{ question: "Does it export images?", answer: "Yes, as standard files ready for your patient records." }] },
  ],
  aside: { title: "Didn't find what you came for?", link: { label: "Write to us", href: "#contact" } },
};

export default function Demo() {
  return <NewhaloFaq {...faqSample} />;
}
