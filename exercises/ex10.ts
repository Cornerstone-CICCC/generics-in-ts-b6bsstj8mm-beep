// Develop a generic function named `customMap` that takes an array of type T[]
// and a mapping function mapper: (item: T) => U,
// and returns a new array of type U[].
// Test the function with arrays of different types and custom mapping functions.

const customMap = <T, U>(
  array: T[],
  mapper: (item: T) => U
): U[] => {
  const result: U[] = [];

  for (const item of array) {
    result.push(mapper(item));
  }

  return result;
};

// Example 1: Numbers to numbers
const numbersToDouble = customMap([1, 2, 3, 4], (number) => number * 2);

console.log(numbersToDouble);

// Example 2: Strings to numbers
const wordsToLength = customMap(
  ["apple", "banana", "orange"],
  (word) => word.length
);

console.log(wordsToLength);

// Example 3: Numbers to strings
const numbersToStrings = customMap(
  [10, 20, 30],
  (number) => `Number: ${number}`
);

console.log(numbersToStrings);