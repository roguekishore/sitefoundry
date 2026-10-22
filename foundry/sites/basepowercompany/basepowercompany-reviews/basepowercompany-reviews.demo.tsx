import { BasepowercompanyReviews, type BasepowercompanyReviewsProps } from "./basepowercompany-reviews";

export const reviewsSample: BasepowercompanyReviewsProps = {
  title: "Loved by 22,000+ households across the Gulf and the Plains",
  rating: { score: "4.9 stars", sourceInitial: "R", sourceName: "Rated on Roofline Reviews" },
  link: { label: "Read every review", href: "#reviews" },
  items: [
    {
      kind: "story",
      quote: "“The ice storm took out the whole block for two days. We only found out from the neighbours.”",
      byline: "Dana & Lee R. · Amarillo",
      link: { label: "Read their story", href: "#dana-lee" },
      mediaLabel: "A couple on their back step beside the Hub",
    },
    {
      kind: "review",
      quote: "“Teo and his helper were careful and quick, answered all my questions and left the yard cleaner than they found it. I'm almost hoping for an outage now just to watch it work.”",
      author: "Priya Natarajan",
      sourceInitial: "R",
    },
    {
      kind: "review",
      quote: "“Signed up after the last heat wave. The app shows exactly what the battery is doing and my bill dropped from the first month. Wish we'd done it a summer earlier.”",
      author: "Walt Brennan",
      sourceInitial: "R",
    },
    {
      kind: "story",
      quote: "“I was about to buy the loudest generator in the store. Then a neighbour told me about Porchlight.”",
      byline: "Ruben O. · Corpus Christi",
      link: { label: "Read Ruben's story", href: "#ruben" },
      mediaLabel: "A man sitting by the Hub in a brick-walled yard",
    },
    {
      kind: "review",
      quote: "“Straight answers, no pushy sales. They checked our panel from a few photos and the install took one morning. Five stars from a sceptic.”",
      author: "M. Okafor",
      sourceInitial: "R",
    },
    {
      kind: "review",
      quote: "“Our old provider wanted a four-year contract at the same price. Porchlight beat it on the rate and threw in the backup. Easy call.”",
      author: "Hal & June",
      sourceInitial: "R",
    },
  ],
};

export default function Demo() {
  return <BasepowercompanyReviews {...reviewsSample} />;
}
