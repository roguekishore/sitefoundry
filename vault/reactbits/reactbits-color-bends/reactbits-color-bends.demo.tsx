// Rebuilt from React Bits' src/demo/Backgrounds/ColorBendsDemo.jsx: the component with the props its preview uses.
import ColorBends from "./ColorBends"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden dark bg-background">
      <ColorBends rotation={90} autoRotate={0} speed={0.2} scale={1} frequency={1} warpStrength={1} mouseInfluence={1} parallax={0.5} noise={0.15} iterations={1} intensity={1.5} bandWidth={6} colors={["#A855F7"]} />
    </div>
  )
}
