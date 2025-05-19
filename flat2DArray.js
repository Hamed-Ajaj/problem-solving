const flatTwoDArray = (arr) => {
  let oneDArray = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      oneDArray.push(arr[i][j]);
    }
  }
  return oneDArray;
};
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const twoByTwoArr = [
  [1, 2],
  [3, 4],
];
const result = flatTwoDArray(twoByTwoArr);
console.log(result);
