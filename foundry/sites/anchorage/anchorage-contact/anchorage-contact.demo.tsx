// Sample content lives here (gallery only); the page reuses it.
import { AnchorageContact, type AnchorageContactProps } from "./anchorage-contact";

export const contactSample: AnchorageContactProps = {
  title: "Start a conversation",
  fields: [
    { label: "Given name", name: "given", required: true },
    { label: "Family name", name: "family", required: true },
    { label: "Work email", name: "email", type: "email", required: true },
    { label: "Organisation", name: "org", required: true },
    { label: "Direct line", name: "phone", type: "tel" },
    { label: "Type of firm", name: "firm", type: "select", options: ["Bank", "Asset manager", "Corporate treasury", "Fund", "Public body", "Other"] },
    { label: "Where did you find us?", name: "source", type: "select", options: ["A colleague", "Press", "An event", "Search", "Other"] },
    { label: "Home jurisdiction", name: "country", type: "select", options: ["United States", "United Kingdom", "Singapore", "European Union", "Elsewhere"] },
    { label: "Assets to place", name: "size", type: "select", options: ["Under $10M", "$10M – $100M", "$100M – $1B", "Over $1B"] },
  ],
  note: { label: "Which tokens are you looking at?", name: "tokens", link: { label: "Browse the token list", href: "#" } },
  areas: {
    title: "Topics",
    name: "topics",
    options: [
      "Execution and lending",
      "Private wealth",
      "Token launch",
      "Token yield",
      "Bank-to-bank tokens",
      "Deposit tokens",
      "Automated payments",
      "Clearing network",
      "Own-key wallets",
      "Staking",
      "Safekeeping",
      "Launch events",
      "Token treasury",
    ],
  },
  message: { label: "Tell us more", name: "message" },
  requiredNote: "Marks a field we need",
  consent: {
    name: "consent",
    text: "By sending this, I let Strata Reserve contact me about its services and use email analytics to tailor what it sends. The details are in our privacy notice.",
    small: "Texts are occasional; carrier rates may apply. Reply STOP to opt out, HELP for help.",
  },
  submit: "Send",
};

export default function Demo() {
  return <AnchorageContact {...contactSample} />;
}
