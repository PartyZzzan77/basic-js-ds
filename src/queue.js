const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { data: 3, next: null }
 */
class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.start = null;
    this.end = null;
  }

  getUnderlyingList() {
    return this.start;
  }

  enqueue(element) {
    const node = new ListNode(element);
    if (!this.start) {
      this.start = node
      this.end = this.start;
    }
    this.end.next = node;
    this.end = this.end.next;
  }

  dequeue() {
    let target = this.start;
    this.start = this.start.next;

    return target.value;
  }
}

module.exports = {
  Queue
};
