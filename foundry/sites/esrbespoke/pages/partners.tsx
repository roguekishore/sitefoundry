// The partners page (recreating esrbespoke.au/partners): page hero, a heading, and one feature
// entry per partner, built from this site's blocks with their demo content.
import { EsrbespokeFooter } from "@foundry/esrbespoke-footer";
import { EsrbespokeHeader } from "@foundry/esrbespoke-header";
import { EsrbespokeSmoothScroll } from "@foundry/esrbespoke-smooth-scroll";
import { footerSample } from "../esrbespoke-footer/esrbespoke-footer.demo";
import { headerSampleFor } from "../esrbespoke-header/esrbespoke-header.demo";
import { EsrbespokeFeature } from "@foundry/esrbespoke-feature";
import { EsrbespokePageHero } from "@foundry/esrbespoke-page-hero";
import { EsrbespokeSplit } from "@foundry/esrbespoke-split";
import { guildSample, paintSample } from "../esrbespoke-feature/esrbespoke-feature.demo";
import { partnersHeroSample } from "../esrbespoke-page-hero/esrbespoke-page-hero.demo";

export default function PartnersPage() {
  return (
    <div className="relative bg-background text-foreground">
      <EsrbespokeSmoothScroll />
      <EsrbespokeHeader {...headerSampleFor("Partners")} />
      <main className="relative z-10 bg-background">
        <EsrbespokePageHero {...partnersHeroSample} />
        <EsrbespokeSplit id="partnerships" heading="Our partnerships" />
        <EsrbespokeFeature {...guildSample} />
        <EsrbespokeFeature {...paintSample} />
      </main>
      <EsrbespokeFooter {...footerSample} reveal />
    </div>
  );
}
