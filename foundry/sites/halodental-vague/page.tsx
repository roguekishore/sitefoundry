// The whole Halo Dental recreation, built only from this site's blocks, with each block's demo
// content. Shown in the gallery as "halodental-vague — full page". Light is the faithful mode; the hero,
// mission band and footer force themselves dark.
import { HalodentalVagueFooter } from "@foundry/halodental-vague-footer";
import { footerSample } from "./halodental-vague-footer/halodental-vague-footer.demo";
import { HalodentalVagueHeader } from "@foundry/halodental-vague-header";
import { headerSample } from "./halodental-vague-header/halodental-vague-header.demo";
import { HalodentalVagueHero } from "@foundry/halodental-vague-hero";
import { heroSample } from "./halodental-vague-hero/halodental-vague-hero.demo";
import { HalodentalVagueMission } from "@foundry/halodental-vague-mission";
import { missionSample } from "./halodental-vague-mission/halodental-vague-mission.demo";
import { HalodentalVagueNews } from "@foundry/halodental-vague-news";
import { newsSample } from "./halodental-vague-news/halodental-vague-news.demo";
import { HalodentalVagueNewsletter } from "@foundry/halodental-vague-newsletter";
import { newsletterSample } from "./halodental-vague-newsletter/halodental-vague-newsletter.demo";
import { HalodentalVagueProduct } from "@foundry/halodental-vague-product";
import { productSample } from "./halodental-vague-product/halodental-vague-product.demo";

export default function HalodentalVaguePage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <HalodentalVagueHeader {...headerSample} />
      <HalodentalVagueHero {...heroSample} />
      <HalodentalVagueProduct {...productSample} />
      <HalodentalVagueMission {...missionSample} />
      <HalodentalVagueNews {...newsSample} />
      <HalodentalVagueNewsletter {...newsletterSample} />
      <HalodentalVagueFooter {...footerSample} />
    </div>
  );
}
