// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]
const NEXT_SYBLINGS_SYMBOL = Symbol();

function levelWidth(root) {
  const result = [1];
  const nodes = [...root.children, NEXT_SYBLINGS_SYMBOL];
  let counter = 0;

  while (nodes.length) {
    const child = nodes.shift();

    const hasFinishedCountingSiblings = child === NEXT_SYBLINGS_SYMBOL;

    if (hasFinishedCountingSiblings) {
      result.push(counter);
      counter = 0;

      const hasMoreChildrens = nodes.length;
      if (hasMoreChildrens) nodes.push(child);

      continue;
    }

    counter++;

    const doesChildHasChildren = child.children.length;

    if (doesChildHasChildren) {
      nodes.push(...child.children);
    }
  }

  return result;
}

module.exports = levelWidth;
