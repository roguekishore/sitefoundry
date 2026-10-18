// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartLineDotsColors as Main } from "./chart-line-dots-colors"

export interface ShadcnChartLineDotsColorsProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartLineDotsColors({ className }: ShadcnChartLineDotsColorsProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartLineDotsColors
