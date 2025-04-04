import { LinkedList } from "./linked-list.js";

class Hashmap {
  constructor(capacity = 16, loadFactor = 0.75) {
    this.capacity = capacity;
    this.loadFactor = loadFactor;

    this.buckets = Array.apply(null, Array(capacity)).map(function () {});
  }
  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    return hashCode % this.capacity;
  }
  handleLoadFactor() {
    // const entries = this.entries();

    // if (this.capacity * this.loadFactor < this.entries.length) {
    //   this.capacity = this.capacity * 2;
    //   this.buckets = Array.apply(null, Array(capacity)).map(function () {});
    //   entries.forEach((element, index) => {
    //     this.set

    //   })
    // }
    // I do not feel like doing this now, maybe tomorrow.
    return;
  }

  set(key, value) {
    // Should be [[key1,val1], [key2,val2], ...]
    // The hash returns a position inside the array.
    // I will add them as regular values for now, later on to avoid
    // collisions I'll make them Linked lists.

    const position = this.hash(key);
    const bucketAtKeyPosition = this.buckets[position];
    let wasJustAdded;

    if (
      this.buckets[position] === null ||
      this.buckets[position] === undefined
    ) {
      // If there aren't used, add the key-value pair
      // Makes a new linked list and appends the value to it, then adding it to the hashmap
      // (Bad comments ik, but i wont remember half of what these things do)

      const linkedListWithValue = new LinkedList();
      linkedListWithValue.append(value);
      const arrayToAdd = [key, linkedListWithValue];
      this.buckets[position] = arrayToAdd;
      // console.log(this.buckets[position][0]);
      // This is a way to check wether the value was just added or not.
      // If it was just added, there's no point in checking if it needs to apped to the linked list
      wasJustAdded = true;
    } else if (this.buckets[position][0] === key && wasJustAdded === undefined) {
      // Append the new value
      const linkedListFromBucket = this.buckets[position][1];
      linkedListFromBucket.append(value);
      // const linkedListIndexOfValue = linkedListFromBucket.find(value);
      // linkedListFromBucket.removeAt(linkedListIndexOfValue);
      // linkedListFromBucket.append(value);
    }
    this.handleLoadFactor();
  }

  get(key) {
    // takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null
    const position = this.hash(key);
    const bucketAtKeyPosition = this.buckets[position];

    if (bucketAtKeyPosition !== undefined) {
      return bucketAtKeyPosition[1].list;
    }
    return null;
  }
  has(key) {
    // takes a key as an argument and returns true or false based on whether or not the key is in the hash map.
    const position = this.hash(key);
    const bucketAtKeyPosition = this.buckets[position];

    if (bucketAtKeyPosition !== undefined && bucketAtKeyPosition[0] === key) {
      return true;
    }
    return false;
  }
  remove(key) {
    const position = this.hash(key);
    const bucketAtKeyPosition = this.buckets[position];
    if (bucketAtKeyPosition !== undefined) {
      // We do not use splice because that will make the array shorter.
      this.buckets[position] = undefined;
      return true;
    }
    return false;
  }
  length() {
    let count = 0;
    this.buckets.forEach((element) => {
      if (element !== undefined) {
        count += 1;
      }
    });
    return count;
  }
  clear() {
    this.buckets.forEach((element, index) => {
      if (element !== undefined) {
        this.buckets[index] = undefined;
      }
    });
  }
  keys() {
    let keysArray = [];
    this.buckets.forEach((element, index) => {
      if (element !== undefined) {
        keysArray.push(element[0]);
      }
    });
    return keysArray;
  }
  values() {
    let valuesArray = [];
    this.buckets.forEach((element, index) => {
      if (element !== undefined) {
        valuesArray.push(element[1]);
      }
    });
    return valuesArray;
  }
  entries() {
    let entriesKeyValuePairsArray = [];
    this.buckets.forEach((element, index) => {
      if (element !== undefined) {
        entriesKeyValuePairsArray.push(element);
      }
    });
    return entriesKeyValuePairsArray;
  }
}

const test = new Hashmap();
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
test.set("lion", "blue");
test.set("lion", "black");

// Should log: golden, true, false, true, Arr(with red)
console.log(
  test.get("lion"),
  test.has("lion"),
  test.has("fasfdsfaasdfsda"),
  test.has("apple"),
  test.get("apple"),
);

// Should log: true, false
// console.log(test.remove("lion"), test.remove("afsdfasdfsdffffff"));

// Should log: 9
console.log(test.length());

// Should log 0 values
// console.log(test.clear(), test.buckets);

console.log(test.keys());

console.log(test.buckets);
