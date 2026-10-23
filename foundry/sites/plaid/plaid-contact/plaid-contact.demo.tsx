import { PlaidContact, type PlaidContactProps } from "./plaid-contact";

export const contactSample: PlaidContactProps = {
  title: "Start shipping smarter money products",
  formTitle: "Tell us about you",
  fields: [
    { name: "first", label: "First name", required: true },
    { name: "last", label: "Last name", required: true },
    { name: "email", label: "Work email", type: "email", required: true },
    { name: "company", label: "Company", required: true },
    { name: "country", label: "Country", options: ["United Kingdom", "United States", "Canada", "Ireland", "Netherlands"] },
    { name: "phone", label: "Phone (optional)", type: "tel" },
  ],
  consent: { text: "By sending this form, I confirm I've read", link: { label: "Halyard's Privacy Notice.", href: "#" } },
  submitLabel: "Speak with sales",
  note: {
    text: "When an app links through Halyard, you decide who can see your money data.",
    link: { label: "Review your linked apps in Halyard Hub »", href: "#" },
  },
};

export default function Demo() {
  return <PlaidContact {...contactSample} />;
}
