// Sample content lives here (gallery only); the page reuses it. Tallyhold and its partners are made up.
import { Vault } from "lucide-react";
import { MeowFooter, type MeowFooterProps } from "./meow-footer";

export const footerSample: MeowFooterProps = {
  groups: [
    {
      title: "Accounts",
      links: [
        { label: "Company checking", href: "#" },
        { label: "Spend cards", href: "#" },
        { label: "Reserve", href: "#" },
        { label: "Bills and invoices", href: "#" },
        { label: "Credit lines", href: "#" },
        { label: "Agent access", href: "#" },
      ],
    },
    {
      title: "Lending",
      links: [
        { label: "Office loans", href: "#" },
        { label: "Equipment finance", href: "#" },
      ],
    },
    {
      title: "Built for",
      links: [
        { label: "Studios", href: "#" },
        { label: "Funds", href: "#" },
        { label: "Early teams", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About us", href: "#" },
        { label: "Jobs", href: "#" },
        { label: "Help desk", href: "#" },
        { label: "Stories", href: "#" },
        { label: "Field notes", href: "#" },
        { label: "Questions", href: "#" },
        { label: "Terms", href: "#" },
      ],
    },
  ],
  mark: { name: "tallyhold", icon: <Vault strokeWidth={2.5} />, href: "#" },
  copyright: "© 2026 Tallyhold Ltd. All rights kept.",
  legal: [
    <>*Tallyhold Advisers is a registered investment adviser. Being registered says nothing about skill or training.</>,
    <>
      Reserve accounts are opened through Harbourline Securities, a registered broker and member of the investor protection
      fund, which holds the bills on your behalf. For details see the <a href="#">client summary</a>, the{" "}
      <a href="#">general disclosures</a> and our <a href="#">privacy notice</a>. You can look up Harbourline on the
      regulator's public register.
    </>,
    <>
      Tallyhold Advisers is paid a yearly fee of up to 0.5% of the assets it manages for you, charged monthly. That fee gives
      us a reason to suggest the reserve over other options, and another adviser might suit you better. Advice is about your
      reserve only and does not cover tax or the rest of your finances.
    </>,
    <>
      Harbourline is not a bank. <strong>Investments are not covered by deposit insurance, are not guaranteed by any bank and
      can lose value.</strong> Read the fees and risks before you invest.
    </>,
    <>Bill yields are yearly rates if held to maturity. Bills are bought below face value and their price moves with the market.</>,
    <>
      **Tallyhold is a software company, not a bank. Checking accounts are provided by Northgate Bank and Fieldstone Bank,
      members of the national deposit scheme, which only protects you if one of those banks fails.
    </>,
    <>
      <strong>Rewards.</strong> From time to time Tallyhold may run a rewards programme. It is paid by us, not by our partner
      banks, can change or end at any time and follows the <a href="#">Tallyhold terms</a>.
    </>,
    <>
      Deposits above the insured limit may be spread across other member banks through a sweep service, so more of your money
      is covered. You may opt any bank out of the sweep; balances over the combined limit are not insured.
    </>,
    <>Loan amounts and terms depend on your credit, industry and location, and an offer may involve a hard credit check.</>,
  ],
};

export default function Demo() {
  return <MeowFooter {...footerSample} />;
}
