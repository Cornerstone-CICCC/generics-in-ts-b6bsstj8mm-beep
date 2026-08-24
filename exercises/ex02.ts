function identity<T>(value: T): T {
  return value;
}

// Test with a number
const numberResult = identity<number>(25);
console.log("Number:", numberResult);

// Test with a string
const stringResult = identity<string>("Hello TypeScript");
console.log("String:", stringResult);

// Test with a custom object
const personResult = identity({
  name: "Sarai",
  role: "Student",
});

console.log("Object:", personResult);