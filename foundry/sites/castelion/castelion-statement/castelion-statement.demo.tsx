// Sample content lives here (gallery only); the page reuses it. Pellworth is made up.
import type { CastelionStatementProps } from "./castelion-statement";
import { CastelionStatement } from "./castelion-statement";

export const statementSample: CastelionStatementProps = {
  lines: ["Fly It Early.", "Break It, Fix It, Fly Again.", "Then Build It by the Thousand."],
};

export default function Demo() {
  return <CastelionStatement {...statementSample} />;
}
