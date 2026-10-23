import { FunctionhealthPauseMotion, usePauseMotion } from "./functionhealth-pause-motion";

export default function Demo() {
  const { paused, toggle } = usePauseMotion();
  return (
    <div className="bg-background p-8">
      <FunctionhealthPauseMotion paused={paused} onToggle={toggle} pauseLabel="Pause motion" playLabel="Play motion" />
    </div>
  );
}
