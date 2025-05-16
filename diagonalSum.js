const diagonalSum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i][i];
  }
  return sum;
};

// Test cases
console.log(
  diagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // 15
console.log(
  diagonalSum([
    [1, 2, 3],
    [4, 5, 6],
  ])
); // 6
console.log(
  diagonalSum([
    [1, 2],
    [3, 4],
  ])
); // 5
console.log(diagonalSum([[1]])); // 1
console.log(diagonalSum([])); // 0
