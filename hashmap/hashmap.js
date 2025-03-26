import { LinkedList } from "./linked-list";

class Hashmap {
  capacity = 16;
  loadFactor = 0.75;
  buckets = [];
  size = 0;

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
    const position = hash(key);
    // Overwrite value if key is the same
    if (buckets[position] === key) {
      buckets[position][1] = value;
    }
  }
}
