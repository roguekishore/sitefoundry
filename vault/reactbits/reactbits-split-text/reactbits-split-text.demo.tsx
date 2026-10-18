// Rebuilt from React Bits' src/demo/TextAnimations/SplitTextDemo.jsx: the component with the props its preview uses.
import SplitText from "./SplitText"

export default function Demo() {
  return (
    <div className="relative flex min-h-[400px] w-full items-center justify-center overflow-hidden">
      <SplitText text={"Hello, you!"} effect={"rise"} splitType={"chars"} delay={50} duration={1.25} staggerFrom={"start"} trigger={"view"} hoverEffect={"lift"} loop={false} loopDelay={1.5} mask={false} />
    </div>
  )
}
