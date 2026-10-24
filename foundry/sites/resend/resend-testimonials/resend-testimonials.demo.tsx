// Sample content (gallery only); the page reuses it. People and companies are made up.
import { ResendTestimonials, type ResendTestimonialsProps } from "./resend-testimonials";

export const testimonialsSample: ResendTestimonialsProps = {
  title: "Teams keep telling us",
  text: [
    "Tern sits behind launch days, password resets and the quiet mail that keeps",
    "products running, for teams of every size and in every kind of business.",
  ],
  items: [
    { quote: "“We moved over from our old provider on a Friday afternoon. Started with the waitlist mail for two apps, and half an hour later the whole switch was done.”", name: "Jonas Ekberg", role: "Co-founder at Driftwood" },
    { quote: "“Sending simply works, which means our engineers spend their week on the product instead of chasing delivery problems.”", name: "Amara Okafor", role: "Platform Lead at Kiteframe" },
    { quote: "“We're a small team juggling a lot. Mail is the thing we least want to think about, and with Tern we don't have to.”", name: "Lucía Ferrer", role: "Operations at Parcelry" },
    { quote: "“Tern feels designed by people who send a lot of mail themselves. The defaults are sensible and the docs answer the question you actually had.”", name: "Daniel Whitcombe", role: "CTO at Larchmont" },
    { quote: "“Our receipts and alerts used to land in spam a few times a week. Since the move we've stopped hearing about it at all.”", name: "Mei Tanaka", role: "Engineering Manager at Northpier" },
    { quote: "“Tools that feel thought through matter to us. Tern is one of them, and it lets the team stay on the product rather than the plumbing.”", name: "Rafael Costa", role: "VP of Engineering at Brightwater" },
  ],
};

export default function Demo() {
  return <ResendTestimonials {...testimonialsSample} />;
}
