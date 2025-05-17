const transposeMatrix = (matrix) => {
  let transposedMatrix = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let newRow = [];
    for (let j = 0; j < matrix.length; j++) {
      newRow.push(matrix[j][i]);
    }
    transposedMatrix.push(newRow);
  }
  return transposedMatrix;
};

const matrix = [
  [1, 4],
  [2, 5],
  [3, 6],
];

console.log(transposeMatrix(matrix));
