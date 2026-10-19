// The complete Halo Dental recreation, built strictly from this site's blocks with their
// demo sample content. Light is the faithful page mode: the header, hero, mission band,
// and footer force `.dark` for Halo's signature black-stone-white rhythm.
import { HalodentalGeminiFooter } from "@foundry/halodental-gemini-footer";
import { HalodentalGeminiHeader } from "@foundry/halodental-gemini-header";
import { HalodentalGeminiHero } from "@foundry/halodental-gemini-hero";
import { HalodentalGeminiMission } from "@foundry/halodental-gemini-mission";
import { HalodentalGeminiNews } from "@foundry/halodental-gemini-news";
import { HalodentalGeminiNewsletter } from "@foundry/halodental-gemini-newsletter";
import { HalodentalGeminiProduct } from "@foundry/halodental-gemini-product";
import { footerSample } from "./halodental-gemini-footer/halodental-gemini-footer.demo";
import { headerSample } from "./halodental-gemini-header/halodental-gemini-header.demo";
import { heroSample } from "./halodental-gemini-hero/halodental-gemini-hero.demo";
import { missionSample } from "./halodental-gemini-mission/halodental-gemini-mission.demo";
import { newsSample } from "./halodental-gemini-news/halodental-gemini-news.demo";
import { newsletterSample } from "./halodental-gemini-newsletter/halodental-gemini-newsletter.demo";
import { productSample } from "./halodental-gemini-product/halodental-gemini-product.demo";

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <HalodentalGeminiHeader {...headerSample} />
      <HalodentalGeminiHero {...heroSample} />
      <HalodentalGeminiProduct {...productSample} />
      <HalodentalGeminiMission {...missionSample} />
      <HalodentalGeminiNews {...newsSample} />
      <HalodentalGeminiNewsletter {...newsletterSample} />
      <HalodentalGeminiFooter {...footerSample} />
    </div>
  );
}
