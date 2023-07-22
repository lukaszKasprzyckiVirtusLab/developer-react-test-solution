export const extractRowsData = (data: Array<Array<string | number>>): any => {
    const rowsNames: string[] = [];
    const rowsData: number[][] = [];

    data.forEach((row) => {
        const [rowName, ...rowData] = row;
        rowsNames.push(rowName as string);
        rowsData.push(rowData as number[]);
    });

    return [rowsNames, rowsData]
}
