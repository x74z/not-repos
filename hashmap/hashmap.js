import { LinkedList } from "./linked-list";

class Hashmap {
  constructor(capacity = 16, loadFactor = 0.75) {
    this.capacity = capacity;
    this.loadFactor = loadFactor;

    this.buckets = Array.apply(null, Array(capacity)).map(function() { });
  }
  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    return hashCode;
  }
  set(key, value) {
    // Should be [[key1,val1], [key2,val2], ...]
    // The hash returns a position inside the array.
    // I will add them as regular values for now, later on to avoid
    // collisions I'll make them Linked lists.
    const position = hash(key);

    if (buckets[position] !== key) {
      // If there aren't used, add the key-value pair
      const arrayToAdd = [key, value];
      buckets[position] = arrayToAdd;
    }
    if (buckets[position] === key) {
      // Overwrite value if key is the same
      buckets[position][1] = value;
    }
  }
}

testyHashmap = new Hashmap();
