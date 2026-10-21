import { RiopropertyContact, type RiopropertyContactProps } from "./rioproperty-contact";

export const contactSample: RiopropertyContactProps = {
  heading: "Say hello",
  subhead: "Tell us what you're after",
  fields: [
    { name: "name", label: "Your name" },
    { name: "email", label: "E-mail", type: "email" },
    { name: "phone", label: "Phone", type: "tel" },
  ],
  select: { name: "intent", label: "I want to…", options: ["Buy", "Sell", "Rent", "Let out", "Get a valuation"] },
  choices: { name: "kind", legend: "Which kind (tick any)", options: ["Shops", "Warehouses", "Offices", "Mixed use"] },
  message: { name: "message", label: "Anything we should know?" },
  submitLabel: "Send",
};

export default function Demo() {
  return (
    <div className="bg-background">
      <div className="h-[60vh]" />
      <RiopropertyContact {...contactSample} />
      <div className="h-[60vh]" />
    </div>
  );
}
