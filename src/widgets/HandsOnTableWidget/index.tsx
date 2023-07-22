import React from "react";
import { HeatmapProps } from "../heatmap";
import Widget from "../heatmap/shared/Widget/Widget";
import HandsontableHeatmap from "../heatmap/HandsOnTableHeatmap/HandsOnTableHeatmap";

export const HandsOnTableWidget = ({
  tableData,
  tableHeaders,
}: HeatmapProps) => (
  <Widget>
    <HandsontableHeatmap tableHeaders={tableHeaders} tableData={tableData} />
  </Widget>
);
