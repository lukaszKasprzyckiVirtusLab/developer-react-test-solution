import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsHeatmap from "highcharts/modules/heatmap";
import { HighchartsHeatmapProps } from "./HighchartsHeatmap.props";
import { parseDataToProperFormat } from "./HighchartsHeatmap.utils";
import { colors } from "../../shared/colors";

HighchartsHeatmap(Highcharts);

const HighchartHeatmap = ({
  columns,
  rows,
  yAxisTitle,
  xAxisTitle,
  data,
}: HighchartsHeatmapProps) => {
  const [chartData, setCharData] = useState<number[][]>([]);

  useEffect(() => {
    setCharData(parseDataToProperFormat(data));
  }, [data]);

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
        text: xAxisTitle,
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
        },
      },
    },
    colorAxis: {
      min: Math.min(...chartData.flat()),
      max: Math.max(...chartData.flat()),
      minColor: colors.minColor,
      maxColor: colors.maxColor,
    },
    legend: {
      align: "right",
      layout: "vertical",
      verticalAlign: "top",
      y: 10,
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

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default HighchartHeatmap;
