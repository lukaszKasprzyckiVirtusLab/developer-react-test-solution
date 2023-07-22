import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsHeatmap from "highcharts/modules/heatmap";
import { HighchartsHeatmapProps } from "./HighchartsHeatmap.props";
import { parseDataToProperFormat } from "./HighchartsHeatmap.utils";

HighchartsHeatmap(Highcharts);

const HeatmapChart = ({ columns, rows, yAxisTitle, xAxisTitle, data }: HighchartsHeatmapProps) => {
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
      minColor: "#FFFFFF",
      maxColor: Highcharts?.getOptions()?.colors?.[0],
    },
    legend: {
      align: "right",
      layout: "vertical",
      verticalAlign: "top",
      y: 10,
      symbolHeight: 310,
    },
    tooltip: {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      formatter() {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // eslint-disable-next-line react/no-this-in-sfc
          `<b>${
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            // eslint-disable-next-line react/no-this-in-sfc
            this.series.xAxis.categories[this.point.x]
          }</b><br>` +
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          `<b>${
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            // eslint-disable-next-line react/no-this-in-sfc
            this.series.yAxis.categories[this.point.y]
          }</b><br>` +
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // eslint-disable-next-line react/no-this-in-sfc
          `Value: <b>${
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            // eslint-disable-next-line react/no-this-in-sfc
            Highcharts.numberFormat(this.point.value, 2)
          }</b>`
        );
      },
    },

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

export default HeatmapChart;
