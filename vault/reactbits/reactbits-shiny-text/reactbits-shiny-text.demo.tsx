// Rebuilt from React Bits' src/demo/TextAnimations/ShinyTextDemo.jsx: the component with the props its preview uses.
import ShinyText from "./ShinyText"

export default function Demo() {
  return (
    <div className="relative flex min-h-[400px] w-full items-center justify-center overflow-hidden">
      <ShinyText color={"#71717a"} shineColor={"#27272a"} speed={2} delay={0} angle={120} shineWidth={40} softness={0.8} bands={1} glow={0} direction={"left"} easing={"smooth"} trigger={"loop"} yoyo={false} followPointer={false} pauseOnHover={false} disabled={false} text="Shiny Text Effect">
        <span className="px-6 py-4 text-2xl font-semibold">React Bits</span>
      </ShinyText>
    </div>
  )
}
