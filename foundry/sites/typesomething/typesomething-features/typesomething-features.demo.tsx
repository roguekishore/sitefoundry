import { TypesomethingWordmark } from "@foundry/typesomething-wordmark";
import { TypesomethingFeatures, type TypesomethingFeaturesProps } from "./typesomething-features";

export const featuresSample: TypesomethingFeaturesProps = {
  id: "product",
  title: (
    <>
      Everything <TypesomethingWordmark lead="Paper" tail="kite" cursor="" className="tracking-[-0.02em]" /> does
    </>
  ),
  subtitle: "The parts of a website that bring in customers, and none of the parts that eat your evenings.",
  features: [
    { icon: "◆", title: "Edits in minutes, not evenings", text: "No dashboards to dig through. Ask for a change in your own words and it's prepared while you get on with your day." },
    { icon: "●", title: "Near-perfect speed scores", text: "Plain static pages served from the edge open in a blink, so fewer visitors give up and search engines take notice." },
    { icon: "▲", title: "Built from blocks, not themes", text: "Every site is assembled from sections made for it, so yours never looks like the shop next door's." },
    { icon: "■", title: "Found by search and by AI", text: "Clean structure and careful metadata from day one, for local searches and for the assistants people now ask instead." },
    { icon: "→", title: "Paths that lead to a sale", text: "Layouts shaped by how people actually browse, so a first visit turns into a booking, a call or an order." },
    { icon: "★", title: "Clean, standard markup", text: "Accessible, valid HTML and CSS that any developer could pick up tomorrow. No lock-in, no mystery code." },
  ],
};

export default function Demo() {
  return <TypesomethingFeatures {...featuresSample} />;
}
