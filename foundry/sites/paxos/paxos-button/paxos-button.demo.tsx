import { PaxosButton } from "./paxos-button";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-5 bg-background p-8">
      <PaxosButton href="#">Talk to Us</PaxosButton>
      <PaxosButton href="#" variant="outline">
        Read the Audits
      </PaxosButton>
      <PaxosButton variant="bold" type="submit">
        Sign Up
      </PaxosButton>
    </div>
  );
}
