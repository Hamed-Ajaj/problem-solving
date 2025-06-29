// my solution but it doesn't work because the algorithm is too slow

// function solution(numbers) {
//   let isChanging = true;
//   while (isChanging) {
//     isChanging = false;
//     for (i = 1; i < numbers.length; i++) {
//       for (j = 0; j < numbers.length; j++) {
//         if (numbers[i] > numbers[j]) {
//           numbers[i] = numbers[i] - numbers[j];
//           isChanging = true;
//         } else if (numbers[j] > numbers[i]) {
//           numbers[j] = numbers[j] - numbers[i];
//           isChanging = true;
//         }
//       }
//     }
//   }

//   const sum = numbers.reduce((acc, val) => {
//     return acc + val;
//   }, 0);
//   return sum;
// }

// ! better solution

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function solution(numbers) {
  const g = numbers.reduce((acc, val) => gcd(acc, val));
  return g * numbers.length;
}

const arr = [30, 12];

console.log(solution(arr));
