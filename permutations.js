const permutations = (string) => {
  const permutedSet = new Set();
  if (string.length === 1) return [string];

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    let remaining = string.slice(0, i) + string.slice(i + 1);

    let subPermutations = permutations(remaining);

    for (let per of subPermutations) permutedSet.add(char + per);
  }
  return Array.from(permutedSet);
};

console.log(permutations("abc"));
