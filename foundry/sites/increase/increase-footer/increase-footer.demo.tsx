// Sample content lives here (gallery only); the page reuses it. Cairn and its partners are made up.
import { wordmark } from "../increase-header/increase-header.demo";
import { IncreaseFooter, type IncreaseFooterProps } from "./increase-footer";

export const footerSample: IncreaseFooterProps = {
  brand: "Cairn",
  logo: wordmark,
  groups: [
    {
      title: "Platform",
      links: [
        { label: "ACH", href: "#ach" },
        { label: "Accounts", href: "#accounts" },
        { label: "Card programs", href: "#cards" },
        { label: "Checks", href: "#checks" },
        { label: "Instant payments", href: "#instant" },
        { label: "Same-day", href: "#same-day" },
        { label: "Wires", href: "#wires" },
      ],
    },
    {
      title: "Build",
      links: [
        { label: "Guides", href: "#guides" },
        { label: "API reference", href: "#api" },
        { label: "Changelog", href: "#changelog" },
        { label: "System status", href: "#status" },
      ],
    },
    {
      title: "Use cases",
      links: [
        { label: "Vendor payments", href: "#vendors" },
        { label: "Payroll", href: "#payroll" },
        { label: "Stored balances", href: "#balances" },
        { label: "Lending", href: "#lending" },
        { label: "Fund operations", href: "#funds" },
        { label: "Bank partnerships", href: "#partners" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Fees", href: "#fees" },
        { label: "Changelog posts", href: "#posts" },
        { label: "Contact", href: "#contact" },
        { label: "Careers", href: "#careers" },
        { label: "Privacy", href: "#privacy" },
        { label: "Security", href: "#security" },
        { label: "Terms", href: "#terms" },
      ],
    },
  ],
  legal: [
    "Cairn is a fictional company made for this design sample. Banking services described here are offered by Cairn Trust and other made-up partner banks, each an imaginary member of an imaginary deposit insurer.",
    "Software is provided by Cairn Labs, Inc., which is not a bank.",
    "Where they appear, cards are issued by a partner bank under a licence from an equally fictional card network.",
    "Deposits held at a partner bank would be insured up to the standard limit; insurance covers only the failure of an insured bank.",
  ],
};

export default function Demo() {
  return <IncreaseFooter {...footerSample} />;
}
