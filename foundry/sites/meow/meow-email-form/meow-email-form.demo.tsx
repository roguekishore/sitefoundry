import { MeowEmailForm } from "./meow-email-form";

export default function Demo() {
  return (
    <div className="flex flex-col gap-8">
      <div className="dark bg-background p-8">
        <MeowEmailForm surface="frost" placeholder="Your work email" label="Work email" button="Open account" className="max-w-[30.625rem]" />
      </div>
      <div className="bg-muted p-8">
        <MeowEmailForm tone="accent" placeholder="Your work email" label="Work email" button="Open account" className="max-w-[30.625rem]" />
      </div>
    </div>
  );
}
