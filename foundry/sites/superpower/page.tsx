// The Kestrel landing page (recreating superpower.com), built only from this site's blocks with
// their demo content. Light is the faithful mode; the photo bands force themselves dark. The
// original's arrival popup (superpower-offer) is left off the page: it would cover everything.
import { SuperpowerCloser } from "@foundry/superpower-closer";
import { SuperpowerCredentials } from "@foundry/superpower-credentials";
import { SuperpowerDoctors } from "@foundry/superpower-doctors";
import { SuperpowerFooter } from "@foundry/superpower-footer";
import { SuperpowerHeader } from "@foundry/superpower-header";
import { SuperpowerHero } from "@foundry/superpower-hero";
import { SuperpowerIncluded } from "@foundry/superpower-included";
import { SuperpowerMembership } from "@foundry/superpower-membership";
import { SuperpowerSteps } from "@foundry/superpower-steps";
import { SuperpowerStories } from "@foundry/superpower-stories";
import { SuperpowerTour } from "@foundry/superpower-tour";
import { SuperpowerVoices } from "@foundry/superpower-voices";
import { closerSample } from "./superpower-closer/superpower-closer.demo";
import { credentialsSample } from "./superpower-credentials/superpower-credentials.demo";
import { doctorsSample } from "./superpower-doctors/superpower-doctors.demo";
import { footerSample } from "./superpower-footer/superpower-footer.demo";
import { headerSample } from "./superpower-header/superpower-header.demo";
import { heroSample } from "./superpower-hero/superpower-hero.demo";
import { includedSample } from "./superpower-included/superpower-included.demo";
import { membershipSample } from "./superpower-membership/superpower-membership.demo";
import { stepsSample } from "./superpower-steps/superpower-steps.demo";
import { storiesSample } from "./superpower-stories/superpower-stories.demo";
import { tourSample } from "./superpower-tour/superpower-tour.demo";
import { voicesSample } from "./superpower-voices/superpower-voices.demo";

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <SuperpowerHeader {...headerSample} />
      <SuperpowerHero {...heroSample} />
      <SuperpowerCredentials {...credentialsSample} />
      <SuperpowerSteps {...stepsSample} />
      <SuperpowerTour {...tourSample} />
      <SuperpowerIncluded {...includedSample} />
      <SuperpowerDoctors {...doctorsSample} />
      <SuperpowerStories {...storiesSample} />
      <SuperpowerVoices {...voicesSample} />
      <SuperpowerMembership {...membershipSample} />
      <SuperpowerCloser {...closerSample}>
        <SuperpowerFooter {...footerSample} />
      </SuperpowerCloser>
    </div>
  );
}
