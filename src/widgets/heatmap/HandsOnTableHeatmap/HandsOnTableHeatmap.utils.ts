export const calculatePointOnHeatmapScale = (
  min: number,
  max: number,
  value: number
) => (value - min) / (max - min);

export const reverseArray = <T>(array: Array<T>): Array<T> => {
  const reversedArray = [];

  for (let i = array.length - 1; i >= 0; i -= 1) {
    const valueAtIndex = array[i];
    reversedArray.push(valueAtIndex);
  }

  return reversedArray;
};
