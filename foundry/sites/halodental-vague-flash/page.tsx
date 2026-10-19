// The whole Halo Dental recreation, built only from this site's blocks, with each block's demo
// content. Shown in the gallery as "halodental-vague-flash — full page". Light is the faithful mode; the hero,
// mission band and footer force themselves dark.
import { HalodentalVagueFlashFooter } from "@foundry/halodental-vague-flash-footer";
import { footerSample } from "./halodental-vague-flash-footer/halodental-vague-flash-footer.demo";
import { HalodentalVagueFlashHeader } from "@foundry/halodental-vague-flash-header";
import { headerSample } from "./halodental-vague-flash-header/halodental-vague-flash-header.demo";
import { HalodentalVagueFlashHero } from "@foundry/halodental-vague-flash-hero";
import { heroSample } from "./halodental-vague-flash-hero/halodental-vague-flash-hero.demo";
import { HalodentalVagueFlashMission } from "@foundry/halodental-vague-flash-mission";
import { missionSample } from "./halodental-vague-flash-mission/halodental-vague-flash-mission.demo";
import { HalodentalVagueFlashNews } from "@foundry/halodental-vague-flash-news";
import { newsSample } from "./halodental-vague-flash-news/halodental-vague-flash-news.demo";
import { HalodentalVagueFlashNewsletter } from "@foundry/halodental-vague-flash-newsletter";
import { newsletterSample } from "./halodental-vague-flash-newsletter/halodental-vague-flash-newsletter.demo";
import { HalodentalVagueFlashProduct } from "@foundry/halodental-vague-flash-product";
import { productSample } from "./halodental-vague-flash-product/halodental-vague-flash-product.demo";

export default function HalodentalVagueFlashPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <HalodentalVagueFlashHeader {...headerSample} />
      <HalodentalVagueFlashHero {...heroSample} />
      <HalodentalVagueFlashProduct {...productSample} />
      <HalodentalVagueFlashMission {...missionSample} />
      <HalodentalVagueFlashNews {...newsSample} />
      <HalodentalVagueFlashNewsletter {...newsletterSample} />
      <HalodentalVagueFlashFooter {...footerSample} />
    </div>
  );
}
