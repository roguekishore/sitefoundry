import { WiemerV2KontaktForm, type WiemerV2KontaktFormProps } from "./wiemer-v2-kontakt-form";

export const kontaktSample: WiemerV2KontaktFormProps = {
  tag: "Contact",
  heading: "Something on your mind?",
  text: "Ask away. We answer every message within two working days.",
  fields: [
    { name: "name", label: "Name", placeholder: "Name", required: true },
    { name: "email", label: "Email", type: "email", placeholder: "Email", required: true },
    { name: "message", label: "Message", type: "textarea", placeholder: "Your message to us…", required: true },
  ],
  consent: (
    <>
      I agree that my details are collected and used to answer my message. How we handle personal data is set out in our <a href="#privacy">privacy notice</a>.
    </>
  ),
  submitLabel: "Send message",
};

export default function Demo() {
  return <WiemerV2KontaktForm {...kontaktSample} />;
}
