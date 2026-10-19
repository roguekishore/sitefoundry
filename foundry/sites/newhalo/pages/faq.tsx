// Help page (recreating halodental.com/faq), built from this site's blocks.
import { NewhaloFaq } from "@foundry/newhalo-faq";
import { NewhaloFooter } from "@foundry/newhalo-footer";
import { NewhaloHeader } from "@foundry/newhalo-header";
import { NewhaloPageHero } from "@foundry/newhalo-page-hero";
import { NewhaloSmoothScroll } from "@foundry/newhalo-smooth-scroll";
import { faqSample } from "../newhalo-faq/newhalo-faq.demo";
import { footerSample } from "../newhalo-footer/newhalo-footer.demo";
import { headerFor } from "../newhalo-header/newhalo-header.demo";
import { faqHeroSample } from "../newhalo-page-hero/newhalo-page-hero.demo";

export default function FaqPage() {
  return (
    <div className="bg-background text-foreground">
      <NewhaloSmoothScroll />
      <NewhaloHeader {...headerFor("Help")} />
      <NewhaloPageHero {...faqHeroSample} />
      <NewhaloFaq {...faqSample} />
      <NewhaloFooter {...footerSample} />
    </div>
  );
}
