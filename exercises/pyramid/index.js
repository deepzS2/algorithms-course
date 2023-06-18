// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  const amountOfColumns = n * 2 - 1;
  const middle = Math.floor(amountOfColumns / 2);

  for (let rowIndex = 0; rowIndex < n; rowIndex++) {
    let str = "";

    for (let columnIndex = 0; columnIndex < amountOfColumns; columnIndex++) {
      const isInMiddleOrOnBoundsOfMiddle =
        columnIndex === middle ||
        columnIndex === middle + rowIndex ||
        columnIndex === middle - rowIndex;
      const isInLeftMiddle =
        columnIndex < middle && columnIndex > middle - rowIndex;
      const isInRightMiddle =
        columnIndex > middle && columnIndex < middle + rowIndex;

      if (isInMiddleOrOnBoundsOfMiddle || isInLeftMiddle || isInRightMiddle) {
        str += "#";
      } else {
        str += " ";
      }
    }

    console.log(str);
  }
}

pyramid(3);

module.exports = pyramid;
