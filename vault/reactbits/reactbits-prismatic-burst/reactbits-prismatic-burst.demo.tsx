// Rebuilt from React Bits' src/demo/Backgrounds/PrismaticBurstDemo.jsx: the component with the props its preview uses.
import PrismaticBurst from "./PrismaticBurst"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <PrismaticBurst animationType={"rotate3d"} intensity={2} speed={0.5} zoom={1} rayWidth={1} rayCount={0} distort={0} twist={0} flow={0} centerFade={1} glow={0} grain={0.8} mouseInteraction={true} mouseStrength={0.5} hoverDampness={0.25} clickBurst={true} intro={true} fade={0} lightMode={false} colors={["#A855F7","#7C3AED","#6366F1"]} />
    </div>
  )
}
