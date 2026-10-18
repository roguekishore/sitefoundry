// Rebuilt from React Bits' src/demo/Animations/GhostCursorDemo.jsx: the component with the props its preview uses.
import GhostCursor from "./GhostCursor"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <GhostCursor theme={"light"} size={80} trailLength={50} inertia={0.5} turbulence={0.5} drift={0.3} detail={1} brightness={1} bloomStrength={0.6} bloomRadius={1} grainIntensity={0.05} edgeIntensity={0} fadeDelayMs={1000} fadeDurationMs={1500} clickPuff={true} intro={true} />
    </div>
  )
}
