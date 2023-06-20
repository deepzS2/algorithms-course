// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
  let rabbit = list.getFirst();
  let turtle = list.getFirst();

  while (rabbit.next && rabbit.next.next) {
    const isNextRabbitNodesEqualsTurtleNode =
      rabbit.next === turtle || rabbit.next.next === turtle;

    if (isNextRabbitNodesEqualsTurtleNode) return true;

    turtle = turtle.next;
    rabbit = rabbit.next.next;
  }

  return false;
}

module.exports = circular;
