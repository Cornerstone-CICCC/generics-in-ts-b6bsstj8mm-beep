// Create a generic dictionary class named `Dictionary` that allows associating
// keys of type `K` with values of type `V`.
// Implement methods for adding, retrieving, and deleting key-value pairs.
// Demonstrate the usage of this class with different key and value types.

class Dictionary<K, V> {
  private items: Map<K, V> = new Map<K, V>();

  add(key: K, value: V): void {
    this.items.set(key, value);
  }

  get(key: K): V | undefined {
    return this.items.get(key);
  }

  delete(key: K): boolean {
    return this.items.delete(key);
  }
}

// Example 1: string keys and number values
const studentAges = new Dictionary<string, number>();

studentAges.add("Sarai", 25);
studentAges.add("Miu", 24);

console.log(studentAges.get("Sarai"));
console.log(studentAges.delete("Miu"));
console.log(studentAges.get("Miu"));

// Example 2: number keys and string values
const products = new Dictionary<number, string>();

products.add(1, "Laptop");
products.add(2, "Phone");

console.log(products.get(1));
console.log(products.get(2));

// Example 3: string keys and boolean values
const settings = new Dictionary<string, boolean>();

settings.add("darkMode", true);
settings.add("notifications", false);

console.log(settings.get("darkMode"));
console.log(settings.get("notifications"));