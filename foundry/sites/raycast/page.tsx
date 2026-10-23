// The whole Raycast recreation, built only from this site's blocks, with each block's demo
// content (Tessel, its people and every name in it are made up). Dark is the faithful mode.
import { RaycastAiAgent } from "@foundry/raycast-ai-agent";
import { RaycastCommunity } from "@foundry/raycast-community";
import { RaycastCta } from "@foundry/raycast-cta";
import { RaycastDevelopers } from "@foundry/raycast-developers";
import { RaycastExtensions } from "@foundry/raycast-extensions";
import { RaycastFooter } from "@foundry/raycast-footer";
import { RaycastHeader } from "@foundry/raycast-header";
import { RaycastHero } from "@foundry/raycast-hero";
import { RaycastKeyFeatures } from "@foundry/raycast-key-features";
import { RaycastNotes } from "@foundry/raycast-notes";
import { RaycastShowcase } from "@foundry/raycast-showcase";
import { RaycastSnippets } from "@foundry/raycast-snippets";
import { RaycastTestimonials } from "@foundry/raycast-testimonials";
import { aiAgentSample } from "./raycast-ai-agent/raycast-ai-agent.demo";
import { communitySample } from "./raycast-community/raycast-community.demo";
import { ctaSample } from "./raycast-cta/raycast-cta.demo";
import { developersSample } from "./raycast-developers/raycast-developers.demo";
import { extensionsSample } from "./raycast-extensions/raycast-extensions.demo";
import { footerSample } from "./raycast-footer/raycast-footer.demo";
import { headerSample } from "./raycast-header/raycast-header.demo";
import { heroSample } from "./raycast-hero/raycast-hero.demo";
import { keyFeaturesSample } from "./raycast-key-features/raycast-key-features.demo";
import { notesSample } from "./raycast-notes/raycast-notes.demo";
import { showcaseSample } from "./raycast-showcase/raycast-showcase.demo";
import { snippetsSample } from "./raycast-snippets/raycast-snippets.demo";
import { testimonialsSample } from "./raycast-testimonials/raycast-testimonials.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <RaycastHeader {...headerSample} />
      <main>
        <RaycastHero {...heroSample} />
        <RaycastShowcase {...showcaseSample} />
        <RaycastKeyFeatures {...keyFeaturesSample} />
        <RaycastExtensions {...extensionsSample} />
        <RaycastAiAgent {...aiAgentSample} />
        <RaycastTestimonials {...testimonialsSample} />
        <RaycastSnippets {...snippetsSample} />
        <RaycastNotes {...notesSample} />
        <RaycastCommunity {...communitySample} />
        <RaycastDevelopers {...developersSample} />
        <RaycastCta {...ctaSample} />
      </main>
      <RaycastFooter {...footerSample} />
    </div>
  );
}
