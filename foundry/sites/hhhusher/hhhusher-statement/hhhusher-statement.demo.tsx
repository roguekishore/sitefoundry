import { HhhusherStatement, type HhhusherStatementProps } from "./hhhusher-statement";

export const statementSample: HhhusherStatementProps = {
  id: "overview",
  lines: [
    "Meet the Veil. A felt-lined shield that clips to",
    "the snare rim and keeps cymbal wash out of the",
    "snare mic. Great drum sounds are made at the",
    "kit, long before anyone touches a fader.",
  ],
};

export const productStatementSample: HhhusherStatementProps = {
  lines: [
    "The Veil stops cymbal wash where it starts, so",
    "drummers get drier snare tracks, simpler mixes",
    "and a sound that holds up on any system.",
  ],
};

export default function Demo() {
  return <HhhusherStatement {...statementSample} />;
}
