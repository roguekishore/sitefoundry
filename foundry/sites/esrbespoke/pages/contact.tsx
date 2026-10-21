// The contact page (recreating esrbespoke.au/contact): page hero, the enquiry details, a short
// visit note and one feature entry per building (their names stay pinned while the details
// scroll), built from this site's blocks with their demo content.
import { EsrbespokeFooter } from "@foundry/esrbespoke-footer";
import { EsrbespokeHeader } from "@foundry/esrbespoke-header";
import { EsrbespokeSmoothScroll } from "@foundry/esrbespoke-smooth-scroll";
import { footerSample } from "../esrbespoke-footer/esrbespoke-footer.demo";
import { headerSampleFor } from "../esrbespoke-header/esrbespoke-header.demo";
import { EsrbespokeFeature } from "@foundry/esrbespoke-feature";
import { EsrbespokePageHero } from "@foundry/esrbespoke-page-hero";
import { EsrbespokeSplit } from "@foundry/esrbespoke-split";
import { studioSample, workshopSample } from "../esrbespoke-feature/esrbespoke-feature.demo";
import { contactHeroSample } from "../esrbespoke-page-hero/esrbespoke-page-hero.demo";
import { enquiriesSample, visitSample } from "../esrbespoke-split/esrbespoke-split.demo";

export default function ContactPage() {
  return (
    <div className="relative bg-background text-foreground">
      <EsrbespokeSmoothScroll />
      <EsrbespokeHeader {...headerSampleFor("Contact")} />
      <main className="relative z-10 bg-background">
        <EsrbespokePageHero {...contactHeroSample} />
        <EsrbespokeSplit {...enquiriesSample} />
        <EsrbespokeSplit {...visitSample} />
        <EsrbespokeFeature {...studioSample} />
        <EsrbespokeFeature {...workshopSample} />
      </main>
      <EsrbespokeFooter {...footerSample} reveal />
    </div>
  );
}
