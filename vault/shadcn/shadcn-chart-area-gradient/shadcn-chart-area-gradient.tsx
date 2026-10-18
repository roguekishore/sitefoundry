// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartAreaGradient as Main } from "./chart-area-gradient"

export interface ShadcnChartAreaGradientProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartAreaGradient({ className }: ShadcnChartAreaGradientProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartAreaGradient
