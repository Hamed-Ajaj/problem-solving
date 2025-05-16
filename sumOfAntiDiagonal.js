// method 2

const sumOfAntiDiagonal = (matrix) => {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    sum = sum + matrix[i][matrix.length - 1 - i];
  }
  return sum;
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(sumOfAntiDiagonal(matrix));

// method 2

// let sum = 0;

// for (i = 0; i < arr.length; i++) {
//   for (j = arr.length - 1; j >= 0; j--)
//     if (i === j) {
//       sum += arr[i][j];
//     }
// }
// console.log(sum);
