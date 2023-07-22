import React from "react";
import { HeatmapProps } from "../heatmap";
import Widget from "../heatmap/shared/Widget/Widget";
import HighchartsHeatmap from "../heatmap/HighchartsHeatmap/HighchartsHeatmap";
import { extractRowsData } from "../heatmap/shared/utils";

export const HighchartsWidget = ({ tableData, tableHeaders }: HeatmapProps) => {
  const [yAxisTitle, ...columns] = tableHeaders;
  const [rowsNames, rowsData] = extractRowsData(tableData);

  return (
    <Widget>
      <HighchartsHeatmap
        yAxisTitle={yAxisTitle}
        columns={columns}
        rows={rowsNames}
        data={rowsData}
      />
    </Widget>
  );
};
