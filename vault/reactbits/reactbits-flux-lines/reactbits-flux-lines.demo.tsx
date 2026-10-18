// Rebuilt from React Bits' src/demo/Backgrounds/FluxLinesDemo.jsx: the component with the props its preview uses.
import FluxLines from "./FluxLines"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden dark bg-background">
      <FluxLines colors={["#ffffff","#ffffff","#ffffff"]} speed={0.5} scale={1.6} turbulence={1} fluidity={0.1} rimWidth={0.2} sharpness={2.5} shimmer={1.5} glow={2} lineWidth={1} flowDirection={"down"} mouseStrength={1} mouseRadius={0.35} mouseInteraction={true} clickSwirl={true} intro={true} lightMode={false} />
    </div>
  )
}
