import type { K2spaceSliderProps } from "./k2space-slider";
import { K2spaceSlider } from "./k2space-slider";

export const sliderSample: K2spaceSliderProps = {
  title: "Made on our own floor",
  previousLabel: "Previous slide",
  nextLabel: "Next slide",
  slides: [
    {
      title: "Workshop",
      body: "Nine in ten parts are cut, wound and bonded under one roof, so a fix on Monday is flight hardware by Friday.",
    },
    {
      title: "Stacking",
      body: "Six heavy buses nest inside one fairing, putting 120 kW of power on orbit for every launch we buy.",
    },
    {
      title: "Proving",
      body: "Every frame is shaken, baked and frozen in our own chambers before it ever sees a launch pad.",
    },
    {
      title: "Mission control",
      body: "One team flies what it builds, watching every bus from first light to its last manoeuvre.",
    },
  ],
};

export default function Demo() {
  return (
    <div className="bg-background py-24">
      <K2spaceSlider {...sliderSample} />
    </div>
  );
}
