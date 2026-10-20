import { PlumeformV2Faq, type PlumeformV2FaqProps } from "./plumeform-v2-faq";

export const faqSample: PlumeformV2FaqProps = {
  eyebrow: "Good to know",
  title: "Before you begin.",
  items: [
    { question: "Do the people answering need an account?", answer: "No. They open a link, scan a code or reply inside your page. Only you sign in." },
    { question: "What happens after 150 replies in a month?", answer: "New replies wait in a queue until the next month starts, or until you move to Plus. Nothing is thrown away." },
    { question: "Can I change a questionnaire that's already live?", answer: "Yes. Edits apply to new replies, and the replies you already have keep the version they answered." },
    { question: "Can I take my data with me?", answer: "Always. Export everything as CSV on any plan, or as Excel and a codebook on Plus." },
  ],
};

export const faqPageSample: PlumeformV2FaqProps = {
  eyebrow: "Honest answers",
  title: "Plan details and common questions.",
  items: [
    ...faqSample.items.slice(0, 2),
    { question: "Is anything important kept for Plus only?", answer: "Branches, embeds, quality flags and CSV export are free. Plus adds research tools, connections and your own look." },
    ...faqSample.items.slice(2),
    { question: "Do you offer discounts for students or charities?", answer: "Write to us with a line about your project and we'll sort something out." },
  ],
};

export default function Demo() {
  return <PlumeformV2Faq {...faqSample} />;
}
