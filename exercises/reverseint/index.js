// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const numberString = n.toString().replace("-", "");
  const numberSign = n >= 0 ? 1 : -1;

  const reversedNumberString = numberString
    .split("")
    .reduce((reversed, char) => char + reversed, "");

  const reversedInt = parseInt(reversedNumberString);

  return reversedInt * numberSign;
}

module.exports = reverseInt;
