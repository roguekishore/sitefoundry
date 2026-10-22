// Sample content (gallery only); the page reuses it.
import { ColumnFooter, type ColumnFooterProps } from "./column-footer";

const link = (label: string) => ({ label, href: "#" });

export const footerSample: ColumnFooterProps = {
  brand: "tidewell",
  groups: [
    {
      title: "Platform",
      columns: 2,
      links: [
        "ACH",
        "Wires",
        "Instant",
        "Internal transfers",
        "Cheques",
        "Accounts",
        "Originations",
        "Loan sales",
        "Debt capital",
        "Card programs",
        "Issuing",
        "Digital dollars",
        "Correspondent banking",
        "Multicurrency",
      ].map(link),
    },
    { title: "Builders", links: ["API reference", "Release notes"].map(link) },
    { title: "Tidewell", links: ["Our story", "Journal", "Jobs", "Newsroom", "Trust", "Privacy"].map(link) },
  ],
};

export default function Demo() {
  return <ColumnFooter {...footerSample} open={false} />;
}
