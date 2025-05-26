const solveExpression = (expression) => {
  if (!haveNumbers(expression)) return -1;
  for (let i = 0; i < 10; i++) {
    const newExpress = expression.replace(/\?/g, i);
    const numberBeforeUnk = newExpress.split("=")[0];
    const numberAfterUnk = newExpress.split("=")[1];
    const match = numberBeforeUnk.match(/(-?\d+)([+\-*/])(-?\d+)/);
    console.log(match);
    if (!match) return -1;
    const num1 = parseInt(match[1]);
    const op = match[2];
    const num2 = parseInt(match[3]);
    const calc = parseInt(numberAfterUnk);
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
const exp = "?*?=??";
console.log(solveExpression(exp));
