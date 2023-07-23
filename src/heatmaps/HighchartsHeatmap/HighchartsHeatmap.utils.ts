export const parseDataToProperFormat = (data: number[][]) =>
  data
    .map((row, rowIndex) =>
      row.map((value, columnIndex) => [columnIndex, rowIndex, value])
    )
    .flat();
