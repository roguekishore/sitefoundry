import { NewhaloContactForm, type NewhaloContactFormProps } from "./newhalo-contact-form";

export const contactFormSample: NewhaloContactFormProps = {
  title: "What can we help with?",
  fields: [
    { label: "Your name", name: "name", required: true },
    { label: "Topic", name: "topic", kind: "select", placeholder: "Pick one", options: ["Buying", "The instrument", "Press", "Partnerships"], required: true },
    { label: "Email", name: "email", kind: "email", required: true },
    { label: "Phone", name: "phone", kind: "tel", required: true },
    { label: "Message", name: "message", kind: "textarea", placeholder: "Tell us a little about your practice", required: true },
  ],
  consent: (
    <>
      I'm happy for Brio to use these details as described in the <a href="#privacy-policy">privacy notice</a> and <a href="#terms-of-use">site terms</a>.
    </>
  ),
  submitLabel: "Send",
  card: { title: "Most answers are already in our help centre.", cta: { label: "Open the help centre", href: "#faq" } },
};

export default function Demo() {
  return <NewhaloContactForm {...contactFormSample} />;
}
