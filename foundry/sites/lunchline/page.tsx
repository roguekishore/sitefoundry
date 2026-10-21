// The ferrybank landing page (recreating lunchlinepartners.com), built only from this site's
// blocks with their demo content. Light is the faithful mode. The header is fixed and lies
// over the full-window hero on wide screens; a cream splash clears on load.
import { LunchlineApproach } from "@foundry/lunchline-approach";
import { LunchlineContact } from "@foundry/lunchline-contact";
import { LunchlineFooter } from "@foundry/lunchline-footer";
import { LunchlineHeader } from "@foundry/lunchline-header";
import { LunchlineHero } from "@foundry/lunchline-hero";
import { LunchlinePartners } from "@foundry/lunchline-partners";
import { LunchlinePartnerships } from "@foundry/lunchline-partnerships";
import { LunchlinePhilosophy } from "@foundry/lunchline-philosophy";
import { LunchlineStory } from "@foundry/lunchline-story";
import { approachSample } from "./lunchline-approach/lunchline-approach.demo";
import { contactSample } from "./lunchline-contact/lunchline-contact.demo";
import { footerSample } from "./lunchline-footer/lunchline-footer.demo";
import { headerSample } from "./lunchline-header/lunchline-header.demo";
import { heroSample } from "./lunchline-hero/lunchline-hero.demo";
import { partnersSample } from "./lunchline-partners/lunchline-partners.demo";
import { partnershipsSample } from "./lunchline-partnerships/lunchline-partnerships.demo";
import { philosophySample } from "./lunchline-philosophy/lunchline-philosophy.demo";
import { storySample } from "./lunchline-story/lunchline-story.demo";

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <LunchlineHeader {...headerSample} />
      <LunchlineHero {...heroSample} splash={["ferrybank", "holdings"]} />
      <LunchlineStory {...storySample} />
      <LunchlinePartners {...partnersSample} />
      <LunchlinePhilosophy {...philosophySample} />
      <LunchlineApproach {...approachSample} />
      <LunchlinePartnerships {...partnershipsSample} />
      <LunchlineContact {...contactSample} />
      <LunchlineFooter {...footerSample} />
    </div>
  );
}
