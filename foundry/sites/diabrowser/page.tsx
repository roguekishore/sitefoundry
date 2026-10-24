// The whole Dia Browser recreation, built only from this site's blocks, with each block's demo
// content (Kite and Paper Kite Co. are made up). The waitlist dock wraps the sections so its
// bar can ride the bottom of the window on desktop; the footer comes after it.
import { DiabrowserFeatures } from "@foundry/diabrowser-features";
import { DiabrowserFooter } from "@foundry/diabrowser-footer";
import { DiabrowserHeader } from "@foundry/diabrowser-header";
import { DiabrowserHero } from "@foundry/diabrowser-hero";
import { DiabrowserPrivacy } from "@foundry/diabrowser-privacy";
import { DiabrowserTour } from "@foundry/diabrowser-tour";
import { DiabrowserWaitlistDock } from "@foundry/diabrowser-waitlist-dock";
import { featuresSample } from "./diabrowser-features/diabrowser-features.demo";
import { footerSample } from "./diabrowser-footer/diabrowser-footer.demo";
import { headerSample } from "./diabrowser-header/diabrowser-header.demo";
import { heroSample } from "./diabrowser-hero/diabrowser-hero.demo";
import { privacySample } from "./diabrowser-privacy/diabrowser-privacy.demo";
import { tourSample } from "./diabrowser-tour/diabrowser-tour.demo";
import { waitlistDockSample } from "./diabrowser-waitlist-dock/diabrowser-waitlist-dock.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <DiabrowserHeader {...headerSample} />
      <main>
        <DiabrowserWaitlistDock {...waitlistDockSample}>
          <DiabrowserHero {...heroSample} docked />
          <DiabrowserTour {...tourSample} />
          <DiabrowserFeatures {...featuresSample} />
          <DiabrowserPrivacy {...privacySample} />
        </DiabrowserWaitlistDock>
      </main>
      <DiabrowserFooter {...footerSample} />
    </div>
  );
}
