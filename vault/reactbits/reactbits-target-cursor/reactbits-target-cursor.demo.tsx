// Rebuilt from React Bits' src/demo/Animations/TargetCursorDemo.jsx: the component with the props its preview uses.
import TargetCursor from "./TargetCursor"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <TargetCursor spinDuration={2} hoverDuration={0.2} size={36} cornerSize={12} thickness={3} padding={6} dotSize={4} cursorColor={"#ffffff"} cursorColorOnTarget={"#ffffff"} blendMode={"difference"} parallaxOn={true} matchRadius={true} showLabel={true} clickEffect={true} hideDefaultCursor={true} />
    </div>
  )
}
