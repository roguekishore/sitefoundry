import { StoreyarchitectureTestimonial, type StoreyarchitectureTestimonialProps } from "./storeyarchitecture-testimonial";

export const testimonialSample: StoreyarchitectureTestimonialProps = {
  slides: [
    { quote: "They took a muddled list of wishes and gave it back to us as one clear, calm house we never want to leave.", name: "Imogen Hale", company: "Hale Farmhouse" },
    { quote: "Every drawing came with a reason. By the time the builders arrived, nothing about the house felt like a gamble.", name: "Tom Ashworth", company: "Ashworth & Daughters" },
    { quote: "The rooms are simple, but every morning the light lands exactly where they said it would.", name: "Priya Sandhu", company: "Orchard Lodge" },
    { quote: "Patient, exact and good company: the build was the easiest part of the whole move.", name: "Callum Reid", company: "Reid Partnership" },
    { quote: "It looks as if it has always stood there, which is precisely what we hoped for.", name: "Ruth Penhale", company: "Penhale Mill" },
  ],
  paragraphs: [
    "We work at one table with our clients, engineers and makers, so each house is settled in detail long before the first trench is dug.",
    "We keep the process plain: clear drawings, honest costs and decisions that hold up for the people who will live with them.",
  ],
  slideLabel: "Show client",
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <StoreyarchitectureTestimonial {...testimonialSample} />
    </div>
  );
}
