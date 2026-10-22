// Sample content lives here (gallery only); the page reuses it. Tallyhold is made up.
import { MeowFaq, type MeowFaqProps } from "./meow-faq";

export const faqSample: MeowFaqProps = {
  title: "Questions people ask us",
  items: [
    { question: "What is Tallyhold?", answer: "A business account and the tools around it: transfers, cards, invoices and a cash reserve, run through our partner banks." },
    { question: "Can my software agent really use it?", answer: "Yes. Agents connect through a scoped key you control, can prepare payments and paperwork, and anything over your limit waits for a person to approve it." },
    { question: "Who is it built for?", answer: "Small companies with big spreadsheets: studios, funds, online shops and early teams that pay people in more than one country." },
    { question: "What stops an agent from overspending?", answer: "Per-key limits, approval rules, a list of allowed payees and a log of every action. You can pause a key at any time." },
    { question: "What do I need to open an account with the partner banks?", answer: "Your company's registration papers, the people who own a quarter or more of it, and about ten minutes." },
  ],
  footnote: (
    <>
      Still wondering? Browse the <a href="#">developer guide</a> or the <a href="#">full help desk</a>.
    </>
  ),
};

export default function Demo() {
  return <MeowFaq {...faqSample} />;
}
