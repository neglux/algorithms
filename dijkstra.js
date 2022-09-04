/*
    Implement Dijkstra's Algorithm to find shortest path from a starting node to ending node in weighted Graph.

    Write function called dijkstra which is accepts a graph, starting node, ending node and returns the
    shortest path.

    ```
    // The Graph - find the shortest path from A to E 
            const wg = new WeightedGraph();
            wg.addVertex("A");
            wg.addVertex("B");
            wg.addVertex("C");
            wg.addVertex("D");
            wg.addVertex("E");
            wg.addVertex("F");

            wg.addEdge("A", "B", 4);
            wg.addEdge("A", "C", 2);
            wg.addEdge("B", "E", 3);
            wg.addEdge("C", "D", 2);
            wg.addEdge("C", "F", 4);
            wg.addEdge("D", "E", 3);
            wg.addEdge("D", "F", 1);
            wg.addEdge("F", "E", 1);

            dijkstra(wg, "A", "E") --> 6 A->C->D->F->E
    ```

*/

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    const swap = (index1, index2) => {
      let temp = this.values[index1];
      this.values[index1] = this.values[index2];
      this.values[index2] = temp;
    };
    const bubbleUp = (index) => {
      let curIx = index;
      let parentIx = Math.floor((curIx - 1) / 2);
      while (this.values[parentIx]) {
        if (this.values[parentIx].priority > this.values[curIx].priority)
          swap(parentIx, curIx);
        curIx = parentIx;
        parentIx = Math.floor((curIx - 1) / 2);
      }
    };
    const newNode = new Node(val, priority);
    let isNewNode = true;
    this.values.forEach((node, index) => {
      if (node.val === val) {
        isNewNode = false;
        node.priority = newNode.priority;
        bubbleUp(index);
      }
    });

    if (isNewNode) {
      this.values.push(newNode);
      bubbleUp(this.values.length - 1);
    }
  }
  dequeue() {
    const swap = (arr, index1, index2) => {
      let temp = arr[index1];
      arr[index1] = arr[index2];
      arr[index2] = temp;
      return true;
    };
    const sinkDown = () => {
      let parentIndex = 0;
      while (true) {
        let swapIx = null;
        const cur = this.values[parentIndex];
        const leftIx = 2 * parentIndex + 1;
        const rightIx = 2 * parentIndex + 2;
        const leftChild = this.values[leftIx] || null;
        const rightChild = this.values[rightIx] || null;

        if (rightChild) {
          if (rightChild.priority < cur.priority) {
            const minChild = Math.min(leftChild.priority, rightChild.priority);
            if (minChild === leftChild.priority) swapIx = leftIx;
            else swapIx = rightIx;
          }
        } else {
          if (leftChild && leftChild.priority < cur.priority) swapIx = leftIx;
        }

        if (swapIx === null) return;
        swap(this.values, swapIx, parentIndex);
        parentIndex = swapIx;
      }
    };
    if (!this.values.length) return undefined;

    swap(this.values, 0, this.values.length - 1);
    const removedElement = this.values.pop();
    sinkDown();
    return removedElement;
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({
      node: vertex2,
      weight,
    });
    this.adjacencyList[vertex2].push({
      node: vertex1,
      weight,
    });
  }
}

function dijkstra(graph, start, end) {
  const distances = {};
  Object.keys(graph.adjacencyList).forEach((key) => {
    if (key === start) distances[key] = 0;
    else distances[key] = Infinity;
  });
  const pQueue = new PriorityQueue();
  Object.keys(graph.adjacencyList).forEach(([key]) => {
    if (key === start) pQueue.enqueue(key, 0);
    else pQueue.enqueue(key, Infinity);
  });
  const previous = {};
  Object.keys(graph.adjacencyList).forEach(([key]) => {
    previous[key] = null;
  });

  while (pQueue.values) {
    const vertex = pQueue.dequeue();
    if (vertex.val === end) return distances[vertex.val];
    graph.adjacencyList[vertex.val].forEach((neighbor) => {
      const tempDistance = distances[vertex.val] + neighbor.weight;
      if (tempDistance < distances[neighbor.node]) {
        distances[neighbor.node] = tempDistance;
        previous[neighbor.node] = vertex.val;
        pQueue.enqueue(neighbor.node, tempDistance);
      }
    });
  }
}
