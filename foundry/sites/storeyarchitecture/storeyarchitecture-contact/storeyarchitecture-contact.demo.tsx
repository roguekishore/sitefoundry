import { StoreyarchitectureContact, type StoreyarchitectureContactProps } from "./storeyarchitecture-contact";

export const contactSample: StoreyarchitectureContactProps = {
  heading: "Tell us about the plot, the house and the life you picture",
  intro: "Whether it is a new house, a careful alteration or a whole interior, write to us about the place and what you hope for, and we will reply within the week.",
  formTitle: ["Site and", "house brief"],
  formMark: "No.1",
  brand: "Ashlar",
  fields: [
    { label: "Your name", name: "name", kind: "text" },
    { label: "Email address", name: "email", kind: "email" },
    { label: "What kind of work", name: "work", kind: "choice", options: ["New house", "Alteration", "Interior", "Garden and land"] },
    { label: "Where is the site", name: "site", kind: "text" },
    { label: "When would you like to start", name: "start", kind: "text" },
    { label: "Anything else", name: "message", kind: "message" },
  ],
  submitLabel: "Send",
  footer: ["AS / FRM", "With thanks", "ashlar-studio.co.uk"],
  action: "#",
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <StoreyarchitectureContact {...contactSample} />
    </div>
  );
}
