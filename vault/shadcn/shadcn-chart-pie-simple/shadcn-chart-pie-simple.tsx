// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartPieSimple as Main } from "./chart-pie-simple"

export interface ShadcnChartPieSimpleProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartPieSimple({ className }: ShadcnChartPieSimpleProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartPieSimple
