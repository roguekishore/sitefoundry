import { PaxosCta, type PaxosCtaProps } from "./paxos-cta";

export const ctaSample: PaxosCtaProps = {
  title: "Help us build money that is open, checkable and fair",
  primary: { label: "Open Roles", href: "#" },
  secondary: { label: "Talk to Us", href: "#" },
};

export default function Demo() {
  return <PaxosCta {...ctaSample} />;
}
