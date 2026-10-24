// Sample content lives here (gallery only); the page reuses it. People and quotes are made up.
import { MymindTestimonials, type MymindTestimonialsProps } from "./mymind-testimonials";

export const testimonialsSample: MymindTestimonialsProps = {
  title: ["Loved by dreamers", "& makers alike."],
  quotes: [
    { name: "Ines R.", text: "Opened nook once and now I can't stop putting things in it." },
    { name: "Tomas K.", text: "Honestly the nicest thing I pay for online. It feels like a desk drawer that tidies itself." },
    { name: "Priya N.", text: "nook deserves far more fans. Easily one of my favourite apps." },
    { name: "Owen L.", text: "Two years in and it's still the app I open most, morning and night." },
    { name: "Mara D.", text: "It really is a room for your head! Drop in anything you like and it lays everything out for you." },
  ],
  link: { label: "Still unsure? Read more", href: "#" },
};

export default function Demo() {
  return <MymindTestimonials {...testimonialsSample} />;
}
