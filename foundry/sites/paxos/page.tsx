// The whole Paxos recreation, built only from this site's blocks, with each block's demo
// content (a made-up company, Keelstone). Light is the faithful mode.
import { PaxosAssets } from "@foundry/paxos-assets";
import { PaxosCta } from "@foundry/paxos-cta";
import { PaxosFooter } from "@foundry/paxos-footer";
import { PaxosHeader } from "@foundry/paxos-header";
import { PaxosHero } from "@foundry/paxos-hero";
import { PaxosLogos } from "@foundry/paxos-logos";
import { PaxosPartner } from "@foundry/paxos-partner";
import { PaxosProducts } from "@foundry/paxos-products";
import { PaxosRegulation } from "@foundry/paxos-regulation";
import { assetsSample } from "./paxos-assets/paxos-assets.demo";
import { ctaSample } from "./paxos-cta/paxos-cta.demo";
import { footerSample } from "./paxos-footer/paxos-footer.demo";
import { headerSample } from "./paxos-header/paxos-header.demo";
import { heroSample } from "./paxos-hero/paxos-hero.demo";
import { logosSample } from "./paxos-logos/paxos-logos.demo";
import { partnerSample } from "./paxos-partner/paxos-partner.demo";
import { productsSample } from "./paxos-products/paxos-products.demo";
import { regulationSample } from "./paxos-regulation/paxos-regulation.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <PaxosHeader {...headerSample} />
      <PaxosHero {...heroSample} />
      <PaxosLogos {...logosSample} />
      <PaxosProducts {...productsSample} />
      <PaxosAssets {...assetsSample} />
      <PaxosRegulation {...regulationSample} />
      <PaxosPartner {...partnerSample} />
      <PaxosCta {...ctaSample} />
      <PaxosFooter {...footerSample} />
    </div>
  );
}
