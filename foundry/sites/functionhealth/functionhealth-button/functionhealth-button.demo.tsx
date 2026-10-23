import { FunctionhealthButton } from "./functionhealth-button";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-4 bg-background p-8">
      <FunctionhealthButton href="#start">Start testing</FunctionhealthButton>
      <FunctionhealthButton href="#how" variant="outline">
        See how it works
      </FunctionhealthButton>
      <FunctionhealthButton size="sm" type="submit">
        Submit
      </FunctionhealthButton>
      <div className="rounded-xl bg-foreground p-4">
        <FunctionhealthButton href="#start" variant="light">
          Start testing
        </FunctionhealthButton>
      </div>
    </div>
  );
}
