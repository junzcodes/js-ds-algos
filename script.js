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

console.log(word === rword ? "palindrome" : "not a palindrome");

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

const myStack = new Stack();

myStack.push("arsenal");
myStack.push("real madrid");
myStack.push("england");
console.log(myStack.peek());
console.log(myStack.size());
console.log(myStack.storage);

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

const setA = new mySet();
const setB = new mySet();
const setC = new Set();
setC.add("arjun");
setC.add("pasupathy");
setC.add("gopal");
setA.add("vikram");
setA.add("avanthi");
setA.add("dhiravya");
setA.add("lalitha");
setA.add("vinoo");
setB.add("vikram");
setB.add("avanthi");
setB.add("dhiravya");
console.log(setB.subset(setA));
console.log(setA.intersection(setB).values());
console.log(setA.union(setB).values());
console.log(setA.difference(setB).values());
setC.delete("vikram");
console.log(setC.values());
setC.forEach((e) => {
  console.log(e);
});
