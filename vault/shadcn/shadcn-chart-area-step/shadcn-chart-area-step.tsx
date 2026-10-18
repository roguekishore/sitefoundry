// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartAreaStep as Main } from "./chart-area-step"

export interface ShadcnChartAreaStepProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartAreaStep({ className }: ShadcnChartAreaStepProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartAreaStep
