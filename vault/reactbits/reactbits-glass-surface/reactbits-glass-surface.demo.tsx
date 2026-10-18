// Rebuilt from React Bits' src/demo/Components/GlassSurfaceDemo.jsx: the component with the props its preview uses.
import GlassSurface from "./GlassSurface"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <GlassSurface width={320} height={76} borderRadius={38} borderWidth={0.07} brightness={50} opacity={0.93} blur={11} displace={0.5} backgroundOpacity={0.1} saturation={1} distortionScale={-180} redOffset={0} greenOffset={10} blueOffset={20} refraction={true} renderer={"auto"}>
        <span className="px-6 py-4 text-2xl font-semibold">React Bits</span>
      </GlassSurface>
    </div>
  )
}
