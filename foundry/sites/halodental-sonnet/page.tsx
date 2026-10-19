// The whole Halo Dental recreation, built only from this site's blocks, with each block's demo
// content. Shown in the gallery as "halodental-sonnet — full page". Light is the faithful mode.
import { HalodentalSonnetFooter } from "@foundry/halodental-sonnet-footer";
import { HalodentalSonnetHeader } from "@foundry/halodental-sonnet-header";
import { HalodentalSonnetHero } from "@foundry/halodental-sonnet-hero";
import { HalodentalSonnetNews } from "@foundry/halodental-sonnet-news";
import { HalodentalSonnetNewsletter } from "@foundry/halodental-sonnet-newsletter";
import { HalodentalSonnetProduct } from "@foundry/halodental-sonnet-product";
import { HalodentalSonnetStatement } from "@foundry/halodental-sonnet-statement";
import { footerSample } from "./halodental-sonnet-footer/halodental-sonnet-footer.demo";
import { headerSample } from "./halodental-sonnet-header/halodental-sonnet-header.demo";
import { heroSample } from "./halodental-sonnet-hero/halodental-sonnet-hero.demo";
import { newsSample } from "./halodental-sonnet-news/halodental-sonnet-news.demo";
import { newsletterSample } from "./halodental-sonnet-newsletter/halodental-sonnet-newsletter.demo";
import { productSample } from "./halodental-sonnet-product/halodental-sonnet-product.demo";
import { statementSample } from "./halodental-sonnet-statement/halodental-sonnet-statement.demo";

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <HalodentalSonnetHeader {...headerSample} />
      <HalodentalSonnetHero {...heroSample} />
      <HalodentalSonnetProduct {...productSample} />
      <HalodentalSonnetStatement {...statementSample} />
      <HalodentalSonnetNews {...newsSample} />
      <HalodentalSonnetNewsletter {...newsletterSample} />
      <HalodentalSonnetFooter {...footerSample} />
    </div>
  );
}
