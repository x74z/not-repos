class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(arr) {
    this.arr = arr;
    this.root = this.buildTreeFromArray(this.arr);
  }

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
    const newArr = this.sortArray(arr);
    return this.buildTree(newArr, 0, newArr.length - 1);
  }

  insert(value, root = this.root) {
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
      root.left = this.insert(value, root.left);
    }
    if (value > root.data) {
      root.right = this.insert(value, root.right);
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
  deleteItem(value, root = this.root) {
    // https://www.geeksforgeeks.org/dsa/deletion-in-binary-search-tree/
    if (root === null) return root;

    // If value is in a subtree
    if (root.value > value) {
      root.left = this.deleteItem(value, root.left);
    } else if (root.value > value) {
      root.right = this.deleteItem(value, root.right);
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
      root.right = this.deleteItem(succesor.value, root.right);
    }
    return root;
  }
  levelOrder(callbackFunc, root = this.root) {
    if (callbackFunc === undefined) {
      throw new Error("Callback function is undefined");
    }
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
  preOrder(callbackFunc, root = this.root) {
    if (callbackFunc === undefined) {
      throw new Error("Callback function is undefined");
    }
    if (root === null) return;
    callbackFunc(root);
    this.preOrder(callbackFunc, root.left);
    this.preOrder(callbackFunc, root.right);
  }
  inOrder(callbackFunc, root = this.root) {
    if (callbackFunc === undefined) {
      throw new Error("Callback function is undefined");
    }
    if (root === null) return;
    this.inOrder(callbackFunc, root.left);
    callbackFunc(root);
    this.inOrder(callbackFunc, root.right);
  }
  postOrder(callbackFunc, root = this.root) {
    if (callbackFunc === undefined) {
      throw new Error("Callback function is undefined");
    }
    if (root === null) return;
    this.postOrder(callbackFunc, root.left);
    this.postOrder(callbackFunc, root.right);
    callbackFunc(root);
  }
  findHeightUtil(value, height, root = this.root) {
    if (!root) return -1;

    let leftHeight = this.findHeightUtil(value, height, root.left);
    let rightHeight = this.findHeightUtil(value, height, root.right);

    let ans = Math.max(leftHeight, rightHeight) + 1;
    if (root.data === value) height.value = ans;
    return ans;
  }
  heightOfNode(value, root = this.root) {
    let height = { value: -1 };
    this.findHeightUtil(value, height, root);
    return height.value;
  }
  depthOfNode(value, root = this.root) {
    if (!root) return -1;
    let dist = -1;

    if (
      root.data === x ||
      (dist = this.depthOfNode(value, root.left) >= 0) ||
      (dist = this.depthOfNode(value, root.left) >= 0)
    ) {
      return dist + 1;
    }
  }
  treeHeight(root = this.root) {
    if (root === null) return 0;
    let leftHeight = this.treeHeight(root.left);
    let rightHeight = this.treeHeight(root.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }
  isBalanced(root = this.root) {
    // A binary tree is considered balanced if, for every node in the tree,
    // the height difference between its left and right subtrees is no more than 1,
    // and both the left and right subtrees are also balanced.
    if (this.checkIfBalanced(root) === -1) return false;
    return true;
  }
  checkIfBalanced(root = this.root) {
    // This is basically reimplementing the height function to cover -1 cases.
    // This helped me reach the solution: https://medium.com/@shaswata.ssaha/checking-if-a-binary-tree-is-height-balanced-a-complete-guide-5ba45efe2299
    if (root === null) return 0; // Empty tree height = 0

    const leftHeight = this.checkIfBalanced(root.left);
    if (leftHeight == -1) return -1;
    const rightHeight = this.checkIfBalanced(root.right);
    if (rightHeight == -1) return -1;

    // Check if current node is balanced
    if (Math.abs(leftHeight - rightHeight) > 1) return -1;
    return 1 + Math.max(leftHeight, rightHeight);
  }
  rebalance(root = this.root) {
    // This code goes through every value in the array, to rebuild the tree.
    let valueArr = [];
    const treeToArray = () => {
      if (root !== null) {
        valueArr.push(root.data);
      }
    };
    this.levelOrder(treeToArray, root);
    const newRoot = this.buildTreeFromArray(valueArr);
    this.root = newRoot;
    return newRoot;
  }
}

function testTree() {
  // Testing code below

  const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
  // const easierArr = [1,1,2,3,4,5,6,7,8,9,10]
  const testTree = new Tree(arr);
  testTree.prettyPrint(testTree.root);

  // Test deleting and inserting items.
  // testTree.insert(21);
  // testTree.deleteItem( 324);
  // testTree.prettyPrint(testTree.root);
  // testTree.prettyPrint(tree);

  // Test all traversal methods.
  // testTree.levelOrder(console.log);
  // testTree.postOrder(console.log);
  // testTree.inOrder(console.log);
  // testTree.preOrder(console.log);

  // Test for imbalance
  // testTree.insert(9988);
  // testTree.insert(9989);
  // testTree.insert(9998);
  // testTree.prettyPrint(testTree.root);
  // console.log(testTree.isBalanced());
  // testTree.rebalance()
  // console.log(testTree.isBalanced());

}
testTree();
