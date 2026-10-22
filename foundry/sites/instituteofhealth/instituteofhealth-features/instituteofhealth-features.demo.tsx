// Sample content (gallery only); the page reuses it.
import { InstituteofhealthFeatures, type InstituteofhealthFeaturesProps } from "./instituteofhealth-features";

export const featuresSample: InstituteofhealthFeaturesProps = {
  heading: "Why our certificate stands apart",
  action: { label: "Browse programmes", href: "#" },
  features: [
    {
      tab: "Live Mentoring",
      title: "Small-group mentoring with clinicians who still see clients",
      body: "Bring real cases to weekly calls and leave with a plan, a second opinion and the reasoning behind both.",
    },
    {
      tab: "Peer Network",
      title: "A working community for quick answers and steady support",
      body: "Post a question in the morning and hear back from graduates and faculty before your first client of the day.",
    },
    {
      tab: "Practice Growth",
      title: "Business coaching for a calm, sustainable practice",
      body: "Learn to price, package and fill a practice honestly, with templates and reviews from people who have done it.",
    },
    {
      tab: "Research-Led",
      title: "Every lesson traced back to the published evidence",
      body: "Each module cites its sources and is reviewed every year, so what you learn holds up in front of any client.",
    },
  ],
};

export default function Demo() {
  return <InstituteofhealthFeatures {...featuresSample} />;
}
