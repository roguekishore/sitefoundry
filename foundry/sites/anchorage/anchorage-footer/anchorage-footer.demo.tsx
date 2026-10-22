// Sample content lives here (gallery only); the page reuses it.
import { AtSign, Mail, Phone, Podcast, Rss } from "lucide-react";
import { markSample } from "../anchorage-mark/anchorage-mark.demo";
import { AnchorageFooter, type AnchorageFooterProps } from "./anchorage-footer";

const l = (text: string) => ({ text, href: "#" });

export const footerSample: AnchorageFooterProps = {
  mark: markSample,
  columns: [
    {
      title: "Products",
      entries: [
        { text: "Markets", level: "group" },
        { text: "Execute", level: "label" },
        l("Execution and lending"),
        { text: "Launch", level: "label" },
        l("Launch events"),
        l("Token treasury"),
        { text: "Keep", level: "label" },
        l("Safekeeping"),
        l("Own-key wallets"),
        { text: "Grow", level: "label" },
        l("Token yield"),
        l("Staking"),
        { text: "Settlement rails", level: "group" },
        { text: "Clear", level: "label" },
        l("Clearing network"),
        { text: "Embed", level: "label" },
        l("Embedded wallets"),
        l("Private wealth desk"),
        { text: "Pay", level: "label" },
        l("Automated payments"),
        l("Bank services"),
        { text: "Tokens", level: "group" },
        l("Bank-to-bank tokens"),
        l("Token launch"),
        l("Deposit tokens"),
        l("Reserve reports"),
      ],
    },
    {
      title: "Clients",
      entries: [
        { text: "Financial firms", level: "group" },
        l("Funds and ETF issuers"),
        l("Banks"),
        l("Private wealth"),
        { text: "Builders", level: "group" },
        l("Corporate treasuries"),
        l("Miners"),
        l("Networks"),
        { text: "Allocators", level: "group" },
        l("Hedge funds"),
        l("Venture firms"),
        { text: "Public sector", level: "group" },
        l("Agencies"),
      ],
    },
    { title: "Case notes", entries: [l("All case notes")] },
    { title: "About us", entries: [l("Our story"), l("Jobs"), l("Coverage"), l("Media kit"), l("Supervision"), l("Investments")] },
    { title: "Library", entries: [l("Token list"), l("App directory"), l("Docs"), l("Research"), l("Newsroom")] },
  ],
  contact: {
    title: "Reach us",
    rows: [
      { icon: <Mail />, label: "Email", values: [{ text: "hello@strata-reserve.example", href: "#" }, { text: "media@strata-reserve.example", href: "#" }] },
      { icon: <Phone />, label: "Phone", values: [{ text: "+1 (555) 014-2290", href: "#" }] },
    ],
  },
  social: {
    title: "Elsewhere",
    links: [
      { label: "Updates", href: "#", icon: <AtSign /> },
      { label: "Feed", href: "#", icon: <Rss /> },
      { label: "Podcast", href: "#", icon: <Podcast /> },
    ],
  },
  legal: [
    "“Strata Reserve” is a fictional company used to show this layout. It names the services offered through the wholly owned subsidiaries of an imaginary holding company.",
    "Safekeeping, settlement and staking would be offered through a chartered trust bank; brokerage through a registered affiliate. None of the entities described here exist, hold licences or accept deposits. Digital assets are not bank deposits, are not insured by any government agency and may lose value. Services would be available only to institutions and qualified individuals who meet eligibility checks, and only where the law allows. Nothing on this page is legal, tax or investment advice, and no statement here should be read as saying any digital asset is safe, liquid or free of risk.",
    "Holding digital assets carries a real risk of loss, including the loss of everything held. We aim to keep this page accurate but cannot promise that every detail is complete or current.",
    "Assets held through any overseas affiliate would not be covered by that country's deposit protection scheme, and its customers would not enjoy the protections given to depositors of member institutions.",
  ],
  copyright: "© 2026 Strata Reserve · All rights reserved.",
  bottomLinks: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Licences", href: "#" },
    { label: "Disclosures", href: "#" },
  ],
};

export default function Demo() {
  return <AnchorageFooter {...footerSample} />;
}
