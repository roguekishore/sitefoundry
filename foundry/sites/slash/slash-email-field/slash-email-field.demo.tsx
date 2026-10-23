import { SlashEmailField } from "./slash-email-field";

export default function Demo() {
  return (
    <div className="grid max-w-[33rem] gap-8 bg-background p-10">
      <SlashEmailField placeholder="Work email" label="Work email" button="Open an account" />
      <SlashEmailField placeholder="Work email" label="Work email" button="Start free" shape="pill" />
    </div>
  );
}
