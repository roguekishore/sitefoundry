// Sample content lives here (gallery only); the page reuses it.
import {
  billingSample,
  cardSample,
  chatShopSample,
  checkoutSample,
  globeSample,
  platformSample,
} from "../stripe-mock/stripe-mock.demo";
import { StripeSolutions, type StripeSolutionsProps } from "./stripe-solutions";

export const solutionsSample: StripeSolutionsProps = {
  title: "One toolkit for every way you earn.",
  rest: "Take payments, bill, lend and move money with pieces that work alone or click together.",
  tiles: [
    { title: "Take payments online and at the counter", href: "/payments", expandLabel: "More on payments", mock: checkoutSample, span: 2, wash: "sunset" },
    { title: "Charge by the seat, the minute or the month", href: "/billing", expandLabel: "More on billing", mock: billingSample, wash: "dawn" },
    { title: "Sell inside AI assistants", href: "/agents", expandLabel: "More on agent commerce", mock: chatShopSample, wash: "blush" },
    { title: "Launch your own branded cards", href: "/cards", expandLabel: "More on cards", mock: cardSample, wash: "pearl" },
    { title: "Send money across borders in minutes", href: "/borders", expandLabel: "More on cross-border", mock: globeSample, wash: "lilac" },
    { title: "Put payments inside your software", href: "/platforms", expandLabel: "More on platforms", mock: platformSample, span: 3, wash: "lilac" },
  ],
};

export default function Demo() {
  return <StripeSolutions {...solutionsSample} />;
}
