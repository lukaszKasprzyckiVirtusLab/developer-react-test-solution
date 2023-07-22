import React from "react";
import { WidgetsProps } from "../Widgets.props";
import Widget from "../shared/Widget/Widget";
import HandsontableHeatmap from "../heatmap/HandsOnTableHeatmap/HandsOnTableHeatmap";

const HandsOnTableWidget = ({ tableData, tableHeaders }: WidgetsProps) => (
  <Widget>
    <HandsontableHeatmap tableHeaders={tableHeaders} tableData={tableData} />
  </Widget>
);

export default HandsOnTableWidget;
