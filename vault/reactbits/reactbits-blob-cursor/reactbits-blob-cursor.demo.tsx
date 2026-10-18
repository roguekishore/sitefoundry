// Rebuilt from React Bits' src/demo/Animations/BlobCursorDemo.jsx: the component with the props its preview uses.
import BlobCursor from "./BlobCursor"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <BlobCursor material={"chrome"} color={"#3B82F6"} blend={"normal"} size={140} morph={0} morphSpeed={0.4} depth={1} trail={16} lag={0.55} goo={1} stretch={0.6} wobble={1} drip={0} shine={1} splash={true} splashCount={6} splashSpeed={0.5} splashSize={0.5} splashGravity={0} regrow={0.5} shadow={false} hideCursor={true} />
    </div>
  )
}
