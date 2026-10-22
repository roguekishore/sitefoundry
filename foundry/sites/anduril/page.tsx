// The whole Anduril recreation (as "Northwatch"), built only from this site's blocks with each
// block's demo content. Dark is the faithful mode.
import { AndurilEditorial } from "@foundry/anduril-editorial";
import { AndurilFeature } from "@foundry/anduril-feature";
import { AndurilFooter } from "@foundry/anduril-footer";
import { AndurilHeader } from "@foundry/anduril-header";
import { AndurilHero } from "@foundry/anduril-hero";
import { AndurilNews } from "@foundry/anduril-news";
import { AndurilPlatforms } from "@foundry/anduril-platforms";
import { AndurilProducts } from "@foundry/anduril-products";
import { AndurilSmoothScroll } from "@foundry/anduril-smooth-scroll";
import { editorialSample } from "./anduril-editorial/anduril-editorial.demo";
import { featureSample } from "./anduril-feature/anduril-feature.demo";
import { footerSample } from "./anduril-footer/anduril-footer.demo";
import { headerSample } from "./anduril-header/anduril-header.demo";
import { heroSample } from "./anduril-hero/anduril-hero.demo";
import { newsSample } from "./anduril-news/anduril-news.demo";
import { platformsSample } from "./anduril-platforms/anduril-platforms.demo";
import { productsSample } from "./anduril-products/anduril-products.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <AndurilSmoothScroll />
      <AndurilHeader {...headerSample} />
      <main>
        <AndurilHero {...heroSample} />
        <AndurilFeature {...featureSample} />
        <AndurilProducts {...productsSample} />
        <AndurilPlatforms {...platformsSample} />
        <AndurilNews {...newsSample} />
        <AndurilEditorial {...editorialSample} />
      </main>
      <AndurilFooter {...footerSample} />
    </div>
  );
}
