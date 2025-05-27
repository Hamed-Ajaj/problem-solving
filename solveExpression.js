const solveExpression = (expression) => {
  if (!haveNumbers(expression)) return -1;
  for (let i = 0; i < 10; i++) {
    if (skipAvailableNumbers(expression).every((d) => d === 1) && i === 0)
      continue;
    if (skipAvailableNumbers(expression).includes(i)) continue;
    // if (skipAvailableNumbers(expression)[i] > i) continue;
    const newExpress = expression.replace(/\?/g, i);
    const numberBeforeUnk = newExpress.split("=")[0];
    const numberAfterUnk = newExpress.split("=")[1];
    const match = numberBeforeUnk.match(/(-?\d+)([+\-*/])(-?\d+)/);
    if (!match) return -1;
    const num1 = parseInt(match[1]);
    console.log(num1);
    const op = match[2];
    const num2 = parseInt(match[3]);
    const calc = parseInt(numberAfterUnk);
    console.log("calc", calc);
    let result;
    switch (op) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        break;
    }
    if (result === calc) return i;
  }
  return -1;
};

const haveNumbers = (expression) => {
  const chars = expression.split("");
  const hasNumber = chars.some((char) => !isNaN(char) && char.trim() !== "");
  return hasNumber;
};

const skipAvailableNumbers = (expression) => {
  const numberBeforeUnk = expression.split("=")[0];
  const digits = [];
  let isNegative = false;

  for (let i = 0; i < numberBeforeUnk.length; i++) {
    const char = numberBeforeUnk[i];

    if (char === "-") {
      isNegative = true;
    } else if (!isNaN(char) && char.trim() !== "") {
      digits.push(isNegative ? -Number(char) : Number(char));
      isNegative = false;
    } else {
      isNegative = false; // reset if a non-digit comes between
    }
  }

  return digits;
};

const exp = "1?*1?=1??";
console.log(solveExpression(exp));
