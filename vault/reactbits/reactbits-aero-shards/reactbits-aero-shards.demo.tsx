// Rebuilt from React Bits' src/demo/Backgrounds/AeroShardsDemo.jsx: the component with the props its preview uses.
import AeroShards from "./AeroShards"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <AeroShards shardColor={"#896ABD"} accentColor={"#A855F7"} lightMode={false} placement={"full"} material={"glass"} markers={"plus"} count={1300} shardSize={1} spread={1} twist={1} billow={1} speed={1} scale={1} depthOfField={0.75} glow={0.35} grain={0.06} vignette={0.3} intro={true} mouseInteraction={true} mouseStrength={0.6} parallax={0.5} pulseOnClick={true} holdToGather={true} paused={false} />
    </div>
  )
}
