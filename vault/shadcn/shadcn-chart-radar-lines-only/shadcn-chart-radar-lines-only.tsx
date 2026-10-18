// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartRadarLinesOnly as Main } from "./chart-radar-lines-only"

export interface ShadcnChartRadarLinesOnlyProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartRadarLinesOnly({ className }: ShadcnChartRadarLinesOnlyProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartRadarLinesOnly
