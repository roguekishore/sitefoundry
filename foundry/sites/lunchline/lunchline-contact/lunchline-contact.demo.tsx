import { IconBrandLinkedinFilled } from "@tabler/icons-react";
import { LunchlineContact, type LunchlineContactProps } from "./lunchline-contact";

export const contactSample: LunchlineContactProps = {
  id: "contact",
  eyebrow: "Get in touch",
  heading: "if you run a company worth backing, let's talk!",
  blurb: "an operating partnership of founders starting, growing and holding good companies for the long run.",
  social: { label: "LinkedIn", href: "#linkedin", icon: <IconBrandLinkedinFilled /> },
  action: "#contact",
  fields: [
    { name: "firstName", label: "first name", autoComplete: "given-name", half: true, required: true },
    { name: "lastName", label: "last name", autoComplete: "family-name", half: true, required: true },
    { name: "email", label: "email", type: "email", autoComplete: "email", half: true, required: true },
    { name: "phone", label: "phone", type: "tel", autoComplete: "tel", half: true },
    { name: "message", label: "tell us a little about the business", multiline: true },
  ],
  consent: {
    before: "By sending this you accept our ",
    linkLabel: "Privacy Notice",
    linkHref: "#privacy",
    after: " and agree that Ferrybank Holdings and its companies may email you about your enquiry.",
  },
  submitLabel: "Send",
};

export default function Demo() {
  return <LunchlineContact {...contactSample} />;
}
