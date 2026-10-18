// Rebuilt from React Bits' src/demo/Backgrounds/SideRaysDemo.jsx: the component with the props its preview uses.
import SideRays from "./SideRays"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <SideRays rayColor1={"#FFC46B"} rayColor2={"#96c8ff"} blend={0.6} origin={"top-right"} speed={2.5} intensity={2} spread={2} density={5} sharpness={0.5} tilt={0} falloff={1.6} glow={1} saturation={1} dust={0} followMouse={true} mouseInfluence={0.5} intro={true} lightMode={false} opacity={1} />
    </div>
  )
}
