// Sample content lives here (gallery only); the page reuses it.
import { HalodentalSonnetStatement, type HalodentalSonnetStatementProps } from "./halodental-sonnet-statement";

export const statementSample: HalodentalSonnetStatementProps = {
  title: ["Rethinking", "the check-up"],
  text: "A good dental visit is calm, clear and a little bit proud. See the team behind Gleam and how we want the chair to feel.",
  action: { label: "About us", href: "#" },
};

export default function Demo() {
  return <HalodentalSonnetStatement {...statementSample} />;
}
