import { MrcresidencesbocaratonRegister, type MrcresidencesbocaratonRegisterProps } from "./mrcresidencesbocaraton-register";

export const registerSample: MrcresidencesbocaratonRegisterProps = {
  id: "enquire",
  intro: ["Join the list for early floor plans and news", "from Velloro Residences Sarasota."],
  fields: [
    { kind: "text", name: "first", label: "First name *", required: true },
    { kind: "text", name: "last", label: "Last name *", required: true },
    { kind: "text", name: "email", label: "Email *", type: "email", required: true },
    { kind: "text", name: "phone", label: "Phone", type: "tel" },
    { kind: "select", name: "country", label: "Country", options: ["United States", "Canada", "United Kingdom", "Italy", "Other"] },
    { kind: "text", name: "zip", label: "Postcode" },
    { kind: "select", name: "contact", label: "Best way to reach you", options: ["Email", "Phone", "Text message"] },
    { kind: "select", name: "broker", label: "Are you a broker? *", options: ["Yes", "No"], required: true },
    { kind: "choices", name: "size", label: "Preferred home size *", options: ["One bedroom", "Two bedroom", "Two bedroom with study", "Penthouse"] },
    {
      kind: "select",
      name: "source",
      label: "How did you find us? *",
      options: ["A friend", "A broker", "Press", "Online search", "Social media"],
      required: true,
    },
  ],
  submitLabel: "Send",
};

export default function Demo() {
  return <MrcresidencesbocaratonRegister {...registerSample} />;
}
