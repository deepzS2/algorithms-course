// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  const data = node.data;

  const isDataInInvalidRange =
    (min !== null && data < min) || (max !== null && data > max);

  let isNodeValid = !isDataInInvalidRange;

  if (node.left && isNodeValid) isNodeValid = validate(node.left, min, data);
  if (node.right && isNodeValid) isNodeValid = validate(node.right, data, max);

  return isNodeValid;
}

module.exports = validate;
