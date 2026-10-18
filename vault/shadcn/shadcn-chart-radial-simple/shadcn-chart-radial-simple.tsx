// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartRadialSimple as Main } from "./chart-radial-simple"

export interface ShadcnChartRadialSimpleProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartRadialSimple({ className }: ShadcnChartRadialSimpleProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartRadialSimple
