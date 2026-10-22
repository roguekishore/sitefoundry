// Sample content lives here (gallery only); the page reuses it.
import { RampRecommend, type RampRecommendProps } from "./ramp-recommend";

export const recommendSample: RampRecommendProps = {
  title: "Get a plan built",
  titleLine2: "around your books",
  subtitle: "Paste your company's site, then tell us where the money or the time leaks out.",
  prompts: [
    "harborline.example: we run 40 food trucks and receipts go missing every week",
    "ourstudio.example: invoices sit in three inboxes before anyone pays them",
    "We are a 120-person clinic group and month-end takes nine days",
  ],
  fieldLabel: "Your website and what slows your finance team down",
  sendLabel: "Get my plan",
  disclaimer: (
    <>
      By sending this you agree Kestrel may use AI to draft suggestions, as set out in our <a href="#">privacy notice</a>.
    </>
  ),
};

export default function Demo() {
  return <RampRecommend {...recommendSample} />;
}
