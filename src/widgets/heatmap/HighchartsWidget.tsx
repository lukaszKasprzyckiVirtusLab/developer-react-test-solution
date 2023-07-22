import React from "react";
import { HeatmapProps } from "./Heatmap.props";
import Widget from "./shared/Widget/Widget";
import HighchartsHeatmap from "./HighchartsHeatmap/HighchartsHeatmap";
import { extractRowsData } from "./shared/utils";

export const HighchartsWidget = ({ tableData, tableHeaders }: HeatmapProps) => {
  const [yAxisTitle, ...columns] = tableHeaders;
  const [rowsNames, rowsData] = extractRowsData(tableData);

  return (
    <Widget>
      <HighchartsHeatmap yAxisTitle={yAxisTitle} columns={columns} rows={rowsNames} data={rowsData} />
    </Widget>
  );
};
