// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");

class Queue {
  #stack1 = new Stack();
  #stack2 = new Stack();

  #organizeStacks() {
    const peekedStack1Value = this.#stack1.peek();

    if (!peekedStack1Value) return;

    while (this.#stack1.peek()) {
      this.#stack2.push(this.#stack1.pop());
    }
  }

  add(item) {
    this.#stack1.push(item);
  }

  peek() {
    this.#organizeStacks();

    return this.#stack2.peek();
  }

  remove() {
    this.#organizeStacks();

    return this.#stack2.pop();
  }
}

module.exports = Queue;
