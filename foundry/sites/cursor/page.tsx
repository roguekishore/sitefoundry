// The whole Cursor recreation (as "Fernwork", a made-up coding agent), built only from this
// site's blocks with each block's demo content. Light is the faithful mode.
import { CursorChangelog } from "@foundry/cursor-changelog";
import { CursorCta } from "@foundry/cursor-cta";
import { CursorFeatures } from "@foundry/cursor-features";
import { CursorFooter } from "@foundry/cursor-footer";
import { CursorFrontier } from "@foundry/cursor-frontier";
import { CursorHeader } from "@foundry/cursor-header";
import { CursorHero } from "@foundry/cursor-hero";
import { CursorHighlights } from "@foundry/cursor-highlights";
import { CursorLogos } from "@foundry/cursor-logos";
import { CursorResearch } from "@foundry/cursor-research";
import { CursorTestimonials } from "@foundry/cursor-testimonials";
import { changelogSample } from "./cursor-changelog/cursor-changelog.demo";
import { ctaSample } from "./cursor-cta/cursor-cta.demo";
import { featuresSample } from "./cursor-features/cursor-features.demo";
import { footerSample } from "./cursor-footer/cursor-footer.demo";
import { frontierSample } from "./cursor-frontier/cursor-frontier.demo";
import { headerSample } from "./cursor-header/cursor-header.demo";
import { heroSample } from "./cursor-hero/cursor-hero.demo";
import { highlightsSample } from "./cursor-highlights/cursor-highlights.demo";
import { logosSample } from "./cursor-logos/cursor-logos.demo";
import { researchSample } from "./cursor-research/cursor-research.demo";
import { testimonialsSample } from "./cursor-testimonials/cursor-testimonials.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <CursorHeader {...headerSample} />
      <main>
        <CursorHero {...heroSample} />
        <CursorLogos {...logosSample} />
        <CursorFeatures {...featuresSample} />
        <CursorTestimonials {...testimonialsSample} />
        <CursorFrontier {...frontierSample} />
        <CursorChangelog {...changelogSample} />
        <CursorResearch {...researchSample} />
        <CursorHighlights {...highlightsSample} />
        <CursorCta {...ctaSample} />
      </main>
      <CursorFooter {...footerSample} />
    </div>
  );
}
