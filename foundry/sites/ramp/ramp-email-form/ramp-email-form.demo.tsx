import { RampEmailForm } from "./ramp-email-form";

export default function Demo() {
  return (
    <div className="space-y-8">
      <div className="bg-background p-8">
        <RampEmailForm fieldLabel="Work email" placeholder="Your work email" buttonLabel="Start for free" />
      </div>
      <div className="dark bg-background p-8">
        <RampEmailForm fieldLabel="Work email" placeholder="Your work email" buttonLabel="Start for free" />
      </div>
    </div>
  );
}
