/*
    Implement a method called traverse which is uses the Depth First Search (BFS) algorithm to travel each node in postorder.

    Implement the dfs algorithm recursively
    ```
        const bst = new BinarySearchTree();
        bst.insert(10);
        bst.insert(6);
        bst.insert(15);
        bst.insert(3);
        bst.insert(8);
        bst.insert(20);

        bst.traverse(); --> 3,8,6,20,15,10
    ```
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let node = this.root;
    while (true) {
      if (newNode.val === node.val) return undefined;

      if (newNode.val > node.val) {
        if (node.right) node = node.right;
        else {
          node.right = newNode;
          return this;
        }
      } else {
        if (node.left) node = node.left;
        else {
          node.left = newNode;
          return this;
        }
      }
    }
  }
  traverse() {
    const visited = [];
    const helper = (node) => {
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
      visited.push(node.val);
    };
    let current = this.root;
    helper(current);
    return visited;
  }
}
