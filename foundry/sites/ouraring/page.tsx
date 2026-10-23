// The whole Oura Ring recreation, built only from this site's blocks, with each block's demo
// content (Tessel and its Loop ring are made up). Light is the faithful mode: the press band and
// the footer force themselves dark with the dark class.
import { OuraringFeature } from "@foundry/ouraring-feature";
import { OuraringFooter } from "@foundry/ouraring-footer";
import { OuraringHeader } from "@foundry/ouraring-header";
import { OuraringHero } from "@foundry/ouraring-hero";
import { OuraringIntro } from "@foundry/ouraring-intro";
import { OuraringNews } from "@foundry/ouraring-news";
import { OuraringReel } from "@foundry/ouraring-reel";
import { OuraringStats } from "@foundry/ouraring-stats";
import { OuraringTestimonials } from "@foundry/ouraring-testimonials";
import { featureSample } from "./ouraring-feature/ouraring-feature.demo";
import { footerSample } from "./ouraring-footer/ouraring-footer.demo";
import { headerSample } from "./ouraring-header/ouraring-header.demo";
import { heroSample } from "./ouraring-hero/ouraring-hero.demo";
import { introSample } from "./ouraring-intro/ouraring-intro.demo";
import { newsSample } from "./ouraring-news/ouraring-news.demo";
import { reelSample } from "./ouraring-reel/ouraring-reel.demo";
import { statsSample } from "./ouraring-stats/ouraring-stats.demo";
import { testimonialsSample } from "./ouraring-testimonials/ouraring-testimonials.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <OuraringHeader {...headerSample} />
      <main>
        <OuraringHero {...heroSample} />
        <OuraringIntro {...introSample} />
        <OuraringReel {...reelSample} />
        <OuraringStats {...statsSample} />
        <OuraringTestimonials {...testimonialsSample} />
        <OuraringFeature {...featureSample} />
        <OuraringNews {...newsSample} />
      </main>
      <OuraringFooter {...footerSample} overlap />
    </div>
  );
}
