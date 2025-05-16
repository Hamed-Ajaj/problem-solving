snail = function (array) {
  snailArr = [];
  if (array.lenght) return [];
  if (array.length === 1) return array[0];
  while (array.length) {
    snailArr.push(...array.shift(), ...array.map((row) => row.pop()));
    array.reverse().map((row) => row.reverse());
  }
  return snailArr;
};

// Test cases
console.log(
  snail([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // [1, 2, 3, 6, 9, 8, 7, 4, 5]
console.log(
  snail([
    [1, 2, 3],
    [4, 5, 6],
  ])
); // [1, 2, 3, 6, 5, 4]
console.log(
  snail([
    [1, 2],
    [3, 4],
  ])
); // [1, 2, 4, 3]
console.log(snail([[1]])); // [1]
console.log(snail([])); // []
