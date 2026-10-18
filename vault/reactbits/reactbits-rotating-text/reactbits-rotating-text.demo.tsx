// Rebuilt from React Bits' src/demo/TextAnimations/RotatingTextDemo.jsx: the component with the props its preview uses.
import RotatingText from "./RotatingText"

export default function Demo() {
  return (
    <div className="relative flex min-h-[400px] w-full items-center justify-center overflow-hidden">
      <RotatingText texts={["thinking", "coding", "components!"]} splitLevelClassName={"rotating-text-split"} animatePresenceInitial effect={"slide"} direction={"up"} rotationInterval={2000} staggerDuration={0.025} staggerFrom={"last"} splitBy={"characters"} blur={0} highlight={true} auto={true} loop={true} pauseOnHover={false} highlightColor={"#8f36e8"} />
    </div>
  )
}
