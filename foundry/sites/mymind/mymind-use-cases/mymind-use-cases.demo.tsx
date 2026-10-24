// Sample content lives here (gallery only); the page reuses it. All copy is ours.
import { MymindUseCases, type MymindUseCasesProps } from "./mymind-use-cases";

export const useCasesSample: MymindUseCasesProps = {
  eyebrow: "Who it's for",
  title: "For curious minds of every sort.",
  cases: [
    { label: "Makers", eyebrow: "Built for makers", title: "Pin up endless, effortless", italic: "reference walls.", tone: "teal" },
    { label: "Authors", eyebrow: "Built for authors", title: "Keep every scrap of a story", italic: "within reach.", tone: "beige" },
    { label: "Sellers", eyebrow: "Built for sellers", title: "Gather the campaigns", italic: "you wish you'd made.", tone: "peach" },
    { label: "Scholars", eyebrow: "Built for scholars", title: "Hold your sources", italic: "and your hunches together.", tone: "blue" },
    { label: "Coders", eyebrow: "Built for coders", title: "Stash snippets, docs", italic: "and late-night fixes.", tone: "grey" },
    { label: "Anyone", eyebrow: "Built for anyone", title: "A home for the things", italic: "you mean to come back to.", tone: "rose" },
  ],
  labels: { previous: "Previous audience", next: "Next audience", play: "Watch the makers' film" },
  playHref: "#",
};

export default function Demo() {
  return <MymindUseCases {...useCasesSample} />;
}
