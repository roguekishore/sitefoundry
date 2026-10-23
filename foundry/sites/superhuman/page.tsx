// The whole Wayfinder landing page (a made-up company), built only from this site's blocks,
// with each block's demo content. Light is the faithful mode.
import { SuperhumanBanner } from "@foundry/superhuman-banner";
import { SuperhumanCta } from "@foundry/superhuman-cta";
import { SuperhumanEnterprise } from "@foundry/superhuman-enterprise";
import { SuperhumanFooter } from "@foundry/superhuman-footer";
import { SuperhumanHeader } from "@foundry/superhuman-header";
import { SuperhumanHero } from "@foundry/superhuman-hero";
import { SuperhumanLogos } from "@foundry/superhuman-logos";
import { SuperhumanPages } from "@foundry/superhuman-pages";
import { SuperhumanPilot } from "@foundry/superhuman-pilot";
import { SuperhumanPost } from "@foundry/superhuman-post";
import { SuperhumanQuote } from "@foundry/superhuman-quote";
import { bannerSample } from "./superhuman-banner/superhuman-banner.demo";
import { ctaSample } from "./superhuman-cta/superhuman-cta.demo";
import { enterpriseSample } from "./superhuman-enterprise/superhuman-enterprise.demo";
import { footerSample } from "./superhuman-footer/superhuman-footer.demo";
import { headerSample } from "./superhuman-header/superhuman-header.demo";
import { heroSample } from "./superhuman-hero/superhuman-hero.demo";
import { logosSample } from "./superhuman-logos/superhuman-logos.demo";
import { pagesSample } from "./superhuman-pages/superhuman-pages.demo";
import { pilotSample } from "./superhuman-pilot/superhuman-pilot.demo";
import { postSample } from "./superhuman-post/superhuman-post.demo";
import { quoteSample } from "./superhuman-quote/superhuman-quote.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <SuperhumanHeader {...headerSample} />
      <SuperhumanBanner {...bannerSample} />
      <main>
        <SuperhumanHero {...heroSample} />
        <SuperhumanLogos {...logosSample} />
        <SuperhumanPilot {...pilotSample} />
        <SuperhumanQuote {...quoteSample} />
        <SuperhumanPost {...postSample} />
        <SuperhumanPages {...pagesSample} />
        <SuperhumanEnterprise {...enterpriseSample} />
        <SuperhumanCta {...ctaSample} />
      </main>
      <SuperhumanFooter {...footerSample} />
    </div>
  );
}
