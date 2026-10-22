// Sample content (gallery only); the page reuses it.
import { InstituteofhealthCourses, type InstituteofhealthCoursesProps } from "./instituteofhealth-courses";

export const coursesSample: InstituteofhealthCoursesProps = {
  title: "Rigorous, research-led training that spans the whole range of conditions you will meet in clinic.",
  action: { label: "Every programme", href: "#" },
  overviewLabel: "At a glance",
  exploreLabel: "View programme",
  unitsLabel: "Lessons",
  courses: [
    { title: "Hydration & Electrolytes", category: "Masterclass", units: 18, overview: "Work out fluid and electrolyte needs for training, heat and illness, and turn them into simple daily routines clients keep.", href: "#" },
    { title: "Reading Lab Panels", category: "Masterclass", units: 112, overview: "Interpret full blood panels against optimal ranges, spot the patterns that matter and decide what to test next.", href: "#" },
    { title: "Immune Resilience", category: "Masterclass", units: 31, overview: "Build a step-by-step method for tracing immune flare triggers and shaping calm, long-term nutrition plans around them.", href: "#" },
    { title: "Hormone Health", category: "Masterclass", units: 57, overview: "Follow the hormonal arc from first cycle to menopause and translate symptoms and labs into food-first protocols.", href: "#" },
    { title: "Gut Repair", category: "Masterclass", units: 44, overview: "Assess digestion from the top down and plan staged support for absorption, the microbiome and the gut lining.", href: "#" },
    { title: "Stress Physiology", category: "Masterclass", units: 26, overview: "Recognise how chronic stress reshapes sleep, energy and recovery, and coach clients back to steadier daily rhythms.", href: "#" },
    { title: "Thyroid Function", category: "Masterclass", units: 22, overview: "Tell apart the common thyroid pictures on paper and in person, and know which nutrients and habits move the needle.", href: "#" },
    { title: "Practice Foundations", category: "Masterclass", units: 15, overview: "Design programmes, intake forms and follow-ups that make every client journey clear, measured and repeatable.", href: "#" },
  ],
};

export default function Demo() {
  return <InstituteofhealthCourses {...coursesSample} />;
}
