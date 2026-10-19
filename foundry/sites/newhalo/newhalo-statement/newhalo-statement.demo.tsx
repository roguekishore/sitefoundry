import { NewhaloStatement, type NewhaloStatementProps } from "./newhalo-statement";

export const statementSample: NewhaloStatementProps = {
  title: "Rethinking the checkup",
  body: "A visit to the dentist can be the moment a smile starts to shine, and it deserves to feel that way. Meet the people working to make every appointment a little lighter.",
  cta: { label: "Who we are", href: "#company" },
};

export default function Demo() {
  return <NewhaloStatement {...statementSample} />;
}
