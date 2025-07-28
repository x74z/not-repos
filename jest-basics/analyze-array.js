export function analyzeArray(arr) {
  return {
    average: arr.reduce((prev,curr)=> prev+curr) / arr.length,
    min: arr.reduce((prev, curr) => Math.min(prev, curr)),
    max: arr.reduce((prev, curr) => Math.max(prev, curr)),
    length: arr.length,
  };
}
analyzeArray([1, 8, 3, 4, 2, 6]);
