// Rebuilt from React Bits' src/demo/TextAnimations/BlurTextDemo.jsx: the component with the props its preview uses.
import BlurText from "./BlurText"

export default function Demo() {
  return (
    <div className="relative flex min-h-[400px] w-full items-center justify-center overflow-hidden">
      <BlurText text={"Isn't this so cool?!"} effect={"blur"} animateBy={"words"} direction={"top"} staggerFrom={"start"} trigger={"view"} delay={200} stepDuration={0.35} loop={false} loopDelay={2} blur={10} distance={50} focusOnHover={false} />
    </div>
  )
}
