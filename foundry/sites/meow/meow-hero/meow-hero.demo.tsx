// Sample content lives here (gallery only); the page reuses it. Tallyhold and the customers are made up.
import { MeowHero, type MeowHeroProps } from "./meow-hero";

export const heroSample: MeowHeroProps = {
  badge: { tag: "New", text: "Your agent can now open and run a Tallyhold account", href: "#" },
  title: "Company money, run by your team and its agents",
  text: "Checking, spend cards with 2% back on software, payouts in forty currencies and stablecoin rails in one place. Idle cash earns up to 3.6% in a short-term bill reserve.*",
  form: { placeholder: "Your work email", label: "Work email", button: "Open account" },
  fineprint: (
    <>
      *Reserve returns are estimates, change with the market and are not promised. Tallyhold is a software company, not a bank;
      checking accounts are held at our partner banks, each a member of its national deposit scheme. Cash moved into the reserve
      is invested in short-dated government bills and is not covered by deposit insurance. Card rewards apply to eligible software
      purchases; see the <a href="#">reward terms</a>. A minimum balance applies to the reserve and may be waived at our
      discretion. Figures are as of this month and depend on your balance. The Tallyhold card is issued by our card partner and
      works wherever the card network is accepted. Payouts in other currencies are converted at the rate shown before you send.
    </>
  ),
  logos: ["Fernwick", "Quarry & Co", "Lumen Atlas", "brightpost", "Holloway", "Ninefold", "Saltmarsh"],
};

export default function Demo() {
  return <MeowHero {...heroSample} />;
}
