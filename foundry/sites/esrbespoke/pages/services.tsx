// The services page (recreating esrbespoke.au/services), built from this site's blocks with their
// demo content: page hero, offer, the services accordion, a photo band, the body-style list,
// the photo statement, the standards accordion and a last photo band before the footer.
import { EsrbespokeFooter } from "@foundry/esrbespoke-footer";
import { EsrbespokeHeader } from "@foundry/esrbespoke-header";
import { EsrbespokeSmoothScroll } from "@foundry/esrbespoke-smooth-scroll";
import { footerSample } from "../esrbespoke-footer/esrbespoke-footer.demo";
import { headerSampleFor } from "../esrbespoke-header/esrbespoke-header.demo";
import { EsrbespokeAccordion } from "@foundry/esrbespoke-accordion";
import { EsrbespokeMarques } from "@foundry/esrbespoke-marques";
import { EsrbespokeMediaBand } from "@foundry/esrbespoke-media-band";
import { EsrbespokeMediaStatement } from "@foundry/esrbespoke-media-statement";
import { EsrbespokePageHero } from "@foundry/esrbespoke-page-hero";
import { EsrbespokeSplit } from "@foundry/esrbespoke-split";
import { differenceAccordionSample, servicesAccordionSample } from "../esrbespoke-accordion/esrbespoke-accordion.demo";
import { marquesSample } from "../esrbespoke-marques/esrbespoke-marques.demo";
import { floorBandSample, loungeBandSample } from "../esrbespoke-media-band/esrbespoke-media-band.demo";
import { detailsSample } from "../esrbespoke-media-statement/esrbespoke-media-statement.demo";
import { servicesHeroSample } from "../esrbespoke-page-hero/esrbespoke-page-hero.demo";
import { offerSample, standardSample } from "../esrbespoke-split/esrbespoke-split.demo";

export default function ServicesPage() {
  return (
    <div className="relative bg-background text-foreground">
      <EsrbespokeSmoothScroll />
      <EsrbespokeHeader {...headerSampleFor("Services")} />
      <main className="relative z-10 bg-background">
        <EsrbespokePageHero {...servicesHeroSample} />
        <EsrbespokeSplit {...offerSample} />
        <EsrbespokeAccordion {...servicesAccordionSample} />
        <EsrbespokeMediaBand {...floorBandSample} />
        <EsrbespokeMarques {...marquesSample} note="Trusted to repair to the standard the makers themselves set." className="mt-6" />
        <EsrbespokeMediaStatement {...detailsSample} />
        <EsrbespokeSplit {...standardSample} className="pt-16" />
        <EsrbespokeAccordion {...differenceAccordionSample} />
        <EsrbespokeMediaBand {...loungeBandSample} />
      </main>
      <EsrbespokeFooter {...footerSample} reveal />
    </div>
  );
}
