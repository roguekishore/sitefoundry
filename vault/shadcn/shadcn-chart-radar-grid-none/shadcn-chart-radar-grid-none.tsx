// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartRadarGridNone as Main } from "./chart-radar-grid-none"

export interface ShadcnChartRadarGridNoneProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartRadarGridNone({ className }: ShadcnChartRadarGridNoneProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartRadarGridNone
