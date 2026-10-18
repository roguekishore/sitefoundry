// Rebuilt from React Bits' src/demo/Components/MorphSliderDemo.jsx: the component with the props its preview uses.
import MorphSlider from "./MorphSlider"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <MorphSlider transition={"melt"} overlayColor={"#05060a"} duration={1.1} ease={"power2.inOut"} intensity={0.55} scale={2.4} aberration={0.35} drift={0.4} autoplay={false} autoplayDelay={4} loop={true} radius={16} showCaptions={true} showControls={true} showIndicators={true} items={[{ image: "https://images.unsplash.com/photo-1782977389500-dd7adad33ebe?q=80&w=1600&auto=format&fit=crop", caption: "One" }, { image: "https://images.unsplash.com/photo-1781499455083-6ccc3beb20cd?q=80&w=1600&auto=format&fit=crop", caption: "Two" }, { image: "https://images.unsplash.com/photo-1776394254711-4a0d7345269a?q=80&w=1600&auto=format&fit=crop", caption: "Three" }, { image: "https://images.unsplash.com/photo-1781242629922-6f39cc3671cd?q=80&w=1600&auto=format&fit=crop", caption: "Four" }]} />
    </div>
  )
}
