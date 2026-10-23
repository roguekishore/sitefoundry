// The whole Bridge recreation, built only from this site's blocks, with each block's demo
// content (a made-up company, Orrery). Shown in the gallery as "bridge — full page".
// Light is the faithful mode.
import { BridgeAnnouncement } from "@foundry/bridge-announcement";
import { BridgeCta } from "@foundry/bridge-cta";
import { BridgeFeatureGrid } from "@foundry/bridge-feature-grid";
import { BridgeFooter } from "@foundry/bridge-footer";
import { BridgeHeader } from "@foundry/bridge-header";
import { BridgeHero } from "@foundry/bridge-hero";
import { BridgeLogos } from "@foundry/bridge-logos";
import { announcementSample } from "./bridge-announcement/bridge-announcement.demo";
import { ctaSample } from "./bridge-cta/bridge-cta.demo";
import { platformSample, useCasesSample } from "./bridge-feature-grid/bridge-feature-grid.demo";
import { footerSample } from "./bridge-footer/bridge-footer.demo";
import { headerSample } from "./bridge-header/bridge-header.demo";
import { heroSample } from "./bridge-hero/bridge-hero.demo";
import { logosSample } from "./bridge-logos/bridge-logos.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <BridgeAnnouncement {...announcementSample} />
      <BridgeHeader {...headerSample} />
      <BridgeHero {...heroSample} underHeader />
      <BridgeLogos {...logosSample} />
      <BridgeFeatureGrid {...platformSample} />
      {/* the closing card brings its own air above it */}
      <BridgeFeatureGrid {...useCasesSample} className="pb-4 lg:pb-2" />
      <BridgeCta {...ctaSample} />
      <BridgeFooter {...footerSample} />
    </div>
  );
}
