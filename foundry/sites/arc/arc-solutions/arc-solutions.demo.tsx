import { ArcSolutions, type ArcSolutionsProps } from "./arc-solutions";

export const solutionsSample: ArcSolutionsProps = {
  heading: "Tools that think ahead for the finance team",
  solutions: [
    {
      badge: "Analyst",
      title: "Month-end reporting that writes itself",
      body: "Our analyst agent reads every transaction to flag odd spend, forecast burn and send the board pack on schedule.",
      linkLabel: "Learn more",
      href: "#",
      tone: "muted",
    },
    {
      badge: "Venture debt",
      title: "Raise a credit line in weeks, not quarters",
      body: "We run the process across a bench of 150 lenders and lay the term sheets side by side so you can pick in a day.",
      linkLabel: "Learn more",
      href: "#",
      tone: "inverse",
    },
  ],
};

export default function Demo() {
  return <ArcSolutions {...solutionsSample} />;
}
