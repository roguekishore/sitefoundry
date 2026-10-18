// Rebuilt from React Bits' src/demo/Backgrounds/AuroraDemo.jsx: the component with the props its preview uses.
import Aurora from "./Aurora"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <Aurora colorStops={["#5227FF","#7cff67","#5227FF"]} amplitude={1} blend={0.5} height={0.45} speed={1} scale={1} glow={0.6} brightness={1} layers={1} direction={"top"} opacity={1} mouseInteraction={true} intro={true} lightMode={false} />
    </div>
  )
}
