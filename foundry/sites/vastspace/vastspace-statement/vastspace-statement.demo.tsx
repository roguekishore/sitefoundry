import { VastspaceStatement, type VastspaceStatementProps } from "./vastspace-statement";

export const statementSample: VastspaceStatementProps = {
  text: "Corvane is building crewed orbital stations and cargo satellites with a modular, test-first and budget-minded approach.",
};

export default function Demo() {
  return <VastspaceStatement {...statementSample} />;
}
