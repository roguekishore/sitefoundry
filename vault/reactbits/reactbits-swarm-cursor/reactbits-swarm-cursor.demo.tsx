// Rebuilt from React Bits' src/demo/Animations/SwarmCursorDemo.jsx: the component with the props its preview uses.
import SwarmCursor from "./SwarmCursor"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <SwarmCursor shape={"dot"} count={800} size={2.6} spread={90} speed={1} swirl={0.6} tail={0.5} trail={0.6} wander={0.5} depth={0.7} clickEffect={"burst"} idle={"roam"} hideCursor={false} intro={true} enabled={true} color={"#18181b"} accentColor={"#18181b"} lightMode={true}>
        <span className="px-6 py-4 text-2xl font-semibold">React Bits</span>
      </SwarmCursor>
    </div>
  )
}
