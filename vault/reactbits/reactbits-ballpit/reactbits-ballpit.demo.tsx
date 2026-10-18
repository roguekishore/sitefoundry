// Rebuilt from React Bits' src/demo/Backgrounds/BallpitDemo.jsx: the component with the props its preview uses.
import Ballpit from "./Ballpit"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden dark bg-background">
      <Ballpit colors={["#ffffff"]} material={"satin"} count={200} minSize={0.5} maxSize={1} gravity={0} friction={0.9975} wallBounce={0.95} bounce={0.85} depth={2} drift={0.4} cursorSize={1} lightColor={"#ffffff"} lightIntensity={1} exposure={1} shadows={0.6} followCursor={true} grab={true} clickEffect={"burst"} intro={true} />
    </div>
  )
}
