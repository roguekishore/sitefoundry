// Rebuilt from React Bits' src/demo/Backgrounds/WebThreadsDemo.jsx: the component with the props its preview uses.
import WebThreads from "./WebThreads"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <WebThreads colors={["#5227FF","#FF9FFC"]} coreColor={"#FFFFFF"} lightMode={false} threadCount={6} speed={0.2} frequency={5} spread={0.18} taper={1} position={0.5} pinch={0.5} nodes={1} angle={0} glow={0.02} falloff={0.6} thickness={1.1} brightness={0.6} opacity={1} depth={0} pulses={0} mirror={true} shimmer={false} fade={0} grain={0.05} intro={true} mouseInteraction={true} mouseStrength={0.5} pulseOnClick={true} paused={false} />
    </div>
  )
}
