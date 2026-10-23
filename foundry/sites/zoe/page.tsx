// The whole Zoe recreation, built only from this site's blocks, with each block's demo
// content (a made-up gut-health food science company, Tillwell). Shown in the gallery as
// "zoe — full page". Light is the faithful mode.
import { ZoeBento } from "@foundry/zoe-bento";
import { ZoeChallenge } from "@foundry/zoe-challenge";
import { ZoeDisclaimer } from "@foundry/zoe-disclaimer";
import { ZoeExplore } from "@foundry/zoe-explore";
import { ZoeFooter } from "@foundry/zoe-footer";
import { ZoeHeader } from "@foundry/zoe-header";
import { ZoeHero } from "@foundry/zoe-hero";
import { ZoePodcast } from "@foundry/zoe-podcast";
import { ZoeProducts } from "@foundry/zoe-products";
import { ZoeResearch } from "@foundry/zoe-research";
import { ZoeSpotlight } from "@foundry/zoe-spotlight";
import { ZoeStatement } from "@foundry/zoe-statement";
import { ZoeStories } from "@foundry/zoe-stories";
import { bentoSample } from "./zoe-bento/zoe-bento.demo";
import { challengeSample } from "./zoe-challenge/zoe-challenge.demo";
import { disclaimerSample } from "./zoe-disclaimer/zoe-disclaimer.demo";
import { exploreSample } from "./zoe-explore/zoe-explore.demo";
import { footerSample } from "./zoe-footer/zoe-footer.demo";
import { headerSample } from "./zoe-header/zoe-header.demo";
import { heroSample } from "./zoe-hero/zoe-hero.demo";
import { podcastSample } from "./zoe-podcast/zoe-podcast.demo";
import { productsSample } from "./zoe-products/zoe-products.demo";
import { researchSample } from "./zoe-research/zoe-research.demo";
import { spotlightSample } from "./zoe-spotlight/zoe-spotlight.demo";
import { statementSample } from "./zoe-statement/zoe-statement.demo";
import { storiesSample } from "./zoe-stories/zoe-stories.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <ZoeHeader {...headerSample} />
      <ZoeHero {...heroSample} />
      <ZoeSpotlight {...spotlightSample} />
      <ZoeProducts {...productsSample} />
      <ZoePodcast {...podcastSample} />
      <ZoeStatement {...statementSample} />
      <ZoeBento {...bentoSample} className="pb-24" />
      <ZoeChallenge {...challengeSample} />
      <ZoeResearch {...researchSample} />
      <ZoeStories {...storiesSample} />
      <ZoeDisclaimer {...disclaimerSample} />
      <ZoeExplore {...exploreSample} />
      <ZoeFooter {...footerSample} />
    </div>
  );
}
