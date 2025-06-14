decodeMorse = function (morseCode) {
  const morseToChar = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    " ": " ",
    "...---...": "SOS",
    "-.-.--": "!",
    ".-.-.-": ".",
  };

  const words = morseCode.trim().split("  ");
  const decodedWords = words.map((word) => {
    const letters = word.split(" ");
    console.log(letters);
    const decodedLetters = letters
      .map((letter) => morseToChar[letter])
      .join("");
    return decodedLetters;
  });
  return decodedWords.join(" ");
};

console.log(
  decodeMorse(
    "      ...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-  ",
  ),
);
