import { StructureengineeringStatement, type StructureengineeringStatementProps } from "./structureengineering-statement";

export const statementSample: StructureengineeringStatementProps = {
  heading: "An engineer should make the building easier, not harder",
  paragraphs: [
    "Cheap engineering is the most expensive kind. Thin drawings turn into site questions, variations and weeks of waiting. We put the time in early, so the builder can price it once and build it once. That starts with walking the site, reading the soil report and asking what the architect is really after.",
    "Our calculations are careful and our details are plain. We look for the member that does two jobs, the connection that hides in the joinery and the footing that avoids the tree roots, so the structure supports the design instead of steering it.",
  ],
};

export default function Demo() {
  return <StructureengineeringStatement {...statementSample} />;
}
