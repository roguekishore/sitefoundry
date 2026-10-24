import { ResendHeading } from "./resend-heading";

export default function Demo() {
  return (
    <div className="space-y-24 bg-background px-gutter py-section">
      <ResendHeading
        tile
        title="Ship it before"
        accent="lunch"
        text="One small client and a tidy REST surface. Drop it into the stack you already run, with libraries for the languages your team writes."
      />
      <ResendHeading
        align="start"
        title={["Tools engineers", "actually enjoy"]}
        text={["We build software for people who build software.", "The aim is a mail platform we'd pick ourselves."]}
      />
    </div>
  );
}
