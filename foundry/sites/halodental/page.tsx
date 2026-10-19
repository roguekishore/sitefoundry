// The whole Halo Dental recreation, built only from this site's blocks, with each block's demo
// content. Shown in the gallery as "halodental — full page". Light is the faithful mode; the hero,
// mission band and footer force themselves dark.
import { HalodentalFooter } from "@foundry/halodental-footer";
import { footerSample } from "./halodental-footer/halodental-footer.demo";
import { HalodentalHeader } from "@foundry/halodental-header";
import { headerSample } from "./halodental-header/halodental-header.demo";
import { HalodentalHero } from "@foundry/halodental-hero";
import { heroSample } from "./halodental-hero/halodental-hero.demo";
import { HalodentalMission } from "@foundry/halodental-mission";
import { missionSample } from "./halodental-mission/halodental-mission.demo";
import { HalodentalNews } from "@foundry/halodental-news";
import { newsSample } from "./halodental-news/halodental-news.demo";
import { HalodentalNewsletter } from "@foundry/halodental-newsletter";
import { newsletterSample } from "./halodental-newsletter/halodental-newsletter.demo";
import { HalodentalProduct } from "@foundry/halodental-product";
import { productSample } from "./halodental-product/halodental-product.demo";

export default function HalodentalPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
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
