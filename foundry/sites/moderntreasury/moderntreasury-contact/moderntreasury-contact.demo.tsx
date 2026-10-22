import { ModerntreasuryContact, type ModerntreasuryContactProps } from "./moderntreasury-contact";

export const contactSample: ModerntreasuryContactProps = {
  title: "Let's Get You Live",
  lead: "Tell us what you're building and we'll suggest the rails and plan that suit it.",
  submitLabel: "Book a call",
  fields: [
    { label: "First name", name: "first_name", required: true, half: true },
    { label: "Last name", name: "last_name", required: true, half: true },
    { label: "Work email", name: "email", type: "email", required: true },
    { label: "Company", name: "company", required: true },
    { label: "Team size", name: "size", type: "select", placeholder: "Choose one", options: ["1–20", "21–100", "101–500", "501–2,000", "More than 2,000"], required: true },
    { label: "Where is your company registered?", name: "region", type: "select", placeholder: "Choose one", options: ["United States", "Canada", "United Kingdom", "European Union", "Somewhere else"], required: true },
  ],
};

export default function Demo() {
  return <ModerntreasuryContact {...contactSample} />;
}
