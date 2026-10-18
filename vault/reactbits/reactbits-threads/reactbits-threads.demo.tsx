// Rebuilt from React Bits' src/demo/Backgrounds/ThreadsDemo.jsx: the component with the props its preview uses.
import Threads from "./Threads"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden dark bg-background">
      <Threads color={"#ffffff"} parting={0} enableMouseInteraction={true} fade={0} opacity={1} seed={0} lineCount={90} thickness={0.6} softness={1.3} amplitude={1.7} distance={0.4} waves={1.05} speed={0.6} split={0.04} fray={0.5} angle={25} taper={0.85} brightness={1.4} />
    </div>
  )
}
