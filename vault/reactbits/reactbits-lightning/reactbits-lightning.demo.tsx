// Rebuilt from React Bits' src/demo/Backgrounds/LightningDemo.jsx: the component with the props its preview uses.
import Lightning from "./Lightning"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden dark bg-background">
      <Lightning color={"#4d6bff"} bolts={1} spread={0.6} branches={0.5} xOffset={0} angle={0} size={1} thickness={1} glow={1} intensity={1} speed={1} flicker={0.6} fade={0} opacity={1} mouseInteraction={true} mouseStrength={1} clickStrike={true} intro={true} lightMode={false} />
    </div>
  )
}
