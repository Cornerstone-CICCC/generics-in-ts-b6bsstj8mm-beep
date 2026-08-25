"use strict";
// Create a generic dictionary class named `Dictionary` that allows associating
// keys of type `K` with values of type `V`.
// Implement methods for adding, retrieving, and deleting key-value pairs.
// Demonstrate the usage of this class with different key and value types.
Object.defineProperty(exports, "__esModule", { value: true });
class Dictionary {
    items = new Map();
    add(key, value) {
        this.items.set(key, value);
    }
    get(key) {
        return this.items.get(key);
    }
    delete(key) {
        return this.items.delete(key);
    }
}
// Example 1: string keys and number values
const studentAges = new Dictionary();
studentAges.add("Sarai", 25);
studentAges.add("Miu", 24);
console.log(studentAges.get("Sarai"));
console.log(studentAges.delete("Miu"));
console.log(studentAges.get("Miu"));
// Example 2: number keys and string values
const products = new Dictionary();
products.add(1, "Laptop");
products.add(2, "Phone");
console.log(products.get(1));
console.log(products.get(2));
// Example 3: string keys and boolean values
const settings = new Dictionary();
settings.add("darkMode", true);
settings.add("notifications", false);
console.log(settings.get("darkMode"));
console.log(settings.get("notifications"));
//# sourceMappingURL=ex08.js.map