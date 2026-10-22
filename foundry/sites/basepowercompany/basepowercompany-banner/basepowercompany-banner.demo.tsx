import { BasepowercompanySwash } from "@foundry/basepowercompany-swash";
import { BasepowercompanyBanner, type BasepowercompanyBannerProps } from "./basepowercompany-banner";

export const bannerSample: BasepowercompanyBannerProps = {
  tag: "Rates",
  title: (
    <>
      Your power bill
      <br />
      <BasepowercompanySwash tone="accent">is likely too high.</BasepowercompanySwash>
    </>
  ),
  body: "If your area lets you pick a provider, find out what a switch to Porchlight would save you.",
  primaryCta: { label: "How it works", href: "#rates" },
  secondaryCta: { label: "Compare my bill", href: "#compare" },
  mediaLabel: "Hands holding an opened electricity bill",
};

export const closerSample: BasepowercompanyBannerProps = {
  tag: "Join in",
  title: <BasepowercompanySwash tone="accent">The whole street is switching</BasepowercompanySwash>,
  primaryCta: { label: "Sign up", href: "#signup" },
  secondaryCta: { label: "Meet our members", href: "#stories" },
  mediaLabel: "Two neighbours chatting in a backyard beside the Hub",
};

export default function Demo() {
  return (
    <>
      <BasepowercompanyBanner {...bannerSample} />
      <div className="h-16 bg-background" />
      <BasepowercompanyBanner {...closerSample} />
    </>
  );
}
