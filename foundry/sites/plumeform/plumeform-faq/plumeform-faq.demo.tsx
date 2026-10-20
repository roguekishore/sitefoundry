// Sample content lives here (gallery only); the pages reuse it. Tidewell is made up.
import { PlumeformFaq, type PlumeformFaqProps } from "./plumeform-faq";

export const faqSample: PlumeformFaqProps = {
  eyebrow: "Good to know",
  title: "Before you begin.",
  items: [
    { question: "Do students need an account?", answer: "No. Students open the link or scan the code and start answering. You can ask for a class code or a name if you want to know who is who." },
    { question: "What happens if a class goes over 150 answers?", answer: "Quizzes stop taking new answers until the month turns, and nothing you already have is touched. You can move to Plus at any point to carry on." },
    { question: "Can I change a quiz while students are taking it?", answer: "Yes. Fix a typo or add a question and the answers you already have stay attached to the right questions." },
    { question: "Can I take my marks with me?", answer: "Always. CSV export is on every plan, and Plus adds XLSX, mark schemes and report cards." },
  ],
};

export const faqPricingSample: PlumeformFaqProps = {
  eyebrow: "Straight answers",
  title: "Plan details and common questions.",
  items: [
    { question: "Do students need an account to answer?", answer: "No. A link, a QR code or a class code is enough." },
    { question: "What happens if I go over the free limit?", answer: "New answers pause until the month turns. Nothing you already collected is removed." },
    { question: "Is anything important kept back for Plus?", answer: "Every answer type a typical class needs is free, along with hints, class pages, comparisons and CSV export. Plus is for exams, bigger numbers and your own look." },
    { question: "Can I edit a quiz that is already running?", answer: "Yes, without losing any answers." },
    { question: "Can I get my data out?", answer: "Yes: CSV on every plan, XLSX and mark schemes on Plus, and a read-only API." },
  ],
};

export default function Demo() {
  return <PlumeformFaq {...faqSample} />;
}
