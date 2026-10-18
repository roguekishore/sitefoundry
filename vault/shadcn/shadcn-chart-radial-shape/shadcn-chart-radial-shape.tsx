// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartRadialShape as Main } from "./chart-radial-shape"

export interface ShadcnChartRadialShapeProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartRadialShape({ className }: ShadcnChartRadialShapeProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartRadialShape
