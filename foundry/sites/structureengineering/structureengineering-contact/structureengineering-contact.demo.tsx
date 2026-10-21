import { StructureengineeringContact, type StructureengineeringContactProps } from "./structureengineering-contact";

export const contactSample: StructureengineeringContactProps = {
  heading: "We sit at the table with the people who build Queensland",
  callout: ["Start", "a project"],
  lead: "Architects, developers, builders and owners come to us when the detail matters and the programme is tight. Whether you need a partner on a tricky commission or reassurance on your own renovation, we bring patience and plain answers to each stage of the engineering.",
  fields: [
    { name: "given", label: "Given name", required: true },
    { name: "family", label: "Family name", required: true },
    { name: "phone", label: "Phone", type: "tel", required: true },
    { name: "email", label: "Email", type: "email", required: true },
  ],
  roles: { name: "role", label: "I'm a", options: ["Architect", "Builder", "Owner", "Something else"] },
  questions: [
    { name: "referral", label: "Who sent you our way?", required: true },
    { name: "message", label: "Tell us about the job", required: true },
  ],
  uploadLabel: "Attach drawings",
  submitLabel: "Send",
};

export default function Demo() {
  return <StructureengineeringContact {...contactSample} />;
}
