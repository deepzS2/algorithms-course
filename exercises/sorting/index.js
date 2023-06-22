// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let index = 0; index < arr.length; index++) {
    for (let swapIndex = 0; swapIndex < arr.length - index - 1; swapIndex++) {
      if (arr[swapIndex] > arr[swapIndex + 1]) {
        [arr[swapIndex], arr[swapIndex + 1]] = [
          arr[swapIndex + 1],
          arr[swapIndex],
        ];
      }
    }
  }

  return arr;
}

function selectionSort(arr) {
  for (let index = 0; index < arr.length; index++) {
    let indexOfMin = index;

    for (let swapIndex = index + 1; swapIndex < arr.length; swapIndex++) {
      if (arr[swapIndex] < arr[indexOfMin]) {
        indexOfMin = swapIndex;
      }
    }

    if (index !== indexOfMin) {
      [arr[index], arr[indexOfMin]] = [arr[indexOfMin], arr[index]];
    }
  }

  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const half = Math.ceil(arr.length / 2);

  const firstHalf = arr.slice(0, half);
  const secondHalf = arr.slice(half);

  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(left, right) {
  const results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  results.push(...left, ...right);

  return results;
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
