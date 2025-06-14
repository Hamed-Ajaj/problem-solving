function partition(num) {
  const p = new Array(num + 1).fill(0);
  p[0] = 1; // base case

  for (let i = 1; i <= num; i++) {
    let total = 0;
    for (let k = 1; ; k++) {
      const pent1 = (k * (3 * k - 1)) / 2;
      const pent2 = (k * (3 * k + 1)) / 2;

      if (pent1 > i && pent2 > i) break;

      const sign = k % 2 === 0 ? -1 : 1;

      if (pent1 <= i) total += sign * p[i - pent1];
      if (pent2 <= i) total += sign * p[i - pent2];
    }
    p[i] = total;
  }

  return p[num];
}

console.log(partition(10)); // Output: 42
