// Rebuilt from React Bits' src/demo/Backgrounds/GrainientDemo.jsx: the component with the props its preview uses.
import Grainient from "./Grainient"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden dark bg-background">
      <Grainient colors={["#120f17","#2a0f0a","#9a3412","#f97316","#fed7aa"]} type={"linear"} angle={55} bands={1} softness={1} flow={0.8} scale={1} speed={1} silk={0.35} grainAmount={0.08} grainSize={1.2} grainAnimated={true} contrast={1} saturation={1} variation={0} interactive={true} stir={1} clickSwirl={true} intro={true} lightMode={false} />
    </div>
  )
}
