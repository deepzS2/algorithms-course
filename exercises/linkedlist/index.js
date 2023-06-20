// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let currentNode = this.head;
    let count = 0;

    while (currentNode) {
      currentNode = currentNode.next;
      count++;
    }

    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let lastNode = this.head;
    let currentNode = lastNode;

    while (currentNode) {
      lastNode = currentNode;
      currentNode = currentNode.next;
    }

    return lastNode;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return;

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return;

    let currentNode = this.head;
    let previousNode = currentNode;

    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    if (this.head === currentNode) {
      this.head = null;
    } else {
      previousNode.next = null;
    }
  }

  insertLast(data) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    const lastNode = this.getLast();

    lastNode.next = new Node(data);
  }

  getAt(targetIndex) {
    let node = this.head;

    for (let index = 0; index < targetIndex; index++) {
      if (!node) break;

      node = node.next;
    }

    return node;
  }

  removeAt(targetIndex) {
    if (!this.head || targetIndex > this.size() - 1) return;

    let currentNode = this.head;
    let previousNode = currentNode;

    for (let index = 0; index < targetIndex; index++) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    if (currentNode === this.head) {
      this.head = previousNode.next;
      return;
    }

    previousNode.next = currentNode.next;
  }

  insertAt(data, targetIndex) {
    const newNode = new Node(data);

    if (!this.size()) {
      this.head = newNode;
      return;
    }

    if (targetIndex > this.size() - 1) {
      const lastNode = this.getLast();

      lastNode.next = newNode;
      return;
    }

    let currentNode = this.head;
    let previousNode = currentNode;

    for (let index = 0; index < targetIndex; index++) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    if (currentNode === this.head) {
      if (this.head.next) newNode.next = this.head;

      this.head = newNode;
      return;
    }

    newNode.next = currentNode;
    previousNode.next = newNode;
  }

  forEach(fn) {
    let currentNode = this.head;

    while (currentNode) {
      fn(currentNode);

      currentNode = currentNode.next;
    }
  }

  *[Symbol.iterator]() {
    let currentNode = this.head;

    while (currentNode) {
      yield currentNode;

      currentNode = currentNode.next;
    }
  }
}

module.exports = { Node, LinkedList };
