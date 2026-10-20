// Sample content lives here (gallery only); the page reuses it. Tidewell is made up.
import { PlumeformSplit, type PlumeformSplitProps } from "./plumeform-split";

export const splitSample: PlumeformSplitProps = {
  intro: {
    text: "A free quiz maker with 150 student answers every month. No card needed to begin.",
    link: { label: "Browse every quiz template", href: "#templates" },
  },
  rows: [
    {
      eyebrow: "Two ways to sit it",
      title: "One card at a time. Or the whole sheet.",
      body: "Show each question on its own screen, or hand out the full worksheet so students can move around it. Both come with every plan. Flip the switch to see the difference.",
      aspect: "390/400",
    },
    {
      eyebrow: "Hints & follow-ups",
      title: "Help that fits the wrong answer.",
      body: (
        <p>
          Send a student to a hint when they miss, or skip the questions they have already shown they know. On Plus you can
          echo an earlier answer back: <code>{"{{a:name}}"}</code> becomes whatever they typed. And you can fix a typo in a live
          quiz without losing a single mark.
        </p>
      ),
      aspect: "390/355",
      panelSide: "start",
    },
    {
      eyebrow: "Marks",
      title: "See the marks arrive, live.",
      body: "The class chart updates as each student hands in. Open one attempt, or filter by an answer. Work is saved question by question, so you can see where a student stopped, even if they never pressed finish. All of it on every plan.",
      aspect: "390/295",
    },
  ],
};

export const compareSample: PlumeformSplitProps = {
  rows: [
    {
      eyebrow: "Once the marks are in",
      title: "See how the classes compare.",
      body: (
        <>
          <p>Put two classes side by side on every plan, and on Plus check whether the gap is real or just a lucky week. The group sizes sit next to the numbers before you draw a line under it.</p>
          <p>A small gap can still be noise. The check tells you how much to trust it. Plus also gives you:</p>
        </>
      ),
      bullets: [
        { title: "Groups", text: "any set of students against any other, on any question" },
        { title: "Fair weighting", text: "balance a small class against a large one, carried into every export" },
        { title: "A tidy gradebook", text: "decide once which attempts don't count and it sticks everywhere" },
      ],
      aspect: "390/500",
      panelSide: "start",
    },
    {
      eyebrow: "Written answers",
      title: "Find the patterns in what they wrote.",
      body: (
        <>
          <p>On Plus, Tidewell reads up to 300 of the latest written answers to a question and sums them up: a short summary, the common mistakes, and the ideas that came up most, each with a count and an example.</p>
          <p>Quizzes in more than one language are on Plus too: draft each version for you to check, let students answer in their own language, and keep every answer in one gradebook.</p>
        </>
      ),
      aspect: "390/720",
    },
  ],
};

export default function Demo() {
  return <PlumeformSplit {...splitSample} />;
}
