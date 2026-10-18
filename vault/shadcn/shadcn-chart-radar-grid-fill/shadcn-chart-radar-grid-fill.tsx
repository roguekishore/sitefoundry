// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartRadarGridFill as Main } from "./chart-radar-grid-fill"

export interface ShadcnChartRadarGridFillProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartRadarGridFill({ className }: ShadcnChartRadarGridFillProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartRadarGridFill
