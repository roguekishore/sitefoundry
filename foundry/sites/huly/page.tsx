// The whole Huly recreation, built only from this site's blocks, with each block's demo content.
// Shown in the gallery as "huly — full page". Light is the faithful mode: the dark bands
// (header, hero, code sync, CTA, footer) force themselves dark.
import { HulyBento } from "@foundry/huly-bento";
import { HulyCta } from "@foundry/huly-cta";
import { HulyFooter } from "@foundry/huly-footer";
import { HulyGithub } from "@foundry/huly-github";
import { HulyHeader } from "@foundry/huly-header";
import { HulyHero } from "@foundry/huly-hero";
import { HulyKnowledge } from "@foundry/huly-knowledge";
import { HulyMetabrain } from "@foundry/huly-metabrain";
import { HulyOffice } from "@foundry/huly-office";
import { bentoSample } from "./huly-bento/huly-bento.demo";
import { ctaSample } from "./huly-cta/huly-cta.demo";
import { footerSample } from "./huly-footer/huly-footer.demo";
import { githubSample } from "./huly-github/huly-github.demo";
import { headerSample } from "./huly-header/huly-header.demo";
import { heroSample } from "./huly-hero/huly-hero.demo";
import { knowledgeSample } from "./huly-knowledge/huly-knowledge.demo";
import { metabrainSample } from "./huly-metabrain/huly-metabrain.demo";
import { officeSample } from "./huly-office/huly-office.demo";

export default function Page() {
  return (
    <div className="relative">
      <HulyHeader {...headerSample} />
      <HulyHero {...heroSample} />
      <HulyBento {...bentoSample} />
      <HulyOffice {...officeSample} className="pt-0 lg:pt-0" />
      <HulyGithub {...githubSample} />
      <HulyMetabrain {...metabrainSample} />
      <HulyKnowledge {...knowledgeSample} className="pt-0 lg:pt-0" />
      <HulyCta {...ctaSample} />
      <HulyFooter {...footerSample} />
    </div>
  );
}
