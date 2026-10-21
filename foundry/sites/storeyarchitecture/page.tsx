// The Ashlar landing page (recreating storeyarchitecture.co.uk), built only from this site's
// blocks with their demo content. Light is the faithful mode. The header is fixed and its
// wordmark and links invert against whatever passes under them; Lenis smooths the wheel, as
// on the original.
import { StoreyarchitectureContact } from "@foundry/storeyarchitecture-contact";
import { StoreyarchitectureExpertise } from "@foundry/storeyarchitecture-expertise";
import { StoreyarchitectureFooter } from "@foundry/storeyarchitecture-footer";
import { StoreyarchitectureHeader } from "@foundry/storeyarchitecture-header";
import { StoreyarchitectureHero } from "@foundry/storeyarchitecture-hero";
import { StoreyarchitectureIntro } from "@foundry/storeyarchitecture-intro";
import { StoreyarchitectureJournal } from "@foundry/storeyarchitecture-journal";
import { StoreyarchitectureProjects } from "@foundry/storeyarchitecture-projects";
import { StoreyarchitectureSmoothScroll } from "@foundry/storeyarchitecture-smooth-scroll";
import { StoreyarchitectureStudio } from "@foundry/storeyarchitecture-studio";
import { StoreyarchitectureTestimonial } from "@foundry/storeyarchitecture-testimonial";
import { contactSample } from "./storeyarchitecture-contact/storeyarchitecture-contact.demo";
import { expertiseSample } from "./storeyarchitecture-expertise/storeyarchitecture-expertise.demo";
import { footerSample } from "./storeyarchitecture-footer/storeyarchitecture-footer.demo";
import { headerSample } from "./storeyarchitecture-header/storeyarchitecture-header.demo";
import { heroSample } from "./storeyarchitecture-hero/storeyarchitecture-hero.demo";
import { introSample } from "./storeyarchitecture-intro/storeyarchitecture-intro.demo";
import { journalSample } from "./storeyarchitecture-journal/storeyarchitecture-journal.demo";
import { projectsSample } from "./storeyarchitecture-projects/storeyarchitecture-projects.demo";
import { studioSample } from "./storeyarchitecture-studio/storeyarchitecture-studio.demo";
import { testimonialSample } from "./storeyarchitecture-testimonial/storeyarchitecture-testimonial.demo";

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <StoreyarchitectureSmoothScroll />
      <StoreyarchitectureHeader {...headerSample} />
      <StoreyarchitectureHero {...heroSample} />
      <StoreyarchitectureIntro {...introSample} />
      <StoreyarchitectureExpertise {...expertiseSample} />
      <StoreyarchitectureStudio {...studioSample} />
      <StoreyarchitectureProjects {...projectsSample} />
      <StoreyarchitectureTestimonial {...testimonialSample} />
      <StoreyarchitectureJournal {...journalSample} />
      <StoreyarchitectureContact {...contactSample} />
      <StoreyarchitectureFooter {...footerSample} />
    </div>
  );
}
