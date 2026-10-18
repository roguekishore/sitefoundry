// Rebuilt from React Bits' src/demo/TextAnimations/GradientTextDemo.jsx: the component with the props its preview uses.
import GradientText from "./GradientText"

export default function Demo() {
  return (
    <div className="relative flex min-h-[400px] w-full items-center justify-center overflow-hidden">
      <GradientText colors={["#5227FF","#FF9FFC","#B497CF"]} animationSpeed={8} variant={"linear"} angle={90} scale={3} yoyo={true} glow={0} showBorder={false} borderWidth={1.5} pauseOnHover={false} followPointer={false}>
      {"Gradient Magic"}
      </GradientText>
    </div>
  )
}
