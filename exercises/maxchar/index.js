// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charsCountMap = new Map();
  let maxCharacter = { value: "", count: 0 };

  for (const char of str) {
    const previousCharCount = charsCountMap.has(char)
      ? charsCountMap.get(char)
      : 0;
    const newCharCount = previousCharCount + 1;

    if (newCharCount > maxCharacter.count) {
      maxCharacter.count = newCharCount;
      maxCharacter.value = char;
    }

    charsCountMap.set(char, newCharCount);
  }

  return maxCharacter.value;
}

module.exports = maxChar;
