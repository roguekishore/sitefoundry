// Rebuilt from React Bits' src/demo/Animations/ElectricLogoDemo.jsx: the component with the props its preview uses.
import ElectricLogo from "./ElectricLogo"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <ElectricLogo scale={0.7} intensity={1} glow={1} thickness={1.5} strands={4} bend={0.5} crackle={1.5} arcs={1} flicker={0.6} fill={0} speed={2.5} interactive={true} cursorIntensity={0.75} cursorRadius={100} theme={"light"} />
    </div>
  )
}
