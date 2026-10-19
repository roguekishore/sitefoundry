// Site terms page (recreating halodental.com/legal/terms-of-use), built from this site's blocks.
import { NewhaloFooter } from "@foundry/newhalo-footer";
import { NewhaloHeader } from "@foundry/newhalo-header";
import { NewhaloLegal } from "@foundry/newhalo-legal";
import { NewhaloPageHero } from "@foundry/newhalo-page-hero";
import { NewhaloSmoothScroll } from "@foundry/newhalo-smooth-scroll";
import { footerSample } from "../newhalo-footer/newhalo-footer.demo";
import { headerFor } from "../newhalo-header/newhalo-header.demo";
import { termsSample } from "../newhalo-legal/newhalo-legal.demo";
import { termsHeroSample } from "../newhalo-page-hero/newhalo-page-hero.demo";

export default function TermsOfUsePage() {
  return (
    <div className="bg-background text-foreground">
      <NewhaloSmoothScroll />
      <NewhaloHeader {...headerFor()} />
      <NewhaloPageHero {...termsHeroSample} />
      <NewhaloLegal {...termsSample} />
      <NewhaloFooter {...footerSample} />
    </div>
  );
}
