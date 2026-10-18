// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartLineStep as Main } from "./chart-line-step"

export interface ShadcnChartLineStepProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartLineStep({ className }: ShadcnChartLineStepProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartLineStep
