import React from "react";
import Widget from "../shared/Widget/Widget";
import HighchartsHeatmap from "../heatmap/HighchartsHeatmap/HighchartsHeatmap";
import { extractRowsData } from "../shared/utils";
import { WidgetsProps } from "../Widgets.props";

const HighchartsWidget = ({ tableData, tableHeaders }: WidgetsProps) => {
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

export default HighchartsWidget;
