export interface HighchartsHeatmapProps {
    columns: string[],
    rows: (string | number) [][],
    data: number[][]
    xAxisTitle?: string,
    yAxisTitle?: string
}
