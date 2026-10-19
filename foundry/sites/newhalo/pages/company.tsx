// About page (recreating halodental.com/company), built from this site's blocks.
import { NewhaloFooter } from "@foundry/newhalo-footer";
import { NewhaloHeader } from "@foundry/newhalo-header";
import { NewhaloNews } from "@foundry/newhalo-news";
import { NewhaloNewsletter } from "@foundry/newhalo-newsletter";
import { NewhaloPageHero } from "@foundry/newhalo-page-hero";
import { NewhaloShowcase } from "@foundry/newhalo-showcase";
import { NewhaloSmoothScroll } from "@foundry/newhalo-smooth-scroll";
import { NewhaloTextGallery } from "@foundry/newhalo-text-gallery";
import { NewhaloValues } from "@foundry/newhalo-values";
import { footerSample } from "../newhalo-footer/newhalo-footer.demo";
import { headerFor } from "../newhalo-header/newhalo-header.demo";
import { newsSample } from "../newhalo-news/newhalo-news.demo";
import { newsletterSample } from "../newhalo-newsletter/newhalo-newsletter.demo";
import { companyHeroSample } from "../newhalo-page-hero/newhalo-page-hero.demo";
import { partnersSample } from "../newhalo-showcase/newhalo-showcase.demo";
import { careersSample } from "../newhalo-text-gallery/newhalo-text-gallery.demo";
import { valuesSample } from "../newhalo-values/newhalo-values.demo";

export default function CompanyPage() {
  return (
    <div className="bg-background text-foreground">
      <NewhaloSmoothScroll />
      <NewhaloHeader {...headerFor("About")} />
      <NewhaloPageHero {...companyHeroSample} />
      <NewhaloValues {...valuesSample} />
      <NewhaloTextGallery {...careersSample} />
      <NewhaloShowcase {...partnersSample} />
      <NewhaloNews {...newsSample} title="They wrote about us" />
      <NewhaloNewsletter {...newsletterSample} />
      <NewhaloFooter {...footerSample} />
    </div>
  );
}
