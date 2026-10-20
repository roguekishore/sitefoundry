import { WiemerContact, type WiemerContactProps } from "./wiemer-contact";

export const contactSample: WiemerContactProps = {
  tag: "Write to us",
  title: "Something on your mind?",
  text: "Ask away. We reply to every message within two working days.",
  fields: {
    name: { label: "Name", placeholder: "Your name" },
    email: { label: "Email", placeholder: "you@example.com" },
    message: { label: "Message", placeholder: "What would you like to know?" },
  },
  consent: (
    <>
      I agree that my details are stored and used to answer my question. More on how we handle data in our{" "}
      <a href="#privacy">privacy notice</a>.
    </>
  ),
  submit: "Send message",
  action: "#",
};

export default function Demo() {
  return <WiemerContact {...contactSample} />;
}
