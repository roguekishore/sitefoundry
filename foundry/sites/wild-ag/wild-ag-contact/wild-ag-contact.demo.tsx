import { WildAgContact, type WildAgContactProps } from "./wild-ag-contact";

export const contactSample: WildAgContactProps = {
  id: "contact",
  title: "Contact.",
  lead: "Tell us about the plot you have in mind.",
  company: "Talgrund AG",
  address: ["Mühlegasse 14", "6210 Sursee"],
  details: [
    { label: "Office:", value: "+41 00 000 00 00", href: "tel:+41000000000" },
    { label: "Email:", value: "hello@talgrund.example", href: "mailto:hello@talgrund.example" },
  ],
  form: { name: "Name", email: "Email", message: "Your message", submit: "Send message" },
};

export default function Demo() {
  return <WildAgContact {...contactSample} />;
}
