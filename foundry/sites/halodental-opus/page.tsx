// The whole Halo Dental recreation, built only from this site's blocks, with each block's
// demo content. Shown in the gallery as "halodental-opus — full page". Light is the
// faithful mode; the black panels use the theme's dark palette on their own.
import { HalodentalOpusAbout } from "@foundry/halodental-opus-about";
import { HalodentalOpusFooter } from "@foundry/halodental-opus-footer";
import { HalodentalOpusHeader } from "@foundry/halodental-opus-header";
import { HalodentalOpusHero } from "@foundry/halodental-opus-hero";
import { HalodentalOpusNews } from "@foundry/halodental-opus-news";
import { HalodentalOpusNewsletter } from "@foundry/halodental-opus-newsletter";
import { HalodentalOpusProduct } from "@foundry/halodental-opus-product";
import { aboutSample } from "./halodental-opus-about/halodental-opus-about.demo";
import { footerSample } from "./halodental-opus-footer/halodental-opus-footer.demo";
import { headerSample } from "./halodental-opus-header/halodental-opus-header.demo";
import { heroSample } from "./halodental-opus-hero/halodental-opus-hero.demo";
import { newsSample } from "./halodental-opus-news/halodental-opus-news.demo";
import { newsletterSample } from "./halodental-opus-newsletter/halodental-opus-newsletter.demo";
import { productSample } from "./halodental-opus-product/halodental-opus-product.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <HalodentalOpusHeader {...headerSample} />
      <HalodentalOpusHero {...heroSample} />
      <HalodentalOpusProduct {...productSample} />
      <HalodentalOpusAbout {...aboutSample} />
      <HalodentalOpusNews {...newsSample} />
      <HalodentalOpusNewsletter {...newsletterSample} className="pb-[calc(var(--section-y)-0.625rem)]" />
      <HalodentalOpusFooter {...footerSample} className="bg-card" />
    </div>
  );
}
