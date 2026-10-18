// Rebuilt from React Bits' src/demo/TextAnimations/ShuffleDemo.jsx: the component with the props its preview uses.
import Shuffle from "./Shuffle"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <Shuffle text="REACT BITS" effect={"slide"} shuffleDirection={"right"} animationMode={"evenodd"} ease={"power3.out"} duration={0.35} shuffleTimes={1} stagger={0.03} maxDelay={0} scrambleCharset={""} motionBlur={false} hoverRadius={0} loop={false} loopDelay={0} triggerOnHover={true} />
    </div>
  )
}
