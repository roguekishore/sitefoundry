// Sample content lives here (gallery only); the page reuses it. Fernhold is made up.
import { AirwallexStatement, type AirwallexStatementProps } from "./airwallex-statement";

export const statementSample: AirwallexStatementProps = {
  title: "Move faster than the banks you left behind",
  body: "Work with a platform that takes the friction out of running a business across borders. Leave behind surprise fees, week-long settlements and clunky portals, and pick up new markets, healthier margins and time back for the work that matters.",
};

export default function Demo() {
  return <AirwallexStatement {...statementSample} />;
}
