import { PuzzleFaq, type PuzzleFaqProps } from "./puzzle-faq";

export const faqSample: PuzzleFaqProps = {
  title: "Questions",
  groups: [
    {
      label: "Oakbook 3",
      items: [
        { question: "What's new in Oakbook 3?", answer: "Oakbook 3 puts the bookkeeping software and optional bookkeepers on one ledger, so you can move between doing it yourself and handing it over without switching tools." },
        { question: "What does the assistant do?", answer: "It answers questions from your own books and its agents prepare routine work, such as matching bills to payments, for you to approve." },
        { question: "Do I want the software or a bookkeeper?", answer: "Start with the software if you like being hands-on; add a bookkeeper when you'd rather someone checked or ran the month for you." },
        { question: "Which bookkeeping plans are there?", answer: "Checked Over, Fully Run, and one-off projects: moving over, catching up, R&D claims and tax returns." },
        { question: "Can the assistant change my ledger?", answer: "Not on its own. Everything it prepares waits for your approval." },
        { question: "What does Oakbook cost?", answer: "Software plans start at $29 a month; bookkeeping is added per company on top." },
        { question: "What is Oakbook Connect?", answer: "A secure link that lets the AI assistant you already use read your Oakbook ledger." },
        { question: "Which assistants can use Connect?", answer: "Any assistant that supports the open connector standard." },
        { question: "How is Connect different from the built-in assistant?", answer: "The built-in assistant also prepares work for approval; Connect is read-only by default." },
        { question: "Is Connect safe? Can it edit my books?", answer: "Access is scoped and revocable, and it can't post entries unless you allow it." },
      ],
    },
    {
      label: "Teams",
      items: [
        { question: "Is Oakbook a good fit for a new company?", answer: "Yes. Most teams start on the software and add a bookkeeper as they grow." },
        { question: "Can I bring my own accountant?", answer: "Yes. Invite them to your ledger at no extra cost." },
        { question: "How long does switching take?", answer: "Most teams are running within a day; history imports in minutes." },
      ],
    },
  ],
};

export default function Demo() {
  return <PuzzleFaq {...faqSample} />;
}
