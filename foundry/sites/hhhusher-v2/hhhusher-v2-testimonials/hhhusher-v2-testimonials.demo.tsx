import { HhhusherV2Testimonials, type HhhusherV2TestimonialsProps } from "./hhhusher-v2-testimonials";

export const testimonialsSample: HhhusherV2TestimonialsProps = {
  heading: "Real Kits.\nReal Sessions.",
  reviews: [
    { quote: "Every drummer who records should own one. It's the cheapest upgrade I've made to my snare sound in ten years. Get one before they run out!", name: "Marisol Q." },
    { quote: "As an engineer it has rescued more than one session with a heavy-handed drummer, and as a drummer it keeps my snare track tight and clean. Brilliant little thing.", name: "Desmond Achterberg" },
  ],
};

export default function Demo() {
  return <HhhusherV2Testimonials {...testimonialsSample} />;
}
