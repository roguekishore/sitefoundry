import { ZoeChallenge, type ZoeChallengeProps } from "./zoe-challenge";

export const challengeSample: ZoeChallengeProps = {
  title: "Four strangers. Eight weeks. One big change.",
  cta: { label: "Watch the series", href: "#" },
};

export default function Demo() {
  return <ZoeChallenge {...challengeSample} />;
}
