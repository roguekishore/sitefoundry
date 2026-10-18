// Rebuilt from React Bits' src/demo/Components/SpotlightCardDemo.jsx: the component with the props its preview uses.
import SpotlightCard from "./SpotlightCard"

export default function Demo() {
  return (
    <div className="relative flex min-h-[480px] w-full items-center justify-center overflow-hidden">
      <SpotlightCard intensity={0.15} spotlightSize={240} softness={0.7} shape={"circle"} borderGlow={0.6} proximity={80} smoothing={0.3} grain={0} ambient={false} flare={true} theme={"light"} />
    </div>
  )
}
