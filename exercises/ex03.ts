
const reverseArray = <T>(array: T[]): T[] => {
  return array.reverse();
};

// Numbers
const numbers = [1, 2, 3, 4, 5];
console.log(reverseArray(numbers));

// Strings
const words = ["apple", "banana", "orange"];
console.log(reverseArray(words));

// Custom objects
type Person = {
  name: string;
  age: number;
};

const people: Person[] = [
  { name: "Sarai", age: 25 },
  { name: "Miu", age: 24 },
];

console.log(reverseArray(people));