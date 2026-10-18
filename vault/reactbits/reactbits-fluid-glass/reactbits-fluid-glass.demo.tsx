// Rebuilt from React Bits' src/demo/Components/FluidGlassDemo.jsx: the component with the props its preview uses.
import FluidGlass from "./FluidGlass"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <FluidGlass text={"Look closer."} shape={"torus"} interaction={"follow"} size={260} refraction={1} dispersion={0.35} frost={0} color={"#ffffff"} tint={0} reflection={1} shadow={0.5} elevation={0.4} smoothness={0.5} wobble={0.5} spin={0.3} idle={true} morphOnClick={true} intro={true}>
        <span className="px-6 py-4 text-2xl font-semibold">React Bits</span>
      </FluidGlass>
    </div>
  )
}
