const matrixRowSum = (matrix) => {
  const rowSum = matrix.map((row) =>
    row.reduce((acc, value) => acc + value, 0)
  );

  return rowSum;
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrixRowSum(matrix));
