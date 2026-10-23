import { PlaidStories, type PlaidStoriesProps } from "./plaid-stories";

export const storiesSample: PlaidStoriesProps = {
  title: "What teams build with Halyard",
  linkLabel: "Read the story",
  previousLabel: "Previous stories",
  nextLabel: "Next stories",
  stories: [
    { title: "Ostra halved the time it takes to sign up", href: "#" },
    { title: "Pebblepay lifted card funding by 40%", href: "#" },
    { title: "Harborline approves car loans in minutes", href: "#" },
    { title: "Tidewell tripled savings deposits in a year", href: "#" },
    { title: "Lumen Credit trimmed fraud losses by 62%", href: "#" },
    { title: "Mosaic Loans now checks income instantly", href: "#" },
  ],
};

export default function Demo() {
  return <PlaidStories {...storiesSample} />;
}
