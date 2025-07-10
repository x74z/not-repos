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
    // https://www.geeksforgeeks.org/sorted-array-to-balanced-bst/
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
  sortArray(arr) {
    const newArr = arr
      .filter(function (item, pos) {
        return arr.indexOf(item) == pos;
      })
      .sort((a, b) => a - b);
    return newArr;
  }
  buildTreeFromArray(arr) {
    // Remove all duplicates and sort an array to build a balanced tree
    const newArr = this.sortArray(arr);
    return this.buildTree(newArr, 0, newArr.length - 1);
  }

  insert(root, value) {
    // https://www.geeksforgeeks.org/dsa/insertion-in-binary-search-tree/
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
  getSuccesor(curr) {
    curr = curr.right;
    while (curr !== null && curr.left !== null) {
      curr = curr.left;
    }
    return curr;
  }
  deleteItem(root, value) {
    // https://www.geeksforgeeks.org/dsa/deletion-in-binary-search-tree/
    // Base
    if (root === null) {
      return root;
    }

    // If value is in a subtree
    if (root.value > value) {
      root.left = this.deleteItem(root.left, value);
    } else if (root.value > value) {
      root.right = this.deleteItem(root.right, value);
    } else {
      // If root = value

      // If it has 0 children or one right child
      if (root.left === null) {
        return root.right;
      }
      if (root.right === null) {
        return root.left;
      }
      // If both children are present
      let succesor = this.getSuccesor(root);
      root.value = succesor.value;
      root.right = this.deleteItem(root.right, succesor.value);
    }
    return root;
  }
  levelOrder(root, callbackFunc) {
    if (callbackFunc === undefined) {
      throw new Error("Callback function is undefined");
    }
    // Base case
    if (root === null) return;

    // This code will push the root node into the queue and then will loop through the array calling the callback in every currentNode.
    let queue = [];
    queue.push(root);
    while (queue.length > 0) {
      let currentNode = queue[0];

      callbackFunc(currentNode);
      if (currentNode.left !== null) queue.push(currentNode.left);

      if (currentNode.right !== null) queue.push(currentNode.right);

      queue.shift();
    }
  }
  preOrder(root, callbackFunc) {
    if (callbackFunc === undefined) {
      throw new Error("Callback function is undefined");
    }
    if (root === null) return;
    callbackFunc(root);
    this.preOrder(root.left, callbackFunc);
    this.preOrder(root.right, callbackFunc);
  }
  inOrder(root, callbackFunc) {
    if (callbackFunc === undefined) {
      throw new Error("Callback function is undefined");
    }
    if (root === null) return;
    this.inOrder(root.left, callbackFunc);
    callbackFunc(root);
    this.inOrder(root.right, callbackFunc);
  }
  postOrder(root, callbackFunc) {
    if (callbackFunc === undefined) {
      throw new Error("Callback function is undefined");
    }
    if (root === null) return;
    this.postOrder(root.left, callbackFunc);
    this.postOrder(root.right, callbackFunc);
    callbackFunc(root);
  }
  findHeightUtil(root, value, height) {
    if (!root) return -1;

    let leftHeight = this.findHeightUtil(root.left, value, height);
    let rightHeight = this.findHeightUtil(root.right, value, height);

    let ans = Math.max(leftHeight, rightHeight) + 1;
    if (root.data === value) height.value = ans;
    return ans;
  }
  height(root, value) {
    let height = { value: -1 };
    this.findHeightUtil(root, value, height);
    return height.value;
  }
  depth(root, value) {
    if (!root) return -1;
    let dist = -1;

    if (
      root.data === x ||
      (dist = this.depth(root.left, value) >= 0) ||
      (dist = this.depth(root.left, value) >= 0)
    ) {
      return dist + 1;
    }
  }
  treeHeight(root) {
    if (root === null) return 0;
    let leftHeight = this.treeHeight(root.left);
    let rightHeight = this.treeHeight(root.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }
  isBalanced(root) {
    // A binary tree is considered balanced if, for every node in the tree,
    // the height difference between its left and right subtrees is no more than 1,
    // and both the left and right subtrees are also balanced.
    if (root === null) return true;
    this.levelOrder(root, this.isBalanced);
    let leftHeight = this.treeHeight(root.left);
    let rightHeight = this.treeHeight(root.right);
    if (Math.abs(leftHeight - rightHeight) <= 1) return true;
    else return false;
  }
  rebalance(root) {}
}

function testTree() {
  // Testing code below

  const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
  // const sortedAndNoDuplicatesArr = arr
  //   .filter(function (item, pos) {
  //     return arr.indexOf(item) == pos;
  //   })
  //   .sort((a, b) => a - b);
  // console.log(sortedAndNoDuplicatesArr);
  const test = new Tree();
  const tree = test.buildTreeFromArray(arr);
  // console.log(tree);
  test.prettyPrint(tree);

  // test.insert(tree, 21);
  // test.prettyPrint(tree);
  // test.deleteItem(tree, 324);
  // test.prettyPrint(tree);

  // test.levelOrder(tree, console.log);
  // test.postOrder(tree, console.log);
  // test.inOrder(tree, console.log);
  // test.preOrder(tree, console.log);
}
testTree();
