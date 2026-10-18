// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartLineMultiple as Main } from "./chart-line-multiple"

export interface ShadcnChartLineMultipleProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartLineMultiple({ className }: ShadcnChartLineMultipleProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartLineMultiple
