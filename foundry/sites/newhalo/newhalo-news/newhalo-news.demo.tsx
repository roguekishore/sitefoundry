import { NewhaloNews, type NewhaloNewsProps } from "./newhalo-news";

export const newsSample: NewhaloNewsProps = {
  title: "In the press",
  cta: { label: "Press kit", href: "#media-room" },
  moreLabel: "Load more",
  items: [
    {
      title: "A lit, camera-carrying mirror built in Lyon",
      excerpt: "The four-year-old company has built a mirror that lights the mouth, records what it sees and lets patients follow along on a tablet in the chair.",
      href: "#1",
      linkLabel: "Read the article in The Chairside",
    },
    {
      title: "Lumora: the mirror, reconsidered",
      excerpt: "A century-old instrument gets a sensor, a ring of light and a wireless link, and becomes the dentist's most useful screen.",
      href: "#2",
      linkLabel: "Read the article in Northern Ledger",
    },
    {
      title: "Lumora takes the Formfield design prize for its smart mirror",
      excerpt: "The jury praised the instrument's balance, its heated glass and how quietly it fits into an existing practice.",
      href: "#3",
      linkLabel: "Read the article in Formfield Weekly",
    },
    {
      title: "Why the dental visit is ready for new tools",
      excerpt: "A look at the small companies modernising the operatory, from scheduling to the instruments themselves.",
      href: "#4",
      linkLabel: "Read the article in Clinic Review",
    },
    {
      title: "Lumora opens its first pilot clinics",
      excerpt: "Twelve practices across three countries will use the mirror daily and feed back on everything from grip to battery life.",
      href: "#5",
      linkLabel: "Read the article in The Chairside",
    },
  ],
};

export default function Demo() {
  return <NewhaloNews {...newsSample} />;
}
