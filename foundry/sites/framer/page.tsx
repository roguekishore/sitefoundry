// The whole Framer recreation, built only from this site's blocks with each block's demo
// content (a made-up site studio, Tessel). Dark is the faithful mode.
import { FramerAgents } from "@foundry/framer-agents";
import { FramerCommunity } from "@foundry/framer-community";
import { FramerCta } from "@foundry/framer-cta";
import { FramerFooter } from "@foundry/framer-footer";
import { FramerHeader } from "@foundry/framer-header";
import { FramerHero } from "@foundry/framer-hero";
import { FramerLogos } from "@foundry/framer-logos";
import { FramerPlatform } from "@foundry/framer-platform";
import { FramerShowcase } from "@foundry/framer-showcase";
import { FramerStories } from "@foundry/framer-stories";
import { agentsSample } from "./framer-agents/framer-agents.demo";
import { communitySample } from "./framer-community/framer-community.demo";
import { ctaSample } from "./framer-cta/framer-cta.demo";
import { footerSample } from "./framer-footer/framer-footer.demo";
import { headerSample } from "./framer-header/framer-header.demo";
import { heroSample } from "./framer-hero/framer-hero.demo";
import { logosSample } from "./framer-logos/framer-logos.demo";
import { platformSample } from "./framer-platform/framer-platform.demo";
import { showcaseSample } from "./framer-showcase/framer-showcase.demo";
import { storiesSample } from "./framer-stories/framer-stories.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <FramerHeader {...headerSample} />
      <FramerHero {...heroSample} />
      {/* the logos sit closer to the agents head than sections sit to each other */}
      <FramerLogos {...logosSample} className="pt-15 pb-5 lg:pt-[6.25rem] lg:pb-8" />
      <FramerAgents {...agentsSample} />
      <FramerPlatform {...platformSample} />
      <FramerShowcase {...showcaseSample} />
      <FramerStories {...storiesSample} />
      <FramerCommunity {...communitySample} />
      <FramerCta {...ctaSample} />
      <FramerFooter {...footerSample} />
    </div>
  );
}
