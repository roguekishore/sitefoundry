import { ArrowRight, Circle, Diamond, Square, Star, Triangle } from "lucide-react";
import { TypesomethingV2Wordmark } from "@foundry/typesomething-v2-wordmark";
import type { TypesomethingV2FeaturesProps } from "./typesomething-v2-features";
import { TypesomethingV2Features } from "./typesomething-v2-features";

export const featuresSample: TypesomethingV2FeaturesProps = {
  id: "features",
  title: (
    <>
      Inside <TypesomethingV2Wordmark lead="Quiet" tail="page" />
    </>
  ),
  subtitle: "Only the parts of a website that bring in customers. Nothing you have to look after.",
  features: [
    {
      icon: <Diamond fill="currentColor" />,
      title: "Edits in minutes, not evenings",
      text: "No menus to dig through. Write what you want changed in everyday words and it is drafted, checked and ready to publish before your coffee cools.",
    },
    {
      icon: <Circle fill="currentColor" />,
      title: "Top marks on page speed",
      text: "Pages are built ahead of time and served from the edge, so they open at once. Fewer visitors leave, and search engines notice.",
    },
    {
      icon: <Triangle fill="currentColor" />,
      title: "Made for you, not from a kit",
      text: "Every site is assembled from flexible, hand-made sections rather than a stock theme, so yours looks like your business and stays that way.",
    },
    {
      icon: <Square fill="currentColor" />,
      title: "Found locally and further out",
      text: "Clean structure from the first page: titles, maps and descriptions set up so nearby customers and far-away ones both find you.",
    },
    {
      icon: <ArrowRight />,
      title: "Paths that lead somewhere",
      text: "Navigation, buttons and forms follow patterns visitors already know, steering them from the first look to the booking or the basket.",
    },
    {
      icon: <Star fill="currentColor" />,
      title: "Standards-clean markup",
      text: "Tidy, accessible HTML and CSS that passes the validators, reads well to screen readers and keeps working for years.",
    },
  ],
};

export default function Demo() {
  return <TypesomethingV2Features {...featuresSample} />;
}
