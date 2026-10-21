// The Marlowe Coachworks landing page (recreating esrbespoke.au), built only from this site's
// blocks with their demo content. Paper is the faithful mode; the hero, showcase and services
// sections carry the dark scope themselves. The header scrolls away and leaves two fixed chips;
// the page lifts off the footer at the end; Lenis smooths the wheel, as on the original.
import { EsrbespokeFooter } from "@foundry/esrbespoke-footer";
import { EsrbespokeHeader } from "@foundry/esrbespoke-header";
import { EsrbespokeHero } from "@foundry/esrbespoke-hero";
import { EsrbespokeIndex } from "@foundry/esrbespoke-index";
import { EsrbespokeMarques } from "@foundry/esrbespoke-marques";
import { EsrbespokeShowcase } from "@foundry/esrbespoke-showcase";
import { EsrbespokeSmoothScroll } from "@foundry/esrbespoke-smooth-scroll";
import { EsrbespokeStatement } from "@foundry/esrbespoke-statement";
import { footerSample } from "./esrbespoke-footer/esrbespoke-footer.demo";
import { headerSample } from "./esrbespoke-header/esrbespoke-header.demo";
import { heroSample } from "./esrbespoke-hero/esrbespoke-hero.demo";
import { indexSample } from "./esrbespoke-index/esrbespoke-index.demo";
import { marquesSample } from "./esrbespoke-marques/esrbespoke-marques.demo";
import { showcaseSample } from "./esrbespoke-showcase/esrbespoke-showcase.demo";
import { servicesStatementSample, statementSample } from "./esrbespoke-statement/esrbespoke-statement.demo";

export default function Page() {
  return (
    <div className="relative bg-background text-foreground">
      <EsrbespokeSmoothScroll />
      <EsrbespokeHeader {...headerSample} />
      <main className="relative z-10 bg-background">
        <EsrbespokeHero {...heroSample} />
        <EsrbespokeStatement {...statementSample} id="story" />
        <EsrbespokeShowcase {...showcaseSample} />
        <EsrbespokeMarques {...marquesSample} />
        <EsrbespokeStatement {...servicesStatementSample} id="services" />
        <EsrbespokeIndex {...indexSample} />
      </main>
      <EsrbespokeFooter {...footerSample} reveal />
    </div>
  );
}
