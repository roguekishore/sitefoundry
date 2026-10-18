// Sample content lives here (gallery only); the page reuses it.
import { appsSample, editorSample, qrChatSample } from "../stripe-mock/stripe-mock.demo";
import { StripePaths, type StripePathsProps } from "./stripe-paths";

export const pathsSample: StripePathsProps = {
  title: "Pick your way in.",
  rest: "With an AI assistant, clear docs and built-in debugging, you can start the way that suits your team.",
  paths: [
    {
      mock: qrChatSample,
      lead: "No developers?",
      text: "Send invoices, sell in person or share a payment link straight from the dashboard.",
      link: { label: "Start without code", href: "/no-code" },
    },
    {
      mock: appsSample,
      lead: "Already on a platform?",
      text: "Switch on fernpay inside the shop builders and booking tools you use today.",
      link: { label: "Browse the directory", href: "/directory" },
    },
    {
      mock: editorSample,
      lead: "Build it your way.",
      text: "Our SDKs, APIs and AI coding tools take you from first call to production.",
      link: { label: "Start building", href: "/start" },
    },
  ],
};

export default function Demo() {
  return <StripePaths {...pathsSample} />;
}
