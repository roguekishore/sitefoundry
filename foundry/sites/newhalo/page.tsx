// The Brio landing page (recreating halodental.com's design), built only from this site's
// blocks with each block's demo content. Light is the faithful mode.
import { NewhaloFooter } from "@foundry/newhalo-footer";
import { NewhaloHeader } from "@foundry/newhalo-header";
import { NewhaloHero } from "@foundry/newhalo-hero";
import { NewhaloNews } from "@foundry/newhalo-news";
import { NewhaloNewsletter } from "@foundry/newhalo-newsletter";
import { NewhaloSmoothScroll } from "@foundry/newhalo-smooth-scroll";
import { NewhaloStatement } from "@foundry/newhalo-statement";
import { NewhaloTextGallery } from "@foundry/newhalo-text-gallery";
import { footerSample } from "./newhalo-footer/newhalo-footer.demo";
import { headerSample } from "./newhalo-header/newhalo-header.demo";
import { heroSample } from "./newhalo-hero/newhalo-hero.demo";
import { newsSample } from "./newhalo-news/newhalo-news.demo";
import { newsletterSample } from "./newhalo-newsletter/newhalo-newsletter.demo";
import { statementSample } from "./newhalo-statement/newhalo-statement.demo";
import { textGallerySample } from "./newhalo-text-gallery/newhalo-text-gallery.demo";

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <NewhaloSmoothScroll />
      <NewhaloHeader {...headerSample} />
      <NewhaloHero {...heroSample} />
      <NewhaloTextGallery {...textGallerySample} />
      <NewhaloStatement {...statementSample} />
      <NewhaloNews {...newsSample} />
      <NewhaloNewsletter {...newsletterSample} />
      <NewhaloFooter {...footerSample} />
    </div>
  );
}
