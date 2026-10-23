import { LithicButton } from "./lithic-button";

export default function Demo() {
  return (
    <div className="grid gap-6 p-8">
      <div className="flex flex-wrap gap-4">
        <LithicButton href="#">Talk to us</LithicButton>
        <LithicButton href="#" variant="dark" arrow={false}>
          Console
        </LithicButton>
      </div>
      <div className="dark flex flex-wrap gap-4 rounded-lg bg-background p-6">
        <LithicButton href="#" variant="glass">
          Try the test bench
        </LithicButton>
        <LithicButton href="#">Talk to us</LithicButton>
      </div>
      <div className="flex flex-wrap gap-4 rounded-lg bg-accent p-6">
        <LithicButton href="#" variant="light">
          See how it works
        </LithicButton>
      </div>
    </div>
  );
}
