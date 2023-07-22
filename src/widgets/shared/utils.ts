export const extractRowsData = (
  data: (string | number)[][]
): [string[], number[][]] => {
  const rowsNames: string[] = [];
  const rowsData: number[][] = [];

  data.forEach((row) => {
    const [rowName, ...rowData] = row;
    rowsNames.push(rowName as string);
    rowsData.push(rowData as number[]);
  });

  return [rowsNames, rowsData];
};
