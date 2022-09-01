/*
    Implement a method called traverse to Binary Search Tree which is uses the Breadth First Search (BFS) algorithm to travel each node

    Implement the bfs algorithm iteratively
    ```
        const bst = new BinarySearchTree();
        bst.insert(10);
        bst.insert(6);
        bst.insert(15);
        bst.insert(3);
        bst.insert(8);
        bst.insert(20);

        bst.traverse(); --> 10,6,15,3,8,20
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
    const queue = [];

    queue.push(this.root);

    while (queue.length !== 0) {
      const node = queue.shift();
      visited.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return visited;
  }
}
