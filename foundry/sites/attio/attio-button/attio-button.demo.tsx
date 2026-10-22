import { AttioButton } from "./attio-button";

export default function Demo() {
  return (
    <div className="flex flex-col gap-8 bg-background p-8">
      <div className="flex flex-wrap items-center gap-3">
        <AttioButton href="#">Book a walkthrough</AttioButton>
        <AttioButton href="#" variant="primary">Try it free</AttioButton>
        <AttioButton href="#" size="sm" arrow>Read the story</AttioButton>
        <AttioButton href="#" variant="ghost">Pricing</AttioButton>
      </div>
      <div className="dark flex flex-wrap items-center gap-3 rounded-xl bg-background p-6">
        <AttioButton href="#">Book a walkthrough</AttioButton>
        <AttioButton href="#" variant="primary">Try it free</AttioButton>
        <AttioButton href="#" size="sm" arrow>See the tools</AttioButton>
      </div>
      <div className="max-w-80">
        <AttioButton variant="primary" size="lg" type="submit">Send me a tour</AttioButton>
      </div>
    </div>
  );
}
