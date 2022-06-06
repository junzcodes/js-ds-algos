/* Stacks 
 - last in first out
 - functions: push (add to top), pop (remove from top), peek (display top element), length (size of stack)
 - array is a stack DS
*/

// palindrome function using array

let letters = [];

let word = "racecar";

let rword = "";

for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

for (let i = 0; i < word.length; i++) {
  rword += letters.pop();
}

// console.log(word === rword ? "palindrome" : "not a palindrome");

var Stack = function () {
  this.count = 0;
  this.storage = {};

  this.push = (value) => {
    this.storage[this.count] = value;
    this.count++;
  };

  this.pop = (value) => {
    if (this.count === 0) return undefined;

    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.size = () => {
    return this.count;
  };

  this.peek = () => {
    return this.storage[this.count - 1];
  };
};

// const myStack = new Stack();

// myStack.push("arsenal");
// myStack.push("real madrid");
// myStack.push("england");
// console.log(myStack.peek());
// console.log(myStack.size());
// console.log(myStack.storage);

/* Stacks 
 - no duplicates and no ordering
 - used to check for the presence of an item
*/

const mySet = function () {
  let collection = [];

  // has
  this.has = (element) => {
    return collection.indexOf(element) !== -1;
  };
  // all values
  this.values = () => {
    return collection;
  };
  // add element
  this.add = (element) => {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };
  // remove element, is delete in es6
  this.remove = (element) => {
    if (this.has(element)) {
      let index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };
  // size of collection, is a property in es6
  this.size = () => {
    return collection.length;
  };
  // union of two sets, will work as sets cant have duplicates.
  this.union = (otherSet) => {
    let unionSet = new mySet();
    let firstSet = this.values();
    let secondSet = otherSet.values();

    firstSet.forEach((e) => {
      unionSet.add(e);
    });

    secondSet.forEach((e) => {
      unionSet.add(e);
    });
    return unionSet;
  };
  // intersection of two sets
  this.intersection = (otherSet) => {
    let intersectionSet = new mySet();
    let firstSet = this.values();
    firstSet.forEach((e) => {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };
  // difference between two sets
  this.difference = (otherSet) => {
    let differenceSet = new mySet();
    let firstSet = this.values();

    firstSet.forEach((e) => {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });

    return differenceSet;
  };
  // method to test if set is a subset of another set
  this.subset = (otherSet) => {
    let firstSet = this.values();
    return firstSet.every((value) => {
      // every checks if all elements pass test below
      return otherSet.has(value);
    });
  };
};

// const setA = new mySet();
// const setB = new mySet();
// const setC = new Set();
// setC.add("arjun");
// setC.add("pasupathy");
// setC.add("gopal");
// setA.add("vikram");
// setA.add("avanthi");
// setA.add("dhiravya");
// setA.add("lalitha");
// setA.add("vinoo");
// setB.add("vikram");
// setB.add("avanthi");
// setB.add("dhiravya");
// console.log(setB.subset(setA));
// console.log(setA.intersection(setB).values());
// console.log(setA.union(setB).values());
// console.log(setA.difference(setB).values());
// setC.delete("vikram");
// console.log(setC.values());
// setC.forEach((e) => {
//   console.log(e);
// });

/* Queue/Priority Queue
 - first in first out
 - functions: print (display queue items), enqueue (add to end of the array), dequeue (remove from begining), front (display front item fo the array), size, isEmpty
 - array is a stack DS
*/

const Queue = function () {
  let collection = [];
  this.print = () => {
    console.log(collection);
  };
  this.size = () => {
    return collection.length;
  };
  this.isEmpty = () => {
    return collection.length === 0;
  };
  this.enqueue = (e) => {
    collection.push(e);
  };
  this.dequeue = (e) => {
    return collection.shift(); // pulls of the first item of the array and returns it
  };
  this.front = () => {
    return collection[0];
  };
};

// const myQueue = new Queue();
// myQueue.enqueue("a");
// myQueue.enqueue("b");
// myQueue.enqueue("c");
// myQueue.print();
// console.log(myQueue.isEmpty());
// console.log(myQueue.dequeue());
// console.log(myQueue.front());
// myQueue.print();
// console.log(myQueue.size());

const PriorityQueue = function () {
  let collection = [];
  this.print = () => {
    console.log(collection);
  };
  this.size = () => {
    return collection.length;
  };
  this.isEmpty = () => {
    return collection.length === 0;
  };
  this.enqueue = (e) => {
    if (this.isEmpty()) collection.push(e);
    else {
      var added = false;
      for (let i = 0; i < collection.length; i++) {
        if (e[1] < collection[i][1]) {
          collection.splice(i, 0, e);
          added = true;
          break;
        }
      }
      if (!added) collection.push(e);
    }
  };
  this.dequeue = (e) => {
    let value = collection.shift(); // pulls of the first item of the array and returns it
    return value[0];
  };
  this.front = () => {
    return collection[0];
  };
};

// const myPQueue = new PriorityQueue();
// myPQueue.enqueue(["vikram", 2]);
// myPQueue.enqueue(["avanthi", 1]);
// myPQueue.enqueue(["dhiravya", 3]);
// myPQueue.enqueue(["lalitha", 2]);
// myPQueue.enqueue(["vinooo", 2]);
// myPQueue.print();
// console.log(myPQueue.size());
// console.log(myPQueue.front());
// console.log(myPQueue.isEmpty());
// console.log(myPQueue.dequeue());
// myPQueue.print();

/* Binary search tree 
 - BST can only have 2 branches per node and is ordered
 - each subtree <= parent node, right subtree >= parent node
 - data points are called nodes
 - parent node is called root
 - parent -> children -> sibilings -> leaf
 - minimum height is the distance from root node to the child node that doesnt have more than 1 children
 - max height is distance from root to most bottom node.
 - difference between min height or max height is either 0 or 1
 - balanced tree is more efficient for searching.
 - tree traversal methods can be used to traverse BST and find any value.
 - depth first search will explore a given subtree as deep as possible and then move to the next subtree.
 - breadth first search will explore layer wise.
 - in order will search the tree ascending order
 - pre order will explore root nodes before leaf nodes.
 - post order will explore leaf nodes before root nodes.
 - level order will explore nodes layer wise (breadth first search).
*/

class Node {
  constructor(data, left = null, right = null) {
    this.data = data; // data to store
    this.left = left; // left node
    this.right = right; // right node
  }
}

class BST {
  constructor() {
    this.root = null; // root node
  }
  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data); // add parent node if tree is empty
      return;
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data); // if left node is null add left node
            return;
          } else if (node.left !== null) {
            return searchTree(node.left); // if left node is not null pass it as the root node to searchTree function.
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data); // if left node is null add left node
            return;
          } else if (node.right !== null) {
            return searchTree(node.right); // if left node is not null pass it as the root node to searchTree function.
          }
        } else {
          return null; // if left and right are equal dont add data to tree
        }
      };
      return searchTree(node); // run function first time
    }
  }
  findMin() {
    let current = this.root;
    while (current.left !== null) {
      // keep running till left node is null.
      current = current.left;
    }
    return current.data;
  }

  findMax() {
    let current = this.root;
    while (current.right !== null) {
      // keep running till left node is null.
      current = current.right;
    }
    return current.data;
  }

  isBalanced() {
    return this.findMinHeight() >= this.findMaxHeight() - 1;
  }

  findMinHeight(node = this.root) {
    if (node == null) return -1;
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if (left < right) return left + 1;
    else return right + 1;
  }

  findMaxHeight(node = this.root) {
    if (node == null) return -1;
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if (left > right) return left + 1;
    else return right + 1;
  }

  inOrder() {
    if (this.root == null) return null;
    else {
      var result = [];
      function traverseInOrder(node) {
        node.left && traverseInOrder(node.left);
        result.push(node.data);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
    }
  }

  preOrder() {
    if (this.root == null) return null;
    else {
      var result = [];
      function traverseInOrder(node) {
        result.push(node.data);
        node.left && traverseInOrder(node.left);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
    }
  }

  postOrder() {
    if (this.root == null) return null;
    else {
      var result = [];
      function traverseInOrder(node) {
        node.left && traverseInOrder(node.left);
        node.right && traverseInOrder(node.right);
        result.push(node.data);
      }
      traverseInOrder(this.root);
      return result;
    }
  }

  levelOrder() {
    let result = [];
    let Q = [];
    if (this.root != null) {
      Q.push(this.root);
      while (Q.length > 0) {
        let node = Q.shift(); // kicks first element from queue.
        result.push(node.data); // adds to result array.
        if (node.left != null) Q.push(node.left);
        if (node.right != null) Q.push(node.right);
      }
      return result;
    } else return null;
  }

  isPresent(data) {
    let current = this.root;
    while (current) {
      // keeps running till current node is not null
      if (data === current.data) {
        return data;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  remove(data) {
    const removeNode = function (node, data) {
      if (node === null) return;
      if (data == node.data) {
        // node has no children
        if (node.left == null && node.right == null) return null;
        // node has no left child
        if (node.left == null) return node.right;
        // node has no right child
        if (node.right == null) return node.left;
        // node has two children
        var tempNode = node.right;
        while (tempNode.left !== null) tempNode = tempNode.left;
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }
}

const myBST = new BST();

// myBST.add(9);
// myBST.add(4);
// myBST.add(3);
// myBST.add(6);
// myBST.add(5);
// myBST.add(7);
// myBST.add(17);
// myBST.add(10);
// myBST.add(22);
// myBST.add(20);
// console.log(myBST.findMax());
// console.log(myBST.findMin());
// console.log(myBST.isPresent(12));
// console.log(myBST.inOrder());
// console.log(myBST.preOrder());
// console.log(myBST.postOrder());
// console.log(myBST.levelOrder());
