// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const NON_WORD_CHARACTER_REGEX = /[^\w]/g;

const createCharsMap = (string) => {
  const charsMap = new Map();

  for (const char of string
    .replace(NON_WORD_CHARACTER_REGEX, "")
    .toLowerCase()) {
    charsMap.set(char, charsMap.has(char) ? charsMap.get(char) + 1 : 1);
  }

  return charsMap;
};

function anagrams(stringA, stringB) {
  const charactersAMap = createCharsMap(stringA);
  const charactersBMap = createCharsMap(stringB);

  const isCharactersMapsSizeEquals =
    charactersAMap.size === charactersBMap.size;

  if (!isCharactersMapsSizeEquals) return false;

  for (const char of charactersAMap.keys()) {
    const charACount = charactersAMap.has(char) ? charactersAMap.get(char) : 0;
    const charBCount = charactersBMap.has(char) ? charactersBMap.get(char) : 0;

    if (charACount !== charBCount) return false;
  }

  return true;
}

module.exports = anagrams;
