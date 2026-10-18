// Rebuilt from React Bits' src/demo/Animations/CursorGridDemo.jsx: the component with the props its preview uses.
import CursorGrid from "./CursorGrid"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <CursorGrid highlight={"area"} gridStyle={"lines"} falloff={"smooth"} cellSize={60} radius={140} holdTime={400} fadeDuration={800} lineWidth={1} maxOpacity={1} fillOpacity={0.06} gridOpacity={0.08} spotlight={0.6} cellGap={0} cellRadius={0} pulseSpeed={600} ambient={0} edgeFade={0.2} clickPulse={true} intro={true} color={"#18181b"} gridColor={"#18181b"} lightMode={true}>
        <span className="px-6 py-4 text-2xl font-semibold">React Bits</span>
      </CursorGrid>
    </div>
  )
}
