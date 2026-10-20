// Sample content lives here (gallery only); the page reuses it. Tidewell is made up.
import { PlumeformContact, type PlumeformContactProps } from "./plumeform-contact";

export const contactSample: PlumeformContactProps = {
  eyebrow: "Talk to a person",
  title: "Tell us about your classroom.",
  body: "Ask about using Tidewell across a school or a district, or suggest working together.",
  topics: { name: "topic", options: ["A school or a district", "A tutoring company", "A partnership"] },
  bullets: ["Ask about more answers and paying by invoice", "Get help moving last year's quizzes over", "Talk through an answer type or exam setting you need"],
  fields: [
    { name: "email", label: "Your email", placeholder: "you@school.org", type: "email", required: true },
    { name: "school", label: "School or company", hint: "(optional)" },
    { name: "message", label: "What do you teach, and what would help?", placeholder: "Your subject, roughly how many students, when you start, and anything you need.", type: "textarea", required: true },
  ],
  submitLabel: "Send it",
  note: "Your message goes straight to the Tidewell team.",
};

export default function Demo() {
  return <PlumeformContact {...contactSample} />;
}
