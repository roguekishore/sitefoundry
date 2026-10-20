// Gallery only: the four fills, on a paper page and on a dark band.
import { PlumeformButton } from "./plumeform-button";

function Row() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <PlumeformButton href="#" arrow>Start a quiz</PlumeformButton>
      <PlumeformButton href="#" variant="plume">Mark it</PlumeformButton>
      <PlumeformButton href="#" variant="soft">Message the team</PlumeformButton>
      <PlumeformButton href="#" variant="light" size="sm">Log in</PlumeformButton>
      <PlumeformButton href="#" size="lg" arrow>Try it free</PlumeformButton>
    </div>
  );
}

export default function Demo() {
  return (
    <div>
      <div className="bg-background p-10"><Row /></div>
      <div className="dark bg-background p-10"><Row /></div>
    </div>
  );
}
