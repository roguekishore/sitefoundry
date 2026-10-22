// The whole Institute of Health recreation, built only from this site's blocks, with each
// block's demo content (Calder Academy is made up). Light is the faithful mode.
// The hero is pinned (sticky): everything after it sits in a `relative z-10` layer so the
// course band slides up over it, as in the original.
import { InstituteofhealthAbout } from "@foundry/instituteofhealth-about";
import { InstituteofhealthCourses } from "@foundry/instituteofhealth-courses";
import { InstituteofhealthCta } from "@foundry/instituteofhealth-cta";
import { InstituteofhealthFaq } from "@foundry/instituteofhealth-faq";
import { InstituteofhealthFeatures } from "@foundry/instituteofhealth-features";
import { InstituteofhealthFooter } from "@foundry/instituteofhealth-footer";
import { InstituteofhealthHeader } from "@foundry/instituteofhealth-header";
import { InstituteofhealthHero } from "@foundry/instituteofhealth-hero";
import { InstituteofhealthStory } from "@foundry/instituteofhealth-story";
import { InstituteofhealthTestimonials } from "@foundry/instituteofhealth-testimonials";
import { aboutSample } from "./instituteofhealth-about/instituteofhealth-about.demo";
import { coursesSample } from "./instituteofhealth-courses/instituteofhealth-courses.demo";
import { ctaSample } from "./instituteofhealth-cta/instituteofhealth-cta.demo";
import { faqSample } from "./instituteofhealth-faq/instituteofhealth-faq.demo";
import { featuresSample } from "./instituteofhealth-features/instituteofhealth-features.demo";
import { footerSample } from "./instituteofhealth-footer/instituteofhealth-footer.demo";
import { headerSample } from "./instituteofhealth-header/instituteofhealth-header.demo";
import { heroSample } from "./instituteofhealth-hero/instituteofhealth-hero.demo";
import { storySample } from "./instituteofhealth-story/instituteofhealth-story.demo";
import { testimonialsSample } from "./instituteofhealth-testimonials/instituteofhealth-testimonials.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <InstituteofhealthHeader {...headerSample} />
      <InstituteofhealthHero {...heroSample} />
      <div className="relative z-10">
        <InstituteofhealthCourses {...coursesSample} />
        <InstituteofhealthFeatures {...featuresSample} />
        <InstituteofhealthStory {...storySample} />
        <InstituteofhealthAbout {...aboutSample} />
        <InstituteofhealthTestimonials {...testimonialsSample} />
        <InstituteofhealthFaq {...faqSample} />
        <InstituteofhealthCta {...ctaSample} />
        <InstituteofhealthFooter {...footerSample} />
      </div>
    </div>
  );
}
