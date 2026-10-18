// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartBarNegative as Main } from "./chart-bar-negative"

export interface ShadcnChartBarNegativeProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartBarNegative({ className }: ShadcnChartBarNegativeProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartBarNegative
