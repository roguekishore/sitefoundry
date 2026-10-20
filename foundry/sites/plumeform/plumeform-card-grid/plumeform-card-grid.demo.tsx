// Sample content lives here (gallery only); the page reuses it. Tidewell is made up.
import { BadgeCheck, Clock, FileCheck, IdCard, ListFilter, Shuffle } from "lucide-react";
import { PlumeformBadge } from "@foundry/plumeform-badge";
import { PlumeformCardGrid, type PlumeformCardGridProps } from "./plumeform-card-grid";

export const qualitySample: PlumeformCardGridProps = {
  eyebrow: "Exams and tests",
  title: "Fair-play checks, built in.",
  body: "Set who may sit the quiz before you open it, keep an eye on fairness while it runs, and carry those checks into your export. Class codes, finishing codes, one attempt per student and honesty flags are free. Time limits, question pools, seat caps and shuffling are on Plus.",
  cta: { label: "Made for exams", href: "#exams" },
  ctaNote: (
    <>
      The exam controls are on Plus. <strong>$12</strong> for 8,000 answers a month.
    </>
  ),
  cards: [
    { icon: <BadgeCheck />, title: "Pace & pattern checks", text: "Flag attempts that were rushed or answered in a straight line, on every plan; missed honesty questions are flagged on Plus." },
    { icon: <ListFilter />, title: "Pools & seat caps", badge: "Plus", text: "Draw each student's questions from a pool, and close a sitting once enough seats have filled." },
    { icon: <Shuffle />, title: "Shuffling", badge: "Plus", text: "Mix the order of questions and choices so no two screens look alike." },
    { icon: <Clock />, title: "Timed questions", badge: "Plus", text: "Hold a question on screen for a set time before students can move on. How long every attempt took is kept on every plan." },
    { icon: <IdCard />, title: "Class-ready", text: "Works with your school's sign-in and roster on every plan: student IDs, finishing codes, a return link, and one attempt per student." },
    { icon: <FileCheck />, title: "Flags in your export", text: "Honesty flags stay on each row of the CSV (and the XLSX on Plus), so you can apply your own rules when you mark." },
  ],
};

export const importSample: PlumeformCardGridProps = {
  eyebrow: "Already written somewhere else",
  title: (
    <>
      Bring the quiz you already have. <PlumeformBadge className="align-[0.35em]">Plus</PlumeformBadge>
    </>
  ),
  body: "Upload a file, paste your questions, or describe a new quiz. Each one opens as a draft you can edit, and nothing goes out before you check it.",
  align: "start",
  cards: [
    { eyebrow: "Upload it", title: "A worksheet file", text: "Bring in the questions, choices, sections and answer key from a spreadsheet or a document. The order stays as you wrote it." },
    { eyebrow: "Paste it", title: "Anything else", text: "Paste questions from a slide, an email, or last year's paper. Tidewell sorts out which lines are questions and which are answers." },
    { eyebrow: "Describe it", title: "Nothing yet", text: "Say what you want to check. You get a draft to review, with questions you can change, reorder or remove." },
  ],
};

export default function Demo() {
  return <PlumeformCardGrid {...qualitySample} />;
}
