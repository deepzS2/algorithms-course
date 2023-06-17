// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  for (let logIndexReversed = n; logIndexReversed > 0; logIndexReversed--) {
    const str = new Array(n);

    for (let charIndex = 0; charIndex < n; charIndex++) {
      str.push(charIndex <= n - logIndexReversed ? "#" : " ");
    }

    console.log(str.join(""));
  }
}

module.exports = steps;
