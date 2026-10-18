// Rebuilt from React Bits' src/demo/Components/CurvedInputDemo.jsx: the component with the props its preview uses.
import CurvedInput from "./CurvedInput"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <CurvedInput theme={"light"} width={450} bend={28} height={64} cornerRadius={18} borderWidth={1.5} fontSize={16} backgroundColor={"#ffffff"} textColor={"#1d2050"} borderColor={"#262a56"} buttonColor={"#4763eb"} buttonTextColor={"#ffffff"} buttonText={"Get Started"} shadowSize={"md"} showButton={true} showIcon={true} placeholder="david@reactbits.dev" />
    </div>
  )
}
