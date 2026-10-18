// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartRadarGridCircleFill as Main } from "./chart-radar-grid-circle-fill"

export interface ShadcnChartRadarGridCircleFillProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartRadarGridCircleFill({ className }: ShadcnChartRadarGridCircleFillProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartRadarGridCircleFill
