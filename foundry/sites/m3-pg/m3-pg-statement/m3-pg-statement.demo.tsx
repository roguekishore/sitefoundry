import { M3PgStatement, type M3PgStatementProps } from "./m3-pg-statement";

export const statementSample: M3PgStatementProps = {
  id: "services",
  quiet: "We treat a building as one system –",
  strong: "drawn, costed and delivered.",
  body: "Clear structures, joined-up planning and digital models used from the first sketch are the ground we work on. A shared building model keeps every trade on one drawing and keeps quality, cost and dates in plain view.",
  link: { label: "Read more", href: "#method" },
};

export default function Demo() {
  return (
    <div className="bg-background pt-20">
      <M3PgStatement {...statementSample} />
    </div>
  );
}
