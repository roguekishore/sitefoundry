import { WildAgStatement, type WildAgStatementProps } from "./wild-ag-statement";

export const statementSample: WildAgStatementProps = {
  line: [
    { text: "Slow", serif: true },
    { text: "to start" },
    { text: "—" },
    { text: "sure", serif: true },
    { text: "to finish" },
  ],
};

export default function Demo() {
  return (
    <div className="bg-background">
      <div className="h-[40svh]" />
      <WildAgStatement {...statementSample} />
      <div className="h-[60svh]" />
    </div>
  );
}
