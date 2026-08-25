// Define a generic class named `Stack` that implements a stack data structure
// for elements of type `T`.
// Implement methods for pushing and popping elements from the stack.
// Create test cases using various types for elements pushed and popped from the stack.

class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }
}

// Example 1: Numbers
const numberStack = new Stack<number>();

numberStack.push(10);
numberStack.push(20);
numberStack.push(30);

console.log(numberStack.pop());
console.log(numberStack.pop());

// Example 2: Strings
const stringStack = new Stack<string>();

stringStack.push("Hello");
stringStack.push("World");

console.log(stringStack.pop());
console.log(stringStack.pop());

// Example 3: Booleans
const booleanStack = new Stack<boolean>();

booleanStack.push(true);
booleanStack.push(false);

console.log(booleanStack.pop());
console.log(booleanStack.pop());