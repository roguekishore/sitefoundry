// Rebuilt from React Bits' src/demo/TextAnimations/TrueFocusDemo.jsx: the component with the props its preview uses.
import TrueFocus from "./TrueFocus"

export default function Demo() {
  return (
    <div className="relative flex min-h-[400px] w-full items-center justify-center overflow-hidden">
      <TrueFocus sentence={"True Focus"} borderColor={"#5227FF"} highlightColor={"#5227FF"} easing={"smooth"} order={"sequential"} animationDuration={0.5} pauseBetweenAnimations={1} focusStyle={"brackets"} focusScale={1} blurAmount={5} unfocusedOpacity={1} cornerSize={16} borderWidth={3} manualMode={false} />
    </div>
  )
}
