// Rebuilt from React Bits' src/demo/Backgrounds/LightfallDemo.jsx: the component with the props its preview uses.
import Lightfall from "./Lightfall"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden dark bg-background">
      <Lightfall colors={["#ffffff"]} backgroundColor={"#94a3b8"} speed={0.3} streakCount={2} streakWidth={0.8} streakLength={1} density={0.6} twinkle={0.3} glow={1} backgroundGlow={0.1} headGlow={0.6} depth={0.5} bloom={0.35} zoom={3} mouseInteraction={true} mouseStrength={0.4} mouseRadius={0.45} lens={0.5} holdToWarp={true} intro={true} fade={0} lightMode={false} />
    </div>
  )
}
