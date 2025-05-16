const flidMatrixHorizontaly = (matrix) => {
  const flippedMatrix = matrix.map((row) => [...row].reverse());

  return flippedMatrix;
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(flidMatrixHorizontaly(matrix));
