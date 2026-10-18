// Rebuilt from React Bits' src/demo/Micro/FuseButtonDemo.jsx: the component with the props its preview uses.
import FuseButton from "./FuseButton"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <FuseButton color={"#18181b"} background={"#f6f6f6"} size={"md"} radius={22} undoWindow={4000} fuse={"outline"} fuseThickness={1.5} crossfadeMs={200} commitOn={"press"} pauseOnHover={true} settle={"reset"} disabled={false} />
    </div>
  )
}
