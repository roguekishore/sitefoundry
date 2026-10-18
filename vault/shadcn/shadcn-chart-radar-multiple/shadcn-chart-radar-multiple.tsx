// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartRadarMultiple as Main } from "./chart-radar-multiple"

export interface ShadcnChartRadarMultipleProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartRadarMultiple({ className }: ShadcnChartRadarMultipleProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartRadarMultiple
