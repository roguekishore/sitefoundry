// Sample content lives here (gallery only); the page reuses it. Corvane Energy is made up.
import { RadiantnuclearStatement, type RadiantnuclearStatementProps } from "./radiantnuclear-statement";

export const statementSample: RadiantnuclearStatementProps = {
  lines: ["Steady power", "at any scale"],
};

export default function Demo() {
  return (
    <div className="bg-background">
      <div className="h-[80svh]" />
      <RadiantnuclearStatement {...statementSample} />
      <div className="h-[40svh]" />
    </div>
  );
}
