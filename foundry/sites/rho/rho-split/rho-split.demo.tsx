import { RhoSplit, type RhoSplitProps } from "./rho-split";

export const growSample: RhoSplitProps = {
  eyebrow: "Grows alongside you",
  title: "Open in an afternoon, ready for a decade.",
  body: "Checking, cards and treasury under one login. Two founders in a spare room or two thousand people across time zones, Ostra keeps pace without a migration.",
};

export const liveSample: RhoSplitProps = {
  title: "Live by Friday.",
  body: "A real onboarding team moves your accounts, cards and approvals across, so nobody loses a week to setup.",
  mediaSide: "left",
  mediaRatio: 1,
  tone: "dark",
};

export const safetySample: RhoSplitProps = {
  title: "Careful with money, by design",
  body: "Deposits are spread across several partner banks for wider coverage, watched around the clock, and never lent out. (Demo copy: no real institution is named.)",
  action: { label: "How we protect you", href: "#" },
  tone: "dark",
};

export default function Demo() {
  return <RhoSplit {...growSample} />;
}
