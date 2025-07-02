function sumOfDivided(lst) {
  const factors = getPrimeFactors(lst);
  let sumOfFactors = [];
  for (let i = 0; i < factors.length; i++) {
    let arr = [factors[i], 0];
    for (let j = 0; j < lst.length; j++) {
      if (lst[j] % factors[i] === 0) {
        arr[0] = factors[i];
        arr[1] = (arr[1] || 0) + lst[j];
      }
    }
    sumOfFactors.push(arr);
  }
  return sumOfFactors;
}

// get prime factors from given array for each number
function getPrimeFactors(numArr) {
  let primeFactors = new Set();
  for (let i = 0; i < numArr.length; i++) {
    const num = Math.abs(numArr[i]); // ignore negative
    for (let j = 2; j <= num; j++) {
      if (num % j === 0 && isPrime(j)) {
        primeFactors.add(j);
      }
    }
  }
  return Array.from(primeFactors).sort((x, y) => Math.abs(x) - Math.abs(y));
}

// check if the number is prime
function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false; // Eliminate even numbers early

  const sqrt = Math.sqrt(n);
  for (let i = 3; i <= sqrt; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(sumOfDivided([15, 21, 24, 30, 45]));
