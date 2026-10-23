import { PaxosHeading } from "./paxos-heading";

export default function Demo() {
  return (
    <div className="flex flex-col gap-16 bg-background px-gutter py-12">
      <PaxosHeading
        title="Settlement rails built for regulated money"
        lead="Every token Keelstone issues is redeemable one-for-one, held apart from our own balance sheet and examined by supervisors on three continents."
      />
      <PaxosHeading align="start" eyebrow="Oversight" title="Built inside the rules, not around them" />
    </div>
  );
}
