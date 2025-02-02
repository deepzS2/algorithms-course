// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const result = Array.from(Array(n), () => new Array(n));
  let counter = 1;

  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    // Top left to top right
    for (
      let columnIndex = startColumn;
      columnIndex <= endColumn;
      columnIndex++
    ) {
      result[startRow][columnIndex] = counter;
      counter++;
    }

    startRow++;

    // Top right to bottom right
    for (let rowIndex = startRow; rowIndex <= endRow; rowIndex++) {
      result[rowIndex][endColumn] = counter;
      counter++;
    }

    endColumn--;

    // Bottom right to bottom left
    for (
      let columnIndex = endColumn;
      columnIndex >= startColumn;
      columnIndex--
    ) {
      result[endRow][columnIndex] = counter;
      counter++;
    }

    endRow--;

    // Bottom left to top left
    for (let rowIndex = endRow; rowIndex >= startRow; rowIndex--) {
      result[rowIndex][startColumn] = counter;
      counter++;
    }

    startColumn++;
  }

  return result;
}

console.dir(matrix(3));

module.exports = matrix;
