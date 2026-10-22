import { IncreaseButton } from "./increase-button";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-3 bg-background p-8">
      <IncreaseButton href="#">Talk to our team</IncreaseButton>
      <IncreaseButton href="#" variant="outline">Open an account</IncreaseButton>
      <IncreaseButton href="#" variant="dark" size="sm">Get started</IncreaseButton>
      <IncreaseButton href="#" variant="ghost" size="sm">Log in</IncreaseButton>
    </div>
  );
}
