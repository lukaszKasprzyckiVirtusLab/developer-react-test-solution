import React from "react";
import { HotTable } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import chroma from "chroma-js";
import Core from "handsontable/core";
import {
  extractRowsData,
  useHighchartResizeStyles,
  sharedColors,
  HeatmapProps,
} from "../shared";
import {
  calculatePointOnHeatmapScale,
  reverseArray,
} from "./HandsOnTableHeatmap.utils";

import "handsontable/dist/handsontable.full.css";

registerAllModules();

const HandsOnTableHeatmap = ({ tableData, tableHeaders }: HeatmapProps) => {
  const [, data] = extractRowsData(tableData);
  const { width } = useHighchartResizeStyles();

  const calculateColor = (value: string) => {
    const heatmapScale = chroma.scale([
      sharedColors.minColor,
      sharedColors.maxColor,
    ]);
    const min = Math.min(...(data.flat() as number[]));
    const max = Math.max(...(data.flat() as number[]));

    const pointOnHeatmapScale = calculatePointOnHeatmapScale(
      min,
      max,
      parseInt(value, 10)
    );
    return heatmapScale(pointOnHeatmapScale).hex();
  };

  function cellRenderer(
    instance: Core,
    td: HTMLTableCellElement,
    row: number,
    column: number,
    _: string | number,
    value: string
  ) {
    if (column === 0 || row === 0) {
      /* eslint-disable no-param-reassign */
      td.style.background = sharedColors.minColor;
      td.innerText = value;
      td.style.textAlign = "center";
      td.style.verticalAlign = "middle";
      td.style.border = `none`;
    } else {
      td.style.background = calculateColor(value);
      td.innerText = "";
      td.style.border = `0.5px solid ${sharedColors.maxColor}`;
    }
    /* eslint-enable no-param-reassign */
  }

  return (
    <HotTable
      data={[tableHeaders, ...reverseArray(tableData)]}
      stretchH="all"
      width={width}
      height="auto"
      rowHeights="80%"
      colWidths="20%"
      cells={() => ({
        renderer: cellRenderer,
        readOnly: true,
        disableVisualSelection: true,
      })}
      licenseKey="non-commercial-and-evaluation"
    />
  );
};

export default HandsOnTableHeatmap;
