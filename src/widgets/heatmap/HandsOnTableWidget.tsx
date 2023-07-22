import React from "react";
import { HeatmapProps } from "./Heatmap.props";
import Widget from "./shared/Widget/Widget";
import HandsontableHeatmap from "./HandsOnTableHeatmap/HandsOnTableHeatmap";

export const HandsOnTableWidget = ({
  tableData,
  tableHeaders,
}: HeatmapProps) => (
  <Widget>
    <HandsontableHeatmap tableHeaders={tableHeaders} tableData={tableData} />
  </Widget>
);
