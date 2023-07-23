import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsHeatmap from "highcharts/modules/heatmap";
import { parseDataToProperFormat } from "./HighchartsHeatmap.utils";
import {
  extractRowsData,
  useHighchartResizeStyles,
  sharedColors,
  HeatmapProps,
} from "../shared";

HighchartsHeatmap(Highcharts);

const HighchartHeatmap = ({ tableData, tableHeaders }: HeatmapProps) => {
  const [yAxisTitle, ...columns] = tableHeaders;
  const [rows, data] = extractRowsData(tableData);
  const [chartData, setCharData] = useState<number[][]>([]);
  const resizeStyles = useHighchartResizeStyles();

  useEffect(() => {
    setCharData(parseDataToProperFormat(data));
  }, []);

  const options = {
    chart: {
      type: "heatmap",
      marginTop: 60,
    },
    title: {
      text: null,
    },
    xAxis: {
      categories: columns,
      title: {
        style: {
          fontSize: 16,
        },
      },
      opposite: true,
    },
    yAxis: {
      categories: rows,
      title: {
        text: yAxisTitle,
        style: {
          fontSize: 16,
          overflow: "ellipsis",
        },
      },
    },
    colorAxis: {
      min: Math.min(...chartData.flat()),
      max: Math.max(...chartData.flat()),
      minColor: sharedColors.minColor,
      maxColor: sharedColors.maxColor,
    },
    legend: {
      align: "right",
      layout: "vertical",
      verticalAlign: "top",
      y: 40,
      symbolHeight: 310,
    },
    tooltip: false,
    series: [
      {
        borderWidth: 1,
        data: chartData,
        dataLabels: {
          enabled: false,
        },
      },
    ],
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      containerProps={{
        style: resizeStyles,
      }}
    />
  );
};

export default HighchartHeatmap;
