// Rebuilt from React Bits' src/demo/Backgrounds/DotGridDemo.jsx: the component with the props its preview uses.
import DotGrid from "./DotGrid"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden dark bg-background">
      <DotGrid baseColor={"#3a3446"} activeColor={"#ffffff"} shape={"circle"} dotSize={5} gap={18} proximity={140} strength={1} bounce={0.6} tension={0.4} returnDuration={0.8} shockRadius={320} shockStrength={5} swell={0.8} stretch={0.5} glow={0.5} fade={0} opacity={1} mouseInteraction={true} clickShock={true} intro={true} />
    </div>
  )
}
