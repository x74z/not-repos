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

  set(key, value) {
    // Should be [[key1,val1], [key2,val2], ...]
    // The hash returns a position inside the array.
    // I will add them as regular values for now, later on to avoid
    // collisions I'll make them Linked lists.

    const position = this.hash(key);
    const bucketAtKeyPosition = this.buckets[position];

    if (this.buckets[position] !== null) {
      // If there aren't used, add the key-value pair
      // Makes a new linked list and appends the value to it, then adding it to the hashmap
      // (Bad comments ik, but i wont remember half of what these things do)

      const linkedListWithValue = new LinkedList();
      linkedListWithValue.append(value);
      const arrayToAdd = [key, linkedListWithValue];
      this.buckets[position] = arrayToAdd;
    } else if (this.buckets[position][0] === key) {
      // Overwrite value if key is the same
      // Remove the value from the linked list using its index and append the new value.

      const linkedListFromBucket = bucketAtKeyPosition[1];
      const linkedListIndexOfValue = linkedListFromBucket.find(value);
      linkedListFromBucket.removeAt(linkedListIndexOfValue);
      linkedListFromBucket.append(value);
    }
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
  // NEXT TODO: actually use linked lists.
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

// Should log: golden, true, false, true, Arr(with red)
console.log(
  test.get("lion"),
  test.has("lion"),
  test.has("fasfdsfaasdfsda"),
  test.has("apple"),
  test.get("apple"),
);
