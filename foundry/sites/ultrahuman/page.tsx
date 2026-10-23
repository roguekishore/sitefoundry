// The whole Ultrahuman recreation, built only from this site's blocks, with each block's demo
// content (a made-up smart-band maker, Kinrise). Light is the faithful mode.
import { UltrahumanApp } from "@foundry/ultrahuman-app";
import { UltrahumanBattery } from "@foundry/ultrahuman-battery";
import { UltrahumanFooter } from "@foundry/ultrahuman-footer";
import { UltrahumanGlobe } from "@foundry/ultrahuman-globe";
import { UltrahumanHeader } from "@foundry/ultrahuman-header";
import { UltrahumanHero } from "@foundry/ultrahuman-hero";
import { UltrahumanPartners } from "@foundry/ultrahuman-partners";
import { UltrahumanProduct } from "@foundry/ultrahuman-product";
import { UltrahumanPromo } from "@foundry/ultrahuman-promo";
import { UltrahumanScience } from "@foundry/ultrahuman-science";
import { UltrahumanSignals } from "@foundry/ultrahuman-signals";
import { UltrahumanSmoothScroll } from "@foundry/ultrahuman-smooth-scroll";
import { appSample } from "./ultrahuman-app/ultrahuman-app.demo";
import { batterySample } from "./ultrahuman-battery/ultrahuman-battery.demo";
import { footerSample } from "./ultrahuman-footer/ultrahuman-footer.demo";
import { globeSample } from "./ultrahuman-globe/ultrahuman-globe.demo";
import { headerSample } from "./ultrahuman-header/ultrahuman-header.demo";
import { heroSample } from "./ultrahuman-hero/ultrahuman-hero.demo";
import { partnersSample } from "./ultrahuman-partners/ultrahuman-partners.demo";
import { productLiteSample, productMaxSample } from "./ultrahuman-product/ultrahuman-product.demo";
import { promoSample } from "./ultrahuman-promo/ultrahuman-promo.demo";
import { scienceSample } from "./ultrahuman-science/ultrahuman-science.demo";
import { signalsSample } from "./ultrahuman-signals/ultrahuman-signals.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <UltrahumanSmoothScroll />
      <UltrahumanHeader {...headerSample} />
      <UltrahumanPromo {...promoSample} />
      <UltrahumanHero {...heroSample} />
      <UltrahumanScience {...scienceSample} />
      <UltrahumanBattery {...batterySample} />
      <UltrahumanSignals {...signalsSample} />
      <UltrahumanProduct {...productMaxSample} />
      <UltrahumanProduct {...productLiteSample} />
      <UltrahumanApp {...appSample} />
      <UltrahumanGlobe {...globeSample} />
      <UltrahumanPartners {...partnersSample} />
      <UltrahumanFooter {...footerSample} />
    </div>
  );
}
