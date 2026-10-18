// Rebuilt from React Bits' src/demo/Components/BorderGlowDemo.jsx: the component with the props its preview uses.
import BorderGlow from "./BorderGlow"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <BorderGlow edgeSensitivity={30} glowColor={"278 90 58"} backgroundColor={"#ffffff"} borderRadius={28} glowRadius={40} glowIntensity={1.25} coneSpread={25} animated={false} fillOpacity={0.22} colors={["#c084fc","#f472b6","#38bdf8"]}>
        <span className="px-6 py-4 text-2xl font-semibold">React Bits</span>
      </BorderGlow>
    </div>
  )
}
