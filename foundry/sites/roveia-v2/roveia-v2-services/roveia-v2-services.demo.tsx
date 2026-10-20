// Sample content lives here (gallery only); the page reuses it.
import { RoveiaV2Services, type RoveiaV2ServicesProps } from "./roveia-v2-services";

export const servicesSample: RoveiaV2ServicesProps = {
  heading: "What We Run",
  services: [
    { title: "Paid Media", chips: ["Social", "Search", "Short video", "Podcasts", "Streaming TV", "Retail ads", "Creator whitelisting"], line: "Spend Planned Across The Whole Funnel, Not One Channel" },
    { title: "Ad Creative", chips: ["Still", "Animated", "Vertical video", "Creator content"], line: "Review-Safe Creative Made To Earn The Click" },
    { title: "Lifecycle Email & Text", chips: ["Onboarding flows", "Campaigns", "Audience splits", "Deliverability"], line: "Kept Customers Who Reorder Without Being Asked" },
    { title: "Pages & Conversion", chips: ["Funnel audits", "Page builds", "Split tests", "Weekly sprints"], line: "Pages That Turn Visits Into Booked Patients" },
    { title: "Creator Programmes", chips: ["Sourcing & vetting", "Usage rights", "Campaign running", "Result tracking"], line: "Creator Reach You Can Measure To The Order" },
  ],
};

export default function Demo() {
  return <RoveiaV2Services {...servicesSample} />;
}
