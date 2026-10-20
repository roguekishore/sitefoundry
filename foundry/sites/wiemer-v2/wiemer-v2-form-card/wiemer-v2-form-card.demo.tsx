import { WiemerV2FormCard, type WiemerV2FormCardProps } from "./wiemer-v2-form-card";

export const formSample: WiemerV2FormCardProps = {
  fields: [
    { name: "name", label: "Name", placeholder: "Your name", required: true },
    { name: "email", label: "Email", type: "email", placeholder: "you@domain.com", required: true },
    { name: "message", label: "Message", type: "textarea", placeholder: "What would you like to know?", required: true },
  ],
  consent: (
    <>
      I agree that Ostrand may store these details to answer my question. More in our <a href="#privacy">privacy notice</a>.
    </>
  ),
  submitLabel: "Send message",
};

export default function Demo() {
  return (
    <div className="bg-muted p-6 lg:p-12">
      <WiemerV2FormCard {...formSample} className="mx-auto max-w-[26rem]" />
    </div>
  );
}
