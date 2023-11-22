class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  size() {
    let count = 0;
    let headNode = this.head;
    while (headNode) {
      count += 1;
      headNode = headNode.next;
    }
    return count;
  }

  clear() {
    this.head = null;
  }

  append(data) {
    const newNode = new ListNode(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    const lastNode = this.getLastNode();
    lastNode.next = newNode;
  }

  insert(index, data) {
    const newNode = new ListNode(data);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let currentNode = this.head;
    let count = 0;
    let previousNode = null;
    while (count < index) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      count += 1;
    }
    newNode.next = currentNode;
    previousNode.next = newNode;
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let currentNode = this.head;
    let count = 0;
    let previousNode = null;
    while (count < index) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      count += 1;
    }

    previousNode.next = currentNode.next;

    return currentNode; // 삭제한 노드
  }

  findNode(data) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === data) return currentNode;
      currentNode = currentNode.next;
    }
    return null;
  }

  findPreviousNode(data) {
    if (this.head.data === data) return null;

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.data === data) return currentNode;
      currentNode = currentNode.next;
    }
    return 'invalid data';
  }

  getLastNode() {
    if (this.head === null) return null;

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  getFirstNode() {
    return this.head;
  }

  toString() {
    const array = [];
    let currentNode = this.head;
    while (currentNode) {
      array.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return array;
  }
}
