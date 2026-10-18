// The complete Halo Dental recreation, built strictly from this site's blocks with their
// demo sample content. Light is the faithful page mode: the header, hero, mission band,
// and footer force `.dark` for Halo's signature black-stone-white rhythm.
import { HalodentalFooter } from "@foundry/halodental-footer";
import { HalodentalHeader } from "@foundry/halodental-header";
import { HalodentalHero } from "@foundry/halodental-hero";
import { HalodentalMission } from "@foundry/halodental-mission";
import { HalodentalNews } from "@foundry/halodental-news";
import { HalodentalNewsletter } from "@foundry/halodental-newsletter";
import { HalodentalProduct } from "@foundry/halodental-product";
import { footerSample } from "./halodental-footer/halodental-footer.demo";
import { headerSample } from "./halodental-header/halodental-header.demo";
import { heroSample } from "./halodental-hero/halodental-hero.demo";
import { missionSample } from "./halodental-mission/halodental-mission.demo";
import { newsSample } from "./halodental-news/halodental-news.demo";
import { newsletterSample } from "./halodental-newsletter/halodental-newsletter.demo";
import { productSample } from "./halodental-product/halodental-product.demo";

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <HalodentalHeader {...headerSample} />
      <HalodentalHero {...heroSample} />
      <HalodentalProduct {...productSample} />
      <HalodentalMission {...missionSample} />
      <HalodentalNews {...newsSample} />
      <HalodentalNewsletter {...newsletterSample} />
      <HalodentalFooter {...footerSample} />
    </div>
  );
}
