import { BrexSolutions, type BrexSolutionsProps } from "./brex-solutions";

export const solutionsSample: BrexSolutionsProps = {
  title: "A fit for every stage of growth.",
  solutions: [
    { title: "Early teams", text: "Open accounts and issue cards on day one, then grow into the rest.", link: { label: "Learn more", href: "#" } },
    { title: "Scaling firms", text: "Keep budgets, approvals and travel in step as headcount climbs.", link: { label: "Learn more", href: "#" } },
    { title: "Large groups", text: "Give every entity the same controls without the spreadsheet tangle.", link: { label: "Learn more", href: "#" } },
  ],
};

export default function Demo() {
  return <BrexSolutions {...solutionsSample} />;
}
