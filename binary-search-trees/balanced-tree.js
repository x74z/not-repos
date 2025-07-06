class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  root = null;
  // constructor(arr) {
  //   this.arr = arr;
  // }
  prettyPrint(node, prefix = "", isLeft = true) {
    // Tip: If you would like to visualize your binary search tree, here is a prettyPrint() function that will console.log your tree in a structured format.
    // This function will expect to receive the root of your tree as the value for the node parameter.
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false,
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }

  buildTree(arr, start, end) {
    if (start > end) return null;
    // console.log(arr);
    const mid = Math.floor((start + end) / 2);
    // Create the root node to add to its left and right values the subtrees
    const root = new Node(arr[mid]);
    // Create left tree
    root.left = this.buildTree(arr, start, mid - 1);
    // Create right tree
    root.right = this.buildTree(arr, mid + 1, end);
    return root;
  }
  buildTreeFromSortedArray(arr) {
    return this.buildTree(arr, 0, arr.length - 1);
  }

  insert(root, value) {
    if (root === null) {
      return new Node(value);
    }
    // No duplicates
    if (root.data === value) {
      return root;
    }
    if (value < root.data) {
      // If the value is smaller it goes to the left. 
      root.left = this.insert(root.left, value);
    }
    if (value > root.data) {
      root.right = this.insert(root.right, value);
    }
    return root;
  }
  deleteItem(root, value) { }
}

function testTree(){
  // Testing code below

  const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
  const sortedAndNoDuplicatesArr = arr
  .filter(function(item, pos) {
    return arr.indexOf(item) == pos;
  })
  .sort((a, b) => a - b);
  console.log(sortedAndNoDuplicatesArr);
  const test = new Tree();
  const tree = test.buildTreeFromSortedArray(sortedAndNoDuplicatesArr);
  console.log(tree);
  test.prettyPrint(tree);

  test.insert(tree, 21)
  test.prettyPrint(tree);
}
testTree()
