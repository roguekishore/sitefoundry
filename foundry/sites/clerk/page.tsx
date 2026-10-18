// The whole Clerk recreation, built only from this site's blocks, with each block's demo content.
// Shown in the gallery as "clerk — full page". Light is the faithful mode: the two notched
// bands (sign-in features, SDKs) force themselves dark, and the header goes dark over them.
import { ClerkBilling } from "@foundry/clerk-billing";
import { ClerkFeatures } from "@foundry/clerk-features";
import { ClerkFooter } from "@foundry/clerk-footer";
import { ClerkFrameworks } from "@foundry/clerk-frameworks";
import { ClerkHeader } from "@foundry/clerk-header";
import { ClerkHero } from "@foundry/clerk-hero";
import { ClerkLogos } from "@foundry/clerk-logos";
import { ClerkTestimonials } from "@foundry/clerk-testimonials";
import { billingSample } from "./clerk-billing/clerk-billing.demo";
import { signInFeatures, teamFeatures } from "./clerk-features/clerk-features.demo";
import { footerSample } from "./clerk-footer/clerk-footer.demo";
import { frameworksSample } from "./clerk-frameworks/clerk-frameworks.demo";
import { headerSample } from "./clerk-header/clerk-header.demo";
import { heroSample } from "./clerk-hero/clerk-hero.demo";
import { logosSample } from "./clerk-logos/clerk-logos.demo";
import { testimonialsSample } from "./clerk-testimonials/clerk-testimonials.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <ClerkHeader {...headerSample} />
      <ClerkHero {...heroSample} />
      <ClerkLogos {...logosSample} />
      <ClerkFeatures {...signInFeatures} />
      <ClerkFeatures {...teamFeatures} />
      <ClerkBilling {...billingSample} className="pt-[calc(var(--section-y)*0.4)] lg:pt-0" />
      <ClerkFrameworks {...frameworksSample} />
      <ClerkTestimonials {...testimonialsSample} />
      <ClerkFooter {...footerSample} />
    </div>
  );
}
