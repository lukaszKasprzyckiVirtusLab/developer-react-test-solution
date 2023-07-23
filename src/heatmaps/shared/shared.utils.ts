import { useEffect, useState } from "react";

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

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

export const useHighchartResizeStyles = () => {
  const { width } = useWindowSize();
  const marginValue = 24;

  return {
    height: "auto",
    width: width - 2 * marginValue,
    marginRight: marginValue,
  };
};
