// Sample content lives here (gallery only); the page reuses it. Channels and platforms are made up.
import { RoveiaServices, type RoveiaServicesProps } from "./roveia-services";

export const servicesSample: RoveiaServicesProps = {
  heading: "What We Run",
  services: [
    { title: "Paid Media", chips: ["Social", "Search", "Video", "Podcast", "Display", "Retail", "Connected TV"], tagline: "Media Buying Built to Grow Without Waste" },
    { title: "Creative Studio", chips: ["Statics", "Motion", "Short video", "Creator content"], tagline: "Review-Safe Ads Made to Be Clicked" },
    { title: "Email & Texts", chips: ["Lifecycle flows", "Campaigns", "Audiences", "Deliverability"], tagline: "Built to Bring Customers Back Again" },
    { title: "Pages & Testing", chips: ["Conversion reviews", "Page builds", "Split tests", "Sprints"], tagline: "Designed to Turn Visits Into Bookings" },
    { title: "Creator Programs", chips: ["Finding & vetting", "Usage rights", "Briefs", "Tracking"], tagline: "Creator Campaigns You Can Measure" },
  ],
};

export default function Demo() {
  return <RoveiaServices {...servicesSample} />;
}
