// The whole Castelion recreation, built only from this site's blocks, with each block's demo
// content. Light is the faithful mode (the cream page with navy bands). The header is fixed
// and transparent over the hero's pinned film; Lenis glides the wheel like the original.
import { CastelionCareersCall } from "@foundry/castelion-careers-call";
import { CastelionFeatureCard } from "@foundry/castelion-feature-card";
import { CastelionFooter } from "@foundry/castelion-footer";
import { CastelionHeader } from "@foundry/castelion-header";
import { CastelionHero } from "@foundry/castelion-hero";
import { CastelionNews } from "@foundry/castelion-news";
import { CastelionNotice } from "@foundry/castelion-notice";
import { CastelionRoles } from "@foundry/castelion-roles";
import { CastelionSmoothScroll } from "@foundry/castelion-smooth-scroll";
import { CastelionSplitStory } from "@foundry/castelion-split-story";
import { CastelionStatement } from "@foundry/castelion-statement";
import { careersCallSample } from "./castelion-careers-call/castelion-careers-call.demo";
import { featureCardSample } from "./castelion-feature-card/castelion-feature-card.demo";
import { footerSample } from "./castelion-footer/castelion-footer.demo";
import { headerSample } from "./castelion-header/castelion-header.demo";
import { heroSample } from "./castelion-hero/castelion-hero.demo";
import { newsSample } from "./castelion-news/castelion-news.demo";
import { noticeSample } from "./castelion-notice/castelion-notice.demo";
import { rolesSample } from "./castelion-roles/castelion-roles.demo";
import { splitStorySample } from "./castelion-split-story/castelion-split-story.demo";
import { statementSample } from "./castelion-statement/castelion-statement.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <CastelionSmoothScroll />
      <CastelionHeader {...headerSample} />
      <main>
        <CastelionHero {...heroSample} />
        <CastelionFeatureCard {...featureCardSample} />
        <CastelionStatement {...statementSample} />
        <CastelionSplitStory {...splitStorySample} />
        <CastelionCareersCall {...careersCallSample} />
        <CastelionRoles {...rolesSample} />
        <CastelionNotice {...noticeSample} />
        <CastelionNews {...newsSample} />
      </main>
      <CastelionFooter {...footerSample} />
    </div>
  );
}
