// https://www.theodinproject.com/lessons/javascript-linked-lists
class LinkedList {
  constructor() {
    this.list = [];
  }
  createNode(value) {
    // Null by default since we change it later
    return new Node(value, null);
  }
  append(value) {
    const newNode = this.createNode(value);
    const listTail = this.tail();
    if (listTail !== undefined) {
      listTail.nextNode = newNode;
    }
    this.list.push(newNode);
  }
  preppend(value) {
    const newNode = this.createNode(value);
    const listHead = this.head();
    if (listHead !== undefined) {
      newNode.nextNode = listHead;
    }
    this.list.unshift(newNode);
  }
  size() {
    return this.list.length;
  }
  head() {
    return this.list[0];
  }
  tail() {
    return this.list[this.list.length - 1];
  }
  at(index) {
    return this.list[index];
  }
  pop() {
    this.list.pop();
  }
  contains(value) {
    const elem = this.list.find(value);
    if (elem === undefined) return false;
    return true;
  }
  find(value) {
    const index = this.list.indexOf(value);
    if (index === -1) return null;
    return index;
  }
  toString() {
    this.list.forEach((node, index) => {
      if (node.nextNode === null) return null;
      console.log(node.value);
    });
  }
  insertAt(value, index) {
    const newNode = this.createNode(value);
    const nodeToMove = this.list[index];
    const previousNode = this.list[index - 1];
    if (nodeToMove !== undefined) {
      newNode.nextNode = nodeToMove;
    }
    if (previousNode !== undefined) {
      previousNode.nextNode = newNode;
    }
    // console.log(this.list);
    this.list.splice(index, 0, newNode);
    // console.log(this.list);
  }
  removeAt(index) {
    const nodeToRemove = this.list[index];
    const nextNode = this.list[index + 1];
    const previousNode = this.list[index - 1];
    if (previousNode !== undefined) {
      previousNode.nextNode = nextNode;
    }
    this.list.splice(index, 1);
  }
}
class Node {
  constructor(value, nextNode) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
// Testing
const list = new LinkedList();

list.append("a");
list.append("b");
list.append("c");
list.append("d");
list.append("e");
list.append("f");
list.preppend("turtle");
list.insertAt("sus", 4);
list.removeAt(4);
console.log(list.toString());
