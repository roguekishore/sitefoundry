// Rebuilt from React Bits' src/demo/Components/ElasticSliderDemo.jsx: the component with the props its preview uses.
import ElasticSlider from "./ElasticSlider"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <ElasticSlider style={{"width":"100%","maxWidth":360}} valuePosition={"none"} thickness={5} activeThickness={9} trackColor={"var(--muted)"} rangeColor={"var(--primary)"} iconColor={"var(--muted-foreground)"} maxStretch={50} bounce={0.5} growOnHover={true} wheel={false} value={84} maxValue={217} leftIcon={null} rightIcon={null} ariaLabel="Seek" />
    </div>
  )
}
