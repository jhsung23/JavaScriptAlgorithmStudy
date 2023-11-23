class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}
function solution(n, k, cmd) {
  const headNode = new Node(0);

  let prevNode = headNode;
  let selectedNode = k === 0 ? headNode : undefined;
  for (let i = 1; i < n; i++) {
    const currentNode = new Node(i);
    currentNode.prev = prevNode;
    prevNode.next = currentNode;
    prevNode = currentNode;

    if (i === k) {
      selectedNode = currentNode;
    }
  }

  const changeSelectedNode = (direction, distance) => {
    for (let i = 0; i < distance; i++) {
      selectedNode = selectedNode[direction];
    }
  };

  const deleteNode = () => {
    recentDeletedNodeStack.push(selectedNode);
    const prevNode = selectedNode.prev;
    const nextNode = selectedNode.next;

    if (prevNode) prevNode.next = nextNode;
    if (nextNode) nextNode.prev = prevNode;

    selectedNode = selectedNode.next ? selectedNode.next : selectedNode.prev;
  };

  const undoDelete = () => {
    const removedNode = recentDeletedNodeStack.pop();
    const prevNode = removedNode.prev;
    const nextNode = removedNode.next;

    if (prevNode) prevNode.next = removedNode;
    if (nextNode) nextNode.prev = removedNode;
  };

  const recentDeletedNodeStack = [];
  for (let command of cmd) {
    const [char, str] = command.split(' ');
    const number = Number(str);

    switch (char) {
      case 'U':
        changeSelectedNode('prev', number);
        break;
      case 'D':
        changeSelectedNode('next', number);
        break;
      case 'C':
        deleteNode();
        break;
      case 'Z':
        undoDelete();
        break;
    }
  }

  const result = Array.from({ length: n }, () => 'O');
  for (let node of recentDeletedNodeStack) {
    result[node.data] = 'X';
  }
  return result.join('');
}

// console.log(solution(8, 2, ['D 2', 'C', 'U 3', 'C', 'D 4', 'C', 'U 2', 'Z', 'Z']));
// console.log(solution(8, 2, ['D 2', 'C', 'U 3', 'C', 'D 4', 'C', 'U 2', 'Z', 'Z', 'U 1', 'C']));

// linked list 정석적으로 활용한 풀이
// 정확성 9개 미스, 효율성 통과 못함 (data를 바탕으로 노드 찾으려고 while 문 돌아서 그런듯)
// class ListNode {
//   constructor(data) {
//     this.data = data;
//     this.prev = null;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor(head = null) {
//     this.head = head;
//   }

//   size() {
//     let count = 0;
//     let headNode = this.head;
//     while (headNode) {
//       count += 1;
//       headNode = headNode.next;
//     }
//     return count;
//   }

//   clear() {
//     this.head = null;
//   }

//   append(data) {
//     const newNode = new ListNode(data);

//     if (!this.head) {
//       this.head = newNode;
//       return;
//     }

//     const lastNode = this.getLastNode();
//     lastNode.next = newNode;
//     newNode.prev = lastNode;
//   }

//   insert(index, data) {
//     const newNode = new ListNode(data);
//     if (index === 0) {
//       newNode.next = this.head;
//       this.head = newNode;
//       return;
//     }

//     let currentNode = this.head;
//     let count = 0;
//     let previousNode = null;
//     while (count < index) {
//       previousNode = currentNode;
//       currentNode = currentNode.next;
//       count += 1;
//     }
//     newNode.prev = previousNode;
//     newNode.next = currentNode;
//     previousNode.next = newNode;
//     currentNode.prev = newNode;
//   }

//   remove(index) {
//     if (index === 0) {
//       this.head = this.head.next;
//       return;
//     }

//     let currentNode = this.head;
//     let count = 0;
//     let previousNode = null;
//     while (count < index) {
//       previousNode = currentNode;
//       currentNode = currentNode.next;
//       count += 1;
//     }
//     previousNode.next = currentNode.next;
//     currentNode.prev = previousNode;
//     return currentNode; // 삭제한 노드
//   }

//   findNode(data) {
//     let currentNode = this.head;
//     while (currentNode) {
//       if (currentNode.data === data) return currentNode;
//       currentNode = currentNode.next;
//     }
//     return null;
//   }

//   findPreviousNode(data) {
//     if (this.head.data === data) return null;

//     let currentNode = this.head;
//     while (currentNode.next) {
//       if (currentNode.next.data === data) return currentNode;
//       currentNode = currentNode.next;
//     }
//     return 'invalid data';
//   }

//   getLastNode() {
//     if (this.head === null) return null;

//     let currentNode = this.head;
//     while (currentNode.next) {
//       currentNode = currentNode.next;
//     }
//     return currentNode;
//   }

//   getFirstNode() {
//     return this.head;
//   }

//   toString() {
//     const array = [];
//     let currentNode = this.head;
//     while (currentNode) {
//       array.push(currentNode.data);
//       currentNode = currentNode.next;
//     }
//     return array;
//   }
// }

// function solution(n, k, cmd) {
//   const linkedList = new LinkedList();
//   for (let i = 0; i < n; i++) {
//     linkedList.append(i);
//   }

//   let position = k;
//   const recentDeletedNodeStack = [];
//   for (let command of cmd) {
//     let [char, number] = command.split(' ');
//     number = Number.parseInt(number);

//     switch (char) {
//       case 'U':
//         position -= number;
//         break;
//       case 'D':
//         position += number;
//         break;
//       case 'C':
//         const removedNode = linkedList.remove(position);
//         recentDeletedNodeStack.push(removedNode);
//         if (position === linkedList.size()) position -= 1;
//         break;
//       case 'Z':
//         const poppedNode = recentDeletedNodeStack.pop();
//         const prevOfPoppedNode = linkedList.findNode(poppedNode.prev.data);
//         if (prevOfPoppedNode.next) {
//           poppedNode.next = prevOfPoppedNode.next;
//         }
//         poppedNode.prev = prevOfPoppedNode;
//         prevOfPoppedNode.next = poppedNode;

//         if()
//         // position += 1;
//         // if (removedIndex <= position) position += 1;
//         // linkedList.insert(removedIndex, node.data);
//         break;
//     }
//   }

//   const before = Array.from({ length: n }, (_, i) => i);
//   const afterSet = new Set(Array.from(linkedList.toString()));
//   const deletedIndex = new Set();
//   for (let idx of before) {
//     if (!afterSet.has(idx)) deletedIndex.add(idx);
//   }

//   return before.map((_, idx) => (deletedIndex.has(idx) ? 'X' : 'O')).join('');
// }
