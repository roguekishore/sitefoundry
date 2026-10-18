// Rebuilt from React Bits' src/demo/Backgrounds/GhostFibersDemo.jsx: the component with the props its preview uses.
import GhostFibers from "./GhostFibers"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden dark bg-background">
      <GhostFibers glowColor={"#8b5cf6"} lineColor={"#dfd1fc"} secondaryColor={"#6f4ac5"} gradient={"depth"} layers={3} waves={1} twist={1.2} volume={0.7} spread={1} scale={1} rotation={18} perspective={0.65} threads={72} density={1} thickness={1} fiberStyle={"dots"} tips={0} foldGlow={1} speed={0.5} flow={0.4} rollSpeed={0.15} depthOfField={0.85} focusDepth={0} particles={0.5} sparkle={0.5} glow={0.8} brightness={1} vignette={0.3} grain={0.06} mouseInteraction={true} hoverEffect={"focus"} mouseStrength={1} pulseOnClick={true} intro={true} lightMode={false} />
    </div>
  )
}
