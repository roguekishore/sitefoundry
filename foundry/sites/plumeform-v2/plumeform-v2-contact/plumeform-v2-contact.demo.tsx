import { PlumeformV2Contact, type PlumeformV2ContactProps } from "./plumeform-v2-contact";

export const contactSample: PlumeformV2ContactProps = {
  eyebrow: "Let's talk",
  title: "Tell us what you're working on.",
  body: "Ask about Murmur for your study, your school or your company, or suggest working together.",
  choices: [
    {
      label: "A study or a school",
      points: ["Ask about bigger reply limits and paying by invoice", "Get help moving an existing questionnaire", "Talk through a question type or a quality check you need"],
      messageLabel: "What are you studying, and what does it need?",
      messagePlaceholder: "Your topic, how many people you expect, when you open, and any features you need.",
    },
    {
      label: "A company or agency",
      points: ["Seats for a bigger team", "Connections to the tools you already use", "A look that matches your brand"],
      messageLabel: "What do you want to find out, and from whom?",
      messagePlaceholder: "Who you'll ask, roughly how often, and what you'll do with the replies.",
    },
    {
      label: "Working together",
      points: ["Partnerships and integrations", "Writing or teaching about research", "Anything else"],
      messageLabel: "What do you have in mind?",
      messagePlaceholder: "A few lines are plenty.",
    },
  ],
  fields: [
    { name: "email", label: "Your email", type: "email", placeholder: "you@studio.org", required: true },
    { name: "org", label: "Study, school or company", hint: "(optional)" },
  ],
  submitLabel: "Send it",
  note: "Your message goes straight to the Murmur team.",
};

export default function Demo() {
  return <PlumeformV2Contact {...contactSample} />;
}
