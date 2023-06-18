// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

const VOWELS_ARRAY = ["a", "e", "i", "o", "u"];

function vowels(str) {
  let result = 0;

  for (const char of str) {
    if (VOWELS_ARRAY.indexOf(char.toLowerCase()) > -1) {
      result++;
    }
  }

  return result;
}

module.exports = vowels;
