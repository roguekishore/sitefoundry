// The about page (recreating esrbespoke.au/about): page hero, the story under a heading, and the
// leadership table, built from this site's blocks with their demo content.
import { EsrbespokeFooter } from "@foundry/esrbespoke-footer";
import { EsrbespokeHeader } from "@foundry/esrbespoke-header";
import { EsrbespokeSmoothScroll } from "@foundry/esrbespoke-smooth-scroll";
import { footerSample } from "../esrbespoke-footer/esrbespoke-footer.demo";
import { headerSampleFor } from "../esrbespoke-header/esrbespoke-header.demo";
import { EsrbespokePageHero } from "@foundry/esrbespoke-page-hero";
import { EsrbespokeProse } from "@foundry/esrbespoke-prose";
import { EsrbespokeSplit } from "@foundry/esrbespoke-split";
import { EsrbespokeTable } from "@foundry/esrbespoke-table";
import { aboutHeroSample } from "../esrbespoke-page-hero/esrbespoke-page-hero.demo";
import { storySample } from "../esrbespoke-prose/esrbespoke-prose.demo";
import { teamSample } from "../esrbespoke-table/esrbespoke-table.demo";

export default function AboutPage() {
  return (
    <div className="relative bg-background text-foreground">
      <EsrbespokeSmoothScroll />
      <EsrbespokeHeader {...headerSampleFor("About")} />
      <main className="relative z-10 bg-background">
        <EsrbespokePageHero {...aboutHeroSample} />
        <EsrbespokeSplit id="partner" heading="A name owners trust" />
        <EsrbespokeProse {...storySample} />
        <EsrbespokeSplit heading="The people behind Marlowe" />
        <EsrbespokeTable {...teamSample} />
      </main>
      <EsrbespokeFooter {...footerSample} reveal />
    </div>
  );
}
