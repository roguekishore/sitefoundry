// Sample content (gallery only); the page reuses it. Tallgrass Fission is made up.
import { ValaratomicsStatement, type ValaratomicsStatementProps } from "./valaratomics-statement";

export const statementSample: ValaratomicsStatementProps = {
  title: "Heat is the real market.",
  body: "Most of the energy industry burns goes into steam, not wires. Big plants were never sized for a grain dryer or a nitrogen line. To decarbonise the plains, the reactor has to come",
  emphasis: "to the factory gate.",
};

export default function Demo() {
  return <ValaratomicsStatement {...statementSample} />;
}
