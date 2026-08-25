// Implement a generic function called `filterByType` that takes an array of type `T[]` and a type `U`.
// It should return a new array containing only elements of type `U`.
// Test the function with arrays containing various types and different target types `U`.

const filterByType = <T, U>(
  array: T[],
  type: string
): U[] => {
  return array.filter((item) => typeof item === type) as unknown as U[];
};

// Mixed array
const mixedArray: (string | number | boolean)[] = [
  "hello",
  10,
  true,
  "world",
  20,
  false,
];

// Filter strings
console.log(
  filterByType<typeof mixedArray[number], string>(
    mixedArray,
    "string"
  )
);

// Filter numbers
console.log(
  filterByType<typeof mixedArray[number], number>(
    mixedArray,
    "number"
  )
);

// Filter booleans
console.log(
  filterByType<typeof mixedArray[number], boolean>(
    mixedArray,
    "boolean"
  )
);