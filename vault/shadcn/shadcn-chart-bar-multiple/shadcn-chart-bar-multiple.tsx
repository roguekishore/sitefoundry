// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartBarMultiple as Main } from "./chart-bar-multiple"

export interface ShadcnChartBarMultipleProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartBarMultiple({ className }: ShadcnChartBarMultipleProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartBarMultiple
